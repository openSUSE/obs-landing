---
layout: post
title: OBS Mailing List Summary, Week 16
category: documentation
author: Nathan Cutler
---

Here is a summary of activity on the
[opensuse-buildservice](http://lists.opensuse.org/opensuse-buildservice/)
mailing list during week 16:

<p align="center">§§§</p>

Nico Kruber <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00040.html">reported</a>
a dependency conflict in Arch (i586 only), resulting in "have choice for"
errors. He suggested that it be fixed globally, and Michael complied.

<p align="center">§§§</p>

Darin would like to <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00042.html">quickly
check out an entire repository</a> -- the one he is interested in has over
3,400 packages and checking out with `osc` will take a very long time.
> * a brief discussion ensued on how to speed up osc file transfers --
> Coolo noted that osc parses and recreates huge XML files all the time.

<p align="center">§§§</p>

Matwey asked about <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00046.html">his
kiwi configuration</a>. Coolo responded with some
caveats. 

<p align="center">§§§</p>

Guillaume has <a
href="http://lists.opensuse.org/opensuse-buildservice/2014-04/msg00050.html">a
package that depends on another package in the same project</a>. This
latter package is actually a subpackage. Can someone look to see why the
former package is still unresolvable?
> * Adrian posted some suggestions.

