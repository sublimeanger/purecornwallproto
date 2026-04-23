import heroCornwall from "@/assets/destinations-hero-cornwall.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

import type { MockCottage } from "@/components/filters/types";
import type { DestinationFAQ as FAQItem } from "@/data/stIvesData";
import type { TrustStat } from "@/components/seo/TrustStrip";
import type { ReviewCard } from "@/components/seo/ReviewCards";

interface EditorialSubsection {
  heading: string;
  paragraphs: string[];
}

export interface HolidayCottagesData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  trustStats: TrustStat[];
  compactIntro: string;
  handpickedCottages: MockCottage[];
  totalCottages: number;
  longform: {
    eyebrow: string;
    heading: string;
    subsections: EditorialSubsection[];
  };
  reviews: ReviewCard[];
  faqs: FAQItem[];
}

const handpickedCottages: MockCottage[] = [
  // West (5)
  {
    id: "porthmeor-light",
    name: "Porthmeor Light",
    location: "St Ives",
    townSlug: "st-ives",
    region: "west-cornwall",
    pricePerWeek: 1495,
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: ["beachfront-waterfront", "near-coast-path", "log-burner-open-fire", "parking"],
    collections: ["sea-views", "romantic-retreats"],
    image: property1,
  },
  {
    id: "mermaid-cottage",
    name: "Mermaid Cottage",
    location: "Mousehole",
    townSlug: "mousehole",
    region: "west-cornwall",
    pricePerWeek: 895,
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    features: ["harbour-marina", "log-burner-open-fire", "wifi"],
    collections: ["romantic-retreats", "winter-breaks"],
    image: property2,
  },
  {
    id: "tinners-cottage",
    name: "Tinners' Cottage",
    location: "Zennor",
    townSlug: "zennor",
    region: "west-cornwall",
    pricePerWeek: 750,
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    features: ["rural-countryside", "log-burner-open-fire", "garden", "enclosed-garden"],
    collections: ["country-cottages", "dog-friendly"],
    image: property3,
  },
  {
    id: "the-salt-house",
    name: "The Salt House",
    location: "Penzance",
    townSlug: "penzance",
    region: "west-cornwall",
    pricePerWeek: 1295,
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ["town-setting", "hot-tub", "patio-decking", "parking"],
    collections: ["hot-tubs-pools", "large-holiday-homes"],
    image: property4,
  },
  {
    id: "cadgwith-catch",
    name: "Cadgwith Catch",
    location: "Cadgwith",
    townSlug: "cadgwith",
    region: "west-cornwall",
    pricePerWeek: 850,
    sleeps: 5,
    bedrooms: 3,
    bathrooms: 2,
    features: ["harbour-marina", "near-the-beach", "garden", "enclosed-garden"],
    collections: ["dog-friendly", "short-breaks"],
    image: property5,
  },
  // North (4)
  {
    id: "harbour-steps",
    name: "Harbour Steps",
    location: "Padstow",
    townSlug: "padstow",
    region: "north-cornwall",
    pricePerWeek: 1695,
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ["harbour-marina", "hot-tub", "enclosed-garden", "family-friendly"],
    collections: ["hot-tubs-pools", "large-holiday-homes"],
    image: property6,
  },
  {
    id: "fistral-lookout",
    name: "Fistral Lookout",
    location: "Newquay",
    townSlug: "newquay",
    region: "north-cornwall",
    pricePerWeek: 1195,
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: ["beachfront-waterfront", "surfing", "balcony", "parking"],
    collections: ["sea-views", "2026-collection"],
    image: property1,
  },
  {
    id: "polzeath-retreat",
    name: "Polzeath Retreat",
    location: "Polzeath",
    townSlug: "polzeath",
    region: "north-cornwall",
    pricePerWeek: 1395,
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ["near-the-beach", "surfing", "garden", "family-friendly"],
    collections: ["large-holiday-homes", "easter-breaks"],
    image: property2,
  },
  {
    id: "gull-rock",
    name: "Gull Rock",
    location: "Bude",
    townSlug: "bude",
    region: "north-cornwall",
    pricePerWeek: 695,
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 1,
    features: ["near-coast-path", "surfing", "log-burner-open-fire"],
    collections: ["short-breaks", "october-half-term"],
    image: property3,
  },
  // South (3)
  {
    id: "fowey-harbour-house",
    name: "Fowey Harbour House",
    location: "Fowey",
    townSlug: "fowey",
    region: "south-cornwall",
    pricePerWeek: 1595,
    sleeps: 8,
    bedrooms: 4,
    bathrooms: 3,
    features: ["harbour-marina", "balcony", "log-burner-open-fire", "parking"],
    collections: ["large-holiday-homes", "sea-views"],
    image: property4,
  },
  {
    id: "the-old-pilchard-store",
    name: "The Old Pilchard Store",
    location: "Helston",
    townSlug: "helston",
    region: "south-cornwall",
    pricePerWeek: 795,
    sleeps: 4,
    bedrooms: 2,
    bathrooms: 2,
    features: ["rural-countryside", "log-burner-open-fire", "garden", "enclosed-garden"],
    collections: ["country-cottages", "winter-breaks"],
    image: property5,
  },
  {
    id: "falmouth-captains",
    name: "Falmouth Captain's",
    location: "Falmouth",
    townSlug: "falmouth",
    region: "south-cornwall",
    pricePerWeek: 1095,
    sleeps: 6,
    bedrooms: 3,
    bathrooms: 2,
    features: ["town-setting", "harbour-marina", "patio-decking", "parking"],
    collections: ["sea-views", "2026-collection"],
    image: property6,
  },
];

