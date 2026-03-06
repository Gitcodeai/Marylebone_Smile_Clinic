# Implementation Plan: Navbar, Hero, Before/After, and Metadata

Track progress by checking off items as you complete them.

---

## Part 1: Navbar and Hero Alignment

**Goal:** Logo and "The Craft of..." heading share the same left vertical axis on all screen sizes.

### Checklist (Part 1)

- [x] Add inner container to header with `max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20`
- [x] Remove `lg:pl-[150px]` and any absolute positioning from logo
- [x] Update hero inner div to use same `max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20`
- [x] Verify logo and "The Craft of..." align on mobile (320px, 375px)
- [x] Verify alignment on tablet (768px) and desktop (1024px, 1440px)

**Files:** [components/header.tsx](components/header.tsx), [components/hero.tsx](components/hero.tsx)

---

## Part 2: Before/After Case Selection Restyling

**Goal:** Restyle case selection triggers (Case 1, Case 2, etc.) without changing functional logic.

### Checklist (Part 2)

- [x] Replace square aspect with wider rectangle (`aspect-[3/1]` or similar)
- [x] Change layout to vertical stack (`flex flex-col gap-3`)
- [x] Add case label mapping: index 0 → "Full mouth makeover", index 1 → "Case 2"
- [x] Apply quiet luxury active/inactive/hover styles
- [x] Position vertical stack left of main image; verify responsive behavior on mobile
- [x] Ensure filter logic (categories) remains unchanged

**Files:** [components/before-after-gallery.tsx](components/before-after-gallery.tsx)

---

## Part 3: Metadata and Social Preview

**Goal:** Add preview image and complete robust metadata including social media.

### Checklist (Part 3)

- [ ] Add or confirm `smile-clinic.png` (or `.jpg`) exists in `public/` (1200×630 recommended for OG)
- [x] Set `metadataBase` for absolute URLs
- [x] Update `openGraph` with full fields and smile-clinic image
- [x] Add `twitter` card with summary_large_image and image
- [x] Add `robots` if desired
- [ ] Verify preview in social debuggers (Facebook, Twitter, LinkedIn)

**Files:** [app/layout.tsx](app/layout.tsx)

**Note:** Place your website snapshot at `public/smile-clinic.png` (1200×630px) for social previews. If the file is missing, add it to enable rich previews when sharing the site.

---

## File Summary

| File | Changes |
|------|---------|
| [components/header.tsx](components/header.tsx) | Add inner container, remove fixed offsets |
| [components/hero.tsx](components/hero.tsx) | Align container padding and max-width |
| [components/before-after-gallery.tsx](components/before-after-gallery.tsx) | Restyle case triggers, vertical stack, rename labels |
| [app/layout.tsx](app/layout.tsx) | Robust metadata, smile-clinic preview image |

---

## Suggested Order

1. Part 1 (Navbar + Hero) — establishes layout foundation
2. Part 2 (Before/After) — isolated UI change
3. Part 3 (Metadata) — independent, can be done in parallel
