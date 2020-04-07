---
layout: post
title: Getting Up-to-date! 
category: development
---

It often happens that, while we are immersed in our daily work, we discover even more things which could potentially be improved or would be interesting to do.

We are sure we all keep a parallel list which includes ideas like starting to use a new technology, upgrading certain components to a new software version, automating a repetitive part of a proccess...

We did it! We managed to cross some items off our _TODO_ list in the last two weeks.
We invite you to discover all the cool things we fulfilled, including the migration of the whole project to Rails 6! Keep reading to know more. 

## Migration to Rails 6

In the recent past, there have been some attempts to migrate OBS project to Rails 6 by different colleagues and contributors. Lately, this got revisited by Lukas Krause as part of the HackWeek19.

As a follow-up to that project, we took the opportunity to work again on the migration.

This is an important step in order to make sure that the Open Build Service project stays future-proof and reliable. Contributors benefit from an up-to-date framework with all the functionality they are used to. The users are delighted by an actively maintained foundation that keeps on receiving security updates and improvements in the future.

The upgrade to a new major version should be processed carefully and with a good amount of attention.
Therefore, we decided to not only rely on our automated tests, we also deployed the upgrade in a production-like environment in order to make sure all the individual components keep on working smoothly together.

We will have it soon in production! :clap: :clap: 

## Safer Migrations

Every time a new migration gets introduced to our database, we ask ourselves: Is it safe to deploy and consequently run the migration at any time of the day?

Certain database migrations imply a downtime when running and this obviously affects our users. Therefore, we postpone the deployment to a better moment, normally to our maintainance window on Thursday mornings. This means that sometimes, we have to stop doing the daily deployments for a while.

In order to minimize the impact of this kind of situations, we have decided to start using the [strong_migrations gem](https://github.com/ankane/strong_migrations). Their own sentence explains everything:

> _"Strong Migrations detects potentially dangerous operations in migrations, prevents them from running by default, and provides instructions on safer ways to do what you want."_

The addition of this gem will help us to detect unsafe migrations and to get closer to a Zero Downtime scenario.

<img src="https://media.giphy.com/media/3og0IAQG2BtR13joe4/giphy-downsized.gif"/>

## Obs-tools and OpenQA

Our team maintains the [obs-tools repository](https://github.com/openSUSE/obs-tools). It contains some useful tools for our project.

One of the pending tasks in our _TODO_ list was the dockerization of these tools. This simplifies the installation and creates a uniform setup in any machine.

The only prerequisite for the usage is the installation of `docker` and `docker-compose >= 1.18`. From now on, our hosts are running just those docker containers, instead of using crontab and timer to run the scripts.

## Get in Touch

A lot of improvements have been done these weeks. Little steps to make OBS easier to use, contribute and maintain.

We hope you also find them useful and they inspire you to start [contributing to the OBS](https://github.com/openSUSE/open-build-service/blob/master/CONTRIBUTING.md).

Do you have any doubt or suggestion? Have you noticed any malfunctio in OBS?
Get in touch with us:

- On GitHub, by opening an issue and / or commenting on an already opened issue.
- On IRC, by talking directly to us. We are in the channel #opensuse-buildservice on Freenode.

We are looking forward to reading from you and crossing more tasks off the list.  :heavy_check_mark:
