---
layout: post
title: Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---
## Introduction

Today we have some improvements over our [first attempt at Continuous Integration](https://openbuildservice.org/2021/05/31/scm-integration/).

## Updates on a PR/MR

OBS will trigger the workflow again when new changes are detected in an opened PR/MR.

This will allow you, for example, to rebuild branched packages when pushing new changes to the PR/MR.

## Build Results for Repository and Architecture

You probably have a package built against several distributions and architectures, but we were showing only one build result on the checks section of a PR/MR. 

Now, OBS shows the build results for each repository and architecture combination of any package.

It will appear in the PR/MR checks section as another check, with the build status reported like this:

	✓ OBS: ctris - openSUSE_Tumbleweed/x86_64
	
TODO: Add a screenshot of an actual checks section

## Major SCM Vendors Support

Right now, we only act on events coming from webhooks configured on [GitHub.com](https://github.com) or [GitLab.com](https://gitlab.com).

{% include partials/_how-to-give-us-feedback.md %}
