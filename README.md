# MonnyCreax Design System

Bethwel Monny Service management system. This system powers the **MonnyCreax Client Portal** — a single, role-aware platform for client delivery, team communication, file management, invoicing, and business oversight. It replaces scattered email/WhatsApp threads with one controlled hub.

> **Strategy before design. Clarity in delivery.**

---

## Products & surfaces

The portal is one app with **three distinct role experiences**, each rendered from the same component library:

| Surface | Audience | Nav focus |
|---|---|---|
| **Client Portal** | Brand clients (e.g. Sarah, David) | Delivery: Dashboard · My Projects · Documents · Messages · Invoices · Support |
| **Admin Suite** | Founder (Amara) | Operations: Dashboard · Clients · CRM · Projects · Invoices · Reports · Team & Access · Settings |
| **Staff Workspace** | Designers, writers (Kwame, Ama) | Work delivery: Dashboard · Projects · Tasks · Messages · Files |

Three service packages drive the data model: **Rapid Clarity** ($500), **Complete Clarity** ($750), **Premium Clarity + Support** ($1,200).

---

## Sources

- **Codebase** — `monnycreax-portal/monnycreax/` (React 18 + Vite + Tailwind v3 + Supabase + Recharts + lucide-react). Single-page app, all role views in `src/App.jsx`.
- **Repo** — github.com/Monnygraphics/monnycreax-portal (private)
- **Brief** — Design Handoff v1.0 (pasted by founder; full text retained in chat)
- **Live demo** — monnygraphics.github.io/monnycreax-portal

The codebase is the source of truth: all tokens, components, screen layouts, and color decisions in this system are extracted from `App.jsx` and `index.css` rather than reinvented.

---

## Content fundamentals

**Voice — confident, plainspoken, professional.** Microcopy is short and declarative. The brand is a *consultant* speaking, not a SaaS product. There is a deliberate seriousness — this is a paid service relationship, not a casual app.

- **Pronouns** — "Your projects", "My Tasks". Direct second-person for the client; first-person when the user is the actor (My Projects, My Tasks).
- **Casing** — Title Case for nav and page titles ("CRM Pipeline", "Team & Access"). Sentence case for descriptions and helper text. UPPERCASE + wide tracking only for tiny eyebrow labels above form fields.
- **Tone words** — "Clarity", "Strategy", "Delivery", "Brief", "Discovery". Brand-strategy vocabulary, not generic productivity-speak.
- **Status language** — Single words: `active`, `pending`, `paid`, `overdue`, `resolved`, `at-risk`. Past tense for completion: "Brand Strategy milestone completed", "Discovery session completed successfully".
- **Numbers** — Money is always `$750` (no decimals on round figures), never "USD 750.00". Percentages are integer ("65%", "+22%").
- **Empty states** — Brief and matter-of-fact: "No tickets yet."
- **Subtitles under headings** — One factual line, no exclamation points: *"Business Overview"*, *"Your project overview"*, *"Project-tied messaging"*.
- **Emoji** — None. The brand is studio-formal. Iconography handles all visual language.
- **Tagline** — "Strategy before design. Clarity in delivery." Two five-word sentences, period-separated. Always together, never split.

Examples from the product (real strings):
- "The Visual Identity concepts are ready for your review. Please share feedback by Friday."
- "Pay Now" (CTA on pending invoice)
- "Request Access" (alternative to Sign In)
- "Open a Support Ticket" (form heading)

---

## Visual foundations

### Color
Amber (`#F59E0B`) is the entire brand. It is the active nav state, every primary CTA, every progress fill, every chart series 1, every "client" chat bubble. The neutrals are Tailwind's gray scale, used straight: gray-950 for the **sidebar only**, gray-50 for the app canvas, white for cards, gray-100 for input fields and table-row alternation. Three semantic colors round out the palette: **emerald** (paid / completed / success), **red** (overdue / error / destructive), **violet** (admin avatar tint, chart series 2). **Blue** is reserved for the staff role — staff chat bubbles, staff-related UI accents.

