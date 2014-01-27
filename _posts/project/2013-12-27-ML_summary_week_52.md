---
layout: post
title: OBS Mailing List Summary, Week 52
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 52:

<p align="center">§§§</p>

Bernhard Voelker reported that, inside the chroot environment during
`osc build`, the `/etc/mtab` file contains the entries of the outside
environment. As a result tools relying on that file (such as `df`) fail.
> * Coolo responded that build package has several code paths to
> create `/etc/mtab`, but here's what is probably happening: 

    cp /proc/mounts $BUILD_ROOT/etc/mtab
    chmod 644 $BUILD_ROOT/etc/mtab

<p align="center">§§§</p>

Dirk Müller would prefer that OBS not send emails with all recipients
listed in the `To:` field. This causes the discussion to happen in his
inbox, instead of in the request history. Also, he is having a hard
time filtering the discussions into a separate folder. 
> * Coolo is not willing to disable the feature, but if, at some point
> in the future, OBS gets a mail parsing feature, then munging of the
> `Reply-to` header will be possible. As for filtering, the subjects
> are already pretty long, but it is possible to add a unique tag.
> This won't be an ideal solution, though, since Gmail has some
> limitations when it comes to filtering.

<p align="center">§§§</p>

Koenraad Lelong posted about a segfault he is experiencing in his
project. It builds fine for openSUSE 12.2 and openSUSE 13.1, but when
he tries to build for openSUSE 12.3 (which is his real target), the
build ends prematurely with "Segmentation fault".
> * Answer: Based on an anlysis of the logfile, the prevailing
> conclusion is that Koenraad's program is crashing. The only solution
> is to debug the program.

<p align="center">§§§</p>

Of late, Bruno Friedmann has been seeing more and more builds fail due
to <b>OOM</b> (Out Of Memory). He would like to define minimum
hardware parameters that the build worker must meet. Is this possible?
> * Matwey V. Kornilov noticed that Bruno is building with
> `make -j4`, which causes four gcc instances to run simultaneously.
> Perhaps if he changed that to `make -j1`, the build would complete
> successfully.
> * Dimitriy Perlow suggested using a `_constraints` file. See <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00124.html">http://lists.opensuse.org/opensuse-buildservice/2013-12/msg00124.html</a>
> for details.

