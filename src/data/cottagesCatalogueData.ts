import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import type {
  MockCottage,
  RegionKey,
  SidebarFeatureKey,
  TopBarCollection,
} from "@/components/filters/types";

interface CottagesCatalogueData {
  hero: { eyebrow: string; name: string; tagline: string; caption: string };
  cottages: MockCottage[];
}

const propertyImages = [property1, property2, property3, property4, property5, property6];

// Cottage names — 120 total; we use first 119
const COTTAGE_NAMES = [
  "The Salt House", "Porthmeor Light", "Mermaid Cottage", "The Old Pilchard Store", "Harbour Steps",
  "Gull Rock Cottage", "Kit Hill View", "Tinners' Cottage", "Fistral Lookout", "Polzeath Retreat",
  "Fowey Harbour House", "Falmouth Captain's", "Cadgwith Catch", "Sennen Cove Cottage", "Padstow Quay",
  "St Ives Artists' Studio", "Mousehole Moon", "Coverack Fisherman's", "The Tinners' Arms Cottage", "Zennor Moor",
  "The Lizard Light", "Mullion Cove", "Praa Sands Beach House", "Penzance Pilgrim", "Marazion Mount View",
  "The Crofts", "Lamorna Bay", "Minack House", "Porthcurno Cliff", "Cape Cornwall",
  "St Just Tin Mine", "Helston Market", "The Sea Captain's", "Pepper Pot Cottage", "The Loft at Trevose",
  "Treyarnon Stone", "Watergate Bay Retreat", "Constantine Bay", "Mawgan Porth House", "Perranporth Pearl",
  "St Agnes Light", "Newquay Surf Shack", "Crantock Cottage", "Holywell Bay Hideaway", "Padstow Oyster",
  "The Rock View", "Trebetherick Sunrise", "Polzeath Ridge", "Port Isaac Harbour", "Doc Martin Cottage",
  "Tintagel Castle View", "Boscastle Witches", "Bude Storm Watch", "Widemouth Wave", "Crackington Haven Cliff",
  "Higher Barton Farm", "The Old Tin Mine", "Perranporth Sands", "Agnes Beacon", "Falmouth Docks House",
  "Mylor Yacht Club", "The Helford Watchman", "Portscatho Pilchard", "St Mawes Ferry", "Portloe Pilot",
  "Gorran Haven Fisherman", "Mevagissey Harbour", "The Fowey Fisher", "Polruan Fort", "Polperro Pixie",
  "Looe Bridge", "Kingsand Cross", "Cawsand Cove", "Hamlet Cottage", "Moor Breeze",
  "Estuary Light", "Bosistow Farm", "Nancledra Cottage", "Towednack Chapel", "Sancreed Retreat",
  "Pendeen Lighthouse", "Morvah Quiet", "Tregurthen Stone", "Trewidden Gardens", "The Engine House",
  "Tregenna Castle View", "Sandy Cove Cottage", "Tidemill Cottage", "Surfside", "Ocean View Lodge",
  "Harbour Mist", "Bluebell Meadow", "Cornish Hideaway", "The Clifftop", "Windward Cottage",
  "Seafoam Place", "Tide Line", "Cove Lookout", "Pebble Beach House", "Rose Cottage",
  "Honeysuckle Farm", "Bramble Hollow", "Oakleaf", "Driftwood Cottage", "Rockpool House",
  "Saltwind Cottage", "Sunset Bay", "Moonrise Cottage", "Star Point", "Low Tide",
  "Dune Cottage", "Sea Pink", "Thistle Cottage", "Fisherman's Walk", "Smugglers' Rest",
  "Coastguard Cottage", "Lighthouse Keeper's", "Pilot's Cottage", "Captain's Walk", "Lookout Point",
  "Windrush", "Seagrass Cottage", "Bay View",
];

// Town pools per region (matching destinationsHubData.ts)
const WEST_TOWNS = [
  { name: "St Ives", slug: "st-ives", priority: true },
  { name: "Carbis Bay", slug: "carbis-bay", priority: false },
  { name: "Penzance", slug: "penzance", priority: false },
  { name: "Mousehole", slug: "mousehole", priority: false },
  { name: "Sennen", slug: "sennen", priority: false },
  { name: "Marazion", slug: "marazion", priority: false },
  { name: "Porthcurno", slug: "porthcurno", priority: false },
  { name: "Porthleven", slug: "porthleven", priority: false },
  { name: "Helston", slug: "helston", priority: false },
  { name: "The Lizard", slug: "the-lizard", priority: false },
  { name: "Coverack", slug: "coverack", priority: false },
  { name: "Mullion", slug: "mullion", priority: false },
  { name: "Praa Sands", slug: "praa-sands", priority: false },
  { name: "St Just", slug: "st-just", priority: false },
  { name: "Zennor", slug: "zennor", priority: false },
];

