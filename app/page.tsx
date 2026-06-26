import {
  ArrowUpRight,
  Bath,
  CheckCircle2,
  ChefHat,
  Facebook,
  Hammer,
  Images,
  Mail,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";
import { EnquiryForm } from "../components/enquiry-form";
import { QuoteFocus } from "../components/quote-focus";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://deanooooooooo.github.io";
const facebookUrl = "https://www.facebook.com/profile.php?id=100089767462854";
const phoneDisplay = "+44 7399 500429";
const phoneHref = "tel:+447399500429";
const emailAddress = "jasonlawrence439@gmail.com";

const img = (path: string) => `${basePath}${path}`;

const services = [
  {
    icon: Bath,
    title: "Bathroom fitting",
    body: "Refits, shower areas, tiling, flooring, trims and finishing details for rooms that need to work every day."
  },
  {
    icon: ChefHat,
    title: "Kitchen fitting",
    body: "Cabinet fitting support, surfaces, splashbacks, flooring and practical finishing around the kitchen."
  },
  {
    icon: Hammer,
    title: "Renovation work",
    body: "Room updates, strip-out, preparation and careful handover when the job has several moving parts."
  },
  {
    icon: Wrench,
    title: "Maintenance",
    body: "Smaller property jobs, repairs and adjustments where direct contact and a tidy finish matter."
  }
];

const proofPoints = [
  "Basildon based bathroom, kitchen and renovation work.",
  "Direct phone and email contact with Jason.",
  "Public Facebook profile with real project photos.",
  "Quote route built around room details, photos, timing and location."
];

const workImages = [
  {
    src: "/images/completed-bathroom-crop.jpg",
    alt: "Completed bathroom with walk-in shower, wall tiling and wood-effect floor",
    label: "Finished bathroom"
  },
  {
    src: "/images/easy-bathrooms-display-thumb.jpg",
    alt: "Bathroom display area with preparation work underway",
    label: "Display tiling prep"
  },
  {
    src: "/images/bathroom-two-rooms.jpg",
    alt: "Finished bathroom shower room from a public Facebook photo",
    label: "Room update"
  }
];

const steps = [
  "Call or send the quote form.",
  "Share the room, photos, timing and area.",
  "Agree what is being fitted, repaired or refreshed.",
  "Get the work finished cleanly and ready to use."
];

const faqs = [
  {
    q: "What work does J.Lawrence Bathrooms and Kitchens take on?",
    a: "Bathrooms, kitchens, renovation work and general maintenance around Basildon."
  },
  {
    q: "Can I send photos before asking for a quote?",
    a: "Yes. Photos help show access, current condition, measurements and the finish you want."
  },
  {
    q: "What is the fastest way to ask?",
    a: `Call ${phoneDisplay}. If email is easier, use the enquiry form and it will open a ready-made email.`
  },
  {
    q: "Is Facebook the main contact route?",
    a: "No. The site keeps Facebook as proof and sends quote requests through phone or email first."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "J.Lawrence Bathrooms and Kitchens",
  description:
    "Bathroom fitter, kitchen fitter and renovation work in Basildon, with direct phone and email quote requests.",
  url: `${siteUrl}${basePath}/`,
  image: `${siteUrl}${basePath}/images/completed-bathroom-crop.jpg`,
  logo: `${siteUrl}${basePath}/images/j-lawrence-logo-crop.jpg`,
  telephone: phoneDisplay,
  email: emailAddress,
  areaServed: { "@type": "City", name: "Basildon" },
  sameAs: [facebookUrl],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: service.title }
  }))
};

