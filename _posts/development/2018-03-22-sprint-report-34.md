---
layout: post
title: Highlights of the OBS frontend development - Sprint 34
category: development
---

People of the Builds! Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-03-05 to 2018-03-16).

# Features

## Allow local users in LDAP mode

When we released the official support for LDAP in OBS 2.8 (back in [Sprint 22](http://openbuildservice.org/2017/08/18/sprint-report-22/)) we decided to not allow local users when LDAP mode is enabled.
Since this broke workflows and setups of various customers who rely on that because they don't have full control over the LDAP instance they are using, we now implemented a feature that allows admins to flag certain users as 'local users'.
Such users won't authenticate via LDAP, but via the OBS instance.

## Handle Azure credentials in a secure way

Do you know we are working in the Azure Cloud Upload feature of OBS?
In the next sprints we will include it on our codebase.
In this one we make sure that the [Azure credentials are handled in a secure way](https://github.com/openSUSE/open-build-service/pull/4644), not showing them in the Webui interface, and encrypting them in the database.
Stay tuned! :wink:

## Tasks page split off the user page

So far the information about users and the things they need to work on (submit requests, request review, maintenance updates etc.) have been on one page.
But account info and involved projects/packages are fairly static info and all the things collaboration are ever changing.
So we decided to give each of them a dedicated page to provide better focus.

![What's splitted](https://trello-attachments.s3.amazonaws.com/57e2914c464225376896419b/59e4b422c24fd7d6b369b351/06dd34cff4c40f3328c993d6fe1878b6/Screenshot-2018-3-5_Home_of_hennevogel_-_openSUSE_Build_Service.png)


# Bug fixes

## RabbitMQ Connection Recovery

It was [reported](https://github.com/openSUSE/open-build-service/issues/4522) that after creating a comment led to an 500 error.
This behaviour was caused by a wrong SSL configuration in the RabbitMQ parameters, in the OBS options.yml file.
After reproducing it we could also see the error in the same page. :see_no_evil:

So [adding the exception](https://github.com/openSUSE/open-build-service/pull/4629) to the code was what finally fixed the issue. :tada:


# Refactoring

## Webui::WebuiController

We started a deep [refactoring](https://en.wikipedia.org/wiki/Code_refactoring) of the controllers.
In this sprint we focused on the Webui::WebuiController.
Five pull requests were created, almost 300 lines of code were added, and 300 lines of code were deleted.
And there is still more work to do!
