---
layout: post
title: An Oasis in the Middle of the Routine.
category: development
---

It often happens while we are immersed in our daily work. We discover even more things which potentially could be improved or would be interesting to do.

We are sure we all keep a parallel list which includes ideas, like starting the usage of a new technology, upgrading certain components to a new software version or automating a repetitive part of a proccess ...

Two weeks ago, we considered it was time to stop our daily routine for a while and to start crossing tasks from our long TODO list. It has been very comforting! :smile:

We invite you discover all the cool things we managed to tackle in just a few days.

## Migration to Rails 6

This already got started by different people in the recent past.

Lately this got revisited by Lukas Krause as part of the HackWeek19. As a follow-up to that project, we took this opportunity to work again
on the migration of OBS to Rails 6.

This is an important step in order to make sure that the Open Build Service project stays future-proof and reliable. Contributors benefit from an up-to-date framework with all the functionality they are used to. The users are delighted by an actively maintained foundation that keeps on receiving security updates
and improvements in the future.

The upgrade to a new major version should be processed carefully and with a good amount of attention.
Therefore, we decided to not only rely on our automated tests, we also deployed the upgrade in a production-like environment in order to make sure all the individual components keep on working smoothly together.

:clap: :clap: We will have it soonish in production!

## Safer Migrations

Every time a new migration gets introduced to our database, we ask ourselves: Is it safe to deploy and consequently run the migration at any time of the day?

Certain database migrations imply a downtime when running and this obviously affects our users. Therefore, we postpone the deployment to a better moment, normally to our maintainance window on Thursday mornings. This means that sometimes, we have to stop doing the daily deployments for a while.

In order to minimize the impact of this kind of situations, we have decided to start using the [strong_migrations gem](https://github.com/ankane/strong_migrations). Their own sentence explains everything:

"Strong Migrations detects potentially dangerous operations in migrations, prevents them from running by default, and provides instructions on safer ways to do what you want."

The addition of this gem will help us to detect unsafe migrations and to get closer to a Zero Downtime scenario.

## obs-tools and OpenQA

Our team maintains the [`obs-tools` repository](https://github.com/openSUSE/obs-tools). It contains some useful tools for our project.

One of the pending tasks in our TODO list was the dockerization of these tools. This simplifies the installation and creates a uniform setup in any machine.

The only prerequirement for the usage is the installation of `docker` and `docker-compose >= 1.18`. From now on, our hosts are running just those docker containers, instead of using crontab and timer to run the scripts.

## Closing

There have been a lot of improvements in these motivating weeks. Little steps to make OBS easier to use, contribute and maintain.

We hope you also find them useful and they inspire you to start [contributing to the OBS](https://github.com/openSUSE/open-build-service/blob/master/CONTRIBUTING.md).

Do you have any doubt or suggestion? Keep in touch:

- on GitHub, by opening an issue and / or commenting on an already opened issue.
- on IRC, by talking directly to us. We are in the channel #opensuse-buildservice on Freenode.

We will be looking forward to another sprint like this to keep crossing tasks from the list. :list:

