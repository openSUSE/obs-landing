---
layout: post
title: oSC12 Trip Report
category: events
author: Henne Vogelsang
---
In October we went to the openSUSE conference/Linuxdays at Prague in the
Czech republic, here is the trip-report for the OBS community.

The program of the first two days was more focused on things that are only
loosely connected to OBS like FOSS/commons/freedom in general, user workshops
and applications. Monday and Tuesday on the other hand where focused solely
on openSUSE and here the OBS, naturally, played a bigger role.

All in all it was nice to meet so many OBS users and hear how what we produce
together makes their FOSS-life a little bit easier. Also nobody screamed at
Coolo and me or beat us up so we can't do everything wrong ;-)

##Talks
The program was packed, here are the highlight related to OBS.

###OBS Packager Workshop
The room was packed. Somewhere around 30 people participated in our packager
workshop and successfully built packages and tried the collaboration features
of the OBS.

BTW this workshop (and others) is also online¹ and whenever you can, you should
hold it at FOSS events! The Libreoffice file includes notes and everything.
[Check it out.](http://openbuildservice.org/help/materials/) It's modeled after
the two screencasts we have which you also find there.

###OBS for embedded projects
Karsten talked about the transparent cross compiling feature B1 is developing
for the OBS and the motivation behind it. It was recorded so watch out for it
on [blip.tv](http://blip.tv/openSUSEtv/osc12-karsten-keil-use-the-opensuse-buildservice-for-embedded-projects-6421450)

###Packaging tools
Daniel presented some scripts that make it easier to automate some tasks a
packagers does repeatedly. It's currently done around osc/rpm, but as far as
I could gather some of it is already in python and it could be made a nice
OSC plugin. See the talk on [blip.tv](http://blip.tv/opensuse/osc12-packaging-tools-6410647)

###Future of OBS BoF
We talked a little bit about the general features on the roadmap, I showed
how the webui looks in master, we talked about where osc2 is heading and so
on. We also dived a bit into wishes for the near future. From the ~10 participants
I heard the following wishes:

1. Mobile client to do package reviews on the train
2. Native build hosts for ARM
3. Take another look as the webui/osc from the user experience 
   perspective. Introduce some other personas than the casual packager
   the current UI's are optimized for.
4. Somehow get going on Hermes fixes and features again but that is 
   currently not really possible for us with the man-power we have.
 
##Ideas/Features
Here are the ideas for features I heard floating around @ osc12:

###for osc
* osc plugin to search and install packages from all OBS projects.
  Basically software.o.o for the commandline. Should probably rather be
  a zypper plugin but is seen as missing feature of the OBS.

* Using some VCS __only__ for checkouts. Like an osc plugin that makes
  it easy to store intermediate steps between checkout & checkin to the OBS

###for the backend
* Put a "build on my machine" button on home: projects that somehow builds
  packages (exclusively from this projct) on a local worker instance.
  So people can use their own hardware as worker.

###for the webui
* Merge the monitor and the status pages in the webui because
  they are confusing the casual submitter

* If there is a problem in a package in openSUSE:Factory it should
  be shown in the devel_project status page

* If there is a maintainer(or bugowner?) for a package don't show the
  other users in the web-ui

