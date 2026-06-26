"use client";

import { useMemo, useState } from "react";
import { Check, Mail, Phone } from "lucide-react";

const options = [
  {
    label: "Bathroom",
    hint: "Example: shower area, tiling, vanity, flooring, leak, layout or full refit."
  },
  {
    label: "Kitchen",
    hint: "Example: cabinets, worktops, splashback, flooring, appliances or finishing work."
  },
  {
    label: "Renovation",
    hint: "Example: what is being stripped out, what is staying and the finish you want."
  },
  {
    label: "Maintenance",
    hint: "Example: list the jobs, what needs repairing and anything urgent."
  }
];

type EnquiryFormProps = {
  emailAddress: string;
  phoneHref: string;
  phoneDisplay: string;
};

export function EnquiryForm({ emailAddress, phoneHref, phoneDisplay }: EnquiryFormProps) {
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

  function sendEnquiry() {
    const subject = encodeURIComponent(`${selected.label} enquiry`);
    const body = encodeURIComponent(preview);
    setSent(true);
    window.setTimeout(() => setSent(false), 1800);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  }

  return (
    <form id="enquiry" className="quote-panel" onSubmit={(event) => event.preventDefault()}>
      <div className="quote-panel__top">
        <div className="quote-panel__brand">
          <Mail aria-hidden="true" />
          <span>Fast quote request</span>
        </div>
        <h3>Tell Jason what needs doing.</h3>
        <p>Leave the basics here, or call now if it is easier to explain.</p>
        <a className="quote-panel__phone" href={phoneHref}>
          <Phone aria-hidden="true" />
          {phoneDisplay}
        </a>
      </div>

      <div className="service-switch" role="tablist" aria-label="Choose enquiry type">
        {options.map((option) => {
          const active = option.label === selected.label;
          return (
            <button
              key={option.label}
              type="button"
              className={active ? "service-switch__item is-active" : "service-switch__item"}
              onClick={() => setSelected(option)}
              aria-pressed={active}
            >
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
          <span>When</span>
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
          {sent ? <Check aria-hidden="true" /> : <Mail aria-hidden="true" />}
          {sent ? "Opening email" : "Send enquiry"}
        </button>
        <a className="button button--outline" href={phoneHref}>
          <Phone aria-hidden="true" />
          Call Jason
        </a>
      </div>
    </form>
  );
}
