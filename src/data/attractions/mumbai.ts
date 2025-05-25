
import { Attraction } from "@/types";

export const mumbaiAttractions: Attraction[] = [
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    description: "An iconic arch monument built during the 20th century in Mumbai. It was erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911.",
    imageUrl: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9220,
        lng: 72.8347
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "goi1",
        user: "user123",
        username: "Arjun S.",
        rating: 5,
        comment: "Iconic landmark of Mumbai! The architecture is stunning and the view from the harbor is beautiful.",
        date: "2023-11-15"
      },
      {
        id: "goi2",
        user: "user456",
        username: "Priya K.",
        rating: 4,
        comment: "Must visit when in Mumbai. Best time is early morning or evening to avoid crowds.",
        date: "2023-10-22"
      }
    ],
    transportOptions: {
      car: "Easily accessible by taxi from any part of Mumbai. Limited parking available nearby.",
      bus: [
        {
          busNumber: "108",
          from: "Churchgate",
          to: "Gateway of India",
          stops: ["Fort", "Regal Cinema", "Colaba"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "October to March, preferably early morning or evening",
    popularFor: "Colonial architecture, harbor views, boat rides to Elephanta Caves",
    localCuisine: [
      {
        name: "Leopold Cafe",
        description: "Historic cafe famous for its continental dishes and Mumbai atmosphere",
        price: "₹800-1200 per person"
      },
      {
        name: "Street Food at Colaba Causeway",
        description: "Various street food stalls offering pav bhaji, vada pav, and bhel puri",
        price: "₹50-150 per dish"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-mahal-palace",
        name: "The Taj Mahal Palace",
        rating: 4.8,
        price: "₹25,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "0.2 km"
      },
      {
        id: "hotel-sea-palace",
        name: "Hotel Sea Palace",
        rating: 4.2,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.5 km"
      }
    ]
  },
  {
    id: "marine-drive",
    name: "Marine Drive",
    description: "A 3.6-kilometer long boulevard in South Mumbai, known as the Queen's Necklace due to the street lights that illuminate the entire length of the road at night, resembling a string of pearls.",
    imageUrl: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Marine Drive, Mumbai, Maharashtra 400020",
      coordinates: {
        lat: 18.9443,
        lng: 72.8234
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "md1",
        user: "user789",
        username: "Sneha M.",
        rating: 5,
        comment: "Perfect place for evening walks. The sunset view is absolutely mesmerizing!",
        date: "2023-12-05"
      },
      {
        id: "md2",
        user: "user101",
        username: "Rohit P.",
        rating: 4,
        comment: "The Queen's Necklace view at night is spectacular. A must-visit in Mumbai.",
        date: "2023-11-18"
      }
    ],
    transportOptions: {
      car: "Easily accessible by taxi or car. Parking available at various points along the drive.",
      bus: [
        {
          busNumber: "123",
          from: "Bandra",
          to: "Marine Drive",
          stops: ["Mahim", "Worli", "Nariman Point"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "Evening for sunset views or night for the Queen's Necklace effect",
    popularFor: "Sunset views, evening walks, Art Deco architecture, Queen's Necklace night view",
    localCuisine: [
      {
        name: "Chowpatty Beach Food Stalls",
        description: "Famous for bhel puri, pani puri, and kulfi at nearby Girgaon Chowpatty",
        price: "₹30-100 per dish"
      },
      {
        name: "Cafe Mocha",
        description: "Popular cafe chain with outlets near Marine Drive serving coffee and snacks",
        price: "₹300-600 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "intercontinental-marine-drive",
        name: "InterContinental Marine Drive",
        rating: 4.7,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "0.1 km"
      },
      {
        id: "hotel-president",
        name: "Hotel President",
        rating: 4.3,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.3 km"
      }
    ]
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    description: "A UNESCO World Heritage Site located on Elephanta Island, featuring ancient cave temples dedicated to Lord Shiva. The caves are carved out of solid basalt rock and date back to the 5th to 8th centuries.",
    imageUrl: "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618782434072-e577be1b2e0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "mumbai",
    location: {
      address: "Elephanta Island, Mumbai, Maharashtra 400094",
      coordinates: {
        lat: 18.9633,
        lng: 72.9315
      }
    },
    rating: 4.4,
    reviews: [
      {
        id: "ec1",
        user: "user202",
        username: "Anita R.",
        rating: 5,
        comment: "Incredible ancient architecture! The Trimurti sculpture is breathtaking. The boat ride adds to the experience.",
        date: "2023-10-30"
      },
      {
        id: "ec2",
        user: "user303",
        username: "Vikram J.",
        rating: 4,
        comment: "Amazing historical site. Plan to spend at least 3-4 hours including the boat journey.",
        date: "2023-09-15"
      }
    ],
    transportOptions: {
      car: "Take a taxi to Gateway of India, then board a ferry to Elephanta Island",
      bus: [
        {
          busNumber: "Ferry",
          from: "Gateway of India",
          to: "Elephanta Island",
          stops: ["Direct ferry service"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "9:00 AM to 5:30 PM (Closed on Mondays)",
    entryFee: "₹40 for Indians, ₹600 for foreigners (plus ferry charges)",
    bestTimeToVisit: "October to March, avoid monsoon season",
    popularFor: "Ancient rock-cut temples, UNESCO World Heritage Site, Trimurti sculpture",
    localCuisine: [
      {
        name: "Island Food Stalls",
        description: "Simple vegetarian meals and snacks available on the island",
        price: "₹100-200 per person"
      },
      {
        name: "Ferry Refreshments",
        description: "Tea, coffee, and light snacks available on the ferry",
        price: "₹20-50 per item"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-mahal-palace-colaba",
        name: "The Taj Mahal Palace (Colaba)",
        rating: 4.8,
        price: "₹25,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "Ferry ride from Gateway of India"
      }
    ]
  },
  {
    id: "juhu-beach",
    name: "Juhu Beach",
    description: "One of Mumbai's most famous beaches, stretching for 6 kilometers along the Arabian Sea. Popular for its street food, sunset views, and as a recreational spot for locals and tourists alike.",
    imageUrl: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Juhu Beach, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.0990,
        lng: 72.8265
      }
    },
    rating: 4.3,
    reviews: [
      {
        id: "jb1",
        user: "user404",
        username: "Kavya S.",
        rating: 4,
        comment: "Great place for evening walks and street food. The bhel puri here is amazing!",
        date: "2023-11-20"
      },
      {
        id: "jb2",
        user: "user505",
        username: "Aarav T.",
        rating: 4,
        comment: "Perfect spot for sunset watching. Can get crowded on weekends but worth the visit.",
        date: "2023-10-12"
      }
    ],
    transportOptions: {
      car: "Accessible by taxi or car. Parking available but limited during peak hours.",
      bus: [
        {
          busNumber: "224",
          from: "Bandra Station",
          to: "Juhu Beach",
          stops: ["Khar", "Santacruz", "Vile Parle"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "Open 24 hours (best visited during evening)",
    entryFee: "Free",
    bestTimeToVisit: "Evening for sunset views, avoid monsoon season",
    popularFor: "Street food, sunset views, horse rides, celebrity spotting",
    localCuisine: [
      {
        name: "Beach Street Food",
        description: "Famous for pav bhaji, bhel puri, sev puri, and kulfi",
        price: "₹30-150 per dish"
      },
      {
        name: "Juhu Beach Resort Restaurant",
        description: "Various restaurants near the beach serving Indian and international cuisine",
        price: "₹800-1500 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "jw-marriott-juhu",
        name: "JW Marriott Mumbai Juhu",
        rating: 4.6,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "0.5 km"
      },
      {
        id: "sun-n-sand-juhu",
        name: "Sun-N-Sand Hotel",
        rating: 4.1,
        price: "₹9,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.3 km"
      }
    ]
  },
  {
    id: "chhatrapati-shivaji-terminus",
    name: "Chhatrapati Shivaji Maharaj Terminus",
    description: "A UNESCO World Heritage Site and historic railway station, formerly known as Victoria Terminus. It's an outstanding example of Victorian Gothic Revival architecture blended with traditional Indian architecture.",
    imageUrl: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Chhatrapati Shivaji Maharaj Terminus Area, Fort, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9401,
        lng: 72.8352
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "cst1",
        user: "user606",
        username: "Rajesh M.",
        rating: 5,
        comment: "Architectural marvel! The Gothic design is stunning. A must-see for architecture enthusiasts.",
        date: "2023-09-28"
      },
      {
        id: "cst2",
        user: "user707",
        username: "Meera D.",
        rating: 4,
        comment: "Beautiful heritage building. The hustle and bustle of the station adds to the experience.",
        date: "2023-11-08"
      }
    ],
    transportOptions: {
      car: "Located in Fort area, easily accessible by taxi. Limited parking available.",
      bus: [
        {
          busNumber: "103",
          from: "Churchgate",
          to: "CST",
          stops: ["Fort", "Ballard Estate"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    timings: "Open 24 hours (as it's a working railway station)",
    entryFee: "Free (platform tickets required to enter platforms)",
    bestTimeToVisit: "Early morning or late evening to avoid peak rush hours",
    popularFor: "Victorian Gothic architecture, UNESCO World Heritage Site, railway heritage",
    localCuisine: [
      {
        name: "Railway Station Food Court",
        description: "Various food stalls and restaurants inside the station",
        price: "₹50-200 per meal"
      },
      {
        name: "Crawford Market Food Streets",
        description: "Traditional Mumbai street food in nearby Crawford Market area",
        price: "₹30-120 per dish"
      }
    ],
    nearbyHotels: [
      {
        id: "grand-hotel-mumbai",
        name: "The Grand Hotel",
        rating: 4.2,
        price: "₹7,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.8 km"
      },
      {
        id: "hotel-city-palace",
        name: "Hotel City Palace",
        rating: 3.9,
        price: "₹5,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "1.2 km"
      }
    ]
  }
];
