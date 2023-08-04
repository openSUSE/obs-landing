## Downtime on the afternoon of 3rd of August

On 3. August, a few hours after a large migration performed within the maintenance window earlier that day, we got notified about database errors coming from some of the tables.

**Date**: 03.08.2023 

**Impact**: Broken indexes on `project_log_entries`, `binary_releases`, `bs_request_actions` and `tokens` tables.

**Root Causes**: Database cluster VM run out of available space. Generation of table indexes did not work.

**Trigger**: Morning deployment and migration from utf8mb3 to utf8mb4.

**Resolution**: The tables were dumped and restored from scratch.

**Detection**: We were informed by BuildOPS who got notified via their monitoring.

## Lessons Learned
**What went well?**

The rest of the migration except for those tables

**What went wrong?**

* The current way we deploy with migration does not log the progress of migrations or inform us about things happening in real time
* We don't know about errors coming from the database if there are any unless somebody tells us
* We did not communicate this migration with the BuildOPS in advance to warn them of any potential fallout

**Where we got lucky?**

Only four tables ended up being affected

## Timeline (CEST)
- *09:03* Started the deployment with the migration
- *09:26* Ended the deployment
- *09:31* First recorded error in the index of `project_log_entries` table
- *13:37* Database cluster crashes
- *14:04* Build Service goes into downtime to export `project_log_entries` table
- *14:14* Started `project_log_entries` table import
- *14:59* Build Service comes back from downtime
- *17:40* Database cluster crashes again
- *17:56* We learn about `binary_releases` table index being broken
- *18:14* Started `binary_releases` table export without downtime
- *18:18* Started `binary_releases` table import
- *18:46* Finished import
- *18:50* We start performing `CHECK TABLE` on the rest of the tables in the database
- *19:08* We find out about `bs_request_actions` table being broken and take Build Service down for maintenance
- *19:16* Build Service comes back up after all the tables went through `CHECK TABLE`
