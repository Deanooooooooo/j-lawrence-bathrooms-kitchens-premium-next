"use client";

import { useMemo, useState } from "react";
import { Bath, Check, ChefHat, Clipboard, Facebook, Hammer, Wrench } from "lucide-react";

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
  const [location, setLocation] = useState("");
  const [timing, setTiming] = useState("");
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const preview = useMemo(
    () =>
      [
        `Enquiry type: ${selected.label}`,
        `Name: ${name || "[your name]"}`,
        `Location: ${location || "[Basildon / nearby]"}`,
        `Timing: ${timing || "[ASAP / this month / flexible]"}`,
        "",
        "Job details:",
        details || selected.hint,
        "",
        "I can send photos of the room if helpful."
      ].join("\n"),
    [details, location, name, selected, timing]
  );

  async function copyPreview() {
    try {
      await navigator.clipboard.writeText(preview);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <form className="quote-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="quote-panel__top">
        <div className="quote-panel__brand">
          <Facebook aria-hidden="true" />
          <span>Job enquiry</span>
        </div>
        <h3>Tell J.Lawrence what needs fitting or fixing</h3>
        <p>
          Pick the job type, add the essentials and send the details through Facebook.
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
          <span>Location</span>
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
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

      <div className="message-preview" aria-live="polite">
        <pre>{preview}</pre>
      </div>

      <div className="quote-panel__actions">
        <button className="button button--primary" type="button" onClick={copyPreview}>
          {copied ? <Check aria-hidden="true" /> : <Clipboard aria-hidden="true" />}
          {copied ? "Copied" : "Copy details"}
        </button>
        <a className="button button--outline" href={facebookUrl} target="_blank" rel="noreferrer">
          <Facebook aria-hidden="true" />
          Open Facebook
        </a>
      </div>
    </form>
  );
}
