---
layout: post
title: Highlights of the OBS frontend development - Sprint 45
category: development
---

People of the Builds! :building_construction: Another Sprint is over and here is what the OBS frontend team has achieved from 2018-08-13 to 2018-08-23. :smile:


# Status report API

We are currently working on an API for reporting a status **into** the OBS. Let's say you have a script/tool/continuous integration job that installs the three packages, that you build in your OBS project, and tests their functionality together. So you can be sure that if you change one, all three of them still play nice together. Depending on if that test has worked or not, you would decide if you release those changes to your users. Wouldn't it be nice if the OBS could show you if that test was successful or not? That will be possible with the new OBS Status Report API. For certain events (a repository got published, a submit request got created, etc.) we will enable you to upload data so we can show it and base decisions on it. For instance, block merging of a submit request. Our first target is the staging workflow used in  the [openSUSE development process](https://en.opensuse.org/openSUSE:Leap_development_process) that integrates [openQA](http://open.qa). In this sprint we have build an API to create checks for repositories and show these repositories on the factory dashboard. We'll let you know as soon as you can really make use of this.

<img src="https://user-images.githubusercontent.com/3799140/45145920-17733c80-b1c2-11e8-83b3-3f47b309cc8f.png" alt="Factory dashboard with checks">


# Still moving forward on the Bootstrap front

Breadcrumbs are a navigational aid in OBS and they are a crucial part of the UI. They are now implemented for our [Bootstrap](https://getbootstrap.com) views. We did it in a way which allows us to reuse code as much as possible. Each part of the breadcrumbs is a partial view, making it reusable for different scenarios. Some parts like project or package are benefiting the most from this since they are used to build the complete breadcrumbs for multiple pages.

In addition, we continued converting the package views to Bootstrap. This time, we finished converting the package requests tab. Here is how it looks like:

<img src="https://w3.suse.de/~bgeuken/bs_request_tab.png" alt="Package requests tab in Bootstrap">

This is currently only enabled by default to a subset of the users. But for curious people, it is now possible for everybody to join the beta. If you want to do so you can join/leave our beta program on your user page at <https://build.opensuse.org/home>: 

<img src="http://paste.opensuse.org/images/24892446.png" alt="Page for the link 'Join public beta program'">


# Do not allow _accepted_ requests to change back to _review_

As it is explained in the [issue #5594](https://github.com/openSUSE/open-build-service/issues/5594), a race condition was found while setting the state of a request to accepted (which is a final state), where an user could set the state back to review. Thanks to the [@DimStar77](https://github.com/DimStar77) for the detailed report and support.


# Improve test coverage

Since we are rewritting the package related views with a new technology, we also want to improve the test coverage to ensure nothing breaks in the process. We wrote a lot of tests for the PackageController this sprint thanks to the great collaboration within the team.


# Adopt openQA test suite

Each time code is pushed to one of the three current branches of OBS (master, 2.9 and 2.8) [smoke tests](https://en.wikipedia.org/wiki/Smoke_testing_%28software%29) are run in openQA. :man_scientist: Recently phantomjs was dropped in favor of headless chromium with selenium in our rspec test suite (see [PR 5195](https://github.com/openSUSE/open-build-service/pull/5195)). That was fine for our rspec test suite, but made our openQA tests fail. :boom: In this sprint our [openQA tests](https://openqa.opensuse.org/group_overview/17) were modified accordingly and again you can use one of our qcow2 [OBS appliances](https://openbuildservice.org/download/other) being sure that it has already been tested. :green_heart:


# Terms of service dialog

Admins of an OBS instance can now define Terms of Service for their instance. Managing Terms of Services is currently an API only feature.

For example this is how an admin would get a distinged ToS. And as you can see ToS support markdown:laughing:
```bash
osc api /announcements/1

<announcement>
  <id>1</id>
  <title>New Terms of Service</title>
  <content>0. Sequi.
1. Modi.
2. Dolores.
3. Neque.
4. Et.
5. Nesciunt.
</content>
</announcement>
```

Once there are new Terms of Services a dialog is shown in a WebUI to any user that has not acknowledged them yet.

<img src="https://w3.suse.de/~bgeuken/terms_of_service_dialog.png" alt="Terms of Service notification">

The Terms of Service itself can be viewed on the overview page:

<img src="https://w3.suse.de/~bgeuken/terms_of_service_page.png" alt="Terms of Service overview">


# Conferences

Apart from being busy hacking, the OBS team travelled to some conferences as well. :airplane: :steam_locomotive:

## EuRuKo

[EuRuKo](https://euruko2018.org) is the biggest Ruby conference in Europe and the OBS team couldn't miss it! :gem: Every year the conference takes place in a different European city. This time it was in Vienna and arround 600 people (including 3 from OBS) travelled there for the 2 days conference. There was a single track and [13 speakers](https://euruko2018.org/speakers) from all around the world with talks about Ruby, but also other topics like diversity and accesibility.

From all the talks our favourite is of course the one from [Ana](https://github.com/Ana06), who spoke about refactoring in Ruby showing examples taken from OBS. She did not only focus on the code, but also on what she learnt while working on OBS. The example that most catched people attention was the one about the `union` method she wants to add to the Ruby Array class because she found some concerns while discussing some OBS code with one of her collagues. Ana wanted to know the audience opinion about her proposal and she made a standing voting, which result is in the [PR](https://github.com/ruby/ruby/pull/1747#issuecomment-417241624) and the [issue](https://bugs.ruby-lang.org/issues/14097) in the Ruby core. It was a really fun talk where we learnt a lot about refactoring, Ruby code and working on open source. The talk was streamed life with subtitles written life by real people and you can watch the recording in Youtube: [https://youtu.be/jUc8InwoA-E](https://youtu.be/jUc8InwoA-E?t=2m54s)

<img src="https://pbs.twimg.com/media/DlczR_BWwAUUSpl.jpg" alt="Ana's talk standing voting" style="width:45%">
<img src="https://pbs.twimg.com/media/DlcdcUkXsAAY2Cg.jpg" alt="Ana enouraging the audience to get involved" style="width:45%">

There were two other talks we specially like:

- [_The case of the missing method — a Ruby mystery story_](https://youtu.be/wkz-B1w2GVM) by Nadia Odunayo who presented Ruby singleton classes in a really original and clear way.
- [_Tool belt of a seasoned bug hunter_](https://youtu.be/ObB0dzX_rBs?t=6m12s) by Damir Zekić in which he explained how he debugged the problem of some spec running tremendously slow.

The conference was not only a chance to watch interesting talks, but also to meet new people and friends we meet at every Ruby conference. We hope that the OBS team can meet all of you again next year, this time in Rotterdam.


## openSUSE.Asia Summit

As Vienna was just too close, [Ana](https://github.com/Ana06) also travelled to Taipei for the [openSUSE.Asia Summit](https://events.opensuse.org/conference/summitasia18) to support the great openSUSE community we have in Asia. She held a talk about starting as a new contributor in open source and mentoring: [Why should you get involved in open source?](https://events.opensuse.org/conference/summitasia18/program/proposal/2053).

There was also an [introduction to OBS](https://events.opensuse.org/conference/summitasia18/program/proposal/2104) talk by [Alcho](https://twitter.com/alcho_tw), although a good level of Chinese was needed to follow the talk. Thanks Alcho for always spreading the knowledge about OBS all around Asia! :cupid:

You can read more about the conference in Ana's openSUSE.Asia Summit blog post: <https://news.opensuse.org/2018/09/05/opensuse-asia-summit>


# Next Sprint More

That was everything! Remember you can follow the work of the OBS team live in our [Trello Board](https://trello.com/b/Fs7boVwI/bs-sprint). Do not miss our next blog post! :wink:
