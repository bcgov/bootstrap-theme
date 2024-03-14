[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Lifecycle:Experimental](https://img.shields.io/badge/Lifecycle-Experimental-339999)](https://github.com/bcgov/repomountie/blob/master/doc/lifecycle-badges.md)

# 🚀 Government of British Columbia Bootstrap v5 Theme

[Demonstrations of the theme](https://anjanak13.github.io/bootstrap-theme/dist/index.html)

A Bootstrap version 5.3 BC Government look-and-feel featuring:

- The [BC Sans](https://www2.gov.bc.ca/gov/content/governments/services-for-government/policies-procedures/bc-visual-identity/bc-sans) typeface
- Compatibility with pure Bootstrap markup

The project is a successor to the previous
[Gov-4.0-Bootstrap-theme](https://github.com/bcgov/bootstrap-theme)
[Gov-2.0-Bootstrap-Skeleton](https://github.com/bcgov/Gov-2.0-Bootstrap-Skeleton)
and [mygovbc-bootstrap-theme](https://github.com/bcgov/mygovbc-bootstrap-theme).
We combined the best of all projects and leverage the latest
[Bootstrap](http://getbootstrap.com/) version.

## Direct Usage

- ### Direct Integration with Minified Files

    you can directly use the minified CSS and JS files in your project. The minified CSS file to link can be found via this [path](dist/css/bootstrap-theme.min.css):

    `dist/css/bootstrap-theme.min.css`

    To ensure dropdowns, tooltips, and popovers function properly, you can import the minified JS file into your project. which can be found via this [path](dist/js/bootstrap-theme.min.js):

    `dist/js/bootstrap-theme.min.js`

    These files can be added to your project's `<head>` section:

    ```html
    <head>
    ...
        <script defer="defer" src="js/bootstrap-theme.min.js"></script>
        <link href="css/bootstrap-theme.min.css" rel="stylesheet">
    </head>
    ```

- ### SCSS To Modify Variables/Themes

    If you find yourself wanting to enhance or fix the theme you'll be interested in reading this section on how to setup this source on your local device.

    - #### Tool Setup

        You'll need the following tools installed on your device to begin working on the theme:
        
        [NodeJS 20 LTS](https://nodejs.org/en/) or greater with NPM 10 or greater to build

    - #### First Install

        After your tools are in place, you should install some packages. In the working directory:

        ```bash
        npm install
        ```

    - #### Building Dist

        To build the styles, JavaScript and other assets, use:

        ```bash
        npm run build
        ```    

        Or for continuous building and real-time style updates:

        ```bash
        npm start
        ```        

- ### Migration Guide

    If you find yourself needing to migrate from Version 4 to Version 5, you will find the [CHANGELOG](CHANGELOG.md) useful.

    It outlines the majority of classes and changes needed for migration, allowing you to easily refer to and perform search and replace where necessary.

    If you need to add or modify utilities, you can consult the official [bootstrap migration guide](https://getbootstrap.com/docs/5.3/migration/) for a comprehensive list of changes. This guide includes updated class names and deprecated ones for your reference.

## Extending the Theme

If you would like to enhance or fix the theme you can refer to initial setup sequence and simply run the following commands:

To build the styles, JavaScript and other assets, use:

```bash
npm run build
```    

Or for continuous building and real-time style updates, use:

```bash
npm start
```     