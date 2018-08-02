---
layout: post
title: Highlights of the OBS frontend development - Sprint 43
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-07-15 to 2018-07-26). :wink:

# Release of OBS 2.9.4

There two ugly security bugs :beetle: in our official OBS release.
We've fixed them now with the help of [Markus Hüwe](https://github.com/marcus-h) and [released](https://lists.opensuse.org/opensuse-buildservice/2018-07/msg00061.html) a patched version last week. If you host your own OBS instance, please checkout the most recent OBS version and install it now.  :neckbeard:

# Enable search by title and/or description

Fixing the definition of indexes in [PR #5385](https://github.com/openSUSE/open-build-service/pull/5385) makes possible to search by package's title and/or description. :mag: Give it a try on the [search page](https://build.opensuse.org/search), click on `Advanced` and search by that software you always wanted to have. :male_detective: :package: 

# Increase test coverage of Webui::ObsFactory models & controllers

You may remember that last sprint the [factory dashboard integration](https://openbuildservice.org/2018/07/17/sprint-report-41-42/#frontend-migration) was finished. :tada: It used to be an [external plugin](https://github.com/openSUSE/obs_factory) used by the openSUSE Factory maintainers and it is now integrated in OBS.

But this was just the first step. :smile: This sprint we continued increasing the test coverage of the new OBS code and started refactoring the existing code. As you can see on Codecov, the coverage of OBS factory [models](https://codecov.io/gh/openSUSE/open-build-service/tree/master/src/api/app/models/obs_factory) and [controllers](https://codecov.io/gh/openSUSE/open-build-service/tree/master/src/api/app/controllers/webui/obs_factory) is now above 90%. :relieved: 

# Bundle gems service

You may have already read in [the last sprint report](/2018/07/17/sprint-report-41-42) that we wanted to start using the recently implemented `bundle_gems` service. Being able to do this gave as quite a lot of work as you can see in [the pull request](https://github.com/openSUSE/open-build-service/pull/5397). One of the biggest part of the work came from [@coolo](https://github.com/coolo)'s idea of building an independant package which contains the gems, which is used in OBS building, to remove the `bundle_gem` part from the OBS spec. This elegant solution implied, for instance, that we needed to ensure that rake installed and Gemfile version are the same. But finally the code is deployed and OBS is already built using the `bundle_gems` service, as you can see in [build.opensuse.org](https://build.opensuse.org/package/show/OBS:Server:Unstable/obs-server). :tada: :tada: :tada:

# Frontend migration

Finally, we started working on updating our frontend technology. We choose Bootstrap 4 and we started using [@hellcp](https://github.com/hellcp)'s [pull request](https://github.com/openSUSE/open-build-service/pull/5347) as base. This pull request was superseeded by an [smaller one](https://github.com/openSUSE/open-build-service/pull/5415) and you can already see how wonderful it looks like:

<blockquote class="imgur-embed-pub" lang="en" data-id="PdcLqcV"><a href="//imgur.com/PdcLqcV"></a></blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>

But this is only the beginning :smile:, as we continue improving the initial code. There were already some [esthetic changes](https://github.com/openSUSE/open-build-service/pull/5476) and we are already working in the [package#revisions](https://github.com/openSUSE/open-build-service/pull/5473) page.

Special thanks to [@hellcp](https://github.com/hellcp) :sparkles: :cupid:


# Emojis support

Thanks to [@coolo](https://github.com/coolo)'s help, we now support emojis in comments! :cow2: :champagne: :tractor: :dancer: :frog: :icecream: :tada: This was a tricky [pull request](https://github.com/openSUSE/open-build-service/pull/5419) which required to modify old migrations to hardcode the old encoding.


# Next Sprint more

That was everything! Remember you can follow the work of the OBS team live in our [Trello Board](https://trello.com/b/Fs7boVwI/bs-sprint). Do not miss our next blog post! :wink:

