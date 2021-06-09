* We now detect updates on a PR/MR. That retriggers the workflow.
* Until now we reported the latest build result of a package. we now report build results for each package + repository + architecture combination. We also report about multibuild flavours.
* The format of the workflows file is:
* We only support triggering workflows from the public instances of github.com and gitlab.com.

## Updates on a PR/MR
The workflow only triggered when you opened a new PR/MR. Now we trigger the workflow again when detecting new commits in an opened PR/MR.
OBS will rebuild your packages when new changes are detected in an opened PR/MR.

## Build results for repository and architecture and multibuilds
OBS will report back to your PR/MR the build results for each repository and architecture combination for a package.
It also supports multibuilds so it will show the build status of all the flavours of a package.
This will show up in a commit as a check with the build status reported like this:

	✓ OBS Workflow: games/ctris - openSUSE_Tumbleweed/x86_64
	
## SCM Instance support
Right now we only support react to events coming from github.com or gitlab.com.
