---
layout: post
title: SCM Bridge
category: development
---

We're back with a new change in SCM/CI integration. Setting up projects and packages on OBS and SCM at the same time sounds cumbersome. SCM Bridge allows you to set up a package or an entire project in any trusted SCM repository.

{% include partials/_series-of-posts-about-scm-integration.md %}

# SCM Bridge in a nutshell

SCM Bridge allows to manage the entire package sources in an external SCM repository.  All you have to do is just add `scmsync` tag in the project/package meta file.

## Setup a Package Using the SCM Bridge

The setup is done in the package meta file by defining the SCM URL inside of the scmsync tag:

```
  <scmsync>https://gitlab.com/some/repository</scmsync>
```

## Setup an entire project using the SCM Bridge

You can also setup an entire project by defining the scmsync tag in project metadata. Every top-level subdirectory of the SCM repository is considered a package in OBS.

## Extensions for Git repositories

You can further tweak the scmsync url for git repositories.

The scmsync url can get extended via a query parameter subdir. OBS will only use the specified subdirectory.
```
<scmsync>https://gitlab.com/some/repository?subdir=MY_SUBDIRECTORY</scmsync>
```

The scmsync url can also define these URL fragments revision, tag, and branch. This will be extended the URL by a hash character and the revision, tag, or branch. It allows to set up multiple projects building for different branches.
```
<scmsync>https://gitlab.com/some/repository#MY_REVISION</scmsync>
```

If you are curious to know more details about SCM Bridge, please refer to our [user documentation](https://openbuildservice.org/help/manuals/obs-user-guide/cha.obs.scm_bridge.html).

{% include partials/_how-to-give-us-feedback.md %}
