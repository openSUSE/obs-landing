---
layout: post
title: RabbitMQ Integration
category: development
---

The upcoming release of OBS 2.9 will allow you to integrate your RabbitMQ server with OBS's
internal events system.

## How does it work?

OBS has an internal events publishing system which keeps tracks of all kinds of events from the
posting of a comment by a user to package build failures. They are all published using the same
API where each event has a payload field which is a json field that will contain different attributes
and values depending what kind of event it is.

To learn more take a look at this list of the [event types](http://openbuildservice.org/help/manuals/obs-admin-guide/obs.cha.administration.html#idm139823522327776
) and their corresponding payload attributes.

When you integrate your RabbitMQ server with your OBS instance, then OBS will publish each one of
those events to RabbitMQ so you can parse and intepret the events in whatever way you want to.

## What are some usecases?

Bugzilla uses receives messages from OBS via RabbitMQ and checks them to learn when new submit
requests are opened which contain a reference to a bugzilla bug id. If they do reference a bug
then the bug is updated with a link to the submit request to keep people informed of the progress
being made on bugs.

## How can I use it?

If you have a RabbitMQ server running then you can update a configuration file in OBS to point to
your server. See [here](http://openbuildservice.org/help/manuals/obs-admin-guide/obs.cha.administration.html#_rabbit_mq_configuration) for more details.
