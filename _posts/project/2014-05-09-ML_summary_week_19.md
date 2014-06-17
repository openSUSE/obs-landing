---
layout: post
title: OBS Mailing List Summary, Week 19
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 19:

<p align="center">§§§</p>

Christian updated his OBS instance from 2.4.6 to 2.5.1 and now <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00005.html">any
new or rebuilt package is not published</a> in `filelist.tar.gz`. He
attached the publisher log.
> * It is related to SLE_11_SP3's `rpm-python` package. Marcus posted a
> patch to yum that Christian could apply as a workaround.

<p align="center">§§§</p>

John posted that he no longer has any rights in his own home project. He
cannot create or delete packages.
> * Adrian re-added John with maintainer role.

<p align="center">§§§</p>

Darin wrote that <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00013.html">a
number of packages are stuck in an unresolvable dependency cycle</a> caused
by the `ant-junit` package for SLES.
> * From the discussion, it appears to be a bootstrapping issue. Adrian
> noted that Darin can himself import the openSUSE_13.1 junit4 package into
> the SLE_11 Java:packages repo using an aggregate.

<p align="center">§§§</p>

Jan <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00018.html">thought
that there was a problem</a> with the OBS not installing dependencies that
come from the same project as the package being built, but Michael pointed
out a discrepancy between the `Build-Depends` settings in his `dsc` and
`debian.control` files.

<p align="center">§§§</p>

After reporting it as an issue and being told to upgrade to OBS 2.5, Stefan
is <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00019.html">still
seeing the same symptoms</a>: scheduler state is "The repository setup is
broken, build not possible" accompanied by a "bad config" message in the
scheduler log.
> * Adrian gave him some pointers; `obs-admin --deep-check-project` fixes
> the issue. Stefan has this running every hour in a cron job.

<p align="center">§§§</p>

Hans-Peter reports that he <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00026.html">cannot
build libtirpc anymore</a>. The error is "TOPDIR empty".
> * Michael traced the problem to a `Keep:` line in the project
> configuration, which is a problem for openSUSE 12.3 and earlier, and
> suggested a fix.

