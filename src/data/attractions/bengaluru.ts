
import { Attraction } from "@/types";

export const bengaluruAttractions: Attraction[] = [
  {
    id: "lalbagh-botanical-garden",
    name: "Lalbagh Botanical Garden",
    description: "One of the most beautiful botanical gardens in India, spread over 240 acres. Home to over 1,800 species of plants and trees, including a 3,000-year-old Banyan tree. The Glass House hosts famous flower shows.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Mavalli, Bengaluru, Karnataka 560004",
      coordinates: {
        lat: 12.9507,
        lng: 77.5848
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "lb1",
        user: "user808",
        username: "Aditi K.",
        rating: 5,
        comment: "Beautiful garden perfect for morning walks. The flower shows are spectacular!",
        date: "2023-12-01"
      },
      {
        id: "lb2",
        user: "user909",
        username: "Suresh R.",
        rating: 4,
        comment: "Great place to spend time with family. The ancient Banyan tree is amazing.",
        date: "2023-11-15"
      }
    ],
    transportOptions: {
      car: "Easily accessible by car with parking available. About 4 km from city center.",
      bus: [
        {
          busNumber: "201",
          from: "Majestic",
          to: "Lalbagh",
          stops: ["KR Market", "Lalbagh West Gate"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "6:00 AM - 7:00 PM",
    entryFee: "₹30 for adults, ₹5 for children",
    bestTimeToVisit: "Early morning or evening, especially during flower show season",
    popularFor: "Botanical diversity, flower shows, ancient Banyan tree, morning walks",
    localCuisine: [
      {
        name: "VV Puram Food Street",
        description: "Famous food street near Lalbagh known for South Indian delicacies",
        price: "₹50-200 per dish"
      },
      {
        name: "Mavalli Tiffin Rooms (MTR)",
        description: "Legendary restaurant serving authentic South Indian breakfast",
        price: "₹200-400 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-mg-road",
        name: "Taj MG Road",
        rating: 4.6,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "hotel-woodlands",
        name: "Hotel Woodlands",
        rating: 4.1,
        price: "₹4,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2.5 km"
      }
    ]
  },
  {
    id: "bangalore-palace",
    name: "Bangalore Palace",
    description: "A stunning palace built in 1887, inspired by England's Windsor Castle. The palace showcases Tudor-style architecture with fortified towers, battlements, and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Vasanth Nagar, Bengaluru, Karnataka 560052",
      coordinates: {
        lat: 12.9986,
        lng: 77.5922
      }
    },
    rating: 4.4,
    reviews: [
      {
        id: "bp1",
        user: "user111",
        username: "Rahul M.",
        rating: 4,
        comment: "Beautiful palace with rich history. The audio guide is very informative.",
        date: "2023-10-20"
      },
      {
        id: "bp2",
        user: "user222",
        username: "Priya S.",
        rating: 5,
        comment: "Stunning architecture and well-maintained interiors. A glimpse into royal life.",
        date: "2023-09-30"
      }
    ],
    transportOptions: {
      car: "Located in central Bengaluru, easily accessible by taxi or car.",
      bus: [
        {
          busNumber: "302",
          from: "MG Road",
          to: "Bangalore Palace",
          stops: ["Cubbon Park", "Vasanth Nagar"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "10:00 AM - 5:30 PM",
    entryFee: "₹230 for Indians, ₹460 for foreigners",
    bestTimeToVisit: "October to March",
    popularFor: "Tudor architecture, royal heritage, vintage car collection, beautiful gardens",
    localCuisine: [
      {
        name: "The Only Place",
        description: "Popular restaurant known for steaks and continental cuisine",
        price: "₹800-1200 per person"
      },
      {
        name: "Corner House Ice Cream",
        description: "Famous local ice cream parlor with unique flavors",
        price: "₹150-300 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "oberoi-bengaluru",
        name: "The Oberoi, Bengaluru",
        rating: 4.7,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "park-hotel-bengaluru",
        name: "The Park Bengaluru",
        rating: 4.3,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "1.5 km"
      }
    ]
  },
  {
    id: "cubbon-park",
    name: "Cubbon Park",
    description: "A sprawling 300-acre park in the heart of Bengaluru, home to over 6,000 trees and numerous heritage buildings. It's a green oasis perfect for morning walks, jogging, and recreational activities.",
    imageUrl: "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Kasturba Road, Sampangi Rama Nagar, Bengaluru, Karnataka 560001",
      coordinates: {
        lat: 12.9719,
        lng: 77.5937
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "cp1",
        user: "user333",
        username: "Anjali P.",
        rating: 5,
        comment: "Perfect place for morning jogs and evening walks. Very well maintained green space.",
        date: "2023-11-25"
      },
      {
        id: "cp2",
        user: "user444",
        username: "Kiran T.",
        rating: 4,
        comment: "Great place to relax in the city. The heritage buildings add to the charm.",
        date: "2023-10-18"
      }
    ],
    transportOptions: {
      car: "Located in central Bengaluru with multiple entry points. Limited parking available.",
      bus: [
        {
          busNumber: "401",
          from: "Majestic",
          to: "Cubbon Park",
          stops: ["City Market", "MG Road"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    timings: "6:00 AM - 6:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or evening",
    popularFor: "Green space, heritage buildings, jogging tracks, nature walks",
    localCuisine: [
      {
        name: "UB City Mall Food Court",
        description: "Various dining options in the nearby luxury mall",
        price: "₹500-1500 per person"
      },
      {
        name: "Street Food near MG Road",
        description: "Various street food vendors offering local snacks",
        price: "₹50-150 per dish"
      }
    ],
    nearbyHotels: [
      {
        id: "leela-palace-bengaluru",
        name: "The Leela Palace Bengaluru",
        rating: 4.8,
        price: "₹20,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "isckon-temple-bengaluru",
    name: "ISKCON Temple Bengaluru",
    description: "One of the largest ISKCON temples in the world, dedicated to Lord Krishna. The temple complex includes the main temple, Vedic cultural center, and beautiful gardens.",
    imageUrl: "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618623266812-a0cc5992df13?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618782434072-e577be1b2e0c?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "bengaluru",
    location: {
      address: "Hare Krishna Hill, Chord Road, Rajajinagar, Bengaluru, Karnataka 560010",
      coordinates: {
        lat: 12.9698,
        lng: 77.5370
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "it1",
        user: "user555",
        username: "Deepa L.",
        rating: 5,
        comment: "Peaceful temple with beautiful architecture. The evening aarti is very spiritual.",
        date: "2023-12-10"
      },
      {
        id: "it2",
        user: "user666",
        username: "Govind N.",
        rating: 4,
        comment: "Well-organized temple with good facilities. The prasadam is delicious.",
        date: "2023-11-05"
      }
    ],
    transportOptions: {
      car: "Located in Rajajinagar, accessible by car with parking facilities available.",
      bus: [
        {
          busNumber: "501",
          from: "Majestic",
          to: "ISKCON Temple",
          stops: ["Rajajinagar", "Chord Road"],
          frequency: "Every 25 minutes"
        }
      ]
    },
    timings: "4:15 AM - 1:00 PM, 4:00 PM - 8:20 PM",
    entryFee: "Free",
    bestTimeToVisit: "Morning or evening for aarti ceremonies",
    popularFor: "Krishna worship, spiritual atmosphere, Vedic culture, prasadam",
    localCuisine: [
      {
        name: "Akshaya Patra (Temple Kitchen)",
        description: "Pure vegetarian prasadam served at the temple",
        price: "₹100-200 per person"
      },
      {
        name: "Rajajinagar Restaurants",
        description: "Various South Indian restaurants in the area",
        price: "₹200-500 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "golden-landmark-bengaluru",
        name: "Golden Landmark",
        rating: 4.0,
        price: "₹6,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      }
    ]
  },
  {
    id: "bannerghatta-national-park",
    name: "Bannerghatta National Park",
    description: "A biological reserve established in 1974, home to a variety of wildlife including tigers, lions, elephants, and diverse bird species. Features a zoo, safari, and butterfly park.",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520034650770-75d4c9df6e9a?q=80&w=1200&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Bannerghatta, Bengaluru, Karnataka 560083",
      coordinates: {
        lat: 12.7987,
        lng: 77.5773
      }
    },
    rating: 4.3,
    reviews: [
      {
        id: "bnp1",
        user: "user777",
        username: "Arjun S.",
        rating: 4,
        comment: "Great wildlife experience. The safari is exciting and kids love the butterfly park.",
        date: "2023-10-15"
      },
      {
        id: "bnp2",
        user: "user888",
        username: "Suma K.",
        rating: 4,
        comment: "Well-maintained park with diverse wildlife. Plan to spend a full day here.",
        date: "2023-09-20"
      }
    ],
    transportOptions: {
      car: "Located 22 km from city center, best reached by car or taxi.",
      bus: [
        {
          busNumber: "365",
          from: "Majestic",
          to: "Bannerghatta",
          stops: ["JP Nagar", "Bannerghatta Road"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "9:30 AM - 5:00 PM (Closed on Tuesdays)",
    entryFee: "₹80 for zoo, ₹300 for safari (additional charges for different sections)",
    bestTimeToVisit: "October to March",
    popularFor: "Wildlife safari, zoo, butterfly park, nature trails",
    localCuisine: [
      {
        name: "Park Cafeteria",
        description: "Basic vegetarian meals and snacks available inside the park",
        price: "₹100-250 per person"
      },
      {
        name: "Bannerghatta Road Restaurants",
        description: "Various restaurants along the route to the park",
        price: "₹300-600 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "royal-orchid-bengaluru",
        name: "Royal Orchid Central",
        rating: 4.2,
        price: "₹7,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "15 km"
      }
    ]
  }
];
