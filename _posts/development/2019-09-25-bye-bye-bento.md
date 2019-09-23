---
layout: post
title: Bye Bye Bento, Hello Bootstrap!
category: development
---

This is probably the last post related to [revamping our user interface (UI)](https://openbuildservice.org/2018/10/05/revamping-ui/). After almost one year of work, we systematically updated to a new technology stack, simplified a lot of code and brought the interface over from 2006 to 2019.

To accomplish that, we needed more than 900 commits (`git rev-list --no-merges --count HEAD --since="Aug 1 2018" src/api/app/views/`) packed into something around [200 pull requests]( https://github.com/openSUSE/open-build-service/issues?q=created%3A%3E%3D2018-09-01+is%3Amerged+label%3AFrontend ).

It was a lot of code and moving pieces! But we managed to keep breakages in production down to minimum (please check the [post-mortem reports](https://openbuildservice.org/categories/deployments/) for details).

### Well Done

We would like to thank everyone who contributed to this for the hard work, sweat and tears. Every single line of code (especially tests!) counted towards the success of this mission!

![Thank You](https://media.giphy.com/media/WnIu6vAWt5ul3EVcUE/giphy.gif)

### What Comes Next

We have set out to modernize our frontend technology stack, improve the consistency and overall introduce a more modern look and feel to OBS. And even though we achieved this milestone, we are fully aware that we have to improve the user interface in many other aspects to make everyone happy. That is why we are still [collecting feedback](https://github.com/openSUSE/open-build-service/issues?q=is%3Aopen+is%3Aissue+label%3A%22Bootstrap+%3Arocket%3A%22).

With the improved code consistency, readability and reduced technical complexity we now eased the burden of maintenance for us so we can be faster helping you with fixing bugs and adding UI-related features. This will include workflow redesigns, better mobile support and tons of bug fixes in the future. Stay tuned for more!
