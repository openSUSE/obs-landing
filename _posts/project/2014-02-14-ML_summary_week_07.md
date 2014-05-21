---
layout: post
title: OBS Mailing List Summary, Week 07
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 07:

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00024.html">build_patchrpmcheck_scr:
line 1: fg: no job control</a> thread, Dmitriy asks about a "no job
control" error in his build log.
> * The list noted that "no job control" usually means undefined macros. In
> Dmitry's case he was missing `BuildRequires: desktop-file-utils`

<p align="center">§§§</p>

Coolo announced that he extended the comment system in `osc` (the OBS
command-line client). There are additional routes and comments now have
IDs. See <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00031.html">the
announcement</a> for details.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00032.html">this
thread</a>, Roger Oberholzer and Martin Koegler discussed the finer details
of the mingw32 build environment.

<p align="center">§§§</p>

Christian wrote that all packages in his private OBS instance (connected to
`api.opensuse.org`) are 'broken' after modifying the repository
configuration.
> * Adrian responded that it sounds like a (temporary?) DNS lookup issue,
> either on Christian's system or on his provider's DNS.

