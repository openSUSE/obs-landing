---
layout: post
title: OBS Mailing List Summary, Week 11
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 11:

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00045.html">linking
with X11 in OBS</a> thread, Roger Oberholtzer reports getting a link-phase build
failure in OBS even though he can build the same package locally using the
exact same commands he sees in the OBS log.
> * Marcus Meissner: The build system builds with `--as-needed` by default,
> your local system probably not.
> * This led to a discussion of why openSUSE doesn't default to `--as-needed`
> and what could be done to prevent this issue in the future.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00053.html">this
message</a>, Darin Perusich asked how he could enable networking for build
workers in his private OBS instance. He wants to build Java apps using
`maven`.
> * Adrian responded that Darin could build inside of chroot (instead of
> using kvm), but this is not recommended. See the thread for details.
> * Rolf Krahl suggested <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00056.html">a
> different solution</a>.

<p align="center">§§§</p>

Adrian <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00065.html">announced</a> Open Build Service 2.5 Release Candidate.

<p align="center">§§§</p>

Guillaume <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00066.html">reported
a problem</a> with an ARM build worker, `armbuild13`. All jobs scheduled on
this worker are in schedule state, then it is in building state for a short
time and again schedule state.
> * A deep technical discussion ensued. The host was not coming up properly
> after reboot, most likely due to bad memory.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00067.html">package
rebuild is not triggered by dependent package rebuild</a>, ukjung.kim
has some inter-dependent packages in his home project and would like to
trigger a rebuild if he changes a macro in the project configuration.
> Adrian: build triggering does happen only when sources changed, rpms
> changed or dependencies changed. As long as you just change macros it
> will not happen. He will need to trigger a rebuild of a package that is
> `Require`d by the other packages, then they will rebuild as well.

<p align="center">§§§</p>

Guido Berhoerster would like to create a maintenance update for the
`lightdm` package, but he gets a "broken link" error when he tries to
`mbranch` it.
> * Adrian fixed it.

<p align="center">§§§</p>

Kyrill Detinov gets <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00083.html">a
traceback</a> when attempting to upload content to OBS using `osc ci`
> * Marcus Heuwe noted that the issue is already fixed in git master.

<p align="center">§§§</p>

Damian Ivanov would like the list's opinion on his idea of using a spec file
+ 2 Headers,2sources and a .pro file (uncompressed source) instead of the
standard tar.gz(compressed source) + spec file approach.
> * Ruediger Meier noted that there are already packages using this
> approach, e.g. `Base:System/hardlink`