### Typography
Two-font stack: **Syne** (display) + **DM Sans** (body), both Google Fonts. Syne does all the heavy lifting — wordmark, page titles, card headings, big stat numbers — always at weight 800 ("Black"). DM Sans handles every inch of running text, table cells, nav items, and badges. Tracking is tight (-0.02em) on display sizes and wide (0.12em uppercase) on tiny eyebrow labels. There is no third font, no script, no monospace.

### Spacing & layout
4px base unit, used as a strict grid. Page padding is `24px` (`p-6`); card padding is `20–24px`. The sidebar is `220px` expanded / `62px` collapsed. Cards stack vertically with `24px` (`gap-6`) gutters; stat-card grids use `16px` (`gap-4`). Mobile rule: sidebar collapses, grids reflow `grid-cols-2` → single column. No max-width constraint on the main canvas — it fills the viewport.

### Backgrounds
The app canvas is a flat `#F9FAFB`. **No gradients in-app, no patterns, no textures, no illustrations.** The only place gradients appear is the **Login screen**: dual radial glows (amber 8% + violet 6%) over a gray-950 background, evoking a quiet stage light. Cards are pure white with a 1px gray-100 border and a barely-there shadow.

### Animation
Restrained. `transition-all duration-200` (Tailwind default) on hover/active. No bounces, no springs, no parallax, no entrance animations on page load. The exception is a single `animate-pulse` on the loading screen's logo and `animate-spin` on the loader icon during async operations. Modals and drawers slide in but with the same default ease.

### Hover & press
- **Buttons** — Amber primary darkens to `amber-500` on hover. No scale, no shadow change.
- **Cards / rows** — Background tints toward amber (`hover:bg-amber-50/40`) or border picks up amber (`hover:border-amber-300`). Subtle, never dramatic.
- **Sidebar nav** — Inactive items go from `text-gray-400` → `text-white` with `bg-white/5`. Active items have a solid amber pill behind them.
- **Destructive** — Red background on hover (`hover:bg-red-50` for trash buttons).
- **No press states** — no scale-down on click; the design relies on color change alone.

### Borders, shadows, radii
- **Cards** — `border: 1px solid #F3F4F6` + `box-shadow: 0 1px 3px rgba(0,0,0,0.06)` + `border-radius: 16px` (rounded-2xl).
- **Buttons & inputs** — `border-radius: 12px` (rounded-xl). Inputs sit on `bg-gray-50` with `border-gray-200`; focus ring is `ring-2 ring-amber-400`.
- **Avatars** — Always `border-radius: 9999px` (full circle). 5 tint schemes: amber/violet/blue/emerald/red, each `bg-{color}-100` + `text-{color}-700`.
- **Login card** — Heavier `rounded-3xl` + `shadow-2xl` for stage presence.
- **Notification dropdown / popovers** — `rounded-2xl` + `shadow-xl`.
- **No inner shadows.** No glassmorphism, no backdrop-blur in the product UI.

### Transparency & blur
The only transparent surfaces in the system are: (a) the sidebar's hover state (`bg-white/5`), (b) the active sidebar logout-hover (`bg-red-900/40`), (c) the table-row hover tint (`bg-amber-50/40`), and (d) the login background's radial glows. **No backdrop-blur.**

### Imagery
There are no photographs, no illustrations, no stock imagery anywhere in the product. The visual world is built entirely from: typography, the amber accent, lucide-react icons, and Recharts data viz. This is intentional — a strategy consultancy presents *clarity*, not decoration.

### Iconography
**lucide-react** (v0.383) exclusively. Line icons, consistent stroke weight. Sized at **17px** in nav, **14–16px** inline, **18–20px** in feature tiles. No icon fonts, no emoji, no custom SVG glyphs. Icons sit inside `bg-{color}-50` rounded-xl tiles when used as feature affordances on stat cards.

### Charts
Recharts. Three chart types in the system: AreaChart (revenue trend, with amber gradient fill + violet dashed series), grouped BarChart (collected vs. invoiced), horizontal BarChart (on-time % by package), and PieChart (package mix donut). Grid lines `#f3f4f6`, axis ticks `11px`. Charts always sit inside a white rounded-2xl card with a Syne heading above.

