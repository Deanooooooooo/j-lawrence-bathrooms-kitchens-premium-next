# J.Lawrence Bathrooms and Kitchens Image Map

## Sources Checked

- Facebook profile: `https://www.facebook.com/profile.php?id=100089767462854`
  - Redirects to `https://www.facebook.com/people/JLawrence-Bathrooms-and-Kitchens/100089767462854/`.
  - Public OG metadata confirms `J.Lawrence Bathrooms and Kitchens | Basildon`, 167 likes, and description: `Experienced kitchen and bathroom fitter. Aswell as renovation and general maintenance work.`
  - Public OG image downloaded as `public/images/j-lawrence-profile.jpg`.
- Facebook mobile about route: `https://m.facebook.com/100089767462854/about/`
  - Search/browser snippet confirms name, Basildon, 167 likes, and same description.
- Facebook search/indexed routes:
  - `https://www.facebook.com/100089767462854/photos/d41d8cd9/935588116110095/`
    - Search snippet: `This was two rooms into one lovely bathroom very happy with the finish.`
    - Public OG image downloaded as `public/images/bathroom-two-rooms.jpg`.
  - `https://www.facebook.com/100089767462854/photos/d41d8cd9/886573091011598/`
    - Search snippet: `This was two rooms into one lovely bathroom very happy with the finish.`
    - Public OG image downloaded and moved to `research/rejected-bathroom-finish.jpg`; rejected for visible bathroom proof because the image itself is a stair/landing carousel frame.
  - `https://www.facebook.com/100089767462854/photos/916705991331641/`
    - Search snippet: `Take a look at this This was a small renovation for a lovely couple in swf...`
    - Direct curl returned protocol error in this environment; no reliable image downloaded.
  - `https://www.facebook.com/100089767462854/photos/284522527883327/`
    - Search snippet: older indexed small renovation post.
    - Direct page did not expose usable OG metadata in this environment.
  - `https://www.facebook.com/100089767462854/videos/901757638185475/`
    - Public OG title/description: `Easy Bathrooms display tiled today. Basildon branch. Amazing tiles.`
    - Public OG image downloaded as `public/images/easy-bathrooms-display-thumb.jpg`.
  - `https://www.facebook.com/100089767462854/videos/752285840113399/`
    - Search snippet references `Another bathroom completed today...`
    - Public OG image downloaded as `public/images/completed-bathroom-reel-thumb.jpg`; title is generic Reels metadata, so placement should describe only what the image visibly shows.
- Web/image search:
  - Queries for exact business name, Facebook ID, Basildon, Easy Bathrooms, renovation, and public photos found Facebook snippets only.
  - No independent website, email, phone, Google Business Profile, or third-party review source was found in public search results.

## Selected Assets

| File | Source | Subject | Orientation | Quality / Crop Notes | Classification | Placement |
|---|---|---|---|---|---|---|
| `j-lawrence-profile.jpg` | Facebook profile OG image | Business logo/profile graphic | square, 720x720 | Good as logo only; too sparse for hero photo | logo | Header, footer, social proof accent |
| `completed-bathroom-reel-thumb.jpg` | Facebook reel OG image | Completed bathroom with walk-in shower, tiling and wood-effect floor | portrait, 946x1682 | Strongest real work visual; crop-safe in portrait frames, avoid wide hero crop | real work | Work/approach visual, final CTA accent |
| `easy-bathrooms-display-thumb.jpg` | Facebook video OG image | Easy Bathrooms Basildon display tiling work in progress | portrait, 1080x1920 | Good work-in-progress context; crop-safe in portrait cards | real work / in progress | Process section visual |
| `bathroom-two-rooms.jpg` | Facebook photo OG image | Finished bathroom/shower area | narrow portrait, 146x315 | Useful but low-res thumbnail; only small supporting placement | real work | Small project detail card |

## Rejected / Unused

- `research/rejected-bathroom-finish.jpg`: downloaded from a Facebook photo route but visually shows a staircase/landing, not bathroom/kitchen work; kept locally for audit but not used on the public page.
- Stock kitchen/bathroom photos: not used. No stock photo is presented as J.Lawrence work.
- Google Maps embed: intentionally omitted because the user confirmed the business does not have GMB.
- Testimonials/reviews: intentionally omitted. Public likes are recorded internally but not turned into testimonials, ratings, guarantees, review counts, or trust claims.

## Placement Notes

- The hero uses `completed-bathroom-reel-thumb.jpg` as the main visual anchor.
- The Facebook profile/logo image is used in the header lockup, hero badge, enquiry brand panel and footer.
- The page uses verified Facebook visuals only. Generic CSS texture/grid treatments are design treatment only and are not presented as business work.
- Any copy based on indexed Facebook captions is phrased as service context rather than testimonials or guarantees.
