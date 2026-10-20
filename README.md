# INXM MkDocs theme

An [MkDocs](https://www.mkdocs.org/) theme in the [INXM](https://inxm.ai) design system.
Dark canonical, light alternative. Hairlines instead of shadows. One orange accent.
Satoshi for reading, Geist for the interface, Geist Mono for technical content.

## Install

```bash
pip install inxm-mkdocs-theme
```

```yaml
# mkdocs.yml
site_name: My Project
theme:
  name: inxm
```

## Options

All keys are optional. Defaults shown.

```yaml
theme:
  name: inxm
  color_scheme: auto          # auto | dark | light
  color_scheme_toggle: true
  fontshare: true             # load Satoshi from Fontshare; false = Geist only, no third parties
  mermaid: false              # themed, expandable diagrams; loads Mermaid 11 from jsDelivr
  logo: null                  # path in docs_dir; null renders the INXM pill inline
  logo_text: null             # defaults to site_name; false hides it
  tagline: Docs               # "// Docs" above the sidebar nav
  nav_links: []               # [{title, url}]
  show_toc: true
  show_prev_next: true
  show_edit_link: true
  show_search: true
  nav_expand_depth: 1
  footer_text: null           # HTML; defaults to `copyright`
  footer_links: []            # [{title, url}]
```

## Diagrams and callouts

Callout colours are included in the theme. To enable shared Mermaid rendering,
set `theme.mermaid: true` and use fenced `mermaid` blocks or `<div class="mermaid">`
elements. Diagrams use the active theme's colour tokens and can be opened with
a click, Enter, or Space. No per-site Mermaid CSS or JavaScript is needed;
remove any existing Mermaid entries from `extra_css` and `extra_javascript`
to avoid loading the renderer twice.

## Develop

```bash
uv venv && source .venv/bin/activate
uv pip install -e ".[dev]"
mkdocs serve --watch-theme
```

The repository's `docs/` folder is the theme's own documentation and doubles as the visual test page
(`reference/markdown.md` renders every supported element).

## Layout

```
inxm_mkdocs_theme/
├── mkdocs_theme.yml     defaults for every theme option
├── base.html            page shell and Jinja blocks
├── main.html            article, edit link, prev/next
├── 404.html
├── search.html          dedicated search page
├── partials/            nav + toc macros, inline logo
├── css/inxm.css
├── js/inxm.js           theme toggle, drawer, scroll spy, copy buttons
└── fonts/               Geist, Geist Mono (OFL)
```

## License

Apache-2.0. Geist and Geist Mono are distributed under the SIL Open Font License 1.1.
Satoshi is served by Fontshare under its own license and is not redistributed here.
