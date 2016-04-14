---
layout: post
title: The new way to deal with git in OBS
category: documentation
author: Adrian Schröter
---

The upcomming OBS 2.7 release will deliver a number of new functionalities
which will help you to work with upstream git sources. This will help you
when using the local build functionatlity. In the past you had to push changes in git 
to the git server to allow OBS to fetch it again and to build a tar ball for
the build process.

The new way allows you to work directly in the local git checkout and test the 
changes from there directly in local builds. This will allow you to test and
debug issues for multiple build targets.

In the past a tar ball got created and archived for every code update.
The new way creates a special format which is still archived, but only 
stored incremental. The build process sees this archive as a directory
and creates the needed tar ball during build time.

This has a number of advantages:

* The source becomes available as directory. So you can implement your own mechanism to create an archive file for your build. An archive is still needed for most packaging programs, so we can't avoid it.
* We can store the cloned source archive in an incremental and therefore
  very efficient way. Before we stored entire new tar balls when just
  one bit has changed
* But most important, you get also a git clone reppository on local builds.
  So you can prepare your commits directly inside a local git checkout
  and test them with local "osc build" command.

Let me show you an example based on the qgroundcontrol package I created lately.

> Atm you need to do the following in addition because we have not yet
> release the new tools to official distributions:
> 
> * Add the right repository from openSUSE:Tools project for your workstation and install osc, build and obs-service-tar_scm from there.
> * Configure your project to build against the openSUSE:Tools project
  to get the tools for creating the tar ball.
> 
> These steps won't be necessary later anymore.

Creating the package container as usual:
{% highlight xml %}
 osc meta pkg -e hardware:RC-Model:Unstable/qgroundcontrol
{% endhighlight %}
Tell OBS where the source lives by creating a _service file via
{% highlight xml %}
 osc add git://github.com/mavlink/qgroundcontrol.git
{% endhighlight %}
And add a spec file (copied from the stable package here).

You can also just paste the git url in the web interface when adding a new source file.
This will create the same _service file.

When commiting this it will let the server update the source and run the build.

Running a local build with changes
----------------------------------

In case you want to fix something directly in git you can do the following. Check out
the package with
{% highlight xml %}
  osc co hardware:RC-Model:Unstable/qgroundcontrol
{% endhighlight %}

Create the git checkout by either
{% highlight xml %}
 osc build          # checks out and runs the build local
 osc service run    # just checks out
{% endhighlight %}


You will find an unversioned directory called "qgroundcontrol" in this example.
You can go inside and modify any file.

Call 

{% highlight xml %}
 osc build 
{% endhighlight %}

to run a local build. The service will run again and check for changes on
remote git server. But it would just fetch incremental changes and not clone the entire 
repository again as it happened before.  It does also not matter if your local changes
got committed or not, they will be just re-applied.

You can not upload your git modifications with osc to OBS that way, but you can of course push 
them using git. That way it is still guaranteed that server side builds really use the
source from the configured git repository.

Further informations
--------------------

The three services obs_scm, tar and tar_scm are all comming from the new obs-service-tar_scm
package. Note that you need at least version 0.6

You can find the real life example of the mentioned qground package 
<a 
href="https://build.opensuse.org/package/show/hardware:RC-Model:Unstable/qgroundcontrol">
here</a>.

#The documentation for this is here... FIXME

Some more tricks
----------------

The obs_scm service allows you to store files directly outside of the archive. You can
maintain your build description (for example a .spec file) in git and let OBS use it by
specifing it via the "extract" parameter.

To learn how to let github trigger OBS to update your package always please read

