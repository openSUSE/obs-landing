---
layout: post
title: Improvements Over Continuous Integration with OBS and GitHub/GitLab
category: development
---
## Introduction

Last post showed the first attempt at integrating OBS and GitHub/GitLab. Today we show some improvements.

## Updates on a PR/MR

OBS will trigger the workflow again when new changes are detected in an opened PR/MR.

This will allow you to rebuild branched packages if you push new changes to a PR/MR.

## Build results for repository and architecture

Until now, we were showing only one build result. Now OBS reports the build results back to your PR/MR for each repository and architecture combination of any package.

It will appear in the PR/MR checks section as another check, with the build status reported like this:

	✓ OBS: ctris - openSUSE_Tumbleweed/x86_64
	
## Major SCM Vendors support

Right now we only act on events coming from [GitHub.com](https://github.com) or [GitLab.com](https://gitlab.com).
