#!/bin/bash

git submodule init
git submodule update

pushd open-build-service-documentation/
git fetch
git checkout origin/master
popd

for doc in obs-best-practices obs-reference-guide obs-admin-guide; do
  pushd open-build-service-documentation/

  source ./DC-$doc || exit 1
  rm -rf build 
  daps html || exit 1
  daps epub || exit 1
  daps pdf || exit 1

  # update html
  rm -rf ../help/manuals/$doc || exit 1
  cp -aL build/$doc/html/$doc ../help/manuals/$doc || exit 1

  # update epub
  rm ../files/manuals/${doc}.epub || exit 1
  mv build/$doc/${doc}_en.epub ../files/manuals/${doc}.epub || exit 1

  # update pdf
  rm ../files/manuals/${doc}.pdf || exit 1
  mv build/$doc/${doc}_color_en.pdf ../files/manuals/${doc}.pdf || exit 1

  #cleanup
  rm -r build/$doc
  popd

  # add to git 
  git add help/manuals/$doc files/manuals/$doc.epub || exit 1
  git add help/manuals/$doc || exit 1
done


git add open-build-service-documentation || exit 1
git add open-build-service-documentation || exit 1
git add files/manuals/*.pdf || exit 1
git commit -m "Update books to current state" || exit 1

