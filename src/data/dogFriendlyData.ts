import type { SidebarFeatureKey, TopBarCollection, RegionKey, MockCottage } from "@/components/filters/types";

// Reuse existing Cornwall imagery for demo (will be swapped for commissioned photography)
import dogFriendlyHero from "@/assets/dog-friendly-hero-cornwall.jpg";
import heroHarbour from "@/assets/st-ives/hero-harbour.jpg";
import atmosHarbour from "@/assets/st-ives/atmos-harbour.jpg";
import atmosBeach from "@/assets/st-ives/atmos-beach.jpg";
import atmosLane from "@/assets/st-ives/atmos-lane.jpg";
import tdBeach from "@/assets/st-ives/td-porthmeor.jpg";
import tdCoastpath from "@/assets/st-ives/td-coastpath.jpg";

import collDogs from "@/assets/coll-dogs.jpg";
import collGuide from "@/assets/coll-guide.jpg";
import collSurfing from "@/assets/coll-surfing.jpg";
import collFamily from "@/assets/coll-family.jpg";

import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export interface CollectionDestinationItem {
  slug: string;
  name: string;
  image: string;
  count: number;
  fromPrice: number;
}

export interface CollectionRelatedItem {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CollectionStat {
  value: string;
  label: string;
}

export interface CollectionFAQ {
  q: string;
  a: string;
}

export interface CollectionPin {
  n: number;
  name: string;
  description: string;
}

export interface CollectionData {
  // Required
  slug: string;
  name: string;
  filterKey: string;
  hero: { image: string; eyebrow: string; tagline: string; caption: string };
  compactIntro: string;
  cottagesIntro: { eyebrow: string; leadIn: string; totalCount: number };
  destinationsGrid: { items: CollectionDestinationItem[] };
  related: { items: CollectionRelatedItem[] };
  faqs: CollectionFAQ[];

  // Optional (graceful degradation)
  stats?: CollectionStat[];
  map?: { imageUrl: string; caption: string; pins: CollectionPin[] };
  editorial?: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    pullQuote?: string;
  };
  atmosphere?: { images: { src: string; alt: string }[]; caption: string };
}

const PLACEHOLDER_CAPTION = "";

// ---- Mock cottages for Dog Friendly --------------------------------------

const COTTAGE_IMAGES = [property1, property2, property3, property4, property5, property6];

const DOG_COTTAGE_NAMES = [
  "Wagtail Cottage", "The Boot Room", "Salt & Sand", "Paws Retreat",
  "Coast Path House", "Driftwood Barn", "The Old Kennels", "Beachcomber",
  "Harbour Hound", "Wet Nose Cottage", "Saltwater Lodge", "The Fetch",
  "Wagtail Loft", "Coastguard's Rest", "Garden Gate Cottage", "Heather House",
  "The Walking Door", "Sandfoot Cottage", "Burrow & Bay", "Tide & Tail",
  "The Lookout", "Lichen Cottage", "Beach Hut House", "The Whistle",
  "Mariner's Walk", "Cobb Cottage", "Saltmarsh House", "Foxglove Barn",
  "The Wet Welly", "Pebble Cove", "Hayloft Hideaway", "The Burrow",
  "Coastline Cottage", "Tideline House", "The Stable Block", "Cwm Cottage",
  "Heron Hide", "Atlantic Lodge", "The Old Kennel", "Rockpool Cottage",
  "Driftwood Lodge", "The Coast Path",
];

const DOG_LOCATIONS: { name: string; slug: string; region: RegionKey }[] = [
  { name: "St Ives", slug: "st-ives", region: "west-cornwall" },
  { name: "Padstow", slug: "padstow", region: "north-cornwall" },
  { name: "Falmouth", slug: "falmouth", region: "south-cornwall" },
  { name: "Fowey", slug: "fowey", region: "south-cornwall" },
  { name: "Bude", slug: "bude", region: "north-cornwall" },
  { name: "Newquay", slug: "newquay", region: "north-cornwall" },
];

// Sidebar feature pool — top-bar collections (dog-friendly, sea-views, etc.) sit
// in the cottage's `collections` array, not in `features`.
const SIDEBAR_FEATURE_POOL: SidebarFeatureKey[] = [
  "near-the-beach",
  "near-coast-path",
  "rural-countryside",
  "village-setting",
  "hot-tub",
  "garden",
  "enclosed-garden",
  "patio-decking",
  "log-burner-open-fire",
  "dishwasher",
  "family-friendly",
  "walking-coast-path",
  "parking",
  "ev-charging",
  "wifi",
  "washing-machine",
  "tumble-dryer",
];

