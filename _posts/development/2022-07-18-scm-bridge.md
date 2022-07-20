---
layout: post
title: SCM Bridge support for the SCM/CI integration
category: development
---

We're back with a new change in SCM/CI integration. This time with support for a new way of fetching sources from your SCM, the
OBS Git Bridge.

{% include partials/_series-of-posts-about-scm-integration.md %}

## Fetching sources for package builds from your SCM

The usual way to fetch package source from an SCM is the [source service](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.source_service.html) `obs-service-tar_scm`. A while ago we have introduces another, more simplified method to do this: [The OBS SCM Bridge](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_bridge.html).

### SCM Bridge in a nutshell

SCM Bridge allows to manage the entire package sources in an external SCM repository.  All you have to do is add a `scmsync` tag in the project/package meta file like this

```
<package name="sensormonitor" project="home:fpersson">
  <title>Simple golang webservice</title>
  <description>A Go application to monitor tempsensor</description>
  <scmsync>https://github.com/fpersson/sensormonitor</scmsync>
</package>
```

You can also setup an entire project by defining the scmsync tag in project metadata. Every top-level subdirectory of the SCM repository is 
then considered a package in OBS. There are many more options, check out the [SCM Bridge documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_bridge.html) for more information.

## Using the SCM bridge in your CI workflow

Once you set up the SCM Bridge the SCM CI integration will use it to fetch the correct sources for your SCM events. So workflow runs
for a Pull/Merge request will fetch sources from the PR/MR sources etc.

That's it, no further changes required from you. Happy Continuous Integrating! 💚

{% include partials/_how-to-give-us-feedback.md %}
