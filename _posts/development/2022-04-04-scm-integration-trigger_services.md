---
layout: post
title: OBS Workflows, At Your Service!
category: development
---

After receiving feedback from users of OBS workflows in the SCM/CI integration, we are now introducing
a step to trigger services of a package. Do not forget to join [the beta program](/2018/10/04/the-beta-program/)
before trying this out.

{% include partials/_series-of-posts-about-scm-integration.md %}

# Trigger Services of a Package

With the `trigger_services` step, it's now possible to trigger services of a package in a OBS workflow.
Be sure to have a [_service](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.source_service.html)
file in your package if you use this step.

Here's how to define a `trigger_services` step:
```
workflow:
  steps:
    - trigger_services:
        project: home:Admin
        package: ctris
```

As an example, this could be used in combination with filters to only trigger services of the package `home:Admin/ctris`
when a commit is pushed to the target branch `main`:
```
workflow:
  steps:
    - trigger_services:
        project: home:Admin
        package: ctris
  filters:
    event: push
    branches:
      only:
        - main
```

{% include partials/_how-to-give-us-feedback.md %}
