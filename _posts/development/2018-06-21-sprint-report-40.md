---
layout: post
title: Highlights of the OBS frontend development - Sprint 40
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-06-04 to 2018-06-15).

# Releases

## OBS 2.9.3

Last week we [released](https://lists.opensuse.org/opensuse-buildservice/2018-06/msg00014.html) OBS 2.9.3. :tada:
This release mainly targeted two security issues found by [Marcus Hüwe](https://github.com/marcus-h), and some other minor improvements.
And thanks to [Luca Boccassi](https://github.com/bluca) this release includes a couple of patches for building packages for Debian. :gift_heart:


# Features

## New layout based on bootstrap

A lot of stuff has been going on regarding the layout of OBS. :construction_worker:
[Last sprint](/2018/06/01/sprint-report-39/) we tested some frameworks that could be used.
This sprint we agreed to use [Bootstrap](https://getbootstrap.com/) and what is more important: we can test our progress on implementing the new layout, step by step, thanks to [PR#5120](https://github.com/openSUSE/open-build-service/pull/5120). :confetti_ball:
Quoting the description of the same pull request: "For certain actions and certain users we want to switch to a new bootstrap based layout while for everyone else things should stay the same.". :tada:
Stay tuned because nice changes are going to arrive soon!

## Using salt

After discussing it in our last Onsite meeting we decided to use [salt](https://github.com/saltstack/salt) for the configuration of our production instance.
We started using salt last sprint, and in this last two weeks we continued using it. :confetti_ball:
In this sprint in particular we configured the mail server.
In the future it will make it easier to manage all the services involved, and to prepare a more automated way of deployments. :robot:


# Bugfixes

## Patchinfo removes data (II)

Following the work started in the last sprint another two elements were found not to be preserved after an edition of a patchinfo: package and releasetarget.
This was fixed in [PR#5079](https://github.com/openSUSE/open-build-service/pull/5079).


# Maintenance

## Fix rpmlint warnings of new OBS package

We are planning to use the awesome [bundled gems service](https://github.com/openSUSE/obs-service-bundle_gems) for building our obs-server packages.
The bundle gem service includes all gems listed in a [Gemfile](https://bundler.io/gemfile.html) and bundles them within the vendor directory of a rails project.
With that we don't have to package each gem individually, like we do right now.
Well, truth is that most of the gems we use are linked from the [devel:languages:ruby:extensions project](https://build.opensuse.org/project/show/devel:languages:ruby:extensions). :laughing:
But it's still some effort that continiously goes into that.
Consider that we have use more than 200 gems :gem: for OBS. :wink:

There are a couple of steps involved to make this change.
[One of them](https://trello.com/c/dSqgfqY5/758-p6-bundle-gems-review-fix-rpmlint-warnings) is to silence and / or fix the [rpmlint](https://github.com/rpm-software-management/rpmlint) warnings.
Rpmlint is a tool for checking common errors and potential issues in rpm packages.
Since we are going to include all gems needed by OBS in our OBS packages, we got a lot of warnings caused by gem files.
So this sprint we analyzed all these warnings and either solved or silenced them.
In addition we also solved a couple rpmlint issues caused by our own packages, e.g., not recommending cron although we ship cron scripts. :bowtie:
