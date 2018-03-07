---
layout: post
title: Highlights of the OBS frontend development - Sprint 33
category: development
author: OBS frontend team
---

Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-02-19 to 2018-03-02).

# Features

## EC2 Cloud upload

The last few sprint reports we already showed our efforts to implement a cloud upload feature.
This sprint **a lot** of changes have been made to the EC2 cloud uplod. :fireworks:

First of all, we improved the list of jobs for uploading to the cloud and now we also show the details field.
The details field for instance shows the created [AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) id.

<img src="/images/posts/cloud_upload_overview.png" width="1000px" style="margin: 10px;">

Our Amazon EC2 uploader makes use of the fantastic [Enceladus ec2uploadimg](https://github.com/SUSE/Enceladus) project in the background.
While uploading, ec2uploadimg creates several resources like a helper instance or storage volumes.
In case of a successful upload, all these resources get cleaned up.
However, we also implemented the possibility to abort an upload.
In that case, these resources stay and it is necessary to clean them up manually.
Not very nice. :unamused:

Therefore, in this sprint, we implemented an automatic cleanup in case of an aborted upload.
We implemented this directly in Enceladus and sent a [pull request](https://github.com/SUSE/Enceladus/pull/196) back upstream.

Until now all this was hidden behind a [feature flag](https://martinfowler.com/articles/feature-toggles.html).
This sprint we also tested all different regions in Amazon EC2 and decided to finally release it to the public. :tada:
You can read more about it in our [cloud upload blog article](http://openbuildservice.org/2018/03/01/cloud-upload/).

## Setup telegraf on the production server

As a long term goal, we want to be able monitor how OBS is used by our users. :chart_with_upwards_trend:
So that we better understand what we need to improve and ensure that we do the right things when we implement features or change workflows within OBS.
For that we needed to install [telegraf](https://github.com/influxdata/telegraf) on [metrics.opensuse.org](https://metrics.opensuse.org).
During this sprint we packaged and installed telegraf on that instance.

# Bug fixes

## Notifications for "Request state was changed" do not seem to work

Some time ago [thardeck](https://github.com/thardeck) [reported](https://github.com/openSUSE/open-build-service/issues/4131) that OBS does not send notifications when the state of a request changes to 'new'.
We've investigated :mag: the issue and [tried](https://github.com/openSUSE/open-build-service/commit/723731704d751a6fb893e076db667c6b449604c4) to solve it, but in the end we realized that there is no easy solution for this and have to [revert our patch](https://github.com/openSUSE/open-build-service/pull/4574). :unamused:

Instead we generated a follow up [card](https://trello.com/c/nahnojm5/327-notification-filters) and documented our findings there.
We look forward to get this solved soon. :smile:

# Documentation

## Document Rubocop process of agreeing on style rules

A project as complex and big as OBS certainly needs good documentation. Not only for end users, but also for developers.
That's why we started to [document](https://github.com/openSUSE/open-build-service/wiki) :notebook_with_decorative_cover: the subsystems of OBS, how we deploy and release our [stable versions](https://build.opensuse.org/project/show/OBS:Server:2.8:Staging) and many more things.

And since we find coding style quite important we spend some time in this sprint to agree and document on how we want to handle updates of Rubocop.
All this is based on our [previous](http://openbuildservice.org/2018/01/19/sprint-report-15/) [efforts](http://openbuildservice.org/2018/02/12/sprint-report-31/) of applying Rubocop style rules to OBS.
The result can of course be found in our [developer wiki](https://github.com/openSUSE/open-build-service/wiki/Code-Style). :wink:

# Tests

Like every sprint we were increasing our test coverage. This time we extended [PackageController#save_meta](https://github.com/openSUSE/open-build-service/blob/master/src/api/app/controllers/webui/package_controller.rb#L988) 
tests to cover the holes and have it fully covered. What was missing? Only a few lines that can be checked in [PR#4532](https://github.com/openSUSE/open-build-service/pull/4532).
