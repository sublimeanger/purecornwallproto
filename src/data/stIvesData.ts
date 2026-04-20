import { FeatureKey, MockCottage } from "@/components/filters/types";

export interface DestinationStat {
  value: string;
  label: string;
}

export interface DestinationPin {
  n: number;
  name: string;
  description: string;
}

export interface MiniCollectionCottage {
  id: string;
  name: string;
  location: string;
  pricePerWeek: number;
  sleeps: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

export interface DestinationMiniCollection {
  name: string;
  description: string;
  count: number;
  slug: string;
  cottages: MiniCollectionCottage[];
}

export interface DestinationThingToDo {
  category: string;
  name: string;
  description: string;
  image: string;
  link?: string;
}

export interface DestinationTravelItem {
  mode: "train" | "car" | "plane";
  title: string;
  copy: string;
}

export interface DestinationRelated {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface DestinationFAQ {
  q: string;
  a: string;
}

export interface DestinationData {
  slug: string;
  name: string;
  region: string;
  hero: { image: string; eyebrow: string; tagline: string; caption: string };
  compactIntro: string;
  cottagesIntro: { eyebrow: string; leadIn: string; totalCount: number };
  related: DestinationRelated[];
  faqs: DestinationFAQ[];
  // Optional — render only if present and meeting threshold
  opening?: { eyebrow: string; paragraphs: string[] };
  stats?: DestinationStat[];
  map?: { imageUrl: string; caption: string; pins: DestinationPin[] };
  editorial?: { heading: string; paragraphs: string[]; pullQuote?: string };
  atmosphere?: { images: { src: string; alt: string }[]; caption: string };
  miniCollections?: DestinationMiniCollection[];
  thingsToDo?: DestinationThingToDo[];
  travel?: DestinationTravelItem[];
}

// Reliable Unsplash photo IDs — generic Cornwall coast imagery
// To be replaced with commissioned St Ives photography post-launch
const CORNWALL_IMAGES = {
  heroCoastCliff:
    "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?auto=format&fit=crop&w=1920&q=70",
  harbourBoats:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
  coastalPath:
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=70",
  beachSunset:
    "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1200&q=70",
  cottageExterior:
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70",
  cottageInterior:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
};

const PLACEHOLDER_CAPTION =
  "Placeholder imagery — generic Cornwall coast photography, to be replaced with commissioned St Ives imagery.";

// ---- Mock cottages for St Ives -------------------------------------------

const COTTAGE_IMAGES = [
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=70",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=70",
];

const ST_IVES_COTTAGE_NAMES = [
  "Porthmeor House", "Wave Cottage", "The Lookout", "Harbour Light",
  "Salt Loft", "Fisherman's Rest", "Carbis View", "Tate Mews",
  "Downalong Cottage", "Porthminster Sands", "Island House", "The Pilot",
  "Smeaton's Pier Cottage", "Atlantic Edge", "Painters' Loft", "Hepworth House",
  "Clodgy View", "St Eia", "Trewyn Studio", "The Bayside",
  "Headland Cottage", "Porthgwidden Bay", "The Old Net Loft",
  "Carbis Bay Retreat", "Lelant View", "Zennor Edge", "The Mariner",
];

const ST_IVES_LOCATIONS = ["St Ives", "Porthmeor", "Porthminster", "Downalong", "Carbis Bay"];

const ALL_FEATURES: FeatureKey[] = [
  "Sea View", "Dog Friendly", "Hot Tub", "Pool", "Parking", "Pet Welcome",
  "Wood Burner", "Garden", "EV Charger", "Sauna", "Balcony", "WiFi",
];

const rng = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

export const generateStIvesCottages = (): MockCottage[] => {
  const r = rng(1887);
  return ST_IVES_COTTAGE_NAMES.map((name, i) => {
    const sleeps = 2 + Math.floor(r() * 9);
    const bedrooms = Math.max(1, Math.min(8, Math.round(sleeps / 2 + (r() - 0.5))));
    const bathrooms = Math.max(1, Math.min(6, Math.round(bedrooms / 2 + (r() < 0.4 ? 1 : 0))));
    const price = Math.floor((800 + r() * 2700) / 50) * 50;
    const featureCount = 2 + Math.floor(r() * 5);
    const shuffled = [...ALL_FEATURES].sort(() => r() - 0.5);
    const features = shuffled.slice(0, featureCount);
    return {
      id: `sti-${i + 1}`,
      name,
      location: ST_IVES_LOCATIONS[Math.floor(r() * ST_IVES_LOCATIONS.length)],
      pricePerWeek: price,
      sleeps,
      bedrooms,
      bathrooms,
      features,
      image: COTTAGE_IMAGES[i % COTTAGE_IMAGES.length],
    };
  });
};

// Pull a few cottages for mini collection previews (lightweight shape)
const previewCottage = (i: number, override: Partial<MiniCollectionCottage> = {}): MiniCollectionCottage => ({
  id: `mc-${i}`,
  name: "Cottage",
  location: "St Ives",
  pricePerWeek: 1500,
  sleeps: 6,
  bedrooms: 3,
  bathrooms: 2,
  image: COTTAGE_IMAGES[i % COTTAGE_IMAGES.length],
  ...override,
});

export const stIvesData: DestinationData = {
  slug: "st-ives",
  name: "St Ives",
  region: "West Cornwall",
  hero: {
    image: CORNWALL_IMAGES.heroCoastCliff,
    eyebrow: "West Cornwall",
    tagline: "A light-washed harbour town on Cornwall's western edge",
    caption: PLACEHOLDER_CAPTION,
  },
  compactIntro:
    "Twenty-seven handpicked cottages in St Ives — from clifftop retreats with panoramic bay views to cobble-lane fishermen's houses a minute from the harbour. Filter below to narrow by size, features, or price.",
  stats: [
    { value: "27", label: "Cottages in St Ives" },
    { value: "4", label: "Beaches within walking distance" },
    { value: "£1,650", label: "Average weekly rate" },
    { value: "18°C", label: "July average, sea temperature" },
    { value: "56 miles", label: "To Newquay airport" },
  ],
  map: {
    imageUrl: CORNWALL_IMAGES.harbourBoats,
    caption: PLACEHOLDER_CAPTION,
    pins: [
      { n: 1, name: "Porthmeor Beach", description: "Surfers' beach, north-facing, big skies" },
      { n: 2, name: "Porthminster Beach", description: "Sheltered sunset cove with café landmark" },
      { n: 3, name: "The Harbour", description: "Working fishing harbour, cobblestone, boats at anchor" },
      { n: 4, name: "Tate St Ives", description: "On the Porthmeor gasworks site, modern British painting" },
      { n: 5, name: "Barbara Hepworth Museum", description: "The sculptor's house and studio, kept as she left it" },
      { n: 6, name: "The Island (St Nicholas Chapel)", description: "Headland walk, panoramic views, free" },
      { n: 7, name: "Downalong", description: "The old fishermen's quarter, narrow lanes, hidden lunches" },
      { n: 8, name: "Carbis Bay", description: "Next cove south, the turquoise one people photograph" },
    ],
  },
  editorial: {
    heading: "Why St Ives",
    paragraphs: [
      "St Ives has been drawing painters to its waterline since the 1880s and it's no mystery why. The town sits where the Atlantic light turns almost Mediterranean — particularly in late afternoon, when the harbour walls gold over and the water turns the pale green of a bottle held up to the sun. Hepworth worked here. Heron worked here. The Tate plants itself on the old gasworks site as if this were entirely the expected place for a world-class gallery.",
      "What makes St Ives work as a holiday is the compression. Four beaches ring the town — Porthmeor facing the surf, Porthgwidden in its sheltered pocket, Porthminster with the long sunset sweep, the harbour itself at the centre. You can walk between them in under twenty minutes, with a lunchtime pasty, an afternoon at the Tate, and dinner on the harbour falling naturally into place.",
    ],
    pullQuote:
      "The light here is unlike anywhere else on the Cornish coast — painters have known this since the 1880s.",
  },
  atmosphere: {
    images: [
      { src: CORNWALL_IMAGES.harbourBoats, alt: "Cornwall harbour with fishing boats" },
      { src: CORNWALL_IMAGES.coastalPath, alt: "Cornwall coastal path" },
      { src: CORNWALL_IMAGES.beachSunset, alt: "Cornwall beach at sunset" },
    ],
    caption: PLACEHOLDER_CAPTION,
  },
  cottagesIntro: {
    eyebrow: "Now for the cottages",
    leadIn:
      "Twenty-seven cottages across St Ives — from clifftop retreats with panoramic bay views, to cobble-lane fishermen's houses a minute from the harbour. Each one's been stayed in, walked around, and vouched for.",
    totalCount: 27,
  },
  miniCollections: [
    {
      name: "St Ives with sea views",
      description:
        "Cottages where the Atlantic is the first thing you see. Eight handpicked for their view, their light, and the way the weather moves across the bay.",
      count: 8,
      slug: "/collections/st-ives-sea-views",
      cottages: [
        previewCottage(0, { name: "The Lookout", location: "Porthmeor", pricePerWeek: 2150, sleeps: 6, bedrooms: 3, bathrooms: 2 }),
        previewCottage(2, { name: "Atlantic Edge", location: "Porthminster", pricePerWeek: 2850, sleeps: 8, bedrooms: 4, bathrooms: 3 }),
      ],
    },
    {
      name: "Walk to the harbour",
      description:
        "Five minutes from a pasty at the harbour. Stone-built, cobble-lane, and central — the kind of place where you don't use the car all week.",
      count: 5,
      slug: "/collections/st-ives-harbour",
      cottages: [
        previewCottage(4, { name: "Fisherman's Rest", location: "Downalong", pricePerWeek: 1450, sleeps: 4, bedrooms: 2, bathrooms: 1 }),
        previewCottage(6, { name: "Smeaton's Cottage", location: "St Ives", pricePerWeek: 1650, sleeps: 5, bedrooms: 3, bathrooms: 2 }),
      ],
    },
    {
      name: "Larger homes for groups",
      description:
        "Sleeping six, eight, or ten. For family Christmases, three-generation holidays, and weekends where you want space to spread out.",
      count: 6,
      slug: "/collections/st-ives-larger-homes",
      cottages: [
        previewCottage(8, { name: "Hepworth House", location: "St Ives", pricePerWeek: 3200, sleeps: 10, bedrooms: 5, bathrooms: 3 }),
        previewCottage(10, { name: "Carbis Bay Retreat", location: "Carbis Bay", pricePerWeek: 2950, sleeps: 8, bedrooms: 4, bathrooms: 3 }),
      ],
    },
  ],
  thingsToDo: [
    {
      category: "Beaches",
      name: "Porthmeor Beach",
      description:
        "North-facing surf beach with lessons at Wavehunters and a Sunday-morning parkrun along the sand.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
    },
    {
      category: "Gallery",
      name: "Tate St Ives",
      description:
        "Modern British painting in a striking cliffside gallery. Barbara Hepworth sculptures on the terrace.",
      image: "https://images.unsplash.com/photo-1565060169187-5284f2c0d2bb?auto=format&fit=crop&w=1200&q=70",
    },
    {
      category: "Walks",
      name: "The Island headland walk",
      description:
        "Twenty minutes round the St Nicholas Chapel. Panoramic views, benches for afternoon reading.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70",
    },
    {
      category: "Food",
      name: "Porthminster Beach Café",
      description:
        "Locally caught fish, lunch with the sea as the backdrop. Book — it fills fast on sunny days.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=70",
    },
    {
      category: "Gallery",
      name: "Barbara Hepworth Museum",
      description:
        "The sculptor's house and garden studio, kept as she left it in 1975. Small, moving, memorable.",
      image: "https://images.unsplash.com/photo-1577083552431-6e5fd75a9160?auto=format&fit=crop&w=1200&q=70",
    },
    {
      category: "Walks",
      name: "The South West Coast Path",
      description:
        "To Zennor via Clodgy Point (5 miles, dramatic). Or to Carbis Bay (1.5 miles, gentler). Both ends of a perfect day.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=70",
    },
  ],
  travel: [
    {
      mode: "train",
      title: "By train",
      copy: "The branch line from St Erth runs right into St Ives — one of the most scenic train journeys in Britain, hugging the coast for ten minutes past Lelant and Carbis Bay. St Erth connects to Paddington (5h direct) or via Penzance.",
    },
    {
      mode: "car",
      title: "By car",
      copy: "M5 to Exeter, then the A30 — roughly 5h from London, 4h from Birmingham. Parking in St Ives is tight in summer; most cottages include allocated spaces, and the Park & Ride at Lelant Saltings takes the sting out of day trips.",
    },
    {
      mode: "plane",
      title: "By air",
      copy: "Cornwall Airport Newquay is 30 miles away, with direct flights from London, Manchester, Edinburgh, and Dublin. Budget 45 minutes by car from the airport to St Ives.",
    },
  ],
  related: [
    {
      name: "Carbis Bay",
      slug: "/destinations/carbis-bay",
      description: "The next cove south. Turquoise water, a long soft-sanded beach, and the famous hotel above.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=70",
    },
    {
      name: "Lelant",
      slug: "/destinations/lelant",
      description: "Across the estuary. Saltings, sand dunes, and one of Cornwall's best links golf courses.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=70",
    },
    {
      name: "Zennor",
      slug: "/destinations/zennor",
      description: "Five miles along the coast path. Mermaids, moorland, and the legendary Tinner's Arms.",
      image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=70",
    },
  ],
  faqs: [
    {
      q: "When is the best time to visit St Ives?",
      a: "May and September are the quietest sweet spots — warm weather, long days, fewer crowds. July and August are the peak months for families; book 6 months ahead if you're coming then. October to March is quiet, contemplative, and often sunny — many cottages run shoulder-season rates, and the town keeps a real life of its own.",
    },
    {
      q: "Are most cottages dog-friendly?",
      a: "About two-thirds of our St Ives cottages welcome dogs. Porthmeor is fully dog-friendly year-round; Porthminster and the harbour beach have summer restrictions. Use the Dog Friendly filter above to see the full list.",
    },
    {
      q: "What about parking?",
      a: "Most of our St Ives cottages include allocated parking — this is flagged on each cottage page. If you're staying in Downalong (the narrow lanes), expect to park at the edge of the old town and walk 2–5 minutes with luggage. The Park & Ride at Lelant Saltings is useful for day trips.",
    },
    {
      q: "How close are the beaches?",
      a: "Depends on the cottage. Harbourside cottages are 5 minutes from Porthmeor and Porthminster on foot. Clifftop cottages are a slightly longer walk but offer bigger views. Every cottage page shows a walking-distance-to-beach figure.",
    },
    {
      q: "Can I book for just a weekend?",
      a: "Out of peak season, yes — many of our St Ives cottages offer 3-night short breaks from October to April. In July and August it's strictly Saturday-to-Saturday for the busier properties.",
    },
    {
      q: "Is St Ives good in winter?",
      a: "It's a quieter, more local version of itself. Storm-watching on Porthmeor, log fires, Tate café without the queue, and empty winter beaches. Several of our cottages run dedicated winter tariffs and two-for-one offers; filter by Wood Burner for the full list.",
    },
    {
      q: "How far from the airport?",
      a: "Cornwall Airport Newquay is 30 miles, about 45 minutes by car. Exeter airport is 2.5 hours. If you're flying from elsewhere in Europe, Bristol (3.5h) is often the cheapest entry point.",
    },
  ],
};

// Minimal-data variant — proves graceful degradation works for low-content towns.
// Renders only: hero, breadcrumb, compact intro, cottage grid, related, FAQ, footer.
export const stIvesDataMinimal: DestinationData = {
  slug: "st-ives",
  name: "St Ives",
  region: "West Cornwall",
  hero: {
    image: CORNWALL_IMAGES.heroCoastCliff,
    eyebrow: "West Cornwall",
    tagline: "A light-washed harbour town on Cornwall's western edge",
    caption: PLACEHOLDER_CAPTION,
  },
  compactIntro:
    "Twenty-seven handpicked cottages in St Ives. Filter below to find yours.",
  cottagesIntro: { eyebrow: "Cottages", leadIn: "", totalCount: 27 },
  related: stIvesData.related,
  faqs: stIvesData.faqs.slice(0, 5),
};
