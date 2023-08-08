---
layout: post
title: Submit Your Packages in SCM/CI Workflows
category: development
---

Over the past few weeks we worked hard to make it possible for you to submit packages from within an OBS SCM/CI Workflow. Now you can automate this step, making it easier to work with OBS in a more SCM-centric way.

# How Does It Work

The simplest step definition for a submit request looks like:

```yaml
workflow:
  steps:
    - submit_request:
        source_project: games
        source_package: ctris
        target_project: home:jane_doe
```

This step will submit the `ctris` package from project `games` to project `home:jane_doe`. Of course you can select to run this step only on certain events (push, pull request etc.) or branches too.

# How Do I Learn More?

For a more extensive look into this, please check the [OBS User Guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.steps.submit_request).

{% include partials/_how-to-give-us-feedback.md %}
