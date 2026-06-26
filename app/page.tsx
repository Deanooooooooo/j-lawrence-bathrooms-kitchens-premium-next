import {
  ArrowRight,
  Bath,
  ClipboardList,
  Facebook,
  Home,
  Mail,
  MessageSquareText,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench
} from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://deanooooooooo.github.io";
const facebookUrl = "https://www.facebook.com/profile.php?id=100089767462854";

const img = (path: string) => `${basePath}${path}`;

const services = [
  {
    icon: Bath,
    title: "Bathroom fitting",
    copy: "Shower areas, tiling, fixtures, finishing details and layout improvements for bathrooms that need careful fitting."
  },
  {
    icon: Home,
    title: "Kitchen fitting",
    copy: "Kitchen installation support for cabinets, surfaces, tiling details and practical room updates."
  },
  {
    icon: Paintbrush,
    title: "Renovation work",
    copy: "Room refreshes and renovation tasks where the finish, sequence and trade coordination all matter."
  },
  {
    icon: Wrench,
    title: "General maintenance",
    copy: "Smaller property jobs and repairs that need a tidy, capable fitter rather than a one-size-fits-all contractor."
  }
];

const approach = [
  "Understand the room, measurements and the finish you want.",
  "Plan the fitting sequence around access, materials and disruption.",
  "Carry out the work with clean edges, tidy details and practical communication.",
  "Walk through the finished space and note any final items."
];

const plannerItems = [
  "Bathroom refit",
  "Kitchen fitting",
  "Tiling or finishing",
  "Small renovation",
  "General maintenance",
  "Not sure yet"
];

