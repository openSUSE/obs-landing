---
layout: post
title: OBS Mailing List Summary, Week 43
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 43:

<p align="center">- * -</p>

Andreas Herrmann wrote that his message concerning an error 500 when he tried to
list all projects in the web UI was a false alarm.

<p align="center">- * -</p>

Kyrill Detinov wrote about the OBS failing to download a tarball from
`www.indii.org`. It appears that the site is blocking the user agent
`wget`. The issue was cleared up by the author of the software, who
suggested to use [http://cdn.indii.org](http://cdn.indii.org) instead of
[http://www.indii.org](http://www.indii.org). This works with `osc
service localrun download_files`.

<p align="center">- * -</p>

Andreas Baumann asked why `libboost-locale1.53-dev` is missing
in the `xUbuntu_13.10` repository. He finds this odd, since other
Ubuntu distributions typically include it. He has been using a
cumbersome workaround. 
> * Dmitriy Perlow explained that this package is missing because it
> is from Ubuntu's "Universe" repository, which is for
> community-maintained (i.e. not officially supported) software. This
> is not imported by OBS due to the presence of `ffmpeg` and other
> stuff.

<p align="center">- * -</p>

Olaf Hering reported a problem submitting revision 242 of
`Virtualization/libguestfs`. The URL of the failing revision is: [https://build.opensuse.org/request/diff/204088](https://build.opensuse.org/request/diff/204088)
> * Dominique Leuenberger a.k.a. Dimstar responded that this revision
> never built on OBS -- the follow-up checkin came too soon. Olaf will
> need to resubmit, because Factory-auto ONLY accepts the review when
> it can verify that the sources built. It does not matter how long it
> has to wait; as long as the `rev` is `LATEST`, it will keep on
> verifying. If `LATEST` is newer than what was submitted, and the
> submitted never built, it is declined.
> * Dimster went on to clarify that the check carried out by Factory-auto
> looks at whether `rev N` builds as submitted. It relies on OBS
> history data to make this determination: it does not build anything 
> itself.
> * Conclusion: this is a corner case that is not worth investing
> additional build power to provide better treatment.

<p align="center">- * -</p>

Nico Kruber reported trouble building packages for Ubuntu 13.10. He
recalled that there was a similar problem with Debian 7.0 when it was
imported:
[http://lists.opensuse.org/opensuse-buildservice/2013-05/msg00115.html](http://lists.opensuse.org/opensuse-buildservice/2013-05/msg00115.html)
> * Michael Schroeder fixed the issue by tweaking the Ubuntu 13.10
> project config.

<p align="center">- * -</p>

Glenn asked when will a repository for openSUSE 13.1 be created?
> * Dimstar's answer: On November 13 2013 - also known as release date of
> openSUSE 13.1.  Until then, beta/rc installs point to the right 
> repositories already:
>   * [http://download.opensuse.org/distribution/13.1/repo/oss/](http://download.opensuse.org/distribution/13.1/repo/oss/)
> * Whatever server magic is used to redirect to other places should not have any relevance to the user of the repository.

<p align="center">- * -</p>

Guillermo Amat's “Failed to add project or repository: unable to walk
on path” thread from last week continued with Henne Vogelsang
reporting that he fixed the issue:
> * [https://github.com/openSUSE/open-build-service/commit/2be99501423c1b703e180ca380f1e3d0c7c2c109](https://github.com/openSUSE/open-build-service/commit/2be99501423c1b703e180ca380f1e3d0c7c2c109)
> * And Guillermo confirmed that Martin Koegler's workaround works for him.

<p align="center">- * -</p>

Greg Freemyer reported receiving a 404 when he attempted to delete the
[server:zope](https://build.opensuse.org/project/show/server:zope)
project via the web UI (i.e., [this
URL](https://build.opensuse.org/request/delete_request?method=post)).
The project is obsolete now, but was originally created to solve 
[a bug](https://bugzilla.novell.com/show_bug.cgi?id=221256)
opened against openSUSE 10.2.
> * Coolo responded that he already noticed this problem (delete requests
> require a package, for no good reason) while refactoring code.

<p align="center">- * -</p>

Adrian announced the release of Open Build Service (OBS) 2.4.5
> * Link to the announcement:
> [http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00132.html](http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00132.html)
