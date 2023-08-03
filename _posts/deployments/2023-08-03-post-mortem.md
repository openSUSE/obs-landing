## Downtime on the afternoon of 3rd of August

On 3. August, a few hours after a large migration performed within the maintenance window earlier that day, we got notified about database errors coming from one of the tables.

**Date**: 03.08.2023 

**Impact**: Broken `project_log_entries` table

**Root Causes**: Database cluster VM run out of available space

**Trigger**: Morning deployment and migration from utf8mb3 to utf8mb4

**Resolution**: The table was dumped and restored from scratch

**Detection**: We were informed by BuildOPS who got notified via their monitoring

## Lessons Learned
**What went well?**

The rest of the migration except for that table

**What went wrong?**

* The current way we deploy with migration does not log the progress of migrations or inform us about things happening in real time
* We don't know about errors coming from the database if there are any unless somebody tells us

**Where we got lucky?**

Only one table ended up being affected

## Timeline (CEST)
- *09:03* Started the deployment with the migration
- *09:26* Ended the deployment
- *09:31* First recorded error in the `project_log_entries` table
- *13:30* Errors noticed in the log
- *14:04* Build Service goes into downtime to import the fixed table
- *14:59* Build Service comes back from downtime
