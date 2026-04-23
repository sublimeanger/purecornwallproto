import type { DestinationStat, DestinationFAQ, DestinationTravelItem } from "@/data/stIvesData";
import type { SidebarFeatureKey, TopBarCollection, MockCottage } from "@/components/filters/types";

import heroCornwall from "@/assets/hero-west-cornwall.jpg";
import atmosHarbour from "@/assets/st-ives/atmos-harbour.jpg";
import atmosBeach from "@/assets/st-ives/atmos-beach.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

export type RegionSlug = "west-cornwall" | "north-cornwall" | "south-cornwall";

export interface RegionTown {
  slug: string;
  name: string;
  image: string;
  cottageCount: number;
  fromPrice: number;
  isPriority: boolean;
  oneLineDescriptor?: string;
}

export interface RegionData {
  slug: RegionSlug;
  hero: {
    image: string;
    eyebrow: string;
    name: string;
    tagline: string;
    caption: string;
  };
  compactIntro: string;
  stats: DestinationStat[];
  editorial: {
    paragraphs: string[];
    pullQuote?: string;
  };
  towns: RegionTown[];
  featuredCottages: MockCottage[];
  totalCottages: number;
  travel: DestinationTravelItem[];
  faqs: DestinationFAQ[];
  relatedRegions: Array<{
    slug: RegionSlug;
    name: string;
    image: string;
    shortDescriptor: string;
  }>;
}

