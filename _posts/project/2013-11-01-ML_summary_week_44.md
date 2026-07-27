---
layout: post
title: OBS Mailing List Summary, Week 44
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 44:

<p align="center">- * -</p>

Wellenreiter reported the "unresolvable: nothing provides
libboost . . ." etc. error (possibly a duplicate of Andreas Baumann's
report from last week) and Dmitriy Perlow suggested that this is
because his project lacks the Universe packages. He should rebuild
them.

<p align="center">- * -</p>

Jeff Glanz from Dell's PG Release Engineering Team reported seeing
errors during rpm installation in Redhat 7 x86_64 builds, related to
keys in the rpm headers. They are using an old version of 'obs-signd',
from 2010. Michael Schroeder pointed him to the latest version, which
contains a bugfix for the corrupted headers. Jeff reported that
upgrading to version 2.3 of obs-signd fixed the issue for them.

<p align="center">- * -</p>

Oleg Girko sent two patches to 'osc' implementing support for API URLs
with pathname and support for TLS SNI if M2Crypto supports it. For a
full description and the patches themselves, please refer to Oleg's
message here: <a
href="http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00140.html">http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00140.html</a>

<p align="center">- * -</p>

Glenn reported getting an "Object not found!" error when he attempted
to "Go to download repository" from the page <a
href="https://build.opensuse.org/package/binaries/openSUSE:13.1/mariadb?repository=standard">https://build.opensuse.org/package/binaries/openSUSE:13.1/mariadb?repository=standard</a>
> * Coolo added the redirect and mentioned that it is also useful for
> 'osc build'

<p align="center">- * -</p>

Henne announced a <a
href="http://openbuildservice.org/2013/10/28/webui-plus-api/">blog
entry</a> and <a
href="https://github.com/openSUSE/open-build-service/issues/450">Github
issue</a> about the project, already reported on last week by Coolo,
to merge -- or marry, as Henne put it -- the OBS web UI and the OBS API.
(If you're curious which of these two is the bride and which the groom,
you'll have to ask Henne about that.)

