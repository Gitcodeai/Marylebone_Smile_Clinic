# Implementation Plan - Typography and UI Refinement

This plan outlines the changes required to recalibrate fluid typography, update hero section content and alignment, and refine the CTA button styling to ensure a cohesive and premium user experience.

## Proposed Changes

### [Component] Typography Recalibration

#### [MODIFY] [hero.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/hero.tsx)
- Update Hero H1 `fontSize` clamp:
  - From: `clamp(36px, 7.5vw, 84px)`
  - To: `clamp(36px, 7.5vw, 78px)` (Reducing max cap by 6px)

#### [MODIFY] [patient-journey.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/patient-journey.tsx)
- Update Section H1 (H2) `fontSize` clamp:
  - From: `clamp(26px, 6vw, 64px)`
  - To: `clamp(26px, 6vw, 60px)` (Reducing max cap by 4px)

#### [MODIFY] [services.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/services.tsx)
- Update Section Heading `fontSize` clamp:
  - From: `clamp(26px, 6vw, 64px)`
  - To: `clamp(26px, 6vw, 60px)`

#### [MODIFY] [team.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/team.tsx)
- Update Section Heading `fontSize` clamp:
  - From: `clamp(26px, 6vw, 64px)`
  - To: `clamp(26px, 6vw, 60px)`

#### [MODIFY] [social-proof.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/social-proof.tsx)
- Update Section Heading `fontSize` clamp:
  - From: `clamp(22px, 6vw, 64px)`
  - To: `clamp(22px, 6vw, 60px)`

---

### [Component] Hero Section Enhancements

#### [MODIFY] [hero.tsx](file:///d:/coding/Marylebone_Smile_Clinic/components/hero.tsx)
- **Text Update**: Replace the existing subheadline with:
  > "Experience world-class dental care with stunning, natural-looking results, nestled in the heart of London."
- **Vertical Alignment**:
  - Update the container classes to match the sections below for a single cohesive vertical alignment.
  - From: `max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20`
  - To: `max-w-[1600px] mx-auto px-6 lg:px-12 w-full` (Matching `patient-journey.tsx`)
- **Dimensions**:
  - Enforce strict `100vh` height and `100vw` width.
  - Remove `lg:max-h-[950px] xl:max-h-[1000px]` constraints to ensure it fills exactly 100vh.
- **CTA Button**:
  - Change `rounded-2xl` to `rounded-none` (rectangle).
  - Adjust margins and padding to ensure content stays within safe zones and avoids clipping after typography changes.

---

### [Component] Layout Standardization

#### [MODIFY] Global Layout / Multiple Components
- Ensure all sections below the Hero maintain a strict `100vw` width.
- Verify safe-zone boundaries (padding) across all sections to prevent horizontal/vertical layout shifts.

## Verification Plan

### Automated Tests
- N/A (UI-centric changes)

### Manual Verification
- **Viewport Check**: Load the page in a browser and verify that the Hero section exactly fills the screen (`100vh`/`100vw`) without scrollbars.
- **Typography Check**: Use browser dev tools to inspect heading sizes at various viewport widths (320px, 768px, 1440px, 1920px) to ensure `clamp` behavior is correct and max caps are respected.
- **Alignment Check**: Visually verify that the Hero text aligns perfectly with the text in the "Marylebone Standard" section using a vertical guide/ruler.
- **Button Check**: Confirm the CTA button is rectangular and correctly padded.
- **Content Check**: Verify the updated Hero text is present and free of typos.
