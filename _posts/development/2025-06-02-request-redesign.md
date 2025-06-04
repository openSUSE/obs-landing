---
layout: post
title:  Improvements To RPM Lint Results and Reviewing Submit Requests
category: development
---

In this update, we’re introducing two improvements that make reviewing RPM lint results and Submit Requests easier: a dedicated view for RPM lint results, and a clearer, more helpful display of build statuses in Submit Requests.

{% include partials/_series-of-posts-about-request-redesign.md %}

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

## A New Place For RPM Lints

Previously we were showing the RPM lint results in a small box next to the build results, which had the unfortunate outcome of cramming dense logs into a very small area, and as a tab in the Submit Request, with no connection to a specific build result.

We now show the RPM lint results on a dedicated page under a new 'RPM Lint' tab within the package show page. This has the benefit of having a whole page to render the RPM lint. Then, on a Submit Request, we link to this tab from each specific build result, sending you directly to the relevant RPM Lint. No need to find your way through the repository and architecture dropdown selectors.

<figure>
  <img src="/images/posts/sprint-190/2025-05-28-a-new-place-for-rpm-lint.png" alt="A new place for RPM lint">
  <figcaption>A new place for RPM lint</figcaption>
</figure>

## Build or Not to Build? That's the Question.

To find out faster if a Submit Request builds or not we've changed how we render the build results when a Submit Request is open. The first build results that you'll find, are the ones from the repositories of the target package, because if that's not building it's very likely the Submit Request will not be accepted, right?

<figure>
  <img src="/images/posts/sprint-190/2025-06-02-target-project-repositories.png" alt="Target project's repositories">
  <figcaption>Target project's repositories</figcaption>
</figure>

<figure>
  <img src="/images/posts/sprint-190/2025-06-02-sorted-build-results.png" alt="Results for target project's repositories appear first">
  <figcaption>Results for target project's repositories appear first</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