export default function HomePage() {
  return (
    <main className="site-root">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="site-header">
        <div className="section-shell header-inner">
          <a href="#top" className="brand-lockup" aria-label="J.Lawrence Bathrooms and Kitchens home">
            <img src={img("/images/j-lawrence-logo-crop.jpg")} alt="J.Lawrence Bathrooms and Kitchens" />
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#proof">Proof</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href={phoneHref} className="button button--gold header-call">
            <Phone aria-hidden="true" />
            <span>{phoneDisplay}</span>
          </a>
        </div>
      </header>

      <section
        id="top"
        className="hero"
        style={{ backgroundImage: `url(${img("/images/completed-bathroom-crop.jpg")})` }}
      >
        <div className="section-shell hero-grid">
          <div className="hero-copy">
            <p className="pill">
              <ShieldCheck aria-hidden="true" />
              Basildon bathroom and kitchen fitter
            </p>
            <h1>Bathrooms and kitchens fitted properly.</h1>
            <p className="hero-lede">
              Bathroom refits, kitchen fitting, renovation and maintenance work with a direct route to Jason before the job starts.
            </p>
            <div className="hero-actions">
              <a href={phoneHref} className="button button--gold">
                <Phone aria-hidden="true" />
                Call {phoneDisplay}
              </a>
              <a href="#enquiry" className="button button--glass">
                <ArrowUpRight aria-hidden="true" />
                Request a quote
              </a>
            </div>
          </div>

          <aside className="hero-form" aria-label="Request a quote">
            <EnquiryForm emailAddress={emailAddress} phoneHref={phoneHref} phoneDisplay={phoneDisplay} />
          </aside>
        </div>
      </section>

      <section className="metric-strip section-shell" aria-label="Quick facts">
        {[
          ["4", "service lanes"],
          ["1", "direct quote route"],
          ["3", "public work photos mapped"]
        ].map(([value, label]) => (
          <div key={label} className="metric-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section-block section-block--light">
        <div className="section-shell">
          <p className="eyebrow">Services</p>
          <h2 className="section-title">Practical room work without the brochure fluff.</h2>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <Icon aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block section-block--interactive">
        <div className="section-shell">
          <QuoteFocus emailAddress={emailAddress} phoneHref={phoneHref} />
        </div>
      </section>

      <section id="proof" className="section-block section-block--dark">
        <div className="section-shell proof-grid">
          <div>
            <p className="eyebrow">Confidence path</p>
            <h2 className="section-title">The page should make the call feel obvious.</h2>
            <p className="section-intro">
              The useful proof is simple: what work is offered, where the business is based, what real photos exist, and how to ask for a quote.
            </p>
          </div>
          <div className="proof-list">
            {proofPoints.map((item) => (
              <div key={item} className="proof-row">
                <CheckCircle2 aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="work-section">
        <div className="section-shell">
          <p className="eyebrow">Real project photos</p>
          <h2 className="section-title">Vertical bathroom photos shown in vertical frames.</h2>
          <p className="section-intro">
            These are public Facebook assets, so the layout respects their portrait shape instead of chopping them into bad landscape cards.
          </p>
        </div>
        <div className="work-reel" aria-label="J.Lawrence work photos">
          {workImages.map((image, index) => (
            <figure key={`${image.src}-${index}`} className={index === 3 ? "work-card work-card--small" : "work-card"}>
              <img src={img(image.src)} alt={image.alt} />
              <figcaption>
                <Images aria-hidden="true" />
                {String(index + 1).padStart(2, "0")} / {image.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-block section-block--light">
        <div className="section-shell story-grid">
          <div>
            <p className="eyebrow">How quote requests work</p>
            <h2 className="section-title">Send enough detail for the job to make sense.</h2>
            <div className="step-list">
              {steps.map((step) => (
                <div key={step} className="step-row">
                  <CheckCircle2 aria-hidden="true" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-brief" aria-label="Useful details for quote requests">
            <p className="eyebrow">Good enquiry details</p>
            <h3>Room, location, photos, timing and finish.</h3>
            <ul>
              <li>What room needs fitting, repair or refresh work.</li>
              <li>Where the job is around Basildon or nearby.</li>
              <li>Photos, measurements and access details if available.</li>
              <li>When you want the work looked at or started.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="section-block section-block--dark">
        <div className="section-shell faq-grid">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Clear answers before the call.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}<span>+</span></summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-block section-block--contact">
        <div className="section-shell contact-grid">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Call or email with the room, photos and timing.</h2>
            <div className="contact-actions">
              <a href={phoneHref}>
                <Phone aria-hidden="true" />
                {phoneDisplay}
              </a>
              <a href={`mailto:${emailAddress}`}>
                <Mail aria-hidden="true" />
                {emailAddress}
              </a>
              <a href={facebookUrl}>
                <Facebook aria-hidden="true" />
                Facebook proof
              </a>
            </div>
          </div>
          <div
            className="contact-photo"
            style={{ backgroundImage: `linear-gradient(90deg, rgba(17, 25, 32, 0.92), rgba(17, 25, 32, 0.48)), url(${img("/images/completed-bathroom-crop.jpg")})` }}
          >
            <p>Basildon based</p>
            <h3>Bathroom, kitchen, renovation and maintenance enquiries.</h3>
            <a href="#enquiry" className="button button--gold">
              <Sparkles aria-hidden="true" />
              Start quote request
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <div className="footer-brand">
            <img src={img("/images/j-lawrence-logo-crop.jpg")} alt="" />
            <span>J.Lawrence Bathrooms and Kitchens</span>
          </div>
          <div className="footer-links">
            {[
              { href: phoneHref, label: "Call J.Lawrence Bathrooms and Kitchens", icon: <Phone aria-hidden="true" /> },
              { href: `mailto:${emailAddress}`, label: "Email J.Lawrence Bathrooms and Kitchens", icon: <Mail aria-hidden="true" /> },
              { href: facebookUrl, label: "Facebook", icon: <Facebook aria-hidden="true" /> }
            ].map((link) => (
              <a key={link.label} href={link.href} aria-label={link.label}>
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
