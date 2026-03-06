## Goals

- **Add rich preview image**: Use `public/og-home.jpg` as the primary Open Graph / Twitter preview image for the home page and, optionally, as a default for other pages.
- **Create robust metadata**: Define a single source of truth for SEO, Open Graph, and Twitter Card metadata using modern Next.js 16 features.
- **Optimize for social platforms**: Ensure great link previews on Facebook, Instagram (via Facebook’s crawler), LinkedIn, X (Twitter), WhatsApp, iMessage, and others.
- **Make metadata maintainable**: Centralize configuration and provide patterns for per-page overrides.

---

## 1. Confirm Assets and Basic Site Information

- **1.1. Place preview image**
  - Ensure `og-home.jpg` is added to the `public` folder at `public/og-home.jpg`.
  - Confirm dimensions and quality:
    - Recommended for Open Graph / Twitter: at least 1200×630px (aspect ratio ~1.91:1).
    - Use compressed but high-quality JPG (optimize size to around 200–400 KB if possible).

- **1.2. Collect brand and SEO constants**
  - **Brand name**: `Marylebone Smile Clinic`.
  - **Tagline / short description**: One-sentence description emphasising key services and location (e.g. “Boutique cosmetic and restorative dentistry in Marylebone, London.”).
  - **Canonical base URL**: e.g. `https://www.marylebonesmileclinic.com` (replace with the real production domain).
  - **Default keywords** (optional; not critical for modern SEO, but sometimes requested).
  - **Business details** (for rich metadata and future Schema.org work):
    - Address
    - Phone
    - Email
    - Opening hours

- **1.3. Social profile URLs**
  - Collect URLs for:
    - **X (Twitter)** handle
    - **Facebook Page**
    - **Instagram**
    - **LinkedIn**
    - Any other important profiles (e.g. Google Business, YouTube).

- **1.4. Technical config**
  - Confirm **Next.js 16 app directory** vs **pages directory**:
    - If using `app/` (likely for newer Next.js): implement metadata via `next/metadata` and the `metadata` export / `generateMetadata`.
    - If using `pages/`: use a shared `Head` component (e.g. `next/head`) and custom `_document.tsx` / `_app.tsx`.
  - For this project (Next 16), we will **assume the app router** and plan around it, but keep notes where pages-router adjustments are needed.

---

## 2. Centralize Site-Wide Metadata Configuration

- **2.1. Create a shared metadata config**
  - Add a config file such as `app/metadata.config.ts` or `lib/metadata.ts`.
  - Define a `siteConfig` object including:
    - `name` (site name)
    - `shortName` (if needed)
    - `description` (default)
    - `url` (canonical site URL)
    - `locale` (e.g. `"en-GB"`)
    - `siteType` (e.g. `"website"` or `"business"` / `"MedicalBusiness"`)
    - `siteImage` (default OG image path, `/og-home.jpg`)
    - `social` (X, Instagram, Facebook, LinkedIn, etc.)
  - Export reusable TypeScript types if needed (e.g. `SiteConfig`, `PageMetaOptions`).

- **2.2. Set up base Next.js `metadata`**
  - In `app/layout.tsx` (or equivalent), export a `metadata` object using `Metadata` from `next`.
  - Use `siteConfig` values for:
    - `metadataBase`
    - `title` (template + default)
    - `description`
    - `openGraph` (url, siteName, images, locale, type)
    - `twitter` (card, site, creator, images)
    - `alternates` (canonical, languages)
    - `robots` (index, follow settings)
  - Make sure `openGraph.images` and `twitter.images` use an **absolute URL** constructed from `metadataBase` and `/og-home.jpg` (important for social crawlers).

- **2.3. Create a helper for per-page metadata**
  - Add a utility function such as `createMetadata(options)` that:
    - Accepts overrides like `title`, `description`, `image`, `canonical`, and `noIndex`.
    - Merges overrides with `siteConfig` defaults.
    - Returns a `Metadata` object compatible with Next.js.
  - This will be used by per-page `generateMetadata` functions.

---

## 3. Implement Rich Open Graph Metadata

- **3.1. Global Open Graph settings**
  - In `app/layout.tsx` global `metadata`:
    - Set:
      - `type`: `"website"` (or `"business"` depending on content).
      - `siteName`: `Marylebone Smile Clinic`.
      - `url`: base site URL.
      - `locale`: `"en_GB"` (assuming UK audience).
    - Configure `images` to reference `og-home.jpg`:
      - Include `url`, `width`, `height`, and `alt` text (describing the clinic or hero section).

- **3.2. Per-page OG overrides (optional, future-friendly)**
  - For key pages (e.g. “Treatments”, “About”, “Contact”), plan to allow:
    - Custom titles and descriptions.
    - Optional page-specific OG images (e.g. `/og-treatments.jpg`).
  - In each page file, use `generateMetadata` and the `createMetadata` helper to override as needed.

---

## 4. Implement Twitter Card Metadata

