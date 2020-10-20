---
layout: post
title: Introducing the Open Build Service Connector
category: development
---

As part of the developer engagement program, SUSE has kicked off the development of the [Open Build Service Connector](https://marketplace.visualstudio.com/items?itemName=SUSE.open-build-service-connector), an extension that brings the Open Build Service into Visual Studio Code!


# Everything Starts With a Bookmark

The Open Build Service Connector is built around bookmarks of packages and projects. Bookmarks can be used to browse a project, its packages and their files. Additionally, you can view the configured repositories and adjust their project paths and architectures.

<img src="/images/posts/2020-10-22/bookmarks.png" alt="View package files from bookmarks and the project's repositories" width="600px">

Individual packages or whole projects can be checked out directly from within Visual Studio Code to the file system similarly as one would do via `osc`. OBS' version control is seamlessly integrated into Visual Studio Code's Source Control module and can be used in a comparable fashion to the git extension.

<img src="/images/posts/2020-10-22/scm_quickdiff.png" alt="Changes to locally checked out packages are highlighted by Visual Studio Code" width="600px">


# Branch, Build and Collaborate

One of the cornerstones of the openSUSE project has always been collaboration, which is also fundamentally built into the Open Build Service. The Open Build Service Connector follows this philosophy and allows you to branch any bookmarked packages, check them out locally, modify them, build them via `osc` and submit your changes back as a submitrequest.


# Contribute

We need your help! Give the extension a try, check out if it fits your use case and give us feedback over on [GitHub](https://github.com/SUSE/open-build-service-connector).

In case you want to access OBS API via Node.js or a even a browser, then you can use the new wrapper library [open-build-service-api](https://github.com/SUSE/open-build-service-api).
