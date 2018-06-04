---
layout: post
title: Welcome SUSE Studio Express Users!
category: documentation
---


A couple of days ago (_September 22, 2017_) SUSE, one of our main contributors, [announced](https://www.suse.com/communities/blog/suse-studio-online-open-build-service-suse-studio-express)
that they will deprecate their SUSE Studio Online service and encourage people
to use OBS instead. Studio is an web application that makes it easy to build a
custom operating system as a virtual machine, raw/DVD/USB hard disk images. It is
basically a frontend for the awesome [KIWI](https://opensuse.github.io/kiwi)
command line app.

Not unlike the OBS, we also support KIWI build descriptions since a long time.
Actually if you take a closer look at the Studio and OBS architectures you would
find many similarities. A user does input something into a <em>frontend</em>
which triggers a <em>worker</em> to run a <em>build process</em> which results
in some <em>binaries</em> that people can use.

The main difference between Studio and OBS is the user group it is focused on.
Studio targeted Linux power users who want to extend an already existing
operating system image while the OBS focuses on Linux developers who want to
build operating system images from scratch.

Now that SUSE closes Studio and it's users need to migrate to the OBS some of the
developers that work for SUSE have introduced a new workflow into our code base:
We call it the _KIWI Image_ feature. Let's explore this new functionality a bit,
shall we?

# What can you do with appliances on OBS?

We have already explained in our previous
[SUSE Studio Integration](http://openbuildservice.org/2017/05/31/studio-import)
blog post how to export your appliance from SUSE Studio and import it into the
Open Build Service, but what can you actually do with your appliance in the OBS?

After importing your appliance from Studio you can just click the Edit KIWI link
on the top right, to edit your KIWI build description.

![Package with a KIWI image](/images/posts/kiwi-image-1.jpg "Package with a KIWI image")

The there are two tings you can do. First you can edit the list of package
repositories KIWI will use to build this image. The most simple way is to reuse
the repositories of the OBS project this KIWI package is in. Just tick the
_Use project repositories_ knob. This will save you plenty of time when reusing
the same KIWI images in several projects.

![Edit KIWI page](/images/posts/kiwi-image-2.jpg "Edit KIWI page")

Of course you also "just" add a repository as you could also do in SUSE Studio.
Use the _Add repository_ button, where you can search for projects in OBS. Start
writing the Project name and the available options will be shown to you. Once you
selected a project, you can chose one of its repositories in the drop-down.

<p align="center">
  <img src="/images/posts/kiwi-image-5.jpg" alt="Edit KIWI page" title="Edit KIWI page" style="margin: 10px;">
</p>

But if this basic mode is not enough for you, there is an _Expert Mode_ button
that will show you more options and allow you to add any repository you want!

<p align="center">
  <img src="/images/posts/kiwi-image-6.jpg" alt="Edit KIWI page" title="Edit KIWI page" style="margin: 10px;">
</p>

The second thing you can do is selecting binary packages that you KIWI image will
use. This is even easier, as a simple dialog where you can specify the name,
architecture and some more advanced options. It is as easy as the _Quick add_ in
SUSE Studio, but providing you more configuration options :-)

<p align="center">
  <img src="/images/posts/kiwi-image-3.jpg" alt="Edit KIWI page" title="Edit KIWI page" style="margin: 10px;">
</p>

But what if you are an advanced user for whom all of this is too basic. You can
of course do not use this feature at all and just directly modify the KIWI file.
Either in the OBS editor or download the sources with _osc_ and do things on your
computer.

# What does OBS offer you that SUSE Studio didn't?

We already mentioned some of the new things OBS offers you, but there is more!

With OBS you are able to build your images for a wide range of build targets.
Among those are architectures like System Z, Arm, PowerPC, x86 and many more.
And KIWI images can be build for any distribution that KIWI supports. On the
reference server, [build.opensuse.org](https://build.opensuse.org), this means
all SUSE and openSUSE based distributions.

That is not all OBS has to offer. There are various ways to make it easy to
collaborate when building and maintaining your images.

- User roles can be defined for your package and project that contain your appliances.
- Changes in to your appliance package are tracked via revisions.
- Branch your appliances to create a development - QA - staging - production setup.
- Collaborate on your appliances with [submit requests](http://openbuildservice.org/help/manuals/obs-beginners-guide/#sec.obsbg.uc.branchprj).

# What do you think?

This is the first time we are trying to make it a bit more easy to work with a
build description. So far the build description file (.spec for RPM, .dsc for
DPKG etc.) was only some file inside the package sources for us. You could
download it, edit it via a simple file editor and upload it again. Nothing
fancy. But for KIWI build descriptions we now have an interface that will help
users to change (parts) of that file. This was mainly done to make the
migration of Studio users a bit more easy, but this might also be a way forward
for other types of build descriptions to make  binary building a bit more
accessible for people that don't have that much packaging knowledge.

What do you think about all of this? Do you like the new workflow? Do you think
something similar for other build descripions makes sense? Let us know in the
comments below, on our [mailing list](mailto:opensuse-buildservice@opensuse.org),
or on [twitter (@obsHQ)](https://twitter.com/obshq). We are looking forward to
your feedback!

💚 your OBS team
