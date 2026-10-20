# Configuration

All options live under `theme:` in `mkdocs.yml`. Every key is optional; the values shown are the defaults.

```yaml title="mkdocs.yml"
theme:
  name: inxm
  color_scheme: auto          # auto | dark | light
  color_scheme_toggle: true
  fontshare: true
  mermaid: true
  logo: null                  # path relative to docs_dir
  logo_text: null             # defaults to site_name; false hides it
  tagline: Docs               # "// Docs" above the sidebar
  nav_links: []
  show_toc: true
  show_prev_next: true
  show_edit_link: true
  show_search: true
  nav_expand_depth: 1
  footer_text: null           # defaults to copyright
  footer_links: []
```

## Colour scheme

`color_scheme` accepts three values.

`auto`
:   Follow `prefers-color-scheme`. Readers can switch with the toggle in the header. The choice is stored in `localStorage` under the key `inxm-theme`.

`dark`
:   Always dark. The toggle is hidden.

`light`
:   Always light. The toggle is hidden.

## Mermaid diagrams

Mermaid support is enabled by default. The theme loads Mermaid 11 from jsDelivr
and renders diagrams using the active INXM colour tokens. Readers can click a diagram or focus it
and press Enter or Space to open a larger view. Close it with the Close button
or Escape.

Use a fenced `mermaid` block with MkDocs' standard Markdown renderer. With
extensions that replace code fences, such as `pymdownx.superfences`, use a
`<div class="mermaid">` element or configure the extension to emit that class.

The theme supplies all diagram CSS and JavaScript. Remove site-local Mermaid
assets and their `extra_css` / `extra_javascript` entries when migrating.
Set `theme.mermaid: false` for sites that must not load this external library.
Callout tints are included regardless of the Mermaid setting.

## Branding

`logo`
:   A path to an image inside `docs_dir`, for example `assets/logo.svg`. When it is unset, the INXM pill mark is rendered inline as SVG and follows the current colour scheme.

`logo_text`
:   Text next to the logo. Defaults to `site_name`. Set it to `false` to show the logo alone.

`tagline`
:   A short label rendered as an eyebrow above the sidebar navigation, prefixed with the `//` mark.

## Header links

`nav_links` renders plain links in the header. External URLs open in a new tab.

```yaml
theme:
  nav_links:
    - title: inxm.ai
      url: https://inxm.ai
    - title: Changelog
      url: changelog/
```

When `repo_url` is set at the top level of `mkdocs.yml`, a repository icon appears next to the links. GitHub URLs get the GitHub mark; other hosts show `repo_name`.

## Navigation

`nav_expand_depth`
:   Sections nested deeper than this value start collapsed. The section that contains the current page is always open. `0` collapses everything, `1` keeps the top level open.

`show_toc`
:   Renders the on-page table of contents on the right. It hides itself below 1180px and on pages with no headings.

`show_prev_next`
:   Renders previous and next links at the end of each page.

`show_edit_link`
:   Renders an "Edit this page" link when `edit_uri` is configured.

## Search

`show_search` controls the header search field. The field only appears when the `search` plugin is enabled, which it is by default. A dedicated page is served at `search.html` for browsers without JavaScript and for the `?q=` deep link.

## Footer

`footer_text` accepts HTML and replaces `copyright`. `footer_links` is a list of `title` and `url` pairs rendered on the right.

## Page front matter

Two front matter keys are read by the theme.

```markdown
---
eyebrow: Getting started
description: Shown in the meta description tag.
---
```

`eyebrow` overrides the label above the page title. Without it, the theme uses the parent section's title.
