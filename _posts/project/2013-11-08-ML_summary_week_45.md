---
layout: post
title: OBS Mailing List Summary, Week 45
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 45:

<p align="center">§§§</p>

Back in October, Brian K. White had asked how to abort and restart a
build that has hung for hours. He tried running `osc abortbuild` and
`osc rebuild` -- both commands returned `ok` but the build is still
hung.
> * Michael Schroeder replied that there should be a `restartbuild`
> command in osc, but it is missing. For the time being, the same
> effect can be accomplished using `osc api`.
> * For the full `osc api` command example, see the thread here: <a href="http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00009.html">http://lists.opensuse.org/opensuse-buildservice/2013-10/msg00009.html</a>

<p align="center">§§§</p>

Christoph Dwertmann reported a problem building a package with `ruby`
as a build dependency. It works for Fedora 17 and 18, but appears to
be broken on Fedora 19.
> * Klaus Kaempf noted that, since Fedora 19 couldn't decide on a Ruby
> version, it is necessary to add `rubypick` to the `.spec` file for
> F19 builds, like so:
<pre>
%if 0%{?fedora} == 19
BuildRequires:  rubypick
%endif
</pre>
<p align="center">§§§</p>

Stefan Botter reported a problem on he has been seeing on his private
OBS instances, which are using the OBS repos via interconnect, where
repositories often get in to a state "The repository setup is broken,
build not possible". The scheduler log contains a "bad config" message
for the repos when this happens. 
> * Henne suggested that the problems may be caused by an unreliable 
> network connection. 
> * Stefan responded that it is more likely due to the heavy load on
> `build.opensuse.org`
> * Andreas Schwab noted that running `obs_admin --deep-check-project`
> should fix the problem.
> * Stefan confirmed that Andreas's suggestion works, but he would
> like it better if the scheduler recognized the problem and ran the
> deep check itself, without human intervention.

<p align="center">§§§</p>

Ruediger Meier would like to see `selinux` enabled for the build
machine, because he would like `make check` to also test selinux
features. 
> * In his response, Adrian noted that build environments are
> currently using one single kernel for all distros. This is because
> many of the distros ship with kernels that do not work properly in
> VMs. As a result: (1) the test of selinux features would be running
> against the wrong kernel, and (2) the test might break the kernel.

<p align="center">§§§</p>

Brian K. White wrote that he would like to build `tmux` for many older
versions of SUSE. He was able to do so by changing `%{make_install}`
in the current `.spec` file to: 

<pre>
%{?make_install} %{!?make_install:%{__make} install DESTDIR=%{buildroot}}
</pre><br>
He would like to do something similar with other packages, but their
maintainers are reluctant to support old targets, especially when this
means adding such "ugly" lines to the `.spec` file. To get around this,
he had the idea of handling the matter in his `prjconfig` like so:

<pre>
%{!?make_install: %define make_install %{__make} install %DESTDIR=%{buildroot}}
</pre><br>
But it doesn't work.
> * Jan Engelhardt recommended dispensing with the macro altogether,
> i.e. `make install DESTDIR="%buildroot"` -- which is better and
> cleaner in his opinion. It is also
> recommended by the openSUSE wiki. One can always install the
> `hxtools-scripts` package to get a "spec-beautifier".
> * Greg Freemyer noted that `spec-cleaner` will remove that (by
> replacing it with `%make_install`), thereby
> effectively breaking the package for older versions of SLE.
> * Tomáš Chvátal issued a call for volunteers to help improve <a href="https://github.com/openSUSE/spec-cleaner/commits/master">spec-cleaner</a> -- the proper way to do it is to leave `%make_install` and support
> older versions of SUSE (and other RPM-based distros) on the server
> side.
> * Guido Berhoerster wrote that he has rejected SRs with such
> changes in the past and will do so again. He agrees with Tomáš that
> the matter should properly be dealt with inside the macro.

At this point, a lively debate ensued. 

(Entire thread here: <a
href="http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00012.html">http://lists.opensuse.org/opensuse-buildservice/2013-11/msg00012.html</a>)

