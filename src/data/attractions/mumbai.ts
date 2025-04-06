import { Attraction } from "@/types";

// Tourist Places in Mumbai
export const touristAttractions: Attraction[] = [
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    cityId: "mumbai",
    description: "An iconic arch-monument built during the British Raj, overlooking the Arabian Sea.",
    imageUrl: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.5,
    category: "tourist",
    reviews: [
      {
        id: "rm1",
        user: "um1",
        username: "SeaLover",
        rating: 4.5,
        comment: "Beautiful monument with great views of the Arabian Sea.",
        date: "2023-05-15"
      },
      {
        id: "rm2",
        user: "um2",
        username: "TravelEnthusiast",
        rating: 5.0,
        comment: "A must-visit landmark in Mumbai. Perfect for photos, especially at sunset.",
        date: "2023-10-22"
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
        },
        {
          busNumber: "137",
          from: "Churchgate",
          to: "Gateway of India",
          stops: ["Colaba Causeway", "Regal Cinema"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours",
    bestTimeToVisit: "October to March",
    localCuisine: [
      {
        name: "Street Food at Colaba",
        description: "Try the famous vada pav, pav bhaji, and bhel puri from nearby stalls.",
        price: "₹50-150"
      },
      {
        name: "Leopold Cafe",
        description: "Historic restaurant serving Indian and Continental cuisine.",
        price: "₹500-1000"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-palace",
        name: "Taj Mahal Palace",
        rating: 5,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop",
        distance: "0.3 km",
        bookingLink: "https://example.com/hotel/taj-palace"
      },
      {
        id: "sea-green-hotel",
        name: "Sea Green Hotel",
        rating: 3.8,
        price: "₹3,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "0.5 km"
      }
    ]
  },
  {
    id: "marine-drive",
    name: "Marine Drive",
    cityId: "mumbai",
    description: "A 3.6-kilometer-long boulevard along the coastline of the Arabian Sea, also known as the Queen's Necklace.",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.6,
    category: "tourist",
    reviews: [
      {
        id: "rm3",
        user: "um3",
        username: "CityExplorer",
        rating: 5,
        comment: "Beautiful at night when the lights make it look like a necklace.",
        date: "2023-06-22"
      },
      {
        id: "rm4",
        user: "um4",
        username: "SunsetChaser",
        rating: 4.5,
        comment: "Perfect for an evening stroll or to watch the sunset. Very peaceful atmosphere.",
        date: "2023-08-15"
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
        },
        {
          busNumber: "106",
          from: "Churchgate",
          to: "Walkeshwar",
          stops: ["Marine Drive", "Chowpatty"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours",
    bestTimeToVisit: "October to March, Evening time for best views",
    localCuisine: [
      {
        name: "Chowpatty Beach Food",
        description: "Famous for its street food including bhel puri, pani puri, and kulfi.",
        price: "₹50-200"
      },
      {
        name: "Cream Centre",
        description: "Popular restaurant known for its channa bhatura and nachos.",
        price: "₹500-800"
      }
    ],
    nearbyHotels: [
      {
        id: "trident-nariman",
        name: "Trident Nariman Point",
        rating: 4.8,
        price: "₹12,000+",
        imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
        distance: "0.8 km"
      },
      {
        id: "marine-plaza",
        name: "Marine Plaza",
        rating: 4.2,
        price: "₹7,000+",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1000&auto=format&fit=crop",
        distance: "0.5 km"
      }
    ]
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    cityId: "mumbai",
    description: "UNESCO World Heritage Site featuring ancient rock-cut caves dedicated to Lord Shiva on Elephanta Island.",
    imageUrl: "https://images.unsplash.com/photo-1621259571570-043e79c19fd0?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1621259571570-043e79c19fd0?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589279715734-6631a314dca2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606913229708-c481c54e5cc6?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.3,
    category: "tourist",
    reviews: [
      {
        id: "rm5",
        user: "um5",
        username: "HistoryBuff",
        rating: 4.5,
        comment: "Amazing historical site with intricate carvings. Worth the ferry ride.",
        date: "2023-07-12"
      },
      {
        id: "rm6",
        user: "um6",
        username: "ArtLover",
        rating: 4.0,
        comment: "Incredible craftsmanship in the caves, but prepare for a lot of walking.",
        date: "2023-09-05"
      }
    ],
    location: {
      address: "Elephanta Island, Mumbai Harbour, Maharashtra",
      coordinates: {
        lat: 18.9634,
        lng: 72.9316
      }
    },
    transportOptions: {
      car: "Take a ferry from Gateway of India. Ferry ride takes about 1 hour.",
      bus: [
        {
          busNumber: "Ferry",
          from: "Gateway of India",
          to: "Elephanta Island",
          stops: [],
          frequency: "Every 30 minutes (from 9 AM to 2 PM)"
        }
      ]
    },
    entryFee: "₹40 for Indians, ₹600 for foreigners, Ferry costs extra",
    timings: "9:30 AM - 5:30 PM (Closed on Mondays)",
    bestTimeToVisit: "November to March",
    localCuisine: [
      {
        name: "Island Food Stalls",
        description: "Simple eateries serving basic Indian meals and snacks.",
        price: "₹100-300"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-palace-gateway",
        name: "Taj Mahal Palace",
        rating: 5,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop",
        distance: "Near Gateway of India"
      }
    ]
  },
  {
    id: "chhatrapati-shivaji-terminus",
    name: "Chhatrapati Shivaji Terminus",
    cityId: "mumbai",
    description: "A UNESCO World Heritage Site and historic railway station known for its Victorian Gothic architecture.",
    imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551161242-b5af797b90cb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623075402982-056dcaa3b8cf?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.5,
    category: "tourist",
    reviews: [
      {
        id: "rm7",
        user: "um7",
        username: "ArchitectureFan",
        rating: 4.8,
        comment: "Stunning Gothic architecture with incredible details. A photographer's paradise.",
        date: "2023-04-20"
      },
      {
        id: "rm8",
        user: "um8",
        username: "TravelPhotographer",
        rating: 4.5,
        comment: "Magnificent building both inside and outside. Best viewed early morning.",
        date: "2023-06-15"
      }
    ],
    location: {
      address: "Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9407,
        lng: 72.8347
      }
    },
    transportOptions: {
      car: "Located in Fort area, accessible by taxi or car.",
      bus: [
        {
          busNumber: "Multiple",
          from: "Various locations",
          to: "CST",
          stops: ["Various"],
          frequency: "Frequent"
        }
      ]
    },
    entryFee: "Free (Railway Museum inside: ₹10)",
    timings: "24 hours (exterior), Museum: 9 AM - 5 PM",
    bestTimeToVisit: "October to March, Early morning for photography",
    localCuisine: [
      {
        name: "Kyani & Co.",
        description: "One of Mumbai's oldest Iranian cafes serving bun maska and chai.",
        price: "₹100-300"
      },
      {
        name: "Pancham Puriwala",
        description: "Over 150-year-old eatery famous for its puris and curries.",
        price: "₹150-350"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-mahal-palace-cst",
        name: "Taj Mahal Palace",
        rating: 5,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop",
        distance: "2.5 km"
      },
      {
        id: "residency-fort",
        name: "Residency Hotel Fort",
        rating: 4.0,
        price: "₹4,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "0.8 km"
      }
    ]
  },
  {
    id: "juhu-beach",
    name: "Juhu Beach",
    cityId: "mumbai",
    description: "One of Mumbai's most popular beaches, known for its street food, celebrity homes, and vibrant atmosphere.",
    imageUrl: "https://images.unsplash.com/photo-1584205052463-5db29a565b02?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1584205052463-5db29a565b02?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1537993246723-916ca5d2fed6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575665152435-4f60eb5f6981?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.2,
    category: "tourist",
    reviews: [
      {
        id: "rm9",
        user: "um9",
        username: "BeachLover",
        rating: 4.5,
        comment: "Beautiful beach with amazing sunset views. The street food is incredible!",
        date: "2023-08-03"
      },
      {
        id: "rm10",
        user: "um10",
        username: "FoodieExplorer",
        rating: 4.0,
        comment: "Great place to relax and enjoy the famous Mumbai chaat and pav bhaji.",
        date: "2023-07-19"
      }
    ],
    location: {
      address: "Juhu Tara Road, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.0883,
        lng: 72.8264
      }
    },
    transportOptions: {
      car: "Located in western suburbs, accessible by taxi or car.",
      bus: [
        {
          busNumber: "221",
          from: "Andheri Station",
          to: "Juhu Beach",
          stops: ["Juhu Circle", "SNDT College"],
          frequency: "Every 15 minutes"
        },
        {
          busNumber: "222",
          from: "Santacruz Station",
          to: "Juhu Beach",
          stops: ["Santacruz Market", "Juhu Tara Road"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours, Beach food stalls: 4 PM - 11 PM",
    bestTimeToVisit: "October to March, Evenings for food and sunset",
    localCuisine: [
      {
        name: "Juhu Beach Food Stalls",
        description: "Famous for pav bhaji, gola (ice dessert), and various chaats.",
        price: "₹50-200"
      },
      {
        name: "Shiv Sagar",
        description: "Popular restaurant near the beach serving South Indian and North Indian dishes.",
        price: "₹300-600"
      }
    ],
    nearbyHotels: [
      {
        id: "jw-marriott-juhu",
        name: "JW Marriott Mumbai Juhu",
        rating: 4.9,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1000&auto=format&fit=crop",
        distance: "0.5 km"
      },
      {
        id: "sea-princess-juhu",
        name: "Sea Princess Hotel",
        rating: 4.3,
        price: "₹7,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "0.3 km"
      }
    ]
  }
];

// Temples in Mumbai
export const templeAttractions: Attraction[] = [
  {
    id: "shri-siddhivinayak-temple",
    name: "Shri Siddhivinayak Temple",
    cityId: "mumbai",
    description: "One of Mumbai's most famous Hindu temples dedicated to Lord Ganesha, visited by thousands daily.",
    imageUrl: "https://images.unsplash.com/photo-1582716923289-54236b3ee6cc?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582716923289-54236b3ee6cc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583254252483-5cc1462ab5fa?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1635016289350-ef5e53d4b592?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.7,
    category: "temple",
    reviews: [
      {
        id: "rm11",
        user: "um11",
        username: "DevotedVisitor",
        rating: 5,
        comment: "One of the most revered Ganesha temples. Peaceful despite the crowds.",
        date: "2023-04-10"
      },
      {
        id: "rm12",
        user: "um12",
        username: "SpiritualSeeker",
        rating: 4.8,
        comment: "Beautiful temple with a serene atmosphere. The architecture is stunning.",
        date: "2023-09-25"
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
        },
        {
          busNumber: "352",
          from: "Worli",
          to: "Prabhadevi",
          stops: ["Doordarshan", "Siddhivinayak Temple"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "5:30 AM - 10:00 PM",
    bestTimeToVisit: "Early morning or late evening to avoid crowds",
    localCuisine: [
      {
        name: "Prasad",
        description: "Temple offering of modak, Lord Ganesha's favorite sweet.",
        price: "Donation based"
      },
      {
        name: "Prakash",
        description: "Nearby Maharashtrian restaurant famous for its vada pav and sabudana khichdi.",
        price: "₹100-300"
      }
    ],
    nearbyHotels: [
      {
        id: "four-seasons-worli",
        name: "Four Seasons Hotel Mumbai",
        rating: 4.8,
        price: "₹12,000+",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "3.5 km"
      },
      {
        id: "midtown-pritam-dadar",
        name: "Midtown Pritam",
        rating: 4.0,
        price: "₹5,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "2.1 km"
      }
    ]
  },
  {
    id: "iskcon-temple-juhu",
    name: "ISKCON Temple, Juhu",
    cityId: "mumbai",
    description: "A beautiful Radha Krishna temple and spiritual center run by the International Society for Krishna Consciousness (ISKCON).",
    imageUrl: "https://images.unsplash.com/photo-1589815248254-a8f70be01062?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589815248254-a8f70be01062?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1657835925650-6fe89a4ef74c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624917886951-494eecab5a5f?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.6,
    category: "temple",
    reviews: [
      {
        id: "rm13",
        user: "um13",
        username: "PeacefulSoul",
        rating: 4.8,
        comment: "A haven of tranquility in busy Mumbai. Excellent architecture and peaceful atmosphere.",
        date: "2023-05-22"
      },
      {
        id: "rm14",
        user: "um14",
        username: "TravellingYogi",
        rating: 4.5,
        comment: "Beautiful temple with amazing vegetarian food at their restaurant. The aarti is mesmerizing.",
        date: "2023-08-11"
      }
    ],
    location: {
      address: "Hare Krishna Land, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.0795,
        lng: 72.8473
      }
    },
    transportOptions: {
      car: "Located in Juhu, accessible by taxi or car.",
      bus: [
        {
          busNumber: "248",
          from: "Andheri Station",
          to: "Juhu",
          stops: ["ISKCON Temple", "Juhu Beach"],
          frequency: "Every 15 minutes"
        },
        {
          busNumber: "249",
          from: "Vile Parle Station",
          to: "Juhu",
          stops: ["Nanavati Hospital", "ISKCON Temple"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "4:30 AM - 9:00 PM, Aarti timings: 7:30 AM, 12:30 PM, 7:00 PM",
    bestTimeToVisit: "Year-round, Morning or evening for aarti ceremonies",
    localCuisine: [
      {
        name: "Govinda's Restaurant",
        description: "ISKCON's vegetarian restaurant serving delicious Sattvic food.",
        price: "₹300-600"
      },
      {
        name: "Temple Prasad",
        description: "Sacred vegetarian food distributed after ceremonies.",
        price: "Donation based"
      }
    ],
    nearbyHotels: [
      {
        id: "jw-marriott-juhu-iskcon",
        name: "JW Marriott Mumbai Juhu",
        rating: 4.9,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1522798514-97ceb8c4f1c8?q=80&w=1000&auto=format&fit=crop",
        distance: "1.2 km"
      },
      {
        id: "hotel-sea-princess-iskcon",
        name: "Hotel Sea Princess",
        rating: 4.3,
        price: "₹7,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.0 km"
      }
    ]
  },
  {
    id: "mumba-devi-temple",
    name: "Mumba Devi Temple",
    cityId: "mumbai",
    description: "A historic temple dedicated to Goddess Mumba, after whom the city of Mumbai is named.",
    imageUrl: "https://images.unsplash.com/photo-1633448711483-32436b3838a9?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1633448711483-32436b3838a9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1644943176089-3e48507aaa83?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583934584129-819456ae8305?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.4,
    category: "temple",
    reviews: [
      {
        id: "rm15",
        user: "um15",
        username: "HeritageExplorer",
        rating: 4.3,
        comment: "Historic temple at the heart of the city. Very crowded but worth visiting.",
        date: "2023-06-12"
      },
      {
        id: "rm16",
        user: "um16",
        username: "CultureEnthusiast",
        rating: 4.5,
        comment: "Beautiful temple with great historical significance for Mumbai.",
        date: "2023-07-05"
      }
    ],
    location: {
      address: "Mumba Devi Marg, Zaveri Bazaar, Mumbai, Maharashtra 400003",
      coordinates: {
        lat: 18.9450,
        lng: 72.8322
      }
    },
    transportOptions: {
      car: "Located in Zaveri Bazaar, accessible by taxi or car but traffic can be heavy.",
      bus: [
        {
          busNumber: "Multiple",
          from: "CST/Churchgate",
          to: "Zaveri Bazaar",
          stops: ["Crawford Market", "Bhuleshwar"],
          frequency: "Frequent"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 10:00 PM",
    bestTimeToVisit: "Weekday mornings to avoid crowds",
    localCuisine: [
      {
        name: "Zaveri Bazaar Street Food",
        description: "Famous for jalebi, kachori, and other street snacks.",
        price: "₹50-150"
      },
      {
        name: "Bhuleshwar Food Stalls",
        description: "Traditional Gujarati and Maharashtrian snacks.",
        price: "₹50-200"
      }
    ],
    nearbyHotels: [
      {
        id: "west-end-hotel-mds",
        name: "West End Hotel",
        rating: 3.8,
        price: "₹4,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "2.0 km"
      }
    ]
  },
  {
    id: "mahalakshmi-temple",
    name: "Mahalakshmi Temple",
    cityId: "mumbai",
    description: "A significant temple dedicated to Goddess Mahalakshmi, the goddess of wealth and prosperity.",
    imageUrl: "https://images.unsplash.com/photo-1632208659531-2b92ab329a26?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1632208659531-2b92ab329a26?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1640244053036-51cde3fedb4d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602524815921-b2de5ef63ddd?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.6,
    category: "temple",
    reviews: [
      {
        id: "rm17",
        user: "um17",
        username: "DivineSeeker",
        rating: 4.7,
        comment: "Beautiful temple by the sea with amazing energy. The location is stunning.",
        date: "2023-03-18"
      },
      {
        id: "rm18",
        user: "um18",
        username: "FaithfulTraveler",
        rating: 4.5,
        comment: "One of the oldest temples in Mumbai. Very peaceful and well-maintained.",
        date: "2023-10-02"
      }
    ],
    location: {
      address: "Bhulabhai Desai Road, Mahalakshmi, Mumbai, Maharashtra 400026",
      coordinates: {
        lat: 18.9773,
        lng: 72.8099
      }
    },
    transportOptions: {
      car: "Located near Haji Ali, accessible by taxi or car.",
      bus: [
        {
          busNumber: "83",
          from: "Churchgate",
          to: "Mahalakshmi",
          stops: ["Haji Ali", "Mahalakshmi Temple"],
          frequency: "Every 15 minutes"
        },
        {
          busNumber: "89",
          from: "Grant Road",
          to: "Worli",
          stops: ["Mahalakshmi", "Worli Naka"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "6:00 AM - 10:00 PM",
    bestTimeToVisit: "Navratri festival for special celebrations",
    localCuisine: [
      {
        name: "Temple Prasad",
        description: "Sacred offerings of coconut and sweet dishes.",
        price: "Donation based"
      },
      {
        name: "Cafe Mysore",
        description: "Famous South Indian restaurant nearby.",
        price: "₹200-400"
      }
    ],
    nearbyHotels: [
      {
        id: "four-seasons-mahalakshmi",
        name: "Four Seasons Hotel Mumbai",
        rating: 4.8,
        price: "₹12,000+",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "2.5 km"
      },
      {
        id: "atithi-hotel-worli",
        name: "Atithi Hotel",
        rating: 3.7,
        price: "₹3,500+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.8 km"
      }
    ]
  },
  {
    id: "babulnath-temple",
    name: "Babulnath Temple",
    cityId: "mumbai",
    description: "An ancient temple dedicated to Lord Shiva, situated on a small hillock near Girgaum Chowpatty.",
    imageUrl: "https://images.unsplash.com/photo-1568039142327-391b43c0dd8b?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1568039142327-391b43c0dd8b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557312311-8f90ff9e4240?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600855129708-a9ae6b91de6f?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.5,
    category: "temple",
    reviews: [
      {
        id: "rm19",
        user: "um19",
        username: "ShivaBhakt",
        rating: 4.6,
        comment: "Serene temple with beautiful architecture. Best visited during Mahashivratri.",
        date: "2023-02-15"
      },
      {
        id: "rm20",
        user: "um20",
        username: "TempleTrail",
        rating: 4.4,
        comment: "Ancient temple with good vibes. The climb is worth the spiritual experience.",
        date: "2023-11-14"
      }
    ],
    location: {
      address: "Babulnath Road, Girgaum, Mumbai, Maharashtra 400007",
      coordinates: {
        lat: 18.9558,
        lng: 72.8090
      }
    },
    transportOptions: {
      car: "Located near Girgaum Chowpatty, accessible by taxi or car.",
      bus: [
        {
          busNumber: "106",
          from: "Churchgate",
          to: "Walkeshwar",
          stops: ["Chowpatty", "Babulnath Temple"],
          frequency: "Every 20 minutes"
        },
        {
          busNumber: "120",
          from: "Grant Road",
          to: "Tardeo",
          stops: ["Nana Chowk", "Babulnath"],
          frequency: "Every 25 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "5:30 AM - 10:00 PM",
    bestTimeToVisit: "Mahashivratri for special celebrations",
    localCuisine: [
      {
        name: "Temple Prasad",
        description: "Traditional offerings to Lord Shiva.",
        price: "Donation based"
      },
      {
        name: "Chowpatty Food Stalls",
        description: "Famous for bhel puri and other Mumbai street food.",
        price: "₹50-200"
      }
    ],
    nearbyHotels: [
      {
        id: "intercontinental-marine-drive",
        name: "InterContinental Marine Drive",
        rating: 4.6,
        price: "₹10,000+",
        imageUrl: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?q=80&w=1000&auto=format&fit=crop",
        distance: "1.5 km"
      },
      {
        id: "sea-green-hotel-marine-drive",
        name: "Sea Green Hotel",
        rating: 3.8,
        price: "₹3,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.2 km"
      }
    ]
  }
];

// Other Attractions in Mumbai
export const otherAttractions: Attraction[] = [
  {
    id: "kanheri-caves",
    name: "Kanheri Caves",
    cityId: "mumbai",
    description: "Ancient Buddhist caves located within the Sanjay Gandhi National Park, featuring rock-cut monuments dating back to 1st century BCE.",
    imageUrl: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623087482935-562134223710?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614587396292-8e4ed29e54c1?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.3,
    category: "other",
    reviews: [
      {
        id: "rm21",
        user: "um21",
        username: "HistoryExplorer",
        rating: 4.5,
        comment: "Amazing Buddhist rock-cut monuments dating back to 1st century BCE.",
        date: "2023-03-05"
      },
      {
        id: "rm22",
        user: "um22",
        username: "NatureHistoryBuff",
        rating: 4.2,
        comment: "Beautiful combination of nature and historical caves. Wear comfortable shoes for the hike.",
        date: "2023-09-18"
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
        },
        {
          busNumber: "SGNP Shuttle",
          from: "Park Main Gate",
          to: "Kanheri Caves",
          stops: ["Various stops within the park"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    entryFee: "₹15 for Indians, ₹200 for foreigners (Park entry fee additional)",
    timings: "9:00 AM - 5:00 PM (Closed on Mondays)",
    bestTimeToVisit: "October to March",
    localCuisine: [
      {
        name: "Park Canteen",
        description: "Basic food and refreshments available at the park entrance.",
        price: "₹100-300"
      },
      {
        name: "Kulhad Chai Point",
        description: "Tea stall near the caves serving traditional chai and snacks.",
        price: "₹20-100"
      }
    ],
    nearbyHotels: [
      {
        id: "the-resort-malad",
        name: "The Resort",
        rating: 4.1,
        price: "₹6,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "8 km"
      },
      {
        id: "unicontinental-andheri",
        name: "UniContinental",
        rating: 3.8,
        price: "₹4,000+",
        imageUrl: "https://images.unsplash.com/photo-1537572263231-4314a30d444f?q=80&w=1000&auto=format&fit=crop",
        distance: "12 km"
      }
    ]
  },
  {
    id: "sanjay-gandhi-national-park",
    name: "Sanjay Gandhi National Park",
    cityId: "mumbai",
    description: "A large protected area within the city limits, offering lush greenery, wildlife, and various recreational activities.",
    imageUrl: "https://images.unsplash.com/photo-1627303800260-3a7e6c8a397c?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1627303800260-3a7e6c8a397c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1627292441193-5770a4249592?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1625063577326-6aa00d6941f5?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.4,
    category: "other",
    reviews: [
      {
        id: "rm23",
        user: "um23",
        username: "NatureTrail",
        rating: 4.6,
        comment: "An incredible forest right in the middle of the city! Great for hiking and safari rides.",
        date: "2023-10-15"
      },
      {
        id: "rm24",
        user: "um24",
        username: "WildlifeWatcher",
        rating: 4.3,
        comment: "Amazing to see leopards and other wildlife so close to the city. The toy train is fun for kids.",
        date: "2023-05-07"
      }
    ],
    location: {
      address: "Borivali East, Mumbai, Maharashtra 400066",
      coordinates: {
        lat: 19.2147,
        lng: 72.9106
      }
    },
    transportOptions: {
      car: "Located in Borivali, accessible by car with parking available.",
      bus: [
        {
          busNumber: "Multiple",
          from: "Borivali Station",
          to: "National Park",
          stops: ["Various"],
          frequency: "Frequent"
        }
      ]
    },
    entryFee: "₹80 for adults, ₹40 for children (Safari and toy train extra)",
    timings: "7:30 AM - 6:30 PM (Closed on Mondays)",
    bestTimeToVisit: "October to March",
    localCuisine: [
      {
        name: "Park Canteen",
        description: "Serves basic Indian meals and snacks.",
        price: "₹100-300"
      },
      {
        name: "Picnic Areas",
        description: "Designated areas where visitors can bring their own food.",
        price: "Free with park entry"
      }
    ],
    nearbyHotels: [
      {
        id: "the-resort-sgnp",
        name: "The Resort",
        rating: 4.1,
        price: "₹6,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "6 km"
      },
      {
        id: "supremo-hotel-borivali",
        name: "Hotel Supremo",
        rating: 3.6,
        price: "₹3,000+",
        imageUrl: "https://images.unsplash.com/photo-1537572263231-4314a30d444f?q=80&w=1000&auto=format&fit=crop",
        distance: "4 km"
      }
    ]
  },
  {
    id: "nehru-science-centre",
    name: "Nehru Science Centre",
    cityId: "mumbai",
    description: "India's largest interactive science center with over 500 exhibits on various scientific phenomena.",
    imageUrl: "https://images.unsplash.com/photo-1629015456601-f6111b312c6f?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1629015456601-f6111b312c6f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.2,
    category: "other",
    reviews: [
      {
        id: "rm25",
        user: "um25",
        username: "ScienceGeek",
        rating: 4.5,
        comment: "Fantastic place for kids to learn science through interactive exhibits.",
        date: "2023-07-12"
      },
      {
        id: "rm26",
        user: "um26",
        username: "FamilyTraveler",
        rating: 4.0,
        comment: "Great educational visit. The 3D show was the highlight for my children.",
        date: "2023-04-30"
      }
    ],
    location: {
      address: "Dr. E. Moses Road, Worli, Mumbai, Maharashtra 400018",
      coordinates: {
        lat: 19.0174,
        lng: 72.8175
      }
    },
    transportOptions: {
      car: "Located in Worli, accessible by taxi or car.",
      bus: [
        {
          busNumber: "89",
          from: "Grant Road",
          to: "Worli",
          stops: ["Mahalakshmi", "Science Centre"],
          frequency: "Every 20 minutes"
        },
        {
          busNumber: "56",
          from: "Worli Depot",
          to: "Nehru Science Centre",
          stops: ["Various"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹60 for adults, ₹30 for children (3D Science show extra)",
    timings: "9:30 AM - 6:00 PM (Closed on Mondays)",
    bestTimeToVisit: "Weekday afternoons to avoid school crowds",
    localCuisine: [
      {
        name: "Science Centre Canteen",
        description: "Basic cafeteria serving snacks and beverages.",
        price: "₹100-250"
      },
      {
        name: "Cafe Coffee Day",
        description: "Coffee shop near the center entrance.",
        price: "₹150-400"
      }
    ],
    nearbyHotels: [
      {
        id: "four-seasons-worli-sc",
        name: "Four Seasons Hotel Mumbai",
        rating: 4.8,
        price: "₹12,000+",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "2.5 km"
      },
      {
        id: "taj-lands-end",
        name: "Taj Lands End",
        rating: 4.7,
        price: "₹11,000+",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "4.0 km"
      }
    ]
  },
  {
    id: "bombay-stock-exchange",
    name: "Bombay Stock Exchange",
    cityId: "mumbai",
    description: "Asia's oldest stock exchange and one of the fastest in the world with an iconic building in the Fort area.",
    imageUrl: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.1,
    category: "other",
    reviews: [
      {
        id: "rm27",
        user: "um27",
        username: "FinanceEnthusiast",
        rating: 4.3,
        comment: "Interesting place for anyone interested in finance. The museum shows the history of Indian stock trading.",
        date: "2023-08-08"
      },
      {
        id: "rm28",
        user: "um28",
        username: "BusinessTourist",
        rating: 4.0,
        comment: "Historical building and interesting to see, though the actual trading is now electronic.",
        date: "2023-06-14"
      }
    ],
    location: {
      address: "Phiroze Jeejeebhoy Towers, Dalal Street, Fort, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9294,
        lng: 72.8347
      }
    },
    transportOptions: {
      car: "Located in Fort area, accessible by taxi or car.",
      bus: [
        {
          busNumber: "Multiple",
          from: "CST/Churchgate",
          to: "Fort",
          stops: ["Various"],
          frequency: "Frequent"
        }
      ]
    },
    entryFee: "Free for external viewing, Museum: ₹100",
    timings: "External viewing: 24 hours, Museum: 10:00 AM - 5:00 PM (weekdays only)",
    bestTimeToVisit: "Weekday mornings during trading hours",
    localCuisine: [
      {
        name: "Khau Galli",
        description: "Street food lane near BSE with various local snacks.",
        price: "₹50-150"
      },
      {
        name: "Jimmy Boy",
        description: "Popular Parsi restaurant near the stock exchange.",
        price: "₹300-700"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-mahal-palace-bse",
        name: "Taj Mahal Palace",
        rating: 5,
        price: "₹15,000+",
        imageUrl: "https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop",
        distance: "2.0 km"
      },
      {
        id: "trident-nariman-bse",
        name: "Trident Nariman Point",
        rating: 4.8,
        price: "₹12,000+",
        imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000&auto=format&fit=crop",
        distance: "1.5 km"
      }
    ]
  },
  {
    id: "bandstand-promenade",
    name: "Bandstand Promenade",
    cityId: "mumbai",
    description: "A 1.2 km walkway along the sea in Bandra, offering stunning views and celebrity homes including Shah Rukh Khan's Mannat.",
    imageUrl: "https://images.unsplash.com/photo-1584205052463-5db29a565b02?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1584205052463-5db29a565b02?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628627062093-089343248d8a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589674781759-e2a89a8f5e41?q=80&w=1000&auto=format&fit=crop"
    ],
    rating: 4.4,
    category: "other",
    reviews: [
      {
        id: "rm29",
        user: "um29",
        username: "CelebritySpotter",
        rating: 4.5,
        comment: "Great place to walk and see the sea. You might catch a glimpse of SRK at Mannat!",
        date: "2023-02-14"
      },
      {
        id: "rm30",
        user: "um30",
        username: "SunsetPhotographer",
        rating: 4.3,
        comment: "Beautiful sunset views and a pleasant sea breeze. Perfect for evening walks.",
        date: "2023-11-11"
      }
    ],
    location: {
      address: "B.J. Road, Bandstand, Bandra West, Mumbai, Maharashtra 400050",
      coordinates: {
        lat: 19.0438,
        lng: 72.8185
      }
    },
    transportOptions: {
      car: "Located in Bandra West, accessible by taxi or car.",
      bus: [
        {
          busNumber: "211",
          from: "Bandra Station",
          to: "Bandstand",
          stops: ["Hill Road", "St. Andrews Church"],
          frequency: "Every 15 minutes"
        },
        {
          busNumber: "220",
          from: "Bandra Station",
          to: "Mount Mary",
          stops: ["Bandstand", "Mannat"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "24 hours, Best time: Early mornings and evenings",
    bestTimeToVisit: "October to March, Evening for sunset views",
    localCuisine: [
      {
        name: "Street Food Vendors",
        description: "Various stalls selling ice cream, corn, and snacks.",
        price: "₹50-150"
      },
      {
        name: "Taj Lands End Restaurant",
        description: "Luxury dining with sea views at the end of Bandstand.",
        price: "₹2,000-5,000"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-lands-end-bandstand",
        name: "Taj Lands End",
        rating: 4.7,
        price: "₹11,000+",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "0.5 km"
      },
      {
        id: "waterstone-hotel",
        name: "Waterstone Hotel",
        rating: 4.0,
        price: "₹6,000+",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.2 km"
      }
    ]
  }
];

// Combine all Mumbai attractions
export const mumbaiAttractions: Attraction[] = [
  ...touristAttractions,
  ...templeAttractions,
  ...otherAttractions
];
