#!/usr/bin/env sh

CMD=${@-serve}
docker run --rm -it --label=bootstrap-theme-jekyll --volume=$(pwd):/srv/jekyll \
  -p 4000:4000 -p 9001:9001 jekyll/jekyll jekyll $CMD
