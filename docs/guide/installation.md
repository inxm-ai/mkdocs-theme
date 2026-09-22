# Installation

The theme is a normal Python package. MkDocs finds it through the `mkdocs.themes` entry point, so there is nothing to copy into your project.

## Requirements

| Requirement | Version |
| --- | --- |
| Python | 3.9 or newer |
| MkDocs | 1.5 or newer |
| PyMdown Extensions | optional, recommended |

## From PyPI

```bash
pip install inxm-mkdocs-theme
```

Then point MkDocs at the theme:

```yaml title="mkdocs.yml"
theme:
  name: inxm
```

## From source

Clone the repository and install it in editable mode. Changes to the templates and CSS show up on the next reload of `mkdocs serve`.

```bash
git clone https://github.com/inxm-ai/mkdocs-theme.git
cd mkdocs-theme
python -m venv .venv && source .venv/bin/activate
pip install -e ".[dev]"
mkdocs serve
```

!!! tip "Use uv"
    With [uv](https://docs.astral.sh/uv/) the same setup is `uv venv && uv pip install -e ".[dev]"`.

## Recommended Markdown extensions

The theme styles the standard Python-Markdown extensions and the most common PyMdown ones. This is the configuration the demo site uses:

```yaml title="mkdocs.yml"
markdown_extensions:
  - toc:
      permalink: "#"
      toc_depth: 3
  - admonition
  - attr_list
  - md_in_html
  - def_list
  - footnotes
  - tables
  - pymdownx.details
  - pymdownx.highlight:
      anchor_linenums: true
  - pymdownx.inlinehilite
  - pymdownx.superfences
  - pymdownx.tabbed:
      alternate_style: true
  - pymdownx.tasklist
```

## Fonts and third parties

Geist and Geist Mono ship inside the package under the SIL Open Font License. Satoshi is loaded from the Fontshare CDN, exactly like inxm.ai does. If your documentation must not call third-party hosts, set `fontshare: false` and the theme falls back to Geist for everything.
