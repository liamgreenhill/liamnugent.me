const fs = require("fs");
const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require("@11ty/eleventy-navigation");
const CleanCSS = require("clean-css");

// Dates are formatted by hand rather than through Intl, which renders
// September as "Sept" under en-GB and would silently change every post date.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const pad = n => String(n).padStart(2, "0");


module.exports = function(eleventyConfig) {
  

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom", // or "rss", "json"
    outputPath: "/feed.xml",
    collection: {
      name: "posts", // iterate over `collections.posts`
      limit: 10,     // 0 means no limit
    },
    metadata: {
      language: "en",
      title: "Liam Nugent’s website",
      subtitle: "A place where Liam Nugent writes about the web, software product management, and other related ideas.",
      base: "https://liamnugent.me/",
      author: {
        name: "Liam Nugent",
        email: "liam.nugent@hey.com", // Optional
      }
    }
  });

  eleventyConfig.addPlugin(pluginNavigation);

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return `${pad(dateObj.getUTCDate())} ${MONTHS[dateObj.getUTCMonth()]} ${dateObj.getUTCFullYear()}`;
  });


  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter('htmlDateString', (dateObj) => {
    return `${dateObj.getUTCFullYear()}-${pad(dateObj.getUTCMonth() + 1)}-${pad(dateObj.getUTCDate())}`;
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if( n < 0 ) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  /* CSS Minify */
  // Every page inlines the same stylesheet, so this ran 81 times per build on
  // identical input and accounted for ~45% of total build time. Cache on the
  // input string: one minify per distinct stylesheet, per build.
  const cssCache = new Map();
  eleventyConfig.addFilter("cssmin", function(code) {
    if (!cssCache.has(code)) {
      cssCache.set(code, new CleanCSS({}).minify(code).styles);
    }
    return cssCache.get(code);
  });

  // Anchor links on h2s, so any section of a post can be linked to directly.
  // Hand-rolled rather than pulling in markdown-it-anchor: this is the whole
  // feature, and the dependency list stays where it is.
  const slugify = text => text
    .toLowerCase()
    .replace(/[’'"“”]/g, "")   // quotes disappear: "o’clock" -> "oclock"
    .replace(/[^a-z0-9]+/g, "-")  // everything else becomes a separator
    .replace(/^-+|-+$/g, "");

  eleventyConfig.amendLibrary("md", md => {
    md.core.ruler.push("heading_anchors", state => {
      const used = new Set();

      state.tokens.forEach((token, i) => {
        if (token.type !== "heading_open" || token.tag !== "h2") {
          return;
        }

        const inline = state.tokens[i + 1];
        // Read the child tokens rather than inline.content, so a heading with
        // emphasis or a link in it slugs from its words, not its markdown.
        const text = inline.children
          .filter(child => child.type === "text" || child.type === "code_inline")
          .map(child => child.content)
          .join("")
          .trim();

        const base = slugify(text) || `section-${used.size + 1}`;
        // Two headings worded the same way would otherwise share an id, and the
        // browser would always jump to the first of them.
        let slug = base;
        for (let n = 2; used.has(slug); n++) {
          slug = `${base}-${n}`;
        }
        used.add(slug);

        token.attrSet("id", slug);

        const anchor = new state.Token("html_inline", "", 0);
        anchor.content = `<a class="direct-link" href="#${slug}" aria-label="Link to this section: ${md.utils.escapeHtml(text)}">#</a>`;
        inline.children.unshift(anchor);
      });
    });
  });

  eleventyConfig.addCollection("tagList", require("./_11ty/getTagList"));
  eleventyConfig.addPassthroughCopy("_includes/css");
  eleventyConfig.addPassthroughCopy("browserconfig.xml");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("icon.png");
  eleventyConfig.addPassthroughCopy("robots.txt");
  //eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("tile.png");
  eleventyConfig.addPassthroughCopy("tile-wide.png");

  // Browsersync Overrides
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync('_site/404.html');

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
    ui: false,
    ghostMode: false
  });

  return {
    templateFormats: [
      "md",
      "njk",
      "html",
      "liquid",
      "jpg"
    ],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // Best paired with the `url` filter: https://www.11ty.io/docs/filters/url/

    // You can also pass this in on the command line using `--pathprefix`
    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",

    // These are all optional, defaults are shown:
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};
