---
layout: post
title: OBS Mailing List Summary, Week 05
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 05:

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00125.html">OBS
web GUI access to SR's</a> thread, Archie Cobbs reported that his "My
Involved Requests" link seems to have disappeared from his home page in the
OBS web UI, so he can no longer view his current and previous submit
requests (SRs).
> * The link is not shown if the user does not have any current (open) requests.
> * There is no way to see past requests.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00135.html">ARM
build failures due to missing kernel-obs-build</a> thread, Guillaume
Gardet is seeing ARMv7 native builds fail on his private OBS instance. The error
message is: `getbinaries: missing packages: kernel-obs-build`
> * `kernel-obs-build` is the kernel to be used within KVM. For a native
> build this should be an ARMv7 kernel. Probably the native kernel is
> missing. Guillaume can ignore the rule by adding `VMinstall:
> !kernel-obs-build` to the instance project.
> * This did the trick.

<p align="center">§§§</p>

Rolf Krahl is trying to build for Ubuntu, but his packages are in an
unresolvable state.
> * This is because the packages have dependencies in a "Universe"
> repository that is not imported to OBS due to legal issues.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00149.html">Dep
resolution in libreoffice broken when adding Requires(pre):
%{name}-%{version}</a> thread, Tomáš Chvátal found a bug in the specfile
parser. 
> * As a workaround, please use `Requires(pre,): ...`

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00151.html">PrivateOBS:
Error when deleting 'repository' from Project</a> thread, Dimstar is having
trouble deleting a repo from a project in his private OBS instance.
> * After running the command `RAILS_ENV=production rake db:migrate`,
> everything is fine.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00156.html">Build
time resolver fails after newer package version was added to repo</a>
thread, Martin Weber has two versions (4.1 and 5.0) of a package in a single repository.
In his `BuildRequires:` line, he has `foo = 4.1` -- now his builds are
failing because the resolver only sees the 5.0 version.
> * There are two (and only two) options: either rebuild the newer-version
> package with a different package name, or put the two different versions
> in two different repositories.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00158.html">AppStream
AppData</a> mega-thread, Satyajit Sahoo asks if OBS could support
generating AppStream AppData, as this is the only way he can make my program
appear in Gnome.
> * The good news is that OBS already generates AppStream data
> * The bad news is that there is no out-of-the-box, documented solution.
> * A good starting point would be to look at (and improve) the
> `brp-extract-appdata` package in openSUSE
> * For the gory details, read the thread.

<p align="center">§§§</p>

Adrian announced the new "auto-cleanup" mechanism and policy for OBS. By
default all default branch projects (home:$ACCOUNT:branches:...) get an
attribute to self-destruct after a given time (currently 60 days). See <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00159.html">the
announcement</a> for details.

<p align="center">§§§</p>

Rolf Krahl would like to conditionally `Prefer:` a package. He has it
working for RPM packages -- is there a way to do this for deb packages as
well?
> * Adrian: Yes, see the prjconf of `Ubuntu:12.10` and specifically the
> `ubuntu_version` macro at the end.