---

## Iconography

**Library:** `lucide-react` 0.383 — line-style, 1.5px stroke weight, 24×24 viewBox.

**Why lucide:** matches the spec from the brief and is the only icon set referenced in `src/App.jsx`. Loaded as a runtime CDN dependency for HTML mockups (we don't ship a static sprite — see Substitutions below).

**Sizing rules** (extracted from code):
- Sidebar nav — `size={17}`
- Inline buttons / row actions — `size={13}` to `size={15}`
- Stat-card feature tiles — `size={19}` inside a 40×40 rounded-xl tinted tile
- Login hero star — `size={26}` inside a 64×64 amber tile
- Notification dot — `size={2}` (literal pixel, not a lucide icon)

**Usage patterns:**
- **Feature tile** — `<div class="w-10 h-10 rounded-xl bg-amber-50"><Icon class="text-amber-600"/></div>`. Tile bg + icon color tracks the category color (amber/blue/emerald/violet/red).
- **Inline action** — `<button class="w-7 h-7 bg-gray-100 rounded-lg"><Icon size={12}/></button>` for table-row eye/edit buttons.
- **Status indicators** — `<CheckCircle class="text-emerald-500"/>` for completed, `<Clock class="text-amber-500"/>` for in-progress, empty circle div for pending.

**Common icons used in product:** `LayoutDashboard`, `Briefcase`, `FolderOpen`, `MessageSquare`, `CreditCard`, `HelpCircle`, `Users`, `Target`, `FileText`, `BarChart2`, `Shield`, `Settings`, `Bell`, `Star`, `CheckCircle`, `Clock`, `AlertCircle`, `Plus`, `Search`, `Send`, `Upload`, `Download`, `Edit`, `Trash2`, `Eye`, `MoreVertical`, `ChevronRight`, `ChevronDown`, `X`, `Menu`, `LogOut`, `DollarSign`, `Activity`, `Zap`.

**Substitution flag:** in static HTML mockups inside this design system, lucide icons are loaded via CDN ESM (`https://cdn.jsdelivr.net/npm/lucide-static@0.383.0/...`) or rendered as inline SVG at the same path. Production code uses `lucide-react`. **No substitution required** — same source, two delivery formats.

**Logo mark:** an 8-point amber star inside a `rounded-2xl` tile. The mark is the only piece of custom SVG iconography in the brand. See `assets/logo-mark.svg`.

**Emoji & unicode:** none anywhere in the product. Strict.

---

## Index

```
README.md                  ← this file
SKILL.md                   ← packaged skill manifest (cross-compatible w/ Agent Skills)
colors_and_type.css        ← all CSS variables + semantic type classes
assets/
  logo-mark.svg            ← 8-point amber star (favicon)
  logo-wordmark.svg        ← star + "MonnyCreax" Syne wordmark, dark
  logo-wordmark-light.svg  ← same, white text for dark backgrounds
preview/                   ← design-system cards (registered for the Design System tab)
  type-*.html              ← typography specimens
  color-*.html             ← palette cards
  spacing-*.html           ← radius / shadow / spacing tokens
  components-*.html        ← buttons, badges, inputs, avatars, cards, etc.
  brand-*.html             ← logo lockups
login.html                 ← demo + live mode login screen (entry point)
index.html                 ← design-system hub page; links into kits
ui_kits/
  README.md                ← architecture, coverage matrix
  _shared/
    Components.jsx         ← Icon, Avatar, Badge, Card, Button, ProgressBar,
                             MilestoneIcon, Stat, Sidebar, Header, PortalShell
    data.js                ← mock projects, clients, invoices, CRM, tickets, team
  client/index.html        ← Client role: Dashboard, Projects, Messages, Invoices, Support
  admin/index.html         ← Admin role: Dashboard, Clients, CRM, Invoices
  staff/index.html         ← Staff role: Dashboard, Tasks, Messages
```

Each `ui_kits/<surface>/index.html` is a click-thru recreation of that role's portal experience using small, reusable JSX components. Open any of them to see the system in working form.
