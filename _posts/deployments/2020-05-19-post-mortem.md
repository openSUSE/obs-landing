---
layout: post
title: "Post-Mortem: Severe Service Degradation on May 18, 2020"
category: deployments
---

The <https://build.opensuse.org> OBS instance was unavailable for eleven minutes, outside of our maintenance window.
We want to give you some insight into what happened.

- **Date**: 2020-05-18
- **Authors**: Henne, Lukas

## Summary

Due to backend services being offline for a while, there were many inconsistencies between backend and frontend
data that needed syncing. The service we used for this was allocating to much memory which made the OBS service
unavailable for eleven minutes.

## Impact

build.opensuse.org was completely offline for eleven minutes.

## Root Causes

A memory leak in the consistency check delayed job.

## Trigger

An unusual high amount of inconsistencies between backend and frontend data.

## Resolution

Not yet available.

## Detection

Admin noticed service degradation.

## Action Items

- <https://github.com/openSUSE/open-build-service/issues/9566>
- We need better alerting.
- We need an incident response process.

## Lessons Learned

### What Went Well

- As always our power users and admins are very fast and vocal about problems they see.

### What Went Wrong

- We did not realize that there are still consistency jobs left in the queue,
  which the consistency check job would pick up again.
- Although we have a dedicated role for production issues, we don't have an organized process
  how to respond to issues, which made our response in this instance slower than it had to be.
- Our monitoring noticed drops in available memory half an hour before the OOM killer
  hit in and didn't alert us.

### Where We Got Lucky

- When the first memory problems occurred, the OOM killer didn't killed any major services,
  so the OBS service was still functioning.
- When the memory problems started to hit us again, a simple restart of Ruby on Rails made
  the OBS service available again.

## Timeline (times in CEST)

- **11:15** We noticed that there are exceptions, thrown by "sendmail" not being able to allocate memory
  and started to investigate.
- **11:30** We realized that the consistency check delayed job queue service was offline. As this job is
  only running once a week and seeing spikes in memory usage all day, we first investigated the overall
  state of the system.
- **12:30** After the investigation left open a few question, more team members started to dig.
  We noticed that the OOM killer killed the ruby process of the delayed job queue, which made sense since
  there was a previous outtake of some backend services over the weekend. The consistency job is taking
  care of syncing the frontend with the backend and had much to do. Somehow this job was using too much memory.
- **13:03** We restarted the delayedjob queue, because we believed we have time till next Sunday to fix the
  memory problems of this jobs.
- **14:30** Admins from our sister team noticed that the system starts to slow down heavily.
- **14:30** We started to investigate again noticing that the whole Ruby on Rails service was down.
- **14:33** We noticed that OOM killer was killing processes again.
- **14:39** We gathered together to investigated the problem.
- **14:40** We noticed that the OOM killer this time not only killed the delayed job service but also Ruby on Rails.
- **14:41** We restarted the Ruby on Rails service which made the OBS service available again.

