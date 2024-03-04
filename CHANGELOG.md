# Changelog

## 2.0.0

### Navbar

- `btn btn-bcgold` added
- `form-control me-sm-2` updated to `form-control me-sm-2 w-auto` for automatic search bar sizing

### Button Group

- added new secondary color to the theme - `secondary:#6c757d` in _variable.scss

### Forms

- `control-label` changed to `form-label` in in _additions.scss

### Navs

- `lighten()` is no longer in use `tint-color()` used instead
- new variables added for pagination in _addtions.scss

### Indicators

- added two new color variables `light:#f8f9fa` and `dark: #212529` in theme-colors to show pills as well as jumbotron

### General Updates

- `theme-color()` function has been dropped, new function defined
- `hover-focus` mixin now dropped, new mixin initialized  
- webpack.config.js →  `file-loader` has been deprecated, `assest-modules` are recommended
    -  `Rule.generator.filename` property is used instead to specify the path output and the correct file name.

## 1.0.0

### Navbar content

- Updated Navbar naming conventions, updated `data-toggle` and `data-target` to `data-bs-toggle` and `data-bs-target`
- `nav-item` is no longer needed, only `nav-link` is required

### Navbar

- updated `mr-auto` to `me-auto` under ul
- (breaking) `sr-only ` deprecated, updated to `visually hidden`
- `form-inline` to `d-flex`

### Button Group

- `mr-2` changed to `me-2`
- (breaking) `btn-block` dropped, updated to `d-block w-100`
- `data-toggle` to `data-bs-toggle`

### Tables

- `thead-dark` updated to `table-dark`
- `form-group` updated to `mb-3`
- `form-control-file` updated to `form-control`
- `control-label` updated to `form-label`, as labels now required to have form-labels
- In example select > `form-control` updated to `form-select`
- added `has-validation` to `is-valid` and `is-invalid` classes
- Dropped `input-group-prepend` and `input-group-append`
    - deleted `input-group-prepend` div, span remains 
    - deleted `input-group-append` div, span remains 

### Forms

- `.form-group`, `.form-row`, or `.form-inline`  dropped, `mb-3` used instead.
- forms now require `form-label` → replaced `control-label` with `form-label`.
- `form-control` changed to `form-select`.
- `form-control-file` replaced with `form-control`.
- `is-valid` replaced with `has-validation` to keep up with naming conventions.
- `sr-only` changed to `visually-hidden`

### Navs

- updated `data-toggle` to `data-bs-toggle`
- background color of breadcrumbs have been removed by default in v5

### Indicators

- (breaking) updatated `data-dismiss` to `data-bs-dismiss` 
- `alert alert-dismissible alert-warning` changed to `alert alert-warning alert-dismissible fade show` for correct alignment.
- removed `&times;` use of background image, instead of needing to hardcode `&times;`
- (breaking) `close` changed to `btn-close`
- (breaking) `badge-pill` changed to `rounded-pill`
- (breaking) `badge badge-*` updated to `badge text-bg-*`
- `badge badge-primary` updated to `badge text-bg-*`

### Progress Bar

- Declarations now moved to the outer div to follow naming conventions

Version 5
```html
<div class="progress mb-2" role="progressbar" aria-label="Default striped example" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
      <div class="progress-bar progress-bar-striped" style="width: 10%"></div>
</div>
```

Version 4
```html
<div class="progress mb-2">
       <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
</div>

```
- `progress-multiple` updated to follow new conventions
- Contextual alternatives → `aria-labels` added / declarations moved to the outer div to follow naming conventions.
- width now specified within the div `progress-bar w-25` instead of a specified style tag, height is no longer specified 

### Containers

- `jumbotron` class has been removed, utility classes used to replicate a jumbotron `<div class="bg-light p-5 rounded">`
- outer div, now contains py-3 for spacing between jumbotron and list groups.
- added `aria-current="true”`  to specify active tags
- `aria-disabled="true” `to specify disabled tags
- updated `data-toggle` to `data-bs-toggle` on tablist

### Dialogs

- `title` changed to `data-bs-title`
- `data-*` is now changed to `data-bs-*`
- updated `close` to `btn-close`
- updates to the way Popover's are initialized.

Version 5
```javascript
<script>
   // enable popovers everywhere
   const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
   const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
</script>
```

Version 4
```javascript
<script>
   // enable popovers everywhere
   $(function () {
       $('[data-toggle="popover"]').popover()
   })
</script>
```

- Updates to the way Tooltips are Initialized
    - `data-*` has been updated to `data-bs-*`
```javascript
<script>
      // enable tooltips-bs everywhere
      var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
      })
</script>
```