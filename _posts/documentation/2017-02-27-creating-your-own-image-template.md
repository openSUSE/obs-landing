---
layout: post
title: Creating Your Own Image Template
category: documentation
---

Are you considering to write your own image templates, but you don't know
how to start? You have come to the right place.

In this short article you will learn to create you own image templates
and how you can publish them.


## The Subproject

First create a subproject of your home project.

<img src="/images/posts/image_templates_project.png" style="margin:20px;" title="Creating a Subproject">

This will be the place where you collect your image templates.

## Adding The Image Configuration

Let's start with our first image. For that you need to create a package, which will contain the sources
of your image configuration.

<img src="/images/posts/image_templates_package.png" style="margin:20px;" title="Creating a Package container">

## Adding The Image Repository

Go to the 'Repositories' tab, click on 'Add repositories' and check the 'KIWI image build' checkbox.

Now the only thing missing is some source files of your image configuration. If you don't know
what this is, or you need to refresh your memory, have a look at our
[KIWI appliance documentation](http://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.package_formats.html#_kiwi_appliance).
It contains a brief overlook of a KIWI configuration setup as well as some links to the official KIWI documentation.

<img src="/images/posts/image_templates_overview.png" style="margin:20px;" title="Image Template Sources">

Continue to adjust your image configuration until you are satisfied.

## Publish your own image templates on the templates page

You might want to provide your image configuration to other users. In that case either
ask a maintainer of a publishing project to add your templates to their collection.

You can do that by creating a Submit Request:

* Click on the 'Submit package' link of the template you would like to submit
* Enter the project you want to send your changes to as *target project*
* Send the request and wait the response of the project's maintainers

<img src="/images/posts/image_templates_submit_request.png" style="margin:20px;" title="Image Template Submit Request">

Or send an email to the [OBS admins](admin@opensuse.org) and request that your
templates project is added to the templates page.
