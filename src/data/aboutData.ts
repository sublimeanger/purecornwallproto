import heroCornwall from "@/assets/destinations-hero-cornwall.jpg";
import team1 from "@/assets/property-1.jpg";
import team2 from "@/assets/property-2.jpg";
import team3 from "@/assets/property-3.jpg";
import team4 from "@/assets/property-4.jpg";
import type { FounderStorySubsection } from "@/components/about/FounderStory";
import type { ValueCard } from "@/components/about/ValueCards";
import type { TeamMember } from "@/components/about/TeamGrid";
import type { TrustStat } from "@/components/seo/TrustStrip";

export interface AboutData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  trustStats: TrustStat[];
  compactIntro: string;
  founderStory: FounderStorySubsection[];
  values: ValueCard[];
  team: TeamMember[];
}

export const aboutData: AboutData = {
  hero: {
    image: heroCornwall,
    eyebrow: "WHO WE ARE",
    name: "About Pure Cornwall",
    tagline:
      "A small team, Cornwall-based, curating handpicked holiday cottages across the three Cornwalls",
    caption: "Placeholder imagery — to be replaced with commissioned Cornwall photography",
  },
  trustStats: [
    { value: "119", label: "Cornish Cottages" },
    { value: "3", label: "Regions Covered", subtext: "West · North · South" },
    { value: "20+", label: "Years Curating Cornwall" },
    { value: "4.9", label: "Guest Rating", hasStar: true, subtext: "4,200+ reviews" },
  ],
  compactIntro:
    "Pure Cornwall brings together holiday-home owners and guests who share a love of Cornwall. Since 2012, we've curated a collection of unique, handpicked properties — each one personally visited, each one chosen because it offers something genuine. Our small team is Cornwall-based, knows the coast inside out, and takes care of the details so guests can find their perfect Cornish escape with ease.",
  founderStory: [
    {
      heading: "How Pure Cornwall Started",
      paragraphs: [
        "Pure Cornwall was founded in 2012 by **John and Sarah**, who had been letting their own Cornish cottage for a decade and knew how the industry could be better. The market at the time was full of big listings sites with thousands of properties none of them had ever visited, and small independents whose catalogues were limited to a few dozen homes.",
        "What was missing was the middle ground — **a curated collection, big enough to serve serious holiday demand, small enough that every cottage is genuinely known**. Pure Cornwall started with 18 cottages John and Sarah had personally stayed in. Today we look after 119, and the principle hasn't changed: every cottage is visited, tested, and only added if we'd happily spend a week there ourselves.",
      ],
    },
    {
      heading: "What We Actually Do",
      paragraphs: [
        "We work on both sides of the holiday-cottage relationship. **For guests**, we curate, describe, photograph, and support — from the first browse on the website to a phone call at 11pm if the heating stops working. **For owners**, we take care of everything that turns a holiday home into a well-let business: styling advice, professional photography, copywriting, SEO, housekeeping coordination, marketing, and the booking platform itself.",
        "The model works because we're small enough to know every cottage and every owner personally, but well-enough established that every listing is genuinely promoted. Owners joining Pure Cornwall know their home isn't a line item in a spreadsheet — it's one of a handful we'll spend real time marketing this year.",
      ],
    },
    {
      heading: "Rooted Locally",
      paragraphs: [
        "We're proud to champion Cornwall by working with **trusted local businesses**. Our housekeeping teams are local. Our photographers are local. The welcome hamper suppliers are Cornish. The florists we recommend to owners are half-a-mile from the cottages they supply.",
        "This isn't marketing — it's how holiday lettings should work when you live where you operate. Cornwall has its own identity, its own economy, and a strong sense of what's genuinely from here and what isn't. Every decision Pure Cornwall makes runs through that filter.",
      ],
    },
  ],
  values: [
    {
      icon: "shield-check",
      eyebrow: "OUR COMMITMENT",
      title: "Every cottage is personally visited",
      body: "We don't list properties sight unseen. Every cottage in our collection has been personally visited — usually stayed in — by one of our team. If we wouldn't spend a week there, we don't take it on.",
    },
    {
      icon: "users",
      eyebrow: "OUR APPROACH",
      title: "You talk to real people",
      body: "We answer the phone ourselves. Emails go to named team members. When something needs fixing, a Cornwall-based person coordinates it. No call centre, no ticketing system, no chatbot first.",
    },
    {
      icon: "map-pin",
      eyebrow: "OUR KNOWLEDGE",
      title: "Cornwall is where we live",
      body: "Our team is based in Cornwall, walks the coast path, knows which tides matter, and has personal recommendations for every town we list. That knowledge shapes every property description and every guest conversation.",
    },
    {
      icon: "hand-heart",
      eyebrow: "OUR VALUES",
      title: "Local businesses, always",
      body: "Our housekeepers, photographers, hamper suppliers, and maintenance teams are all Cornish. When you book with Pure Cornwall, your money stays largely in the Cornish economy. That matters to us.",
    },
  ],
  team: [
    {
      firstName: "John",
      role: "FOUNDER",
      bio: "John founded Pure Cornwall in 2012 after a decade letting his own cottage. Based in Truro, he knows every cottage in the portfolio personally and still drives the route between the three Cornwalls most weeks.",
      image: team1,
    },
    {
      firstName: "Sarah",
      role: "FOUNDER",
      bio: "Co-founder alongside John. Sarah runs the owner side of Pure Cornwall — bringing new cottages into the collection, advising on styling and photography, and keeping the relationships warm with the people who trust us with their homes.",
      image: team2,
    },
    {
      firstName: "Rebecca",
      role: "HEAD OF CONTENT",
      bio: "Rebecca moved to Penzance in 2017 from a freelance travel journalism background. She writes everything you read on the site — cottage descriptions, journal articles, the guides that help you decide. Her work has appeared in Telegraph Travel and Condé Nast Traveller.",
      image: team3,
    },
    {
      firstName: "Jamie",
      role: "HEAD OF DIGITAL",
      bio: "Jamie runs everything technical at Pure Cornwall — the website, the booking platform, the search that surfaces the right cottage to the right guest. Based in Peterborough rather than Cornwall, but on the train down enough that it feels borrowed home.",
      image: team4,
    },
  ],
};
