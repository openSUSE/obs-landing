---
layout: post
title: OBS Mailing List Summary, Week 04
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 04:

<p align="center">§§§</p>

The <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00026.html">saga</a>
of Hans's OBS proxy continued. He described the exact steps he took to
install and configure the proxy, but it still doesn't work.
> * Martin Weber posted some possible fixes in <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00119.html">this
> post</a> -- he is already running OBS behind a proxy, but this use
> case is not particularly well-tested.
> * Hans confirmed that Martin's fixes worked for him.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00066.html">osc
problems with openSUSE 13.1</a> thread, Johannes confirmed that the
directories in question are located on an NFS share, which would mean
the problem might be related to bnc#857610. 
> * Marcus triggered a new serve run in the `devel:tools:scm`
> repo, so a new package should have appeared there by now.
> * Johannes noted that the problem started after he upgraded to
> openSUSE 13.1 from 12.3. Also, the problem only appears on certain
> projects. Details in <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00118.html">this
> post</a>
> * Awhile later Johannes confirmed that the update fixed the problem.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00079.html">Arch_Extra</a>
thread, Andreas Baumann has a question about the `Arch_Extra` repo,
which doesn't seem to have a maintainer. When he tries to build, he
gets a message indicating that the `krb5` package is missing. He would
like to see the ArchLinux distribution kept up-to-date in OBS.
> * Michael Schroeder wrote that packages are synced automatically
> once a week, but new dependencies for "packman" must be added
> automatically to the "preinstall" list. Daily syncing would be
> possible if there was enough demand.
> * Andreas came back with some more packages that were needed, 
> Michael added those as well, and Andreas confirmed that this fixed
> the problem.

<p align="center">§§§</p>

Olaf Hering and Jan Engelhardt discussed the finer points of the
`_ignore_exclusive_arch` macro on ppc64 and armv7l architectures in <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00081.html">this
thread</a>.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00089.html">this
thread</a>, Olaf Hering asked about an issue that prevented further work on a
package for which a SR to Factory is pending.
> * Adrian noted that the issue is an implementation detail in the
> factory-auto checker review script, and it is intentional -- Coolo
> wants to see if the submitted source is working at all.
> * Coolo noted that the review state of `factory-repo-checker` can be
> seen by running `osc rq show`

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00097.html">osc
kvm builds walkthrough</a> thread, Wolfgang Rosenauer asked about
documentation on doing kvm-based local osc builds.
> * Adrian's answer: `osc build --vm-type=kvm ...` (assuming the
> system and kernel support kvm, of course)

<p align="center">§§§</p>

Klaas Freitag notified the list of problems building for xUbuntu_13.10
> * The list referred him to the OBS 2.4.5 Release Notes, which say
> that an update of the perl-BSSolv package is needed.

<p align="center">§§§</p>

Arsen Shnurkov would like to see OBS build packages for MacOS-X
> * Adrian wrote that OBS does not have parsers for the MacOS package
> format. Volunteers are welcome to work on this. Since MacOS-X is
> similar to BSD, such work could eventually lead to support for
> other BSD-like systems.
> * For details, see <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-01/msg00116.html">Adrian's
> post</a>

<p align="center">§§§</p>

Andreas Hauffe is unable to find the `nss-pam-ldap` package for
openSUSE 13.1. Jan Engelhardt suggested that he use `sssd` to connect to
LDAP, instead. This works fine.
> * In response to the original question, Darin Perusich noted that
> the package names are `pam_ldap` and `nss_ldap`

