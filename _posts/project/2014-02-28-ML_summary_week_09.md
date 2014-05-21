---
layout: post
title: OBS Mailing List Summary, Week 09
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 09:

<p align="center">§§§</p>

Robin changed his OBS username, but his projects are still associated with
the old username.
> * Adrian replied that he should use `osc copypac` to copy the projects to
> the new user. When that is done, Adrian can remove the old projects.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00064.html">EXE
package format</a> thread, Jan Engelhardt writes that the <a
href="https://en.opensuse.org/openSUSE:Build_Service_comparison">Build
Service comparison</a> wiki page claims that OBS supports -- even if only
experimentally -- the "exe" package format, yet grepping for zip\b or exe\b
in the files of build.rpm does not yield any hint towards zip/exe
generation. Using mingw works to generate the exe file, but it is buried in
an RPM file.
> * Adrian responded that there is no such support in build, but one could
> add it via a hook using `/usr/lib/build/checks/$script` mechanism. This
> could extract the exe file and store it as seperate build result in OTHER
> directory. 
> * A lively discussion ensued

<p align="center">§§§</p>

Dominique wrote that he has been seeing an accumulation of failed builds,
all related to kernel crashes. A rebuild of the package generally clears
the issue.
> * Adrian responded that the `udev` package appears to be triggering a bug
> in the Factory xen kernel. So, this is actually a problem inside of
> factory. It looks like the kvm kernel is not affected, so this is the
> reason why you see this only sometimes. Dominique should create a bug
> report for the kernel team.
> * Dominique did the needful (bnc#865554), and Coolo disabled use of the
> Factory kernel until the problem is resolved.

<p align="center">§§§</p>

Andreas Baumann likes to set, e.g., `Release: %%{?dist}.<CI_CNT>.<B_CNT>`
using `osc meta prjconf` and would like to do something similar for Debian,
i.e., patching the 'Version' setting in the dsc file and the
first entry of the 'debian/changelog', as well as for ArchLinux -- there he
would like to patch the 'pkgver' variable in PKGBUILD. Also, it looks like
Debian packages whose content changes, but not their filename, are not
being re-published.
> * Martin Koegler: To update the version in the dsc, you proably need the
> source services. Also, the version in the changelog is only synced if
> debtransform is used (debian.changelog file is part of the sources).

