---
eyebrow: INXM MkDocs Theme
---

# Documentation that reads like inxm.ai

A theme for [MkDocs](https://www.mkdocs.org/) built on the INXM design system. Dark canonical, light alternative. Hairlines instead of shadows. One accent colour. Satoshi for reading, Geist for the interface, Geist Mono for the technical bits.

[Install the theme](guide/installation.md){ .btn .btn-primary }
[See the Markdown showcase](reference/markdown.md){ .btn .btn-secondary }

## What you get

- **Three-column layout.** Sticky sidebar navigation, a reading column of about 72 characters, and an on-page table of contents with scroll spy.
- **Dark and light.** Follows the operating system by default. A header toggle lets readers override it, and the choice persists.
- **Search that stays out of the way.** Inline results under the header field, a dedicated search page, and `/` to focus the box.
- **Code that looks like code.** Geist Mono, a restrained token palette, copy buttons, optional file names and line numbers.
- **Zero-JavaScript baseline.** Navigation, content, and the table of contents render without scripts. JavaScript only adds polish.

## Quick start

```bash
pip install inxm-mkdocs-theme
```

```yaml title="mkdocs.yml"
site_name: My Project
theme:
  name: inxm
```

```bash
mkdocs serve
```

That is the whole setup. Everything else is optional and documented under [Configuration](guide/configuration.md).

## Sections

- [Installation](guide/installation.md) — install from PyPI or from source.
- [Configuration](guide/configuration.md) — every `theme:` option with its default.
- [Customization](guide/customization.md) — override blocks, add CSS, change the logo.
- [Markdown showcase](reference/markdown.md) — every supported element, rendered.
{ .cards }
