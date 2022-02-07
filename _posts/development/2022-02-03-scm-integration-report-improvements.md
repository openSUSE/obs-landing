---
layout: post
title: UI and Reporting Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Today, we have some improvements around the continuous integration we unveiled in [one of our previous blog posts](https://openbuildservice.org/2021/05/31/scm-integration/). We expanded the workflow run interface, added a new type of step to configure repository flags, and introduced a breaking change to the `configure_repositories` step.

As you know, this is a beta feature. So, do not forget this feature is under [the beta program](/2018/10/04/the-beta-program/). Join!

{% include partials/_series-of-posts-about-scm-integration.md %}

## Support multiple repository paths for the configure_repositories step
You already know about the `configure_repositories` step. Until now a single path element is defined per repository configured, but we realized for some projects more than one path has to be defined. So, we have made improvements for the support of multiple path elements. The breaking change has been documented and you can check it out [here](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.steps.configure_repositories_architectures_for_a_project).

## The set_flags step
Projects and packages can have different flags based on repositories and architectures. With the `set_flags` step, you have the opportunity to manage flags for your projects and packages. There are OBS-wide defaults for each flag type. This step is only necessary if you want to diverge from those [defaults](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.steps.set_flags.type).

Here is a simple example of how you can use it:
```
workflow:
  steps:
    - set_flags:
        flags:
          - type: build
            status: enable
            project: home:Admin
          - type: publish
            status: disable
            project: home:Admin
```

Please refer to the [documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_ci_workflow_integration.html#sec.obs.obs_scm_ci_workflow_integration.obs_workflows.steps.set_flags) to learn more.

## Improvement for Workflow Runs User Interface
The Workflow Runs page is the most important place to debug your workflows. It helps you to detect the problems like the wrong configurations in `workflows.yml`.
So to make it easier to debug and troubleshoot broken SCM integrations we have added some more features to the Workflow Runs UI:

- The details about each workflow run are displayed on a new page.
- Together with the Request and Response, we added the new tab Artifacts.
<figure>
  <img src="/images/posts/sprint_111_workflow_runs_show.png" alt="Workflow runs show view" />
  <figcaption>Workflow runs show view</figcaption>
</figure>

- New filter options to help filter Workflow Runs based on `status` and `event type`
<figure>
  <img src="/images/posts/sprint_111_workflow_runs_filters.png" alt="Workflow runs filters" />
  <figcaption>Workflow runs filters</figcaption>
</figure>

## Artifacts of Workflow Runs
A single webhook on your SCM can trigger different workflows, given in `.obs/workflows.yml`, to run. Each Workflow Run will most likely generate some changes inside the OBS projects or packages. Those changes are what we call Workflow Run Artifacts.
For example, repositories are created if the step is `configure_repositories` or projects and packages are created in steps like `link_package`, etc.
After each workflow run, we now display all the artifacts involved so you can better understand and debug what was going on.

<figure>
  <img src="/images/posts/sprint_111_artifacts.png" alt="Workflow run artifacts" />
  <figcaption>Workflow run artifacts for a push event</figcaption>
</figure>

{% include partials/_how-to-give-us-feedback.md %}
