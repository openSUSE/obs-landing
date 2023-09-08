---
layout: post
title: Request Page Redesign - Build Results Summary Gets Into Shape
category: development
---

Lately, we have been working again on the request workflow redesign.
We have introduced the build results summary of a request and improved the information displayed in the Mentioned Issues section.
All these improvements will help you focus on what matters and better digest all the information you receive when you review or visit a request.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}


### Build Results Summary of a Request

A submit request on OBS can be about one package that builds for one repository and one architecture like [boo#1104001](https://build.opensuse.org/request/show/1104001).
Or it can be about 142 packages that build for many repositories that have multiple architectures, like [boo#1109684](https://build.opensuse.org/request/show/1109684).
Showing what is relevant at a glance is easy for the former and more complicated for the latter.
There is no "one size that fits all" solution.
That is why we have opted for a more flexible approach.

You still can see the detailed view in the Build Results tab but, from now on, you can also see a summary of the build results in the very first Conversation tab.
Depending on the size of the build results of your request, you will see either a simplified or a more condensed view of the same summary.
And this view will be automatically chosen for you!

Here you have examples of both views:

<figure>
  <img src="/images/posts/sprint-148-build-results-summary-simplified.png" alt="A screenshot of the reworked build results summary of a request, simplified view" />
  <figcaption>Reworked build results summary of a request, simplified view</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint-148-build-results-summary-chart.png" alt="A screenshot of the reworked build results summary of a request, chart view" />
  <figcaption>Reworked build results summary of a request, chart view</figcaption>
</figure>

These build results summary addition is just the beginning.
In our roadmap we have another point: to improve the detailed view of the build results for those cases where the summary and the raw list of build results aren't enough.
So please, don't hesitate providing us feedback about the new views introduced and stay tuned for upcoming updates!


### Show Status of Mentioned Issues of a Request

Last but not least, we added another tiny improvement inside the Mentioned Issues tab: you will now see their status.

<figure>
  <img src="/images/posts/sprint-148-status-mentioned-issues.png" alt="A screenshot of the status of mentioned issues of a request" />
  <figcaption>Status of mentioned issues of a request</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
