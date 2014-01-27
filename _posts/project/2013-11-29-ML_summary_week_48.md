---
layout: post
title: OBS Mailing List Summary, Week 48
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 48:

<p align="center">§§§</p>

Dr. Edscott Wilson consulted the list about a problem he experienced
when trying to add a package to his home project via 
`osc addremove -r` -- he can only add the top directory. No
subdirectories are not added ("skipping directory" message displayed
for each), and with no directories, the package fails to build.
> * Answer: the `addremove` (ar) command in `osc` is only for
> packages, not projects. If you are about to import a bunch of
> packages, use `osc add` instead of `osc ar`.

<p align="center">§§§</p>

Dr. Edscott Wilson asked the list what is the correct way to specify
multiple spec files for different platforms.

> * Answer: Use the right namme for the spec file. For example,
> `foobar-CentOS_6.spec` instead of `foobar-CentOS_CentOS_6.spec`,
> `foobar-RHEL_6.spec` instead of `foobar-RedHat_RHEL_6.spec`

<p align="center">§§§</p>

Hans-Peter Jansen asked the list how to correctly specify packages
that need `autoconf` for building.

> * Answer: `autoconf` used to be included in the default build
> environment, but has since been removed. Therefore, the spec file
> should include `BuildRequires: autoconf` (or `automake`).

<p align="center">§§§</p>

Malcolm wrote that, when he attempts to remove a repository via the
web UI, it fails with error message "Failed to remove target
'FOO_BAR' Unable to delete repository; following repositories depend
on this project: ..." even though the repository/project no longer
exists.

> * Answer: this operation is not supported in the web UI. Use 
`osc meta prj -e -f $PROJECT` instead.

<p align="center">§§§</p>

Guillaume Gardet wrote about getting an "Unable to submit" error when he 
attempted a SR to `openSUSE:13.1:Update` via the web UI

> * Answer: use `osc mr` instead of the web UI
> * `osc sr` will also work, as `osc` will "auto-convert" the
> `sr` into an `mr`

<p align="center">§§§</p>

Guillaume Gardet wrote about his travails getting PHP 5.4 to compile
for SLE11-SP2. In the end, the problem turned out to be
systemd-related lines in the `%pre` and `%post` sections of the
spec file. These needed to be disabled for SLE11-SP2.

