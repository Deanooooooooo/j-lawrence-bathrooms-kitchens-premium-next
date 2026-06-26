# J.Lawrence Bathrooms and Kitchens QA

## Source / Fact Audit

- PASS: Business name from Facebook OG/search snippets: `J.Lawrence Bathrooms and Kitchens`.
- PASS: Location from Facebook OG/search snippets: Basildon.
- PASS: Public description used only for service scope: experienced kitchen and bathroom fitter; renovation and general maintenance work.
- PASS: Facebook likes were verified in metadata/search snippets, but not used as a testimonial, rating, review count or guarantee.
- PASS: Public phone/email found via indexed source snippets and used as primary contact: `+44 7399 500429`, `jasonlawrence439@gmail.com`.
- PASS: No GMB profile, Google map source or independent website used.
- PASS: No prices, guarantees, certifications, years in business, ratings or invented review claims added.
- PASS: Facebook remains a secondary source/social link only; phone and email are primary.

## Content Constraints

- PASS: Hero is visual-led with a real bathroom work image and prominent Facebook/logo branding.
- PASS: No Google Maps embed or map section.
- PASS: No testimonials/reviews section.
- PASS: Services limited to bathrooms, kitchens, renovation and general maintenance.
- PASS: No SaaS/form-planner/internal build rationale remains in public copy.
- PASS: Enquiry form is first-viewport/top-right on desktop, homeowner-focused and routes to email/call instead of Facebook.
- PASS: Visible interaction added: project type selector, dynamic quote guidance, image hover states and FAQ details.

## Images / Layout

- PASS: `image-map.md` created before build and documents Facebook/profile/search routes.
- PASS: Hero avoids pretending generic or source-limited images are business work.
- PASS: Selected visible images are verified Facebook OG/profile assets.
- PASS: `bathroom-finish.jpg` rejected from visible use because it shows a staircase/landing carousel frame.
- PASS: Screenshot QA captured:
  - `qa/desktop-hero.png`
  - `qa/desktop-full.png`
  - `qa/mobile-full.png`
  - `qa/desktop-correction.png`
  - `qa/mobile-correction.png`
  - `qa/desktop-final.png`
  - `qa/mobile-final.png`
  - `qa/desktop-rebuild.png`
  - `qa/mobile-rebuild.png`
  - `qa/phone-first-desktop.png`
  - `qa/phone-first-mobile.png`

## SEO / Links / Schema

- PASS: One H1.
- PASS: Title, meta description, canonical, OpenGraph and Twitter metadata present.
- PASS: LocalBusiness-style `HomeAndConstructionBusiness` schema includes name, description, Basildon area served, image, URL, sameAs Facebook, phone, email and service offers.
- PASS: Form markup present in exported HTML.
- PASS: Phone and email schema added after public-source verification.

## Build / Runtime

- PASS: `npm install` completed.
- NOTE: npm reported 2 dependency advisories; no force upgrade applied.
- PASS: `npm run build` completed.
- PASS: Copy correction build completed after removing internal/client-facing page rationale from visible sections.
- PASS: Correction build completed with `npm run build`.
- PASS: Final local correction build completed after copy/form patch.
- PASS: Rebuild places the enquiry form in the hero/right first viewport and removes the lower form workaround.
- PASS: Phone-first correction build completed; exported HTML contains phone/email, one form, base-path CSS/images, and no rejected copy.
- PASS: `.nojekyll` added to export.
- PASS: Static export rendered locally at `http://127.0.0.1:3057`.

## Deployment

- PASS: GitHub repo created and `main` pushed.
- PASS: Static export published to `gh-pages` branch.
- PASS: GitHub Pages source is `gh-pages` branch, `/` path.
- PASS: Live URL returns HTTP 200.
- PASS: Live HTML contains business name, one H1, one form, canonical, OG title/URL/image and schema.
- PASS: Live CSS and main OG/work image return HTTP 200.
- PASS: Live HTML has no Google Maps iframe and no testimonial markup.
- NOTE: Extra live screenshot command was blocked by the local OpenClaw hook; local Playwright screenshots passed before deployment and live assets/HTML were verified directly.
