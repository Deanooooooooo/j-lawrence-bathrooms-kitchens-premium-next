"use client";

import { useMemo, useState } from "react";
import { Bath, Check, ChefHat, Facebook, Hammer, MessageSquareText, Wrench } from "lucide-react";

const options = [
  {
    label: "Bathroom",
    icon: Bath,
    hint: "Example: shower area, tiling, vanity, flooring, leak, layout or full refit."
  },
  {
    label: "Kitchen",
    icon: ChefHat,
    hint: "Example: cabinets, worktops, splashback, flooring, appliances or finishing work."
  },
  {
    label: "Renovation",
    icon: Hammer,
    hint: "Example: what is being stripped out, what is staying and the finish you want."
  },
  {
    label: "Maintenance",
    icon: Wrench,
    hint: "Example: list the jobs, what needs repairing and anything urgent."
  }
];

type EnquiryFormProps = {
  facebookUrl: string;
};

export function EnquiryForm({ facebookUrl }: EnquiryFormProps) {
  const [selected, setSelected] = useState(options[0]);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [area, setArea] = useState("");
  const [timing, setTiming] = useState("");
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  const preview = useMemo(
    () =>
      [
        `Enquiry type: ${selected.label}`,
        `Name: ${name || "[your name]"}`,
        `Contact: ${contact || "[phone or email]"}`,
        `Area: ${area || "[Basildon / nearby]"}`,
        `Timing: ${timing || "[ASAP / this month / flexible]"}`,
        "",
        "Job details:",
        details || selected.hint,
        "",
        "I can send photos of the room if helpful."
      ].join("\n"),
    [area, contact, details, name, selected, timing]
  );

  async function sendEnquiry() {
    try {
      await navigator.clipboard.writeText(preview);
      setSent(true);
      window.setTimeout(() => setSent(false), 1800);
    } catch {
      setSent(false);
    }
    window.open(facebookUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="quote-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="quote-panel__top">
        <div className="quote-panel__brand">
          <MessageSquareText aria-hidden="true" />
          <span>Request a quote</span>
        </div>
        <h3>Tell us what room needs work</h3>
        <p>
          Add a few details and the best way to reach you. Photos can be sent afterwards if needed.
        </p>
      </div>

      <div className="service-switch" role="tablist" aria-label="Choose enquiry type">
        {options.map((option) => {
          const Icon = option.icon;
          const active = option.label === selected.label;
          return (
            <button
              key={option.label}
              type="button"
              className={active ? "service-switch__item is-active" : "service-switch__item"}
              onClick={() => setSelected(option)}
              aria-pressed={active}
            >
              <Icon aria-hidden="true" />
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>

      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" />
        </label>
        <label>
          <span>Phone or email</span>
          <input
            value={contact}
            onChange={(event) => setContact(event.target.value)}
            placeholder="Best contact"
            autoComplete="tel"
          />
        </label>
        <label className="form-grid__wide">
          <span>Area</span>
          <input
            value={area}
            onChange={(event) => setArea(event.target.value)}
            placeholder="Basildon / nearby"
          />
        </label>
        <label className="form-grid__wide">
          <span>Timing</span>
          <input
            value={timing}
            onChange={(event) => setTiming(event.target.value)}
            placeholder="ASAP / this month / flexible"
          />
        </label>
        <label className="form-grid__wide">
          <span>{selected.label} details</span>
          <textarea
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder={selected.hint}
          />
        </label>
      </div>

      <div className="quote-panel__actions">
        <button className="button button--primary" type="button" onClick={sendEnquiry}>
          {sent ? <Check aria-hidden="true" /> : <MessageSquareText aria-hidden="true" />}
          {sent ? "Details copied" : "Send enquiry"}
        </button>
        <a className="button button--outline" href={facebookUrl} target="_blank" rel="noreferrer">
          <Facebook aria-hidden="true" />
          Facebook
        </a>
      </div>
    </form>
  );
}
