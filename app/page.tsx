type Restaurant = {
  rank: number;
  name: string;
  category: string;
  neighborhood: string;
  price: string;
  mood: string;
  accent: string;
  mapsQuery: string;
  description: [string, string, string];
};

const categories = [
  "Chinese",
  "Indian & South Asian",
  "Thai",
  "Japanese & Sushi",
  "Korean",
  "Vietnamese & Cambodian",
];

const restaurants: Restaurant[] = [
  {
    rank: 1,
    name: "Gene's Chinese Flatbread Cafe",
    category: "Chinese",
    neighborhood: "Downtown Crossing",
    price: "$",
    mood: "Hand-pulled noodles",
    accent: "chili",
    mapsQuery: "Gene's Chinese Flatbread Cafe Downtown Crossing Boston MA",
    description: [
      "Gene's is a fast, casual downtown stop built around chewy hand-pulled noodles, cumin lamb, and chile oil.",
      "The room is more practical than pretty, but the food has the kind of direct, spicy comfort that regulars remember.",
      "Go when you want a quick bowl with serious flavor, and skip it if you need lingering service or a dressed-up date-night setting.",
    ],
  },
  {
    rank: 2,
    name: "Szechuan Mountain House",
    category: "Chinese",
    neighborhood: "Allston",
    price: "$$",
    mood: "Sichuan heat",
    accent: "saffron",
    mapsQuery: "Szechuan Mountain House Allston Boston MA",
    description: [
      "Szechuan Mountain House brings a sleek, high-energy room to Allston with polished takes on Sichuan dishes.",
      "Expect mala heat, garlicky pork belly, and plates that look almost as dramatic as they taste.",
      "Go for a group dinner that wants spice and spectacle, and skip it if mouth-tingling peppercorns are not your thing.",
    ],
  },
  {
    rank: 3,
    name: "Sumiao Hunan Kitchen",
    category: "Chinese",
    neighborhood: "Kendall Square",
    price: "$$",
    mood: "Modern Hunan",
    accent: "matcha",
    mapsQuery: "Sumiao Hunan Kitchen Kendall Square Cambridge MA",
    description: [
      "Sumiao Hunan Kitchen is a modern Cambridge spot for bold, tangy, and spicy Hunan cooking.",
      "The dining room works for both date nights and group tables, with cocktails that make it feel livelier than a standard takeout stop.",
      "Go for big flavors and a polished setting, and skip it if you only want gentle, familiar Chinese-American dishes.",
    ],
  },
  {
    rank: 4,
    name: "Jiangnan Boston",
    category: "Chinese",
    neighborhood: "Theater District",
    price: "$$$",
    mood: "Roast duck",
    accent: "turmeric",
    mapsQuery: "Jiangnan Boston Theater District Boston MA",
    description: [
      "Jiangnan Boston gives Chinese dining a dressier Theater District address, with Jiangnan flavors and a strong duck program.",
      "The old Romanesque room adds drama, so dinner feels ready-made for a show night.",
      "Go before a performance or when you want polished service, and skip it if you are chasing a low-cost Chinatown feast.",
    ],
  },
  {
    rank: 5,
    name: "Punjabi Dhaba",
    category: "Indian & South Asian",
    neighborhood: "Inman Square",
    price: "$",
    mood: "North Indian comfort",
    accent: "cinnamon",
    mapsQuery: "Punjabi Dhaba Inman Square Cambridge MA",
    description: [
      "Punjabi Dhaba is a long-running Cambridge favorite for North Indian food that feels hearty and unfussy.",
      "Tandoori chicken, vegetable korma, dal, naan, and thali-style plates make it easy to build a filling meal.",
      "Go for casual comfort and takeout energy, and skip it if you want quiet lighting, cocktails, and slow pacing.",
    ],
  },
  {
    rank: 6,
    name: "The Maharaja",
    category: "Indian & South Asian",
    neighborhood: "Harvard Square",
    price: "$$",
    mood: "Classic Indian dining",
    accent: "saffron",
    mapsQuery: "The Maharaja Harvard Square Cambridge MA",
    description: [
      "The Maharaja is a Harvard Square institution with classic North Indian dishes and an old-school dining room overlooking the square.",
      "Curries, tandoori meats, pakora, naan, and gulab jamun make it especially friendly for mixed groups.",
      "Go when you want a dependable sit-down Indian meal, and skip it if you are looking for a newer, experimental menu.",
    ],
  },
  {
    rank: 7,
    name: "Dosa N Curry",
    category: "Indian & South Asian",
    neighborhood: "Somerville",
    price: "$",
    mood: "Vegetarian dosas",
    accent: "matcha",
    mapsQuery: "Dosa N Curry Somerville MA",
    description: [
      "Dosa N Curry is a fully vegetarian South Indian spot with crisp dosas, medhu vada, thali plates, and plenty of spice.",
      "The ambiance is simple, but the menu is broad enough to satisfy both vegetarians and curious omnivores.",
      "Go for dosas and meat-free variety, and skip it if your group is set on chicken tikka or lamb curry.",
    ],
  },
  {
    rank: 8,
    name: "Zuzu Momo",
    category: "Indian & South Asian",
    neighborhood: "Everett",
    price: "$$",
    mood: "Nepali momos",
    accent: "chili",
    mapsQuery: "Zuzu Momo Everett MA",
    description: [
      "Zuzu Momo is a lively Nepali and Indian restaurant where dumplings are the main draw.",
      "The menu leans into street-style snacks, momo variations, noodles, and tandoori flavors, with a room that feels festive rather than formal.",
      "Go for a fun dumpling run beyond central Boston, and skip it if you do not want to make the Everett trip.",
    ],
  },
  {
    rank: 9,
    name: "Dakzen",
    category: "Thai",
    neighborhood: "Davis Square",
    price: "$",
    mood: "Street-style noodles",
    accent: "turmeric",
    mapsQuery: "Dakzen Davis Square Somerville MA",
    description: [
      "Dakzen is a Somerville favorite for Thai street food, especially noodle soups with serious aroma and heat.",
      "Tom yum noodles, khao soi, ba mee moo dang, and northern Thai sausage give the compact menu real personality.",
      "Go for a bold, quick meal with friends, and skip it if you want a long, quiet, white-tablecloth dinner.",
    ],
  },
  {
    rank: 10,
    name: "Kala Thai Cookery",
    category: "Thai",
    neighborhood: "Haymarket",
    price: "$$",
    mood: "Downtown Thai",
    accent: "matcha",
    mapsQuery: "Kala Thai Cookery Haymarket Boston MA",
    description: [
      "Kala Thai Cookery brings a bright Thai option to the heart of Boston near Haymarket.",
      "The menu overlaps with sibling Cha Yen, but dishes like char kway teow, corn fritters, curries, and house-made ice cream make it more than a convenience stop.",
      "Go when you need a downtown Thai dinner that still feels cared for, and skip it if you want the deepest regional Thai menu in the area.",
    ],
  },
  {
    rank: 11,
    name: "Sugar & Spice",
    category: "Thai",
    neighborhood: "Porter Square",
    price: "$$",
    mood: "Regional Thai range",
    accent: "saffron",
    mapsQuery: "Sugar & Spice Porter Square Cambridge MA",
    description: [
      "Sugar & Spice is a Porter Square mainstay with a wide Thai menu and a warm, busy dining room.",
      "Northern khao soi, rolled noodle soup, colorful salads, vegan menus, and gluten-free options make it easy for groups to agree.",
      "Go when you want range and hospitality, and skip it if you prefer a tiny, highly focused menu.",
    ],
  },
  {
    rank: 12,
    name: "Brown Sugar Cafe",
    category: "Thai",
    neighborhood: "Allston",
    price: "$$",
    mood: "Classic group spot",
    accent: "cinnamon",
    mapsQuery: "Brown Sugar Cafe Allston Boston MA",
    description: [
      "Brown Sugar Cafe has been feeding Boston University crowds and neighborhood regulars for more than two decades.",
      "Its big menu moves across Thai regions with soft shell crab salad, braised pork rice plates, curries, and familiar noodle dishes.",
      "Go for an easy group dinner or casual date, and skip it if you want a smaller room with a calmer pace.",
    ],
  },
  {
    rank: 13,
    name: "Three 1 One",
    category: "Japanese & Sushi",
    neighborhood: "South End",
    price: "$$$$",
    mood: "Michelin omakase",
    accent: "chili",
    mapsQuery: "Three 1 One South End Boston MA",
    description: [
      "Three 1 One is Boston's first Michelin-starred restaurant, a tiny South End omakase counter with only a handful of seats.",
      "The meal is luxurious, seasonal, and highly composed, with premium fish, caviar, uni, and carefully built flavor pairings.",
      "Go for a major splurge or celebration, and skip it if you want flexible timing, a big group, or a modest bill.",
    ],
  },
  {
    rank: 14,
    name: "O Ya",
    category: "Japanese & Sushi",
    neighborhood: "Leather District",
    price: "$$$$",
    mood: "Special occasion",
    accent: "turmeric",
    mapsQuery: "O Ya Leather District Boston MA",
    description: [
      "O Ya remains one of Boston's most famous special-occasion sushi restaurants.",
      "The omakase is elegant, expensive, and paired with a sophisticated sake program that turns dinner into a full evening.",
      "Go when the meal is the event, and skip it if price, speed, or casual energy matters more than luxury.",
    ],
  },
  {
    rank: 15,
    name: "Uni",
    category: "Japanese & Sushi",
    neighborhood: "Back Bay",
    price: "$$$",
    mood: "Fancy bites",
    accent: "matcha",
    mapsQuery: "Uni Back Bay Boston MA",
    description: [
      "Uni is a Back Bay sushi and seafood institution from chef Ken Oringer, long respected by Boston chefs.",
      "The menu mixes pristine fish with playful, polished bites, so it feels more adventurous than a simple roll-and-miso meal.",
      "Go for a stylish night of high-end Japanese flavors, and skip it if you only want a straightforward neighborhood sushi order.",
    ],
  },
  {
    rank: 16,
    name: "Sugidama",
    category: "Japanese & Sushi",
    neighborhood: "Davis Square",
    price: "$$",
    mood: "Soba and izakaya",
    accent: "saffron",
    mapsQuery: "Sugidama Davis Square Somerville MA",
    description: [
      "Sugidama is a calm Somerville izakaya and soba shop with polished noodles, donburi, sushi, and yakitori.",
      "The buckwheat noodles and smoky broth are the soul of the menu, making it especially appealing on a cooler night.",
      "Go for a lower-key Japanese meal with texture and comfort, and skip it if your only priority is omakase.",
    ],
  },
  {
    rank: 17,
    name: "Kaju Tofu House",
    category: "Korean",
    neighborhood: "Allston",
    price: "$$",
    mood: "Soondubu comfort",
    accent: "cinnamon",
    mapsQuery: "Kaju Tofu House Allston Boston MA",
    description: [
      "Kaju Tofu House is an Allston staple for bubbling tofu stews, bibimbap, galbi, bulgogi, and banchan.",
      "The ambiance is casual and focused, with the kind of steam-and-sizzle comfort that makes winter meals feel brighter.",
      "Go when you want deeply satisfying Korean comfort food, and skip it if you need a glossy, reservation-only dining room.",
    ],
  },
  {
    rank: 18,
    name: "Somaek",
    category: "Korean",
    neighborhood: "Downtown Crossing",
    price: "$$$",
    mood: "Korean family plates",
    accent: "chili",
    mapsQuery: "Somaek Downtown Crossing Boston MA",
    description: [
      "Somaek brings a newer, chef-driven Korean option to Downtown Crossing with family-style plates and strong banchan.",
      "Japchae, bossam, kimchi, and shareable dishes make the restaurant feel lively without losing respect for the classics.",
      "Go for a polished Korean dinner with friends, and skip it if your heart is set on grilling meat at the table.",
    ],
  },
  {
    rank: 19,
    name: "Koreana",
    category: "Korean",
    neighborhood: "Central Square",
    price: "$$",
    mood: "Korean barbecue",
    accent: "turmeric",
    mapsQuery: "Koreana Central Square Cambridge MA",
    description: [
      "Koreana is a Cambridge Korean barbecue standby where groups gather around the grill for short rib, pork belly, chicken, and more.",
      "The room gets lively, especially on weekends, and that crowd energy is part of the appeal.",
      "Go with hungry friends who want a hands-on meal, and skip it if waiting, smoke, or tabletop cooking sounds tiring.",
    ],
  },
  {
    rank: 20,
    name: "Banh Mi Ba Le",
    category: "Vietnamese & Cambodian",
    neighborhood: "Dorchester",
    price: "$",
    mood: "Banh mi counter",
    accent: "matcha",
    mapsQuery: "Banh Mi Ba Le Dorchester Boston MA",
    description: [
      "Banh Mi Ba Le is a Dorchester must for Vietnamese sandwiches on crisp, airy bread.",
      "The grilled beef banh mi, lemongrass flavors, quick counter service, and strong iced coffee make it ideal for a daytime food crawl.",
      "Go for a fast, affordable lunch with real Boston character, and skip it if you want a long sit-down dinner.",
    ],
  },
];

