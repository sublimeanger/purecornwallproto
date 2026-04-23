import heroCornwall from "@/assets/hero-journal.jpg";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";
import atmosHarbour from "@/assets/st-ives/atmos-harbour.jpg";
import atmosBeach from "@/assets/st-ives/atmos-beach.jpg";

export type JournalCategoryKey =
  | "destination-guides"
  | "seasonal"
  | "food-drink"
  | "things-to-do"
  | "for-families"
  | "travel-planning";

export const CATEGORY_LABELS: Record<JournalCategoryKey, string> = {
  "destination-guides": "Destination Guides",
  "seasonal": "Seasonal",
  "food-drink": "Food & Drink",
  "things-to-do": "Things To Do",
  "for-families": "For Families",
  "travel-planning": "Travel & Planning",
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "image"; src: string; caption?: string }
  | { type: "pullQuote"; text: string };

export interface JournalArticleCTA {
  eyebrow: string;
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: JournalCategoryKey;
  excerpt: string;
  heroImage: string;
  cardImage: string;
  publishDate: string;
  readingTime: number;
  body: ArticleBlock[];
  cta?: JournalArticleCTA;
}

export interface JournalData {
  hero: { image: string; eyebrow: string; name: string; tagline: string; caption: string };
  articles: JournalArticle[];
}

