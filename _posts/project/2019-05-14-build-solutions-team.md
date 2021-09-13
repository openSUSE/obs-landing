---
layout: post
title: SUSE Build Solutions Team
category: project
author: OBS Team

team_members:
  - name: Dani Donisa Quevedo
    email: daniel.donisa@suse.com
    github: danidoni

  - name: Lukas Krause
    email: lkrause@suse.com
    github: krauselukas

  - name: Victor Pereira
    email: vpereira@suse.com
    github: vpereira
    irc: vpereira

  - name: Dany Marcoux
    email: dmarcoux@suse.de
    github: dmarcoux
    irc: dmarcoux
    blog: https://blog.dmarcoux.com/

  - name: Saray Cabrera Padron
    email: scabrerapadron@suse.com
    github: saraycp
    irc: saraycp

  - name: Eduardo Navarro
    email: enavarro@suse.de
    github: eduardoj
    twitter: eduardoj
    irc: enavarro

  - name: David Kang
    email: dkang@suse.com
    github: DavidKang
    twitter: D4vid_Kang
    irc: dkang

  - name: Henne Vogelsang
    email: hvogel@opensuse.org
    github: hennevogel
    twitter: henne
    blog: http://www.hennevogel.de
    irc: henne

  - name: Rubhan Azeem
    email: rubhan.azeem@suse.com
    github: rubhanazeem
---

This is the first post in a series about teams inside different companies that work to bring the
OBS forward. This time, we are writing about the Build Solutions team at SUSE. Make sure to check
out the upcoming posts too!

The SUSE Build Solutions team is a dedicated team of engineers who work, as part of the
global free software community, to continually improve the quality and functionality of the OBS and to
provide packagers with the enterprise-quality service they've come to expect. The team consists of

{% include partials/_team_gallery.html %}

## Responsibilities

