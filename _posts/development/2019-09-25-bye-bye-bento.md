---
layout: post
title: Bye Bye Bento, Hello Bootstrap!
category: development
---

This is probably the last post related to revamping our user interface (UI).

{% include partials/_revamping-ui-releases-history.md index="8" %}

After almost one year of work, we systematically updated to a new technology stack, simplified a lot of code and brought the interface over from 2006 to 2019.

To accomplish that, we needed more than 900 commits (`git rev-list --no-merges --count HEAD --since="Aug 1 2018" --until "Sep 23 2019" src/api/app/views`) packed into round about [200 pull requests]( https://github.com/openSUSE/open-build-service/issues?q=created%3A%3E%3D2018-09-01+is%3Amerged+label%3AFrontend ).

It was a lot of code and moving pieces! But we managed to keep breakages in production down to minimum (check the [post-mortem reports](https://openbuildservice.org/categories/deployments/) for details).

### Well Done

Every single contribution counted towards the success of this mission! Everyone who contributed hard work, sweat and tears.
So thanks for all the feedback you gave us, for the interesting conversations on IRC and on github. We are especially grateful to the people who got their hands dirty in our code base, thank you

- Andreas Schwab
- Bernhard M. Wiedemann
- Gabriel Bustamante
- Guo Yunhe
- Neal Gompa
- Ralf Habacker
- Stephen Bowen

And out of those who contributed tests and code [we](https://openbuildservice.org/2019/05/14/build-solutions-team) have to mention Stasiek Michalski for pushing a lot of the ground work on the layouts and Stephan Kulow for tirelessly following each and every commit and voicing your opinion. Without you two, this would have been only half as enjoyable as it was!

![Thank You All](https://media.giphy.com/media/WnIu6vAWt5ul3EVcUE/giphy.gif)

### What Comes Next

We have set out to modernize our frontend technology stack, improve the consistency and overall introduce a more modern look and feel to OBS. And even though we achieved this milestone, we are fully aware that we have to improve the user interface in many other aspects to make everyone happy. That is why we are still [collecting feedback](https://github.com/openSUSE/open-build-service/issues?q=is%3Aopen+is%3Aissue+label%3A%22Bootstrap+%3Arocket%3A%22).

With the improved code consistency, readability and reduced technical complexity we now eased the burden of maintenance for us so we can be faster helping you with fixing bugs and adding UI-related features. This will include workflow redesigns, better mobile support and tons of bug fixes in the future. Stay tuned for more!
