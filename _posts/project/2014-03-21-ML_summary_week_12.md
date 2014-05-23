---
layout: post
title: OBS Mailing List Summary, Week 12
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 12:

<p align="center">§§§</p>

Matwey is <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00088.html">trying</a>
to build locally using `lxc` as a VM.
> * Adrian confirmed that the lxc support in the build script is not
> working at the moment. Please use kvm, instead, if you are looking for a
> secure build.

<p align="center">§§§</p>

Matthew has created a new project with two subprojects. One of the
subprojects requires the other subproject as a build dependency. To
represent this in the spec file, he is using `BuildRequires: lmdb`, but the
build fails because it cannot find `lmdb`.
> * The solution is to use `lmdb-devel` instead.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00101.html">this
thread</a>, Damian writes that he can trigger a rebuild manually using `osc
token --trigger` but cannot get it to automate via github.
> * Coolo looked in the OBS logs and confirmed that github did not try to
> connect at the times in question. Since others are using a similar setup
> to trigger update events via github, the problem is most likely in
> Damian's configuration.
> * Damian found the issue -- he forgot to remove the quote characters from
> the token. These are required by `osc` but illegal on github.

<p align="center">§§§</p>

<a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00110.html">This
thread</a> explores why a package could build fine and then enter into an "unresolvable" state after generating the package and package repo.
> * In this case, the user was attempting to build an incompatible version
> of openssl. This would replace the system openssl package with one with a
> different major version. As a result, `libssh2` will no longer find its
> dependency. He should use the distribution-supplied version.

<p align="center">§§§</p>

Darin <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00117.html">reports</a>
that he created a `_link` for the R language in 
`server:database:postgresql` and set it to only build/publish for SLES. It built
successfully, but is not publishing to the repo.
> * Andreas noted that the SLE_11_SP3 repository is still building.
> Publishing doesn't start until all packages are built.

