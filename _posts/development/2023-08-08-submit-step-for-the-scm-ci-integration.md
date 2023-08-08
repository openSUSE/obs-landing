---
layout: post
title: Submit Your Packages in SCM/CI Workflows
category: development
---

Over the past few weeks we worked hard to add a way to automate submitting packages with an SCM/CI Workflow. Now you can automate this step, making it easier to work with OBS in a more SCM-centric way.

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

This step will submit the `ctris` package from project `games` to project `home:jane_doe`. You can of course select to run this step within a workflow that runs only on commit or only on pull request using filters too.

# How Do I Learn More?

For a more extensive look into this, please check the [OBS User Guide](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html).

{% include partials/_how-to-give-us-feedback.md %}
