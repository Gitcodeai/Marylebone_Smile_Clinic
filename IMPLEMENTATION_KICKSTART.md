# Marylebone Smile Clinic Landing Page - Implementation Kickstart Guide

**Date**: February 27, 2026  
**Status**: Ready for Development Phase  
**Target Launch**: Production-ready prototype  

---

## 1. EXECUTIVE SUMMARY

This document serves as the definitive specification for the Marylebone Smile Clinic landing page—a **quiet luxury dental clinic website** designed to capture high-value leads and showcase premium cosmetic dentistry services. The site will be a **fully static frontend prototype** with no backend/database dependencies, built on **Next.js 16**, **Tailwind CSS**, and **shadcn/ui**, with animations powered by **Framer Motion**.

**Key Deliverables:**
✅ Responsive single-page landing with quiet luxury aesthetic
✅ **Parallax Before/After transformation** with treatment filtering
✅ **Concierge-style** lead capture (multi-step "Smile Assessment")
✅ **Staggered entry animations** for a choreographed "reveal"
✅ Mobile-optimized floating CTA + custom interactive cursors
✅ WCAG AA accessibility + high-performance asset loading (LQIP)
✅ SEO-ready with LocalBusiness schema markup

---

## 2. PROJECT SCOPE & OBJECTIVES

### In Scope
✅ Hero section with compelling headline and CTA  
✅ Before/After transformation slider (10 cases with drag interaction)  
✅ Services showcase section  
✅ Pricing cards (2 core services; scalable to 4)  
✅ Team section with professional headshots  
✅ Lead capture form (Name, Email, Phone, Treatment Interest dropdown, optional photo)  
✅ Social proof badge (5.0 Google Reviews, 200+ reviews)  
✅ Aspirational press logos (Vogue, Tatler, GQ) as monochrome placeholders  
✅ Mobile navigation via slide-out drawer  
✅ Floating mobile CTA button  
✅ Auto-playing carousel with keyboard navigation  
✅ Framer Motion animations throughout  
✅ LocalBusiness schema + Meta tags for SEO  

### Out of Scope (Phase 2 Candidates)
❌ CRM integration / lead management backend  
❌ Real-time booking system  
❌ Patient portal  
❌ Email automation  
❌ Live chat support  
❌ Payment processing  

---

## 3. TECHNICAL ARCHITECTURE

### Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16 (App Router) |
| Styling | Tailwind CSS | Latest |
| UI Components | shadcn/ui | Latest |
| Animations | Framer Motion | Latest |
| **Scrolling** | **Lenis (Smooth Scroll)** | **Latest** |
| Image Optimization | Next.js Image | Built-in |
| Form Handling | React Hook Form + Zod | Latest |
| Hosting | Vercel | Production |
| Format Support | WebP (primary), fallback to JPG | - |

### Design System
- **Color Palette**: Quiet luxury (cream, charcoal, warm gold accents)
- **Typography**: 2 font families (elegant serif for headings, clean sans-serif for body)
- **Spacing**: Tailwind scale (multiples of 4px)
- **Accessibility Target**: WCAG AA (color contrast, keyboard nav, screen reader support)

### Asset Management
- **Image Hosting**: Vercel Blob (integrated into deployment)
- **Image Dimensions** (recommendations):
  - Hero banner: 1920x600px (16:9)
  - Before/After cases: 600x600px (1:1, cropped for split slider)
  - Team headshots: 400x500px (4:5)
  - Press logos: 120x40px (flexible aspect ratio)
- **Optimization**: WebP with JPG fallback; images auto-sized for responsive breakpoints

---

## 4. COMPONENT BREAKDOWN & IMPLEMENTATION ORDER

### Phase 1: Core Infrastructure & Layout
**Estimated Effort**: 1-2 days

```
Layout Structure
├── Header (sticky nav, logo, desktop menu, mobile hamburger)
├── Hero Section (headline, CTA, background image)
├── Main Content Sections
└── Footer (contact info, social links)

Global Setup
├── Design tokens (colors, typography, spacing)
├── **Smooth Scroll (Lenis) provider**
├── Framer Motion animation presets
├── Form validation schema (Zod)
├── Image optimization utilities
└── SEO metadata configuration
```

