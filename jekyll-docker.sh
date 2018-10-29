#!/usr/bin/env sh

usage () {
  cat <<-EOF

  Usage: $0 [command] [options]

  Commands:

  serve   - Build the demonstration site and serve it on port 9001, recompiling
            automatically as changes are detected.

  compile - Build the demonstration site.

  run     - Run an arbitrary jekyll command.

  clean   - Remove compiled files and temporary docker volumes.
EOF
}

run () {
  DOCKER=${DOCKER:-docker}
  if ! which $DOCKER > /dev/null; then
    echo Docker executable not found
    exit 1
  fi
  $DOCKER run --rm -it --name=bootstrap-theme-jekyll \
    -v $(pwd):/srv/jekyll -v bst-jekyll-bundle:/usr/local/bundle \
    -p 4000:4000 -p 9001:9001 jekyll/jekyll:3.7 jekyll $@
}

COMMAND="$1"
shift || COMMAND=usage

case "${COMMAND}" in
compile)
  run build
  ;;
serve)
  echo "Running server ..."
  run serve --incremental
  ;;
run)
  run $@
  ;;
clean)
  for VOLUME in bst-jekyll-bundle; do
    docker volume inspect $VOLUME &> /dev/null && docker volume rm $VOLUME
  done
  rm -Rf _gh_pages
  echo "Removed generated files and docker volumes"
  ;;
*)
  usage
esac

