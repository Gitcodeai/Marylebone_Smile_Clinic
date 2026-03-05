# Mobile (`xs/sm`) Optimization Implementation Details

This document consolidates the structural formatting, color alternation, and responsive alignment updates explicitly enacted for extra-small (`xs`) and small (`sm`) screen viewports across the application.

## 1. Global Section Background Alternation
To create a cohesive visual rhythm, alternating background fills were implemented sequentially, starting immediately after the Hero section:

*   **The Marylebone Standard (`patient-journey.tsx`)**: Removed tinted background, clean `bg-background`.
*   **Clinical Excellence (`services.tsx`)**: Tinted to `bg-secondary/20`.
*   **Transformation Showcase (`before-after-gallery.tsx`)**: Clean `bg-background`.
*   **Our Experts (`team.tsx`)**: Tinted to `bg-secondary/20`.
*   **Testimonials (`social-proof.tsx`)**: Clean `bg-background`.
*   **Contact / Virtual Concierge (`lead-form.tsx`)**: Tinted to `bg-secondary/20`.

## 2. Clinical Excellence Service Cards (`services.tsx`)
*   **Card Background:** Retained `bg-background` (crisp white) on the sliding service cards so they contrast elegantly against the new `bg-secondary/20` beige section background.
*   **Text Alignment Reversion:** Stripped all mobile-specific center-alignment tracking (e.g., `max-[575px]:text-center`) from the inner card contents (features, pricing, titles). Cards seamlessly default to left-aligned across all screen dimensions.

## 3. Our Experts Section (`team.tsx`)
*   **Centered Headings:** Applied `max-[575px]:text-center` and `justify-center` strictly to the section's introductory text and the top "Our Experts" label formatting for `xs` viewports.
*   **Float Layout Restoration:** Restored `float-left` layout properties for expert profile photos on `xs` screens. The text biography content now correctly and aesthetically wraps around the left-anchored images rather than stacking vertically in the center.

## 4. Testimonials Section (`social-proof.tsx`)
*   **Targeted Alignment:**
    *   **Section Headers:** Center-alignment securely maintained on the main "Patient Voice" banner and review count strings above the carousel (`max-[575px]:text-center`).
    *   **Card Contents:** Removed all center alignments entirely from the internal star ratings, blockquotes, and author detail elements, restoring the sophisticated left-aligned formatting on mobile viewports.
*   **Carousel Clipping Fix:** Safely audited and restricted viewport padding and negative margins within the Embla structural wrappers (`xs` specific `ml-0` and `pr-4`). This allows the slide to perfectly scale down to 100% of the mobile screen boundary without overflowing and clipping on the right-hand side.

## 5. Contact / Footer Section (`footer.tsx`)
*   **Branding Synchronization:** Replaced the generic "MS" logo circle with the full vector Marylebone Smile Clinic SVG and structured text, identical to the master `header.tsx` styling.
*   **Strict Center Alignment:** Injected `max-[575px]:text-center`, `max-[575px]:items-center` utilities across the entirety of the footer blocks, including navigation link arrays, clinic addresses, contact lists, and the absolute bottom copyright bar.
