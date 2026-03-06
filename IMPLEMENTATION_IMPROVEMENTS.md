# Front-End Implementation Plan — Marylebone Smile Clinic

Track progress by checking off items as you complete them. Each section maps to the brainstorm; file/component names are included where relevant.

---

## Phase 1: Foundation & Global Adjustments

### 1.1 Global layout & section height
- [ ] Reduce or remove `min-h-screen` on non-hero sections (Services, Patient Journey, Before/After, Team, Social Proof, Lead Form) so scroll length feels balanced on small devices.
- [ ] In `app/globals.css` or section components: use a smaller min-height (e.g. `min-h-0` or `min-h-[60vh]`) for content-heavy sections on mobile/tablet.
- [ ] Keep hero as full-viewport; consider `min-h-[80dvh]` or similar for short viewports so hero doesn’t dominate on landscape tablets.

**Files:** `app/page.tsx`, `components/services.tsx`, `components/patient-journey.tsx`, `components/before-after-gallery.tsx`, `components/team.tsx`, `components/social-proof.tsx`, `components/lead-form.tsx`, `components/footer.tsx`

### 1.2 Container & padding consistency
- [ ] Add `px-4` for very small viewports (< 375px) where `px-6` feels tight; use responsive padding e.g. `px-4 sm:px-6 lg:px-12` on main containers.
- [ ] Consider `xl:px-16` or similar for max-width containers on ultra-wide screens (e.g. 1600px+).
- [ ] Reduce section vertical padding on small screens (e.g. `py-16 md:py-24 lg:py-32`) where sections currently use `py-20`/`py-24`/`py-32`.

**Files:** All section components using `max-w-[1600px] px-6 lg:px-12`, `app/globals.css` if using CSS variables for spacing

### 1.3 Colour & contrast
- [ ] Audit text on `secondary`/muted backgrounds (cards, form) for WCAG contrast; adjust `muted-foreground` or card background if needed.
- [ ] Ensure `text-[9px]` and `text-[10px]` are not used for critical body text; reserve for labels/decorative text only.

**Files:** `app/globals.css`, component-level text classes

---

## Phase 2: Typography & touch targets

### 2.1 Minimum font sizes on mobile
- [ ] Bump label/caption minimum size on mobile: use `text-[11px] sm:text-xs` or `text-xs` instead of `text-[9px]`/`text-[10px]` where readability matters.
- [ ] Apply in: Hero labels, Services taglines/prices, Patient Journey step text, Before/After labels, Team credentials, Footer links, Form labels.
- [ ] Keep `clamp()` for headlines; verify line-height at smallest size (e.g. 1.05 for display, 1.15–1.2 for multi-line subheads).

**Files:** `components/hero.tsx`, `components/services.tsx`, `components/patient-journey.tsx`, `components/before-after-gallery.tsx`, `components/team.tsx`, `components/footer.tsx`, `components/lead-form.tsx`, `components/social-proof.tsx`

### 2.2 Touch targets (44×44px minimum)
- [ ] Audit all buttons, icon buttons, and clickable cards; ensure minimum 44×44px on touch (Services arrows already have `min-h-[44px] min-w-[44px]`).
- [ ] Before/After filter pills and “Inquire” links: add padding or min-height so tap area is at least 44px.
- [ ] Footer legal links and nav links: ensure line-height + padding meet 44px height or use larger hit area.
- [ ] Before/After thumbnails: consider `min-w-[72px] min-h-[72px]` or 80px on mobile instead of 64px for easier tapping.

**Files:** `components/header.tsx`, `components/services.tsx`, `components/before-after-gallery.tsx`, `components/footer.tsx`, `components/floating-cta.tsx`

---

## Phase 3: Header & navigation

### 3.1 Header responsiveness
- [ ] On very small viewports (< 375px): prevent logo + “Marylebone Smile Clinic” from overlapping hamburger; consider smaller logo or single-line “MSC” variant.
- [ ] Review `lg:pl-[150px]`: consider applying only from `xl` (1280px) if nav feels cramped at 1024px.
- [ ] Ensure `scroll-mt-20` (or equivalent) matches fixed header height (`h-20`) for all anchored sections so content isn’t hidden under nav.

**Files:** `components/header.tsx`, `app/globals.css` (section[id] scroll-mt), each section with `id`

### 3.2 Mobile menu
- [ ] Add an explicit “Close” control (e.g. X icon) at the top of the Sheet in addition to overlay click.
- [ ] Verify Sheet width `sm:w-[400px]` doesn’t overflow on narrow devices; consider `w-[min(100%,400px)]` or full width on xs.

**Files:** `components/header.tsx`, `components/ui/sheet.tsx` if overridden

---

## Phase 4: Hero