const rng = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

export const generateDogFriendlyCottages = (): MockCottage[] => {
  const r = rng(2042);
  return DOG_COTTAGE_NAMES.map((name, i) => {
    const sleeps = 2 + Math.floor(r() * 9);
    const bedrooms = Math.max(1, Math.min(8, Math.round(sleeps / 2 + (r() - 0.5))));
    const bathrooms = Math.max(1, Math.min(6, Math.round(bedrooms / 2 + (r() < 0.4 ? 1 : 0))));
    const price = Math.floor((695 + r() * 1700) / 50) * 50;
    // Every cottage gets enclosed-garden (defining trait for the dog collection).
    const baseFeatures: SidebarFeatureKey[] = ["enclosed-garden"];
    const otherPool = SIDEBAR_FEATURE_POOL.filter((f) => f !== "enclosed-garden");
    const featureCount = 3 + Math.floor(r() * 5);
    const shuffled = [...otherPool].sort(() => r() - 0.5);
    const features: SidebarFeatureKey[] = [...baseFeatures, ...shuffled.slice(0, featureCount)];

    // Every cottage in this collection is dog-friendly by definition.
    const collections: TopBarCollection[] = ["dog-friendly"];
    if (r() < 0.4) collections.push("sea-views");
    if (features.includes("hot-tub")) collections.push("hot-tubs-pools");
    if (sleeps >= 8) collections.push("large-holiday-homes");
    if (r() < 0.35) collections.push("short-breaks");

    const loc = DOG_LOCATIONS[Math.floor(r() * DOG_LOCATIONS.length)];
    return {
      id: `dog-${i + 1}`,
      name,
      location: loc.name,
      townSlug: loc.slug,
      region: loc.region,
      pricePerWeek: price,
      sleeps,
      bedrooms,
      bathrooms,
      features,
      collections,
      image: COTTAGE_IMAGES[i % COTTAGE_IMAGES.length],
    };
  });
};

