---
layout: post
title: OBS Mailing List Summary, Week 01
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 01:

<p align="center">§§§</p>

On December 27, Greg Freemyer reported search function brokenness in the 
OBS web UI. 
> * Ruediger Oertel responded that he had fixed the issue by 
> restarting ThinkingSphinx manually from rails console, which successfully
> started the searchd (after some fiddling even as user wwwrun), but
> `rcobsapidelayed restart` still fails to start the searchd successfully.

<p align="center">§§§</p>

Andi Sugandi asked the list for help with a spec file issue that was
causing an error `Problem: nothing provides libqt5-qtwebkit needed by
ignsdk-1.1.3-9.1.x86_64`
> * Dmitriy Perlow noted that his spec file says `Requires:
> libqt5-qtwebkit`, yet there is no such package. Presuming the OP's binary
> is linked to QtWebKit, no explicit dependencies are needed. In other
> words, the OP can simply leave out the `Requires:` line

<p align="center">§§§</p>

On December 17, Ruediger Meier had written to the list about `osc` tab
completion being broken. He asked what is the preferred way to disable
it. The problem seems to be that it attempts to access the network, 
causing a time lag in an operation that should be (nearly) instantaneous.
> * In the ensuing discussion several details emerged, but no clear fix.
> * Finally, it was suggested to file a bug report and ask for the 
> completions to be removed.

<p align="center">§§§</p>

On December 25, Matwey V. Kornilov initiated a discussion on the long
`armv7` build queue, and asks if OBS has a policy to not run armv7
builds on x86_64 workers?
> * Dirk answered that it is not a policy per se, but rather a "lesser
> of two evils" decision. There are quite often regressions / build
> failures happening only due to emulation bugs, and it is easier to avoid
> all that hassle by building natively. The reason for the long queue
> was that the main build hardware had crashed, and it took some time to
> find someone with physical access to the machine room to power-cycle it.

