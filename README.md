The Open Build Service Landing page
===================================

This page is based on [jekyll](https://github.com/mojombo/jekyll) and [foundation](http://foundation.zurb.com/)
and is served via [github pages](http://pages.github.com/) to [openbuildservice.org](http://www.openbuildservice.org)

# Markdown

GitHub Pages are written in kramdown. A quickref for the syntax can
be found [here](https://kramdown.gettalong.org/quickref.html).

### Updating OBS documentation

The OBS documentation is stored in a [seperate repository](https://github.com/openSUSE/obs-docu)
and get's integrated into the OBS landing page via git submodules.

To update our documentation simply run the [update_documentation.sh]() script. This
updates the documentation sub-module, compiles it into html and creates a new commit
with the changes.
