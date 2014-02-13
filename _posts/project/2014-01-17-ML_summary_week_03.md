---
layout: post
title: OBS Mailing List Summary, Week 03
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 03:

<p align="center">§§§</p>

Hans van Maaren wrote that he installed the latest OBS appliance
behind a proxy. The openSUSE proxy seems to work fine, but the
proxy settings for OBS do not work. He based his proxy settings 
on <a
href="http://en.opensuse.org/openSUSE:Build_Service_private_installation">http://en.opensuse.org/openSUSE:Build_Service_private_installation</a>.
Yet despite best efforts, the Add Repositories page is empty.
> * Martin Weber, who runs OBS behind a proxy, provided some pointers: <a href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00119.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00119.html</a>

<p align="center">§§§</p>

Roger Oberholtzer would like to change the name of an existing 
project that contains packages. How to proceed, when `osc` lacks
a rename option? The list suggested that he do something like this:
> `for pkg in $(osc ls oldprj); do osc copypac oldprj pkg newprj; done`

<p align="center">§§§</p>

Greg Banks posted a question regarding a package that requires a particular
header file (`valgrind.h`) to build. He would like to build the package for
RHEL, but OBS cannot find the RHEL devel RPM containing this header file.
> * A lively discussion ensued: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00049.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00049.html</a>

<p align="center">§§§</p>

Flavio Castelli asked the list if there is a way to prevent OBS from
stripping all binaries at the end of the build. His package contains two
binaries, both written in Go, and the checksum (unstripped) of one is
hard-coded in the other.
> * A discussion ensued, but at the time this summary went to print, a
> solution had yet to emerge: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00060.html">http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00060.html</a>

<p align="center">§§§</p>

On January 15, Greg Freemyer asked if the old Hermes notifications (which
have been replaced by the new notifications) will be turned off at some
point, or if each person will have to log in and turn them off manually?
> * Coolo responded that he has already disabled all default subscriptions
> of Hermes. ("If you still get Hermes notifications, you created these
> subscriptions yourself and you need to disable them yourself too.")