const faqs = [
  {
    q: "What areas does J.Lawrence Bathrooms and Kitchens cover?",
    a: "The business is listed in Basildon. For nearby Essex areas, use the enquiry form or Facebook link to check fit and availability."
  },
  {
    q: "Can I send photos of the room?",
    a: "Yes. A useful first enquiry usually includes the room type, rough location, timeline and a short description of what needs changing. Photo upload can be connected when the form endpoint is configured."
  },
  {
    q: "Can I see previous work?",
    a: "A small set of project visuals is included here. More updates can be viewed through the Facebook page."
  },
  {
    q: "Is the enquiry form ready to send emails?",
    a: "The form layout is ready. A business email address or form endpoint still needs connecting before live enquiries can be received."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "J.Lawrence Bathrooms and Kitchens",
  description:
    "Experienced kitchen and bathroom fitter in Basildon, also covering renovation and general maintenance work.",
  url: `${siteUrl}${basePath}/`,
  image: `${siteUrl}${basePath}/images/j-lawrence-profile.jpg`,
  areaServed: {
    "@type": "City",
    name: "Basildon"
  },
  sameAs: [facebookUrl],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title
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

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/88 backdrop-blur-xl">
        <div className="section-shell flex h-[var(--header-height)] items-center justify-between gap-4">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="J.Lawrence home">
            <img
              src={img("/images/j-lawrence-profile.jpg")}
              alt=""
              className="h-11 w-11 rounded-lg border border-ink/10 bg-white object-cover"
            />
            <span className="hidden font-display text-[1.02rem] font-extrabold leading-tight text-ink sm:block">
              J.Lawrence
              <span className="block text-sm font-semibold text-graphite/70">Bathrooms & Kitchens</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-bold text-graphite/78 md:flex">
            <a href="#services" className="hover:text-ink">
              Services
            </a>
            <a href="#approach" className="hover:text-ink">
              Approach
            </a>
            <a href="#planner" className="hover:text-ink">
              Planner
            </a>
            <a href="#faq" className="hover:text-ink">
              FAQ
            </a>
          </nav>
          <a
            href={facebookUrl}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-ink px-4 text-sm font-extrabold text-white shadow-crisp transition hover:-translate-y-0.5 hover:bg-graphite"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            Facebook
          </a>
        </div>
      </header>

      <section id="top" className="relative pb-16 pt-10 sm:pb-24 lg:pt-16">
        <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="reveal-card opacity-0">
            <p className="eyebrow">Basildon bathroom & kitchen fitter</p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl font-black leading-[0.98] text-ink sm:text-6xl lg:text-7xl">
              J.Lawrence Bathrooms and Kitchens in Basildon
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/80">
              Experienced kitchen and bathroom fitting, renovation and general maintenance work,
              with a simple enquiry flow for homeowners planning their next room update.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {["Bathrooms", "Kitchens", "Renovations", "Maintenance"].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-ink/10 bg-white/80 px-3 py-2 text-sm font-extrabold text-graphite shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="tile-grid rounded-lg border border-ink/10 p-4">
                <p className="text-2xl font-black text-ink">Basildon</p>
                <p className="mt-1 text-sm font-semibold text-graphite/66">Listed location</p>
              </div>
              <div className="tile-grid rounded-lg border border-ink/10 p-4">
                <p className="text-2xl font-black text-ink">4</p>
                <p className="mt-1 text-sm font-semibold text-graphite/66">Core service types</p>
              </div>
              <div className="tile-grid col-span-2 rounded-lg border border-ink/10 p-4 sm:col-span-1">
                <Facebook className="h-7 w-7 text-ink" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-graphite/66">Business profile</p>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[8px] p-4 sm:p-6 lg:p-7">
            <div className="rounded-[8px] bg-ink p-5 text-white sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-extrabold uppercase text-basin">Start the quote conversation</p>
                  <h2 className="mt-2 font-display text-3xl font-black leading-tight">
                    Bathroom or kitchen enquiry
                  </h2>
                </div>
                <Mail className="h-8 w-8 text-basin" aria-hidden="true" />
              </div>
              <p className="mt-4 text-sm leading-6 text-white/72">
                Share the room, rough location and what you want changed. The more specific the
                first message, the easier it is to assess the job.
              </p>
            </div>

            <form id="enquiry" className="mt-6 grid gap-4" action="#enquiry" method="post">
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span className="label">Your name</span>
                  <input className="field" name="name" type="text" autoComplete="name" required />
                </label>
                <label>
                  <span className="label">Email address</span>
                  <input className="field" name="email" type="email" autoComplete="email" required />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label>
                  <span className="label">Project type</span>
                  <select className="field" name="projectType" defaultValue="Bathroom fitting">
                    <option>Bathroom fitting</option>
                    <option>Kitchen fitting</option>
                    <option>Renovation</option>
                    <option>General maintenance</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label>
                  <span className="label">Location</span>
                  <input className="field" name="location" type="text" placeholder="Basildon / nearby" />
                </label>
              </div>
              <label>
                <span className="label">Tell us about the room</span>
                <textarea
                  className="field min-h-32 resize-y"
                  name="message"
                  placeholder="Room size, current condition, ideal finish, timeline, access notes..."
                  required
                />
              </label>
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <p className="text-xs font-semibold leading-5 text-graphite/65">
                  Demo form: connect a business email or Formspree endpoint before using live.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-basin px-5 text-sm font-black text-ink shadow-crisp transition hover:-translate-y-0.5 hover:bg-[#55d2e5]"
                >
                  Prepare enquiry
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-16 sm:py-24">
        <div className="section-shell">
          <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="eyebrow">Services</p>
              <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
                Practical fitting work for the rooms people use every day.
              </h2>
            </div>
            <p className="text-lg leading-8 text-graphite/76">
              The focus is straightforward: bathrooms, kitchens, renovation work and general
              maintenance, described clearly so the first enquiry starts in the right place.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-[8px] border border-ink/10 bg-porcelain p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-crisp"
                >
                  <Icon className="h-8 w-8 text-basin" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-black text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-graphite/72">{service.copy}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="approach" className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-[8px] border border-ink/10 bg-white shadow-soft">
              <img
                src={img("/images/completed-bathroom-reel-thumb.jpg")}
                alt="Completed bathroom with walk-in shower, tiling and wood-effect floor"
                className="aspect-[3/4] h-full w-full object-cover"
              />
            </figure>
            <div className="grid gap-4">
              <figure className="overflow-hidden rounded-[8px] border border-ink/10 bg-white shadow-crisp">
                <img
                  src={img("/images/easy-bathrooms-display-thumb.jpg")}
                  alt="Bathroom display tiling work in progress"
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </figure>
              <figure className="overflow-hidden rounded-[8px] border border-ink/10 bg-white p-3 shadow-sm">
                <img
                  src={img("/images/bathroom-two-rooms.jpg")}
                  alt="Finished bathroom shower area"
                  className="mx-auto aspect-[9/16] max-h-64 rounded-[6px] object-cover"
                />
              </figure>
            </div>
          </div>
          <div>
            <p className="eyebrow">Approach</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              A clearer first enquiry makes the fitting work easier to plan.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/76">
              Use the form to describe the room and the outcome you want. From there, the work can
              be scoped around materials, access, timing and the details that affect the finish.
            </p>
            <div className="mt-8 grid gap-3">
              {approach.map((item, index) => (
                <div key={item} className="flex gap-4 rounded-[8px] border border-ink/10 bg-white p-4 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-ink text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-base font-semibold leading-6 text-graphite/78">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-basin">Why start here</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight sm:text-5xl">
              Send a better brief before anyone visits the room.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              A clear first message helps set expectations around the room, finish, timing and
              practical details before the job is discussed in depth.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [ClipboardList, "Structured enquiry", "Room type, location, timeline and notes in one place."],
              [Ruler, "Useful project context", "Prompts for the details that affect scope and finish."],
              [ShieldCheck, "Straightforward scope", "Bathroom, kitchen, renovation and maintenance enquiries."]
            ].map(([Icon, title, copy]) => {
              const TrustIcon = Icon as typeof ClipboardList;
              return (
                <article key={title as string} className="rounded-[8px] border border-white/12 bg-white/8 p-5">
                  <TrustIcon className="h-7 w-7 text-basin" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-black">{title as string}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{copy as string}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="planner" className="bg-white py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Project enquiry planner</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Shape the message before you press send.
            </h2>
            <p className="mt-5 text-lg leading-8 text-graphite/76">
              Pick the work type, then include a few practical details: measurements if you have
              them, whether materials are chosen, and any access or timing constraints.
            </p>
          </div>
          <div className="rounded-[8px] border border-ink/10 bg-porcelain p-5 shadow-soft sm:p-7">
            <div className="grid gap-3 sm:grid-cols-2">
              {plannerItems.map((item) => (
                <label
                  key={item}
                  className="flex cursor-pointer items-center gap-3 rounded-[8px] border border-ink/10 bg-white p-4 font-bold text-graphite shadow-sm"
                >
                  <input type="checkbox" className="h-5 w-5 accent-basin" />
                  {item}
                </label>
              ))}
            </div>
            <div className="mt-6 rounded-[8px] bg-white p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-1 h-5 w-5 shrink-0 text-basin" aria-hidden="true" />
                <p className="text-sm font-semibold leading-6 text-graphite/75">
                  Helpful enquiry format: room type, current issue, desired finish, rough location,
                  preferred timing and whether you already have materials or photos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 font-display text-4xl font-black leading-tight text-ink sm:text-5xl">
              Clear answers, no filler.
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-[8px] border border-ink/10 bg-white p-5 shadow-sm">
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

      <section className="bg-white pb-12">
        <div className="section-shell overflow-hidden rounded-[8px] bg-ink text-white shadow-soft">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-sm font-extrabold uppercase text-basin">Ready to brief the job?</p>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-black leading-tight sm:text-5xl">
                Start with the room, the finish and the practical details.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquiry"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-basin px-5 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-[#55d2e5]"
                >
                  <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                  Open enquiry form
                </a>
                <a
                  href={facebookUrl}
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                  Visit Facebook
                </a>
              </div>
            </div>
            <div className="min-h-80">
              <img
                src={img("/images/completed-bathroom-reel-thumb.jpg")}
                alt="Completed bathroom with walk-in shower"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-ink/10 bg-porcelain py-8">
        <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <img
              src={img("/images/j-lawrence-profile.jpg")}
              alt=""
              className="h-10 w-10 rounded-lg border border-ink/10 bg-white object-cover"
            />
            <div>
              <p className="font-black text-ink">J.Lawrence Bathrooms and Kitchens</p>
              <p className="text-sm font-semibold text-graphite/62">Bathroom and kitchen fitting in Basildon</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-graphite/70">
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
