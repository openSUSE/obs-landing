---
layout: post
title: Two New Guides for Builders
category: documentation
author: SUSE Documentation Team
---

Over the past couple of weeks, we, the SUSE documentation team, have been
working on refreshing and restructuring the OBS documentation a bit. The goal
(as it always is) was to make it easier for you, the users, to find the right
information faster.

You may know that the OBS documentation previously consisted of:

* *Administrator Guide*
* *Best Practices*
* *Reference Guide*

In preparing our work, we noticed that in particular the *Reference Guide*
had too broad a focus, as it was addressing both users and administrators. We
also noticed that there was no dedicated guide for people just starting out
on OBS.

As part of working toward our goal of making information more findable, we
have added two guides:

* *Beginner's Guide:*
  If you are new to OBS, this guide will help you set up the local
  requirements and get into the flow of creating a package and making a
  submission. To make it easy to try the examples from the guide on your own,
  it is accompanied by repositories on GitHub and OBS:
  * The [GitHub repository](https://github.com/obs-example/my-first-obs-package)
    contains the example code
  * The [home repository](https://build.opensuse.org/project/show/home:obsgeeko)
    of the example OBS user "obsgeeko" houses a packaged version of that
    example code

* *User Guide:*
  For more advanced users, we started the *User Guide*. In time, this guide
  will include detailed information on packaging, submission, and building
  products on OBS. As yet, it is far from finished, however. In the first
  step, we moved many topics out of the Reference Guide* and into the *User
  Guide*.

Our plan is to split up the *Reference Guide* into admin and user topics and
then merge those topics into the respective guide. The end goal is to only keep
the *Administrator Guide* and a *User Guide*, and have both squarely focused
on their target audience.

We've also been working on clarifying the terminology that
surrounds OBS. The result is an expanded and improved
[Glossary](http://openbuildservice.org/help/manuals/obs-reference-guide/obs.glossary.html)
(part of the Reference Guide).

Lastly, we made a variety of stylistic and spelling fixes and had a field
day converting the guide from the DocBook 4 format to the more modern DocBook 5.

We certainly hope you like the changes we made so far. We would be happy to
see you pitch in with feedback and contributions. In particular, rounding out
the new User Guide is still a good bit work.

From the documentation team, large contributions for this project came from
[@tomschr](https://github.com/tomschr), with
[@sknorr](https://github.com/sknorr) contributing reviews and cosmetics
fixes. Initial guidance and technical reviews came from
[@adrianschroeter](https://github.com/adrianschroeter).

As always, the guides can be found at
[openbuildservice.org/help/manuals/](http://openbuildservice.org/help/manuals/).
The source of the guides can be found on [GitHub](https://github.com/openSUSE/obs-docu).
