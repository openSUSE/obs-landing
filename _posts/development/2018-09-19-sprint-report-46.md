---
layout: post
title: Highlights of the OBS frontend development - Sprint 46
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-08-27 to 2018-09-06). :smile:

# Bootstrap - Package Overview

Finally, after a few sprints, the package show view is using the new interface.
Right now, the overview of a package looks great and is responsive.
We made some changes in the build results box, making it clearer.
It is not pushing the comments section anymore if it has a lot of elements.
Besides that, we replaced the old icons with modern ones from [Font Awesome](https://fontawesome.com/) that are making OBS looks incredible! :tada:
Please have a look into [PR#5705](https://github.com/openSUSE/open-build-service/pull/5705) for more details :bowtie:.

<img src="/images/posts/sprint-report-46/1.png" alt="Bootstrap - Package">

#### Tabs
<img src="/images/posts/sprint-report-46/2.png" alt="Bootstrap - Package Tabs">

#### Dialogs
<img src="/images/posts/sprint-report-46/3.png" alt="Bootstrap - Package Dialogs">

#### Build Results
<img src="/images/posts/sprint-report-46/4.png" alt="Bootstrap - Package Build Results">

#### RPM Lint
<img src="/images/posts/sprint-report-46/5.png" alt="Bootstrap - Package RPM Lint">

#### Comments
<img src="/images/posts/sprint-report-46/6.png" alt="Bootstrap - Package Comments">

# Bootstrap - Package Attributes

In addition to the package show view, we also completed the port of the package attributes view to the new interface. Below is a preview of the new view, try it out by joining the beta program (as explained in our previous sprint report).

<img src="/images/posts/sprint-report-46/7.png" alt="Bootstrap - Package Attributes">

# Clarify Requests' Aim

Users often send unnecessary requests to project/package maintainers, the
reason seems to be that they don't understand what a submit or delete request
is. In order to limit these requests, the 'description' field is now compulsory and we added a short explanation. Users will now know that requests will be sent to another human being.

<img src="/images/posts/sprint-report-46/8.png" alt="Clarify Requests' Aim">

# Status Checks API
If you followed our last sprint report, you might already know that we currently
implement a Status Check API. In this sprint, we extended this API to have
required checks. Imagine that you have a project or request for which you run several checks. With this new feature, it is now possible to make certain checks mandatory to be run. Currently only published repositories are supported, but we plan to implement required checks also on projects and requests in one of the next sprints, stay tuned.

In the image, you can see how this currently looks in the staging project dashboard. There are currently two checks, 'openQA' which was successful and 'ExampleCI' which is a required check and therefore it is reported as 'Expected - Waiting for status to be reported'.

<img src="/images/posts/sprint-report-46/9.png" alt="Status Checks API">

# Refactor Status Controller

While working on the [status API](https://trello.com/c/8QVRwQuG/1471-status-api), we noticed that OBS already had a status controller. This controller was responsible for all kind of things, starting from worker capabilities to project status and status history. :sweat:

That's why we decided to clean this up. :smiley:

During this sprint, we reviewed the controller and moved all worker related code
to its [own controller](https://github.com/openSUSE/open-build-service/pull/5779). We did
the same for the status project related code. This is now in the [StatusProjectController](https://github.com/openSUSE/open-build-service/pull/5800). :tada:

Last, but not least, we [dropped](https://github.com/openSUSE/open-build-service/pull/5765) [a couple](https://github.com/openSUSE/open-build-service/pull/5790) of routes that were defined for the public routing namespace, but not used by our so called interconnects. Interconnects? Yes! Interconnects. That's how we call when one OBS instance is using resources, mostly repositories and packages, from another OBS instance.
And since public routes are only used by such interconnects, we could safely remove them.

# Bug Squad
For a few weeks, we've been having a rotating role in our sprint dedicated to fix bugs.
Continiung this week, we fixed **6** bugs :tada:. Here is a summarized list of
the bugs we fixed during in the bug squad:

* [osc request list "--exclude-target-project" not honored by API](https://github.com/openSUSE/open-build-service/issues/5571)
* [Removing auto generated product files failed](https://github.com/openSUSE/open-build-service/issues/3777)
* [Request page for bootstrap crashed with undefined method](https://github.com/openSUSE/open-build-service/issues/5756)
* [Record not unique exception](https://github.com/openSUSE/open-build-service/issues/5639)
* [Duplicate entry exception for BsRequest](https://github.com/openSUSE/open-build-service/issues/5731)
* [Undefined method project_command](https://github.com/openSUSE/open-build-service/issues/5764)

# Next Sprint More

That was everything! Remember you can follow the work of the OBS team live in our [Trello Board](https://trello.com/b/Fs7boVwI/bs-sprint). Do not miss our next blog post! :wink:
