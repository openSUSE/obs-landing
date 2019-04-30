---
layout: post
title: The Maintenance Pages Are Now Part of the Revamped User Interface
category: development
---

{% include partials/_revamping-ui-releases-history.md index="5" %}


Another Milestone for the Revamped User Interface, now for the Maintenance pages

We also reduced the number of open issues related with the revamping of the user interface.

Thank you for all the reports, sorry for the inconvenience, please keep them coming!

# What Was Done

Complete rewrite of patchinfo and maintenance incidents related actions, following the best practices and "rails way" (follow the CRUD actions naming conventions, break controllers in smaller controllers to stay adherent to REST, do validation on models and not on controllers, and so on).

Talking about patchinfos, we ported (and refreshed) the following views in Bootstrap:


# Patchinfo Show page

<img src="/images/posts/revamping-maintenance-ui/patchinfo_show.png" alt="Patchinfo show page" style="width: 80%;" class="center" />


# Patchinfo Edit and New pages


<img src="/images/posts/revamping-maintenance-ui/patchinfo_edit.png" alt="Patchinfo edit page" style="width: 80%;" class="center" />


# Maintained Projects

With Datatable and pagination, the responsiveness was improved specially when the list of maintained projects contains more than a few projects. Enable and Disable Maintenance have autocomplete support!

# Maintained Projects management:

<img src="/images/posts/revamping-maintenance-ui/maintained_projects.png" alt="Maintained Projects" style="width: 80%;" class="center" />


# Enable Maintenance for a Project:

<img src="/images/posts/revamping-maintenance-ui/enable_maintenance_for_project.gif" alt="Enable Maintenance for a Project" style="width: 80%;" class="center" />

# Disable Maintenance for a Project:

<img src="/images/posts/revamping-maintenance-ui/disable_maintenance_for_project.gif" alt="Disable Maintenance for a Project" style="width: 80%;" class="center" />

# Maintained Incidents Page

To improve the user experience on the Maintained Incidents page, we added datatable and remote pagination. Beside it, we improved the usability a bit, changing some columns in the incidents table, mainly:

* Merge release targets and build result columns
* Make release target project linkable
* Add request creation time next to request flags

The result can be appreciated here:

<img src="/images/posts/revamping-maintenance-ui/maintenance_incidents.png" alt="Maintenance incidents" style="width: 80%;" class="center" />

# And Much More

We addressed some issues we identified and gathered from your feedback. [Here’s a subset of what has been fixed and improved](https://github.com/openSUSE/open-build-service/issues?q=label%3Adeliverable_30_04_2019+is%3Aclosed).

{% include partials/_revamping-ui-how-to-give-us-feedback.md %}
