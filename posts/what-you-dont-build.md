---
title: The most important product decision is what you don’t build
description: Ask a team what they shipped this year and you’ll get a list. Ask what they killed and the room goes quiet.
date: 2026-09-14
tags:
  - product management
  - strategy
  - Digital waste
layout: layouts/post.njk
---

There are two things I’ve tried to take a hard pass on when working on consumer-facing financial services apps.

A “document hub”.

And a “notifications centre”.

You can picture both without any help from me. To my mind they’re both examples of letting the organisation off the hook at the expense of the user. Although it’s fair to say that plenty of users have now been trained to expect these things, and to know roughly how they work — even though they’re crap.

The problem underneath is real enough. The business has legacy systems that produce PDFs — letters, statements, that sort of thing — because originally they’d have been sent out in the post. Compliance experts will also talk to you about “persistent communications channels”. So you need somewhere in the app to put all of that.

The lazy solution is a document hub. A list of files you can select and open.

Seems simple.

Except every stakeholder involved wants to do a Columbo and add just one more thing. By the end you’ve essentially rebuilt Google Drive, with tagging, archiving, printing and sharing across several channels, each with its own quirks. Not to mention clearing the security and authentication hurdles so the right person sees only the right documents. And so on, and so on.

And that is *just to build the thing*.

Never mind the overhead you’ve created to maintain it, month after month, year after year, as each iOS release cycle comes round and some foible you were relying on to prop up a piece of functionality gets removed unilaterally by Apple. Or Google, or Microsoft, or Amazon.

The notifications centre is the same story with a different opening line. A stakeholder asks whether we could just have a bell icon with a little red dot in the top right corner of the screen. Give it a few months and you’re building a bad Gmail clone.

## Showing people the bill

I’ve come up against both of these several times now. It is not easy to get people to let go of a mental model they’re holding in their head, particularly when a customer focus group goes some way to validating it. The cliched old Henry Ford line comes to mind — if you’d asked people what they wanted, they’d have said faster horses, not a motor car.

What I’ve found actually works is illustrating the running costs. Not the build cost. The running costs, laid out over years. That tends to bring people back from the brink.

But killing the platform doesn’t make the original problem go away. How do we communicate with our customers in a way that suits them and meets the legal obligations on our side?

The answer I’ve come back to every time is to take each use case on its own merits. Be rigorous about what actually needs to be said, and when. Then be ruthless about whether it needs a whole platform built first. It’s the same test I keep applying when [picking the right problems to solve](https://liamnugent.me/posts/picking-the-right-problems/) — does it make the boat go faster?

Most of the time — not always, to be fair — the answer is to use something simple, or something that already exists, even if it isn’t perfect.

Resist, resist, resist the temptation to build a one-size-fits-all.

I’ve even seen the notifications centre idea get built, and then the intent of the original message couldn’t be met by the thing that had been built to carry it.

So the message comes in two parts. Be extremely choosy about what you let be added to your system. And be militant about taking things out.

## Nobody gets promoted for deleting things

The second part is much harder than the first, and it isn’t simply cowardice. [Gerry McGovern](https://gerrymcgovern.com/what-are-you-going-to-remove-today/) has been saying this for a long time:

> Those who create and launch are the people who are rewarded and looked up to because we still have a culture that rewards the production of things over everything else. To review, to maintain, to remove—this is all seen as lesser work.

His Top Tasks work found that stripping roughly 80 to 90 per cent of a site’s content made companies sell more, cut their support calls and helped people find what they were after faster. Removal as the improvement itself, not the tidying up afterwards. I’ve made the small-scale version of this argument before, about [deleting the FAQ page](https://liamnugent.me/posts/the-question-about-frequently-asked-questions/).

And it runs deeper than the org chart. [Klotz and colleagues, writing in Nature](https://www.nature.com/articles/s41586-021-03380-y), ran eight experiments and found that people systematically overlook subtractive changes, even when removing was obviously the better move. Additive ideas arrive quickly and cheaply. Subtractive ones cost real cognitive effort. So we are hard wired for this.

Which means spending the brain power to work out what success genuinely is. And success is usually something out there in the world of the customer, rather than something in here, in the world of the organisation.

## But building is nearly free now, isn’t it?

DHH is [thoroughly delighted](https://world.hey.com/dhh/endless-execution-4157e065) about endless execution — in the age of agents, every idea, every hunch and every experiment is within immediate reach.

I think it’s easy to misunderstand that as an argument for making more stuff all the time.

Using agents to do the pruning seems like the smarter move to me. To do the maintenance. To remove things judiciously, and more carefully than anyone is going to manage by hand.

Stewart Brand’s [Maintenance of Everything](https://press.stripe.com/maintenance-part-one) sits on the paradox that maintenance is absolutely necessary and also entirely optional.

Optional until it’s essential, more like.

## The elephant in the rollneck

The elephant in the room, wearing a custom-made Issey Miyake black rollneck, is of course Steve Jobs’ 1997 matrix. Two consumer products, two pro products, and one stellar product in each box.

<figure style="margin: 2rem 0; text-align: center;">
<svg viewBox="0 0 400 300" role="img" aria-labelledby="matrix-title matrix-desc" style="width: 100%; height: auto; max-width: 400px;">
  <title id="matrix-title">Steve Jobs’ 1997 product matrix</title>
  <desc id="matrix-desc">A two-by-two grid. The columns are Consumer and Pro, the rows are Desktop and Portable. Consumer Desktop is the iMac, Pro Desktop is the Power Macintosh, Consumer Portable is the iBook, and Pro Portable is the PowerBook.</desc>
  <g fill="none" stroke="currentColor" stroke-width="1.5">
    <rect x="70" y="40" width="310" height="230"/>
    <line x1="225" y1="40" x2="225" y2="270"/>
    <line x1="70" y1="155" x2="380" y2="155"/>
  </g>
  <g fill="currentColor" font-family="Georgia, serif" font-size="15" text-anchor="middle">
    <text x="147" y="29" font-style="italic">Consumer</text>
    <text x="302" y="29" font-style="italic">Pro</text>
    <text x="147" y="103">iMac</text>
    <text x="302" y="94">Power</text>
    <text x="302" y="113">Macintosh</text>
    <text x="147" y="218">iBook</text>
    <text x="302" y="218">PowerBook</text>
    <text transform="translate(52 97) rotate(-90)" font-style="italic">Desktop</text>
    <text transform="translate(52 212) rotate(-90)" font-style="italic">Portable</text>
  </g>
</svg>
<figcaption><em>Four boxes. One product in each. Everything else cancelled.</em></figcaption>
</figure>

He then shut down all the other product lines people were working on. That pooled the engineering talent instead of spreading it thin. It was a brave move, and it did the trick.

Apple are up to something like 52 different products and services at the last count, so the end game was never to only sell four things. The point was to focus the organisation on the most important ones, so they didn’t misspend the opportunity cost that allowed them to become one of the biggest corporations in the world.

One thing at a time. *Une chose à la fois.*

(I’d have written a shorter post, but I couldn’t work out what to take out.)
