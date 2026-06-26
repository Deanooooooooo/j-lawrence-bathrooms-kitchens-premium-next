"use client";

import { ArrowUpRight, Bath, ChefHat, Hammer, Phone, Wrench } from "lucide-react";
import { useMemo, useState } from "react";

const modes = [
  {
    key: "bathroom",
    label: "Bathroom",
    icon: Bath,
    headline: "Planning a bathroom refit or repair?",
    points: ["shower or bath area", "tiling and flooring", "suite changes", "current room photos"],
    subject: "Bathroom enquiry"
  },
  {
    key: "kitchen",
    label: "Kitchen",
    icon: ChefHat,
    headline: "Need help with kitchen fitting or finishing?",
    points: ["cabinets or surfaces", "splashback details", "flooring or trims", "appliance/access notes"],
    subject: "Kitchen enquiry"
  },
  {
    key: "renovation",
    label: "Renovation",
    icon: Hammer,
    headline: "Updating a room or changing the layout?",
    points: ["strip-out needed", "what stays", "finish level", "timing and access"],
    subject: "Renovation enquiry"
  },
  {
    key: "maintenance",
    label: "Maintenance",
    icon: Wrench,
    headline: "Got repairs or finishing jobs to sort?",
    points: ["repair list", "anything urgent", "photos if possible", "best contact time"],
    subject: "Maintenance enquiry"
  }
];

type QuoteFocusProps = {
  emailAddress: string;
  phoneHref: string;
};

export function QuoteFocus({ emailAddress, phoneHref }: QuoteFocusProps) {
  const [activeKey, setActiveKey] = useState(modes[0].key);
  const active = useMemo(() => modes.find((mode) => mode.key === activeKey) || modes[0], [activeKey]);
  const ActiveIcon = active.icon;
  const mailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(active.subject)}`;

  return (
    <section className="focus-panel" aria-label="Choose the type of quote request">
      <div className="focus-panel__copy">
        <p className="eyebrow">Choose the job type</p>
        <h2>Tell Jason what you need fitted, repaired or refreshed.</h2>
        <p>
          Pick the closest option, check the details that help, then call or send an enquiry with the basics.
        </p>
      </div>
      <div className="focus-panel__surface">
        <div className="focus-tabs" role="tablist" aria-label="Quote focus">
          {modes.map((mode) => {
            const Icon = mode.icon;
            const selected = mode.key === active.key;
            return (
              <button
                key={mode.key}
                type="button"
                className={selected ? "focus-tab is-active" : "focus-tab"}
                onClick={() => setActiveKey(mode.key)}
                aria-pressed={selected}
              >
                <Icon aria-hidden="true" />
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>
        <div className="focus-output">
          <div className="focus-output__icon">
            <ActiveIcon aria-hidden="true" />
          </div>
          <h3>{active.headline}</h3>
          <div className="focus-chips">
            {active.points.map((point) => (
              <span key={point}>{point}</span>
            ))}
          </div>
          <div className="focus-actions">
            <a href={mailHref}>
              <ArrowUpRight aria-hidden="true" />
              Ask about {active.label.toLowerCase()}
            </a>
            <a href={phoneHref}>
              <Phone aria-hidden="true" />
              Call first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
