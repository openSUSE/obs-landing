---
layout: post
title: Highlights of the OBS frontend development - Sprint 27
category: development
---
Here are the results the OBS frontend team has achieved in the last two weeks (2017-10-23 to 2017-11-09).

## Features

### Improve UI/UX of notifications configuration page

We have improved the layout, grouping and the explanations in the notifications page. Now it is more clear and understandable. Take a look at the screenshoots:

**Top part**

![notification layout top](https://user-images.githubusercontent.com/11314634/31992227-0243dbe4-b97a-11e7-8127-2f0fecd85dac.png)

**Bottom part**

![notification layout bottom](https://user-images.githubusercontent.com/11314634/31992269-18b10ab4-b97a-11e7-8bbb-fbc9cc7a4aff.png)


## Releases

### Propose a way to structure image templates better

Some month ago we [announced](http://openbuildservice.org/2017/05/11/new-image-templates-page/) the release of the OBS image template page. The amount of templates that are shown on that page is increasing and we started to think about ways to scale better.

We decided to introduce categories that allow to filter image template projects. The order of categories on the temlate page should be configurable by admins and project maintainers can configure which category their template belongs to.

## Test suite migration

We continued migrating tests to Rspec and fixing flickering tests:

  * Write rspec tests for app/policies/comment_policy.rb, PR[#4074](https://github.com/openSUSE/open-build-service/pull/4074)
  * Webui Test Suite has been dropped in PR[#4062](https://github.com/openSUSE/open-build-service/pull/4062)