### Phase 2: Interactive Features (High Priority)
**Estimated Effort**: 3-4 days

```
BeforeAfterSlider Component (Luxury Edition)
├── **Parallax Transition**: Depth-based entry for new cases
├── Draggable handle (mouse + touch) with glassmorphism
├── Image pair management (10 cases with LQIP placeholders)
├── **Treatment Filtering**: (Veneers, Invisalign, Whitening)
└── Custom interactive cursor for drag interaction

ServiceCarousel Component
├── Framer Motion slide/fade animations
├── Staggered children animations (entrance sequence)
├── Auto-play with pause on hover
├── Keyboard navigation (arrow keys)
├── Responsive card display (1 full + peek on mobile)
└── Infinite loop behavior

LeadCaptureForm (Concierge Assessment)
├── **Multi-step "Virtual Consultation" flow**
├── React Hook Form + Zod validation
├── Success state "Thank You" card (not just a toast)
├── Optional photo upload preview
├── Console logging of submission data
└── Loading state simulation (1-second delay)
```

### Phase 3: Content Sections (Medium Priority)
**Estimated Effort**: 2-3 days

```
Services Section
├── Formatted service descriptions
├── Icons/visual treatment
└── CTA buttons

Pricing Section
├── Responsive card grid (2 cards, scalable to 4)
├── Feature lists
├── "0% Finance Available" label
└── CTA buttons per card

Team Section
├── Team member cards
├── Professional headshots
├── Name + credentials display
└── Hover effects (optional extended info)

Social Proof Section
├── Google Review badge (static, styled)
├── Testimonial quote carousel
├── Review count display
└── **Localization Note**: Mention "Discreet appointments for public figures"

"The Marylebone Standard" Section
├── **Patient Journey** breakdown
├── Clinic environment gallery
└── "The Concierge Experience" copy

Press Section
├── Monochrome logo placeholders (Vogue, Tatler, GQ)
├── "As Seen In" headline
└── Responsive grid layout
```

### Phase 4: Mobile Optimization & Polish (High Priority)
**Estimated Effort**: 2 days

```
Mobile Navigation
├── Hamburger menu (top-right)
├── Slide-out drawer (right-aligned)
├── Close on route navigation
└── Smooth animations

Floating CTA
├── Fixed bottom-center positioning
├── "Book Now" button with icon
├── Hide on scroll up (optional)
├── Mobile-specific styling

Responsive Refinements
├── Touch-friendly carousel (1 card + peek)
├── Form input sizing
├── Image breakpoints
└── Spacing adjustments for small screens
```

### Phase 5: Accessibility & SEO (Medium Priority)
**Estimated Effort**: 1-2 days

```
Accessibility (WCAG AA)
├── Semantic HTML structure
├── ARIA labels (buttons, headings, landmarks)
├── Keyboard navigation testing
├── Color contrast verification (WCAG AA minimum)
├── Screen reader testing
└── Focus indicators

SEO Optimization
├── Meta tags (title, description, OG images)
├── LocalBusiness schema.org markup
├── Canonical URLs
├── Mobile viewport configuration
└── Sitemap (if multi-page)
```

---

## 5. CRITICAL IMPLEMENTATION DECISIONS

### Before/After Slider
- **Parallax Navigation**: When a user navigates or scrolls to a specific transformation case, the "Before" and "After" layers animate at offset speeds (depth effect) before revealing the interactive handle.
- **Interaction**: Glassmorphism drag handle; custom "Drag" cursor hint on hover.
- **Filtering**: Quick-action chips (e.g., *Veneers*, *Invisalign*) to filter the 10 cases.
- **Images**: Consistent studio-lighting style (warm, soft-box) for all AI assets.
- **Performance**: Use LQIP (Low-Quality Image Placeholders) to prevent "flash of white" during parallax reveals.