const NORTH_TOWNS = [
  { name: "Padstow", slug: "padstow", priority: true },
  { name: "Newquay", slug: "newquay", priority: true },
  { name: "Bude", slug: "bude", priority: true },
  { name: "Rock", slug: "rock", priority: false },
  { name: "Polzeath", slug: "polzeath", priority: false },
  { name: "Port Isaac", slug: "port-isaac", priority: false },
  { name: "Tintagel", slug: "tintagel", priority: false },
  { name: "Boscastle", slug: "boscastle", priority: false },
  { name: "Mawgan Porth", slug: "mawgan-porth", priority: false },
  { name: "Watergate Bay", slug: "watergate-bay", priority: false },
  { name: "Constantine Bay", slug: "constantine-bay", priority: false },
  { name: "Trebetherick", slug: "trebetherick", priority: false },
  { name: "Crantock", slug: "crantock", priority: false },
  { name: "Perranporth", slug: "perranporth", priority: false },
  { name: "St Agnes", slug: "st-agnes", priority: false },
  { name: "Widemouth Bay", slug: "widemouth-bay", priority: false },
  { name: "Trevone", slug: "trevone", priority: false },
];

const SOUTH_TOWNS = [
  { name: "Falmouth", slug: "falmouth", priority: false },
  { name: "Fowey", slug: "fowey", priority: false },
  { name: "St Mawes", slug: "st-mawes", priority: false },
  { name: "Mevagissey", slug: "mevagissey", priority: false },
  { name: "Helford", slug: "helford", priority: false },
  { name: "Mylor", slug: "mylor", priority: false },
  { name: "Portscatho", slug: "portscatho", priority: false },
  { name: "Portloe", slug: "portloe", priority: false },
  { name: "Gorran Haven", slug: "gorran-haven", priority: false },
  { name: "Polruan", slug: "polruan", priority: false },
  { name: "Polperro", slug: "polperro", priority: false },
  { name: "Looe", slug: "looe", priority: false },
  { name: "Kingsand", slug: "kingsand", priority: false },
  { name: "Cawsand", slug: "cawsand", priority: false },
];

// Deterministic seeded RNG so cottage list is stable across renders
const rng = (seed: number) => {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
};

const SLEEPS_BUCKETS = [2, 4, 4, 5, 5, 6, 6, 6, 7, 8, 8, 10, 12];

const ESSENTIAL_POOL: SidebarFeatureKey[] = ["parking", "wifi", "linen-towels-included", "washing-machine"];
const OUTDOOR_POOL: SidebarFeatureKey[] = ["garden", "patio-decking", "balcony", "bbq", "fire-pit", "enclosed-garden"];
const INDOOR_POOL: SidebarFeatureKey[] = ["log-burner-open-fire", "games-room", "home-office-workspace"];
const ACTIVITY_POOL: SidebarFeatureKey[] = ["surfing", "walking-coast-path", "cycling", "fishing", "wildlife-nature", "golf"];
const LOCATION_CHAR_POOL: SidebarFeatureKey[] = ["beachfront-waterfront", "near-the-beach", "near-coast-path", "harbour-marina", "rural-countryside", "village-setting", "town-setting"];
const FAMILY_POOL: SidebarFeatureKey[] = ["family-friendly", "cot-travel-crib", "highchair"];

