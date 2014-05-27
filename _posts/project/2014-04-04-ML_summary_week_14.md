---
layout: post
title: OBS Mailing List Summary, Week 14
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 14:

<p align="center">§§§</p>

Martin reported the following kvm build error: "Initramfs unpacking failed:
broken padding".
> * Guillaume noted that this is 'armbuild07' (an ARM build node)
> * Dirk reported that he found a bitflip in the initrd for the guest on
> that worker. He refreshed the initrd now to the correct state.

<p align="center">§§§</p>

Henne <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00148.html">announced</a>
the release of version 2.5 of the Open Build Service. The hottest new
feature is the token API that let's you trigger builds from revision
control systems like github. Also, the web UI and API have been merged into
a single Ruby on Rails app.
> * See <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-03/msg00148.html">Henne's
> message</a> for the full release announcement.

<p align="center">§§§</p>

Andrew noted that, in a given distribution, only the most recently built
version of a package will be available to satisfy BuildRequires. Also, if
the "wrong" version of a BuildRequires dependency exists in the package's
project, no other project will be searched for that dependency. 
> * Dmitriy: The solution is to put the different versions into separate
> packages and give them unique names, e.g. foobar4, foobar52.
Are there
any plans to support multiple versions of a package within a single
project?
> * Adrian: No, as this conflicts with the requirement to be able to
> downgrade RPMs again in upper layers in case of problems. Also, if the
> packages do not support parallel installation of multiple versions, this
> would cause problems for the end user, as well.

<p align="center">§§§</p>

Timotheus <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00001.html">reported</a>
that all his Debian and Ubuntu package builds are failing.
> * Michael broke deb builds while refactoring the build script. Fixed now.

<p align="center">§§§</p>

Peter <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00003.html">reports</a>
that all his PowerPC (ppc) builds fail because the virtual machine thinks
it is a 64-bit ppc64.
> * Dinar noted that there were two separate issues: first, ppc (32bit) is
> building ppc64 packages; second, ppc64le is broken due to virtio enabled.
> Both fixed, and Factory rebuild planned.

<p align="center">§§§</p>

Ruediger <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00007.html">reported</a>
that aarch64 and armv6l builds are not working.
> * Adrian: it was a syntax error in the newly refactored build script.
> Fixed now.

<p align="center">§§§</p>

Darin <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00015.html">asked
for help</a> debugging a SLES package build failure. He thought adding
`norootforbuild` would have fixed it, but no go.
> * Marcus Meissner made the catch: the `BuildRoot` directive was missing
> in the spec file.
> * Andreas noted that older versions of `rpm` do not add BuildRoot by
> default.

<p align="center">§§§</p>

Marcus Huewe <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00020.html">submitted
a patch</a> to `build-pkg-rpm` to support older bash
versions that do not support the `-g` option.

<p align="center">§§§</p>

Karsten would like to be able to change the number of packages of a project
displayed in the OBS (version 2.4) web UI.
> * Henne pointed him to where he could tweak the source code.

