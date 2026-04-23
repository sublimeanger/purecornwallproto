import heroCornwall from "@/assets/hero-contact-coastguard.jpg";
import type { ContactMethod } from "@/components/contact/ContactMethodsGrid";

export interface ContactData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  compactIntro: string;
  methods: ContactMethod[];
}

export const contactData: ContactData = {
  hero: {
    image: heroCornwall,
    eyebrow: "GET IN TOUCH",
    name: "Contact Us",
    tagline:
      "A small team answering the phone ourselves. No call centres, no ticketing systems.",
    caption: "",
  },
  compactIntro:
    "Phone, email, form, or post — whichever suits you. We're a small Cornwall-based team and we answer queries ourselves, usually within a working day. For urgent booking issues we're quicker.",
  methods: [
    {
      icon: "phone",
      eyebrow: "PHONE",
      value: "+44 (0)1736 123 456",
      context: "Monday–Friday, 9am–5:30pm. For urgent bookings, always answered.",
      href: "tel:+441736123456",
    },
    {
      icon: "mail",
      eyebrow: "EMAIL",
      value: "info@purecornwall.co.uk",
      context:
        "Goes directly to our small team — no ticketing system. Response within one working day.",
      href: "mailto:info@purecornwall.co.uk",
    },
    {
      icon: "message-square",
      eyebrow: "CONTACT FORM",
      value: "Use the form below",
      context: "For longer enquiries, the form helps us route you to the right team member.",
      href: "#contact-form",
    },
    {
      icon: "map-pin",
      eyebrow: "WRITE TO US",
      value: "The Old Coastguard Office",
      context: "Market Street, Penzance, Cornwall TR18 2AX",
    },
  ],
};
