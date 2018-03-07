---
layout: post
title: Highlights of the OBS frontend development - Sprint 33
category: development
author: OBS frontend team
---

Another Sprint is over and here is what the OBS frontend team has achieved in the last two weeks (2018-02-19 to 2018-03-02).

# Features

## EC2 Cloud upload

The last few sprint reports we already showed our efforts to implement a cloud upload feature.
This sprint **a lot** of changes have been made to the EC2 cloud uplod.

First of all, we improved the list of jobs for uploading to the cloud and now we also show the details field.
The details field for instance shows the created [AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html) id.

Our Amazon EC2 uploader makes use of the fantastic [ Enceladus ec2uploadimg](https://github.com/SUSE/Enceladus) project in the background.
While uploading, ec2uploadimg creates several resources like a helper instance or storage volumes.
In case of a successful upload, all these resources get cleaned up.
However, we also implemented the possibility to abort an upload.
In this case, these resources stay and it is necessary to clean them manually up. 
Not very nice.
Therefore we implemented an automatic cleanup in case of an aborted upload in this sprint.
We implemented this directly in Enceladus and sent a [pull request](https://github.com/SUSE/Enceladus/pull/196) back upstream.

Until now all this was hidden behind a [feature flag](https://martinfowler.com/articles/feature-toggles.html).
This sprint we also tested all different regions in Amazon EC2 and decided to finally release it to the public.
You can read more about it in our [cloud upload blog article](http://openbuildservice.org/2018/03/01/cloud-upload/).

# Tests

Like every sprint we were increasing our test coverage. This time we extended [PackageController#save_meta](https://github.com/openSUSE/open-build-service/blob/master/src/api/app/controllers/webui/package_controller.rb#L988) 
tests to cover the holes and have it fully covered. What was missing? Only a few lines that can be checked in [PR#4532](https://github.com/openSUSE/open-build-service/pull/4532).
