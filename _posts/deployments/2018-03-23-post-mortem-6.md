---
layout: post
title: "Post-mortem: Downtime on March 23, 2018"
category: deployments
---

After today's deployment we faced a downtime of our reference server. We want to give you some insight into what happened.

## What happend?

At **11:32** we deployed a new version to our reference server build.opensuse.org. 
Right after the deployment the application was not reachable anymore and our exception tracker (Errbit 💋) started to receive a few `TypeError: superclass mismatch for class BsRequestAction` exceptions. 
The cause of the error was not very obvious.
All HTTP requests made by our users where logged in the apache logs as internal server error but seem to never reach the app.
We suspected that something broke the apache configuration and checked it, to no avail.
We also suspected that somehow the log location changed and checked the general apache logs, to no avail.
In the meantime, we enabled the maintenance page for build.opensuse.org.
Because no external requests were reaching the application anymore, we needed to manually send requests from the console on the OBS server to get output in our log files to proceed with debugging.
Some of us tried to "just" revert the deployment by installing an old package which unfortunately was not possible because of other missing package dependencies (gem packages).
Then we wanted to check something with the Rails console and found out that it was also throwing the same `TypeError` when executed which brought us on the right track.
Eventually we completely reverted the changes by manually removing them and at **11:58** the server was up again.

## Why did it happen?

The deployed version contained a refactoring of the OBS submit request models.
This refactoring did some moving and renaming of files to structure them under a common namespace.
One of these files used an ActiveRecord namespace outside of the model directory which caused a ``TypeError: superclass mismatch for class BsRequestAction`` because it was not required before.
This error only occured when the eager load setting was enabled which caused that we neither experienced this error in development nor in our test suite.

## Other side-effects
The full crash of the application also caused a crash of the delayed jobs workers, which we use for asynchronous jobs.
This was not discovered until Monday morning which caused e.g. that the notification system was not working over the weekend and delayed job needed to process several thousand jobs.

## How are we going to do better in the future?

### Mirror production closer in the CI cycle
As a first step we enabled eager loading in our test suite. 
The eager loading configuration is usually disabled in development and test environment to e.g. get faster boot times.
We enabled now the eager loading configuration in our CI because we run the full test suite and enabling eager loading does not affect the execution time there.

### Faster deployment revert
In this case where the whole application crashed, the best approach would have been to just revert the deployment.
To understand why this is currently not possible, you need to know that our deployment is installing the obs-server package from the Open Build Service repository.
Therefore we also package all dependencies, for instance also all gems.
Which means, if either the old version of the obs-server package or one of it's dependencies is not available in the repository anymore, a revert is not possible.
This was true in this particular case.
Rebuild the packages and waiting till these are available like we did already in the past is also not an option if the application is completely down as it would take additional ~20-30 minutes. 
This is the second time that reverting of a failed deployment was not possible, so we decided this is one of our top priorities to fix.

### Better documentation & cleanup
As this was happening directly when the app booted there wasn't _any_ log output in the Rails logs. 
But there wasn't any debug/backtrace output in the apache log files either because we had set ``PassengerLogLevel`` to 0 in our passenger configuration (based on a misunderstanding of the passenger docu we guess). We need to write more documentation about the production deployment.

### Cleanup of the production machine
During our hunt for the right log file we noticed a lot of old log files around. Apparently the log location, type of log etc. has been changed a couple of times during the lifetime of this machine.
We need to clean this up so it's not distracting you while you're already in panic-mode trying to keep downtime to a minimum.