- **4.1. Default Twitter Card**
  - In global `metadata`:
    - Set:
      - `card`: `"summary_large_image"` (large image preview).
      - `site`: clinic’s X/Twitter handle (e.g. `"@marylebonesmile"`).
      - `creator`: same handle or specific dentist/owner if appropriate.
      - `title`, `description`, and `images` from `siteConfig` defaults.

- **4.2. Page-level Twitter overrides**
  - Ensure `createMetadata` uses the same image and text for `twitter` as for Open Graph, unless a page passes its own `image` override.
  - For pages with unique marketing campaigns, allow specifying a custom Twitter image and text.

---

## 5. SEO Basics and Canonicals

- **5.1. Titles and title template**
  - In global `metadata`, set:
    - `title.default`: brand-first or service-first default (e.g. `Marylebone Smile Clinic`).
    - `title.template`: pattern like `%s | Marylebone Smile Clinic`.
  - Ensure per-page titles use this template automatically through `createMetadata`.

- **5.2. Descriptions**
  - Define a strong default description in `siteConfig`.
  - For important landing pages, plan to provide specific descriptions via `generateMetadata`.

- **5.3. Canonical URLs**
  - Use `alternates.canonical` in global metadata, built from `metadataBase`.
  - In `createMetadata`, allow passing a `canonicalPath` to override canonical for specific pages (e.g. marketing URLs).

- **5.4. Indexing rules**
  - Set `robots` in global metadata to allow indexing by default.
  - Extend `createMetadata` to support:
    - `noIndex`: for thank-you pages, admin pages, test pages.
    - Correct `robots` values when `noIndex` is true.

---

## 6. Social Profile and Brand Signals

- **6.1. Social profile links**
  - Use `siteConfig.social` to:
    - Link social profiles in the site footer or header.
    - Prepare for future structured data (Organization / LocalBusiness schema).

- **6.2. Favicons and app icons**
  - Verify that existing favicon and app icons match the brand.
  - If missing or outdated, plan to:
    - Add `favicon.ico` and optional `apple-touch-icon` in `public/`.
    - Configure them via Next.js metadata (`icons` field) rather than raw `<link>` tags.

---

## 7. Handling Multiple Locales or Subpaths (If Applicable)

- **7.1. Internationalization**
  - If the site will support multiple languages in the future:
    - Plan to use `alternates.languages` in global metadata.
    - Extend `createMetadata` helper to accept locale-aware URLs and labels.

- **7.2. Subpath handling**
  - For marketing subpaths (e.g. `/invisalign-london`), ensure:
    - Correct canonical URLs.
    - Page-specific OG and Twitter content if needed.

---

## 8. Testing and Validation

- **8.1. Local development checks**
  - Use browser dev tools to confirm:
    - All expected `<meta>` tags appear in the `<head>` of key pages.
    - The preview image resolves to the absolute URL (including protocol and domain).

- **8.2. External validators**
  - After deploying to production:
    - Use the **Facebook Sharing Debugger** to:
      - Scrape the URL.
      - Confirm OG title, description, and image.
    - Use **X (Twitter) Card Validator** to:
      - Check Twitter Card type and image.
    - Use **LinkedIn Post Inspector**:
      - Validate title, description, and image.

- **8.3. Edge cases**
  - Test:
    - Home page.
    - A couple of deep pages (e.g. a treatment page, contact page).
    - Any `noindex` pages, confirming they’re not meant for sharing.

---

## 9. Implementation Order of Operations

1. **Add `public/og-home.jpg`** and verify its size and dimensions.
2. **Create `siteConfig` and metadata utilities** in a shared config file.
3. **Update `app/layout.tsx`** to export comprehensive `metadata` using the config and Next.js `Metadata` typing.
4. **Add `createMetadata` helper** to make per-page metadata ergonomic and consistent.
5. **Update key pages** (home, flagship treatments, about, contact) to use `generateMetadata` with the helper for custom titles/descriptions when needed.
6. **Verify HTML output** locally and fix any missing fields.
7. **Deploy to production** and validate previews using social debugger tools.

---

## 10. Optional Future Enhancements

- **10.1. Schema.org structured data**
  - Add JSON-LD scripts describing:
    - `Organization` / `LocalBusiness` with address and contact details.
    - `Dentist` or `MedicalBusiness` with services offered and opening hours.
  - Implement using Next.js metadata or a small JSON-LD component added in layout or specific pages.

- **10.2. Per-treatment OG images**
  - Create a process and naming convention for additional OG images (e.g. `og-invisalign.jpg`, `og-veneers.jpg`).
  - Extend metadata helper to easily pick the correct OG image per page.

- **10.3. A/B testing of headlines and descriptions**
  - Integrate with experimentation tools (if used) to test different titles and descriptions while keeping OG/Twitter data consistent.

---

## What Happens Next

- Implement the plan by:
  - Adding `og-home.jpg` to `public/`.
  - Creating the metadata config and helper.
  - Wiring global and page-level metadata using Next.js 16’s `Metadata` and `generateMetadata`.
  - Running validation through social debuggers after deployment.
