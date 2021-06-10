---
layout: post
title: Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Today, we have some improvements in the Continuous Integration we unveiled in our [last blog post.](https://openbuildservice.org/2021/05/31/scm-integration/).

## Updates on a PR/MR

OBS will trigger the workflow again when new changes are detected in an opened PR/MR. It will rebuild your branched packages when pushing new commits, basically.

## Build Results for Repository and Architecture

You maybe had an integration set for a package built against several distributions and architectures. OBS was reporting all build results, but we were showing only the last one on the checks section of a PR/MR. Now OBS shows the build results for each repository and architecture combination of any package.

It will appear in the PR/MR checks section as another check, with the build status reported like this:

	✓ OBS: ctris - openSUSE_Tumbleweed/x86_64
	
If your package builds several flavours, the check will have the flavour name appended to the package name:

	✓ OBS: ctris:hans - openSUSE_Tumbleweed/x86_64
	
TODO: Add screenshots of an actual checks section

## Current Limitations

Right now, we only act on events coming from webhooks configured on [GitHub.com](https://github.com) or [GitLab.com](https://gitlab.com).

{% include partials/_how-to-give-us-feedback.md %}
