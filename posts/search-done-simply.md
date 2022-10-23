---
title: Search done simply
description: I wanted to add a means to search the contents of the site in context but it had to be lean.
date: 2022-10-23
tags:
  - search
  - progressive enhancement
layout: layouts/post.njk
---

## The goal
To add a search function to this website as simply as possible. And to keep it in line with [my ascetic ideals](https://liamnugent.me/posts/how-this-site-is-coded/).

## Research and execution!
After a bit of judicious Googling on the subject of how to build a search function on a static site, I found an article by Raymond Camden called [Adding Search to your Eleventy Static Site with Lunr](https://www.raymondcamden.com/2019/10/20/adding-search-to-your-eleventy-static-site-with-lunr).

His post talks about the wider discussion on how to create ‘dynamic’ features in a ‘static’ world. Remember, this website isn’t connected to a database. I can’t dynmically query the content within a database and return a set of results. In very broad strokes, I would have to create an index of all the posts at build time and then run a search query against that index.

That opens the question of forcing the user to download the entire index in order to run the query. It seems wasteful to force every user of every page to download an index of all the content in the background just in case they need it for a search query.

All of this would, of course, require some interactivity on the screen and therefore some JavaScript. For regualar readers, you will know that I have a bigger plan to avoid client-side JavaScript for as long as possible.

_As I get older, I’m less militant about this idea and I am warming to the possibilty of using some as a progressive enhancement. Perhaps search is the prime candidate to be enhanced._

This was all starting to feel like a bit of a dead end.

However, one sentence jumped out at me:
> For my blog here, I make use of Google’s Custom Search Engine feature. This basically lets me offload search to Google, who I hear knows a few things about search.

The germ of an idea formed whereby I could maybe capture a search query on my site but use Google to get the results for me. The trade-off would be sending a user to a Google search results screen. Given that most of the searches will probably be done by me looking for my own content, I could live with that!

### Sending a search query to Google
It was back to basics here. I know from observing the URL when I do a Google search that the URL follows the pattern `https://www.google.com/search?q=query+goes+here`.

If I want to limit the scope of a search to a particular website, I can use a [search operator](https://support.google.com/websearch/answer/2466433) to do that. I can punch in `site:liamnugent.me` in the search box and then add my query after that and hit submit. Google will return matching search results only from within the website https://liamnugent.me.

Looking up at the URL will show me something in the pattern `https://www.google.co.uk/search?q=site%3Aliamnugent.me&q=query+goes+here`.

I can use an HTML form to capture form data to fashion a URL in my desired pattern and submit that URL to Google.


### Building the form
The root of the URL is: `https://www.google.co.uk/search` which will be the `action` attribute of the form.

I can use the [GET method](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-method) to append the form data with a `?` separator.

The data I want to append is:
- `q=site:liamnugent.me` << this will be fixed and the user doesn’t need to see this so I’ll use a hidden form input
- `q=query+goes+here` << this will be whatever query the user submits

Here’s my code for the form:

```
  <form action="https://www.google.co.uk/search" method="get">
    <input type="hidden" name="q" value="site:liamnugent.me"> 
      <fieldset>      
        <input type="text" name="q">
        <input type="submit" value="Search this site">
      </fieldset>
  </form>
```

Bear in mind that the form will [build a valid URL](https://developers.google.com/maps/url-encoding) before submitting it to Google.

## Summing up
This works well for me just now. As I mentioned above, this is a candidate that is ripe for progressive enhancement. Although, I’m going to wait to see how often I use the search before I make any moves.

## References
- https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data
- https://ethanmarcotte.com/ – uses something similar but uses DuckDuckGo search engine rather than Google.
- https://fuzzylogic.me/ – my brilliant old pal, who does something similar as the foundation for a progressively enhanced experience, but he layers on a super-nice automatic search after you type 3 characters... I may well be tapping him up for some knowledge if I decide I need to improve my search.



