---
layout: post
title: Highlights of the OBS frontend development - Sprint 32 (X-mas Sprint)
category: development
author: "OBS frontend team"
---

People of the Builds! And another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-02-05 to 2018-02-16).

# Ruby 2.5

As every year, we got a new Ruby release for Christmas! :christmas_tree:
So, even if it is always Christmas in the OBS team, Christmas is already over and it was time to unwrap the present and move to Ruby 2.5.
As you can see in the [PR](https://github.com/openSUSE/open-build-service/pull/4464), the update to Ruby 2.5 was quite straight-forward, without need of making many changes in the code.
However, we had some fun fixing some failing packages.
But everything succeeded, and we enter in the [new year](https://chinesenewyear2018.com/calendar) with a green [monitoring page for OBS:Server:2.9:Staging](https://build.opensuse.org/project/monitor/OBS:Server:2.9:Staging)! :tada:

![OBS Christmas tree](/images/posts/sprint_32-xmas.jpg)


# Releases

## OBS 2.8 packages & images for openSUSE Leap 42.3

Last sprint we worked on the new openSUSE Leap 42.3 images for OBS 2.8.
Though we didn't manage to release them because we didn't finish testing them.
We did that this sprint and [released](https://lists.opensuse.org/archive/opensuse-buildservice/2018-02/msg00009.html) the [images](https://download.opensuse.org/repositories/OBS:/Server:/2.8/images/) and [packages](https://download.opensuse.org/repositories/OBS:/Server:/2.8/openSUSE_42.3/x86_64/) last week. :smiley:


# Cloud

## Improve binary download page

We have continued working on the cool cloud feature. :cloud:
Refactored the view of Binaries that before was just a list of links that pointed to the details page.
Now you can download the files directly or upload images to the cloud, and you still can go to the details page as before.

![New binaries view](https://user-images.githubusercontent.com/11314634/35864715-d1ce3664-0b52-11e8-83f8-e7bf56a56d77.png).

Sadly we have received some complaints related this feature, as you could read in our IRC channel on Friday:

> [13:14] <[coolo](https://github.com/coolo)> I guess you just deployed?

> [13:15] * [coolo](https://github.com/coolo) has problems connecting the links with the packages on https://build.opensuse.org/package/binaries/devel:openQA/openQA?repository=openSUSE_Leap_42.3

> [13:15] <[coolo](https://github.com/coolo)> I guess I can have a ruler every time to make sure I click on the proper line

Following the usual OBS team efficiency, this issue has also been solved and now [coolo](https://github.com/coolo) can click on the proper line:

<img src="/images/posts/sprint_32-coolo_present.jpg" alt="Coolo's present" style="display:inline;width:40%">
<img src="/images/posts/sprint_32-coolo-ruler.jpg" alt="Coolo's present" style="display:inline;width:40%">


For the rest of users, that are still affected by this issue we have created an issue, which will be solved sooner rather than later:
[#4525](https://github.com/openSUSE/open-build-service/issues/4525).


# SUSE Studio Express

Last Wednesday, SUSE Studio was shut down, and the Studio users are moving to OBS.
Some of them are really excited about it:

[![Happy Studio user Twit](/images/posts/sprint_32-studio-twet.jpg)](https://twitter.com/sshyukriev/status/963152868126707713)

Learn more about SUSE Studio Express in our [new users welcoming blog post](http://openbuildservice.org/2017/09/27/suse-studio-express).


## Tests for Relationship class

As most of the Sprints, we have continued improving our Test Suite. :gem:
We added more tests for the [Relationship class](https://github.com/mdeniz/open-build-service/blob/master/src/api/app/models/relationship.rb) to increase our test coverage.

Check the [PR](https://github.com/openSUSE/open-build-service/pull/4485) for more details.


## Fixing MySQL deadlock errors

The way calculated the amount of activity for packages was causing deadlock errors because they were using multiple queries to the database which were conflicting with other queries.
This was fixed by using only one database query.

Check the [PR](https://github.com/openSUSE/open-build-service/pull/4452) for more details.


## PrettyNestedErrors Handles n-level nested associations

Our ActiveRecord concern, which generates a nested hash of validation errors for nested models, previously only worked for nested models up to two levels deep.
Now it works up to n-levels deep.

Check the [PR](https://github.com/openSUSE/open-build-service/pull/4434) for more details.


## Update nodejs to a supported version

OBS was using an unsupported version of nodejs.
We have moved to a supported version for every repository (openSUSE 42.3 and SLE12 SP3) we use on [Unstable](https://build.opensuse.org/project/show/OBS:Server:Unstable) and the soon to be released 2.9 version of OBS.


# Conferences: FOSDEM


As we had already announced in our [last blog post](http://openbuildservice.org/2018/02/12/sprint-report-31), we attended [FOSDEM](https://fosdem.org/2018/), the annual free software conference, in Brussels.
It was a blast. We had nice belgian :beers:, waffles, :chocolate_bar: and plenty of x talks ranging from packaging, graph processing to observability.

One of the highlights was the [talk](https://fosdem.org/2018/schedule/event/debianopenbuild/) Andrew Lee of Collabora hold. He was showing how [debian](https://www.debian.org) uses OBS to manage packages and distribution,
which we really recommend you to watch.


![Picture of OBS talk at FOSDEM](https://pbs.twimg.com/media/DVGx6LRW0AAbq7Z.jpg).
