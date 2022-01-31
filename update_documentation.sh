#!/usr/bin/env bash

if ! which daps2docker > /dev/null 2>&1; then
   echo "daps2docker is not installed. For OpenSUSE systems, get it via:"
   echo "  zypper ar https://download.opensuse.org/repositories/Documentation:/Tools/.... "
   echo "  zypper in daps2docker"
   echo "For other systems, refer to https://github.com/opensuse/daps2docker."
   exit 1
fi

git submodule init
git submodule update

pushd open-build-service-documentation/
git fetch
git checkout origin/master
popd

for doc in obs-admin-guide obs-user-guide; do
  pushd open-build-service-documentation/

  ROOTID=${doc%-guide}

# plain daps is broken on 15.2 in multiple places
  if false; then
    source ./DC-$doc || exit 1
    rm -rf build 
    daps --verbosity=3 html || exit 1
    daps --verbosity=3 epub || exit 1
    daps --verbosity=3 pdf || exit 1
    # update html
    rm -rf ../help/manuals/${doc} || exit 1
    cp -aL build/${doc}/html/$ROOTID ../help/manuals/${doc} || exit 1

    # update epub
    mv build/${doc}/${ROOTID}_en.epub ../files/manuals/${doc}.epub || exit 1

    # update pdf
    mv build/${doc}/${ROOTID}_color_en.pdf ../files/manuals/${doc}.pdf || exit 1

    #cleanup
    rm -r build/${doc}
  else
    # using docker container instead

    # urgs cleanup
    rm -rf /tmp/daps2docker-*

    daps2docker DC-$doc || exit 1  # html and pdf
    # update html
    rm -rf ../help/manuals/${doc} || exit 1
    cp -aL /tmp/daps2docker-*/$doc/html/book.$ROOTID ../help/manuals/${doc} || exit 1
    # update pdf
    mv /tmp/daps2docker-*/$doc/book.${ROOTID}_color_en.pdf ../files/manuals/${doc}.pdf || exit 1

    # update epub
    daps2docker DC-$doc epub || exit 1
    mv /tmp/daps2docker-*/$doc/book.${ROOTID}_en.epub ../files/manuals/${doc}.epub || exit 1

    #cleanup
    rm -rf /tmp/daps2docker-*
  fi

  popd

  # add to git 
  git add open-build-service-documentation help/manuals/$doc files/manuals/$doc.epub files/manuals/$doc.pdf || exit 1
done

git commit -m "Update books to current state" || exit 1
