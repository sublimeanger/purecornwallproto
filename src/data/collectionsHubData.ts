import heroSurf from "@/assets/collections-hero-surf.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

import type { CollectionHubCard } from "@/components/hub/CollectionsGrid";
import type { DestinationFAQ as FAQItem } from "@/data/stIvesData";

export interface CollectionsHubData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  compactIntro: string;
  collections: CollectionHubCard[];
  faqs: FAQItem[];
}

export const collectionsHubData: CollectionsHubData = {
  hero: {
    image: heroSurf,
    eyebrow: "SHOP BY TYPE",
    name: "Collections",
    tagline:
      "Cottages grouped by the thing that matters most to your stay — a hot tub, a sea view, a pet-friendly garden, or the right time of year",
    caption: "Placeholder imagery — to be replaced with commissioned Cornwall photography",
  },
  compactIntro:
    "Thirteen collections across the Pure Cornwall portfolio. Some are about the cottage itself — a hot tub, a sea view, a secure garden for the dog. Others are about when you're going — a short break, a winter escape, Christmas by the fire. Each collection is a filter across all 119 cottages.",
  collections: [
    { slug: "dog-friendly", name: "Dog Friendly", group: "activity", groupLabel: "ACTIVITY", image: property1, descriptor: "Cottages that welcome the whole family, dog included — secure gardens, tough floors, and walks from the door.", cottageCount: 42, fromPrice: 695 },
    { slug: "hot-tubs", name: "Hot Tubs", group: "features", groupLabel: "FEATURE", image: property2, descriptor: "Heated outdoor hot tubs with sea views, garden settings, or covered all-weather pergolas.", cottageCount: 28, fromPrice: 895 },
    { slug: "sea-view", name: "Sea View", group: "features", groupLabel: "FEATURE", image: property3, descriptor: "Cottages where the Atlantic is the first thing you see. Cliff-tops, harbour-fronts, and panoramic bay views.", cottageCount: 56, fromPrice: 795 },
    { slug: "large-cottages", name: "Large Cottages", group: "character", groupLabel: "CHARACTER", image: property4, descriptor: "Sleeping 8 or more. For family Christmases, three-generation gatherings, and weekends with space to spread out.", cottageCount: 24, fromPrice: 1495 },
    { slug: "country-cottages", name: "Country Cottages", group: "character", groupLabel: "CHARACTER", image: property5, descriptor: "Traditional stone cottages set back from the coast — wood burners, beamed ceilings, and quiet lanes.", cottageCount: 19, fromPrice: 695 },
    { slug: "ev-charger", name: "EV Charger", group: "features", groupLabel: "FEATURE", image: property6, descriptor: "Cottages with on-site electric vehicle charging — 7kW and above, no extra cost, no queuing at public chargers.", cottageCount: 11, fromPrice: 895 },
    { slug: "surfing-escapes", name: "Surfing Escapes", group: "activity", groupLabel: "ACTIVITY", image: property1, descriptor: "Cottages within a walk of proper surf breaks — Porthmeor, Fistral, Crooklets, Watergate Bay.", cottageCount: 22, fromPrice: 750 },
    { slug: "beach-retreats", name: "Beach Retreats", group: "activity", groupLabel: "ACTIVITY", image: property2, descriptor: "Front-row cottages with direct or near-direct beach access. Tidal, salt-tinged, and minutes to the waves.", cottageCount: 34, fromPrice: 850 },
    { slug: "romantic-retreats", name: "Romantic Retreats", group: "character", groupLabel: "CHARACTER", image: property3, descriptor: "Cottages built for two — hidden harbours, log fires, deep baths, and a view worth lingering over.", cottageCount: 18, fromPrice: 795 },
    { slug: "pools", name: "Cottages with Pools", group: "features", groupLabel: "FEATURE", image: property4, descriptor: "Private heated pools — indoor, outdoor, or covered. For summer dips and shoulder-season swims.", cottageCount: 9, fromPrice: 1295 },
    { slug: "short-breaks", name: "Short Breaks", group: "seasonal", groupLabel: "SEASONAL", image: property5, descriptor: "Three and four-night mid-week and weekend breaks available year-round outside peak season.", cottageCount: 68, fromPrice: 395 },
    { slug: "winter-breaks", name: "Winter Breaks", group: "seasonal", groupLabel: "SEASONAL", image: property6, descriptor: "Cottages with proper winter credentials — wood burners, underfloor heating, storm-watching coves.", cottageCount: 52, fromPrice: 595 },
    { slug: "christmas-nye", name: "Christmas & NYE", group: "seasonal", groupLabel: "SEASONAL", image: property1, descriptor: "Cottages dressed for Christmas and New Year — fairy lights, decorated trees, and festive welcomes in the hamper.", cottageCount: 41, fromPrice: 1195 },
  ],
  faqs: [
    {
      q: "How do collections differ from destinations?",
      a: "Destinations are geographic — St Ives, Padstow, Falmouth. Collections are thematic — dog-friendly, hot tub, sea view. A single cottage typically appears in its own destination and in several collections. You can filter by both — for example, dog-friendly cottages in St Ives — by applying a collection filter within a destination page.",
    },
    {
      q: "Can a cottage be in more than one collection?",
      a: "Yes, most are. A cottage with a hot tub, sea view, and secure garden appears in Hot Tubs, Sea View, and Dog Friendly simultaneously. This is by design — collections are facets of each cottage, not rigid categories.",
    },
    {
      q: "Are collection cottages more expensive than others?",
      a: "Not systematically. Some collections skew premium (Pools, Large Cottages, Christmas & NYE). Others sit at the mainstream rate (Dog Friendly, Short Breaks, Country Cottages). Use the price filter on any collection page to narrow by budget.",
    },
    {
      q: "How often do the collection lists change?",
      a: "Constantly in small ways. As cottages are added or removed from our portfolio, and as owners upgrade features (a new hot tub, a refurbished kitchen, EV charging installed), cottages move between collections. The counts shown are current as of the last portfolio sync.",
    },
    {
      q: "Which collections are most popular?",
      a: "Dog Friendly is the biggest, followed by Sea View, Short Breaks, and Hot Tubs. Christmas & NYE is the most tightly booked — typically sold out by September. The rarer ones (Cottages with Pools, EV Charger) are niche but growing fast.",
    },
    {
      q: "Can I suggest a new collection?",
      a: "Yes — we add collections based on genuine visitor demand, not what we think sounds good on a brochure. If there's a type of holiday you'd look for that isn't a collection yet, tell us and we'll consider it. Contact form below.",
    },
  ],
};
