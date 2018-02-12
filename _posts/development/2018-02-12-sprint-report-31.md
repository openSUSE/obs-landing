---
layout: post
title: Highlights of the OBS frontend development - Sprint 31
category: development
autor: "OBS frontend team"
---

People of the Builds! Our last Sprint (2018-01-22 to 2018-02-02) report comes a little bit late,
as our [email notifications](https://github.com/openSUSE/open-build-service/issues/4473) :see_no_evil:,
but it is finally here! :tada:

# OBS 2.9 Beta 1

## OBS 2.9 Beta 1 got released! :tada:

We are happy to announce the first beta release of the upcoming Open Build Service (OBS) version 2.9.
There have been many changes since our last major release:

- Highlights include the Studio Express features, an improved workflow for - producing appliance images in OBS.
- A message bus, supported by RabbitMQ, to help you connect your own tools to what is happening inside the OBS.
- And a much improved notifications system to keep up to date with OBS.

In this sprint we prepared everything to get 2.9 ready, and configured all the side tools used.
The process of doing a mayor release was checked and improved,
the dependencies of the packages were cleaned,
and the documentation of the mayor release process was updated.

And be prepared for the new features this release will bring to OBS soon. :sparkles: 


# Cloud

## Prototype upload script for Azure

Our target was to have an initial script that uploads and creates an image at the Azure cloud instance of a user without to store any credential on the side of the OBS instance. Sadly it wasn't possible, we needed to store at least the Application ID + Key for accessing to the user's cloud.
But aside this we managed to have a working script and is also merged togheter with the EC2 part, so, now the backend can use the same interface to upload images to both platforms :+1:. 
Following steps would be to add the web UI part for setting the upload jobs properly and have all the parts working together seamless (taking special care about the ciphering of the credentials from the user).

## Contribution to Enceladus

The Enceladus repository is a collection of many tools that interact with public cloud services.
The Cloud Upload in OBS uses the `ec2uploadimg` and `ec2utilsbase` tools.
We worked on getting a [PR merged](https://github.com/SUSE/Enceladus/pull/188) for Enceladus ,
which was needed to get the cloud upload feature in OBS forward.

##  Document administration setup for cloud upload EC2

We added the needed info to enable administrators to setup in their OBS instance the cloud upload feature for EC2 (Amazon). The documentation update is published already in our website (www.openbuildservice.org) at the Admin Guide, please check it out.

# Maintenance

As most of the Sprints, we have continued improving our Test Suite. :gem:

## Tests for Authenticator class

We added more tests for the [Authenticator class](https://github.com/openSUSE/open-build-service/blob/master/src/api/lib/authenticator.rb) to increase our test coverage.


# Developer Documentation

Some time ago we started to write developer documentation in [our GitHub wiki](https://github.com/openSUSE/open-build-service/wiki) and we have continued with that this Sprint as well.
This hopefully makes it easier for new OBS contributors to dive into our codebase.

## Documenting maintenance classes

A decent part of OBS is about maintaining the packages that one has built. You can imagine that we have quite some classes and helpers that part of the various maintenance workflows we have.
This sprint we added some developer documentation for theses classes that you can find [in our Wiki](https://github.com/openSUSE/open-build-service/wiki/Maintenance-classes).


# Other changes

- In the [last Sprint](http://openbuildservice.org/2018/01/19/sprint-report-15) we reached an agrement in the code style rules we want to follow in OBS.
This Sprint we have added [Rubocop RSpec](https://github.com/backus/rubocop-rspec),
an extension to [RuboCop](https://github.com/bbatsov/rubocop) specific for [RSpec](https://github.com/rspec/rspec) tests code,
introducing new style rules. You can check the details in the [PR](https://github.com/openSUSE/open-build-service/pull/4397).

- The comments in Project, Package, and Request rely now on Ajax.
Instead of loading the whole page again, newly created comments will just appear on the current page.

- We added a password confirmation field to the registration page. This field only appears if you're not running OBS in LDAP or proxy mode.


# Conferences
  
## Ruby on Ice 2018
  
Beside working on several features and bug fixes,
two of the OBS team developers, [Ana](https://github.com/Ana06) and [Christian](https://github.com/chrisbr),
also attended [Ruby on Ice](https://rubyonice.com/2018),
the first Ruby conference at Tegernsee, next to a beautiful lake surrounded by mountains and full of snow. :snowflake:

It was a really nice Ruby Event,
where we had interesting conversation with other Ruby developers and listened to inspiring talks, such as: 
[Where do Rubyists go? by Tobias Pfeiffer](https://rubyonice.com/2018/speakers/tobias_pfeiffer),
[The Impermanence of Software bz by Andy Croll](https://rubyonice.com/2018/speakers/andy_croll)
and  [The Good Bad Bug: Fail Your Way to Better Code by Jessica Rudder](https://rubyonice.com/2018/speakers/jessica_rudder).

![Ruby on Ice](https://rubyonice.com/images/village-bcdcbbf5.svg)

And we took a mountain home! :heart_eyes:

![mountain](https://pbs.twimg.com/media/DUsjx-OU0AECzM_.jpg)

## FOSDEM

FOSDEM is the biggest Free and Open Source Software conference in Europe,
and OBS coldn't miss it!
Some of the OBS developers were already on their way to FOSDEM at the end of the last Sprint and we will tell you more about it in the next report. :bus: :bus: :bus:
