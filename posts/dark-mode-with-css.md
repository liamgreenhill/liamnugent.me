---
title: Dark Mode with CSS
description: Using a CSS media query to enable styles that are better suited to Dark Mode.
date: 2020-04-25
tags:
  - #TIL
  - css
  - ux design
layout: layouts/post.njk
---

The media query is simple enough. Here’s an example with a super-basic reversal of white text on a black background.

	@media (prefers-color-scheme: dark) {
	  /* Dark mode styles go here  */
	  html {
	 	background-color: black;
		color: white;
	  }
	}


That's enough to get you out of the blocks but there's a little more to it than you might first think. For starters, here are a few things that I caught...

- making sure your dark mode colour scheme stays high-contrast to keep it easy to read for people with sub-optimal vision
- checking your link styles, visited link styles, code styles, quote styles and so on to make sure they are legible in dark mode
- checking for any dark border styles or background images and reversing them. I am using a few black borders which disappeared into the black background in dark mode.

And that's just scratching the surface. For those who want to dig deeper, I'd recommend these references.

But most importantly, [you _must_ do this](https://twitter.com/beep/status/1239935231479734274) when you are testing your design. :¬)

## Designing for dark mode
- https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode
- https://css-tricks.com/dark-modes-with-css/
