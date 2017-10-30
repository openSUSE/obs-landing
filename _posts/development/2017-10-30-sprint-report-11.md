---
layout: post
title: Highlights of the OBS frontend development - Sprint 26
category: development
---
Here are the results the OBS frontend team has achieved in the last two weeks (2017-10-09 to 2017-10-20).

## Features

### Notifications for projects in watchlist

Users can now receive notifications for projects which are in their watchlists. Users can configure their accounts to only receive certain kinds of notifications for watchlisted projects. To configure these notifications go to /user/notifications and select "instant_email" from the dropdowns labelled "watcher", "source_watcher" or "target_watcher". Source/target watcher notifications are for ones which belong to a source project and a target project. So if you have enabled "target_watcher" notifications of type "Request created" then you will receive an notification only if you are watching the target project of the request. For notifications which only belong a single project the configuration is simpler: you enable "watcher" notifications.

### Kiwi Editor - minor workflow change

We made a minor workflow change, now after an image template with a kiwi file is branched the user will be redirected to the Image Editor instead of Package show.

## Bugfixes

### Kiwi Editor - Breadcrumb and flash messages

We added a missing breadcrumb link for packages that contain a Kiwi image description and also improved the flash error messages to be more understandable in the Kiwi Editor. At the beginning the messages were shown as `Repository[0] alias ...`. To be honest, this is not a great help to identify which elements are invalid when you have a large amount of repository and packages. And the result of this improvement looks like:

![](https://user-images.githubusercontent.com/1212806/31459380-4e9f61b4-aec3-11e7-9058-6457b4792ea2.png)

We encourage you to take a look at the PR [#3981](https://github.com/openSUSE/open-build-service/pull/3981) to have more details.

### Kiwi Editor - Reduce changes in XML Layout

[ChrisBr](https://github.com/ChrisBr) was working to reduce the changes in the Kiwi XML layout when modifications are made via the Kiwi Editor. This will help the process of reviewing. Have a look into the [#4002](https://github.com/openSUSE/open-build-service/pull/4002) Pull Request.

### Issue #3897 - Request does not include <history>element for <priority>change</priority></history>

The [issue](https://github.com/openSUSE/open-build-service/issues/3897) was reported by [jberry-suse](https://github.com/jberry-suse) some days ago and we spent this sprint to investigate what is causing this. Read on, if you want to know what was going on.

When OBS saves a request it runs a sanitization job to ensure that every stored request is in a valid form. Part of this sanitization is to check whether there are any associated request actions that have a higher priority than the request itself. If that's the case, OBS raises the priority of the request.

This automatic priority change was not logged via a history element, unlike we do for changes made by users. So the cause of this priority change was invisible to users and thus caused confusion. To solve this we now track automatic priority changes via a history element as well.


## Test suite migration

This time we only wrote rspec tests for app/models/attrib_value.rb, [PR#3950](https://github.com/openSUSE/open-build-service/pull/3950). But for sure next sprint we will have more.

## Documentation

[evanrolfe](https://github.com/evanrolfe) and [hennevogel](https://github.com/hennevogel) did a great explanation for why is used `Attrib classes` in OBS and they also tell us the **The grand secret of how you can understand this**. All this awesome information is in the github wiki of OBS in [Attrib classes](https://github.com/openSUSE/open-build-service/wiki/Attrib-classes).

## Wanted changes

### Notification of Events to the Backend

Notification of events to the backend won't be sent anymore, we have replaced this with the RabbitMQ message bus.

Instead of the backend sending notifications through the plugins after receiving those notifications, now the frontend will send the messages through the bus directly.
