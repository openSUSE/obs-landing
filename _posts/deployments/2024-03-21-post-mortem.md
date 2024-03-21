---
layout: post
title: "Service degradation when displaying Request's changes"
category: deployments
author: Daniel Donisa <daniel.donisa@suse.com>
---

There was a service degradation of our reference server.

<!--
  What happened, for how long and who was impacted by it?
  For customers to be able to identify if their problem is related to this post-mortem or not.
-->


After a deployment of build.opensuse.org on Tuesday, March 19, 10:36 UTC,
accessing the changes on some Submit Requests showed this error to the users:

![](/images/posts/2024-03-21-post-mortem/error.png)

Not all Submit Requests were affected. Specifically, only those requests that had changes on files containing a slash symbol in its path (e.g: buildah-1.35.1.tar.xz/CHANGELOG.md). 

Our production instance was back to normal operation at 13:05 UTC, so users were impacted by this during 2,5 hours.

We want to give you some insight into what happened and what we are doing to avoid similar problems in the future.

## Detection
<!--
  How did we get alerted that the problem happened?
  To demonstrate to customers how we are (hopefully automatically) alerted about problems.
-->

We were contacted by a user, from there, we saw that there were errors in our error collector since 10:36 UTC.

## Root Cause
<!--
  What was it and what triggered it?
  For customers and community to understand what happened technically.
-->

The root cause was a refactoring we introduced on the file viewing capabilities of OBS. That refactoring introduced the rejection of file names containing slashes. Not having a comprehensive test coverage prior to that refactoring made the detection of that flaw impossible.

## Resolution
<!--
  How did you resolve or work around this problem?
  For customers and community to understand what happened technically.
-->

We corrected the code to avoid linking to filenames with slashes and wrote a use case in our test suite to cover this.

### Action Items

<!--
  Are there any actions we are going to do that are not done yet?
  For customers and community to be able to follow up on this.
-->

N/A

## Lessons Learned
<!--
  Describe what went well, what went wrong and where we go lucky during the resolution of this problem.
-->

- We were not aware the code before the refactoring was producing filenames with slashes, and happily accepting them.
- Before refactoring anything, we need a comprehensive test coverage to ensure we are not introducing errors.

## Timeline (All Time in UTC)

* 2024-03-19 10:36 First appearance of the error in our error collector.
* 2024-03-19 12:37 Some user detected an issue.
* 2024-03-19 12:45 The incident was declared.
* 2024-03-19 13:05 We monkey patched production to stop the issue from affecting the users.
* 2024-03-19 13:05 The incident is resolved
* 2024-03-20 12:51 The fix https://github.com/openSUSE/open-build-service/pull/15836 was merged.
* 2024-03-20 16:40 The fix was deployed.

