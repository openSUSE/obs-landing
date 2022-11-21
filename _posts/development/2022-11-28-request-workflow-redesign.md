---
layout: post
title: Request Page Redesign - Build Results with a Pinch of Salt
category: development
---

Once again, we worked on the request workflow.
This time we have delivered a renovated interface to show the build results, ready to be consumed by the most demanding palates.
Besides that, we have cooked up a couple of additions arranged on several tabs for the hungriest.
Just keep reading, help yourself and enjoy.

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

{% include partials/_series-of-posts-about-request-redesign.md %}

### Build Results Tab

We have improved the design to make it easier to perceive the status of your builds.
Essentially, we have compacted the information we display, and made the most of the horizontal space.
Moreover, we have represented the wide variety of build results' statuses using only 4 different colours, applied to the icon and the left line:
* Green: for successful build results,
* Red: for build results that are in an unsuccessful final status,
* Yellow: for builds which are not in a final status yet,
* Grey: for excluded or disabled builds.

<figure>
  <img src="/images/posts/sprint_130_new_build_results_design.png" alt="A screenshot of the New Build Results Design" />
  <figcaption>New Build Results Design</figcaption>
</figure>

### Conversation Tab
#### Maintainers Section

We have brought back the maintainers section.
The project and package maintainers are displayed under the Reviews section.

<figure>
  <img src="/images/posts/sprint_130_show_maintainers.png" alt="A screenshot of Maintainers in Request Conversation" />
  <figcaption>Maintainers in Request Conversation</figcaption>
</figure>

#### Auto Acceptance

Now you can easily detect when a request can be automatically accepted.

<figure>
  <img src="/images/posts/sprint_130_auto_accept.png" alt="A screenshot of the Auto Acceptance" />
  <figcaption>Auto Acceptance</figcaption>
</figure>

### RPM Lint Tab

We have also brought back the RPM lint results of your packages' builds.
But now it is displayed in an independent tab, so you can take advantage of the whole width of the viewport.

<figure>
  <img src="/images/posts/sprint_130_rpm_lint_results.gif" alt="A screenshot of the RPM Lint Results" />
  <figcaption>RPM Lint Results</figcaption>
</figure>

### Mentioned Issues Tab

And last but not least, the issues mentioned in your request are listed in one single place: the Mentioned Issues tab.

<figure>
  <img src="/images/posts/sprint_130_issues.png" alt="A screenshot of the Mentioned Issues" />
  <figcaption>Mentioned Issues</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
