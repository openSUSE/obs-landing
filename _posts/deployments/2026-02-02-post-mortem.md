---
layout: post
title: "Post-mortem: Service Disruption (29-01-2026)"
category: deployments
author: the OBS Team 
---

On January 29th, the Open Build Service (OBS) experienced a significant service disruption.
All OBS users were affected for around 1 hour and 45 minutes.
We want to give you some insight into what happened and what steps we are taking to prevent similar problems in the future.

## Detection

During deployment, we detected many errors being tracked in our logs.
  
## Root Cause

The errors tracked in our logs pointed to a lock wait timeout. 
After confirming the migration was still running, we concluded the migration
was taking too long and was locking the database, preventing users to operate
with OBS normally.

## Resolution

We attempted to stop the running migration, however, the migration didn't stop
completely at the MariaDB level, keeping a residual never-ending COMMIT to the
database.

After performing a backup and killing the process, it was possible to run the
migration again. This time without any traffic from outside, and it ran very
fast despite the thousands of records affected.

### Action Items

- Improve the data migration to run in batches before running it again.

## Lessons Learned

- Migrations affecting a massive amount of data should be tested beforehand.
- Even if tested, use the Maintenance Windows to run massive migrations.

## Timeline (All Time in UTC)

- 2026-01-29 10:21 UTC: Deploy and errors tracked on Errbit (Mysql2::Error::TimeoutError: Lock wait timeout exceeded; try restarting transaction)
- 2026-01-29 10:49 UTC: Stop the migration but the service doesn't recover
- 2026-01-29 10:55 UTC: Restart Apache
- 2026-01-29 11:05 UTC: Stop Apache to manage the Database without more incoming requests
- 2026-01-29 11:10 UTC: The index creation didn't really stop in the database
- 2026-01-29 11:55 UTC: Re-run the schema migration independently. With all the service stopped, it ran really fast.
- 2026-01-29 12:00 UTC: Re-run the data migration independently but cause an error (An error has occurred, all later migrations canceled:  undefined method 'update_columns' for nil)
- 2026-01-29 12:06 UTC: Service restored
