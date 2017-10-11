# 🚀 B.C. Government Bootstrap v4 Theme

Simply put, a Bootstrap v4 B.C. Government Look-and-Feel featuring:
- 99% pure bootstrap, i.e., no custom classes
- NPM, Yarn and Bower package manager integration
- Sample HTML pages and common components like header and footers for rapid start.

The project is a successor to the previous [Gov-2.0-Bootstrap-Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton) 
and [mygovbc-bootstrap-theme](https://github.com/bcgov/mygovbc-bootstrap-theme).  We combined the best of both projects 
and leverage the latest [Bootstrap v4-beta](http://getbootstrap.com/).

## Theme Developers

If you find yourself wanting to enhance or fix the theme you'll be interested reading this section on how to setup this 
source on your local device.

First, we do accept pull requests and will promptly merge if they a fix or enhancement if there make sense for the rest
of the relying applications.  Note, you should probably check out our issues and/or raise an issue before doing the pull
request.

### Tools Setup

You'll need the following tools installed one your device to begin working on the theme:

- [NodeJS 6](https://nodejs.org/en/) or greater with NPM 3 or greater to build
- [Ruby](https://www.ruby-lang.org/en/downloads/) to build the Jekyl docs
- And obviously Git client and GitHub account

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

