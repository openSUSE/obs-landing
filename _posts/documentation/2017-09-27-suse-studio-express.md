---
layout: post
title: SUSE Studio Express
category: documentation
author: OBS Team
---


A couple of days ago (_September 22, 2017_) SUSE, one of our main contributors, [announced](https://www.suse.com/communities/blog/suse-studio-online-open-build-service-suse-studio-express) that they will deprecate their SUSE Studio Online service and encourage people to use OBS instead. Studio is an
web application that makes it easy to build a custom operating system as a virtual machine, raw/DVD/USB hard disk images.
It is basically a frontend for the awesome [KIWI](https://opensuse.github.io/kiwi) command line app.

Like the OBS, it supports KIWI build descriptions since a very long time. Actually if you take a closer look at the Studio and
OBS architectures you would find many similarities. A user does input something into a <em>frontend</em> which triggers a
<em>worker</em> to run a <em>build process</em> which results in some <em>binaries</em> that the user can use.

The main difference between Studio and OBS is the user group it is focused on. Studio targeted Linux power users who want to
extend an already existing operating system image while the OBS focuses on Linux developers who want to build operating system
images from scratch.

Now that SUSE closes Studio and it's users need to migrate to the OBS some of the developers that work for SUSE have
introduced a new workflow into our code base: We call it the _KIWI Image_ feature. Let's explore this new functionality a bit, shall we?


# What can you do with the OBS KIWI Editor?

We already explained you in our previous
[SUSE Studio Integration blog post](http://openbuildservice.org/2017/05/31/studio-import)
how to export your appliance from SUSE Studio and import it into the Open Build Service,
but what can you actually do in the OBS KIWI Editor?

You can create an OBS Package with a KIWI image build description on it. And then you can just click the _Edit KIWI_ link on the top right to edit your KIWI image.


![Package with a KIWI image](/images/posts/kiwi-image-1.png "Package with a KIWI image")

This is how the edit page looks like:

![Edit KIWI page](/images/posts/kiwi-image-2.png "Edit KIWI page")

You can easily add new repositories. One of the ways to do this is using the project repositories, which will save you plenty of time when reusing the same KIWI images in several projects.

There is also a basic adding mode, where you can use the great search/autocomplete functionality to look for a repository in OBS, as you could also do in SUSE Studio. You just have to start writing the Project name and the available options will be rendered. Once a project is selected, you can chose one of its repositories in the drop-down.

![Edit KIWI page](/images/posts/kiwi-image-5.png "Edit KIWI page")

But if this basic mode is not enought for you, there is an _Expert Mode_ button that will instantanly show you more options and allow you to add any repository you want!

![Edit KIWI page](/images/posts/kiwi-image-6.png "Edit KIWI page")

Adding new packages is even easier, as a simple dialog where you can specify the name and some more options is rendered. It is as easy as the _Quick add_ in SUSE Studio, but providing you more fields to edit. ;)

![Edit KIWI page](/images/posts/kiwi-image-3.png "Edit KIWI page")


But what if you are an advanced user, who is thinking that this can be to basic for him. You can also directly modify the KIWI file in the OBS editor.


# What does OBS offer you that SUSE Studio didn't?

We already mentioned some of the new things OBS offers you, but there is more!

With OBS you are able to build your images for a wide range of build targets. Among those are architectures like System Z,
Arm, PowerPC, x86 and many more.
KIWI images can be build for any SUSE or openSUSE based distribution that KIWI supports.

That is not all OBS has to offer. There are various ways to make it easy to collaborate when building and maintaining your images.
- There are user roles that can be defined for any package and project.
- Changes in packages are tracked via revisions.
- You can branch your images to create a development - QA - staging - production setup.
- You can collaborate on your kiwi image descriptions with [submit requests](http://openbuildservice.org/help/manuals/obs-beginners-guide/#sec.obsbg.uc.branchprj).

Best thing is that you can always edit the raw kiwi xml file and benefit from the full range of KIWI configuration options.


# What do you think?

This is the first time we are trying to make it a bit more easy to work with a build description.
So far the build description file (.spec for RPM, .dsc for DPKG etc.) was only some file inside
the package sources for us. You could download it, edit it via a simple file editor and upload it again.
Nothing fancy. But for KIWI build descriptions we now have an interface that will help users to change (parts)
of that that file. This was mainly done to make the migration of Studio users a bit more easy, but
this might also be a way forward for other types of build descriptions to make  binary building a bit
more accessible for people that don't have that much packaging knowledge.

What do you think about all of this? Do you like the new workflow? Do you think something similar
for other build descripions makes sense? Let us know in the comments below, on our [mailing list](mailto:opensuse-biuldservice@opensuse.org), or on [twitter (@obsHQ)](https://twitter.com/obshq). We are looking forward to your feedback!
