---
layout: post
title: OBS Mailing List Summary, Week 42
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the `opensuse-buildservice`
mailing list during week 42:

<p align="center">- * -</p>

Ladislav Slezak announced his successful Hack Week project
designed to speed up appliance builds in the Build Service by reducing
the number of packages that are downloaded. 
> * See [https://hackweek.suse.com/projects/143]()

<p align="center">- * -</p>

Fadi Kelajian asked about upgrading an existing OBS Server instance
from 2.3 to 2.4 -- he would like to upgrade without losing existing
data (projects, packages). Adrian advised him to read
[https://github.com/openSUSE/open-build-service/blob/master/dist/README.UPDATERS](https://github.com/openSUSE/open-build-service/blob/master/dist/README.UPDATERS)
and, of course, take a backup first.

<p align="center">- * -</p>

Ruediger Meier expressed displeasure over multiple requests like
[https://build.opensuse.org/request/show/188119](https://build.opensuse.org/request/show/188119)
to remove "deleted" repositories from projects. These requests got
auto-accepted even before he returned from vacation. 
> * Jan Engelhardt noted that certain types of requests are not delivered via email: [https://bugzilla.novell.com/show_bug.cgi?id=739335](https://bugzilla.novell.com/show_bug.cgi?id=739335)
> * Coolo responded that it's time to implement that email notification mechanism.
> * Adrian explained that, in this case, a "deleted" repository is one
>   that got moved somewhere else. Such a configuration will never build
>   until the path list of the "deleted" repository is fixed.

<p align="center">- * -</p>

Andreas Baumann asked a question regarding a project failing to
link to the `Fedora_17` build target, to which Kanstantsin Shautsou
noted that, since Fedora 17 is EOL, the problem will probably never
get fixed.

<p align="center">- * -</p>

Darin Perusich complained about a problem where, after doing a
local build, he couldn't open a new Konsole window. He traced this to
a permissions issue, where running `obs build openSUSE_12.3` caused
the mount options of `devpts` to change. Marcus Meissner replied that,
last week, he released a new build package that fixes the permissions
for 12.2 and 12.3.

<p align="center">- * -</p>

Boris Manojlovic complained that the OBS web UI is sluggish on
slower links. He posted a Firebug analysis on:
[http://paste.opensuse.org/29484148](http://paste.opensuse.org/29484148)
As ways to address the problem, he suggested: JavaScript
"minification", CSS "minification", gzip/deflate encoding/content
type, and Etag support.

<p align="center">- * -</p>

Brian K. White expressed amazement that the `xz` package "requires"
itself to build. This is not an explicit `BuildRequires`, but just the
fact that the build process assumes tar will handle a `.tar.xz` file.
> * Ruediger Meier noted that there are precedents for
>	 	this: for example, gcc requires gcc, coreutils
>	 	requires coreutils.
> * Michal Vyskocil posted a link to his Request 203465 on openSUSE Build Service: [https://build.opensuse.org/request/show/203465](https://build.opensuse.org/request/show/203465) (which has since been accepted)
> * Adrian responded to Ruediger's comment by saying that
> 	 	bootstrapping is unavoidable in the case of gcc, but
> 	 	should be avoided wherever possible.
> * Michal Vyskocil also noted that upstream provides
>	 	tarballs compressed using other technologies than
>	 	`xz`, like `gzip` and `bzip2`, and his request
>	 	addresses the issue.

<p align="center">- * -</p>

Guillermo Amat wrote about a bug that results in a "Failed to add
project or repository: unable to walk on path" error when he tries to
add an additional apth to his project's repository. Martin Koegler
replied that it's probably due to a JavaScript implementation issue in
some browsers, so perhaps switching to a different browser is in
order.

<p align="center">- * -</p>

Coolo posted an in-depth report about his Hack Week project, "Start
the engine", designed to fix an internal problem with the OBS web UI.
>	* See [http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00086.html](http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00086.html)

<p align="center">- * -</p>

Andreas Herrmann posted a mini-HOWTO for setting up proxy_mode with
Apache Header Rewrite and .htaccess against LDAP.
> * See [http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00099.html](http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00099.html)

<p align="center">- * -</p>

Andreas Herrmann wrote about getting an error 500 when he tried to
list all projects in the web UI, after upgdating OBS 2.4 Stefan Botter
responded with his analysis of a similar problem he ran into after
upgrading from 2.3 to 2.4.
> * See [http://lists.opensuse.org/opensuse-buildservice/2013-09/msg00084.html](http://lists.opensuse.org/opensuse-buildservice/2013-09/msg00084.html)
> * Andreas replied that his update was within 2.4, so the issue might bite everyone doing `zypper ref; zypper up` 

