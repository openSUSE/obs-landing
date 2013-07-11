#!/bin/bash

git submodule init
git submodule update

pushd open-build-service-documentation/

  for doc in obs-best-practices obs-reference-guide; do
    source ./ENV-$doc || exit 1
    rm -rf html epub
    make html epub || exit 1

    # update html
    rm -rf ../help/manuals/$doc || exit 1
    cp -aL html/$doc ../help/manuals/$doc || exit 1
    rm -r html/$doc

    # update epub
    rm ../files/manuals/${doc}.epub || exit 1
    mv epub/${doc}.xml ../files/manuals/${doc}.epub || exit 1

    # add to git 
    git add help/manuals/$doc files/manuals/$doc.epub || exit 1
  done

popd

git add open-build-service-documentation || exit 1
git commit -m "Update books to current state" || exit 1

