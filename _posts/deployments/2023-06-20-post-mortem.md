---
layout: post
title: "Post-mortem: Staging Workflow Unavailable"
category: deployments
---

In our efforts to add a distribution (Debian 12), we accidentally deleted an entry in our architecture database table. That made all attempts to fetch this architecture through associations crash.

## Impact

Various pages from the [staging workflow for openSUSE:Factory](https://build.opensuse.org/staging_workflows/openSUSE:Factory) were not accessible for 34 minutes.

## Root Causes

A `Distribution` can have an association to more than one `Architecture`. We added a new `Distribution` for Debian 12 with two architectures: i586 and x86_64. But after reading [the release post from Debian](https://www.debian.org/News/2023/20230610) more closely, we realized that i586 processors are not supported anymore. While removing the unsupported architecture, we accidentally deleted it from the architectures database table instead of deleting the association.
## Trigger

Loading (through associations) the `Architecture` we deleted from the database.

## Detection

Our [people on call](https://trello.com/c/IKZgDuaD) started to see exceptions pile up in our [exception tracker](https://errbit.opensuse.org/).

## Resolution

We re-created the row in the `Architecture` table in our database.

## Action items

- [Developer documentation](https://github.com/openSUSE/open-build-service/wiki/Distributions) about the Distribution feature answering questions like, what is it, how to setup a distribution from an already existing project, and how to setup a distribution from scratch.
- An [admin interface](https://trello.com/c/K8a7nBZC) to create a Distribution from an existing project, and create a Distribution from scratch.
- [Introduce incident management drills](https://trello.com/c/GijvIK2Z).
- Improve [alerting](https://trello.com/c/MEGZQSLh) for requests that result in internal server errors.

## Lessons learned

Do not perform admin/management tasks for data deletion in production until you try these operations in staging or development environments. It's even better to have a second pair of eyes with you. Mistakes can happen but the chances are low when people are collectively working on something.

## What Went Well?

- Once we realized our mistake we were able to re-create the `Architecture` row quickly

## What Went Wrong?

- It took us too long to realize the increased frequency of exceptions
- No alert was triggered

## Where We Got Lucky

- Information we needed to create new entry in database was readily available in our shell history so we did not have to pull them out of some backup.
- We used a method to [delete](https://api.rubyonrails.org/classes/ActiveRecord/Persistence.html#method-i-delete) the Architecture that did not trigger any callbacks or changes to the associations of the object destroyed. As this would have had way more impact.
- We relatively quickly noticed exceptions as this did not throw an alert.
- During the time the Architecture was deleted only customers using the staging workflow code path tried to fetch it. Other code-paths would have thrown exceptions too but nobody used them during this time.

## Timeline (times in UTC)

- 20/06/2023 12:32 - We accidentally deleted the architecture
- 20/06/2023 12:43 - Our on call people detected exceptions piling up
- 20/06/2023 12:50 - Our on call people checked with customers and they confirmed a problem with the staging workflow
- 20/06/2023 12:52 - Our on call people started to alert the team
- 20/06/2023 13:03 - We discovered our mistake that caused this
- 20/06/2023 13:07 - Our on call people declared the incident according to our  [incident management protocol](https://github.com/openSUSE/open-build-service/wiki/Incident-Management-Protocol)
- 20/06/2023 13:16 - Re-created the Architecture in the database
- 20/06/2023 13:16 - Verified that the exceptions stopped
- 20/06/2023 13:17 - Our on call people declared the incident resolved