const generateCottages = (): MockCottage[] => {
  const r = rng(424242);
  const cottages: MockCottage[] = [];

  // Build town allocation: 36 west, 48 north, 35 south
  type TownAlloc = { name: string; slug: string; region: RegionKey; count: number };
  const allocs: TownAlloc[] = [];

  const allocateTowns = (
    towns: { name: string; slug: string; priority: boolean }[],
    region: RegionKey,
    target: number,
  ) => {
    // Priority towns get 5–8, others 1–4. Distribute, then top up/trim to hit target.
    const tmp: TownAlloc[] = towns.map((t) => {
      const count = t.priority
        ? 5 + Math.floor(r() * 4) // 5–8
        : 1 + Math.floor(r() * 4); // 1–4
      return { name: t.name, slug: t.slug, region, count };
    });
    let total = tmp.reduce((s, t) => s + t.count, 0);
    // Adjust to hit target
    while (total !== target) {
      const idx = Math.floor(r() * tmp.length);
      if (total < target) {
        tmp[idx].count += 1;
        total += 1;
      } else if (tmp[idx].count > 1) {
        tmp[idx].count -= 1;
        total -= 1;
      }
    }
    allocs.push(...tmp);
  };

  allocateTowns(WEST_TOWNS, "west-cornwall", 36);
  allocateTowns(NORTH_TOWNS, "north-cornwall", 48);
  allocateTowns(SOUTH_TOWNS, "south-cornwall", 35);

  let nameIdx = 0;
  let id = 1;

  for (const alloc of allocs) {
    for (let i = 0; i < alloc.count; i++) {
      const sleeps = SLEEPS_BUCKETS[Math.floor(r() * SLEEPS_BUCKETS.length)];
      const bedrooms = Math.max(1, Math.min(5, Math.round(sleeps / 2)));
      const bathrooms = Math.max(1, Math.min(4, Math.round(bedrooms / 2 + (r() < 0.3 ? 1 : 0))));

      // Price: most £795–£1495, premium £1800–£2495 (~10%), budget £550–£795 (~15%)
      let price: number;
      const priceTier = r();
      if (priceTier < 0.15) {
        price = 550 + Math.floor(r() * 5) * 50;
      } else if (priceTier < 0.85) {
        price = 795 + Math.floor(r() * 14) * 50;
      } else {
        price = 1800 + Math.floor(r() * 14) * 50;
      }

      // Build features
      const features: SidebarFeatureKey[] = [];
      // 2-3 essentials always
      const ess = [...ESSENTIAL_POOL].sort(() => r() - 0.5).slice(0, 2 + Math.floor(r() * 2));
      features.push(...ess);

      // Location character — usually 1
      features.push(LOCATION_CHAR_POOL[Math.floor(r() * LOCATION_CHAR_POOL.length)]);

      // Outdoor — 1-2
      const outdoorCount = 1 + Math.floor(r() * 2);
      const outdoor = [...OUTDOOR_POOL].sort(() => r() - 0.5).slice(0, outdoorCount);
      features.push(...outdoor);

      // Hot tub ~30%
      const hasHotTub = r() < 0.3;
      if (hasHotTub) features.push("hot-tub");

      // Pool ~6%
      const hasPrivatePool = r() < 0.05;
      const hasSharedPool = !hasPrivatePool && r() < 0.05;
      if (hasPrivatePool) features.push("private-pool");
      if (hasSharedPool) features.push("shared-pool");

      // Indoor ~50%
      if (r() < 0.6) features.push(INDOOR_POOL[Math.floor(r() * INDOOR_POOL.length)]);

      // Activity ~50%
      if (r() < 0.5) features.push(ACTIVITY_POOL[Math.floor(r() * ACTIVITY_POOL.length)]);

      // Family
      if (sleeps >= 5 && r() < 0.7) features.push("family-friendly");
      if (sleeps >= 4 && r() < 0.4) features.push(FAMILY_POOL[1 + Math.floor(r() * 2)]);

      // De-dupe
      const uniqueFeatures = Array.from(new Set(features)) as SidebarFeatureKey[];

      // Build collections
      const collections: TopBarCollection[] = [];

      // Hot tub or pool → hot-tubs-pools
      if (uniqueFeatures.includes("hot-tub") || uniqueFeatures.includes("private-pool") || uniqueFeatures.includes("shared-pool")) {
        collections.push("hot-tubs-pools");
      }

      // Large
      if (sleeps >= 8) collections.push("large-holiday-homes");

      // Country
      if (uniqueFeatures.includes("rural-countryside") || uniqueFeatures.includes("village-setting")) {
        if (r() < 0.7) collections.push("country-cottages");
      }

      // Romantic — sleeps 2 + hot-tub or log-burner
      if (sleeps === 2 && (uniqueFeatures.includes("hot-tub") || uniqueFeatures.includes("log-burner-open-fire"))) {
        collections.push("romantic-retreats");
      }

      // Sea views ~50%
      if (r() < 0.5) collections.push("sea-views");
      // Dog friendly ~50%
      if (r() < 0.5) collections.push("dog-friendly");

      // Occasion collections
      if (r() < 0.4) collections.push("2026-collection");
      if (r() < 0.13) collections.push("late-deals");
      if (r() < 0.2) collections.push("short-breaks");
      if (r() < 0.39) collections.push("winter-breaks");
      if (r() < 0.45) collections.push("easter-breaks");
      if (r() < 0.48) collections.push("october-half-term");

      const uniqueCollections = Array.from(new Set(collections)) as TopBarCollection[];

      cottages.push({
        id: `c-${String(id).padStart(3, "0")}`,
        name: COTTAGE_NAMES[nameIdx % COTTAGE_NAMES.length],
        location: alloc.name,
        townSlug: alloc.slug,
        region: alloc.region,
        pricePerWeek: price,
        sleeps,
        bedrooms,
        bathrooms,
        features: uniqueFeatures,
        collections: uniqueCollections,
        image: propertyImages[id % propertyImages.length],
      });
      nameIdx++;
      id++;
    }
  }

  return cottages;
};

export const cottagesCatalogueData: CottagesCatalogueData = {
  hero: {
    eyebrow: "OUR FULL SELECTION",
    name: "All Cottages",
    tagline:
      "One hundred and nineteen cottages across the three Cornwalls — filter by region, collection, or amenity to find yours",
    caption: "",
  },
  cottages: generateCottages(),
};
