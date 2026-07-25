export type Place = {
  city: string;
  country: string;
  lat: number;
  lng: number;
  note?: string;
};

/**
 * Both the globe and the list beside it read from this one array, so adding a
 * trip is a single entry here.
 */
export const places: Place[] = [
  {
    city: "Kissimmee",
    country: "United States",
    lat: 28.292,
    lng: -81.4076,
    note: "Home — greater Orlando",
  },
  {
    city: "Gainesville",
    country: "United States",
    lat: 29.6516,
    lng: -82.3248,
    note: "School",
  },
  {
    city: "Tampa",
    country: "United States",
    lat: 27.9506,
    lng: -82.4572,
  },
  {
    city: "Jacksonville",
    country: "United States",
    lat: 30.3322,
    lng: -81.6557,
  },
  {
    city: "Miami",
    country: "United States",
    lat: 25.7617,
    lng: -80.1918,
  },
  {
    city: "Atlanta",
    country: "United States",
    lat: 33.749,
    lng: -84.388,
  },
  {
    city: "New York City",
    country: "United States",
    lat: 40.7128,
    lng: -74.006,
  },
  {
    city: "Nashville",
    country: "United States",
    lat: 36.1627,
    lng: -86.7816,
  },
  {
    city: "Washington, D.C.",
    country: "United States",
    lat: 38.9072,
    lng: -77.0369,
  },
  {
    city: "Newark",
    country: "United States",
    lat: 40.7357,
    lng: -74.1724,
    note: "New Jersey",
  },
  {
    city: "Boston",
    country: "United States",
    lat: 42.3601,
    lng: -71.0589,
  },
  {
    city: "Las Vegas",
    country: "United States",
    lat: 36.1699,
    lng: -115.1398,
  },
  {
    city: "San Diego",
    country: "United States",
    lat: 32.7157,
    lng: -117.1611,
  },
  {
    city: "Los Angeles",
    country: "United States",
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    city: "Lake Tahoe",
    country: "United States",
    lat: 39.0968,
    lng: -120.0324,
  },
  {
    city: "Seattle",
    country: "United States",
    lat: 47.6062,
    lng: -122.3321,
  },
  {
    city: "Vancouver",
    country: "Canada",
    lat: 49.2827,
    lng: -123.1207,
  },
  {
    city: "Calgary",
    country: "Canada",
    lat: 51.0447,
    lng: -114.0719,
  },
  {
    city: "Cape Town",
    country: "South Africa",
    lat: -33.9249,
    lng: 18.4241,
    note: "Six weeks with Housing Assembly",
  },
  {
    city: "Zurich",
    country: "Switzerland",
    lat: 47.3769,
    lng: 8.5417,
  },
  {
    city: "Zermatt",
    country: "Switzerland",
    lat: 46.0207,
    lng: 7.7491,
  },
  {
    city: "Lucerne",
    country: "Switzerland",
    lat: 47.0502,
    lng: 8.3093,
  },
  {
    city: "Paris",
    country: "France",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    city: "London",
    country: "United Kingdom",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    city: "Venice",
    country: "Italy",
    lat: 45.4408,
    lng: 12.3155,
  },
  {
    city: "Rome",
    country: "Italy",
    lat: 41.9028,
    lng: 12.4964,
  },
  {
    city: "Positano",
    country: "Italy",
    lat: 40.628,
    lng: 14.4844,
    note: "Amalfi Coast",
  },
  {
    city: "Florence",
    country: "Italy",
    lat: 43.7696,
    lng: 11.2558,
  },
  {
    city: "Milan",
    country: "Italy",
    lat: 45.4642,
    lng: 9.19,
  },
  {
    city: "Hong Kong",
    country: "Hong Kong",
    lat: 22.3193,
    lng: 114.1694,
  },
  {
    city: "Tokyo",
    country: "Japan",
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    city: "Kyoto",
    country: "Japan",
    lat: 35.0116,
    lng: 135.7681,
  },
  {
    city: "Osaka",
    country: "Japan",
    lat: 34.6937,
    lng: 135.5023,
  },
  {
    city: "Manila",
    country: "Philippines",
    lat: 14.5995,
    lng: 120.9842,
  },
  {
    city: "Cebu",
    country: "Philippines",
    lat: 10.3157,
    lng: 123.8854,
  },
];

/** Unique countries from `places` — keeps the Travelling line honest as you add pins. */
export const countryCount = new Set(places.map((place) => place.country)).size;

export type Hobby = {
  title: string;
  /** One short line — skip if the title is enough. */
  body?: string;
  image?: { src: string; alt: string; variant?: "photo" | "screenshot" };
  /** Branded tile when there's no photo yet. */
  placeholder?: string;
};

export const hobbies: Hobby[] = [
  {
    title: "Travelling",
    body: `${countryCount} countries visited and counting.`,
    image: {
      src: "/photos/lions-head-sunrise-clouds.png",
      alt: "On top of Lion's Head at sunrise above a sea of clouds",
    },
  },
  {
    title: "Piano",
    body: "12+ years. Choir director and organist for a stretch.",
    image: {
      src: "/photos/piano-concert.png",
      alt: "Playing piano during a church service",
    },
  },
  {
    title: "Pickleball & basketball",
    placeholder: "Photo coming soon",
  },
  {
    title: "Anime",
    placeholder: "Photo coming soon",
  },
  {
    title: "Photography",
    body: "Drone, iPhone, and video.",
    image: {
      src: "/photos/beach-sunset.png",
      alt: "The sun setting into the Atlantic over an empty beach",
    },
  },
];

export const snapshots = [
  {
    src: "/photos/garden-canopy-walk.png",
    alt: "Walking the canopy boardwalk through the botanical gardens",
  },
  {
    src: "/photos/boulders-penguin.png",
    alt: "An African penguin on the sand at Boulders Beach",
  },
  {
    src: "/photos/cohort-zip-lining.png",
    alt: "The cohort in helmets and harnesses before zip-lining",
  },
  {
    src: "/photos/table-mountain-summit.png",
    alt: "Sitting on the summit of Table Mountain",
  },
  {
    src: "/photos/world-cup-flag.png",
    alt: "Holding up a South African flag while watching a match",
  },
  {
    src: "/photos/paragliding-cape-town.png",
    alt: "Paragliding off Signal Hill over Cape Town",
  },
];
