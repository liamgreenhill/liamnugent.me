---
title: The Auditors Are In
description: A bit of early spring cleaning.
date: 2023-02-17
tags:
  - web standards
  - accessibility
  - performance
layout: layouts/post.njk
---

Recently, I have been considering moving to a new role at work that is 100% focussed on accessibility. This led me to having a look at my own site and running the Google Lighthouse audit to check I was practising what I preach.

When I first published this website, I was very pleased that I was clocking 100/100 [across the board](https://twitter.com/liamjnugent/status/1246061994169466881). But... entropy. Which meant that without anything consciously being changed by me, the scores for this site had dropped.

Performance had dropped due to my use of another font for headings which was blocking the first contentful paint. I was pleased to sort that by using the preload tips in this article: https://simonhearne.com/2021/layout-shifts-webfonts/

And my introduction of a search form was a bit slapdash. I forgot to use a label on the search input which is a basic accessibility mistake. Somewhere on the way, I had used some text that wasn’t high enough contrast with the background too. Both of which were simple fixes.

Pleased to report that the scores are back up to 100! https://twitter.com/liamjnugent/status/1626636214139748366


