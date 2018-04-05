---
layout: post
title: Highlights of the OBS frontend development - Sprint 35
category: development
---

Have you already discovered all the hidden Easter eggs :rabbit: in [build.opensuse.org](https://build.opensuse.org)? 
If not, don't worry and keep on reading our latest sprint report (2018-03-19 to 2018-03-29) and we will show you :egg:.

# Features

## Diffing of superseded requests
OBS makes it tremendously easy to fix bugs in packages and submit it back to the distribution :muscle:.
However, to get it back into the distribution, your submit request needs to pass the openSUSE review team.
Often it happens that you get important feedback on your submit request and need to update it.
In OBS, this happens with creating a new submit request which supersedes the old one.

In the past it was necessary to switch back and forth between the superseded and superseding request and check if all suggestions got added correctly. Exhausting :sweat:!
A while ago [Ludwig Nussel](https://github.com/openSUSE/open-build-service/issues/3915) requested a feature to make this task easier.
When you go now to a superseded request, you get a message that this request got superseded and you can see the diff of the superseded and superseding request instead.
Check out this [pull request](https://github.com/openSUSE/open-build-service/pull/4741) for more information.

![Superseded request](/images/posts/sprint_35_request_1.png)

![New diff view](/images/posts/sprint_35_request_2.png)

## API for cloud uploads

As you might already have [heard](http://openbuildservice.org/2018/03/01/cloud-upload/), OBS is now able to upload built EC2 images to Amazon Web Service :cloud:.
This sprint we added API routes for

* Starting a cloud upload
* Aborting cloud uploads
* Listing all existing cloud uploads (succeeded, failed and aborted ones)

This allows you to automate your workflow :smiley:

# Bug fixes

## Fix request review view for role requests

When reviewing a request of type `set_bugowner` and `add_role` there was some information missing in the request review page, such as the user or group for which we were requesting the role, and in some cases, there was no information at all. 
That made the request role review really complicated. 
How should I know if I want to accept a request if I do not know who will get the role? :confused: 
This have been fixed and now all the information is shown. 
We have even made clearer the difference between `add_role bugowner` and `set_bugowner`: :tada: 

![set_bugowner](/images/posts/sprint_35_role_review_1.png)

![add_role bugowner](/images/posts/sprint_35_role_review_1.png)

## Incompatible character encodings

Creating a submit request also sends email notifications to the involved reviewers.
Sending them without applying an encoding conversion resulted in a exception :cry:
This exception was finally [catched](https://github.com/openSUSE/open-build-service/pull/4702), and since then doesn't occur any more. :tada:
    
    
## Enforce version format validation in KIWI editor
 
Kiwi expects image versions to be in a certain format (3 numbers split by dots), otherwise an image build might fail. 
We now added a validation to the kiwi editor.
 
# Releases

## Release of OBS 2.9

Last week we released OBS 2.9. :tada: 
Read the [blog](http://openbuildservice.org/2018/03/19/release_of_obs_2.9/) post to learn more about the cool features it brings. Like the kiwi editor, Ec2 cloud upload and RabbitMQ support :green_heart:

# Test

In our objective of increasing our test coverage this time we improved WebuiPackageController#branch tests to make that action completely covered. :muscle: For more details have a look at [PR#4532](https://github.com/openSUSE/open-build-service/pull/4743).
