The Open Build Service Landing page
===================================

This page is based on [Jekyll](https://github.com/mojombo/jekyll) and [Foundation](http://foundation.zurb.com/)
and is served via [Netlify](https://www.netlify.com/) to [openbuildservice.org](http://www.openbuildservice.org)

### Markdown

Pages are written in kramdown. A quick reference for the syntax can be found
[here](https://kramdown.gettalong.org/quickref.html).

### Local Preview

Run `docker-compose up` and access http://localhost:4000

### Deployments

Deployments are automated with a webhook, so whenever commits are pushed to
`master`, a new version will be published. The deployments are listed
[here](https://app.netlify.com/sites/openbuildservice/deploys).

### Add New Members to Team Page

Add the following lines at the end of the YAML front matter block:

```
- name: Example Name
  position: Frontend Developer
  email: example@suse.de
  github: examplegithub
  twitter: exampletwitter
  blog: https://examplename.com
  irc: exampleirc
  description: "Write a nice description of yourself.
  You can use **markdown** in ~~the~~ _description_.

  \nAnd add new paragraphs too."
```

You don't need to include all the fields, you can just remove the one you don't want to have.
If you use special characters you may need to surround your text by `"`.


### Updating OBS Documentation

The OBS documentation is stored in a [separate repository](https://github.com/openSUSE/obs-docu)
and is integrated into the OBS landing page via git submodules.

As soon as your changes get merged in _obs-docu_ (see how [here](https://github.com/openSUSE/obs-docu#update-documentation)), you have to move to _obs-landing_ repository and follow these steps to deploy them:

- Make sure _obs-landing_'s _master_ branch is up-to-date.
- Run the [update_documentation.sh](update_documentation.sh) script placed in the root directory which will:
  - update the documentation sub-module;
  - generate the documentation in html, pdf and epub formats;
  - create a commit with the message _"Update books to current state"_.
- Push to master the newly created commit.

Then, you'll see your changes in https://openbuildservice.org/help.

#### OBS Documentation Troubleshooting

##### Untracked Changes

If, after following the steps, your working tree is not clean and shows some untracked changes related to
`open-build-service-documentation`, simply run `git submodule init` and `git submodule update` manually.

##### Validation Errors When Running the Script

When running the script, you might get validation errors that you didn't get when you ran `daps` independenly.
This usually happens when the document contains references to online resources like this:

```
  <imagedata fileref="https://example.com/my-image.png"/>
```

Better add the resource to the corresponding directory inside `images/src/`. This is an example of how to reference it:

```
  <imagedata fileref="my-image.png"/>
```

# License

The code in this repository is licensed under a [MIT license](LICENSE).

The blog's content is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License.
<img alt="CC" src="/images/icons/cc.png" width="18px"/>
<img alt="BY" src="/images/icons/by.png" width="18px"/>