### Form Submission Flow
- **Structure**: Multi-step "Smile Assessment" quiz to lower barrier to entry.
- **On Submit**: Full-screen elegant success card with a "personal note" vibe.
- **Data Handling**: Console.log form data + simulate 1-second "Encryption/Sending" delay.
- **Validation**: Real-time field validation with luxury-themed error tooltips.

### Carousel Behavior
- **Auto-play**: Enabled (slow speed, ~5-second interval)
- **Pause Trigger**: On hover or focus
- **Transitions**: Framer Motion fade + slide (smooth, 0.6-second duration)
- **Keyboard Nav**: Left/Right arrows to advance/rewind; Spacebar to pause/play
- **Mobile**: Show 1 full card + ~30% peek of next card (encourages swiping)

### Mobile Navigation
- **Trigger**: Hamburger icon (top-right, fixed header)
- **Animation**: Slide-out drawer from right; backdrop overlay
- **Links**: Close drawer on navigation
- **Accessibility**: Focus trap within drawer; Escape key to close

---

## 6. DEPENDENCIES & RESOURCE REQUIREMENTS

### External Dependencies
| Dependency | Purpose | Status |
|------------|---------|--------|
| Next.js 16 | Framework | Pre-installed |
| Tailwind CSS | Styling | Pre-installed |
| shadcn/ui | UI Components | Pre-installed |
| Framer Motion | Animations | To install |
| **Lenis** | **Smooth Scrolling** | **To install** |
| React Hook Form | Form management | To install |
| Zod | Validation | To install |
| next-seo | SEO helpers | Optional (can use manual meta) |

### Asset Generation Required
- **AI-Generated Images**:
  - 10 Before/After dental transformation pairs (600x600px each = 20 images)
  - 3 Team member headshots (400x500px each)
  - 1 Hero banner background (1920x600px, optional)
  - Total: ~23 images to generate

- **Placeholder Assets**:
  - Monochrome press logos (Vogue, Tatler, GQ)—can be created as SVG or styled text

### Time Estimate Breakdown
| Phase | Task | Status | Dependencies |
|-------|------|------|--------------|
| 1 | Infrastructure & Layout | ✅ Complete | None |
| 2 | Interactive Components | ✅ Complete | Phase 1 complete |
| 3 | Content Sections | ✅ Complete | Phase 1 complete |
| 4 | Mobile & Polish | ✅ Complete | Phases 1-3 complete |
| 5 | Accessibility & SEO | ✅ Complete | All phases |
| **Total** | | **✅ Done** | Sequential |

---

## 7. POTENTIAL CHALLENGES & MITIGATION STRATEGIES

| Challenge | Impact | Mitigation |
|-----------|--------|-----------|
| **Before/After Slider Responsiveness** | Medium | Use CSS aspect-ratio; test on multiple devices early |
| **Image Optimization & Loading** | Medium | Use Next.js Image component; lazy-load; WebP with fallback |
| **Form Validation UX** | Low | Use React Hook Form's built-in error states; clear messages |
| **Asset Lighting Consistency** | High | Define AI prompt "Art Styles" for uniform studio lighting across cases |
| **Parallax/Slider Sync** | Medium | Ensure drag handle logic doesn't conflict with parallax entry motion |
| **LCP for High-Res Images** | High | Mandatory use of Blur-up placeholders and specific `priority` tags for Hero/Slider |
| **Animation Overload** | Low | Implement "Preload" and "Reduced Motion" options |

---

## 8. DATA FLOW & STATE MANAGEMENT

### Form Submission Flow
```
User fills form
    ↓
Click "Submit"
    ↓
Client-side validation (Zod)
    ↓
If invalid: Show error messages
If valid:
    - Disable submit button (show loading spinner)
    - Log form data to console (development)
    - Simulate 1-second API call (setTimeout)
    - Show success toast: "Thank you! We'll contact you shortly"
    - Clear form fields
    - Auto-dismiss toast after 3 seconds
    ↓
Return to idle state
```

