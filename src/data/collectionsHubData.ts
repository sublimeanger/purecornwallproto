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
    eyebrow: "BROWSE BY THEME",
    name: "Collections",
    tagline:
      "Cottages grouped by the thing that matters most to your stay — a hot tub, a sea view, a pet-friendly garden, or the right time of year",
    caption: "Placeholder imagery — to be replaced with commissioned Cornwall photography",
  },
  compactIntro:
    "Twelve collections across the Pure Cornwall portfolio. Some are about the cottage itself — a hot tub, a sea view, a secure garden for the dog. Others are about when you're going — a short break, a winter escape, an Easter week. Each collection is a filter across all of our cottages.",
  collections: [
    // Features cluster
    { slug: "dog-friendly", name: "Dog Friendly", group: "features", groupLabel: "FEATURE", image: property1, descriptor: "Cottages that welcome the whole family, dog included — secure gardens, tough floors, and walks from the door.", cottageCount: 75, fromPrice: 695, themeImageHint: "dog on a Cornish beach, golden hour, salt-stained cottage in the background" },
    { slug: "sea-views", name: "Sea Views", group: "features", groupLabel: "FEATURE", image: property3, descriptor: "Cottages where the Atlantic is the first thing you see — cliff-tops, harbour-fronts, and panoramic bay views.", cottageCount: 59, fromPrice: 795, themeImageHint: "cottage window or balcony with Atlantic Ocean filling the frame, low sun, no humans" },
    { slug: "hot-tubs-pools", name: "Hot Tubs & Pools", group: "features", groupLabel: "FEATURE", image: property2, descriptor: "Heated hot tubs and private pools — from outdoor garden tubs to indoor poolside luxury.", cottageCount: 35, fromPrice: 895, themeImageHint: "outdoor hot tub at dusk, steam rising, sea view or garden setting, two glasses of wine on the rim" },
    { slug: "large-holiday-homes", name: "Large Holiday Homes", group: "features", groupLabel: "FEATURE", image: property4, descriptor: "Sleeping 8 or more. For family Christmases, three-generation gatherings, and weekends with space to spread out.", cottageCount: 44, fromPrice: 1495, themeImageHint: "large family-scale cottage exterior, multiple people softly lit in foreground, late afternoon" },
    { slug: "romantic-retreats", name: "Romantic Retreats", group: "features", groupLabel: "FEATURE", image: property3, descriptor: "Cottages built for two — hidden harbours, log fires, deep baths, and a view worth lingering over.", cottageCount: 36, fromPrice: 795, themeImageHint: "intimate cottage interior, fireplace lit, one or two people in soft-focus background" },
    { slug: "country-cottages", name: "Country Cottages", group: "features", groupLabel: "FEATURE", image: property5, descriptor: "Traditional stone cottages set back from the coast — wood burners, beamed ceilings, and quiet lanes.", cottageCount: 44, fromPrice: 695, themeImageHint: "stone cottage with climbing rose or foxgloves, quiet lane, no sea visible, inland Cornwall feel" },
    // Occasions cluster
    { slug: "2026-collection", name: "2026 Collection", group: "occasions", groupLabel: "OCCASION", image: property6, descriptor: "Our freshly curated 2026 cottages — new additions, refurbished favourites, and hidden gems.", cottageCount: 47, fromPrice: 695, themeImageHint: "fresh and current — bright modern interior or a cottage with new landscaping, spring or early summer light" },
    { slug: "late-deals", name: "Late Deals", group: "occasions", groupLabel: "OCCASION", image: property1, descriptor: "Last-minute escapes with genuine discounts — cottages available within the next 6 weeks.", cottageCount: 15, fromPrice: 495, themeImageHint: "cottage exterior at a warm inviting hour, packed suitcase at the door — urgency without cliché" },
    { slug: "short-breaks", name: "Short Breaks", group: "occasions", groupLabel: "OCCASION", image: property5, descriptor: "Three and four-night mid-week and weekend breaks available year-round outside peak season.", cottageCount: 24, fromPrice: 395, themeImageHint: "cottage doorway with welcome lamp, late afternoon arrival, luggage or welcome hamper visible" },
    { slug: "winter-breaks", name: "Winter Breaks", group: "occasions", groupLabel: "OCCASION", image: property6, descriptor: "Cottages with proper winter credentials — wood burners, underfloor heating, storm-watching coves.", cottageCount: 46, fromPrice: 595, themeImageHint: "cottage exterior with wood smoke from chimney, bare-tree light, puddles, interior glow" },
    { slug: "easter-breaks", name: "Easter Breaks", group: "occasions", groupLabel: "OCCASION", image: property4, descriptor: "Spring-light cottages for the Easter holidays — long walks, first swims, gardens waking up.", cottageCount: 53, fromPrice: 895, themeImageHint: "cottage with daffodils or spring blossom, clear sky, walkers or a dog on the lane" },
    { slug: "october-half-term", name: "October Half Term", group: "occasions", groupLabel: "OCCASION", image: property2, descriptor: "Autumn-colour cottages for the half-term week — storm watches, wood fires, empty beaches.", cottageCount: 57, fromPrice: 750, themeImageHint: "autumn light, reddened trees, cottage with wood stove glowing through window" },
  ],
  faqs: [
    {
      q: "How do collections differ from destinations?",
      a: "Destinations are geographic — St Ives, Padstow, Falmouth. Collections are thematic — dog-friendly, hot tub, sea view. A single cottage typically appears in its own destination and in several collections. You can filter by both — for example, dog-friendly cottages in St Ives — by applying a collection filter within a destination page.",
    },
    {
      q: "Can a cottage be in more than one collection?",
      a: "Yes, most are. A cottage with a hot tub, sea view, and secure garden appears in Hot Tubs & Pools, Sea Views, and Dog Friendly simultaneously. This is by design — collections are facets of each cottage, not rigid categories.",
    },
    {
      q: "Are collection cottages more expensive than others?",
      a: "Not systematically. Some collections skew premium (Hot Tubs & Pools, Large Holiday Homes). Others sit at the mainstream rate (Dog Friendly, Short Breaks, Country Cottages). Use the price filter on any collection page to narrow by budget.",
    },
    {
      q: "How often do the collection lists change?",
      a: "Constantly in small ways. As cottages are added or removed from our portfolio, and as owners upgrade features (a new hot tub, a refurbished kitchen), cottages move between collections. The counts shown are current as of the last portfolio sync.",
    },
    {
      q: "Which collections are most popular?",
      a: "Dog Friendly is the biggest, followed by Sea Views, Short Breaks, and Hot Tubs & Pools. Easter Breaks and October Half Term are tightly booked — typically sold out months in advance. Late Deals are the most fluid — refreshed weekly.",
    },
    {
      q: "Can I suggest a new collection?",
      a: "Yes — we add collections based on genuine visitor demand, not what we think sounds good on a brochure. If there's a type of holiday you'd look for that isn't a collection yet, tell us and we'll consider it. Contact form below.",
    },
  ],
};
