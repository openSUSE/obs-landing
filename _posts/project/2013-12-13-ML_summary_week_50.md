---
layout: post
title: OBS Mailing List Summary, Week 50
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 50:

<p align="center">§§§</p>

Olaf Hering wrote that he has a few packages that link to
projects/packages on opensuse.org. In the last months every once in a
while the packages will be stuck for days or even weeks with `osc r
-v` showing: "blocked: openSUSE.org:PRJ/PKG: download in progress"
Updating the package in opensuse.org to eventually trigger a rebuild
did not change anything.
> * Answer: this is a bug, and it was fixed on December 19, 2013 with
> commit #71cf59b9. There are probably some old packages still hanging
> in "download in progress", though.

<p align="center">§§§</p>

Martin Koller asked the list about his situation, in which he is
trying to cross-compile a 32-bit application on openSUSE 13.1 64bit.
The problem is that his application requires some Qt5 libraries that
are not available in 32-bit.
> * Answer: `osc build i586` the missing libraries

<p align="center">§§§</p>

Greg Freemyer wrote that `sleuthkit` suddenly stopped compiling in
Factory, even though he hasn't touched it for a month or more. It is
failing in the devel project, but only for Factory.
> * Jan Engelhardt responded that `libtsk.so` is being built without
> having all its dependencies specified. (In short, `ldd -r libtsk.so`
> returns unresolved symbols.) He provided a detailed test case for
> reproducing the issue on vanilla openSUSE 13.1. See <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00055.html">http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00055.html</a>

<p align="center">§§§</p>

In his quest to do `osc copyproject`
without rebuilding binaries (and save the rebuild counter for future
rebuilds), Kanstantsin Shautsou posted a number of technical questions
that were answered by Michael Schroeder in the "withbinaries
copyproject without rebuild" thread: <a
href="http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00057.html">http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00057.html</a>

<p align="center">§§§</p>

Adrian announced that Coolo and Christopher Hofman created an initial
implementation of notification support in OBS. For the rest of the
announcement, and the lively discussion that ensued, go to the thread
on `opensuse-packaging`: <a
href="http://lists.opensuse.org/opensuse-packaging/2013-12/msg00054.html">http://lists.opensuse.org/opensuse-packaging/2013-12/msg00054.html</a>

