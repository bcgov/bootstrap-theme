#!/usr/bin/env sh

CMD=${@-serve --incremental}
docker run --rm -it --name=bootstrap-theme-jekyll \
  -v $(pwd):/srv/jekyll -v bst-jekyll-bundle:/usr/local/bundle \
  -p 4000:4000 -p 9001:9001 jekyll/jekyll jekyll $CMD
