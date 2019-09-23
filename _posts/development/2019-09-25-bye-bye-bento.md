---
layout: post
title: Bye Bye Bento, Hello Bootstrap!
category: development
---

This is probably the last post related to [Revamping UI](/2018/10/05/revaming-ui). After almost one year of work, we systematically updated our user interface (UI) to a new stack, refactored related controllers and brought overall the web UI from 2006 to 2019.

To accomplish that, we needed around 800 commits (`git rev-list --no-merges --count HEAD --since="Aug 1 2018" src/api/app/views/webui2`) packed in something around [200 pull requests]( https://github.com/openSUSE/open-build-service/issues?q=created%3A%3E%3D2018-09-01+is%3Amerged+label%3AFrontend ).

It was a lot of code and moving pieces, but done in a way that few breakage happened in production - Please check the Post-mortem reports that we have in our blog for more details about them.

### Well Done!

We would like to thank everyone who contribtued to this for the hard work, sweat and tears! Every single line of code (especially tests!) counted towards the success of this mission.

![Thank You](https://media.giphy.com/media/WnIu6vAWt5ul3EVcUE/giphy.gif)

### What Comes Next:

We have set out to modernize our frontend technology stack, improve the consistency and overall introduce a more modern look and feel to OBS. And even though we achieved this milestone, we are fully aware that we have to improve the user interface in many other aspects to make everyone happy. That is why we are still [collecting feedback](https://github.com/openSUSE/open-build-service/issues?q=is%3Aopen+is%3Aissue+label%3A%22Bootstrap+%3Arocket%3A%22).

With the improved code consistency, readability and reduced technical complexity we now eased the burden of maintenance for us so we can be faster helping you with fixing bugs and adding UI-related features. This will include workflow redesigns, better mobile support and tons of bug fixes in the future. Stay tuned for more!
