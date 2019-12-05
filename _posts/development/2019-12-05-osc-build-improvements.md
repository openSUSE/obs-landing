---
layout: post
title: New Local Build Environment Features
category: documentation
author: Adrian Schröter
---

Easy build and debugging in KVM and Emulator environments
=========================================================

We have just created osc 0.167 release which focuses on the local build functionality.
It is way easier now to deal with VM builds (eg. inside of KVM) and also building
for foreign hardware architecture becomes way easier now.

Local shell support in any VM
-----------------------------

osc used to have a special implementation for jumping inside of a chroot. This
functionality has been moved to the build script, so this is also working with
other VM modes. All what you need to run is

>  # osc shell

to jump into your last build environment. You can also create a new environment
for any of your configured build targets by running

>  # osc shell [--vm-type=VM] REPOSITORY

Please note that you don't have network configured usually inside of VM builds.
konsole (KDE) users can easily transfer files using the old famous Z-Modem 
protocol, simply by typing

>  # sz FILENAME

or to receive a file

>  # rz FILENAME

and click on Edit -> Upload Z-Modem

Once you don't need your build environment anymore it can be dropped by a simple

> osc wipe

Run builds for foreign hardware
-------------------------------

You may need a local build for some hardware you do not own. For example when
building for aarch64 you can build now via

>  # osc build --vm-type=qemu openSUSE_Factory_ARM aarch64

This assumes that you have a repository called openSUSE_Factory_ARM which builds
against the openSUSE:Factory:ARM project in your project.

But also just reproducing what happens in main projects is easy, for example
for RISCV64

>  # osc co openSUSE:Factory:RISCV hello
>  # cd openSUSE:Factory:RISCV/hello
>  # osc build --vm-type=qemu native riscv64

will run the build local. You can of cause also a shell via

>  # osc shell

Lot's of smaller stuff
----------------------

### Support for product builds

The kiwi product builds (not the appliances) are supported now as well for local building.
Just checkout the .kiwi file and build it (usually for images/local).

### Local builds for CentOS 8 using Modules

RedHat has introduced a new mechanic to have modules inside of repositories. This means
the packages of these modules are not available by default (since they may conflict or
have a different support cycle). OBS 2.11 and this new osc are now supporting to build
against repositories where packages are in modules.

### Allow to specify root disk size

Esp kiwi builds needs KVM (chroot builds of fail because scripts of various packages
depend on the device nodes). However, appliance images may be large, so it is important
that a large enough root disk for the VM can be created. The new osc supports this via

>  # osc build --vm-type=kvm --vm-disk-size=MB --clean

### Distribution specific debug package list

osc used to have a single fixed list of packages which got installed in addition to help
debugging. This caused a problem when the distribution is not providing this package.

The new osc is now requesting this list from the server, which has it configured per
base distribution.

