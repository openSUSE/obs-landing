---
layout: post
title: "Post-mortem: Downtime on November 11, 2018"
category: deployments
---

After today's deployment we faced a downtime of our reference server. We want to give you some insight into what happened.

## What Happened?

At 09:41 (GMT+1), we deployed a new version to our reference server build.opensuse.org. Right after the deployment, the application didn’t boot anymore and displayed our error page.

We immediately recognized from the apache log file a conflict between dependencies from rubygem-passenger.
After fixing the conflict dependency, we were back online at 09:47 (GMT+1).


## Why Did It Happen?

Last week, we updated the gem `rack` due a security issue. However it was unclear to us that Passenger do not uses the bundled gems but the system rubygems.

After update the obs-api via zypper up, Passenger started to complain about the rack version. Updating the system rubygem-rack (via zypper up rubygem-rack) fixed the issue.

## How Are We Going to Do Better in the Future?

- We updated our spec file to make sure the system gems for rack and rake match the gems installed by bundle gems service.
  The necessary changes and more information can be found in the [PR#6234](https://github.com/openSUSE/open-build-service/pull/6234)
