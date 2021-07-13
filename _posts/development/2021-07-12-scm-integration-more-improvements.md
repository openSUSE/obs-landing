---
layout: post
title: Reporting Filters and Self-Hosted support for Continuous Integration 
category: development
---

Today, based on some new feedback regarding the SCM integration, we have some news for those of you that enrolled in our [beta program](/2018/10/04/the-beta-program/) 

{% include partials/_series-of-posts-about-scm-integration.md %}

## Limit what is reported to the pull/merge request

Some of your OBS projects probably have dozens of repositories and architectures enabled. But maybe you just want to have some of them being reported back to the SCM as status check to the pull/merge request. Therefore you are now able to limit repositories and architectures using the new filters features.

### Filters

Filters are the way to limit which build results are being reported back to the SCM. Keep in mind that Filters are going to evolve to support many other cases, but for now, we reduced the scope to architectures and repositories only.

In the `workflows.yml` you can use the following syntax to accomplish that:


```
workflow:
  steps:
    - branch_package:
        source_project: OBS:Server:Unstable
        source_package: obs-server
  filters:
    architectures:
      only:
        - x86_64
    repositories:
      only:
        - openSUSE_Factory
        - openSUSE_15.1
        - SLE_15_SP1
        - SLE_15_SP3
```

`only` and `ignore` are your tools to control what and what not are going to be reported back as status check. Only has precedence over ignore, so if both are defined, ignore is not considered.


## Support Self-Hosted instances from gitlab and github:

After collecting feedback, we prioritized the support to Self-Hosted instances from Gitlab and Github. From now one, you are able to configure your Self-Hosted SCM with OBS (as long as the connectivity works, OBS will be able to interact with that SCM). 

{% include partials/_how-to-give-us-feedback.md %}
