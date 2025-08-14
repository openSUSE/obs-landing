---
layout: post
title: "Request Workflow Redesign: RPM Lint Results for Multibuild Flavors and other Improvements"
category: development
---

We are currently in the process of polishing and finalizing the last bits and pieces of the request workflow redesign beta in order to roll it out to everyone shortly.
This time we put our hands on linking to the individual RPM lint results of multibuild flavors included in a request and easing the process of accepting a request.
As a bonus, a summary for the individual RPM lint results of a package is now available.

{% include partials/_series-of-posts-about-request-redesign.md %}

The request redesign is part of [the beta program](/2018/10/04/the-beta-program/).

## RPM Lint for Multibuild and Summary

We now support linking directly to the RPM lint results of different package multibuild flavors included in a request.

<figure>
  <img src="/images/posts/2025-08-14/multibuild_flavors_request_workflow_redesing.png" alt="RPM Lints of Multibuild Flavors">
  <figcaption>RPM Lints of Multibuild Flavors</figcaption>
</figure>

In addition, a new RPM lint summary was added, which gives an overview about which linter, with which severity and badness level affects a certain file of a package.
The summary will link you directly to the line of the RPM lint log that raises the warning or error.
You can find the new summary under the RPM lint tab of a package.

<figure>
  <img src="/images/posts/2025-08-14/rpm_lint_summary.png" alt="RPM Lint Summary">
  <figcaption>RPM Lint Summary</figcaption>
</figure>

## Only Require Commenting a Decision When Declining a Request

When accepting a request, it used to be required to add a comment about why this decision was made.
This is usually only relevant when a request gets declined, to give a feedback about what was wrong with the request.
Therefore, we made the commenting part optional in the acceptance case.


{% include partials/_how-to-give-us-feedback.md %}

