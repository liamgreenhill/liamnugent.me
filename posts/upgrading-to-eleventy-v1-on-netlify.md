---
title: Upgrading to eleventy v1 on netlify
description: How I fixed an issue where the netlify build fails with exit code 1 and 2 on an Eleventy site which builds locally
date: 2022-10-20
tags:
  - eleventy
  - netlify
  - error
layout: layouts/post.njk
---
This is the obligatory post about how, after neglecting my site for a while, it took me 4 hrs to get back to position where I could write a post!

Very briefly, this site is build using the [eleventy](https://www.11ty.dev/) static site generator. It is hosted on [netlify](https://www.netlify.com/). It was originally built with an early version of 11ty and has been running for a few years with me infrequently adding posts. In the time since I last posted, 11ty has released a major version and the dreaded node has been updated several times.

So, recently, when I tried to publish a new post, I ran into a hot mess of errors. Most of which were easily understood and resolved so I won’t go into them here. However there was one mystery—even though my site was back up and running on my local server, it failed to build when I tried to deploy to production.

The build error I encountered on the netlify web UI was, `Failed during stage 'building site': Build script returned non-zero exit code: 2 (https://ntl.fyi/exit-code-2) `

The key error message was:
`Eleventy requires Node 12. You will need to upgrade Node to use Eleventy!`

This was in conflict with an earlier line in the debug output that reported that the build script was using an earlier version of node. `Now using node v10.24.1 (npm v6.14.12)` appeared around line 21 of the deploy log on netlify’s web UI.

So my fix was to update the version of node that netlify would use to deploy my site.

First of all, I updated node locally and tried pushing that up but this had no impact. (I think I followed the original set up advice to ignore my node folder so I should have known this was a red herring.)

The solution was to insert a line to my `netlify.toml` file to set an [environment variable](https://docs.netlify.com/configure-builds/environment-variables/)

I added the following line at the end of my `netlify.toml` file:
`environment = { NODE_VERSION = "14.15.3" }`

So my entire netlify.toml file now looks like this:
```
[build]
  publish = "_site"
  command = "DEBUG=* eleventy"
  environment = { NODE_VERSION = "14.15.3" }
```

Setting the environment variable did the trick and the deployment ran successfully.

The show is back on the road!