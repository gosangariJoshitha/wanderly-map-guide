import { Attraction } from "@/types";

// Tourist Places in Mumbai
export const touristAttractions: Attraction[] = [
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    cityId: "mumbai",
    description: "An iconic arch-monument built during the British Raj, overlooking the Arabian Sea.",
    imageUrl: "https://images.unsplash.com/photo-1565942443747-031bb6a99cd4?auto=format&fit=crop&q=80&w=1000",
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
    imageUrl: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&q=80&w=1000",
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
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    cityId: "mumbai",
    description: "Ancient rock-cut caves dedicated to Lord Shiva located on Elephanta Island.",
    imageUrl: "https://images.unsplash.com/photo-1558269345-6654f6b312a3?auto=format&fit=crop&q=80&w=1000",
    rating: 4.4,
    category: "tourist",
    reviews: [
      {
        id: "rm3",
        userId: "um3",
        username: "HistoryBuff",
        rating: 4.5,
        comment: "Amazing historical site. Take the ferry from Gateway of India.",
        date: "2023-02-11"
      }
    ],
    location: {
      address: "Elephanta Island, Mumbai Harbour",
      coordinates: {
        lat: 18.9633,
        lng: 72.9315
      }
    },
    transportOptions: {
      car: "Take a ferry from Gateway of India (about 1 hour).",
      bus: []
    },
    entryFee: "₹40 for Indians, ₹600 for foreigners",
    timings: "9:00 AM - 5:30 PM (Closed on Mondays)",
    bestTimeToVisit: "November to March"
  },
  {
    id: "juhu-beach",
    name: "Juhu Beach",
    cityId: "mumbai",
    description: "Popular beach known for its street food and vibrant atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=1000",
    rating: 4.2,
    category: "tourist",
    reviews: [
      {
        id: "rm4",
        userId: "um4",
        username: "BeachLover",
        rating: 4.0,
        comment: "Crowded but fun beach with amazing food stalls.",
        date: "2023-04-25"
      }
    ],
    location: {
      address: "Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.0883,
        lng: 72.8263
      }
    },
    transportOptions: {
      car: "Located in Western Mumbai, easily accessible by taxi.",
      bus: [
        {
          busNumber: "84",
          from: "Bandra",
          to: "Juhu",
          stops: ["Santacruz", "Vile Parle"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours",
    bestTimeToVisit: "October to February"
  },
  {
    id: "bandra-worli-sea-link",
    name: "Bandra-Worli Sea Link",
    cityId: "mumbai",
    description: "An 8-lane cable-stayed bridge that connects Bandra to Worli across the Arabian Sea.",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    category: "tourist",
    reviews: [
      {
        id: "rm5",
        userId: "um5",
        username: "EngineeringGeek",
        rating: 5.0,
        comment: "Magnificent structure with stunning views of the Mumbai skyline.",
        date: "2023-05-30"
      }
    ],
    location: {
      address: "Bandra West, Mumbai, Maharashtra 400050",
      coordinates: {
        lat: 19.0297,
        lng: 72.8151
      }
    },
    transportOptions: {
      car: "Drive across the sea link, toll charges apply.",
      bus: []
    },
    entryFee: "Toll charges apply for vehicles",
    timings: "24 hours",
    bestTimeToVisit: "Year-round"
  }
];

// Temples in Mumbai
export const templeAttractions: Attraction[] = [
  {
    id: "shri-siddhivinayak-temple",
    name: "Shri Siddhivinayak Temple",
    cityId: "mumbai",
    description: "A famous Hindu temple dedicated to Lord Ganesha.",
    imageUrl: "https://images.unsplash.com/photo-1586183188400-275eea95e4ba?auto=format&fit=crop&q=80&w=1000",
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
  },
  {
    id: "mumba-devi-temple",
    name: "Mumba Devi Temple",
    cityId: "mumbai",
    description: "Ancient temple dedicated to Goddess Mumba, after whom the city of Mumbai was named.",
    imageUrl: "https://images.unsplash.com/photo-1550237330-a5d774594098?auto=format&fit=crop&q=80&w=1000",
    rating: 4.5,
    category: "temple",
    reviews: [
      {
        id: "rm6",
        userId: "um6",
        username: "TempleVisitor",
        rating: 4.5,
        comment: "Historical temple with spiritual significance. Crowded but worth visiting.",
        date: "2023-08-15"
      }
    ],
    location: {
      address: "Zaveri Bazaar, Kalbadevi, Mumbai, Maharashtra 400002",
      coordinates: {
        lat: 18.9456,
        lng: 72.8296
      }
    },
    transportOptions: {
      car: "Located in South Mumbai, accessible by taxi.",
      bus: [
        {
          busNumber: "27",
          from: "CST",
          to: "Zaveri Bazaar",
          stops: ["Crawford Market", "Kalbadevi"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 9:00 PM",
    bestTimeToVisit: "Year-round, except during monsoon"
  },
  {
    id: "babulnath-temple",
    name: "Babulnath Temple",
    cityId: "mumbai",
    description: "Ancient temple dedicated to Lord Shiva, located at the end of Marine Drive.",
    imageUrl: "https://images.unsplash.com/photo-1567870272254-6a22319b5387?auto=format&fit=crop&q=80&w=1000",
    rating: 4.4,
    category: "temple",
    reviews: [
      {
        id: "rm7",
        userId: "um7",
        username: "SpiritualSeeker",
        rating: 4.5,
        comment: "Peaceful Shiva temple with beautiful architecture.",
        date: "2023-02-20"
      }
    ],
    location: {
      address: "Babulnath Road, Girgaon, Mumbai, Maharashtra 400007",
      coordinates: {
        lat: 18.9563,
        lng: 72.8093
      }
    },
    transportOptions: {
      car: "Located near Chowpatty Beach, accessible by taxi.",
      bus: [
        {
          busNumber: "106",
          from: "Churchgate",
          to: "Babulnath",
          stops: ["Marine Drive", "Chowpatty"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "5:30 AM - 10:00 PM",
    bestTimeToVisit: "Year-round, especially during Mahashivratri"
  },
  {
    id: "iskcon-temple",
    name: "ISKCON Temple",
    cityId: "mumbai",
    description: "Modern temple dedicated to Lord Krishna, known for its architecture and spiritual atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    category: "temple",
    reviews: [
      {
        id: "rm8",
        userId: "um8",
        username: "KrishnaDevotee",
        rating: 5.0,
        comment: "Beautiful temple with amazing prasad and spiritual programs.",
        date: "2023-09-05"
      }
    ],
    location: {
      address: "Hare Krishna Land, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.1076,
        lng: 72.8258
      }
    },
    transportOptions: {
      car: "Located in Juhu, accessible by taxi.",
      bus: [
        {
          busNumber: "222",
          from: "Andheri",
          to: "Juhu",
          stops: ["JVPD", "Juhu Beach"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "4:30 AM - 9:00 PM",
    bestTimeToVisit: "Year-round, especially during Janmashtami"
  },
  {
    id: "mahalakshmi-temple",
    name: "Mahalakshmi Temple",
    cityId: "mumbai",
    description: "Ancient temple dedicated to Goddess Mahalakshmi, the goddess of wealth and prosperity.",
    imageUrl: "https://images.unsplash.com/photo-1514288090916-b715d1dbd06a?auto=format&fit=crop&q=80&w=1000",
    rating: 4.7,
    category: "temple",
    reviews: [
      {
        id: "rm9",
        userId: "um9",
        username: "TempleExplorer",
        rating: 4.5,
        comment: "Beautiful temple with great views of the Arabian Sea.",
        date: "2023-03-18"
      }
    ],
    location: {
      address: "Bhulabhai Desai Road, Mahalakshmi, Mumbai, Maharashtra 400026",
      coordinates: {
        lat: 18.9772,
        lng: 72.8069
      }
    },
    transportOptions: {
      car: "Located in South Mumbai, accessible by taxi.",
      bus: [
        {
          busNumber: "81",
          from: "Worli",
          to: "Mahalakshmi",
          stops: ["Worli Naka", "Racecourse"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 10:00 PM",
    bestTimeToVisit: "Year-round, especially during Navratri"
  }
];

// Other Attractions in Mumbai
export const otherAttractions: Attraction[] = [
  {
    id: "kanheri-caves",
    name: "Kanheri Caves",
    cityId: "mumbai",
    description: "Ancient Buddhist caves located within the Sanjay Gandhi National Park.",
    imageUrl: "https://images.unsplash.com/photo-1600000000000-000000000000?auto=format&fit=crop&q=80&w=1000",
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
  },
  {
    id: "chhatrapati-shivaji-maharaj-vastu-sangrahalaya",
    name: "Chhatrapati Shivaji Maharaj Vastu Sangrahalaya",
    cityId: "mumbai",
    description: "Formerly known as the Prince of Wales Museum, this is one of India's premier art and history museums.",
    imageUrl: "https://images.unsplash.com/photo-1582510020868-d4963fc7c10f?auto=format&fit=crop&q=80&w=1000",
    rating: 4.6,
    category: "other",
    reviews: [
      {
        id: "rm10",
        userId: "um10",
        username: "ArtEnthusiast",
        rating: 5.0,
        comment: "Magnificent collection of art and historical artifacts. The building itself is a masterpiece.",
        date: "2023-07-12"
      }
    ],
    location: {
      address: "Mahatma Gandhi Road, Fort, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9269,
        lng: 72.8324
      }
    },
    transportOptions: {
      car: "Located in South Mumbai, accessible by taxi.",
      bus: [
        {
          busNumber: "14",
          from: "CST",
          to: "Colaba",
          stops: ["Fort", "Museum"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹100 for Indians, ₹650 for foreigners",
    timings: "10:15 AM - 6:00 PM (Closed on Mondays)",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "hanging-gardens",
    name: "Hanging Gardens",
    cityId: "mumbai",
    description: "Terraced gardens located on Malabar Hill, offering panoramic views of the Arabian Sea.",
    imageUrl: "https://images.unsplash.com/photo-1554554497-0f3374839853?auto=format&fit=crop&q=80&w=1000",
    rating: 4.2,
    category: "other",
    reviews: [
      {
        id: "rm11",
        userId: "um11",
        username: "GardenLover",
        rating: 4.0,
        comment: "Beautiful gardens with nice views of the city and Marine Drive.",
        date: "2023-01-30"
      }
    ],
    location: {
      address: "Ridge Road, Malabar Hill, Mumbai, Maharashtra 400006",
      coordinates: {
        lat: 18.9562,
        lng: 72.8040
      }
    },
    transportOptions: {
      car: "Located on Malabar Hill, accessible by taxi.",
      bus: [
        {
          busNumber: "81",
          from: "Churchgate",
          to: "Malabar Hill",
          stops: ["Peddar Road", "Hanging Gardens"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 9:00 PM",
    bestTimeToVisit: "November to February"
  },
  {
    id: "nehru-science-centre",
    name: "Nehru Science Centre",
    cityId: "mumbai",
    description: "India's largest interactive science center with over 500 hands-on exhibits and demonstrations.",
    imageUrl: "https://images.unsplash.com/photo-1553704571-e38bb635e952?auto=format&fit=crop&q=80&w=1000",
    rating: 4.4,
    category: "other",
    reviews: [
      {
        id: "rm12",
        userId: "um12",
        username: "ScienceGeek",
        rating: 4.5,
        comment: "Fantastic place for kids and adults alike. Very informative and interactive.",
        date: "2023-06-08"
      }
    ],
    location: {
      address: "Dr E Moses Road, Worli, Mumbai, Maharashtra 400018",
      coordinates: {
        lat: 19.0117,
        lng: 72.8130
      }
    },
    transportOptions: {
      car: "Located in Worli, accessible by taxi.",
      bus: [
        {
          busNumber: "89",
          from: "Dadar",
          to: "Worli",
          stops: ["Prabhadevi", "Worli Naka"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹60 for adults, ₹40 for children",
    timings: "9:30 AM - 6:00 PM (Closed on Mondays)",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "film-city",
    name: "Film City (Dadasaheb Phalke Chitranagari)",
    cityId: "mumbai",
    description: "A major film production center where many Bollywood movies and TV shows are shot.",
    imageUrl: "https://images.unsplash.com/photo-1543536448-1e76fc2795d6?auto=format&fit=crop&q=80&w=1000",
    rating: 4.1,
    category: "other",
    reviews: [
      {
        id: "rm13",
        userId: "um13",
        username: "BollywoodFan",
        rating: 4.0,
        comment: "Great experience to see where Bollywood movies are made. Try to go with a guided tour.",
        date: "2023-08-22"
      }
    ],
    location: {
      address: "Goregaon East, Mumbai, Maharashtra 400065",
      coordinates: {
        lat: 19.1613,
        lng: 72.8733
      }
    },
    transportOptions: {
      car: "Located in Goregaon East, accessible by taxi.",
      bus: [
        {
          busNumber: "326",
          from: "Goregaon Station",
          to: "Film City",
          stops: ["Aarey Colony", "Film City Gate"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    entryFee: "Tour packages start from ₹599",
    timings: "10:00 AM - 6:00 PM",
    bestTimeToVisit: "October to March"
  }
];

// Combine all Mumbai attractions
export const mumbaiAttractions: Attraction[] = [
  ...touristAttractions,
  ...templeAttractions,
  ...otherAttractions
];
