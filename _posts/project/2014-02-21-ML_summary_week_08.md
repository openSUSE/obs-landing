---
layout: post
title: OBS Mailing List Summary, Week 08
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 08:

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00040.html">kiwi
prepare call optimization</a> thread, Konstantin posted some suggestions
for how the OBS call prepare step in the image build process could be
optimized.

<p align="center">§§§</p>

In the <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00043.html">CI
rights management</a> thread, Sascha Peilicke announced that he reduced the
list of ci.opensuse.org admins and rolled out a per-project ACL matrix that
provides fine-grained rights allocation within each specific project. See
the thread for details.

<p align="center">§§§</p>

Andrew Wafaa wrote about his troubles with the OBS scheduler. He is having
to wait a long time for OBS to build an image. Is there is a way to tell
`osc` to use a local cache of packages?
> * Adrian replied that the 'prefer packages' switch should work for kiwi
> appliances, provided Andrew's `osc` is not too old. The command would
> look something like this: `osc build -p $DIRECTORY_WITH_RPMS ...`

<p align="center">§§§</p>

Darin Perusich would like to know if it is possible to get metrics for
things like page views, downloads, etc, for one's home repo from
{build,download}.opensuse.org?
> * Adrian responded that there was code for this in the past, but it had
> to be removed because it was poorly written (too slow). Volunteers to
> implement this feature, please step forward.

<p align="center">§§§</p>

In <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-02/msg00046.html">this
thread</a> a user reports getting 'too much work for irq4' and
'efVarErrorUndefVarErrorUndefVarErrorUndefVarErrorUndefVarErrorUndef...'
messages in the remote build log
messages when attempting to build a package on the OBS. The same package
builds fine locally.
> * Adrian responded that the 'too much work for irq4' message is a
> standard VM issue that can be ignored. As for the 'VarErrorUndef'
> message, he does not see it. Currently, the RPM is missing the tarball
> due to a different version.
> * (The user managed to resolve the issue in the meantime)

