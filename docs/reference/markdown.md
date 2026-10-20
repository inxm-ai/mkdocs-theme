---
eyebrow: Reference
---

# Markdown showcase

Every element the theme styles, on one page. Use it to check a build after changing CSS.

## Typography

Body text is Satoshi at 16px with a 1.8 line height, the same as inxm.ai. Headings use weight 400 and a slight negative tracking. **Strong text** is weight 500, never bold. *Emphasis* stays italic. Inline `code` uses Geist Mono on a raised surface. Keyboard input looks like <kbd>Cmd</kbd> + <kbd>K</kbd>. Here is a [link to the start page](../index.md) and an [external link](https://inxm.ai).

### Third level heading

Headings down to the third level appear in the table of contents.

#### Fourth level heading

##### Fifth level heading

## Lists

- Deterministic Plans across ERP, MES and PLM
- A full audit trail on every run
    - Nested items use the same hairline dash
    - And keep the rhythm of the parent list
- Built in Germany

1. Compile the process into a Plan
2. Execute it against the connected systems
3. Review the run in the Orchestrator UI

- [x] Theme scaffold
- [x] Search
- [ ] Versioning plugin support

## Definition list

Plan
:   A compiled, deterministic sequence of steps that Orchestrator executes.

Run
:   One execution of a Plan, with its inputs, outputs and audit trail.

## Blockquote

> Compiled AI finishes the work. It does not merely suggest what the work might be.

## Code

```python title="orchestrator.py"
from inxm import Orchestrator

client = Orchestrator(token=os.environ["INXM_TOKEN"])

def run(plan_id: str, **inputs) -> Run:
    """Execute a plan and wait for the result."""
    run = client.plans.execute(plan_id, conf=inputs)   # deterministic
    return run.wait(timeout=300)
```

```yaml
plan:
  id: invoice-approval
  steps:
    - fetch: erp.invoices.open
    - decide: policy.threshold >= 4855
    - notify: teams.channel("finance")
```

```bash
inxm plans run invoice-approval --conf amount=4855
```

Plain fenced block without a language:

```
$ mkdocs build
INFO - Documentation built in 0.42 seconds
```

## Diagrams

Click the diagram, or focus it and press Enter or Space, to open a larger view.
Its colours follow the theme toggle.

<div class="mermaid">
flowchart LR
    Plan --> Run --> Review
    style Plan fill:var(--bg-raised),stroke:var(--accent),color:var(--fg-strong)
</div>

## Tabs

=== "pip"

    ```bash
    pip install inxm-mkdocs-theme
    ```

=== "uv"

    ```bash
    uv pip install inxm-mkdocs-theme
    ```

=== "poetry"

    ```bash
    poetry add inxm-mkdocs-theme
    ```

## Admonitions

!!! note
    A note carries the info tone. Use it for context the reader can skip.

!!! tip "Custom title"
    Tips and hints use the success tone.

!!! warning
    Warnings use the warning tone. Read them before running commands.

!!! danger
    Danger and error use the error tone. These are the ones that cost money.

!!! example
    Examples and questions take the accent.

??? info "Collapsed details"
    This block is collapsed by default. Click the title to open it.

???+ note "Expanded details"
    This block starts open.

## Table

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `color_scheme` | string | `auto` | `auto`, `dark` or `light`. |
| `fontshare` | bool | `true` | Load Satoshi from Fontshare. |
| `nav_expand_depth` | int | `1` | Depth below which sections start collapsed. |
| `show_toc` | bool | `true` | Render the on-page table of contents. |

## Footnotes

Orchestrator is GDPR and EU AI Act compliant.[^1]

[^1]: See the compliance section on inxm.ai for the details and the audit reports.

## Horizontal rule

---

## Images

![A placeholder image](https://placehold.co/1200x400/161616/8a8a8a/png?text=Image)

## Components via attr_list

[Primary](#){ .btn .btn-primary }
[Secondary](#){ .btn .btn-secondary }
[Ghost](#){ .btn .btn-ghost }

`run-8c1e`{ .chip } `plan-4f2a`{ .chip } `v0.1.0`{ .chip }

- [Installation](../guide/installation.md) — install from PyPI or source.
- [Configuration](../guide/configuration.md) — every option with its default.
- [Customization](../guide/customization.md) — blocks, CSS, logo.
{ .cards }

Text with ==highlighted== words is not supported without `pymdownx.mark`, but <mark>HTML mark</mark> is styled.