const categoryCounts = categories.map((category) => ({
  category,
  count: restaurants.filter((restaurant) => restaurant.category === category)
    .length,
}));

const groupedRestaurants = categories.map((category) => ({
  category,
  restaurants: restaurants.filter((restaurant) => restaurant.category === category),
}));

function toId(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function googleMapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    query,
  )}`;
}

function googleMapsPlaceUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query,
  )}`;
}

function WaffleIcon() {
  return (
    <span className="waffleIcon" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} />
      ))}
    </span>
  );
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <article className={`restaurantCard accent-${restaurant.accent}`}>
      <div className="cardTopline">
        <span className="rank">#{restaurant.rank}</span>
        <span>{restaurant.price}</span>
      </div>
      <h3>{restaurant.name}</h3>
      <div className="metaLine">
        <span>{restaurant.neighborhood}</span>
        <span>{restaurant.mood}</span>
      </div>
      <div className="description">
        {restaurant.description.map((sentence) => (
          <p key={sentence}>{sentence}</p>
        ))}
      </div>
      <div className="mapsLinks">
        <a
          className="mapsLink"
          href={googleMapsPlaceUrl(restaurant.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open Google Maps listing and reviews for ${restaurant.name}`}
        >
          <span>Google Maps</span>
          <span>Reviews + place</span>
        </a>
        <a
          className="mapsLink mapsLinkSecondary"
          href={googleMapsDirectionsUrl(restaurant.mapsQuery)}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open Google Maps directions for ${restaurant.name}`}
        >
          <span>Directions</span>
          <span>ETA from you</span>
        </a>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <header className="topBar">
        <a className="brandMark" href="#top" aria-label="Top of page">
          <span>20</span>
          <span>Boston Asian Restaurants</span>
        </a>

        <details className="waffleMenu">
          <summary title="Categories">
            <WaffleIcon />
            <span className="srOnly">Categories</span>
          </summary>
          <nav aria-label="Restaurant categories">
            {categoryCounts.map(({ category, count }) => (
              <a key={category} href={`#${toId(category)}`}>
                <span>{category}</span>
                <span>{count}</span>
              </a>
            ))}
          </nav>
        </details>
      </header>

      <section className="hero" id="top">
        <div className="heroOverlay" />
        <div className="heroContent">
          <p className="eyebrow">Boston, Massachusetts</p>
          <h1>Top 20 Asian Restaurants</h1>
          <p className="heroText">
            A warm, spice-market guide to Chinese, Indian, Thai, Japanese,
            Korean, Vietnamese, and Cambodian food around Boston.
          </p>
          <div className="heroStats" aria-label="Guide summary">
            <span>20 picks</span>
            <span>6 cuisine groups</span>
            <span>3-sentence reviews</span>
          </div>
        </div>
      </section>

      <section className="introBand" aria-labelledby="guide-note">
        <div>
          <section className="personalNote" aria-labelledby="personal-note">
            <h2 id="personal-note">A Note From The Guide</h2>
            <p>
              I may be a young diner, but Asian food has become one of my
              favorite ways to explore a city. I have visited many restaurants
              in search of dishes that feel generous, flavorful, and memorable.
              I hope you enjoy these selections as much as I do: sweet, savory,
              delicious meals that leave you happily full.
            </p>
          </section>
          <p id="guide-note">
            Each pick is written for quick scanning: what the restaurant is,
            what the food and ambiance feel like, and when it is or is not the
            right choice.
          </p>
        </div>
      </section>

      <div className="guideWrap">
        {groupedRestaurants.map(({ category, restaurants: categoryRestaurants }) => (
          <section
            className="categorySection"
            id={toId(category)}
            key={category}
            aria-labelledby={`${toId(category)}-heading`}
          >
            <div className="sectionHeading">
              <p>{categoryRestaurants.length} picks</p>
              <h2 id={`${toId(category)}-heading`}>{category}</h2>
            </div>
            <div className="restaurantGrid">
              {categoryRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="siteFooter">
        <p>
          Curated from current local dining guides and written as a review-ready
          draft. Hours, menus, and reservations can change.
        </p>
        <div>
          <a href="https://boston.eater.com/maps/best-restaurants-boston-38">
            Eater 38
          </a>
          <a href="https://boston.eater.com/maps/best-chinese-food-boston">
            Chinese
          </a>
          <a href="https://boston.eater.com/maps/best-indian-restaurants-greater-boston">
            Indian
          </a>
          <a href="https://boston.eater.com/maps/best-thai-food-boston">
            Thai
          </a>
          <a href="https://boston.eater.com/maps/best-sushi-restaurants-boston">
            Sushi
          </a>
          <a href="https://boston.eater.com/maps/best-korean-food-boston">
            Korean
          </a>
          <a href="https://boston.eater.com/17690858/best-boston-food-restaurants-city-guide-where-to-eat">
            Boston guide
          </a>
        </div>
      </footer>
    </main>
  );
}
