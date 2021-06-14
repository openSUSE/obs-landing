---
layout: post
title: Improvements for the Continuous Integration with OBS and GitHub/GitLab
category: development
---

Today, we have some improvements for the continuous integration we unveiled in our [previous blog post](https://openbuildservice.org/2021/05/31/scm-integration/).

## Updates on a PR/MR

OBS will trigger the workflow again when new changes are detected in an opened PR/MR. It will rebuild your branched packages when pushing new commits, basically.

## Build Results for Repository and Architecture

Maybe you had a workflow set for a package. That package built against several distributions and architectures but reported its results as a single build status on the checks section of the PR/MR. 

Now, OBS shows the build results for each repository and architecture combination. Each one is displayed as a single commit status like this (showing GitHub in this example):

<figure>
	<img src="/images/posts/blog-post-about-reporting-repositories-architectures-and-reacting-to-updates-in-a-pr/commit_status.png" alt="Build results for a package" width="1000px" />
	<figcaption>Build results for a package</figcaption>
</figure>
	
If your package builds several flavours, the status will have the flavour name appended to the package name:

<figure>
	<img src="/images/posts/blog-post-about-reporting-repositories-architectures-and-reacting-to-updates-in-a-pr/commit_status_multibuild.png" alt="Build results for a package with multibuild configuration" width="1000px" />
	<figcaption>Build results for a package configured with multibuild</figcaption>
</figure>
	
## Current Limitations

Right now, we only act on events coming from webhooks configured on [GitHub.com](https://github.com) or [GitLab.com](https://gitlab.com).

{% include partials/_how-to-give-us-feedback.md %}
