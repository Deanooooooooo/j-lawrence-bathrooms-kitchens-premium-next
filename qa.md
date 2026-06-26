# J.Lawrence Bathrooms and Kitchens QA

## Source / Fact Audit

- PASS: Business name from Facebook OG/search snippets: `J.Lawrence Bathrooms and Kitchens`.
- PASS: Location from Facebook OG/search snippets: Basildon.
- PASS: Public description used only for service scope: experienced kitchen and bathroom fitter; renovation and general maintenance work.
- PASS: Facebook likes were verified in metadata/search snippets, but not used as a testimonial, rating, review count or guarantee.
- PASS: No public phone, email, address, GMB profile or independent website found.
- PASS: No prices, guarantees, certifications, years in business, ratings or invented review claims added.
- PASS: Facebook link is used as the only source/social CTA.

## Content Constraints

- PASS: Hero uses prominent enquiry form instead of usual hero image/media.
- PASS: No Google Maps embed or map section.
- PASS: No testimonials/reviews section.
- PASS: Services limited to bathrooms, kitchens, renovation and general maintenance.
- PASS: Form is static/front-end only. It notes that a business email or Formspree endpoint must be connected before live enquiries can be received.

## Images / Layout

- PASS: `image-map.md` created before build and documents Facebook/profile/search routes.
- PASS: Hero avoids pretending generic or source-limited images are business work.
- PASS: Selected visible images are verified Facebook OG/profile assets.
- PASS: `bathroom-finish.jpg` rejected from visible use because it shows a staircase/landing carousel frame.
- PASS: Screenshot QA captured:
  - `qa/desktop-hero.png`
  - `qa/desktop-full.png`
  - `qa/mobile-full.png`

## SEO / Links / Schema

- PASS: One H1.
- PASS: Title, meta description, canonical, OpenGraph and Twitter metadata present.
- PASS: LocalBusiness-style `HomeAndConstructionBusiness` schema includes name, description, Basildon area served, image, URL, sameAs Facebook and service offers.
- PASS: Form markup present in exported HTML.
- PASS: No phone/email schema added because none was publicly verified.

## Build / Runtime

- PASS: `npm install` completed.
- NOTE: npm reported 2 dependency advisories; no force upgrade applied.
- PASS: `npm run build` completed.
- PASS: `.nojekyll` added to export.
- PASS: Local Next dev server rendered at `http://localhost:3055`.

## Deployment

- Pending: GitHub repo push, GitHub Pages publish, live HTTP 200 and live HTML checks.