### Image Carousel State
```
Component mounted
    ↓
Initialize: currentIndex = 0, isAutoPlaying = true
    ↓
Every 5 seconds (while autoPlaying):
    - Advance index: (currentIndex + 1) % totalCases
    - Trigger Framer Motion animation
    ↓
User interaction (click nav, drag, or keyboard):
    - Update currentIndex
    - Reset autoplay timer
    ↓
On hover: Pause autoplay
On blur: Resume autoplay
```

---

## 9. ACCESSIBILITY COMPLIANCE CHECKLIST (WCAG AA)

- [ ] **Semantic HTML**: Use `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, etc.
- [ ] **Headings**: Proper hierarchy (h1 > h2 > h3); no skipped levels
- [ ] **Buttons & Links**: Descriptive text; avoid "Click here"
- [ ] **Color Contrast**: Text ≥ 4.5:1 (normal), ≥ 3:1 (large text)
- [ ] **Keyboard Navigation**: Tab order logical; all interactive elements reachable
- [ ] **Focus Indicators**: Visible outline or highlight on `:focus` state
- [ ] **ARIA Labels**: `aria-label`, `aria-labelledby`, `aria-describedby` where needed
- [ ] **Images**: Alt text for all meaningful images; `alt=""` for decorative
- [ ] **Forms**: Associated `<label>` elements; error messages linked to inputs
- [ ] **Carousel**: Keyboard controls (arrows, spacebar); screen reader support
- [ ] **Slider**: Accessible handle; keyboard support (← → arrows); ARIA roles
- [ ] **Mobile Menu**: Focus trap; Escape to close; announced to screen readers
- [ ] **Animation**: Respect `prefers-reduced-motion`; no auto-play without pause option
- [ ] **Testing**: Use axe DevTools, WAVE, or similar; test with real assistive tech

---

## 10. SEO & META CONFIGURATION

### Metadata (to be customized)
```tsx
{
  title: "Marylebone Smile Clinic | Cosmetic & Family Dentistry London",
  description: "Premium cosmetic dentistry in Marylebone. Discreet, expert smile transformations. Book your consultation today.",
  keywords: ["cosmetic dentistry", "smile makeover", "Marylebone", "London"],
  ogImage: "/images/hero-og.jpg",
  canonicalUrl: "https://marylebone-smile.com"
}
```

### Schema Markup (LocalBusiness)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Marylebone Smile Clinic",
  "image": "https://marylebone-smile.com/images/logo.png",
  "description": "Premium cosmetic dentistry",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "London",
    "postalCode": "[Postcode]",
    "addressCountry": "UK"
  },
  "telephone": "[Phone]",
  "url": "https://marylebone-smile.com",
  "areaServed": "London",
  "priceRange": "£££"
}
```

---

## 11. DEPLOYMENT STRATEGY

### Hosting & Optimization
- **Platform**: Vercel (default Next.js host)
- **Build Command**: `next build` (automatic)
- **Environment**: Production
- **CDN**: Vercel's global edge network (automatic)
- **SSL**: Automatic HTTPS
- **Monitoring**: Vercel Analytics (optional; can be added)

### Pre-Launch Checklist
- [ ] Lighthouse score ≥ 90 (Performance, Accessibility, Best Practices, SEO)
- [ ] Mobile responsiveness tested (iOS Safari, Android Chrome)
- [ ] Form submission works in production
- [ ] Images optimized and loading quickly
- [ ] No console errors or warnings
- [ ] Analytics setup (Google Analytics 4 if desired)
- [ ] Domain DNS configured (if custom domain)
- [ ] SSL certificate verified

---

## 12. SUCCESS CRITERIA

### Functional Requirements
✅ Before/After slider drag interaction works smoothly on desktop & mobile  
✅ Form validates correctly; success toast appears after submission  
✅ Carousel auto-plays, loops, responds to keyboard & mouse controls  
✅ Mobile navigation opens/closes smoothly; accessibility works  
✅ Floating CTA visible on mobile; clickable; styled appropriately  
✅ All images load correctly; no broken references  

### Performance Metrics
✅ Lighthouse Performance ≥ 90  
✅ First Contentful Paint (FCP) < 2 seconds  
✅ Cumulative Layout Shift (CLS) < 0.1  
✅ Time to Interactive (TTI) < 3 seconds  

