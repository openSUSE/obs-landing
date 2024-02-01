---
layout: post
title: SUSE BuildOPS Team
category: project
author: BuildOBS Team

team_members:
  - name: Andrii Nitikin
    position: MirrorCache Developer
    email: andrii.nikitin@suse.com
    github: andrii-suse
    irc: anikitin

  - name: Daniel Mach
    position: osc Developer
    image: dmach
    email: daniel.mach@suse.com
    github: dmach

  - name: Elisei Roca
    position: DevOPS guru
    email: eroca@suse.com
    github: eliroca

  - name: Frank Schreiner
    position: OBS Backend and kanku main developer
    email: fschreiner@suse.com
    github: M0ses
    irc: M0ses
    description: "Frank is a Free Software enthusiast since the late 90s.
    Initially a system administrator he started to develop web-based software in Perl in 2002.
    He is currently focussing on kanku and some parts of the backend software like the OBS registry.

    \nBesides standing around one of his kettle grills and celebrating BBQ's, he's an expert in prototyping rc-cars based open-source computer hardware like the raspPi or arduino."

  - name: Daniel Schmidt
    position: DevOPS guru
    image: jdsn
    email: jdsn@suse.com
    github: jdsn

  - name: Lars Vogdt
    position: BuildOPS Team Lead & firefighter
    email: lars.vogdt@suse.com
    github: lrupp
    irc: kl_eisbaer
    description: "You might know Lars from his former work in the [openSUSE-Heroes](https://en.opensuse.org/openSUSE:Heroes) or [openSUSE-Education](https://en.opensuse.org/openSUSE:Education_team) teams."

  - name: Marcus Rückert
    position: DevOPS guru
    image: darix
    email: mrueckert@suse.com
    github: darix

  - name: Marco Strigl
    position: Backend and osc developer
    email: marco.strigl@suse.com
    github: lethliel
    twitter: lethliel
    irc: mstrigl

  - name: Nathan Cutler
    position: DevOPS guru
    email: ncutler@suse.com
    github: smithfarm

  - name: Ruediger Oertel
    position: DevOPS guru
    email: ro@suse.com
    github: bugfinder
    irc: bugfinder

  - name: Wolfgang Engel
    position: Project Manager PackageHub 
    email: wolfgang.engel@suse.com
    github: wengel

---

The SUSE BuildOPS Team is a dedicated team of DevOPS employees who provide [OBS](https://build.opensuse.org/) 
as a service to the community and assist with daily operations.

This includes not only administration of the hardware and veritable zoo of
services necessary to provide [OBS](https://build.opensuse.org/), but also
reviewing of packages for the openSUSE distribution, any targeted expansion on
the OBS backend side (e.g., to provide Docker or Podman support), importing of
new distributions, or creation of new top-level projects.

The Team consists of:

{% include partials/_team_gallery.html %}

## Responsibilities

The Team helps out with tasks during the complete OBS life cycle. From planning
out features, over software development, to deployments, operating services and
tracking the health and performance.

In addition, the team also takes care of package reviews for the openSUSE (and
SUSE) distribution and actively helps with the development of the next product 
generation.

In the meantime, the team has also taken over the main responsibility of the
mirror infrastructure behind [https://download.opensuse.org/](https://download.opensuse.org/) and has written its
own (Open Source) software named [MirrorCache](https://mirrorcache.org) for the
administration. While the team itself runs 'only' 3 public mirror servers, the
build results provided by OBS are distributed to over 180 servers worldwide
provided by the openSUSE community (THANKS!). Mirrorcache not only ensures that
the different servers receive the correct packages, but also redirects requests
from clients (zypper) to the closest servers.

Here are some of the team's responsibilities within SUSE:

### Site Reliability Engineering

- Infrastructure management
- Incident management
- Providing an 24/7 on call for side wide system outages
- Integration of OBS with other software in the stack
- Continuous deployment of the build.opensuse.org servers
- Monitoring the health and performance of all systems

### Product Management

- Help Product and Release Management with the planning and administration of new products, releasing new snapshots or adjusting OBS project setups
- The Team is one of the main contacts for [PackageHub](https://packagehub.suse.com/) related requests and reviews
- We review submit requests for various projects inside OBS - like [openSUSE:Factory](https://en.opensuse.org/openSUSE:Factory_development_model) as one major example
- Help the [Maintenance](https://en.opensuse.org/Portal:Maintenance) Team by providing a reliable maintenance engine

### Project/Community Management

- Document features, workflows and concepts around [OBS](https://openbuildservice.org), [kanku](http://m0ses.github.io/kanku/), [MirrorCache](https://mirrorcache.org) or [PackageHub](https://packagehub.suse.com/)
- Market the products and the team to (open)SUSE, the community and industry
- Organizing/Presenting at/Participating in technology conferences all over the world

### Software Development

- Implementing features/bug fixes for the OBS backend side and build scripts
- Review and evaluate code submissions from other developers
- The main developers of [kanku](http://m0ses.github.io/kanku/) and [MirrorCache](https://mirrorcache.org) work here
- Provide packaging and general [OBS](https://openbuildservice.org) trainings

## Where can you meet the Team?

The BuildOPS Team hangs out on the IRC channel [#opensuse-buildservice](irc://irc.opensuse.org/#opensuse-buildservice) on the openSUSE chat network.

They sporadically read and write to the [opensuse-buildservice@opensuse.org](https://lists.opensuse.org/opensuse-buildservice/) mailing list.