export const journalData: JournalData = {
  hero: {
    image: heroCornwall,
    eyebrow: "WORDS FROM CORNWALL",
    name: "Journal",
    tagline:
      "Cornwall writing from Rebecca Moore — places, people, seasons, and the things worth knowing before you come",
    caption: "",
  },
  articles: [
    {
      slug: "one-perfect-day-in-st-ives",
      title: "One Perfect Day in St Ives",
      category: "destination-guides",
      excerpt:
        "St Ives fills up fast in summer. Here's how to see the best of it in a single day — when to arrive, where to park, and which galleries earn their queues.",
      heroImage: atmosHarbour,
      cardImage: atmosHarbour,
      publishDate: "October 2025",
      readingTime: 8,
      body: [
        { type: "paragraph", text: "The secret to St Ives is arriving before nine. By ten in peak season the harbour car park is full, the Tate queue is forming, and the pasty shop on Fore Street has a line out of the door. Come before coffee, park at the Station carpark — walk in via Carbis Bay if you can — and give yourself three hours before the rest of the world catches up." },
        { type: "paragraph", text: "**Porthminster Beach** is where I'd start. It's the most sheltered of the four town beaches, a crescent of soft pale sand between the station and the harbour. At eight in the morning there's almost no one on it except a few paddleboarders and the cafe setting up for the day. Walk its length, touch the water, and you've earned the rest of the day." },
        { type: "image", src: property1, caption: "Porthminster Beach at eight in the morning, before the town wakes up." },
        { type: "heading", text: "The Tate, Before The Crowds" },
        { type: "paragraph", text: "Tate St Ives opens at ten. Be there at 9:55 with a coffee from the kiosk. The first hour is genuinely empty — you can have a room to yourself in the main galleries, which anyone who's visited in July will tell you is a different experience altogether. The permanent collection rotates but there's always something worth seeing, and the rooftop cafe has one of the best views in Cornwall." },
        { type: "paragraph", text: "From Tate, walk down through the Downalong streets. These are the oldest part of town — narrow granite lanes, whitewashed cottages, front doors that open directly onto the road. There's no plan here; you wander, you get lost, you find a smokehouse you didn't know existed." },
        { type: "pullQuote", text: "The first hour at Tate St Ives is genuinely empty — a different experience altogether from what most visitors remember." },
        { type: "heading", text: "Lunch, Then The Barbara Hepworth Museum" },
        { type: "paragraph", text: "For lunch, **Porthmeor Beach Cafe** is my pick — fresh fish, sea views, and they'll hold a table if you call ahead. After, walk up to the Barbara Hepworth Museum on Ayr Lane. It's her garden studio, kept as she left it. Twenty minutes to walk through, an hour if you really look. Smaller than Tate, calmer, and to my mind the more moving of the two." },
        { type: "paragraph", text: "End the day at **The Sloop Inn** for an early pint, then a slow wander along the harbour as the light shifts. The boats tilt with the tide. The seagulls reach for your chips. It's St Ives at its best — which you've now seen without the crowds." },
      ],
      cta: {
        eyebrow: "PLAN YOUR STAY",
        heading: "Ready to stay in St Ives?",
        body: "We look after eight cottages in St Ives — from harbourfront apartments to Downalong hideaways. Browse the full selection.",
        buttonText: "SEE ST IVES COTTAGES →",
        buttonHref: "/destinations/st-ives",
      },
    },
    {
      slug: "cornwall-in-october-the-quiet-month",
      title: "Cornwall in October: The Quiet Month",
      category: "seasonal",
      excerpt:
        "October is the month Cornwall returns to itself. Beaches empty, the light turns amber, and every harbour town stops being a performance and starts being a place again.",
      heroImage: property6,
      cardImage: property6,
      publishDate: "September 2025",
      readingTime: 6,
      body: [
        { type: "paragraph", text: "I've lived in Penzance for eight years, and October is the month I stop telling people not to come. Through July, August, and early September the towns are stretched thin — queues, traffic, car parks that fill at seven in the morning. By the second week of October everything relaxes. The cafes that were brusque in August are patient again. The beach walks that were elbow-to-elbow have five people on them, spread across a mile of sand." },
        { type: "paragraph", text: "The light's the other thing. Cornish summer light is bright and flat. October light is low and amber — it falls sideways across the coast path, catches in the gorse, turns the sea from Atlantic slate to something softer. Photographers know this. Painters know this. If you've ever wondered why the St Ives art colony was founded, come in October." },
        { type: "heading", text: "What's Still Open" },
        { type: "paragraph", text: "Everything the guides promise is open in summer, more or less. **Minack Theatre** runs shows into late October. **Tate St Ives** is open seven days. **Trebah Gardens** is at their October best — the acers turning, the camellias still holding on. The food scene is a bit reduced — some pubs close Mondays — but the places worth going are all running." },
        { type: "image", src: atmosBeach, caption: "An empty October beach on the north coast, shoulder of the day." },
        { type: "paragraph", text: "October half term is the one busy week in an otherwise quiet month. Families come down for the October holiday; prices bump up, cottages book out. Outside that week — mid-month and late-month especially — Cornwall is as close to empty as it ever gets. Which is to say, still not empty, but uncrowded in a way August people wouldn't recognise." },
        { type: "heading", text: "What to Pack" },
        { type: "paragraph", text: "October is variable. You'll get one genuinely warm day in a week, two cold ones, four somewhere in between. A proper waterproof, walking shoes, and one layer more than you think. The sea is still bath-warm (around 15°C) for another three weeks after the school kids stop swimming, and I'd argue the best beach days in Cornwall are early October." },
        { type: "paragraph", text: "Book cottages with wood burners. Yes, they're lovely in summer too, but in October a wood burner is the difference between a cottage and a home." },
      ],
      cta: {
        eyebrow: "BROWSE BY SEASON",
        heading: "Cornwall cottages for autumn breaks",
        body: "Our October Half Term and Winter Breaks collections feature cottages that come into their own in the quiet months — wood burners, underfloor heating, storm-watching coves.",
        buttonText: "SEE OCTOBER HALF TERM COTTAGES →",
        buttonHref: "/collections/october-half-term",
      },
    },
    {
      slug: "what-to-pack-for-cornwall",
      title: "What to Pack for Cornwall",
      category: "travel-planning",
      excerpt:
        "The weather does four seasons in a day. The coast path eats shoes. The sun is stronger than you expect. Here's what actually works, across eight years of trial and error.",
      heroImage: property2,
      cardImage: property2,
      publishDate: "September 2025",
      readingTime: 5,
      body: [
        { type: "paragraph", text: "Every visitor I've hosted has brought at least one thing they ended up not using, and forgotten at least one thing they wished they had. The list below is what actually matters, in the order of regret-if-missing." },
        { type: "heading", text: "Footwear, First" },
        { type: "paragraph", text: "One pair of **proper walking shoes or light hiking boots**. The Cornish coast path is not a pavement — it's rock, clay, grass, sand, and at least two stretches where you'll wade through a stream. Trainers won't cope. Flip-flops are fine for the beach and nowhere else. My go-to: Salomon X Ultras, or any merino-lined Meindl. Break them in before you arrive." },
        { type: "paragraph", text: "Second pair: something waterproof for rain days in town. Either lightweight Gore-Tex trainers, or a pair of wellies if you're the type. Don't pack white shoes — you'll regret them within a day." },
        { type: "heading", text: "Weather Clothing" },
        { type: "paragraph", text: "A **proper waterproof** — not a pac-a-mac. A Cornish rain shower in a wind lasts ten minutes and soaks through anything less than 10,000mm hydrostatic head. I recommend Patagonia Torrentshell or Rab Kinetic. One thick fleece or mid-layer. One thin thermal base layer even in summer. A warm hat. These all live in a daypack." },
        { type: "paragraph", text: "On the other end — **proper sun protection**. Cornish sun is stronger than English sun. You're 300 miles south of Aberdeen with nothing between you and the Atlantic. SPF 30 minimum, reapplied after every sea swim. A hat with a brim. Sunglasses that don't fall off in the wind." },
        { type: "heading", text: "Swimming, If You Plan To" },
        { type: "paragraph", text: "**Swimming costume, towel, changing robe.** The robe isn't optional in shoulder seasons — changing on a windswept beach without one is miserable. Dryrobe is the standard but any oversized fleece-lined poncho works. Wetsuit if you're surfing; if you're just swimming, the sea's warm enough from June to October without one." },
        { type: "paragraph", text: "One surprise item: **a compact binoculars**. The coast path gives you peregrines, gannets, sometimes basking sharks from June onwards. You notice twenty percent more with them." },
      ],
    },
    {
      slug: "best-coast-path-walk-each-town",
      title: "The Best Coast Path Walk From Each of the Four Priority Towns",
      category: "things-to-do",
      excerpt:
        "St Ives, Padstow, Bude, Newquay — four towns, four walks. Each one starts at the town and ends somewhere worth the effort.",
      heroImage: property3,
      cardImage: property3,
      publishDate: "August 2025",
      readingTime: 7,
      body: [
        { type: "paragraph", text: "The South West Coast Path is 630 miles long. Cornwall's stretch is about 300. Walking the whole thing takes six weeks. For most visitors, the right approach is picking one spectacular section and doing it well — this guide gives you one proven route from each of our four priority towns." },
        { type: "heading", text: "St Ives to Zennor — 6 miles" },
        { type: "paragraph", text: "The classic St Ives walk. Leaves via Porthmeor Beach, climbs up past The Island, and follows the cliffs west. It's **rocky, exposed, and relentlessly beautiful** — you're above the Atlantic the entire way, with Godrevy Lighthouse visible in the distance. Zennor is the destination: a 12th-century church, a mermaid legend, and The Tinners Arms for lunch. Catch the bus back or retrace your steps." },
        { type: "image", src: atmosHarbour, caption: "The coast path north from St Ives, about a mile from Zennor." },
        { type: "heading", text: "Padstow to Trevone — 4 miles" },
        { type: "paragraph", text: "Leaves Padstow harbour westbound, crosses the estuary sand flats at low tide (check tide tables!), then climbs up to open clifftops. **Stepper Point** is the photo — a cliff overlooking the Camel estuary with the daymark tower above. From there it's another mile down to Trevone, a beach village with a rock pool and a seasonal cafe. Return by bus via Harlyn Bay." },
        { type: "heading", text: "Bude to Widemouth — 3 miles" },
        { type: "paragraph", text: "Short, sharp, spectacular. Leaves from Bude's Summerleaze Beach, climbs immediately onto the cliffs, and follows a genuinely dramatic coastline — tall black shale cliffs, tiny beaches that appear and disappear. Widemouth Bay opens out suddenly after the final climb. Surfers' beach, miles of sand. Return along the beach at low tide; otherwise bus." },
        { type: "heading", text: "Newquay to Holywell Bay — 5 miles" },
        { type: "paragraph", text: "The most varied of the four. Leaves Newquay's Fistral Beach, heads west past **Lewinnick Cove** and **Porth Joke** (a hidden beach only reachable on foot), and finishes at Holywell Bay — the beach from the Poldark TV series. Dunes, low tides, caves in the cliff. Takes about two hours at a walking pace. Bus back to Newquay." },
        { type: "paragraph", text: "For each walk, start early and take water. The path has almost no shade. Always check the tide before a section that involves beach-walking. And never, ever, walk off-path near the cliffs — the edges are undermined in places and people do lose their footing. Stay on the path, stay alive." },
      ],
    },
    {
      slug: "cornwall-with-a-dog-the-real-rules",
      title: "Cornwall With a Dog: The Real Rules",
      category: "for-families",
      excerpt:
        "Which beaches allow dogs year-round. Which restaurants actually welcome them. Why you need a proper lead on the coast path. Cornwall with a dog is brilliant — if you know the rules.",
      heroImage: property4,
      cardImage: property4,
      publishDate: "July 2025",
      readingTime: 6,
      body: [
        { type: "paragraph", text: "I grew up with dogs and I travel with them. Cornwall with a dog is one of the best holidays you can take — long beach walks, pub gardens, coast path for miles. But there's a real set of rules under the surface, and visitors who don't know them end up frustrated. Here are the ones that matter." },
        { type: "heading", text: "Beach Rules" },
        { type: "paragraph", text: "Between **Easter and October**, roughly 60% of Cornwall's beaches have dog restrictions — either full bans or bans during beach-manned hours (usually 10am-6pm). Between October and Easter, almost all beaches are dog-friendly, full-day, no lead required. The exception is a small number of town beaches where dogs must stay on a lead year-round." },
        { type: "paragraph", text: "Dog-friendly year-round beaches worth knowing: **Porthmeor in St Ives** (main beach restricted, but the small rocky bay at the north end is open), **Gwithian Towans**, **Sandymouth near Bude**, **most of the Lizard peninsula**, **Polurrian and Mullion coves**." },
        { type: "heading", text: "Coast Path" },
        { type: "paragraph", text: "The coast path itself is entirely dog-legal, year-round. A few things to know: some sections pass through farm fields with livestock — you must have your dog on a lead around sheep or cattle. The farmers will not be gentle if they find a loose dog chasing lambs. There are also stiles (your dog will need to be liftable or capable of the gap) and some genuine cliff edges where a lead is mandatory for anyone's sanity." },
        { type: "image", src: property5, caption: "Dog-friendly sections of the coast path near Trevose Head, Padstow." },
        { type: "paragraph", text: "**Drinking water** is the other issue. On a hot July walk, your dog needs more water than you do. Carry a collapsible bowl, refill at the pub at the end. Paws on the granite coast path get hot in direct sun — if it's uncomfortable for your bare hand, it's uncomfortable for paws." },
        { type: "heading", text: "Eating Out" },
        { type: "paragraph", text: "Most Cornish pubs welcome dogs inside or in the garden. Some even have dog menus (seriously — **The Cornish Arms in St Merryn** offers it). Restaurants with outdoor seating usually welcome dogs; indoor-only places vary — always call ahead. Cafes on beaches almost all welcome dogs on the terraces. Essentially: if you're a dog person, Cornwall is ready for you; you just need to ask." },
      ],
      cta: {
        eyebrow: "BROWSE DOG-FRIENDLY COTTAGES",
        heading: "75 cottages that welcome dogs",
        body: "Every cottage in our Dog Friendly collection has been checked for secure gardens, tough floors, and walks from the door. Most welcome more than one dog.",
        buttonText: "SEE DOG FRIENDLY COTTAGES →",
        buttonHref: "/collections/dog-friendly",
      },
    },
    {
      slug: "where-to-eat-padstow-beyond-the-obvious",
      title: "Where to Eat in Padstow (Beyond the Obvious)",
      category: "food-drink",
      excerpt:
        "Everyone knows the Seafood Restaurant. Here's where to eat the other nine meals of your Padstow holiday — bakeries, seafood shacks, and one unmarked sushi counter.",
      heroImage: property5,
      cardImage: property5,
      publishDate: "August 2025",
      readingTime: 5,
      body: [
        { type: "paragraph", text: "Padstow is a one-restaurant town only if you stop at the obvious. Rick Stein's Seafood Restaurant is excellent and deserves its reputation — but it's the tenth meal of your holiday, not the first. Here's where to eat the other nine." },
        { type: "heading", text: "Breakfast" },
        { type: "paragraph", text: "**Stein's Fishmongers** opens at 8am and does a proper bacon sandwich made with their own bread. Or — better — the **Basement Bakery** in Strand Street: sourdough, croissants, good coffee. I've never had a bad morning at either." },
        { type: "heading", text: "Lunch, Harbourside" },
        { type: "paragraph", text: "The **Crab Shack on the harbour** does a genuinely good crab sandwich for £12. It's a wooden hut, not a restaurant. You eat standing on the harbour wall. It is one of the best lunches in Cornwall." },
        { type: "paragraph", text: "For something more substantial, **Prawn on the Lawn** on Lower Fore Street — the original Tom Adams seafood bar before he opened the London branch. Small, loud, local sherry. Book ahead." },
        { type: "heading", text: "Dinner, Not Stein's" },
        { type: "paragraph", text: "**Paul Ainsworth at No. 6** — a Michelin star that somehow remains a Cornish town restaurant rather than a tourist attraction. Book three months ahead. Or his gastropub, **The Mariners** at nearby Rock, for something more relaxed and less booked-out." },
        { type: "paragraph", text: "And the unmarked one: **sushi counter in the back of Rojanos in the Square** (Wednesdays and Thursdays only, off-menu). Ask for Andrea and don't expect to see a menu. A proper chef's-counter experience; maybe eight seats. If you've heard of Michael Caines' cooking in Cornwall, you've heard of this." },
      ],
    },
    {
      slug: "cornwall-with-kids-rainy-day-plans",
      title: "Cornwall With Kids: The Best Rainy Day Plans",
      category: "for-families",
      excerpt:
        "Cornwall gets wet. Cornwall is also full of brilliant indoor and bad-weather activities — here are the eight I'd take my niece and nephew to first.",
      heroImage: property1,
      cardImage: property1,
      publishDate: "July 2025",
      readingTime: 5,
      body: [
        { type: "paragraph", text: "The Cornish forecast will always include at least one rainy afternoon. Here's what to do with small humans on those days, ranked roughly by age appropriateness and weather-proofing." },
        { type: "heading", text: "The Eden Project (all ages)" },
        { type: "paragraph", text: "The biomes are indoors, enormous, warm, and full of interesting smells. Under-fives love the rainforest (toy-tigers hiding in the undergrowth); older kids get genuinely educational. Book ahead — it sells out on rainy days." },
        { type: "heading", text: "The Lost Gardens of Heligan (4+)" },
        { type: "paragraph", text: "Genuinely magical for small children. Sculptures hidden in the ferns, a vegetable garden they can touch, a 'giant' made of moss sleeping in the undergrowth. Mostly outdoor but with enough cover to survive a shower. Their cafe is pleasant." },
        { type: "image", src: property3, caption: "The Eden Project biomes on a wet Cornwall afternoon." },
        { type: "heading", text: "Flambards (6+)" },
        { type: "paragraph", text: "A rollercoaster park near Helston. It's a bit dated, a bit weird, and kids love it for exactly those reasons. Mostly outdoor rides but with an indoor Victorian village recreation that's worth an hour in itself." },
        { type: "heading", text: "The National Maritime Museum, Falmouth (all ages)" },
        { type: "paragraph", text: "Interactive, boats to climb, a tower with harbour views. Covered throughout. Two to four hours for most families. Good cafe." },
        { type: "heading", text: "Bowling at Newquay or Bude" },
        { type: "paragraph", text: "Obvious but it works. Both town centres have family bowling alleys that are warm, loud, and open when everything else shuts." },
        { type: "paragraph", text: "For pre-school kids: **the town libraries** in Penzance, Truro, and St Austell all have free weekday children's sessions (story time, singing). Warm, free, local, and sometimes the most social your pre-schooler will have been all week." },
      ],
    },
    {
      slug: "cornwall-winter-december",
      title: "Cornwall in Winter: A Case for December",
      category: "seasonal",
      excerpt:
        "Wet, windy, wood-smoke December. Why Cornwall in winter is the quietest and, for some of us, the best version of itself.",
      heroImage: property6,
      cardImage: property6,
      publishDate: "November 2025",
      readingTime: 5,
      body: [
        { type: "paragraph", text: "For my money, December in Cornwall is the best month. I mean this against the near-universal opinion that June-September is the 'Cornwall season.' July Cornwall is a performance. December Cornwall is a place." },
        { type: "paragraph", text: "The light changes at around half three. By four, it's nearly dark. A wood burner runs all evening. You cross the coast path and pass one other person in an hour. The sea goes dark, then steel-grey, then black. Every pub you enter is warm and the conversation includes the landlord." },
        { type: "heading", text: "What's Open, What's Closed" },
        { type: "paragraph", text: "**Tate St Ives** — open. **Minack Theatre** — closed October to March. **Eden Project** — open. Most pubs — open (some close Mondays). Most restaurants — open (some reduce days). The beaches — open, empty. The coast path — open, magnificent." },
        { type: "paragraph", text: "**Christmas and New Year** are the one busy window in an otherwise quiet December. Cottages book out by September for those two weeks. Mid-December (first three weeks) is as quiet as Cornwall ever gets. Book then if you want emptiness." },
        { type: "heading", text: "Storm Watching" },
        { type: "paragraph", text: "Cornwall's storms are a reason in themselves. Atlantic lows roll in between October and February — winds of 60mph, waves the height of buildings. Porthleven harbour is the famous spot. Sennen gets the biggest waves. The coast path near Land's End turns into an arena." },
        { type: "paragraph", text: "Please do not go close to the edges during a storm. Every winter, tourists get washed off the coast path. The waves reach further up the cliff than you'd expect. **Storm watching from a pub window is storm watching done right**." },
        { type: "paragraph", text: "For the full winter experience, book a cottage with a wood burner, a proper waterproof, and a three-day weather forecast full of westerlies. Bring slippers. Bring a book. Don't try to do too much." },
      ],
      cta: {
        eyebrow: "PLAN YOUR STAY",
        heading: "Winter-ready Cornwall cottages",
        body: "Cottages with wood burners, underfloor heating, and storm-watching views. All year-round welcoming.",
        buttonText: "SEE WINTER BREAKS →",
        buttonHref: "/collections/winter-breaks",
      },
    },
    {
      slug: "the-real-cornish-pasty",
      title: "The Real Cornish Pasty: How to Spot the Good Ones",
      category: "food-drink",
      excerpt:
        "Crimp on the side, not the top. Steak (not mince), swede (not turnip), potato, onion. Pepper. Pastry that holds. Here's what makes a real Cornish pasty — and which bakeries actually make them.",
      heroImage: property2,
      cardImage: property2,
      publishDate: "June 2025",
      readingTime: 4,
      body: [
        { type: "paragraph", text: "The Cornish pasty has Protected Geographical Indication, which means a 'Cornish pasty' has to be made in Cornwall to specific rules. Plenty of pasties on sale in Cornwall do not meet those rules, and plenty of bakers in Cornwall make excellent ones. Knowing the difference is a small but real holiday skill." },
        { type: "heading", text: "The Crimp" },
        { type: "paragraph", text: "A real Cornish pasty has the **crimp on the side**, running in a D-shape from one corner to the other. Not on the top. The side-crimp is structural — it's how miners held them by the thick edge and threw the crust away (theoretically; my grandmother always ate the crust)." },
        { type: "paragraph", text: "If the crimp is on top, it's a Devon pasty, or a fake Cornish one. Polite to eat, but it's not the real thing." },
        { type: "heading", text: "The Filling" },
        { type: "paragraph", text: "Beef (proper diced steak, not mince), swede, potato, onion. Salt and a lot of black pepper. That's it. No carrot, no peas, no gravy poured in. The vegetables and meat steam together inside the pastry; the moisture they release is the gravy. A pasty with mince in it is a meat pie pretending to be a pasty." },
        { type: "image", src: property4, caption: "A proper side-crimped Cornish pasty, from a small bakery in Penzance." },
        { type: "heading", text: "Where to Buy" },
        { type: "paragraph", text: "**Philps in Hayle** — probably the best in Cornwall. Open early, queue out the door by lunch. **Ann's Pasties on the Lizard** — equally celebrated, smaller operation. **The Cornish Bakery** chain — surprisingly good given the scale. **Warrens** — solid but more variable. **Greggs** — please don't." },
        { type: "paragraph", text: "Eat them warm, standing somewhere with a sea view. Don't put ketchup on it. Do put a bit of brown sauce if you must. And don't trust the petrol-station ones — those are the fake pasties feeding the fake-pasty problem." },
      ],
    },
    {
      slug: "driving-in-cornwall-honest-guide",
      title: "Driving in Cornwall: An Honest Guide",
      category: "travel-planning",
      excerpt:
        "The lanes are narrow. The parking is hard. The locals are patient up to a point. Here's how to drive in Cornwall without losing a wing mirror or a friend.",
      heroImage: property5,
      cardImage: property5,
      publishDate: "June 2025",
      readingTime: 6,
      body: [
        { type: "paragraph", text: "Cornwall is one of the great driving destinations in England. It's also genuinely difficult driving in places, and visitors regularly underestimate that. Here's what eight years of doing it daily has taught me." },
        { type: "heading", text: "The Lanes" },
        { type: "paragraph", text: "The vast majority of roads in Cornwall outside the A30 are single-track lanes with passing places. **Single-track means one car wide.** When you meet oncoming traffic, one of you reverses to the nearest passing place. There is etiquette here: the car nearest a passing place reverses; the one going downhill usually gives way to the one going uphill; tractors and buses always have right of way because they can't reverse easily." },
        { type: "paragraph", text: "Hedges in Cornwall are not hedges — they are **stone walls covered in vegetation**. Hitting one will damage your car badly. Drive slowly, hug the centre of the lane, and don't try to squeeze past oncoming cars on the narrow bits — pull into a passing place and wait." },
        { type: "heading", text: "Parking, Especially in Summer" },
        { type: "paragraph", text: "Every coastal town in Cornwall has a parking problem in summer. **St Ives** — park at the Station carpark and walk in (15 minutes), or use the park-and-ride from Lelant. **Padstow** — the harbour is full by 9:30am; there's a big carpark at the top of the hill that empties out fastest. **Polperro** — you literally cannot drive into the village; park at the top." },
        { type: "image", src: property6, caption: "A typical Cornish lane — wide enough for one car, walled with granite." },
        { type: "heading", text: "The A30 and Long Drives" },
        { type: "paragraph", text: "The A30 is Cornwall's main artery. It's mostly dual carriageway now (the long single-track section between Carland Cross and Chiverton was upgraded in 2024) but it gets very busy on changeover day in peak season. **Avoid the A30 between 10am and 2pm on a Saturday in July or August.** It can take five hours to drive what should take 90 minutes." },
        { type: "paragraph", text: "Best practice: drive on Sunday for changeover, leave very early or after 6pm if you must drive on Saturday, and have offline maps ready because the signal is patchy. The drive is genuinely beautiful when it's flowing — Bodmin Moor, then the south coast opening up, then home." },
      ],
    },
  ],
};
