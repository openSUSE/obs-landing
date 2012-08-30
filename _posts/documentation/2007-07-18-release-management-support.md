---
layout: post
title: Release Management Support for the Open Build Service
category: documentation
author: adrian
---
The Open Build Service allows from now on more control about what to do with built packages.
You can for example switch of the publishing of packages to the ftp server and mirrors,
when you prepare a major update in your project.

To disable the publishing, you just need to add

{% highlight xml %}
<publish>
<disable />
</publish>
{% endhighlight %}

to your project meta data. This can be done via

{% highlight bash %}
osc meta prj -e YOUR_PROJECT
{% endhighlight %}

or directly via the api

{% highlight http %}
https://api.opensuse.org/source/YOUR_PROJECT/_meta
{% endhighlight %}

The Web interface has not yet any support for this functionality. We are thinking about
to disable publishing by default for new projects in the future. But we need a way to enable
it in the web interface first of course.

It would be also nice to have a tool, which downloads the build packages via the api and creates
a repository on the local disk, so developers can easily test their projects before releasing them.

We have also implemented some other flags, when you use &lt;build&gt; instead of &lt;publish&gt;
you can disable the build of the project completely. There is also a &lt;useforbuild&gt; switch which
disables the reuse of the packages during the setup of a build system. This can be usefull, when you
compile different flavours of gcc for example, but you want always build with the original
one from the distro. A &lt;debuginfo&gt; is also prepared
(should enable the build of additional -debuginfo packages), but has no effect yet.

These flags only work for the complete project at the moment, but we plan also to support at
least some of them per package.

BTW: This is my first post, I hope you comment it :)

