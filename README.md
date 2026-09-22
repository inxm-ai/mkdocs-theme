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
