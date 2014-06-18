---
layout: post
title: OBS Mailing List Summary, Week 22
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 22:

<p align="center">§§§</p>

Benedikt is using ownCloud debian packages from OBS, but the `Release.key`
public key file for these is self-signed. Would it be possible to provide
verifiable repo keys?
> * In the <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00116.html">ensuing
> discussion</a>, it came to light that the public key of the Open Build
> Service itself has a signature that expired in 2008. An extended and
> signed version was uploaded.

<p align="center">§§§</p>

The Sphinx index engine bit Brian when he mistakenly branched a package in
the web UI. A new subproject was created under his home project, and now he
cannot delete either the package or the subproject.
> * This is a bug in Sphinx, occurring in special situations and not easy
> to reproduce.

<p align="center">§§§</p>

Willy is having problems getting his built packages to publish. He has five
packages building successfully for Debian 7.0, but only two show up on the
download page.
> * Adrian noted that depending on the momentary load on the
> server, it can take quite some time to create a new repo, so there's no
> other option except to wait and check periodically the web UI or `osc -r -v` 

<p align="center">§§§</p>

Johannes has built some packages in subprojects and would now like to move
them into his "main" project. How to move packages?
> * A <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00129.html">lively
> discussion</a> ensued. There are ways to accomplish what Johannes wants
> to do, but `osc` currently lacks a straightforward move command.

<p align="center">§§§</p>

Carsten ran into some errors updating his OBS instance from 2.4.6 to 2.5.3.
The errors are "/srv/obs/configuration.xml: No such file or directory"
and "rake aborted! Don't know how to build task 'ts:index'"
> * Adrian: The first error will fix itself -- the file will get written by a
> delayed job, after Carsten runs the database migration.
> * The second issue was caused by an incomplete `zypper up` run (`obs-api`
> was not updated).

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00152.html">this
thread started by Eric</a>, the list denizens discussed an OBS bug that
caused unresolved errors like "have choice for libxml2.so.2(LIBXML2_2.5.2)
needed by ???: libxml2-2-32bit libxml2-2"

<p align="center">§§§</p>

Rens <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00155.html">can't
get a kiwi project to build</a> on his private OBS instance -- it does
build on the public OBS, however.
> * Guillaume noted that Rens was missing 'openSUSE.org:' in his `source
> path` attributes. This openSUSE.org project provides the link to the
> public OBS.

