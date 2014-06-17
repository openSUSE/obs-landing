---
layout: post
title: OBS Mailing List Summary, Week 17
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 17:

<p align="center">§§§</p>

Koenraad <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00052.html">has
packaged openocd 0.8.0</a> -- it builds just fine locally. During the configure
phase, it activates a number of interfaces. But when he tries to build the
package in the OBS, no interfaces are activated.
> * upon closer examination, it appears that libusb is not being found

<p align="center">§§§</p>

Darin would like <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00058.html">to
build postgresql extensions in his local OBS instance</a>. However, he
doesn't want to host the public postgresql packages since he only needs
them to satisfy build dependencies.
> * Andreas responded that adding openSUSE.org:server:database:postgresql
> to the repository path will automatically download the binary packages as
> needed.

<p align="center">§§§</p>

Stefan <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00062.html">posted
about his experiences</a> upgrading OBS from 2.4.6 to 2.5.1 -- it seems the
new version needs triple the CPU and four times the disk I/O. Is it
possible to downgrade back to 2.4.6?
> * Adrian posted some pointers. Stefan notes that the schedulers for i586
> and x86_64 seem to burn a lot more CPU cycles than compared to 2.4.6, and
> this results in more I/O.

<p align="center">§§§</p>

Darin wrote that <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00066.html">the
ant package fails to build on SLE_11</a> due to a "Type mismatch" error. He
believes it is related to GCC Bug 35410.
> * The package started building after migrating to openJDK from gcj

<p align="center">§§§</p>

Henne reported the SAN storage-related OBS downtime, and 8 hours later
Adrian reported that the OBS is back.

<p align="center">§§§</p>

Adrian reported the release of OBS 2.5.2 -- see <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00080.html">the
original email</a> for details.

