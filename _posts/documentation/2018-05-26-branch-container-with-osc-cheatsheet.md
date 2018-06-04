---
layout: post
title: Cheatsheet for branching containers with osc
category: documentation
---

Following [our workshop](https://events.opensuse.org/conference/oSC18/program/proposal/1786) at the great openSUSE Conference 2018, 
we would like to release a cheat sheet for building container images....


# Prepare

For selecting an source image you could use the links on [https://build.opensuse.org/image_templates](https://build.opensuse.org/image_templates)

```
export OBS_USERNAME=<YOUR_OPENSUSE_USERNAME>

export SRC_PRJ_NAME=<PRJ_TO_BRANCH_FROM>
# e.g. export SRC_PRJ_NAME=openSUSE:Templates:Images:42.3

export DST_PRJ_NAME=<YOUR_NEW_PROJECT>
# e.g. export DST_PRJ_NAME=home:$OBS_USERNAME:ContainerTest

# For docker native build
export SRC_CONTAINER_NAME=openSUSE-Leap-42.3-Container
export REPO_NAME=containers

# For docker building with kiwi
export SRC_CONTAINER_NAME=openSUSE-Leap-42.3-Container-kiwi
export REPO_NAME=images

export DST_CONTAINER_NAME=myFirstContainer
```

# Create a new Project

## Create temporary config file

```
cat <<EOF > tmp.txt
 <project name="$DST_PRJ_NAME">
   <title/>
   <description/>
   <person userid="$OBS_USERNAME" role="bugowner"/>
   <person userid="$OBS_USERNAME" role="maintainer"/>
   <repository name="$REPO_NAME">
     <path project="$SRC_PRJ_NAME" repository="$REPO_NAME"/>
     <arch>x86_64</arch>
   </repository>
 </project>
EOF
```

## Create new project based on temporary config file

```
osc meta prj $DST_PRJ_NAME -F tmp.txt
```

## Branch package to newly created project
```
osc branch $SRC_PRJ_NAME $SRC_CONTAINER_NAME $DST_PRJ_NAME $DST_CONTAINER_NAME
```

# Check the results
```
osc r -w $DST_PRJ_NAME $DST_CONTAINER_NAME
```

# CAVEATS

The example above works because of the inheritance of repositories.
This means that project meta data and project config are inherited from the ```$SRC_PRJ_NAME```.
You could check this data with the commands

```
osc meta prj $SRC_PRJ_NAME
# and
osc meta prjconf $SRC_PRJ_NAME
```

in the project meta data you should concentrate on the repository section:

```
<project name="openSUSE:Templates:Images:42.3">
 ...
  <repository name="images" rebuild="local">
    <path project="openSUSE:Templates:Images:42.3:Base" repository="images"/>
    <path project="openSUSE:Leap:42.3:Update" repository="standard"/>
    <arch>x86_64</arch>
  </repository>
  <repository name="containers" rebuild="local">
    <path project="openSUSE:Templates:Images:42.3:Base" repository="images"/>
    <arch>x86_64</arch>
  </repository>
 ...
</project>
```

the project config should have at least the following entries


```
%if "%_repository" == "images"
Type: kiwi
Repotype: none
Patterntype: none
%endif

%if "%_repository" == "containers"
Type: docker
Repotype: none
Patterntype: none
%endif
```
