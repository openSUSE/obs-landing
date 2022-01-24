---
layout: post
title: UI and Reporting Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Today, we have some improvements around UI and reporting and user feedback for the continuous integration we unveiled in ours [previous blog post](https://openbuildservice.org/2021/05/31/scm-integration/).

As you know, this is a beta feature. So, do not forget this feature is under the [the beta program](/2018/10/04/the-beta-program/). Join!

{% include partials/_series-of-posts-about-scm-integration.md %}

## Improvement for WorkflowRuns UI
WorkflowRuns is one of the most important places to debug your workflows. It helps you to fix the problems like the wrong configurations in `workflows.yml`. 
To make easier to debug and troubleshoot broken SCM integrations we have updated the `WorkflowRuns UI`. 

You will get details like:

- A new show view for individual workflows has been added to help you share WorkflowRuns across your team.
<figure>
  <img src="/images/posts/sprint_110_workflow_runs_show.png" alt="Workflow runs show view" />
  <figcaption>Workflow runs show view</figcaption>
</figure>

- New filter options to help filter WorkflowRuns based on `status` and `event type`

<figure>
  <img src="/images/posts/sprint_110_workflow_runs_filters.png" alt="Workflow runs filters" />
  <figcaption>Workflow runs filters</figcaption>
</figure>


{% include partials/_how-to-give-us-feedback.md %}
