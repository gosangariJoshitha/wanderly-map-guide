import { Attraction } from "@/types";

// Tourist Places in Mumbai
export const touristAttractions: Attraction[] = [
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    cityId: "mumbai",
    description: "An iconic arch-monument built during the British Raj, overlooking the Arabian Sea.",
    imageUrl: "https://example.com/gateway.jpg",
    rating: 4.5,
    category: "tourist",
    reviews: [
      {
        id: "rm1",
        userId: "um1",
        username: "SeaLover",
        rating: 4.5,
        comment: "Beautiful monument with great views of the Arabian Sea.",
        date: "2023-05-15"
      }
    ],
    location: {
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9220,
        lng: 72.8347
      }
    },
    transportOptions: {
      car: "Located in South Mumbai, accessible by taxi or car.",
      bus: [
        {
          busNumber: "124",
          from: "CST",
          to: "Colaba",
          stops: ["Fort", "Colaba Market"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours",
    bestTimeToVisit: "October to March"
  },
  {
    id: "marine-drive",
    name: "Marine Drive",
    cityId: "mumbai",
    description: "A scenic promenade along the Arabian Sea, also known as the Queen's Necklace.",
    imageUrl: "https://example.com/marine.jpg",
    rating: 4.6,
    category: "tourist",
    reviews: [
      {
        id: "rm2",
        userId: "um2",
        username: "CityExplorer",
        rating: 5,
        comment: "Beautiful at night when the lights make it look like a necklace.",
        date: "2023-06-22"
      }
    ],
    location: {
      address: "Netaji Subhash Chandra Bose Road, Mumbai, Maharashtra 400020",
      coordinates: {
        lat: 18.9442,
        lng: 72.8237
      }
    },
    transportOptions: {
      car: "Central location in Mumbai, easily accessible by taxi.",
      bus: [
        {
          busNumber: "123",
          from: "Churchgate",
          to: "Nariman Point",
          stops: ["Marine Lines", "Charni Road"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours",
    bestTimeToVisit: "October to March"
  }
];

// Temples in Mumbai
export const templeAttractions: Attraction[] = [
  {
    id: "shri-siddhivinayak-temple",
    name: "Shri Siddhivinayak Temple",
    cityId: "mumbai",
    description: "A famous Hindu temple dedicated to Lord Ganesha.",
    imageUrl: "https://example.com/siddhivinayak.jpg",
    rating: 4.7,
    category: "temple",
    reviews: [
      {
        id: "rm3",
        userId: "um3",
        username: "DevotedVisitor",
        rating: 5,
        comment: "One of the most revered Ganesha temples. Peaceful despite the crowds.",
        date: "2023-04-10"
      }
    ],
    location: {
      address: "SK Bole Marg, Prabhadevi, Mumbai, Maharashtra 400028",
      coordinates: {
        lat: 19.0170,
        lng: 72.8301
      }
    },
    transportOptions: {
      car: "Located in Prabhadevi, accessible by taxi or car.",
      bus: [
        {
          busNumber: "340",
          from: "Dadar",
          to: "Prabhadevi",
          stops: ["Siddhivinayak", "Century Bazaar"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 10:00 PM",
    bestTimeToVisit: "Year-round"
  }
];

// Other Attractions in Mumbai
export const otherAttractions: Attraction[] = [
  {
    id: "kanheri-caves",
    name: "Kanheri Caves",
    cityId: "mumbai",
    description: "Ancient Buddhist caves located within the Sanjay Gandhi National Park.",
    imageUrl: "https://example.com/kanheri.jpg",
    rating: 4.3,
    category: "other",
    reviews: [
      {
        id: "rm4",
        userId: "um4",
        username: "HistoryExplorer",
        rating: 4.5,
        comment: "Amazing Buddhist rock-cut monuments dating back to 1st century BCE.",
        date: "2023-03-05"
      }
    ],
    location: {
      address: "Borivali East, Mumbai, Maharashtra 400066",
      coordinates: {
        lat: 19.2093,
        lng: 72.9067
      }
    },
    transportOptions: {
      car: "Located in Borivali within Sanjay Gandhi National Park.",
      bus: [
        {
          busNumber: "460",
          from: "Borivali Station",
          to: "National Park",
          stops: ["Film City Entrance", "Park Main Gate"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    entryFee: "₹15 for Indians, ₹200 for foreigners",
    timings: "9:00 AM - 5:00 PM (Closed on Mondays)",
    bestTimeToVisit: "October to March"
  }
];

// Combine all Mumbai attractions
export const mumbaiAttractions: Attraction[] = [
  ...touristAttractions,
  ...templeAttractions,
  ...otherAttractions
];
