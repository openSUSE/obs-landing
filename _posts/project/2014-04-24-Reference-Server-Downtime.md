---
layout: post
title: Reference Server Downtime 
category: project
---
<img src="/images/posts/reference-server-downtime.jpg" width="420px" style="float:right; margin: 20px;" title="CC BY 2.0 - Damian Gadal https://www.flickr.com/photos/23024164@N06/5763326263">

### Bad news everyone!
Since earlier today the [storage area network (SAN)](https://de.wikipedia.org/wiki/Storage_Area_Network)
that holds all the binary build results from our reference server has a severe
problem (crashes before it can do a fail-over) and it looks like it wil not come back today :-(

As this is some generic problem in the system and not just some broken hardware we are working
with the manufactor on a solution. As fallback strategy, we started to sync back the last backup
data to another SAN system, but given the size the sync, it will not finish today.

All binary build results from nearly all projects are affected, the sources and project database are not.
We are very sorry for any inconvenience this may cause you, and assure you that we'll work like mules to 
get the reference server back on track as soon as possible!

<h5>About the OBS refernce server</h5>
{% include reference_server.inc %}

<h5>About the Open Build Service</h5>
{% include about.inc %}

