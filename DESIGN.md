# Design

## Theme

Dual mode: light default, dark via prefers-color-scheme.

**Light mode mood:** A well-organized developer workspace — white desk, blue screen glow, everything in its place.
**Dark mode mood:** Deep focus at midnight — the knowledge base illuminated in cool blue against darkness.

## Color

**Strategy:** Committed — the blue carries 30-40% of brand identity across both modes. Neutral surfaces stay pure (white/near-black) so the blue reads as deliberate, not decorative.

### Light Mode

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(1.000 0 0)` | Page background — pure white |
| `--surface` | `oklch(0.980 0.001 260)` | Card / panel background — faint blue tint |
| `--surface-hover` | `oklch(0.965 0.002 260)` | Card hover state |
| `--ink` | `oklch(0.145 0.005 260)` | Body text — near-black with blue undertone |
| `--ink-heading` | `oklch(0.115 0.008 260)` | Headings — deeper than body |
| `--primary` | `oklch(0.450 0.140 240)` | Primary brand — deep saturated blue |
| `--primary-hover` | `oklch(0.390 0.135 240)` | Primary hover — darker blue |
| `--primary-soft` | `oklch(0.940 0.030 240)` | Light blue tint for badges, tags |
| `--accent` | `oklch(0.650 0.165 170)` | Accent — teal-cyan for links, highlights |
| `--accent-soft` | `oklch(0.945 0.025 170)` | Light accent tint |
| `--muted` | `oklch(0.505 0.012 260)` | Secondary text (contrast 5.8:1 vs white) |
| `--border` | `oklch(0.900 0.005 260)` | Default border |
| `--border-strong` | `oklch(0.820 0.008 260)` | Emphasized border |

### Dark Mode

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(0.095 0.004 260)` | Page background — near-black with blue whisper |
| `--surface` | `oklch(0.140 0.006 260)` | Card / panel |
| `--surface-hover` | `oklch(0.175 0.008 260)` | Card hover |
| `--ink` | `oklch(0.900 0.005 260)` | Body text |
| `--ink-heading` | `oklch(0.960 0.003 260)` | Headings — near-white |
| `--primary` | `oklch(0.620 0.165 240)` | Primary — lighter blue for dark bg |
| `--primary-hover` | `oklch(0.690 0.175 240)` | Primary hover — brighter |
| `--primary-soft` | `oklch(0.180 0.035 240)` | Dark blue tint |
| `--accent` | `oklch(0.720 0.140 170)` | Accent — lighter teal |
| `--accent-soft` | `oklch(0.170 0.025 170)` | Dark accent tint |
| `--muted` | `oklch(0.580 0.012 260)` | Secondary text (contrast 5.2:1 vs dark bg) |
| `--border` | `oklch(0.220 0.008 260)` | Default border |
| `--border-strong` | `oklch(0.300 0.010 260)` | Emphasized border |

### Semantic

| Token | Light | Dark | Usage |
|---|---|---|---|
| `--text-on-primary` | `oklch(0.985 0 0)` | `oklch(0.985 0 0)` | White text on blue fills (HK effect: saturated blue demands white) |
| `--success` | `oklch(0.520 0.140 145)` | `oklch(0.620 0.150 145)` | Success states |
| `--warning` | `oklch(0.700 0.155 80)` | `oklch(0.750 0.140 80)` | Warning states |
| `--danger` | `oklch(0.550 0.180 25)` | `oklch(0.650 0.170 25)` | Error states |

## Typography

### Font stacks

| Role | Font | Fallback | Rationale |
|---|---|---|---|
| Display / Headings (EN) | **Outfit** | system-ui, sans-serif | Geometric with personality; wide apertures read well at display sizes. Not in reflex-reject. |
| Body (EN) | **Outfit** | system-ui, sans-serif | Single-family commitment; weight contrast (800 → 400) provides hierarchy |
| Body (ZH) | system-ui | "PingFang SC", "Microsoft YaHei", sans-serif | Native system Chinese fonts for optimal rendering |
| Code | **Geist Mono** | ui-monospace, monospace | Clean developer-facing monospace; pairs with Outfit's geometry |

