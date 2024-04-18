---
layout: post
title: Filter SCM Events by multiple properties
category: development
---

Every time your source code management system (github, gitlab etc.) sends a webhook to OBS to trigger a SCM/CI Workflow, we give our best to record what is happening during (and in case of builds even after) your workflow's steps run. We do this because this is a complicated feature, involving two very large applications, where lot's of things can go wrong. So you need loads of information to debug once something is.

We do this by recording things in a "log file" called workflow run. You can access them from the [/my/tokens](https://build.opensuse.org/my/tokens). We have just published a new search/filter interface for workflow runs.

{% include partials/_series-of-posts-about-scm-integration.md %}

### Apply Multiple Filters to the List of SCM Workflow Runs

It is now possible to use more fine-grained filters for listing your SCM/CI Workflows runs. You can filter by event status, type, action and source and combine them any way you want.

<figure>
  <img src="/images/posts/2024-04-18/workflowrun-multiple-filters.png" alt="Screenshot of workflow run multiple filters" />
</figure>

### Provide a Link to the SCM Repository When Branching a Package

If your SCM/CI Workflow is branching a package, the project the package is branched to, now contains a link back the the PR/commit that caused this workflow to run.


{% include partials/_how-to-give-us-feedback.md %}
