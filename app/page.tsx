import {
  Bath,
  CheckCircle2,
  ChefHat,
  Facebook,
  Hammer,
  Images,
  Mail,
  MessageSquareText,
  Phone,
  Wrench
} from "lucide-react";
import { EnquiryForm } from "../components/enquiry-form";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://deanooooooooo.github.io";
const facebookUrl = "https://www.facebook.com/profile.php?id=100089767462854";
const phoneDisplay = "+44 7399 500429";
const phoneHref = "tel:+447399500429";
const emailAddress = "jasonlawrence439@gmail.com";

const img = (path: string) => `${basePath}${path}`;

const services = [
  {
    icon: Bath,
    title: "Bathrooms",
    intro: "Fitting, tiling, shower areas, flooring and finishing details for bathroom updates.",
    points: ["Refits and room updates", "Shower and bath areas", "Tiling and finishing"]
  },
  {
    icon: ChefHat,
    title: "Kitchens",
    intro: "Kitchen fitting and practical room improvements where tidy edges and careful sequencing matter.",
    points: ["Cabinet fitting support", "Surfaces and splashbacks", "Flooring and trim details"]
  },
  {
    icon: Hammer,
    title: "Renovation",
    intro: "Room renovation work for homeowners improving a lived-in space, not just swapping one item.",
    points: ["Strip-out and refresh work", "Layout improvements", "Finishing and handover"]
  },
  {
    icon: Wrench,
    title: "Maintenance",
    intro: "Smaller property jobs that need a capable fitter rather than a broad-brush contractor.",
    points: ["Repairs and adjustments", "Small room improvements", "General maintenance"]
  }
];

const workImages = [
  {
    src: "/images/completed-bathroom-reel-thumb.jpg",
    alt: "Completed bathroom with walk-in shower, wall tiling and wood-effect floor",
    label: "Finished bathroom"
  },
  {
    src: "/images/easy-bathrooms-display-thumb.jpg",
    alt: "Bathroom display tiling work in progress",
    label: "Tiling detail"
  },
  {
    src: "/images/bathroom-two-rooms.jpg",
    alt: "Finished bathroom shower area",
    label: "Room update"
  }
];

const steps = [
  "Choose the type of work and describe the room.",
  "Call, email, or send the enquiry form with photos and room details.",
  "Agree the practical details around materials, access and timing.",
  "Keep the finish tidy, usable and suited to the home."
];

