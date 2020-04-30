---
title: Dark Mode with CSS
description: Using a CSS media query to enable styles that are better suited to Dark Mode.
date: 2020-04-25
tags:
  - progressive enhancement
  - accessibility
  - ux design
layout: layouts/post.njk
---

Users of the latest operating systems on Windows, Mac OSX, Android and iOS now have the option to show dark themed user interfaces.

As part of the move towards reducing the negative impact of having your phone in your face at 2 am, they can automatically switch to colour schemes that are easier on the eye for most people. In turn, this can be a boon for people with photo-sensitive conditions.

Eric Bailey at the A11Y project has a good post on [Operating System and Browser Accessibility Display Modes](https://a11yproject.com/posts/operating-system-and-browser-accessibility-display-modes/) that goes into a bit of depth. It also gives advice on how to switch dark mode on or off for different devices and operating systems.

I thought about whether or not to add one to this site, in line with my philosophy to [keep everything as small as possible](/posts/how-this-site-is-coded/) in terms of page weight.

Implementing a dark theme for a website can be achieved with one media query in a CSS file and a handful of styles. This meets my cost/benefit analysis of page-weight versus user benefit so I went for it.

The media query is simple enough. Here’s an example with a super-basic reversal of white text on a black background.

	@media (prefers-color-scheme: dark) {
	  /* Dark mode styles go here  */
	  html {
	 	background-color: black;
		color: white;
	  }
	}


That's enough to get you out of the blocks but there's a little more to it than you might first think. For starters, here are a few things that I caught...

- making sure your dark mode colour scheme stays high-contrast to keep it easy to read for people with sub-optimal vision.
- checking your link styles, visited link styles, code styles, quote styles and so on to make sure they are legible in dark mode.
- checking for any dark border styles or background images and reversing them. I am using a few black borders which disappeared into the black background in dark mode.

And that's just scratching the surface. As Darth Vader said, "If only you knew the power of the Dark Side!".

There's a _lot_ more could be done.

For example, I've seen some people (e.g. [Ethan Marcotte](https://ethanmarcotte.com/)) implement dark mode toggle switches in the footer of their site. It looks like he does it in a nice progressively enhanced way. If you don't have JavaScript in your browser, the toggle doesn't appear but if you can support it, the toggle appears and you can choose to use it.

For me, for now, this is as far I'll go. I'm going to try to stick to [my plan to not use any JavaScript](/posts/how-this-site-is-coded/) at all.

For users on this site, dark mode is a silent, progressive enhancement.

If your operating system supports dark mode, and your operating system is in dark mode, then this website will be too. Otherwise, it defaults to the light theme.

For those who want to dig deeper, I'd recommend the references below.

But most importantly, [you _must_ do this](https://twitter.com/beep/status/1239935231479734274) when you are testing your design. :¬)

## References
- https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode
- https://css-tricks.com/dark-modes-with-css/
