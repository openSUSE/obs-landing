---
layout: post
title: Bye Bye Bento, Hello Bootstrap!
category: development
---

This is probably the last post related to [Revamping UI](/2018/10/05/revaming-ui). After almost one year of work, we systematically updated our user interface (UI) to a new stack, refactored related controllers and brought overall the web UI from 2006 to 2019.

To accomplish that, we needed around 800 commits (`git rev-list --no-merges --count HEAD --since="Aug 1 2018" src/api/app/views/webui2`) packed in something around [200 pull requests]( https://github.com/openSUSE/open-build-service/issues?q=created%3A%3E%3D2018-09-01+is%3Amerged+label%3AFrontend ). 

It was a lot of code and moving pieces, but done in a way that few breakage happened in production - Please check the Post-mortem reports that we have in our blog for more details about them. 

### Well Done!

We would like to thank the team (actual and old colleagues) and community for the hard work, sweat and tears. Every single line of code (especially tests!) counted towards the success of this mission!

### What Comes Next:

Even though we see it as an achieved milestone, we are full aware that we have to improve in many aspects to try to make our community and users happy. We are still collecting user feedback and working together with the community to fill the gaps which eventually were left open after the migration. This includes views redesign, mobile support and revisiting OBS workflows. 
