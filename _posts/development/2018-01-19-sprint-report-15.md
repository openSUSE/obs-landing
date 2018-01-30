---
layout: post
title: Highlights of the OBS frontend development - Sprint 30
category: development
---
Here are the results the OBS frontend team has achieved in the last two weeks (2018-01-08 to 2018-01-19).

## Features

### Cloud upload
As you already know from our [last sprint report](http://openbuildservice.org/2017/12/22/sprint-report-14/), we are working on a way to allow users to upload their images to external cloud providers like Amazon Web Services or Microsoft Azure.

The missing part to get a fully working upload feature for Amazon EC2 was to glue together the frontend and backend parts.
Therefore we needed to implement several models, validations, views and backend calls in the frontend.
You can see the result in the following screenshots:

![Cloud upload new page](/images/posts/sprint_30_cloud_new.png)

![Cloud upload index page](/images/posts/sprint_30_cloud_index.png)

Once all data for the upload was provided in the frontend, the backend schedules a job to do the actual upload which internally uses _ec2uploadimg_.

### Collaboration with Enceladus project
_ec2uploadimg_ is part of _ec2utils_ from the [Enceladus project](https://github.com/SUSE/Enceladus).
Since we have a specific use case for OBS, we started to adapt this project to reduce the number of parameters we have to provide.

When uploading to Amazon EC2, it is necessary to create a helper instance which receives the image and copies it to an attached volume.
It is then possible to create an Amazon Machine Image (AMI) from this volume.

However, to start the helper instance it is necessary to provide several resources:

* An SSH key to log into the helper instance
* A security group with SSH port open
* A Virtual Private Cloud subnet identifier

Providing all these pieces of information is not very convenient for an user and furthermore these resources are bound to an Amazon region.
Eventually we decided to implement a way to temporarily create all these resources and delete them afterwards again.
We collaborated a lot with Robert Schweikert, one of the maintainer of Enceladus, and managed to get [several](https://github.com/SUSE/Enceladus/pull/188) [pull requests](https://github.com/SUSE/Enceladus/pull/181) merged upstream.

## Bug fixes

### DelayedJob queue dies afer Mysql2::Error: Data too long for column 'event_payload'
In the past we used two different libraries for encoding and decoding JSON.
The differences in the way they encoded some special characters (e.g. HTML entities) sometimes caused an overflow of the maximum size of the field for storing the payload on the notifications.
As this caused quite a lot of errors in our Errbit instance, we decided that we wanted to fix this in this sprint.
This was done by switching to use only one library instead of two different ones.

### Request#show undefined method '[]' for nil:NilClass
We prevented the application from throwing an exception in the case the key 'shown' was not found in the structure returned from a sourcediff call.

## Rubocop Agreement
[RuboCop](http://rubocop.readthedocs.io/en/latest/) is a Ruby static code analyzer.
Out of the box it will enforce many of the guidelines outlined in the community Ruby Style Guide.
We already use Rubocop since a while, however, we had quite a few cops (= the different style rules) disabled.
This sprint we discussed and agreed on cops we actually want to disable/enable and on the specific configuration.
At the same time we fixed many offenses in our code base.