const faqs = [
  {
    q: "What work does J.Lawrence Bathrooms and Kitchens take on?",
    a: "Bathrooms, kitchens, renovation work and general maintenance."
  },
  {
    q: "Where is the business based?",
    a: "J.Lawrence Bathrooms and Kitchens is based in Basildon."
  },
  {
    q: "Can I send photos of the room?",
    a: "Yes. Photos are useful for bathrooms, kitchens and maintenance jobs because they show access, condition and the level of finish needed."
  },
  {
    q: "Is there a phone number?",
    a: `Yes. Call ${phoneDisplay} or email ${emailAddress}.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "J.Lawrence Bathrooms and Kitchens",
  description:
    "Experienced kitchen and bathroom fitter in Basildon, also covering renovation and general maintenance work.",
  url: `${siteUrl}${basePath}/`,
  image: `${siteUrl}${basePath}/images/completed-bathroom-reel-thumb.jpg`,
  logo: `${siteUrl}${basePath}/images/j-lawrence-profile.jpg`,
  telephone: phoneDisplay,
  email: emailAddress,
  areaServed: {
    "@type": "City",
    name: "Basildon"
  },
  sameAs: [facebookUrl],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: `${service.title} fitting and maintenance`
    }
  }))
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/92 backdrop-blur-xl">
        <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-4">
          <a href="#top" className="brand-lockup" aria-label="J.Lawrence Bathrooms and Kitchens home">
            <img src={img("/images/j-lawrence-profile.jpg")} alt="" className="brand-lockup__mark" />
            <span className="brand-lockup__text">
              J.Lawrence
              <span>Bathrooms & Kitchens</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-graphite/78 md:flex">
            <a href="#services" className="hover:text-ink">
              Services
            </a>
            <a href="#work" className="hover:text-ink">
              Work
            </a>
            <a href="#enquiry" className="hover:text-ink">
              Enquiry
            </a>
            <a href="#faq" className="hover:text-ink">
              FAQ
            </a>
          </nav>
          <a href={phoneHref} className="button button--dark">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call now
          </a>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero__image" aria-hidden="true">
          <img src={img("/images/completed-bathroom-reel-thumb.jpg")} alt="" />
        </div>
        <div className="section-shell hero__content">
          <div className="max-w-3xl">
            <div className="hero-badge">
              <img src={img("/images/j-lawrence-profile.jpg")} alt="" />
              <span>J.Lawrence Bathrooms and Kitchens</span>
            </div>
            <p className="eyebrow text-basin">Basildon bathroom & kitchen fitter</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-black leading-[0.98] text-white sm:text-6xl lg:text-7xl">
              Bathroom and kitchen fitting in Basildon
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82">
              Experienced kitchen and bathroom fitter for refits, room updates, renovation and
              maintenance work around Basildon.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={phoneHref} className="button button--primary">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {phoneDisplay}
              </a>
              <a href="#enquiry" className="button button--ghost">
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                Request a quote
              </a>
            </div>
            <div className="hero-contact-strip" aria-label="Contact details">
              <a href={phoneHref}>
                <Phone aria-hidden="true" />
                {phoneDisplay}
              </a>
              <a href={`mailto:${emailAddress}`}>
                <Mail aria-hidden="true" />
                {emailAddress}
              </a>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
              {["Bathrooms", "Kitchens", "Renovation", "Maintenance"].map((item) => (
                <span key={item} className="hero-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside id="enquiry" className="hero-form-wrap" aria-label="Request a quote">
            <EnquiryForm emailAddress={emailAddress} phoneHref={phoneHref} phoneDisplay={phoneDisplay} />
          </aside>
        </div>
      </section>

      <section id="services" className="bg-white py-14 sm:py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Practical fitting work for the rooms that get used every day.
            </h2>
          </div>
          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <Icon className="h-8 w-8 text-basin" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.intro}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="py-14 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <p className="eyebrow">Bathroom work</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              See the kind of finish before you get in touch.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/76">
              A closer look at bathroom fitting, tiling and room-update details, so it is easier to
              explain what you want done at home.
            </p>
            <div className="mt-8 grid gap-3">
              {steps.map((step, index) => (
                <div key={step} className="step-row">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="work-grid">
            {workImages.map((image, index) => (
              <figure key={image.src} className={index === 0 ? "work-card work-card--large" : "work-card"}>
                <img src={img(image.src)} alt={image.alt} />
                <figcaption>
                  <Images className="h-4 w-4" aria-hidden="true" />
                  {image.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-14 sm:py-20">
        <div className="section-shell grid gap-9 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Useful details before you message.
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-[8px] border border-ink/10 bg-porcelain p-5 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-ink">
                  {faq.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slatewash text-ink transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl text-base leading-7 text-graphite/74">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-porcelain pb-12 pt-4">
        <div
          className="section-shell final-band"
          style={{ backgroundImage: `linear-gradient(90deg, rgba(16, 34, 49, 0.98), rgba(16, 34, 49, 0.78)), url(${img("/images/completed-bathroom-reel-thumb.jpg")})` }}
        >
          <div>
            <p className="text-sm font-extrabold uppercase text-basin">Ready to ask?</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-tight text-white sm:text-5xl">
              Call or email with the room, photos and what needs changing.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={phoneHref} className="button button--primary">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call now
            </a>
            <a href={`mailto:${emailAddress}`} className="button button--ghost">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email enquiry
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-porcelain py-8">
        <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="brand-lockup">
            <img src={img("/images/j-lawrence-profile.jpg")} alt="" className="brand-lockup__mark" />
            <span className="brand-lockup__text text-ink">
              J.Lawrence
              <span>Bathrooms & Kitchens, Basildon</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-graphite/70">
            <a href={phoneHref} className="hover:text-ink">
              {phoneDisplay}
            </a>
            <a href={`mailto:${emailAddress}`} className="hover:text-ink">
              Email
            </a>
            <a href="#services" className="hover:text-ink">
              Services
            </a>
            <a href="#enquiry" className="hover:text-ink">
              Enquiry
            </a>
            <a href={facebookUrl} className="inline-flex items-center gap-2 hover:text-ink">
              <Facebook className="h-4 w-4" aria-hidden="true" />
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
