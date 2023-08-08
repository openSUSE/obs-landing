---
layout: post
title: Submit Your Packages in SCM/CI Workflows
category: development
---

Over the past weeks we worked hard to make it possible for you to create Submit Requests from within an SCM/CI Workflow. Now you can automate this step, making it easier to work with OBS in a more SCM-centric way.

## Integrate Submit Requests into your SCM/CI Workflow

The simplest step definition for a submit request looks like:

```yaml
workflow:
  steps:
    - submit_request:
        source_project: games
        source_package: ctris
        target_project: home:jane_doe
```

This step will submit the `ctris` package from project `games` to project `home:jane_doe` every time you trigger the token. Of course you can select to run this step on [certain events (push, pull request etc.)](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.filters.event_filter) or [only for some branches](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.filters.branches_filter) too.

This is useful in many ways. For instance create a Submit Request every time you push a new commit to a branch. Or make accepting a Submit Request on OBS an approval step in your PRs CI. Or Submit Request the newest tag/release of your software.

## How Do I Learn More?

For a more extensive look into this, please check the [OBS User Guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.steps.submit_request).

And don't forge to let us know how you make use of this!

{% include partials/_how-to-give-us-feedback.md %}