### 4.1 Hero layout & background
- [ ] Adjust hero min/max height for short viewports (e.g. `min-h-[80dvh]` or `min-h-screen` with `max-h-screen` on landscape) so CTA and scroll prompt stay visible.
- [ ] Verify hero background `object-position` (e.g. `clamp(50%, 70%, 80%)`) at 320px, 768px, 1920px; constrain or tweak so focal point stays correct.
- [ ] Decorative orbs: add `max-w-[500px]` (or similar) and consider `hidden sm:block` or scale-down on small screens to avoid layout oddities.

**Files:** `components/hero.tsx`

### 4.2 Hero CTAs
- [ ] Consider a secondary CTA (e.g. “Meet the experts” or “View treatments”) in addition to “Start a Free E-Consultation” for users who don’t want to commit immediately.
- [ ] Ensure “Explore Transformations” scroll indicator is visible on short viewports; move slightly higher if it sits below the fold.

**Files:** `components/hero.tsx`

---

## Phase 5: Patient journey

### 5.1 Layout & progress
- [ ] On mobile: reduce left padding for steps (e.g. `pl-8 sm:pl-12 lg:pl-52`) so step numbers don’t push content too far; consider smaller step number size on small screens.
- [ ] Consider hiding or simplifying the vertical progress bar on small viewports (e.g. `hidden lg:block`).
- [ ] Define tablet (768–1024px) layout: ensure single-column stack doesn’t leave a big gap; adjust `lg:col-span-5`/`lg:col-span-7` breakpoint if needed.

**Files:** `components/patient-journey.tsx`

### 5.2 Image collage
- [ ] On narrow screens, ensure the `translate-y-12` image in the right-hand collage doesn’t collide with the steps column when stacked; reduce translate or remove on mobile if needed.

**Files:** `components/patient-journey.tsx`

---

## Phase 6: Services carousel

### 6.1 Breakpoints & cards
- [ ] At `md` (768px): consider showing 1 slide instead of 2 so cards aren’t too narrow (`md:flex-[0_0_100%]` then `lg:flex-[0_0_33.333%]`).
- [ ] Ensure carousel arrows and pagination dots are clearly visible and swipe is discoverable on touch (optional: add a brief “Swipe” or arrow hint on first visit).

**Files:** `components/services.tsx`

### 6.2 Card content
- [ ] Ensure feature list and “Inquire” row don’t overflow on small cards; use `flex-wrap` or truncation where appropriate.
- [ ] Verify Service card minimum heights so content doesn’t look squashed on short viewports.

**Files:** `components/services.tsx`

---

## Phase 7: Before/After gallery

### 7.1 Filter & layout
- [ ] Mobile dropdown: add a bit more padding and a clearer selected state (e.g. checkmark or accent border).
- [ ] Ensure thumbnail strip doesn’t overflow on small screens; keep `max-[575px]:flex-wrap` and consider horizontal scroll as alternative if many cases.
- [ ] Define behavior for tablet (768–1024px): test grid `lg:col-span-3` / `lg:col-span-9` and adjust if thumbnails or main area feel too small.

**Files:** `components/before-after-gallery.tsx`

### 7.2 Before/After slider
- [ ] Consider horizontal slider on mobile (e.g. `orientation="horizontal"` below `md`) and vertical on desktop for easier thumb drag.
- [ ] Increase “Before”/“After” label size on small screens (e.g. `text-[9px] sm:text-[10px]` or one step up) so they remain readable.
- [ ] Ensure slider handle and drag area are at least 44px touch target on mobile.

**Files:** `components/before-after-gallery.tsx`, `components/before-after-slider.tsx`

---

## Phase 8: Team section

### 8.1 Mobile layout
- [ ] On very narrow (< 400px): consider stacking avatar above text instead of float to avoid awkward wrap beside the image.
- [ ] Ensure bio text doesn’t sit too tight under the floated image; add clear margin or max-width for readability.

**Files:** `components/team.tsx`

### 8.2 Trust bar
- [ ] On small screens, ensure “VOGUE / TATLER / GQ / FORBES” bar wraps or scrolls gracefully; verify spacing `gap-x-20 gap-y-10`.

**Files:** `components/team.tsx`

---

## Phase 9: Social proof (testimonials)

### 9.1 Carousel behavior
- [ ] Pause autoplay when user hovers or focuses the carousel container.
- [ ] Pause autoplay when user interacts (e.g. clicks prev/next or swipes); optionally resume after a delay.
- [ ] Ensure carousel controls (Prev/Next and dots) are keyboard-accessible and have visible focus styles.

**Files:** `components/social-proof.tsx`

### 9.2 Responsive columns
- [ ] At `xl`, 4 testimonial cards may be very wide; consider max-width on card content or 3 columns at `xl` (e.g. `xl:flex-[0_0_33.333%]`).

**Files:** `components/social-proof.tsx`

---

## Phase 10: Lead form

### 10.1 Layout & fields
- [ ] Step 1 (interest): on very narrow phones, consider single column for treatment options (`grid-cols-1` below 360px or similar).
- [ ] Ensure success state (“Expect the Extraordinary”) is responsive; reduce padding on mobile if needed (`p-8 md:p-16`).
- [ ] Optional: add a subtle success animation (e.g. confetti or icon motion) on submit success (front-end only).

