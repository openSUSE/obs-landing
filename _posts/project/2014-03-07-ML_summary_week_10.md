---
layout: post
title: OBS Mailing List Summary, Week 10
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 10:

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00000.html">this
message</a>, Johannes Kastl started an interesting discussion on getting
`osc` to use credentials stored in kWallet.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00003.html">a
message posted to the list on 2014-03-02</a>, Martin Koegler presented a
code snippet containing a `sed` service to be added to the OBS source
services. The response from the OBS developers was positive -- he should go
ahead and submit it to the `openSUSE:Tools` project.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00007.html">disable
%check in local build</a> thread, Olaf Hering noticed that the `%check`
section of his spec file is still being executed, even when he builds using
`osc build --nochecks`.
> * Andreas Schwab noted that he can achieve this using `rpmbuild
> --nocheck`
> * this triggered a debate on how much overlap, if any, there should be
> between `osc build` and `rpmbuild` options.

<p align="center">§§§</p>

On 2014-03-05, Olaf Hering started <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00025.html">a thread</a>
entitled "osc broken: TypeError: feed() argument 1 must be string or
read-only buffer, not None" regarding a backtrace he gets when he commits
his package using the latest `osc`. The issue is reproducible and it occurs
when the package was originally checked out with an old version of
`osc`.

<p align="center">§§§</p>

On 2014-03-06, Marcus Heuwe submitted <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00035.html">a
patch</a> to add a -t $TEXT option to `osc vc` to support a template.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00039.html">this
message</a>, Andreas Schwab reports getting "AttributeError: HTTPConnection
instance has no attribute '_orig_stdout'" when he runs `osc -H ls`. Marcus
Heuwe reproduced the error and pushed a fix.

