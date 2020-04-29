---
title: How the site is coded
description: For those interested in how the site was put together and why it looks like it does. Here goes…
date: 2020-04-03
tags:
  - accessibility
  - performance
  - information architecture
layout: layouts/post.njk
---

This website has been hand-coded starting from HTML5 Boilerplate. It uses 11ty to produce static versions of the html pages before they are uploaded to the web server.

I’m trying to write semantic HTML and let the browser defaults do as much of the work in displaying the content as I can.

It’s a bit of an experiment where I’m trying to make this as lightweight and as accessible as possible. 

There’s no JavaScript being used at all.

CSS styles have been kept to an absolute minimum.

I'm setting all the type in Georgia because it's a system font on the majority of devices so there's no need to download font files for most people. And [it looks great](https://twitter.com/jensimmons/status/1250131896320888832).

Navigation is deliberately near the bottom of the page to (i) get it out of the way of the actual content on the page and (ii) make it easier to tap with your thumb when you’re holding a phone.

That means that there is no header with a logo or top navigation. It’s a controversial call and I may change my mind at later date and add one. But for now, my opinion is that the the title of the article is the reason you’re here. Seeing that is more important than my branding, such as it is.

The benefit of going with this is that I don’t need to add in a ‘skip to content’ link for screen readers and then hide it for most other users. So, a few bytes are saved there. You see where I’m going with this?


There are a few reasons for this:

1. I’m curious to try it and see how far I can take it. I'm already learning a lot along the way.

2. I’m conscious that building websites can get unnecessarily complicated very quickly. It is very easy to find yourself fighting against the browser or the environment so, in this case, I’m doing it Judo-style. I intend to harness all the goodness that browser builders give you out-of-the-box for speed, layout and accessibility, and throw it all right back at you. Haaa-dooo-ken!

3. It would be easy to use a dynamic CMS or framework. But that usually comes bundled with kilobytes or even megabytes of unnecessary code. So every time someone looks at my site that would mean that more energy has been wasted moving lots of unused code around the internet to get it to your screen. This is my small act of protest to help reduce digital waste.


As of day one, hour zero, it’s already paying dividends. With no dedicated optimisation work, the site [scores a full 100](https://twitter.com/liamjnugent/status/1246061994169466881?s=21) on every count in a Google Lighthouse Audit.

