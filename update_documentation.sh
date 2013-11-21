#!/bin/bash

git submodule init
git submodule update

for doc in obs-best-practices obs-reference-guide; do
  pushd open-build-service-documentation/

  source ./DC-$doc || exit 1
  rm -rf build 
  daps html  || exit 1

  # update html
  rm -rf ../help/manuals/$doc || exit 1
  cp -aL build/$doc/html//$doc ../help/manuals/$doc || exit 1
  rm -r build/$doc

  # update epub
#   rm ../files/manuals/${doc}.epub || exit 1
#   mv epub/${doc}.xml ../files/manuals/${doc}.epub || exit 1
  popd

  # add to git 
  #git add help/manuals/$doc files/manuals/$doc.epub || exit 1
  git add help/manuals/$doc || exit 1
done


git add open-build-service-documentation || exit 1
git commit -m "Update books to current state" || exit 1

