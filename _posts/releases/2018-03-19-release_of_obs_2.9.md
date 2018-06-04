---
layout: post
title: Release of the Open Build Service, Version 2.9
category: releases
excerpt_separator: <!--more-->
---

The Build Service Team is happy to announce the release of Open Build Service 2.9! :tada:

Among many bug fixes this release comes with a big bunch of features.
Thanks to the new [image template page](http://openbuildservice.org/2017/05/11/new-image-templates-page/)
you can branch images easily from an existing template and base your further work on it.
With the [kiwi editor](http://openbuildservice.org/help/manuals/obs-best-practices/cha.obs.best-practices.webuiusage.html#kiwi_editor_how_to)
you can further configure your image, add packages, repositories and all kind of things. All this is part of the
[SUSE Studio Express](http://openbuildservice.org/2017/09/27/suse-studio-express/) we started last year.
Last but not least, the recently added [EC2 cloud upload]() feature, allows you to directly upload your EC2
image from OBS to the Amazon Web Services (AWS). :cloud:

We revamped our notification system, including RSS Feeds for user's notifications,
[RabbitMQ support](http://openbuildservice.org/2018/02/12/rabbitmq-integration/),
a nicer UI for the notifications page and much more.

<!--more-->

A more detailed list of what we ship :ship: in 2.9 can be found in our
[release notes](https://github.com/openSUSE/open-build-service/blob/2.9/ReleaseNotes-2.9).

## Try OBS 2.9
The latest OBS version version is always deployed to our [reference server](https://build.opensuse.org). You can try it out there.

## Installation
Please read our [setup instructions](https://github.com/openSUSE/open-build-service/tree/2.9#installation) :memo:
or better yet, use our [appliance](http://openbuildservice.org/download/).

## Upgrade to 2.9
If you already have a running OBS installation and want to update it, please read also the
[README.UPDATERS](https://github.com/openSUSE/open-build-service/blob/2.9/dist/README.UPDATERS) file about the necessary steps.

OBS Appliance users who have set up their LVM according to our [documentation](http://openbuildservice.org/download/#appliance_config)
can just replace their appliance image without data loss. The migration will happen automatically.

We hope you like it! :green_heart:
