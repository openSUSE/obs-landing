---
layout: post
title: Download on Demand (DoD)
category: releases
---

Using Download on Demand (DoD) Feature

The Downloand on Demand feature enables you to configure a repository which only download needed packages during build time.

## Why using DoD ? 

There are several reasons for using a DoD repository:

* **Save disk space:** Only needed packages are being downloaded
* **Automatic package updates:** Get updates when upstream changes
* **Simple configuration:** Configurable in project meta

## Using DoD

To setup a DoD repository, choose **Add DoD repository** in the Repositories section and fill in necessary information regarding 
the repo (name, architecture, type and URL).

On next build, the required packages should be downloaded on demand for that repository and the packages gets updated when a newer
version is available upstream.

## Troubleshooting

If you ever experience problems with a DoD repository, please make sure the dodup service is running and check the corresponding logfile
/srv/obs/log/dodup.log for errors. 

## Documentation

More information can be found at our documentation [Using DoD repositories](http://openbuildservice.org/help/manuals/obs-reference-guide/cha.obs.concepts.html#concept_dod) and [Adding DoD repositories](http://openbuildservice.org/help/manuals/obs-best-practices/cha.obs.best-practices.webuiusage.html#idm140458366672880).

## About the Open Build Service
{% include about.inc %}
