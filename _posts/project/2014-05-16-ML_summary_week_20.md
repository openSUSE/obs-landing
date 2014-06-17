---
layout: post
title: OBS Mailing List Summary, Week 20
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 20:

<p align="center">§§§</p>

Damian had a problem with the tar_scm service checking out bazaar repos
from launchpad, but he solved it himself after finding an example on OBS
using `bzr tar_scrm` service. See <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00032.html">the
thread</a> for details.

<p align="center">§§§</p>

Liquider has a subproject where he is building binaries, but he wants to
have these binaries published elsewhere (in the main project, in this case).
> * Roman suggested that he look at `osc aggregatepac`

<p align="center">§§§</p>

Rick noticed that `allow_anonymous` and `new_user_registration`
were moved into /configuration API as anonymous and registration. But he <a href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00035.html">cannot
seem to  configure these settings via the API</a>.
> * Stefan pointed him to the correct `osc api` incantations.

<p align="center">§§§</p>

Ruediger wants to know if it is possible to run a command from the `%build`
section as root.
> * A very lively discussion ensued -- <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00036.html">see
> the full thread for details</a>. In short, it is possible via a special
> setting, but probably not advisable.

<p align="center">§§§</p>

Ruediger also wants to know if it's possible to `BuildRequire` a package <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00044.html">without
installing all its dependencies</a>? He just needs some headers.
> * Jan and Andreas both answered that this indicates a need to split the
> package into subpackages. If there is a subpackage containing just the
> headers, this could be BuildRequired.

<p align="center">§§§</p>

Michael announced that new build repository handling has been enabled for
home projects. OBS maintains an internal repo used for building (the ":full
tree"). The `useforbuild` flag can be used to configure if built packages
are copied into the tree or not.
> * <a
> href="http://lists.opensuse.org/opensuse-buildservice/2014-05/msg00051.html">see
> the announcement for details</a>.

<p align="center">§§§</p>

Andreas thinks something is wrong with the i586 `Arch_Extra` image -- it is
continually in "unresolvable" state with "nothing provides gcc-libs =
4.9.0-2 needed by gcc". The 64-bit version looks fine.
> * Michael found the issue and triggered a re-sync.