### Accessibility & SEO
✅ WCAG AA compliance verified  
✅ Keyboard navigation fully functional  
✅ Screen reader tested (VoiceOver, NVDA)  
✅ SEO meta tags + LocalBusiness schema in place  
✅ Mobile viewport configuration correct  

### User Experience
✅ Quiet luxury aesthetic consistent throughout  
✅ Animations smooth and purposeful (not distracting)  
✅ Form submission feedback clear and immediate  
✅ Mobile experience optimized (CTA prominent, navigation intuitive)  
✅ No layout shifts during image loading  

---

## 13. REMAINING CLARIFICATIONS & NEXT STEPS

### Clarifications Resolved ✅
- Image assets will be AI-generated placeholders
- Drag interaction confirmed for Before/After slider
- Framer Motion selected for animations
- Form submission uses success toast (no redirect)
- Static frontend with no backend needed
- WCAG AA target confirmed

### Minimal Remaining Gaps
| Gap | Resolution | Priority |
|-----|-----------|----------|
| Exact clinic address/phone for schema markup | Provide contact details before SEO tuning | Medium |
| Specific press logos (Vogue, Tatler, GQ) designs | Use elegant monochrome placeholders (SVG or styled) | Low |
| Google Analytics setup | Optional; can add after launch | Low |
| Custom domain | Provide domain name for DNS setup | Low |

### Next Steps (Implementation Ready)
1. ✅ **Plan Approved** → Proceed to coding phase
2. ⏭️ **Generate Design Inspiration** → Finalize exact quiet luxury color palette & typography
3. ⏭️ **Build Layout & Components** → Core infrastructure (header, footer, layout)
4. ⏭️ **Generate AI Images** → Before/After cases, team headshots, hero banner
5. ⏭️ **Implement Interactive Features** → Slider, carousel, form, mobile menu
6. ⏭️ **Optimize & Test** → Performance, accessibility, responsiveness
7. ⏭️ **Deploy to Vercel** → Production-ready launch

---

## 14. FILE STRUCTURE (Proposed)

```
/app
  /layout.tsx                 # Root layout with metadata
  /page.tsx                   # Main landing page
  /globals.css                # Design tokens + Tailwind config
  /api
    /submit-form.ts          # (Optional) Form handler if needed
/components
  /header.tsx                 # Sticky header + nav
  /hero.tsx                   # Hero section
  /before-after-slider.tsx    # Interactive slider
  /services-carousel.tsx      # Service carousel
  /pricing-section.tsx        # Pricing cards
  /team-section.tsx           # Team bios + headshots
  /lead-form.tsx              # Contact form
  /social-proof.tsx           # Reviews badge
  /press-logos.tsx            # Press mentions
  /patient-journey.tsx        # "The Marylebone Standard"
  /mobile-nav.tsx             # Mobile drawer menu
  /floating-cta.tsx           # Mobile floating button
  /footer.tsx                 # Footer
/lib
  /animations.ts              # Framer Motion presets
  /form-schema.ts             # Zod validation schema
  /seo-config.ts              # SEO metadata
/public
  /images
    /before-after-*.png       # Generated images
    /team-*.png               # Team headshots
    /hero-banner.png          # Hero background
    /press-logos.svg          # Logo placeholders
```

---

## 15. SUMMARY

This implementation plan provides a **complete roadmap** for building the Marylebone Smile Clinic landing page. The project is **well-scoped**, **technically feasible**, and **achievable within 9-14 days** of development. All major decisions have been made regarding design, interaction patterns, technology choices, and deployment.

**Development can begin immediately with:**
1. Phase 1 infrastructure (layout, design tokens, form schema)
2. Parallel asset generation (AI images)
3. Iterative phases 2-5 with clear dependencies and milestones

**Success is measured by** functional completeness, performance targets, accessibility compliance, and a cohesive quiet luxury user experience.

---

**Document Status**: ✅ **Implementation Complete**  
**Last Updated**: March 1, 2026  
**Next Review**: Post-launch performance audit
