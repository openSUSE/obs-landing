---
layout: post
title: Release of the Open Build Service, Version 2.10
category: releases
excerpt_separator: <!--more-->
---

After more than one year of development we are happy to announce the release of Open Build Service 2.10! :rocket:

This new version of OBS brings a revamped web user interface, improved support for shipping your software in
containers and integrating your package builds with source code management systems like GitLab and Pagure.

<!--more-->

### Revamped Web User Interface

After the last release, we decided it was time for us to move away from the technology stack we were using
to build the user interface ([960 Grid System](https://960.gs/), our own [Jquery UI theme](https://jqueryui.com/) and lots
of custom CSS). The reason is that it became apparent that this was beyond old and hampered us more than it helped to get
things done for you. So with this release we are introducing a complete new technology stack for the web user interface!

<img src="/images/posts/revamping-ui/package-overview.png" alt="Package overview in new UI">

We concentrated on migrating to the new technology without making significant design and workflow changes that could disrupt
your day to day work. The whole migration enables us to introduce changes to the user experience faster, in better quality
and more gradually in the future. By the way, during the development phase of this we have already written a very detailed
[series of post](https://openbuildservice.org/2018/10/05/revamping-ui/) on the matter, check it out!

### You Say Package, I Say Container

In this day and age, shipping and/or deploying software moves away from traditional methods to containerized workloads.
As our mission is to help you to collaboratively create and distribute software for Linux, we have created support to build
containers already as early as beginning of 2017. In this release we have worked on features that help you to deliver containers via an integrated
registry/notary and to keep track of who has shipped what and when with binary tracking for containers. You can see an instance
of the registry in action over on our reference server at [https://registry.opensuse.org](https://registry.opensuse.org)

With this, it's as easy as

```bash
docker run -ti --rm registry.opensuse.org/opensuse/tumbleweed /bin/bash
```

to start a shell on the latest Tumbleweed built by OBS. Of course you can have this registry also on your private
OBS installation and integrate container publishing into your release workflow.

### Gitlab/Pagure Integration

Another trend in the professional software world is to plug various tools together into grand continuous integration/deployment
cycles (CI/CD). You, of course, also want to throw the OBS into the mix and we traditionally supported you to do that on GitHub
with webhooks. The 2.10 release now brings the same kind of support to other tools like [Gitlab](https://about.gitlab.com/) and
[Pagure](https://pagure.io/pagure). You can trigger all kinds of actions on OBS for every git commit or other events that
happen on those tools.

### And More...

In addition to those very visible changes, we have worked tirelessly on bug fixes and countless smaller features like
Amazon EC2 and Microsoft Azure cloud upload support, Vagrant box publishing or Kiwi profile handling. This release includes
nearly 6.000 commits from 18 distinct contributors that changed roughly 3.000 files! We hope you like it! :green_heart:


{% include partials/_release-more-information.md link_name='2.10 Release Notes' link_url='https://github.com/openSUSE/open-build-service/blob/2.10/ReleaseNotes-2.10' %}


{% include partials/_release-how-to-install.md version='2.10' %}

{% include partials/_release-how-to-update.md version='2.10' %}

## About the Open Build Service

{% include about.inc %}

{% include reference_server.inc %}