const slugifyTown = (name: string) =>
  name.toLowerCase().replace(/['']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const cottage = (
  id: string,
  name: string,
  location: string,
  pricePerWeek: number,
  sleeps: number,
  bedrooms: number,
  bathrooms: number,
  features: SidebarFeatureKey[],
  collections: TopBarCollection[],
  image: string,
): MockCottage => ({
  id,
  name,
  location,
  townSlug: slugifyTown(location),
  region: "west-cornwall",
  pricePerWeek,
  sleeps,
  bedrooms,
  bathrooms,
  features,
  collections,
  image,
});

const featuredCottages: MockCottage[] = [
  cottage("wc-1", "Porthmeor Light", "St Ives", 1495, 6, 3, 2, ["near-the-beach", "balcony", "log-burner-open-fire", "wifi"], ["sea-views"], property1),
  cottage("wc-2", "The Old Pilchard Store", "St Ives", 1295, 4, 2, 2, ["harbour-marina", "parking", "wifi", "dishwasher"], ["sea-views", "romantic-retreats"], property2),
  cottage("wc-3", "Painters' Loft", "St Ives", 1095, 4, 2, 1, ["town-setting", "balcony", "wifi", "log-burner-open-fire"], ["romantic-retreats"], property3),
  cottage("wc-4", "The Salt House", "Penzance", 850, 6, 3, 2, ["garden", "enclosed-garden", "parking", "wifi"], ["dog-friendly", "country-cottages"], property4),
  cottage("wc-5", "Harbour Steps", "Penzance", 695, 4, 2, 1, ["harbour-marina", "wifi", "log-burner-open-fire"], ["short-breaks"], property5),
  cottage("wc-6", "Mermaid Cottage", "Mousehole", 1195, 4, 2, 2, ["near-the-beach", "wifi", "log-burner-open-fire"], ["sea-views", "romantic-retreats"], property6),
  cottage("wc-7", "Gull Rock Cottage", "Mousehole", 995, 2, 1, 1, ["near-the-beach", "wifi"], ["sea-views", "romantic-retreats"], property1),
  cottage("wc-8", "The Crofts", "Porthleven", 895, 6, 3, 2, ["hot-tub", "garden", "parking", "wifi"], ["hot-tubs-pools"], property2),
  cottage("wc-9", "St Michael's View", "Marazion", 1095, 6, 3, 2, ["near-the-beach", "garden", "parking", "wifi"], ["sea-views"], property3),
  cottage("wc-10", "Sennen Cove Cottage", "Sennen", 1195, 8, 4, 3, ["near-the-beach", "hot-tub", "parking", "wifi"], ["sea-views", "hot-tubs-pools", "large-holiday-homes"], property4),
  cottage("wc-11", "Cadgwith Catch", "Cadgwith", 1495, 6, 3, 2, ["near-the-beach", "log-burner-open-fire", "garden", "wifi"], ["sea-views", "country-cottages"], property5),
  cottage("wc-12", "Tinners' Cottage", "Praa Sands", 950, 4, 2, 2, ["enclosed-garden", "garden", "parking", "wifi"], ["dog-friendly"], property6),
];

const towns: RegionTown[] = [
  { slug: "st-ives", name: "St Ives", image: property1, cottageCount: 8, fromPrice: 895, isPriority: true, oneLineDescriptor: "Artists' town with Porthmeor surf beach, Tate St Ives, and narrow granite lanes." },
  { slug: "carbis-bay", name: "Carbis Bay", image: property2, cottageCount: 3, fromPrice: 1195, isPriority: false, oneLineDescriptor: "Wide flat sandy beach, a short train ride from St Ives, family-perfect." },
  { slug: "lelant", name: "Lelant", image: property3, cottageCount: 1, fromPrice: 750, isPriority: false, oneLineDescriptor: "Estuary village on the St Ives branch line, quieter than its neighbours." },
  { slug: "hayle", name: "Hayle", image: property4, cottageCount: 2, fromPrice: 695, isPriority: false, oneLineDescriptor: "Three-mile towans and a working industrial harbour. Good beach surfing." },
  { slug: "zennor", name: "Zennor", image: property5, cottageCount: 1, fromPrice: 895, isPriority: false, oneLineDescriptor: "Moorland village above rocky Atlantic cliffs. Tinners' Arms and a twelfth-century mermaid." },
  { slug: "penzance", name: "Penzance", image: property6, cottageCount: 4, fromPrice: 650, isPriority: false, oneLineDescriptor: "Working harbour, Georgian terraces, Scillonian ferry and the gateway to the far west." },
  { slug: "marazion", name: "Marazion", image: property1, cottageCount: 2, fromPrice: 795, isPriority: false, oneLineDescriptor: "Across the water from St Michael's Mount — causeway island castle at low tide." },
  { slug: "mousehole", name: "Mousehole", image: property2, cottageCount: 2, fromPrice: 995, isPriority: false, oneLineDescriptor: "Archetypal Cornish fishing village, legendary Christmas lights, narrow lanes." },
  { slug: "sennen", name: "Sennen", image: property3, cottageCount: 2, fromPrice: 895, isPriority: false, oneLineDescriptor: "Beach village at the Atlantic edge — the first surf spot coming down from the Mainland." },
  { slug: "lands-end", name: "Land's End", image: property4, cottageCount: 1, fromPrice: 1495, isPriority: false, oneLineDescriptor: "The famous clifftop point. Cottages set back from the tourist mile itself." },
  { slug: "porthcurno", name: "Porthcurno", image: property5, cottageCount: 1, fromPrice: 1095, isPriority: false, oneLineDescriptor: "Translucent turquoise water, Minack Theatre carved into the cliff, Telegraph Museum." },
  { slug: "porthleven", name: "Porthleven", image: property6, cottageCount: 3, fromPrice: 795, isPriority: false, oneLineDescriptor: "Harbour town known for food, storms in winter, and a clock tower on the pier." },
  { slug: "helston", name: "Helston", image: property1, cottageCount: 1, fromPrice: 650, isPriority: false, oneLineDescriptor: "Market town inland of the Lizard. Floral Day in May, good for exploring south coast coves." },
  { slug: "the-lizard", name: "The Lizard", image: property2, cottageCount: 2, fromPrice: 795, isPriority: false, oneLineDescriptor: "Britain's most southerly point. Serpentine cliffs, lighthouse, wild Atlantic views." },
  { slug: "coverack", name: "Coverack", image: property3, cottageCount: 1, fromPrice: 895, isPriority: false, oneLineDescriptor: "Small stone-harbour Lizard village, warmer water than Atlantic coast, snorkelling." },
  { slug: "cadgwith", name: "Cadgwith", image: property4, cottageCount: 1, fromPrice: 995, isPriority: false, oneLineDescriptor: "Thatched fishing cottages tumbling down to a cove — a proper postcard-Cornish village." },
  { slug: "mullion", name: "Mullion", image: property5, cottageCount: 1, fromPrice: 795, isPriority: false, oneLineDescriptor: "Village on the Lizard peninsula with Cornwall's only natural harbour. Wide sandy cove below." },
  { slug: "praa-sands", name: "Praa Sands", image: property6, cottageCount: 2, fromPrice: 850, isPriority: false, oneLineDescriptor: "Mile of flat family beach between Penzance and the Lizard. Surfing and rockpools." },
  { slug: "st-just", name: "St Just", image: property1, cottageCount: 1, fromPrice: 795, isPriority: false, oneLineDescriptor: "Moorland mining town, Tinner's Chapel, near Cape Cornwall. The non-tourist West Cornwall." },
];

export const westCornwallData: RegionData = {
  slug: "west-cornwall",
  hero: {
    image: heroCornwall,
    eyebrow: "THE FAR WEST",
    name: "West Cornwall",
    tagline: "Atlantic on both sides, light that painters chase, towns that have shaped Cornwall's story for a thousand years",
    caption: "",
  },
  compactIntro:
    "West Cornwall is the end of England. A granite finger pointing into the Atlantic, edged by both coasts on three sides, with Land's End as its tip. It's the region of St Ives' artistic light, Penzance's working harbour, and the Lizard's wild clifftop coves. Smaller roads, older villages, and some of the finest holiday cottages on our books.",
  stats: [
    { value: "19", label: "Towns" },
    { value: "36", label: "Cottages" },
    { value: "£650", label: "From / week" },
    { value: "Jun–Sep", label: "Peak season" },
    { value: "3h 30m", label: "Drive from M5" },
  ],
  editorial: {
    paragraphs: [
      "**West Cornwall starts roughly at Hayle.** From there, the A30 drops away and the light changes — sharper, more silver, Atlantic on both sides. St Ives pulls the light that made it a painters' town from the 1880s onwards. Penzance is working-harbour and jam factories. Mousehole is the village every calendar picks for December.",
      "Beyond them, the **coast stretches towards Land's End** on the Atlantic side and the Lizard on the Channel side — two peninsulas of very different character. The Atlantic coast has the drama: Sennen's beach, Porthcurno's open-air theatre, Minack against the cliffs. The Channel side is quieter — **Cadgwith's thatched fishing cottages**, Coverack's stone harbour, Mullion and Poldhu's wide sandy sweeps.",
      "The best time in West Cornwall isn't the obvious one. August is beautiful but crowded; **September's light and quieter roads are our favourite**. Many of the cottages we look after here are a short walk from either a beach or a clifftop path — often both. This is the region to choose if you want coast to be the main event of your week.",
    ],
    pullQuote: "A granite finger pointing into the Atlantic — the end of England, with Atlantic on both sides.",
  },
  towns,
  featuredCottages,
  totalCottages: 36,
  travel: [
    {
      mode: "train",
      title: "Direct from London Paddington",
      copy: "Great Western Railway runs direct trains from London Paddington to Penzance in about five hours. St Ives has its own branch line from St Erth, twenty minutes from the main line. Sleeper services run overnight.",
    },
    {
      mode: "car",
      title: "A30 all the way down",
      copy: "Roughly five and a half hours from London via the M4, M5 and A30. The A30 is the only sensible trunk route — it runs the full length of West Cornwall to Land's End. Avoid Fridays and Sundays in peak summer.",
    },
    {
      mode: "plane",
      title: "Newquay has the nearest airport",
      copy: "Newquay Airport is about an hour's drive from St Ives and forty-five minutes from Penzance. Flybe, Ryanair and Eastern operate UK and seasonal European routes. Land's End Airport has small charter flights to the Scillies.",
    },
  ],
  faqs: [
    {
      q: "What's the best town in West Cornwall for a first-time visitor?",
      a: "St Ives is the obvious choice — surf beach, strong food scene, the Tate, daily trains. For something quieter with the same coastal character, Mousehole in winter and Penzance year-round are excellent. Porthleven is the food-focused pick.",
    },
    {
      q: "When is the best time to visit West Cornwall?",
      a: "September is our favourite — summer light lingers, the sea stays swimmable, and the crowds thin out. May and early June are beautiful too, with flowers and empty beaches. July and August are peak and beautiful but busy; everything in the far west feels pressed. Winter has storm-watching magic if you're properly dressed.",
    },
    {
      q: "How different is West Cornwall from the rest of Cornwall?",
      a: "It feels further. The roads narrow, the fields get smaller, and the Celtic-Cornish character is stronger — place names, traditions, even the light. You can walk for miles of coast path without seeing a building. It's the part of Cornwall that feels least like anywhere else in England.",
    },
    {
      q: "Are the beaches in West Cornwall safe for swimming?",
      a: "Most are lifeguarded in season (RNLI volunteers cover St Ives' Porthmeor, Hayle's beaches, Sennen, and several Lizard beaches). Always check flags and swim between them. The Atlantic coast has powerful rip currents in certain tide states; the Channel (Lizard) side is calmer and warmer.",
    },
    {
      q: "Do you need a car in West Cornwall?",
      a: "Not strictly, but it opens things up. The St Ives branch line, buses, and the number 18 coastal service cover most places without one. A car lets you explore the smaller fishing villages, reach Minack Theatre at Porthcurno, and access quiet beaches off the coast road.",
    },
    {
      q: "What's the walking like in West Cornwall?",
      a: "Outstanding. The South West Coast Path runs the entire perimeter — many of the country's most-photographed coastal walks are in this stretch. St Ives to Zennor is a classic, as is Lamorna Cove to Mousehole, and the Lizard peninsula's circular walks. Bring proper footwear; it's rocky.",
    },
  ],
  relatedRegions: [
    {
      slug: "north-cornwall",
      name: "North Cornwall",
      image: atmosHarbour,
      shortDescriptor: "Surf, cliffs, and the Atlantic coast path. Padstow, Newquay, Bude.",
    },
    {
      slug: "south-cornwall",
      name: "South Cornwall",
      image: atmosBeach,
      shortDescriptor: "Estuaries, sheltered harbours, sub-tropical gardens. Fowey, Falmouth, the Helford.",
    },
  ],
};

export const westCornwallDataMinimal: RegionData = {
  slug: "west-cornwall",
  hero: { ...westCornwallData.hero, name: "West Cornwall (Minimal Proof)" },
  compactIntro: westCornwallData.compactIntro,
  stats: westCornwallData.stats,
  editorial: { paragraphs: westCornwallData.editorial.paragraphs },
  towns: westCornwallData.towns.slice(0, 3).map((t) => ({ ...t, oneLineDescriptor: undefined })),
  featuredCottages: westCornwallData.featuredCottages.slice(0, 6),
  totalCottages: 36,
  travel: westCornwallData.travel,
  faqs: westCornwallData.faqs.slice(0, 3),
  relatedRegions: westCornwallData.relatedRegions,
};
