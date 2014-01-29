---
layout: post
title: OBS Mailing List Summary, Week 49
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 49:

<p align="center">§§§</p>

Fritz Elfert consulted the list about dependency problems he ran into
when Fedora changed the name of the `libjpeg` package to
`libjpeg-turbo` between F18 and F19.
> * Answer: in the ensuing discussion it came to light that Fritz
> already had a `libjpeg-turbo` package in his home project providing
> binaries for Fedora 19. Fritz thought perhaps he was too slow
> disabling the build when he added the F19 repo, but disabling the
> build is not the answer: one must call `wipebinaries` manually in
> such a case.

Note: use `osc ls -b` to list binaries on the server.

<p align="center">§§§</p>

Greg Freemyer asked what is a good way to drop a package from Factory,
while leaving the corresponding devel package intact? 
> * Answer: first do `osc detachbranch`, then `osc dr
> openSUSE:Factory/foobaz`

<p align="center">§§§</p>

Ladislav Slezak reported an issue his team ran across. They are using
Jenkins CI to automatically submit packages to their OBS project every
time a developer commits a change to their Git repo (provided the test
suite passes). This works fine, as long as nobody tries to use OBS to
modify a package directly -- these changes are lost (overwritten) by
the next Git commit.
> * Answer: You can set the OBS:RejectRequests attribute in your
> project. And add some helpful text in the first value as a message
> to the users.

Note: there is a glitch in the web UI where you can set the value, but
attempts to edit it result in an error. A patch to fix the issue will 
be welcomed.

<p align="center">§§§</p>

Kyrill Detinov wrote to the list about a missing
`obs-service-format_spec_file` when he tries to commit changes to a
devel project in OBS.
> * Answer: `spec-cleaner` broke `obs-service-format_spec_file` and it
> needs to be reinstalled by doing `zypper in -f
> obs-service-format_spec_file` -- unfortunately, the current version
> of zypper does not detect or prevent file conflicts. However,
> Michael Andres did a Hackweek project to address this, so a fix is
> on the way.

<p align="center">§§§</p>

Darin Perusich has a number of binary RPMs that he got directly from a
vendor. Is there a way to publish them on his local OBS?
> * Answer: build a something.spec which just copies the binary rpms
> to the build result folder. So it will look for OBS like they are
> build results.

<p align="center">§§§</p>

Coolo announced roll-out of a native mail notifications in OBS. For
build.opensuse.org it will replace hermes mails in the mid-term, but
not before we have a UI to configure it and most likely event type by
event type. The first step will be to send mails for review - which
does not work at all with hermes (no support e.g. for by_group), then
requests, and then slowly forwarding towards build failures. 
> * To read the lively discussion that ensued, go to the "mail notifications in master" thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00014.html">http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00014.html</a>

