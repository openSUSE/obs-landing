---
layout: post
title: "Post-Mortem: Repository deletion broken on May 6, 2021"
category: deployments
author: Henne
---

There was a severe service degradation of our [reference server](https://build.opensuse.org). We want to give you some insight into what happened.

On May 6 we deployed a database migration that lead to corrupted indexes, which also lead to this service degradation for 1 hour and 47 minutes.

## Impact

The corruption made it impossible to delete repositories from the database. As deleting repositories is also done in various other OBS workflows we have seen problems with:

- Deleting a project
- Deleting a repository
- Changing request status (merging)
- Updating a project via XML (API and meta tab)

All of those ended in an error. Merging requests did not clean up the package/project used as source for it.

## Root Causes

MariaDB database corruption when doing foreign key modifications with `FOREIGN_KEY_CHECKS=0`.

## Trigger

Deployment of a database migration.

## Resolution

Changing the database migration to not use `FOREIGN_KEY_CHECKS=0` when changing indexes
that have a foreign key constraint. Rather delete/re-create it. [PR#11112](https://github.com/openSUSE/open-build-service/pull/11112)

## Detection

We got errors about the database problems on our errors tracker.

## Action Items

No immediate action items.

## Lessons Learned

### What Went Well

Collaboration among the team to resolve this.

### What Went Wrong

- We did not extensively test the migration up front.
- As the error was happening in various workflows we were not immediately aware of this
  being a general problem. No alert went off.
- We spent too much time getting the service into working state again. Maybe we should have tried a rollback,
  but that would also have not helped in this case. Still, 1 hour 47 minutes is a long time.

### Where We Got Lucky

We worked around the root cause by accident. Just by trying to recreate indexes even though the
database said the index was fine.

## Timeline (times in UTC)

- 10:04 We triggered a deployment which included the database migration
- 10:42 We noticed an increased amount of database exceptions in our error tracker and started to investigate
- 11:00 We decided against a rollback as this schema migration included also a data migration and the exceptions did
        not occur too frequently. The database also kept telling us everything is fine.
- 11:31 We involved a mariadb expert
- 11:47 We tried recreating the index in the database manually
- 11:47 Miraculously the service returned to a normal state
- 11:48 We continued to investigate the root cause
- 13:30 We noticed an error about missing/corrupt files when looking at the DB engine status (SHOW ENGINE INNODB STATUS;)
- 14:44 We were able to reproduce the issue in isolation
- 16:03 We worked around the root cause in the migration
