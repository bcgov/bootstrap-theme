[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Retired](https://img.shields.io/badge/Lifecycle-Retired-d45500)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

> [!WARNING] This repository is Archived as of April 24, 2024. It has not been updated or maintained for several years. Anyone wishing to use Bootstrap for a B.C. govenerment application may wish to explore [this alternative](https://github.com/bcgov/bootstrap-v5-theme) that is based on a newer version of Bootstrap. Teams may also wish to familiarize themselves with the [B.C. Design System](https://developer.gov.bc.ca/docs/default/component/bc-developer-guide/design-system/about-the-design-system/).

# 🚀 Government of British Columbia Bootstrap v4 Theme

[Getting Started instructions](https://bcgov.github.io/bootstrap-theme/docs/getting-started/introduction/)

[Full documentation and demonstrations of the theme](https://bcgov.github.io/bootstrap-theme/)

A Bootstrap version 4.3 BC Government look-and-feel featuring:
- The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans)
  typeface
- Compatibility with pure Bootstrap markup
- A few additions:
  - `bcgold` colour classes for the old-style gold buttons (`btn-bcgold`, `bg-bcgold`, etc)
  - card classes to replace the old panel styles (`card-primary`, `card-success`, etc)
- Increased contrast for accessibility
- No Javascript extensions. Bootstrap itself, jQuery and popper.js are optional dependencies
- Source SCSS files are included in the distribution, allowing local customizations
- Supports NPM, Yarn and Bower package manager integration
- Includes sample HTML pages and common components like headers and footers for quick setup

The project is a successor to the previous
[Gov-2.0-Bootstrap-Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton)
and [mygovbc-bootstrap-theme](https://github.com/bcgov/mygovbc-bootstrap-theme).
We combined the best of both projects and leverage the latest
[Bootstrap](http://getbootstrap.com/) version.

## Theme Developers

If you find yourself wanting to enhance or fix the theme you'll be interested reading this
section on how to setup this source on your local device.

First, we do accept pull requests and will promptly merge fixes or enhancements if they
make sense for the rest of the relying applications.  Note, you should probably check out
our issues and/or raise an issue before doing the pull request.

### Tools Setup

You'll need the following tools installed on your device to begin working on the theme:

- The Git client and a GitHub account
- [NodeJS 6](https://nodejs.org/en/) or greater with NPM 3 or greater to build
- [Ruby](https://www.ruby-lang.org/en/downloads/) or
  [Docker](https://www.docker.com/products/docker-desktop) to build the Jekyll docs

### First Install

After your tools are in place, you should clone and install some packages:

```bash
git clone git@github.com:bcgov/bootstrap-theme.git
cd bootstrap-theme
npm install
gem install bundler
bundle install
```

### Building Dist

To build the styles, Javascript and other assets, use:

```bash
npm run build
```

Or for continous building:

```bash
npm run watch
```

### Building Docs

To build the docs (Jekyll), use:

```bash
npm run docs-compile
``` 

Or for continuous building and serving:

```bash
npm run docs-serve
```

### Developer Workflow

In two different shells, run `npm run watch` and `npm run docs-serve`.

If you prefer to build inside a Docker container, run `./jekyll-docker.sh serve`.
