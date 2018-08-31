---
layout: post
title: Highlights of the OBS frontend development - Sprint 44
category: development
author: "OBS Team"
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-07-30 to 2018-08-09). :smile:

## Release of Azure Cloud Upload Feature
The beginning of August was hot in Germany! And while talking about weather, the cloud upload feature comes to our mind. :sunny: The OBS team released the Azure Cloud Upload, yes! :cloud: Just have a look at the [blog post](https://openbuildservice.org/2018/08/02/cloud-upload-azure/) where it was announced and enjoy a step by step guide on how to configure and use OBS to upload your images to the Azure Cloud. :sunglasses:

## More Automation

In the last few months, we were working more and more on automating and improving our testing, building and deployment infrastructure. We introduced [depfu](https://depfu.com/ ) to automatically update our gem dependencies. We started to use Docker containers in CI to test on openSUSE and eventually switching from Travis to CircleCI which also improved the speed. Last but not least, we're using now the bundle_gems source service so we don't need to package all our gem dependencies anymore. This enabled us to automatically create a OBS package for every pull request on GitHub. As a bonus, we report the status of the package build back into the pull request.

<img src="/images/posts/sprint_44_status_package_build_1.png" alt="OBS Status Package Build 1">

This brings many advantages. For instance, we also maintain the spec file for the obs-server package in GitHub. It already happened that we changed the spec file and broke the package build with it. We now know in advance if merging a pull request results in a broken package. Furthermore, we test not only on SLE12 SP3 in CircleCI, but also support many other base systems like openSUSE Leap.

The implementation is relatively simple at the moment: We just iterate over open pull requests for master and create and update sub projects in [OBS:Server:Unstable](https://build.opensuse.org/project/subprojects/OBS:Server:Unstable). The build result gets reported back to GitHub with the excellent [Octokit](https://github.com/octokit/octokit.rb) toolkit. We currently gather experience with this and maybe plan to integrate this directly into OBS in the future. If this sounds interesting to you, let us know! The current implementation can be found [here](https://github.com/openSUSE/obs-tools/pull/9).

<img src="/images/posts/sprint_44_status_package_build_2.png" alt="OBS Status Package Build 2">

## Progress on the Frontend Migration
The work with Bootstrap 4 is progressing. We are currently focusing on the pages for packages. The page for revisions is now done and already merged. Like all new Bootstrap views, this is currently only available to a subset of the users (mostly SUSE employees) while we make sure everything is fancy and working as expected. Here's a preview:

<img src="/images/posts/sprint_44_frontend_migration.png" alt="Frontend Migration">

## Test Suite

### Write Tests for the JSON API for Factory Staging Controller
Some time ago, we merged the factory plugin from the openSUSE release engineering team and overlooked that we inherited a JSON API (OBS only supported a XML API so far). :laughing: We learned this the hard way by breaking it. :cry: Of course, we fixed it right away. :muscle: We decided though to add some more tests to fully cover this. That's what we [did](https://github.com/openSUSE/open-build-service/pull/5507) this sprint. :bowtie:

### Increase Coverage for the Patchinfo Feature
Continuing migration and improving our test suite, we added some new tests covering the patchinfo feature for packages.

## Next Sprint More

That was everything! Remember you can follow the work of the OBS team live in our [Trello Board](https://trello.com/b/Fs7boVwI/bs-sprint). Do not miss our next blog post! :wink:
