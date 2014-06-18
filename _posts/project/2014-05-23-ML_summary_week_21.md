---
layout: post
title: OBS Mailing List Summary, Week 21
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 21:

<p align="center">§§§</p>

Guillaume has a package that builds locally, but takes a long time. When he
tries to build it on build.opensuse.org, the job times out and is killed.
How can this time-out be increased?
> * Adrian: the time-out is hard-coded. We need to find out why the build
> hangs so long and address that.
> * Some possibilities were discussed <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00077.html">in
> the thread</a>.

<p align="center">§§§</p>

Rens would like to know where to find the `/srv/www/obs/webui/options.yml`
file which used to be used to configure the OBS web UI, but has gone
missing since 2.5.
> * Adrian: web UI and API have been merged for 2.5. Please read the release
> notes of 2.5 for details.

<p align="center">§§§</p>

Joschi writes that he branched the sssd package from openSUSE:13.1 and now
it fails to build in his home project, though he made no modifications.
> * In <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00083.html">the
> ensuing discussion</a>, it came to light that when a package is branched
> from openSUSE:13.1 it actually builds against openSUSE:13.1:Update --
> this default is on purpose and will not be changed. To work around it,
> one must use the command-line client `osc`.

<p align="center">§§§</p>

Dominig <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00093.html">wrote
to the list</a> about some problems encountered in
re-bootstrapping Tizen3 Common for the ARM architecture. The difficulties
are in glibc and a few other packages. Of these, glibc is the most
critical.
> * He wrote back a couple days later with a fix (changed a couple lines in
> the project config)

<p align="center">§§§</p>

Adrian <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00095.html">announced</a>
the release of Open Build Service (OBS) version 2.5.3.

<p align="center">§§§</p>

Ruediger <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00097.html">would
like to know</a> if there is an easy way to BuildRequire a
kernel RPM that matches the currently-running kernel.
> * In his reponse, Adrian describes the mechanism OBS has for this and how
> to use it. You can also build your own kernel.

<p align="center">§§§</p>

Julien is missing some Red Hat devel packages, e.g. `lapack-devel`.
> * Answer: most likely they are only distributed via RHN.

<p align="center">§§§</p>

On his private OBS instance, Andrew would like to BuildRequire packages
that only exist in the Fedora Extra Packages for Enterprise Linux (EPEL)
repository. 
> * A <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00102.html">lively
> discussion</a> ensued.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00106.html">this
thread</a>, Rick and Adrian discuss the finer points of cross-building on a
private OBS instance using QEMU chroot.

