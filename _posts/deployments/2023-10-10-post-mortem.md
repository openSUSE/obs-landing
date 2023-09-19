---
layout: post
title: "Post-mortem: Service Degradation for Pages with Comments"
category: deployments
---

## OBS Pages Inaccessible on 19th of September

On September 19th the pages and API routes on OBS displaying comments were inaccessible (returning a 500 error) to all users for 13 minutes. Here is what caused the problem.

**Date**: 19.09.2023

**Impact**: Pages and API routes on OBS displaying comments where not accessible to anyone.

**Root Causes**: In our deployment, we first update the obs-api package (including restarting servers) and then run migrations. In the timeframe between the restart and the end of the migrations, we saw the failures. The updated interface dealt with methods like `moderated_at` which was not reflected in the database yet.

**Trigger**: A deployment.

**Resolution**: Everything went back to normal when the migrations finished. No human intervention.

**Detection**: Manual check after deployment and error tracking tool.

## Action Items

| Action Item | Owner |
|---          |---    |
| Plan a strategy to deploy migrations. It might include separating migration deployment from the code changes deployment or splitting the migration into different steps | Production Squad and/or any team member |

## Lessons Learned

**What went well?**

* We started the incident protocol as soon as possible.

**What went wrong?**

* We did not test how long the migration runs.

**Where we got lucky?**

* OBS went back to normal without intervention.
* There was no data loss.

## Timeline (CEST)

- *10:27* Deployed with migrations assuming there won't be downtime
- *10:32* Noticed some errors when accessing pages with comments (package, project and requests pages).
- *10:34* Detected Errbit errors regarding missing `moderated_at` columns in the Comments table
- *10:40* Errors stopped
- *10:46* Concluded that we got the errors in the timeframe between the servers restarted and the migrations finished. The interface tried to deal with new columns that weren't in the database yet.
