---
layout: concept
title: Your Most Awesome Title
---
Scope
=====
Access control is a means to provide filesystem like access permissions on OBS object access. Currently, only basic access control is performed in OBS: once you have logged into OBS, you can read all data in an OBS system. Write access is controlled via specific users roles. With the Implementation of access control, this situation changes. All operations inside OBS on objects like files, meta data and other objects are then subject to access control checks that are coded in so called access control lists, ACLs. This implementation bases access control on the group, role and permission system of OBS 2.0.

Usecases, Functions
===================
Usecases
--------
The use cases section might look outdated in some parts. The initial proposal was to base ACL on attributes which correspond to an object which is protected. The current implementation is based on the group and role management of OBS.

Complete anonymous read access
-------------------------------
OBS server instance where we want people to have read access without creating a login

* Allow read access to whole build service anonymously
* It should be possible to configure this in any OBS instance without special global option 

Combined read/write Access
--------------------------
Use case A: Company setup where users should only see their own projects but not others
Use case B: Public server with access for closed source or prerelease software that should not be publically seen

* Coupling of read access to write access
* Every logged in user has read access only to those packages/projects that he has write access to.
* Question: Access setup per project - or full server?

There should be a global rule and than specific rules, based on the user roles in the specific projects. This is how the rest of permissions is implemented and we should not go away from this without reason.

Each project can than define additional roles (and therefor rights), for example for reading for specific users or groups.

So, we can for example disallow reading by default, but introduce a "reader" role for example. Similar to maintainer or downloader. If you add user or groups to projects or packages they will get the rights there. If you add it to master name spaces (eg openSUSE project) this is also valid for openSUSE:Tools project for example.

Of course in this specific case it is not enough to implement it in the api, it must be also support in the backend. or we just disallow to use source links, aggregates, kiwi builds and repository reusages in general on such instances.

Separate read/write access
--------------------------
Add separate read access that can be granted to projects and packages in addition to write access

Fine granular ACLs
------------------
Currently write access is to full project/package. Enhance it to make it fine granular to control:

* write access to packages
* write access to meta data (description, granting rights)
* rights to add (top-level) projects
* rights to delete projects
* rights to add new packages
* rights to delete packages

This could either be implemented as ACLs or with different roles and people would get roles for a project or for the whole build service (similar to wordpress that has Admin, Editor, Author, Subscriber)

Wordpress analogy with ACL
--------------------------
* download-only - end-user, enabled if released / pendant to publish - downloader
* anonymous view - browse service (could be default, if no other rights set), but no download - viewer
* read access - able to read (and branch ?) packages - subscriber
* write access - able to write to a prj/pkg - author
* write access to requests/meta - able to accept requests/change meta +add/delete pkg - editor/reviewer
* full access to prj/pkg - all of above + attributes - admin

Inheritance down the project path with revoke on per-subprj/package basis ? E.g. don't write to released/stable, but elsewhere inherit prj ACL.

> JanSimon: The Wordpress analogy makes sense to some extend. I have these rights and groups (of rights) in mind: 
> ![Rights and Roles](Rights_roles_obs_acl_draft1.png)

> JanSimon: I see an issue as soon as branching/linking is allowed - either we inherit some restrictions in the
> branched package, or a branch will then be a possibility to break the acl. Or a branch/link gets only "maintainer"
> role and inherits owner and acl from original pkg. Thus acl would be preserved and the user can work on the fixes
> and submit to original pkg. 

Group access
============
Currently we have only single users and give them access, it might make sense to define groups of users and give
those the same rights.

Project owner's view
--------------------
Some thoughts on what closed projects may need.

All project types restrict write access. The closed project type restricts read access to source only; the secret/confidential project types restrict read access to source and binaries.

Project is open
---------------
This is a typical open source project.

* Project and packages appear in lists
* Only named people/groups can update the project and source
* Source is freely available
* Repositories for resulting packages are available

Project is closed
-----------------
This kind of project protects the source but the binaries are fairly easily accessible.

* Project and packages appear in lists
* Only named people/groups see source from the project.
* Sources are ACLed
* Source doesn't leak out
* Binaries are available so leakage is not an issue.
* Repositories for resulting packages are available

Probably the most important additional requirement here is that the management of the source ACLs is simple
in order to avoid accidental leakage. Eg it should be very hard (impossible?) to add a package/sub-project
and accidentally make the source world-readable.

When packages from within a 'closed' project are copied elsewhere, they should default to retaining their
closed permissions.

Project is confidential
-----------------------
This kind of project is closed but visible. Only authorised users can access source and binaries.
Certain other projects can use the binaries.

* Project and packages appear in lists and build queues
* Only named people/groups see source from the project
* Sources are ACLed
* Binaries are ACLed
* Source and Binaries don't leak out
* Repositories for resulting packages are ACL protected
* Project can be used by specific projects for building
  same toplevel namespace or this may means that projects act like userids and have permissions.

Project is secret
-----------------
This kind of project is totally closed. For non-authorised users the only visibility should be
unidentifiable resource usage. Very similar to confidential.

* Only named people/groups see any information about the project.
* When the project is building it shows &le;private&gt; instead of any project data
* Source doesn't leak out
* Binaries don't leak out
* Protected repositories for resulting packages
* Project can't be used by other projects for building

Functions
----------

Architecture and implementation
===============================
ACL sits on top of two features introduced with OBS 2.0: Role and Permission Management as well as freely
definable user groups. ACL uses 4 specifically defined permissions ‘source_access’, ‘private_view’, ‘download_binaries’,
‘access’. Also, the preexisting roles “maintainer”, “reader” and “downloader” had been modified with specific
predifined permissions (which can at any time changed with the role and permission editor dynamically). And last
but not least 4 new flags ‘sourceaccess’, ‘binarydownload’, ‘privacy’ and ‘access’ had been added to the project
and package descriptions to signal that some information is only readable by specific users or groups, or that
information is hidden.