**Files:** `components/lead-form.tsx`

### 10.2 Labels & inputs
- [ ] Form labels already have `max-[575px]:text-center`; ensure input placeholder and value don’t look odd when centered; verify touch target size for inputs.

**Files:** `components/lead-form.tsx`

---

## Phase 11: Floating CTA

### 11.1 Visibility by breakpoint
- [ ] Show Floating CTA on tablet: e.g. `md:flex lg:hidden` or a compact bar (e.g. slim pill) so tablet users get a sticky CTA; keep current `sm:hidden` behavior or replace with `md:flex sm:flex` and hide only on `lg` if desired.
- [ ] Ensure floating CTA doesn’t overlap footer or key content; add bottom offset or hide when contact section is in view (optional).

**Files:** `components/floating-cta.tsx`

### 11.2 Button & layout
- [ ] Verify `w-[calc(100%-3rem)] max-w-sm` works on all mobile widths; ensure button text doesn’t wrap awkwardly.
- [ ] Keep 44px minimum height for the CTA button.

**Files:** `components/floating-cta.tsx`

---

## Phase 12: Footer

### 12.1 Footer purpose & height
- [ ] Decide intent: full-screen “final CTA” vs compact footer. If compact: remove `min-h-screen`, use e.g. `py-16 lg:py-24` and center the content block instead of the whole viewport.
- [ ] If keeping full-screen, ensure content is vertically centered and doesn’t feel empty on large screens.

**Files:** `components/footer.tsx`

### 12.2 Responsive grid
- [ ] At 768px, `md:grid-cols-12` with 5+2+5 columns may feel narrow; consider stacking to 2 rows on tablet (brand+nav row, contact row) or 1 column on small tablet.
- [ ] Ensure “Navigation” and “The Clinic” blocks have comfortable spacing and tap targets on mobile.

**Files:** `components/footer.tsx`

---

## Phase 13: Accessibility & polish

### 13.1 Focus & keyboard
- [ ] Add “Skip to main content” link at top of page (visible on focus).
- [ ] Audit focus styles for nav links, buttons, form controls, and carousel controls; ensure `:focus-visible` ring is visible and on-brand.

**Files:** `app/layout.tsx`, `components/header.tsx`, `app/globals.css`, button/input components

### 13.2 Motion & reduced motion
- [ ] Respect `prefers-reduced-motion`: reduce or disable auto-play and decorative animations (e.g. hero stagger, scroll indicator bounce) when user prefers reduced motion.

**Files:** `app/globals.css`, `components/hero.tsx`, `components/social-proof.tsx`, `lib/animations.ts` (or component-level checks)

### 13.3 Images & assets
- [ ] Verify all decorative and content images have appropriate `alt` text; hero and before/after images are critical.
- [ ] Ensure Next.js Image `priority` and `sizes` are set for above-the-fold images (hero, first section).

**Files:** All components using `next/image`

---

## Phase 14: Ultra-wide & edge cases

### 14.1 Large viewports
- [ ] Hero background: consider `object-fit` and `object-position` or max width so key visual doesn’t over-stretch on 2560px+.
- [ ] Decorative orbs: already suggested max size; confirm they don’t dominate on ultra-wide.

**Files:** `components/hero.tsx`

### 14.2 Very small viewports
- [ ] Final pass at 320px width: no horizontal scroll, no overlapping elements, primary CTA always visible and tappable.

**Files:** All section and layout components

---

## Progress summary

| Phase | Description                    | Done | Total |
|-------|--------------------------------|------|-------|
| 1     | Foundation & global            | 0    | 9     |
| 2     | Typography & touch targets     | 0    | 8     |
| 3     | Header & navigation            | 0    | 5     |
| 4     | Hero                           | 0    | 6     |
| 5     | Patient journey                | 0    | 5     |
| 6     | Services carousel               | 0    | 5     |
| 7     | Before/After gallery            | 0    | 7     |
| 8     | Team                           | 0    | 3     |
| 9     | Social proof                    | 0    | 4     |
| 10    | Lead form                       | 0    | 5     |
| 11    | Floating CTA                    | 0    | 4     |
| 12    | Footer                          | 0    | 4     |
| 13    | Accessibility & polish          | 0    | 6     |
| 14    | Ultra-wide & edge cases         | 0    | 3     |
| **Total** |                               | **0** | **74** |

---

## Suggested order of implementation

1. **Phase 1** (foundation) and **Phase 2** (typography & touch) — improves baseline for every viewport.
2. **Phase 3** (header) and **Phase 4** (hero) — first impression and navigation.
3. **Phases 5–8** — main content sections in reading order.
4. **Phases 9–12** — testimonials, form, CTA, footer.
5. **Phases 13–14** — accessibility and edge cases.

You can work through phases in order or pick by priority (e.g. mobile first: 1, 2, 3, 4, 7, 10, 11, 12, 13).