The team helps out with tasks during the complete OBS life cycle. From planning out features, over
software development, to deployments, operating servers and tracking the health and
performance. All the members collaborate across all disciplines, everybody is responsible for everything.
They value the [agile principles](http://agilemanifesto.org/), take full stack web development seriously
and practice the DevOPS culture. Their responsibilities for SUSE include:

### Software Development

 - Implementing features/bug fixes for the OBS API/UI
 - Improve quality and lower technical debt of the OBS API/UI
 - Review and evaluate code submissions from other developers
 - Review and evaluate feature/issue requests
 - Cooperate with stakeholders to align plans in an agile fashion

### Site Reliability Engineering

 - Infrastructure management
 - Continuous integration of the OBS with other software in the stack
 - Continuous deployment of the build.opensuse.org UI/API server
 - Monitoring the health and performance of deployments
 - Incident management

### Project/Community Management

 - Document features, workflows and concepts
 - Market the product and the team to SUSE, the community and industry
 - Organizing/Presenting at/Participating in technology conferences all over the world

## Values
We have asked the team what they would identify as their culture and how
their values translate into daily practices. Here is what they told us:

**Customers**. By understanding peoples' goals, needs and their
limitations. Everything we build and change, _everything we do_, we do for the
people using our product.

**Quality**. By taking due time, avoiding shortcuts, pacing ourselves. By
being critical of what we do and by welcoming critique from others. We always
leave our code base, processes and team _"better than we have found it"_.

**Responsibility**. By taking charge of our objectives and priorities. By
speaking our minds, by being honest and frank with each other. _We are the
change we want to see_.

**Ownership**. Instead of hiding behind processes, or driving relentlessly
towards individual goals, we take _ownership of the entire thing_. We do that
when things go right but also when things go wrong. No matter if they were in,
or out of our control. No matter if that hurts and bruises our ego. It was
never anyone else's fault, it was ours. We believe _ownership is respect_.

**Collaboration**. By working together toward goals, in a horizontal
structure with flexible leadership. We do not only share results with each
other, but how we get there. We constantly reflect our thoughts, communication
and behaviour and how they bring everyone else forward. "We win together, we
lose together".

**Community**. By curiously exploring what other people inside and outside
this industry think, do and produce. We expose ourselves to all kinds of ideas
and openly share our own views with others.

**Diversity**, pluralism and freedom of choice. We think differences, not
uniformity, in origin, circumstance and experience make people, the practice of
software development and in the end, our product interesting. We believe it
takes a diverse set of people to produce a product truly useful for everyone.

**Teaching & Learning**. We strive for personal growth by continuously
learning about other people, technology, development methodologies and efforts.
We are open minded, always evolving adventurers.


## Where Does the Team Work?

As the Build Solution team works as part of our community, most contributions happen directly on GitHub,
they send/review/merge pull requests, fix bugs and implement features. To coordinate their collaboration,
they use the [SCRUM framework](https://www.scrumguides.org/) for this and track their day to day work on
some public Trello boards.

### [Opportunity Backlog](https://trello.com/b/JxODqCjH)
This is a high level overview of features the team is working on. Cards travel from left to right,
include a detailed description and a link to the teams understanding of what the users want (Story Map).

Cards in the '**Opportunity**' column are just ideas, once the team starts to look into the feasibility and scope of the
feature, they assign a group of people to drive this card's topic and move it into the '**Discovery**' column.
The assignees then spend time understanding what exactly they want to implement.
Once they've understood the card's topic, they will move the card to the '**Delivery**' column whenever they are ready to work on its feature.
It will remain there until they are done working and have released an update to the OBS (they call this deliverable).
After the feature is released, the card moves into the '**Evaluation**' column.
It stays there until the team has gathered enough feedback/data about the usage of this feature.
They then throw it back into the '**Delivery**' column and polish it further or decide that it's finished in which case, it moves into the '**Done**' column.

So if you want to know what they will most likey work on in the near future, checkout out the '*Discovery*'
and '*Evaluation*' columns. If you want to see what they are currently working on, check out the ''*Delivery*'
column. And if you want to know what they have worked on in the past, check out the '*Evaluation*' and '*Done*'
column.

### [Sprint Board](https://trello.com/b/Fs7boVwI)
A very detailed overview of the development tasks everybody in the team is currently working on.
Tasks travel from left to right (Backlog → Done). People assigned to the card are responsible for
driving the task. Additionally to that, we have two fixed roles (rotated weekly):

#### [Bug Squad](https://trello.com/c/cd1ber1F)
People assigned to this card are responsible for triaging & resolving bugs, support and minor
(bugfix) releases.

#### [Demolition Squad](https://trello.com/c/IKZgDuaD)
People assigned to this card are responsible for deployments, tool maintenance,
OBS:Server:Unstable maintenance, etc.

## Where Does the Team Meet?
The Build Solutions team hangs out on the IRC channel #opensuse-buildservice on the Libera.Chat network.
They read and write to the [opensuse-buildservice@opensuse.org mailing list](https://lists.opensuse.org/opensuse-buildservice/).
Additionally, as contributing is their full time job, they have some meetings where they talk to
each other to coordinate their work. If you want to participate in any of those meetings, join
http://gotomeet.me/bsteam during that time.

### Sprint Planning
They kick off their sprints with a planning meeting (usually every other Wednesday at 11:00 CET/CEST).

### Standup
They do daily standups (11:00 CET/CEST) for the duration of the sprint.

### Review
At the end of every sprint, they do a technical review and a team retrospective (usually every other
Tuesday at 11:00 CET/CEST).

### Opportunity Planning
Once a week, all the SUSE managers involved in the OBS meet to align on tasks and priorities.
This meeting is also possibly used to create shared understanding of feature requests together with customers.

## How to Collaborate with the Build Solutions Team?

First and foremost, if you want to contribute to the OBS you don't need anyone's permission or blessing.
This is just a team of people working for SUSE. The OBS is a Free Software project where everyone can
contribute in any way they want to. Read the [contribution guide](https://github.com/openSUSE/open-build-service/blob/master/CONTRIBUTING.md)
on how to do that. And if you seek help with using, operating or developing the OBS, see the [support page](https://openbuildservice.org/support/).

If you want to contribute to what the team works on, you have to talk to them so they can integrate you, give
you some guidelines and clarify expectations. Just swing by the IRC channel and talk to any of the members.
