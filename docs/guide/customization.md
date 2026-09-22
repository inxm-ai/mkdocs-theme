# Customization

The theme follows the MkDocs convention of a `base.html` with named blocks. You can replace any block, add stylesheets, or restyle by redefining CSS custom properties.

## Extra CSS

The quickest change is a stylesheet on top of the theme. All colours and sizes are CSS custom properties on `:root`, so most restyling is a handful of lines.

```yaml title="mkdocs.yml"
extra_css:
  - stylesheets/brand.css
```

```css title="docs/stylesheets/brand.css"
:root {
  --accent: #2f7a3e;
  --accent-soft: rgba(47, 122, 62, 0.10);
  --accent-hair: rgba(47, 122, 62, 0.35);
  --measure: 80ch;
}
```

Light-mode overrides go under `:root[data-theme="light"]` and, for the automatic mode, under `@media (prefers-color-scheme: light) { :root:not([data-theme="dark"]) { … } }`.

## Overriding template blocks

Point `custom_dir` at a folder and add a `main.html` that extends the theme's base.

```yaml title="mkdocs.yml"
theme:
  name: inxm
  custom_dir: overrides
```

```html title="overrides/main.html"
{% extends "base.html" %}

{% block footer %}
<footer class="site-footer">
  <div class="site-footer__inner">
    <p>Internal documentation. Do not distribute.</p>
  </div>
</footer>
{% endblock %}
```

The full list of blocks is in the [template blocks reference](../reference/blocks.md).

## Adding a banner or announcement

Use the `extrahead` block for meta tags and the `header` block to wrap the default header with extra markup.

```html title="overrides/main.html"
{% extends "base.html" %}

{% block header %}
<div class="announce">Version 2.0 is out. <a href="{{ 'changelog/'|url }}">Read the changelog</a>.</div>
{{ super() }}
{% endblock %}
```

## Your own logo

```yaml title="mkdocs.yml"
theme:
  name: inxm
  logo: assets/logo.svg
  logo_text: false
```

The image is constrained to 28px in height. An SVG with `currentColor` fills inherits the header text colour, so it adapts to dark and light automatically.

## Cards, buttons, chips

With `attr_list` enabled, a few classes turn ordinary Markdown into design-system components.

```markdown
[Primary action](#){ .btn .btn-primary }
[Secondary](#){ .btn .btn-secondary }

`plan-4f2a`{ .chip }

- [Installation](../guide/installation.md) — set it up.
- [Configuration](../guide/configuration.md) — tune it.
{ .cards }
```

[Primary action](#){ .btn .btn-primary }
[Secondary](#){ .btn .btn-secondary }

`plan-4f2a`{ .chip }
