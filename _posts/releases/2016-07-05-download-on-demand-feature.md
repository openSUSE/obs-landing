---
layout: post
title: Download on Demand (DoD)
category: releases
---

## Using Download on Demand (DoD) Feature

The Download on Demand feature enables you to configure a repository which only download needed packages during build time.

### Why using DoD?

There are several reasons for using a DoD repository:

* **Save disk space:** Only needed packages are being downloaded
* **Automatic package updates:** Get updates when upstream changes
* **Simple configuration:** Configurable in project meta

### Using DoD on OBS

New distributions in build.opensuse.org instance get added using DoD now. This allows us to add also repositories which are not static. New repositories are the maintenance update repositories of various distributions. Ubuntu universe is also accessable now. And last but not least rolling release distributions like Fedora Rawhide or Arch.

Keep in mind that the changes in these repositories may lead to the situation that the build configuration needs to be adapted. So you might see failures during the setup of the build environment from time to time.

Full list of repositories:

* **Fedora:23** (standard, update)
* **Fedora:24** (standard, update)
* **Fedora:Rawhide** (standard)
* **Ubuntu:16.04** (standard, universe, update)
* **Arch:Core** (standard)
* **Arch:Extra** (standard)
* **Arch:Community** (standard)
* **Debian:8** (ga, update)

To add this repos to your project, go to the **Repositories** tab and click on **Add repositories** and choose **Expert Mode**. Please fill in your prefered project, e.g. Fedora:Rawhide, select the repository and a name and you are ready to go.  

### Using DoD on your own instance

Please note that you need **admin privileges** in order to add DoD repositories to a buildservice instance.

To do so, choose **Add DoD repository** in the Repositories section and fill in necessary information regarding 
the repo (name, architecture, type and URL).

On next build, the required packages should be downloaded on demand for that repository and the packages gets updated when a newer
version is available upstream.

### Troubleshooting

If you ever experience problems with a DoD repository, please make sure the dodup service is running and check the corresponding logfile
/srv/obs/log/dodup.log for errors. 

### Documentation

More information can be found at our documentation [Using DoD repositories](http://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.concepts.html#concept_dod) and [Adding DoD repositories](http://openbuildservice.org/help/manuals/obs-best-practices/cha.obs.best-practices.webuiusage.html#idm140458366672880).

### About the Open Build Service
{% include about.inc %}
