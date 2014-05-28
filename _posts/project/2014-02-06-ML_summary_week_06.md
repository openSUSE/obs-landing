---
layout: post
title: OBS Mailing List Summary, Week 06
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 06:

<p align="center">§§§</p>

Myles English asked how the version of the Arch Linux build target is
determined, when Arch Linux is "rolling release".
> * Michael Schroeder: We simply do an rsync on the repos every weekend.

<p align="center">§§§</p>

Adrian: Open Build Service 2.5 Beta 1 released
> * For all the exciting new features, see <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00003.html">the
> announcement</a>

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00012.html">package
not found even though its RPMs are being updated</a> thread, auxsvr
reported that, after branching the `kernel-desktop` package and then
deleting his branch several weeks ago, zypper still thinks the package is
still in the repository. The package is still being updated, but OBS cannot
find it and auxsvr cannot modify it.
> * Adrian replied that it looks like a bug. He prepared a clean package
> for auxsvr and they discussed what auxsvr might have been doing to
> trigger this strange OBS behaviour.

<p align="center">§§§</p>

An Arch Linux user writes that he has been playing with the OBS lately.
He has successfully created arch packages (PKGBUILD) which build correctly.
However, some packages he'd like to build via OBS require the arch
Community repository, which doesn't seem to exist in the OBS. . . 
> * This type of question comes up often, and the answer, it seems, is
> always the same: the repository contains packages that are not allowed on
> OBS for legal reasons.  
> * See the <a
> href="http://en.opensuse.org/openSUSE:Build_Service_application_blacklist">Build
> Service Application Blacklist</a> for details.  

<p align="center">§§§</p>

How to change the email address of my OBS account?
> * Since OBS user authentication is provided by Access Manager, use the
> Access Manager "Manage Account" page: <a
> href="https://secure-www.novell.com/selfreg/jsp/protected/manageAccount.jsp">https://secure-www.novell.com/selfreg/jsp/protected/manageAccount.jsp</a>

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00029.html">osc
kvm builds walkthrough</a> thread, Wolfgang Rosenauer and Guillaume Gardet
further explored how to set up osc to do local build in kvm. Wolfgang's
problem may be that he doesn't have an initrd for osc. See the thread for
details.