### Scale

Fluid modular scale using `clamp()`. Ratio ~1.35.

| Level | Size | Weight | Line-height | Usage |
|---|---|---|---|---|
| Display | clamp(2.5rem, 5vw, 4rem) | 800 | 1.1 | Hero headlines |
| H1 | clamp(2rem, 3.5vw, 3rem) | 750 | 1.15 | Page titles |
| H2 | clamp(1.5rem, 2.5vw, 2rem) | 700 | 1.2 | Section headings |
| H3 | clamp(1.15rem, 1.5vw, 1.35rem) | 650 | 1.3 | Card titles |
| Body | 1rem (16px) | 400 | 1.65 | Paragraph text |
| Body-sm | 0.875rem (14px) | 400 | 1.5 | Captions, metadata |
| Label | 0.75rem (12px) | 550 | 1.4 | Badges, tags, tiny labels |

Letter-spacing: Display -0.025em, H1 -0.02em, H2 -0.015em, Body 0.

## Spacing

Base unit: 4px. Scale: 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24 (4px–96px).

Section vertical padding: `clamp(4rem, 8vw, 7rem)` — generous breathing room.
Content max-width: 1200px.
Card internal padding: 24px–32px.

## Layout

- Max content width: 1200px (centered, `margin: 0 auto`)
- No fixed sidebar — single-column flow with full-width section breaks
- Cards: use `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` for responsive grids without breakpoints
- Hero: full viewport width, content constrained
- Feature sections: alternating layout rhythm (full-bleed bg → constrained content)

## Border & Radius

| Element | Radius | Border |
|---|---|---|
| Buttons | 10px | none |
| Cards | 14px | 1px solid var(--border) |
| Badges / Pills | 999px (full) | none |
| Input fields | 10px | 1px solid var(--border) |
| Code blocks | 8px | 1px solid var(--border) |

## Shadows

Light mode only (dark mode uses surface elevation via lightness).

| Level | Value |
|---|---|
| sm | `0 1px 2px oklch(0 0 0 / 0.04)` |
| md | `0 4px 12px oklch(0 0 0 / 0.06)` |
| lg | `0 8px 30px oklch(0 0 0 / 0.08)` |
| glow | `0 0 20px oklch(0.480 0.140 240 / 0.15)` (primary glow) |

## Motion

| Animation | Duration | Easing | Usage |
|---|---|---|---|
| Fade-in-up | 500ms | cubic-bezier(0.16, 1, 0.3, 1) | Section reveals on scroll |
| Scale-in | 350ms | cubic-bezier(0.16, 1, 0.3, 1) | Card hover, button press |
| Stagger children | 80ms delay | — | Lists, grid items |
| Slide-in | 400ms | cubic-bezier(0.16, 1, 0.3, 1) | Mobile nav, panels |

Reduced motion: `@media (prefers-reduced-motion: reduce)` → all transitions instant, no transform animations.

## Components

### Buttons

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| Primary (filled) | `var(--primary)` | `var(--text-on-primary)` | none | Main CTA |
| Secondary (outline) | transparent | `var(--primary)` | 1.5px solid var(--primary) | Secondary actions |
| Ghost | transparent | `var(--ink)` | none | Tertiary, nav |

All buttons: `font-weight: 600`, `border-radius: 10px`, `padding: 10px 20px` (sm) / `14px 28px` (md) / `16px 32px` (lg).
Hover: primary darkens, secondary fills, ghost tints surface.

### Cards

- Background: `var(--surface)`, border: `1px solid var(--border)`, radius: 14px
- Hover: border → `var(--primary)` at 30% opacity, subtle lift (`translateY(-2px)`)
- No nested cards

### Badges / Pills

- Filled: `var(--primary-soft)` bg, `var(--primary)` text, full radius
- Used for: version tags, tech labels, status indicators

### Code blocks

- Background: `var(--surface)`, border: `1px solid var(--border)`, radius: 8px
- Font: Geist Mono, 14px
- Inline code: `var(--primary-soft)` bg, 4px horizontal padding