export const dogFriendlyData: CollectionData = {
  slug: "dog-friendly",
  name: "Dog Friendly",
  filterKey: "pet_welcome",
  hero: {
    image: dogFriendlyHero,
    eyebrow: "The Collection",
    tagline: "Cottages that welcome the whole family, dog included",
    caption: PLACEHOLDER_CAPTION,
  },
  compactIntro:
    "Forty-two dog-friendly cottages across Cornwall — each one chosen because the setup genuinely works for dogs, not just because pets are permitted. Filter below by size, features, or price.",
  cottagesIntro: {
    eyebrow: "The cottages",
    leadIn: "",
    totalCount: 42,
  },
  destinationsGrid: {
    items: [
      { slug: "st-ives", name: "St Ives", image: heroHarbour, count: 8, fromPrice: 850 },
      { slug: "padstow", name: "Padstow", image: atmosHarbour, count: 6, fromPrice: 950 },
      { slug: "falmouth", name: "Falmouth", image: atmosBeach, count: 5, fromPrice: 750 },
      { slug: "fowey", name: "Fowey", image: atmosLane, count: 4, fromPrice: 1050 },
      { slug: "bude", name: "Bude", image: tdBeach, count: 4, fromPrice: 695 },
      { slug: "newquay", name: "Newquay", image: tdCoastpath, count: 3, fromPrice: 820 },
    ],
  },
  stats: [
    { value: "42", label: "Dog friendly cottages" },
    { value: "6", label: "Destinations across Cornwall" },
    { value: "£995", label: "Average weekly rate" },
    { value: "year-round", label: "Beach access" },
  ],
  editorial: {
    eyebrow: "Good dogs, good holidays",
    heading: "Why we love dog-friendly cottages",
    paragraphs: [
      "Taking the dog on holiday has stopped being an afterthought. A **dog-friendly cottage** now means one where the whole setup has been thought through — a secure garden to close the gate on, a solid floor that doesn't mind sandy paws, and ideally a walk that starts at the front door. That's the filter we apply before listing any cottage as genuinely dog-friendly.",
      "Cornwall is unusually accommodating. Most of our **dog-friendly cottages** are within minutes of a beach where dogs are welcome year-round, and the South West Coast Path runs through almost all of them. Log fires for wet days, outdoor showers for sandy ones, and enough floor space between the sofa and the Aga that a labrador can stretch out properly. The cottages we've kept in this collection have all been dog-tested by dog owners.",
    ],
    pullQuote:
      "A proper dog-friendly cottage means more than 'pets allowed' — it means the whole holiday works for the dog too.",
  },
  related: {
    items: [
      {
        name: "Garden",
        slug: "/collections/garden",
        description:
          "Cottages with enclosed gardens — the outside space that makes a holiday with dogs (or small children) work.",
        image: collFamily,
      },
      {
        name: "Wood Burner",
        slug: "/collections/wood-burner",
        description:
          "The wet-Welly welcome. Cottages with proper wood burners for the drying-boots-by-the-fire kind of evening.",
        image: collGuide,
      },
      {
        name: "Walks from the Door",
        slug: "/collections/beachfront",
        description:
          "Cottages where the front door opens onto a footpath, a beach, or a stretch of coastal path. No car needed.",
        image: collSurfing,
      },
    ],
  },
  faqs: [
    {
      q: "What makes a cottage genuinely dog-friendly in your view?",
      a: "We list a cottage as dog-friendly only if it meets three practical tests: the outside space is secure (enclosed garden, fenced yard, or a gate on the courtyard), the flooring works for muddy or sandy paws (no precious carpets), and there's either a walk that starts at the front door or a safe route to one. \"Pets permitted\" isn't enough — the whole setup needs to work for the dog as well as the owner.",
    },
    {
      q: "Are there extra fees for bringing a dog?",
      a: "Most of our dog-friendly cottages charge a small supplement per dog per stay — typically £25 to £50. This goes toward the deeper clean at changeover. The fee is always shown on the individual cottage page before you book; no surprises.",
    },
    {
      q: "How many dogs can I bring?",
      a: "Varies by cottage. Most accept up to two dogs; some specify a single dog only, others welcome three or four for the larger houses. Use the filter drawer to narrow by number of dogs if needed, and each cottage page has the exact limit.",
    },
    {
      q: "Are Cornish beaches dog-friendly?",
      a: "Most are, especially outside peak summer. Porthmeor (St Ives), Constantine, Gwithian, Watergate Bay, and Crooklets (Bude) all welcome dogs year-round. Some popular beaches have seasonal dog bans from July to August between 10am and 6pm — worth checking before you go. The good news: even the restricted beaches usually have dog-friendly coves nearby.",
    },
    {
      q: "What about dog equipment — do cottages provide any?",
      a: "Some do, some don't. Most of our dog-friendly cottages provide a basic welcome kit (towels for drying, bowls, a dog bed or blanket, and an outdoor tap or hose for beach visits). A few go further with raised dog beds, crates, or even fenced paddock areas. Each cottage page lists exactly what's included.",
    },
    {
      q: "Can my dog be left alone in the cottage?",
      a: "Most of our cottages ask that dogs aren't left alone for extended periods, to protect the property and for the dog's wellbeing. Short trips to the pub or a meal out are usually fine; full days of sightseeing without the dog are typically not. If you're planning to leave the dog for longer stretches, look into dog-sitting services in the area — we can point you toward good ones.",
    },
    {
      q: "What's the best time of year for a dog holiday in Cornwall?",
      a: "Spring (April-May) and autumn (September-October) are ideal — mild weather, empty beaches, and most dog restrictions are off. Summer works too, but popular beaches get busy and seasonal bans apply. Winter is quiet, atmospheric, and often sunny — plus most beaches welcome dogs year-round and the coast path is yours.",
    },
  ],
};

// Minimal-data variant — proves graceful degradation works
export const dogFriendlyDataMinimal: CollectionData = {
  slug: "dog-friendly",
  name: "Dog Friendly",
  filterKey: "pet_welcome",
  hero: dogFriendlyData.hero,
  compactIntro:
    "Forty-two dog-friendly cottages across Cornwall. Filter below to find yours.",
  cottagesIntro: { eyebrow: "The cottages", leadIn: "", totalCount: 42 },
  destinationsGrid: dogFriendlyData.destinationsGrid,
  related: dogFriendlyData.related,
  faqs: dogFriendlyData.faqs.slice(0, 5),
};
