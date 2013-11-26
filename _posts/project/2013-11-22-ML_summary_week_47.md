---
layout: post
title: OBS Mailing List Summary, Week 47
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 47:

<p align="center">§§§</p>

From November 13-16, the mailing list denizens helped Axel Theilmann
iron out an issue with his prjconf which was causing macro-related
errors at build-time.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00077.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00077.html</a>

<p align="center">§§§</p>

Another user, Roger Oberholtzer, was bitten by the "branched project
stalled" bug. The scenario: he enabled openSUSE 13.1 as a build target
for his projects/packages in OBS, but the builds were not triggered.
> * Dimstar noted that this is because the architectures are not
> automatically added to the project metadata. Until the bug is fixed,
> the metadata can be edited manually -- either using `osc meta -e
> prj` or via the web UI.  
> * Hans-Peter Jansen posted exact instructions for adding the missing
> architectures.
> * Full "branched project stalled" thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00087.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00087.html</a>

<p align="center">§§§</p>

Kevin Cox wrote to the list about how he was unable to login to the
OBS web UI.
> * Coolo's response: since Kevin is new to the OBS, he will need to
> use `osc` first to set up an account. The web UI does verify his
> password, but since he has no OBS account, he can't go any further.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00138.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00138.html</a>

<p align="center">§§§</p>

Darin Perusich reported a bug where he created an SR (#207488) and the
web UI says the SR is "Superseded by 207488" -- he is wondering how an
SR could be superseded by itself.
> * Coolo wrote back that he fixed the bug and deployed a workaround.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00134.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00134.html</a>

<p align="center">§§§</p>

Matthew Drobnak posted about a problem he has been having with
disabled packages not wanting to stay disabled. He tried various
things, like unpublishing, deleting, disabling the build. But the
package keeps coming back.
> * Andreas Schwab recommended that he try `osc wipebinaries`
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00149.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00149.html</a>

<p align="center">§§§</p>

Andrey Borzenkov posted to the list concerning some rendering issues
(with IE and an old version of Firefox) they've been having with the
web UI. Coolo referred them to Github.
> * Here's the link for reporting issues again: <a
> href="https://github.com/openSUSE/open-build-service/issues">https://github.com/openSUSE/open-build-service/issues</a>
> * Greg Freemyer joined the thread to mention a similar issue he was
> having. This one has since been resolved, at least as far as <a
> href="https://build.opensuse.org">build.opensuse.org</a> is
> concerned.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00143.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00143.html</a>

<p align="center">§§§</p>

Matthew Drobnak wrote about an issue he was having when trying to
build two or more versions of the same package, within a single
project. 
> * Andreas Schwab and Jan Engelhardt responded, noting that this is
> simply how the OBS works. A given package name can map only to a
> single RPM file. Or, said another way, the repository where packages
> are fetched from (see `osc ls -b [project_name]` doesn't distinguish
> between different versions of the same package. It will carry the
> version that was built last.
> * The solution to the problem, then, is to either build the
> different versions in different projects, or use different names.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00135.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00135.html</a>

<p align="center">§§§</p>

Greg Freemyer wrote that he has several packages in the `security`
project that build fine against 13.1, but just started failing for
`tumbleweed`. The build log shows failed build dependencies (missing
libraries). This is puzzling: since the libraries in question
are in 13.1, why would they be missing in tumbleweed?
> * Greg KH responded that it should work, since tumbleweed is based
> on the `13.1:Update` repo. Perhaps the problem will resolve itself
> in due course.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00159.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00159.html</a>

<p align="center">§§§</p>

Darin Perusich asked the list for advice on how to handle a situation
in which he needs to make a Perl package available in
`server:monitoring`. Normally he would just set up an `_aggregate`
link, but this particular package has a large number of dependencies
from `devel:languages:perl` that need to be available also.
> * Jan Engelhardt replied that the ideal way is to have all the
> dependencies in Factory. This obviates the need for crosslinking.
> But this only helps for the Factory builds. If one needs to build
> for multiple distributions, such a case probably calls for a
> distinct subproject in the Build Service.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00044.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00044.html</a>

<p align="center">§§§</p>

Darin Perusich asked the list for advice on how to handle a situation
in which he needs to make a Perl package available in
`server:monitoring`. Normally he would just set up an `_aggregate`
link, but this particular package has a large number of dependencies
from `devel:languages:perl` that need to be available also.
> * Jan Engelhardt replied that the ideal way is to have all the
> dependencies in Factory. This obviates the need for crosslinking.
> But this only helps for the Factory builds. If one needs to build
> for multiple distributions, such a case probably calls for a
> distinct subproject in the Build Service.
> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00044.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00044.html</a>

<p align="center">§§§</p>

Marguerite Su posted with an issue she was having with Hermes. In the
ensuing discussion, it came to light that she was experiencing two
separate issues: first, she was getting duplicate emails (this was due
to her being subscribed twice: once as packager and another time as
repo maintainer); second, emails were arriving with a time lag (hours
or even days). The time lag was confirmed by other list members, and
Coolo worked on it. At the time of this writing, he appears to be
close to a solution.

> * Read the whole thread: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00044.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00038.html</a>
