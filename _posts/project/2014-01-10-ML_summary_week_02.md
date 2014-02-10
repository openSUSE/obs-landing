---
layout: post
title: OBS Mailing List Summary, Week 02
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 02:

<p align="center">§§§</p>

Shekhar has an `openSUSE_13.1` repository enabled in his home project, but 
packages in that project are not getting built for openSUSE 13.1. What
could be the problem?
> * Adrian wrote that the new config did not get stored for real to the
> backend. Another save of the project metadata fixed the issue.

<p align="center">§§§</p>

Tomáš Chvátal is having trouble building LibreOffice 4.2 in
`LibreOffice:Factory` -- even though he verified locally that the build
did not exceed the 17G limit, the build fails on an I/O error (disk full).
> * List's response: question is how is the OP calculating how much 
> disk space is getting used? For example, is he running `du` after `%clean`? 
> Recommend to increase the disk space requirement to 25G and check
> the `_statistics` file afterwards. This should give the OP an idea
> of a reasonable size. Also, keep in mind that a job has less chances to
> get dispatched with increased constraints.

<p align="center">§§§</p>

Roger Oberholtzer is trying to build a package that `BuildRequires`
components in `windows:mingw:win32`. OBS complains that nothing provides
this. He tried linking to the project in the package metadata, but that
doesn't work.
* > List's response: you can only add project links in project meta data,
* not package meta data. In this case the OP does not want to link the sources
* of another project, but rather to build against binaries from another repo.
* So, he should edit his repositories using `osc meta prj -e $PROJECT` and
* modify the path line to build against the other project/repo which
* provides the rpm.

<p align="center">§§§</p>

Roger Oberholtzer wrote that he is cross-compiling a package that wants
to run `autoconf`. This results in an error: `cannot run test program
while cross compiling`
> * Jan Engelhardt responded with a possible way to patch the package. For
> details, see the thread: <a href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00027.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00027.html</a>

<p align="center">§§§</p>

Rob Zebedee wrote that he is setting up a backup private obs-server and
would like to know the best way to keep the main and backup in sync without
triggering too many rebuilds. In particular, he is curious whether OBS has
multiple API and web UI servers.
> * Adrian's answer is no, but it should be possible to have such multiple
> servers, provided they use the same MySQL database. So far, there is no
> support in the OBS backend for HA/fallback servers. The only way to back
> them up for now is to use `rsync`. 
> * For details, see the thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00002.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00002.html</a>

<p align="center">§§§</p>

Tomáš Chvátal would like the OBS web UI to provide a way to see all the 
SR numbers the current SR is replacing, so he could read the comments to
those SRs.
> * Coolo's answer: such a feature would be welcome, and Tomáš is even
> welcome to implement it ("Just try your luck on rails").

<p align="center">§§§</p>

Michal Hrusecky wrote to consult the list on his ideas for simplifying
the OBS request webpage. For Michal's detailed list of ideas and Adrian's
response, see the thread: <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00040.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00040.html</a>

