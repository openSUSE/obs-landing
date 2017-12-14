---
layout: post
title: Highlights of the OBS frontend development - Sprint 28
category: development
---
Here are the results the OBS frontend team has achieved in the last two weeks (2017-11-27 to 2017-12-08).


## Features

### Cloud uploads

We started to look into how we could provide an image upload functionality that would alllow you to upload your image to a cloud. The cloud platforms we are planning to support are [Amazon AWS](https://aws.amazon.com/de/), [Microsoft Azure](https://azure.microsoft.com/de-de/) and [SUSE OpenStack Cloud](https://www.suse.com/de-de/products/suse-openstack-cloud/). As a first start we have been researching how the authentication and upload of these providers would work.

### Improvements in Studio Express workflow

Lots of improvements have been done in Studio Express workflow. More details can be found in following pull requests:

* PR[#4118](https://github.com/openSUSE/open-build-service/pull/4118)
* PR[#4086](https://github.com/openSUSE/open-build-service/pull/4086)
* PR[#4126](https://github.com/openSUSE/open-build-service/pull/4126)

And these are some screenshots of how Studio Express looks like now:

**Overview**
![Overview](https://user-images.githubusercontent.com/24919/32554606-a1fa23e8-c49a-11e7-835f-45f61eb2e956.png)

**Details**
![Details](https://user-images.githubusercontent.com/24919/32554602-9f88305a-c49a-11e7-87f4-7aae6ddfcbad.png)

**Software**
![Software](https://user-images.githubusercontent.com/24919/32554591-9a3420fa-c49a-11e7-92d7-10ab54968a6d.png)


## Bug fixes

### Kiwi importer drops directories

A while ago we worked on a SUSE Studio to Open Build Service migration. You can read about it in
[this blog article](http://openbuildservice.org/2017/05/31/studio-import/).
However, Axel Braun discovered a [bug](https://bugzilla.opensuse.org/show_bug.cgi?id=1064307) where the importer drops some directories.
We used this opportunity to not just fix the bug but also refactor the code of the importer, implement a proper test suit and enable Travis CI.
You can have a look at the changes [here](https://github.com/openSUSE/obs-service-kiwi_import/pull/11).

### Fix bsc#1068874 in OBS 2.8

In order to fix [this behavior](https://bugzilla.novell.com/show_bug.cgi?id=1068874) in OBS 2.8, [this patch](https://build.opensuse.org/request/show/546389) was
created and applied. The patch introduces a new check that logs a vulnerability warning if Passenger is run with root permissions while the directory permissions
of (parts of) its root dir allow modifications by non-root users.


## Documentation

### BS Requests

What are BS Requests? Now you can easily know all about them. A great work of documentation was done for explaining more about internals of OBS. This
information is in the github wiki of OBS in [BS Requests](https://github.com/openSUSE/open-build-service/wiki/BS-Requests).
