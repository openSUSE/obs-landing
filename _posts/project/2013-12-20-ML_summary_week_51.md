---
layout: post
title: OBS Mailing List Summary, Week 51
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 51:

<p align="center">§§§</p>

Week 51 started with a couple of operational glitches. First, Adrian
wrote that he was forced to disable `home:*` areas due to an issue
with the OBS storage subsystem. Then, doiggl reported that OpenQA
tests seem to be broken or stuck. 
> * Bernhard M. Wiedemann noted that the second stage is not running. 
> * Josef Reidinger responded that this is on purpose, since the new
> installer will have no second stage at all (everything will happen
> in the first stage). Once the installer modifications have
> stabilized, the OpenQA test will be need to be updated.

<p align="center">§§§</p>

Ruediger Meier is missing Mandriva 2013 in OBS. Adrian wrote that it
could be added, but so far nobody has fixed the tools needed to
generate Mandriva repos. Michael Schroeder didn't agree, however -- he
claims to have fixed OBS Mandriva repo generation a year ago.

<p align="center">§§§</p>

Nandhini Sivakumar consulted the list regarding a private OBS
instance with a worker in a separate machine. Packages do not build:
instead, they get stuck in "dispatching" state.
> * Answer: the OBS server cannot see the worker. Check the hostname.

<p align="center">§§§</p>

Jan Engelhardt submitted a patch to fix some English grammar errors he
found in comments in the OBS web UI source code.

<p align="center">§§§</p>

Guillaume Gardet would like to submit a new package consisting of just
a `_link` file.
> * Answer: Andrian responded that this should be possible by
> specifying the md5sum of the unexpanded source as a revision, but
> Guillaume couldn't get it to work using the md5sum provided by `osc
> log`.

<p align="center">§§§</p>

Guillaume Gardet followed up with another issue: `osc chroot` is fine
if you are on an arch-compatible system but if you build for ARM using
qemu, you get an "Exec format error". 
> * Answer: he was using an obsolete version of `osc` -- after he
> upgraded to version 0.142.2, the problem went away.

<p align="center">§§§</p>

Roger Oberholtzer is trying to build a Tcl 8.6-based application in
OBS. All the RPMs get built correctly, but the build then fails on a
subsequent check. He would like to disable the check. 
> * Marcus Meissner noticed a number of implicit declarations of
> functions, which points him to a missing `#include`
> * Roger confirmed that he did in fact get i586 builds by adding
> `#include <tcllnt.h>` -- the package is still not building for
> x86_64, however.

<p align="center">§§§</p>

Werner Fink posted a patch implementing a workaround for the
libreadline colon trouble if COMP_WORDBREAKS includes colon as regular
word break.

<p align="center">§§§</p>

Archie Cobbs reported an issue he has with RPMlint entering an
infinite loop, but only on i586 -- the package builds fine for x86_64.
> * Answer: This happens when you package `%{_libdir}/*` -- use
> a more specific pattern.
