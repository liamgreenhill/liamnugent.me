---
title: Upgrading to eleventy v1 on netlify
description: Build fails with exit code 1 and 2 on an Eleventy site which builds locally
date: 2022-10-20
tags:
  - eleventy
  - netlify
  - error
layout: layouts/post.njk
---
The obligatory post about how, after neglecting my eleventy site for a while, it took me 4 hrs to get back to position where I could write a post!

The build error I encountered was, “Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2) ”

The key error message was:
Eleventy requires Node 12. You will need to upgrade Node to use Eleventy!

Which was in conflict with the earlier report that the build script was using an earlier version of node. See "Now using node v10.24.1 (npm v6.14.12)" at line 21 of the deploy log.

I updated node locally and tried pushing that up but this had no impact.

The solution was to insert a line to my netlify.toml file to set an environment variable: https://docs.netlify.com/configure-builds/environment-variables/

Code I added was:
environment = { NODE_VERSION = "14.15.3" }

So my entire netlify.toml file now looks like this:
[build]
  publish = "_site"
  command = "DEBUG=* eleventy"
  environment = { NODE_VERSION = "14.15.3" }


Doing this got me back on track and able to build on production again.

The show is back on the road!