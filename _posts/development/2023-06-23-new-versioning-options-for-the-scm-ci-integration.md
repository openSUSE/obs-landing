---
layout: post
title: Versioning in the SCM/CI Integration
category: development
---
<!--
Start writing "What we know". Come up with an outline.

Then follow the next points:

* Goal: What is the goal of the document?
* Write an outline of topics:
* Follow the template:
  - Title: What is it?
  - Subtitle: Additional information.
  - Overview: What will you learn.
  - Sections: 
  - Read next: Related documents that might help the user.
* Golden rule: Thou shalt not assume. You might think you're obvious, but you have to be aware of the knowledge level your audience is at.
* Feedback:
  - at 30% done: first draft, ask the reader about the structure and the outline.
  - at 90% done: nit-picking
-->

The goal of this post is to explain the new versioning of the workflow configuration file.
We introduce the versioning as a way to introduce new features in the SCM/CI without breaking the existing user's configurations.

We introduced a versioning of our SCM/CI workflow features to ensure compatibility.
We use major/minor versioning scheme.
We introduce breaking changes with major version updates.
Minor version updates will only include backwards-compatible changes. 
Those changes may need minor adjustments to the workflows.
The workflow version can be specified as the top-level element of the workflow configuration yaml file.
Right now, we don't enforce a specific version in the yaml configuration and it defaults to the latest minor version.
This is how a versioned workflow configuration looks like:

    version: 1.0
    workflow:
        step:
            - link_package:
                source_project: GNOME:Factory
                source_package: gnome-shell
                target_project: home:jane:playground

The only verisons that we have right now are:

    1.0 The default version of the Workflow configuaration
    1.1 Adds the `merge_request` to the event filters.


The pull_request event filter and be aliased to merge_request under the new 1.1 version