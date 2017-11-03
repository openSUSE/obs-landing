---
layout: post
title: Highlights of the OBS frontend development - Sprint 27
category: development
---
Here are the results the OBS frontend team has achieved in the last two weeks (2017-10-23 to 2017-11-03).

## Features

### Improve UI/UX of notifications configuration page

We have improved the layout, grouping and the explanations in the notifications page, now is more clear and understandable. Take a look at the screenshoots:

**Top part**

![notification layout top](https://user-images.githubusercontent.com/11314634/31992227-0243dbe4-b97a-11e7-8127-2f0fecd85dac.png)

**Bottom part**

![notification layout bottom](https://user-images.githubusercontent.com/11314634/31992269-18b10ab4-b97a-11e7-8bbb-fbc9cc7a4aff.png)

## Test suite migration

We continued migrating tests to Rspec and fixing flickering tests:

  * Write rspec tests for app/policies/comment_policy.rb, PR[#4074](https://github.com/openSUSE/open-build-service/pull/4074)
  * Webui Test Suite has been dropped in PR[#4062](https://github.com/openSUSE/open-build-service/pull/4062)
