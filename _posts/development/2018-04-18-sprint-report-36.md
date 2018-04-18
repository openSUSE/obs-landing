---
layout: post
title: Highlights of the OBS frontend development - Sprint 36
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-04-02 to 2018-04-13).


# Features

Another pack of new features have been developed. They are cool! Protect your eyes and have a look. :sunglasses:

### Live Build Log

Tired of scrolling up and down the page to know the status of a live build log?
OBS comes to the rescue with this PR [#4816](https://github.com/openSUSE/open-build-service/pull/4816) :bowtie:
<img src="/images/posts/sprint_36_live_build_log.png" alt="OBS – Live build log">
Watching it in live is better than describing it with words or pictures.
Enter the [monitor page](https://build.opensuse.org/monitor), click on a build log cell, in the workers section of the page, and enjoy!
You can also click on the status bar and pause the build log from updating the page.
Isn't it nice?

### Do not show excluded entries in package build results by default

Entries with state "excluded" were always shown in package build results.
What do you think about how does it look like now?

<img src="/images/posts/sprint_36_excluded_build_results.png" alt="OBS – Excluded build results">
With this change (PR [#4798](https://github.com/openSUSE/open-build-service/pull/4798)), when you have excluded entries, a link with the number of excluded entries is shown.
And this is what you get when you click on it:

<img src="/images/posts/sprint_36_excluded_build_result_expanded.png" alt="OBS – Excluded build results, expanded">

# Releases 

A few weeks ago we released a new major version of OBS, version 2.9. 
Unfortunately, a [user reported](https://github.com/openSUSE/open-build-service/issues/4761), that after upgrading from 2.8 to 2.9, many project meta did change.
The problem was a broken migration which removed repositories with the same name.
However, it did not cover the corner case when the OBS instance is interconnected to another instance.
In this case it is fine to have repositories with the same name but referenced to different repositories in the interconnected instance.
Thanks to [Conan-Kudo](https://github.com/Conan-Kudo) we were able to track this bug down and released a new version of OBS with the fixed migration.

# Bugfixes

## SendEventEmailsJob: invalid byte sequence in UTF-8

We've been seeing encoding related issues more and more often in the past weeks and decided to inspect what's going on there. :mag:

It turns out that when the frontend requests a sourcediff the backend returns a string with no particular encoding.
Which means that the content can have differently encoded characters, eg. a tarball that contains files encoded files.
When handling such a sourcediff string in OBS this could cause encoding issues.
For example sourcediff.present? would raise an ` ArgumentError: invalid byte sequence in UTF-8 `. :expressionless:

To solve this OBS now replaces non-UTF-8 encoded bytes with the default replacement string defined by String#encode, a '?' sign, when parsing the sourcediff. :bowtie:

##  OBS + rabbit + telegraf + influx + grafana dev environment

You might already read in our [previous sprint report](http://openbuildservice.org/2018/03/07/sprint-report-33/) that we want to
be able to track how it affects you when we change the UI or introduce new workflows.

This sprint we prepared sevaral docker images to be able to run our monitoring infrastructure within our docker based development setup.
With that we can start implementing metrics and test them, before deploying them to our [instance](https://build.opensuse.org/).
