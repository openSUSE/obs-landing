---
layout: post
title: OBS Mailing List Summary, Week 15
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 15:

<p align="center">§§§</p>

Kanstantin tried to install an OBS (version 2.5) instance from the ISO, but
it created a 2GB root partition on a 50 GB HDD. This seems too small. 
> * Adrian used the USB installer and it increased the root filesystem size
> during boot.
Could the installer ask for a hostname before it runs all the OBS
configuration services?
> * Adrian: There is currently no code for an OBS setup wizard, but I will
> be happy to add it if someone works for it.
Could man pages be added to the default installation?
> * Adrian: We want to keep the appliance as small as possible: you can
> install that afterwards.  

<p align="center">§§§</p>

Phillipp is having trouble building his project for openSUSE 13.1 (x86_64).
Packages without `%configure` build fine. But those with it fail with
"/dev/null: Permission denied"
> * Andreas Schwab found the issue: the filesystem was mounted with the
> `nodev` option

<p align="center">§§§</p>

Adrian <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00039.html">announced</a>
the release of OBS 2.5.1, the first maintenance release for the 2.5
series. This update brings a fix for migration problems from OBS 2.4, a fix
for lost events for github triggers, and some wording and documentation
updates.