export const holidayCottagesData: HolidayCottagesData = {
  hero: {
    image: heroCornwall,
    eyebrow: "HANDPICKED CORNWALL",
    name: "Cornwall Holiday Cottages",
    tagline:
      "One hundred and nineteen handpicked Cornish cottages across the three Cornwalls — each one personally visited, curated, and cared for",
    caption: "Placeholder imagery — to be replaced with commissioned Cornwall photography",
  },
  trustStats: [
    { value: "119", label: "Cornish Cottages" },
    { value: "3", label: "Regions Covered", subtext: "West · North · South" },
    { value: "20+", label: "Years Curating Cornwall" },
    { value: "4.9", label: "Guest Rating", hasStar: true, subtext: "4,200+ reviews" },
  ],
  compactIntro:
    "One hundred and nineteen holiday cottages across Cornwall. Every one personally visited, every one curated. We've been doing this for over twenty years, and we've spent the time that takes to know which cottages genuinely work. What follows is our full selection — broken into three regions, twelve collections, and one simple question: what kind of Cornish holiday are you after?",
  handpickedCottages,
  totalCottages: 119,
  longform: {
    eyebrow: "CORNWALL, OUR HOME",
    heading: "WHY WE CHOSE CORNWALL",
    subsections: [
      {
        heading: "There's Nowhere Else Like It",
        paragraphs: [
          "Cornwall is where England runs out. Three hundred miles of coast on a piece of land you can cross in an hour and a half. It's the reason we started Pure Cornwall twenty years ago — you can go to **Penzance** in the morning, **Padstow** at lunchtime, and **Fowey** by dinner, and each of them will feel like a different country. The cottages we look after sit in all three.",
          "What keeps visitors coming back is not any single thing. It's the **cumulative oddness** of it all — granite walls and sub-tropical gardens, Atlantic surf and sheltered estuaries, pasties and Michelin restaurants, serious fishing harbours and remote clifftop villages. Cornwall rewards every kind of holiday, and the cottages we've curated reflect that breadth.",
        ],
      },
      {
        heading: "When To Come",
        paragraphs: [
          "People assume Cornwall is a summer place. It is — but **summer is the hardest time**. Roads fill, beaches get busy, and the cottages book out twelve months ahead. What works better for many of our guests is shoulder season.",
          "**May has the clearest light**, **September has the warmest sea**, and **October half term has the emptiest beaches**. Winter has its own magic — wood burners, storm watching, empty coastal paths. Every one of the cottages on our books is heated properly and works year-round. The late-deal and winter-break collections surface the cottages that keep their character in the off-season.",
          "For Christmas and New Year, we recommend booking by September. Those cottages go fast. Easter and October half term sell out by February. Beyond those peaks, Cornwall is reliably available, reliably beautiful, and reliably rewarding.",
        ],
      },
      {
        heading: "How We Select Our Cottages",
        paragraphs: [
          "We don't list properties sight unseen. Every cottage on our books has been personally visited by one of our team, often multiple times. We stay in them, test the beds, check the heating, taste the welcome hamper. If we wouldn't happily spend a week there ourselves, it doesn't make the collection.",
          "That means **we turn properties down**. A cottage with poor soundproofing, a bathroom that hasn't been updated since 2005, or a garden that faces a motorway — we won't take them on. What we want in our collection is cottages where the owner cares about the experience as much as they care about the income.",
          "The result is 119 cottages across 56 Cornish towns that we genuinely stand behind. If something goes wrong during your stay, a real person in our office picks up the phone — not a call centre. If you come back, you'll be recognised. That's how we've run this for two decades, and it's how we'll run it for the next two.",
        ],
      },
    ],
  },
  reviews: [
    {
      quote:
        "Third year running at Porthmeor Light. The cottage gets better every visit. St Ives light is still the reason we come to Cornwall — Pure Cornwall are the reason we keep coming back.",
      guestName: "Sarah & James H.",
      context: "Stayed at Porthmeor Light, St Ives · June 2025",
      stars: 5,
    },
    {
      quote:
        "Booked a week in Padstow with three generations and a dog. Everything was exactly as described — secure garden, proper wood burner, welcome hamper. Real voice on the phone when we needed it. Can't ask for more.",
      guestName: "The Matthews Family",
      context: "Stayed at Harbour Steps, Padstow · October 2024",
      stars: 5,
    },
    {
      quote:
        "Winter break in a country cottage inland from Falmouth. Log fire, silent lane, walks from the door. Booked on a Tuesday, arrived on Friday. Perfect and uncomplicated — which is rarer than it should be in this industry.",
      guestName: "Michael K.",
      context: "Stayed at The Old Pilchard Store, Helston · February 2025",
      stars: 5,
    },
  ],
  faqs: [
    {
      q: "Where in Cornwall should I stay for a holiday cottage?",
      a: "Depends on the holiday you want. For classic Cornish character — harbours, fishing villages, painterly light — West Cornwall (St Ives, Penzance, Mousehole) is the answer. For surf, big beaches, and the Atlantic drama — North Cornwall (Padstow, Bude, Newquay, Polzeath). For gentler estuaries, sub-tropical gardens, and sheltered sailing — South Cornwall (Falmouth, Fowey, the Helford). Our region pages cover each in detail.",
    },
    {
      q: "Can I book a holiday cottage in Cornwall for just a few nights?",
      a: "Yes — our Short Breaks collection has 24 cottages available for 3 and 4-night mid-week and weekend breaks outside peak summer. In high season (July–August) most cottages require a full week; in shoulder and winter seasons, shorter stays are widely available.",
    },
    {
      q: "Are Cornwall holiday cottages dog friendly?",
      a: "Many are — we have a dedicated Dog Friendly collection of 75 cottages with owner-approved pet policies, secure gardens, tough-wearing floors, and walks from the door. Typical fees are £25-£50 per dog per stay, included in cottage detail pages. Some cottages welcome more than one dog.",
    },
    {
      q: "What about holiday cottages with hot tubs in Cornwall?",
      a: "Our Hot Tubs & Pools collection has around 35 cottages ranging from outdoor garden hot tubs to indoor poolside properties. Most are heated year-round; we flag any that are seasonal. The private pool cottages are a smaller subset (6) and the most premium of our hot-tub collection.",
    },
    {
      q: "What's the cancellation policy for Cornwall holiday cottages?",
      a: "Standard policy across the collection: full refund if cancelled 60+ days before arrival. Partial refund on a sliding scale for cancellations between 14-59 days. Within 14 days, travel insurance becomes the refund mechanism — we strongly recommend taking a policy that covers the holiday value. Specific dates and terms are shown on every cottage booking page.",
    },
    {
      q: "When's the best time to visit Cornwall?",
      a: "September gets our vote — summer light lingers, the sea stays swimmable from August, crowds thin out, and mid-week prices drop. May and early June are also excellent. Peak season (mid-July to late-August) is beautiful but busy and most expensive. October half term has emptier beaches and still-warm water. Winter works for cottages with wood burners — our Winter Breaks collection surfaces those.",
    },
    {
      q: "Do Cornwall holiday cottages include parking, WiFi, and linen?",
      a: "Yes — parking, WiFi, and linen/towels are standard across our collection. We drop any cottage that doesn't meet these basics. EV charging is available at 20 cottages (see EV Charging filter in the sidebar). Parking is on-site or within short walking distance for every cottage.",
    },
    {
      q: "How far in advance should I book a Cornwall holiday cottage?",
      a: "For Christmas / New Year: book by September. For Easter and October half term: book by January/February. For peak summer (mid-July to late-August): book 4-6 months ahead. For everything else, you have more flexibility — our late-deal collection surfaces cottages available within the next 6 weeks.",
    },
  ],
};
