---
layout: post
title: OBS Mailing List Summary, Week 13
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 13:

<p align="center">§§§</p>

plinnel <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00120.html">reports</a>
getting a "cpio: open failed - Bad file descriptor" error when trying to
build on OBS.
> * Andreas Schwab spotted the error (missing BuildRoot) in the build log

<p align="center">§§§</p>

Rick Liu noticed that, although OBS 2.4.6 has been built successfull, the
binaries are still 2.4.5 -- when will the 2.4.6 binary be made available?
> * Adrian: when it is ready and tested

<p align="center">§§§</p>

Now that he has his build working in the public OBS, Matthew <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00127.html">would
like to run it on a private instance</a>. He has read the OBS bootstrapping
documentation, but that doesn't tell him how to populate his instance with
the correct repositories for RHEL_6, etc. And what about Download On
Demand?
> * Adrian: Please start here for a new installation: <a
> href="http://openbuildservice.org/download/">http://openbuildservice.org/download/</a>
> * Download On Demand is not recommended, because it is incomplete. But
> OBS supports inter-connect which can be setup easily via a mouse
> click. That downloads all needed basic rpms from build.o.o when needed.

<p align="center">§§§</p>

Matthew started <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00130.html">another
thread</a> describing the trials and tribulations he encountered while
bootstrapping his OBS instance. 
> * Henne suggested he look in the logs. That yielded the following
> message: "waiting for an event... retrying watcher for
> https://api.opensuse.org"
> * Andreas noted that this should be `https://api.opensuse.org/public`

<p align="center">§§§</p>

Adrian <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00131.html">announced</a>
the release of OBS 2.4.6

