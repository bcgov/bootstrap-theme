[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# 🚀 Government of British Columbia Bootstrap v5 Theme

[Demonstrations of the theme](https://anjanak13.github.io/bootstrap-theme/dist/index.html)


## For New Developers

If you find yourself wanting to use the theme in your project outright, you can use the minified CSS file as you would like. You can find the minified CSS file to link to your own project via this path:

`dist/css/bootstrap-theme.min.css`

To ensure certain functions such as dropdowns, tooltips as well as popovers  work you will also have to import the minified JS file onto your project. You can find the minified JS file to link to your own project via this path:

`dist/js/bootstrap-theme.min.js`

## Theme Developers

If you find yourself wanting to enhance or fix the theme you'll be interested reading this
section on how to setup this source on your local device.

### Tools Setup

You'll need the following tools installed on your device to begin working on the theme:

- [NodeJS 20 LTS](https://nodejs.org/en/) or greater with NPM 10 or greater to build

### First Install

After your tools are in place, you should install some packages. In the working directory:

```bash
npm install
```

### Building Dist

To build the styles, Javascript and other assets, use:

```bash
npm run build
```

Or for continous building:

```bash
npm start
```

### ChangeLog

To see a list of changes made during the migration refer to the [CHANGELOG](CHANGELOG.md)

## Exsisting Project Migration

If you find your self needing to migrate from Version 4 to Version 5, you will find the [CHANGELOG](CHANGELOG.md) useful. This depicts almost all of the classes and changes required for the migration from version 4 to version 5.

If you need to add or change utilities you can refer to the official [bootstrap migration](https://getbootstrap.com/docs/5.3/migration/) guide for a complete list of changes as well as a complete list of class names that have been changed or depreated. 