---
layout: post
title: OBS Mailing List Summary, Week 46
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 46:

<p align="center">§§§</p>

Greg Freemyer asked about how packages from devel projects make it
into Factory. Is the process automated? 
> * Coolo posted a link to a message to the opensuse-packaging ML sent
> on 2012-JAN-30 by Vincent Untz: <a
> href="http://lists.opensuse.org/opensuse-packaging/2012-01/msg00191.html">http://lists.opensuse.org/opensuse-packaging/2012-01/msg00191.html</a>
> * Apparently, not everyone was aware that when changes are made to a
> devel project, the changes had to be submitted to Factory manually.
> However, we now have an `obs-autosubmit` script (<a
> href="https://gitorious.org/opensuse/obs-autosubmit">https://gitorious.org/opensuse/obs-autosubmit</a>)
> that submits unsubmitted changes to Factory, as long as they build.
> * Of course, this automatic submission can be disabled on a
> per-project or per-package basis.

<p align="center">§§§</p>

Ralf Lang wrote that he triggered a build that seems to have entered
an endless loop. The image size has grown to nearly 280GB and is
continuing to grow. He knows how to simply stop it, but he would like
to gain some insight into what went wrong.
> * Boris Manojlovic suggested to run `osc abortbuild` and possibly
> change the image type. Although this might not be a "real" solution,
> it has helped others with similar issues in the past.

<p align="center">§§§</p>

Axel Theilmann posted a pointer for folks who might be setting up
a private OBS instance:
> * SSL connections were failing because the CA certificates were not
> present in the system. Solution: install the ca-certificates-mozilla
> package. (Maybe it would be useful to add that package as a
> dependency?)

Since Axel intends to use his private OBS instance for compiling ARMv7
binaries on an x86_64 machine, he wanted to know more about the
`emulator.sh` script used for building.
> * Andreas Schwab replied that the `emulator.sh` script is only for
> building with a full-system emulator. QEMU builds emulate user space
> only, and are supported out of the box.
> * The only thing that needs to be checked is whether the
> `qemu-linux-user` package is present in the build environment. See
> `osc meta prjconf openSUSE:Factory:ARM` for hints.

<p align="center">§§§</p>

codeminister, who is new to OBS, is have trouble enabling the <a
href="http://software.opensuse.org">http://software.opensuse.org
download page</a> -- otherwise known as the OBS download page -- for
his project. 
> * Note that this is documented here: <a
> href="http://software.opensuse.org/download/doc">http://software.opensuse.org/download/doc</a>
> * Dmitriy Perlow noted that the real package (rpm) name must be
> given after the `&package=` key in the URL. Also, for the download
> page to be updated properly, the package must be published after the
> build completes.

<p align="center">§§§</p>

Coolo wrote that <a
href="http://build-test.opensuse.org">build-test.opensuse.org</a> has
been running on master for some time without issue, and now that 13.1
is out he would like to update <a
href="http://build.opensuse.org">build.opensuse.org</a> to master as
well.
> * He followed up a short time later with the news that the update is
> done.

<p align="center">§§§</p>

Darin Perusich reported an issue with the "tasks" link in the OBS web
UI. It no longer takes him to his task list as it did before. Instead,
it takes him to his OBS `/home` page, where the tasks link is missing.
> * Coolo wrote back that the link was missing due to a bug that
> caused the home view to now show requests if only declined requests
> existed. The bug has since been fixed.

<p align="center">§§§</p>

Tobias Klausmann reported that, after the latest OBS update, creating
submit requests is broken. The target projects/packages fields are 
pre-filled with numbers instead of project/package names.
> * Coolo attributes the issue to the fact that request deletion was
> not covered by the test suite.

<p align="center">§§§</p>

Jan Engelhardt asked why some packages now have three numbers in
`%release`?
> * Michael Schroeder responded that, some weeks ago, the 13.1
> codestream was split from Factory. From that point on, all 13.1
> builds will get an extra digit, so that commits to 13.1 can't
> "overtake" the corresponding Factory package.
> * An in-depth discussion of how the version numbers change under
> different build-trigger scenarios followed. For the details, see: <a
> href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00079.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00079.html</a>

<p align="center">§§§</p>

Hans-Peter Jansen wrote that, after branching `LibreOffice:Stable` to
his home project, no packages appeared in the monitor. 
> * Several people responded that he had no architectures enabled in
> his branch. 
> * Tomáš Chvátal mentioned that he has encountered a similar problem
> when trying to add repos in the web UI -- they get created with
> empty architectures. His solution is to use `osc meta prj -e` 
> * Andreas Schwab noted that the list of architectures can also be
> edited in the web UI.
> * Coolo wrote that the mailing list is not the right place to report
> OBS issues. Instead, use github: <a
> href="https://github.com/openSUSE/open-build-service/issues">https://github.com/openSUSE/open-build-service/issues</a>

