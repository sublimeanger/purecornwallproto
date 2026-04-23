import heroHarbour from "@/assets/st-ives/hero-harbour.jpg";
import heroCornwall from "@/assets/hero-destinations-aerial.jpg";
import atmosHarbour from "@/assets/st-ives/atmos-harbour.jpg";
import atmosBeach from "@/assets/st-ives/atmos-beach.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

import type { HubRegionCard } from "@/components/hub/RegionCardsGrid";
import type { HubTown } from "@/components/hub/TownsDirectory";
import type { DestinationFAQ as FAQItem } from "@/data/stIvesData";

export interface DestinationsHubData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  compactIntro: string;
  regions: HubRegionCard[];
  towns: HubTown[];
  faqs: FAQItem[];
}

const propertyImages = [property1, property2, property3, property4, property5, property6];

// Deterministic pseudo-random helpers so renders are stable
const seedFor = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};
const cottageCountFor = (slug: string) => 1 + (seedFor(slug) % 12);
const priceFor = (slug: string) => 550 + ((seedFor(slug + "p") % 35) * 25); // 550..1400 in £25 steps
const imageFor = (slug: string) => propertyImages[seedFor(slug + "i") % propertyImages.length];

const PRIORITY = new Set(["st-ives", "padstow", "bude", "newquay"]);

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const makeTown = (name: string, region: HubTown["region"]): HubTown => {
  const slug = slugify(name);
  return {
    slug,
    name,
    region,
    image: imageFor(slug),
    cottageCount: cottageCountFor(slug),
    fromPrice: priceFor(slug),
    isPriority: PRIORITY.has(slug),
  };
};

const westNames = [
  "St Ives", "Carbis Bay", "Lelant", "Hayle", "Zennor", "Penzance", "Marazion",
  "Mousehole", "Sennen", "Land's End", "Porthcurno", "Porthleven", "Helston",
  "The Lizard", "Coverack", "Cadgwith", "Mullion", "Praa Sands", "St Just",
];
const northNames = [
  "Padstow", "Rock", "Trebetherick", "Polzeath", "Port Isaac", "Tintagel",
  "Boscastle", "Bude", "Crackington Haven", "Widemouth Bay", "Newquay",
  "Mawgan Porth", "Porth", "Watergate Bay", "Constantine Bay", "Harlyn",
  "Trevone", "Treyarnon", "Crantock", "Holywell Bay", "Perranporth", "St Agnes",
];
const southNames = [
  "Falmouth", "Mawnan Smith", "Mylor", "Helford", "Portscatho", "St Mawes",
  "Portloe", "Mevagissey", "Gorran Haven", "Fowey", "Polruan", "Polperro",
  "Looe", "Kingsand", "Cawsand",
];

const towns: HubTown[] = [
  ...westNames.map((n) => makeTown(n, "west")),
  ...northNames.map((n) => makeTown(n, "north")),
  ...southNames.map((n) => makeTown(n, "south")),
];

const regions: HubRegionCard[] = [
  {
    slug: "west-cornwall",
    shortName: "WEST",
    fullName: "West Cornwall",
    image: heroHarbour,
    townCount: 19,
    cottageCount: 36,
    fromPrice: 650,
    descriptor:
      "The far end of Cornwall — St Ives, Penzance, the Lizard. The light, the art, the Atlantic on both sides.",
    thumbnails: [property1, property2, property3],
  },
  {
    slug: "north-cornwall",
    shortName: "NORTH",
    fullName: "North Cornwall",
    image: atmosHarbour,
    townCount: 22,
    cottageCount: 48,
    fromPrice: 695,
    descriptor:
      "Surf, cliffs, and coastal paths. Padstow, Newquay, Bude — and the long wild coves between them.",
    thumbnails: [property4, property5, property6],
  },
  {
    slug: "south-cornwall",
    shortName: "SOUTH",
    fullName: "South Cornwall",
    image: atmosBeach,
    townCount: 15,
    cottageCount: 35,
    fromPrice: 720,
    descriptor:
      "The gentler side — estuaries, sheltered harbours, sub-tropical gardens. Fowey, Falmouth, the Helford.",
    thumbnails: [property1, property3, property5],
  },
];

const faqs: FAQItem[] = [
  {
    q: "What's the difference between West, North, and South Cornwall?",
    a: "West Cornwall is the far end — St Ives, Penzance, and the Lizard — known for its light and its artistic heritage. North Cornwall is the surf coast — Padstow, Newquay, Bude — rugged cliffs and Atlantic beaches. South Cornwall is gentler — estuaries, sub-tropical gardens, sheltered harbours around Fowey and Falmouth. Each has its own character; most people who visit one end up wanting to try the other.",
  },
  {
    q: "How do I choose which town to stay in?",
    a: "Start by deciding on the vibe — surf beaches, historic harbour, remote cove, market town. St Ives suits art and family beach holidays. Padstow for food. Bude for big-sky surf. Falmouth for sailing. Fowey for literary walks. Our destination pages cover what each place is like and what sets it apart.",
  },
  {
    q: "Which towns are best for families?",
    a: "Carbis Bay, Polzeath, Mawgan Porth, and Praa Sands all have wide safe beaches within walking distance of the cottages. St Ives and Padstow work well for slightly older kids (harbour towns with plenty to do). Crooklets and Widemouth at Bude are firm family favourites for the surf and rock pools.",
  },
  {
    q: "Are some Cornish towns better in winter than others?",
    a: "St Ives and Padstow keep their life year-round — art galleries, restaurants, quieter beaches. Penzance has the Scillonian to the Isles of Scilly. Falmouth's harbour front is atmospheric in winter rain. The smaller coves and fishing villages go quieter but can be magical for empty-beach walks.",
  },
  {
    q: "How far apart are the regions?",
    a: "End to end, Cornwall is about 80 miles. St Ives to Fowey is roughly 2 hours by car. West Cornwall is further from London (5h drive, 5.5h train) but has its own airport at Newquay. North and South Cornwall are more accessible from the M5.",
  },
  {
    q: "Do you cover any inland towns, or just the coast?",
    a: "Primarily coast — Cornwall's draw is its coastline, and that's where most of our cottages are. A handful of cottages sit in valleys or moorland just back from the coast (e.g. Zennor, St Agnes), but everywhere we cover is within 15 minutes of the sea.",
  },
];

export const destinationsHubData: DestinationsHubData = {
  hero: {
    image: heroCornwall,
    eyebrow: "DISCOVER",
    name: "Destinations",
    tagline: "From the light of St Ives to the surf of Newquay, the full Cornwall we cover",
    caption: "",
  },
  compactIntro:
    "Cornwall divides naturally into three. West Cornwall for the light, North Cornwall for the surf and the cliffs, South Cornwall for the estuaries and gardens. Fifty-six towns across the three. Every cottage we look after lives in one of them.",
  regions,
  towns,
  faqs,
};
