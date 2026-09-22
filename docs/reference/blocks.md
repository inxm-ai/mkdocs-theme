# Template blocks

`base.html` exposes these Jinja blocks. Override them from a `main.html` in your `custom_dir`, and call `{{ super() }}` to keep the default output.

| Block | Contents |
| --- | --- |
| `site_meta` | Charset, viewport, description, canonical, favicon, colour-scheme meta. |
| `htmltitle` | The `<title>` element. |
| `styles` | Scheme bootstrap script, font links, theme CSS, `extra_css`. |
| `extrahead` | Empty. Analytics snippets and extra meta go here. |
| `header` | The sticky header: brand, search, links, colour toggle. |
| `search_box` | The header search field. Emptied on the search page. |
| `sidebar` | Left navigation, including the mobile drawer scrim. |
| `content` | The page article. `main.html` fills it. |
| `doc_header` | Eyebrow above the page content. |
| `doc_footer` | Edit link and previous/next pager. |
| `toc` | Right-hand table of contents. |
| `footer` | Site footer. |
| `scripts` | `base_url`, search script, theme script, `extra_javascript`. |

## Template variables

The theme uses only variables from the [MkDocs theme guide](https://www.mkdocs.org/dev-guide/themes/): `config`, `nav`, `page`, `base_url`, `mkdocs_version`, `build_date_utc`. Theme options are read from `config.theme`, for example `config.theme.tagline`.

## Macros

`partials/nav.html` provides two macros you can reuse in overrides.

```jinja
{% import "partials/nav.html" as navmacros with context %}
{{ navmacros.render_nav(nav, 0) }}
{{ navmacros.render_toc(page.toc.items) }}
```

## Files in the package

```text
inxm_mkdocs_theme/
├── mkdocs_theme.yml     defaults for every theme option
├── base.html            page shell and blocks
├── main.html            article content, edit link, pager
├── 404.html             not-found page
├── search.html          dedicated search page
├── partials/nav.html    navigation + toc macros
├── partials/logo.html   inline INXM pill mark
├── css/inxm.css         the stylesheet
├── js/inxm.js           enhancements
├── fonts/               Geist, Geist Mono
└── favicon.svg
```
