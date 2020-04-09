---
layout: post
title: "Post-Mortem: Severe Service Degradation on April 8, 2020"
category: deployments
---

After today's deployment, our reference server suffered from a severe service degradation. We want to give you some insight into what happened.

- **Date**: 2020-04-08
- **Authors**: Lukas, Eduardo, Dani, Henne

## Summary

Some parts of the application were losing relationships between users/groups and other things like projects. This led to some cascading failures in various workflows, especially because some code paths were returning different states about who is maintainer of what.

## Impact

- Automatic review assignments for users with the review role did not happen anymore
- Role management in the UI layer stopped working
- Project/Package involvement for users did not show anymore

## Root Causes

The order in which we restart the cache daemon during the deployment.

## Trigger

A change (unknown to us) in how objects are marshalled into the cache store.

## Resolution

Manually restarting the caching daemon.
Changing the order in which we restart the cache daemon during the deployment.

## Detection

Users notified us in a chat.

## Action Items

Investigate together with the Rails community why the marshalling changed.

Investigate how we can test or even better stop marshaling whole objects into the cache store ([#9362](https://github.com/openSUSE/open-build-service/issues/9362))

## Lessons Learned

### What Went Well

- Users notifying us about problems they see quickly
- Immediate escalation of the problem to everybody

### What Went Wrong

- Because we just released a blog post about updating the Rails framework people immediately started to attribute this failure to this change. This was distracting us for a time while debugging
- Global caching of Roles doesn't seem to be covered by tests
- We did not assign someone in the beginning to keep users up to date with what is happening

### Where We Got Lucky

We didn't have to introduce a large code change regarding `Roles.hashed` but a simple restart of the cache daemon was enough to fix the issue.

## Timeline (times in UTC)

- **11:11** We deployed a change set to production, everything went well
- **11:49** A user notified us that submission to his project did not open automatic reviews anymore. The projects user page did not show any involved users anymore. The API layer however still reported the correct users
- **11:54** We asked the user to open an issues
- **11:57** The [issue](https://github.com/openSUSE/open-build-service/issues/9353) was created
- **11:58** We made this a P2 priority and started to investigate
- **12:14** Other users started to report that their involvement in Project/Packages did not show up in the UI anymore
- **12:22** We made this a P1 priority and the whole team interrupted their ongoing planning meeting and started to investigate together
- **12:22** to **13:00** We started out with looking why the UI was not showing check marks in the Project#users view and tried to gather the data in the same way the view did. On the rails console this worked like it ought to. We checked the logs for deprecation warning because the change set included a update of the Rails framework, but there were none. We then started to look into the associations between user/group and project. In the end, we concentrated ourselves on the [`Project.for_user`](https://github.com/openSUSE/open-build-service/blob/a0761b4a0dd4c3ef3cd5c30328bb2ecfdf7461ae/src/api/app/models/project.rb#L111) scope that should return all projects that the user has a maintainer role in, but it did not. One developer noticed that the method `Role.hashed` returns `Role` objects which we were comparing to a `id` integer field. After changing the comparison to integer to integer this scope started working again. We went on to prepare a pull-request with changing this everywhere in our code base.
- **13:00** We informed users that we found the root cause and that we were working on a fix
- **13:09** One developer suggested to restart our caching daemon because the `Role.hashed` method reads from this.
- **13:11** After restarting memcache daemon everything went back to normal.
