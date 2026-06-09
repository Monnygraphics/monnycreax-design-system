---
name: monnycreax-design
description: Use this skill to generate well-branded interfaces and assets for MonnyCreax, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

**Brand:** MonnyCreax — boutique brand-strategy consultancy. Tagline: "Strategy before design. Clarity in delivery."

**Product:** A role-aware client portal with three surfaces — Client, Admin, Staff — sharing one component library and one amber accent.

**Stack (production):** React 18 + Vite + Tailwind v3 + Supabase + Recharts + lucide-react.

**Type:** Syne (display, weight 800) + DM Sans (body). Both Google Fonts.

**Color anchors:** Amber `#F59E0B` (primary), Gray-950 `#030712` (sidebar), Gray-50 `#F9FAFB` (canvas), Emerald `#10B981`, Red `#EF4444`, Violet `#8B5CF6` (admin), Blue `#3B82F6` (staff).

**Tokens:** see `colors_and_type.css`. **UI Kits:** see `ui_kits/<role>/index.html`. **Login:** see `login.html`.

**Iconography:** lucide-react 0.383 only. No emoji. Logo is an 8-point amber star.

**Voice:** Confident, plainspoken, professional. Title Case for nav. Sentence case for descriptions. No exclamation points. Direct second-person to clients.
