---
layout: post
title:  Better 
category: development
---

TODO: Come up with an introduction

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}

## Find Faster If A Submit Request Builds Or Not

We've changed how we render the build results when a Submit Request is open. We now show the build results of the repositories of the target package first because that's an important bit in order to assess that your Submit Request will likely land or not.

TODO: Add some screenshot

## A New Place For RPM Lints

Previously we were showing the RPM lint results in two places:
- As a small box next to the build results, which had the unfortunate outcome of cramming dense logs into a very small area.
- As a tab in the Submit Request, with no connection to a specific build result.

Now, we show the RPM lint results in its own page under a new tab called RPM Lint in the package show page. This has the benefit of having a whole page to render the RPM lint.

Then on a Submit Request, we link to this tab from each specific build result, sending you directly to the relevant RPM Lint. No need to find your way through the repository and architecture dropdown selectors.

TODO: Here goes another screenshot

{% include partials/_how-to-give-us-feedback.md %}
