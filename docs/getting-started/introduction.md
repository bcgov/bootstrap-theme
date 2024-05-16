---
layout: simple
title: Getting Started
description: Installation and configuration instructions.
group: getting-started
redirect_from:
  - /docs/getting-started/
  - /docs/
toc: true
---

## Packages

For the moment, the theme package can be installed using something like this in your
`package.json`:

```json
"devDependencies": {
  "@bcgov/bootstrap-theme": "https://github.com/bcgov/bootstrap-theme/releases/download/v1.1.4/bcgov-bootstrap-theme-1.1.4.tgz",
  "bootstrap": "~4.3.1",
}
```

Note that `bootstrap` is only a peer dependency of the theme, but it is required in order
to build from SCSS. This allows customization of Bootstrap and theme variables and the use
of Bootstrap functions and mixins. The SCSS source can be included using the following
(paths may vary):

```scss
$bcgov-font-path: "../node_modules/@bcgov/bootstrap-theme/dist/fonts/";
@import "@bcgov/bootstrap-theme/dist/scss/bootstrap-theme";
```

SCSS variables and mixins defined by Bootstrap and the theme can be imported independent of
any display rules for use in isolated components:

```scss
@import "@bcgov/bootstrap-theme/dist/scss/common";
```

Generated CSS can be imported using the following (paths may vary):

```css
@import "@bcgov/bootstrap-theme/dist/css/bootstrap-theme.min.css";
```

## Javascript support

To use the Bootstrap Javascript extensions (for popups, mobile navbar support, etc), you will
need to include `jQuery`, `popper.js`, and Bootstrap itself. These can be loaded from a CDN,
installed as node modules, or distributed separately. For example:

```html
<script
  src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"
></script>
<script
  src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
  integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
  crossorigin="anonymous"
></script>
<script
  src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
  crossorigin="anonymous"
></script>
```

For Angular-based sites, [`ng-bootstrap`](https://ng-bootstrap.github.io/) is recommended
in place of these requirements.

## Sample Template

A simple page template follows. The `fill-height-md` or `fill-height-lg` classes can be
used to keep the page footer at the bottom of the screen on larger screen sizes. In this
case the `fill-body` class should be applied to any intermediate elements between `<body>`
and the page content.

```html
<!DOCTYPE html>
<html lang="en" class="fill-height-md">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <title>Hello World</title>

    <link href="/css/bootstrap-theme.min.css" rel="stylesheet" />
    <link
      rel="apple-touch-icon"
      href="/images/bcid-apple-touch-icon.png"
      sizes="180x180"
    />
    <link
      rel="icon"
      href="/images/bcid-favicon-32x32.png"
      sizes="32x32"
      type="image/png"
    />
    <link
      rel="icon"
      href="/images/bcid-favicon-16x16.png"
      sizes="16x16"
      type="image/png"
    />
    <link rel="mask-icon" href="/images/bcid-apple-icon.svg" color="#036" />
    <link rel="icon" href="/images/bcid-favicon-32x32.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#036" />
  </head>
  <body>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="https://www2.gov.bc.ca">
            <img
              class="img-fluid d-none d-md-block"
              src="/images/bcid-logo-rev-en.svg"
              width="181"
              height="44"
              alt="B.C. Government Logo"
            />
            <img
              class="img-fluid d-md-none"
              src="/images/bcid-symbol-rev.svg"
              width="64"
              height="44"
              alt="B.C. Government Logo"
            />
          </a>
          <div class="navbar-brand">
            Hello World
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/bootstrap-theme/">Home</a>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <main role="main">
      <div class="container">
        <h1>Hello World</h1>
      </div>
    </main>

    <footer class="footer">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <!-- Navbar content -->
        <div class="container">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content?id=79F93E018712422FBC8E674A67A70535"
                target="_blank"
                >Disclaimer</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content?id=9E890E16955E4FF4BF3B0E07B4722932"
                target="_blank"
                >Privacy</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content?id=E08E79740F9C41B9B0C484685CC5E412"
                target="_blank"
                >Accessibility</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content?id=1AAACC9C65754E4D89A118B875E0FBDA"
                target="_blank"
                >Copyright</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://www2.gov.bc.ca/gov/content?id=6A77C17D0CCB48F897F8598CCC019111"
                target="_blank"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </footer>

    <script
      src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"
    ></script>
    <script>
      // enable popovers everywhere
      $(function() {
        $('[data-toggle="popover"]').popover();
      });
    </script>
  </body>
</html>
```

Sample `manifest.json` web app metadata file:

```json
{
  "name": "B.C. Government",
  "short_name": "BC Gov.",
  "icons": [
    {
      "src": "/images/bcid-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/bcid-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "theme_color": "#036",
  "background_color": "#fff",
  "display": "standalone"
}
```
