import { Attraction } from "@/types";

export const mumbaiAttractions: Attraction[] = [
  // TOURIST PLACES
  {
    id: "mumbai-gateway-of-india",
    name: "Gateway of India",
    description: "The Gateway of India is an arch monument built during the 20th century to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911. It overlooks the Arabian Sea and is a popular gathering spot for locals and tourists alike.",
    imageUrl: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566130985099-30039fd9b341?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598434192043-71111c1b3f7f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9220,
        lng: 72.8347
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "rev1",
        user: "MumbaiLocal",
        username: "Raj Sharma",
        rating: 5,
        comment: "Iconic structure and a must-visit place in Mumbai. Beautiful at night when lit up!",
        date: "2023-11-15"
      },
      {
        id: "rev2",
        user: "TravelExplorer",
        username: "Priya Malhotra",
        rating: 4,
        comment: "Very crowded but worth visiting. Take a boat ride from here to see the Mumbai skyline.",
        date: "2023-12-20"
      }
    ],
    transportOptions: {
      car: "Can reach by taxi or private vehicle. Limited parking nearby.",
      bus: [
        {
          busNumber: "Route 123",
          from: "CST Station",
          to: "Colaba",
          stops: ["CST", "Churchgate", "Colaba"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "24 hours, best visited in morning or evening",
    entryFee: "Free",
    bestTimeToVisit: "November to March",
    popularFor: "Architecture, boat rides, photography",
    localCuisine: [
      {
        name: "Leopold Cafe",
        description: "Historic cafe serving multicuisine food, famous after being mentioned in the book 'Shantaram'",
        price: "₹800-1200 for two"
      },
      {
        name: "Bademiya",
        description: "Famous street food spot known for kebabs and rolls, just a short walk from Gateway",
        price: "₹300-500 for two"
      },
      {
        name: "Cafe Mondegar",
        description: "Popular cafe with interesting wall art and good food",
        price: "₹700-1000 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Taj Mahal Palace",
        rating: 4.8,
        price: "₹20,000+ per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "0.1 km"
      },
      {
        id: "h2",
        name: "Hotel Sea Palace",
        rating: 4.2,
        price: "₹5,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "0.5 km"
      }
    ]
  },
  {
    id: "mumbai-marine-drive",
    name: "Marine Drive",
    description: "Marine Drive is a 3.6-kilometer-long boulevard in South Mumbai that stretches from Nariman Point to Babulnath and is also referred to as the 'Queen's Necklace' because of its stunning nighttime view when the street lights resemble a string of pearls in a necklace.",
    imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1614629592372-0f270f6c1ded?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Netaji Subhash Chandra Bose Road, Mumbai, Maharashtra 400004",
      coordinates: {
        lat: 18.9448,
        lng: 72.8224
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "rev1",
        user: "SunsetLover",
        username: "Akash Patel",
        rating: 5,
        comment: "Perfect place to unwind after a busy day. The sunset views are magical!",
        date: "2023-10-18"
      },
      {
        id: "rev2",
        user: "MumbaiVisitor",
        username: "Sanjana Khanna",
        rating: 4,
        comment: "Beautiful stretch to walk or just sit and enjoy the sea breeze. Gets crowded in evenings but the atmosphere is vibrant.",
        date: "2024-01-05"
      }
    ],
    transportOptions: {
      car: "Easily accessible by taxi or personal vehicle. Street parking available.",
      bus: [
        {
          busNumber: "Route 106",
          from: "Churchgate",
          to: "Nariman Point",
          stops: ["Churchgate", "Marine Drive", "Nariman Point"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "Evening for sunset or night for city lights",
    popularFor: "Seaside promenade, sunset views, city skyline",
    localCuisine: [
      {
        name: "Chowpatty Beach Food Stalls",
        description: "Famous for bhel puri, pav bhaji, and other Mumbai street food",
        price: "₹100-300 for two"
      },
      {
        name: "Pizza By The Bay",
        description: "Restaurant with great sea views and Italian cuisine",
        price: "₹1,200-1,800 for two"
      },
      {
        name: "Cream Centre",
        description: "Popular vegetarian restaurant known for its nachos and channa bhatura",
        price: "₹800-1,200 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Trident Nariman Point",
        rating: 4.7,
        price: "₹15,000+ per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "1 km"
      },
      {
        id: "h2",
        name: "InterContinental Marine Drive",
        rating: 4.5,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "0.5 km"
      }
    ]
  },
  {
    id: "mumbai-elephanta-caves",
    name: "Elephanta Caves",
    description: "The Elephanta Caves are a UNESCO World Heritage Site and a collection of cave temples predominantly dedicated to Lord Shiva. Located on Elephanta Island in Mumbai Harbour, they contain beautiful rock-cut sculptures dating back to between the 5th and 8th centuries.",
    imageUrl: "https://images.unsplash.com/photo-1573797614415-99d236453e0e?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1573797614415-99d236453e0e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1665496969934-30b4fc110b34?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1574860438219-f73b59f3a85a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Elephanta Island, Mumbai Harbour, Maharashtra 400094",
      coordinates: {
        lat: 18.9633,
        lng: 72.9314
      }
    },
    rating: 4.4,
    reviews: [
      {
        id: "rev1",
        user: "HistoryBuff",
        username: "Arun Mehta",
        rating: 5,
        comment: "Fascinating ancient caves with impressive stone sculptures. The boat ride to the island adds to the experience!",
        date: "2023-09-25"
      },
      {
        id: "rev2",
        user: "ArtLover",
        username: "Meera Das",
        rating: 4,
        comment: "Beautiful sculptures but be prepared to climb many steps. The main Shiva statue is impressive.",
        date: "2023-12-12"
      }
    ],
    transportOptions: {
      car: "Take a ferry from Gateway of India, no direct car access to the island.",
      bus: [
        {
          busNumber: "Ferry Service",
          from: "Gateway of India",
          to: "Elephanta Island",
          stops: ["Direct boat"],
          frequency: "Every 30 minutes (first ferry at 9 AM, last return at 5:30 PM)"
        }
      ]
    },
    timings: "9:30 AM to 5:30 PM (Closed on Mondays)",
    entryFee: "₹40 for Indians, ₹600 for foreigners (plus ferry charges)",
    bestTimeToVisit: "November to March",
    popularFor: "Ancient rock-cut temples, stone sculptures, island boat trip",
    localCuisine: [
      {
        name: "Island Food Stalls",
        description: "Small eateries and stalls on the walking path to the caves",
        price: "₹100-200 for snacks"
      },
      {
        name: "MTDC Restaurant",
        description: "Basic restaurant offering refreshments and simple meals",
        price: "₹300-500 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Taj Mahal Palace",
        rating: 4.8,
        price: "₹20,000+ per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "Ferry ride away"
      },
      {
        id: "h2",
        name: "The Oberoi Mumbai",
        rating: 4.7,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "Ferry ride away"
      }
    ]
  },
  {
    id: "mumbai-chhatrapati-shivaji-terminus",
    name: "Chhatrapati Shivaji Terminus",
    description: "Chhatrapati Shivaji Terminus (CST), formerly Victoria Terminus, is a UNESCO World Heritage Site and historic railway station in Mumbai. Built in 1887, it's a prime example of Victorian Gothic Revival architecture blended with traditional Indian motifs, featuring turrets, pointed arches, and a high dome.",
    imageUrl: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598434192043-71111c1b3f7f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Chhatrapati Shivaji Terminus Area, Fort, Mumbai, Maharashtra 400001",
      coordinates: {
        lat: 18.9403,
        lng: 72.8353
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "rev1",
        user: "ArchitectureExplorer",
        username: "Rahul Khanna",
        rating: 5,
        comment: "Amazing architecture that combines Victorian Gothic with Indian elements. Best viewed at night when fully lit up.",
        date: "2023-11-05"
      },
      {
        id: "rev2",
        user: "MumbaiTraveler",
        username: "Anita Singh",
        rating: 4,
        comment: "A beautiful piece of history still functioning as a busy railway station. The details on the building are incredible.",
        date: "2024-01-15"
      }
    ],
    transportOptions: {
      car: "Central location accessible by taxi. Limited parking.",
      bus: [
        {
          busNumber: "Multiple Routes",
          from: "Various parts of Mumbai",
          to: "CST",
          stops: ["Multiple stops"],
          frequency: "Every 5-10 minutes"
        }
      ]
    },
    timings: "24 hours (heritage gallery open 3 PM to 5 PM, closed on Sundays)",
    entryFee: "Free (heritage gallery: ₹100)",
    bestTimeToVisit: "Early morning or late evening to avoid crowds",
    popularFor: "Victorian Gothic architecture, heritage site, photography",
    localCuisine: [
      {
        name: "Pancham Puriwala",
        description: "Over 150-year-old eatery famous for puris and North Indian food",
        price: "₹200-400 for two"
      },
      {
        name: "Yazdani Bakery",
        description: "Historic Irani cafe known for bun maska and chai",
        price: "₹100-200 for two"
      },
      {
        name: "Khyber",
        description: "Upscale North Indian restaurant near CST",
        price: "₹2,000-3,000 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Residency Hotel Fort",
        rating: 4.3,
        price: "₹5,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "0.5 km"
      },
      {
        id: "h2",
        name: "Hotel Marine Plaza",
        rating: 4.4,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "mumbai-haji-ali-dargah",
    name: "Haji Ali Dargah",
    description: "Haji Ali Dargah is one of Mumbai's most iconic landmarks, a mosque and tomb located on a small islet off the coast of Worli. The structure, which houses the tomb of Sayed Peer Haji Ali Shah Bukhari, was built in 1431 and is only accessible via a narrow causeway during low tide.",
    imageUrl: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1599030443998-9495e1243af9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598434192043-71111c1b3f7f?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "mumbai",
    location: {
      address: "Dargah Road, Worli, Mumbai, Maharashtra 400026",
      coordinates: {
        lat: 18.9827,
        lng: 72.8090
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "rev1",
        user: "SpiritualTraveler",
        username: "Faisal Ahmed",
        rating: 5,
        comment: "A spiritual experience walking along the causeway to reach this beautiful dargah. The architecture and setting are unique.",
        date: "2023-10-10"
      },
      {
        id: "rev2",
        user: "MumbaiExplorer",
        username: "Neha Verma",
        rating: 4,
        comment: "Beautiful religious site with amazing views of the Arabian Sea. Be aware of tide timings before planning your visit.",
        date: "2023-12-28"
      }
    ],
    transportOptions: {
      car: "Accessible by taxi, limited parking nearby.",
      bus: [
        {
          busNumber: "Route 83",
          from: "Churchgate",
          to: "Worli",
          stops: ["Churchgate", "Marine Drive", "Haji Ali"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "5:30 AM to 10:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "During low tide, preferably weekday mornings",
    popularFor: "Islamic architecture, spiritual significance, ocean views",
    localCuisine: [
      {
        name: "Haji Ali Juice Center",
        description: "Famous for fresh fruit juices and milkshakes",
        price: "₹150-300 for two"
      },
      {
        name: "Cafe Noorani",
        description: "Popular for Mughlai and Chinese cuisine",
        price: "₹600-900 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The St. Regis Mumbai",
        rating: 4.7,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "h2",
        name: "Four Seasons Hotel Mumbai",
        rating: 4.6,
        price: "₹16,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      }
    ]
  },
  
  // TEMPLES CATEGORY
  {
    id: "mumbai-siddhivinayak-temple",
    name: "Siddhivinayak Temple",
    description: "Shree Siddhivinayak Ganapati Mandir is one of the most famous and richest Hindu temples in Mumbai, dedicated to Lord Ganesha. Built in 1801, it attracts thousands of devotees daily, including celebrities and politicians who seek blessings before starting new ventures.",
    imageUrl: "https://images.unsplash.com/photo-1566130985099-30039fd9b341?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566130985099-30039fd9b341?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589462146720-44a04004338e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "mumbai",
    location: {
      address: "SK Bole Marg, Prabhadevi, Mumbai, Maharashtra 400028",
      coordinates: {
        lat: 19.0170,
        lng: 72.8300
      }
    },
    rating: 4.8,
    reviews: [
      {
        id: "rev1",
        user: "DevoteeMumbai",
        username: "Suresh Joshi",
        rating: 5,
        comment: "One of the most spiritually powerful temples in Mumbai. Try to visit early morning to avoid long queues.",
        date: "2023-09-15"
      },
      {
        id: "rev2",
        user: "GaneshBhakt",
        username: "Aarti Patel",
        rating: 5,
        comment: "Beautiful temple with strong spiritual energy. The gold-plated inner sanctum is divine!",
        date: "2023-11-22"
      }
    ],
    transportOptions: {
      car: "Accessible by taxi but limited parking. Consider using public transport.",
      bus: [
        {
          busNumber: "Route 340",
          from: "Dadar Station",
          to: "Prabhadevi",
          stops: ["Dadar", "Prabhadevi"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    timings: "5:30 AM to 10:00 PM (Open all days)",
    entryFee: "Free (VIP darshan available for a fee)",
    bestTimeToVisit: "Weekday mornings, avoid Tuesdays (most crowded)",
    popularFor: "Religious importance, Ganesha worship, architecture",
    localCuisine: [
      {
        name: "Temple Prasad",
        description: "Sweet offering distributed to devotees",
        price: "Free with darshan"
      },
      {
        name: "Cafe Mysore",
        description: "South Indian restaurant near the temple",
        price: "₹300-500 for two"
      },
      {
        name: "Shiv Sagar",
        description: "Vegetarian restaurant serving South and North Indian cuisine",
        price: "₹500-700 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Westin Mumbai Garden City",
        rating: 4.6,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "h2",
        name: "ITC Grand Central",
        rating: 4.5,
        price: "₹10,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      }
    ]
  },
  {
    id: "mumbai-mahalakshmi-temple",
    name: "Mahalakshmi Temple",
    description: "The Mahalakshmi Temple is one of Mumbai's oldest and most sacred temples, dedicated to Goddess Mahalakshmi, the goddess of wealth and prosperity. Built in 1831, the temple sits on a promontory overlooking the Arabian Sea and houses images of the goddesses Mahalakshmi, Mahakali, and Mahasaraswati.",
    imageUrl: "https://images.unsplash.com/photo-1589462146720-44a04004338e?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589462146720-44a04004338e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566130985099-30039fd9b341?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "mumbai",
    location: {
      address: "Bhulabhai Desai Road, Mahalakshmi, Mumbai, Maharashtra 400026",
      coordinates: {
        lat: 18.9773,
        lng: 72.8093
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "rev1",
        user: "DeviBhakt",
        username: "Shikha Nair",
        rating: 5,
        comment: "Beautiful temple with great spiritual energy. The sea view adds to the divine experience.",
        date: "2023-10-08"
      },
      {
        id: "rev2",
        user: "MumbaiSpiritual",
        username: "Prakash Iyer",
        rating: 4,
        comment: "One of Mumbai's most revered temples. Gets very crowded during Navratri festival.",
        date: "2023-12-15"
      }
    ],
    transportOptions: {
      car: "Accessible by taxi, limited street parking available.",
      bus: [
        {
          busNumber: "Route 125",
          from: "Churchgate",
          to: "Mahalakshmi",
          stops: ["Churchgate", "Peddar Road", "Mahalakshmi"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "6:00 AM to 10:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "Early mornings or weekdays, especially during Navratri",
    popularFor: "Goddess worship, sea view, religious festivals",
    localCuisine: [
      {
        name: "Temple Prasad",
        description: "Sweet offering distributed to devotees",
        price: "Free with darshan"
      },
      {
        name: "Cafe Mysore",
        description: "South Indian restaurant nearby",
        price: "₹300-500 for two"
      },
      {
        name: "Swati Snacks",
        description: "Popular for Gujarati and Maharashtra snacks",
        price: "₹500-700 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The St. Regis Mumbai",
        rating: 4.7,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "h2",
        name: "The Taj Mahal Palace",
        rating: 4.8,
        price: "₹20,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      }
    ]
  },
  {
    id: "mumbai-iskcon-temple",
    name: "ISKCON Temple",
    description: "The ISKCON Temple in Juhu, officially known as Sri Sri Radha Rasabihari Temple, is one of Mumbai's most visited temples. Dedicated to Lord Krishna, it was established by Srila Prabhupada in 1978 and features stunning marble architecture, beautiful deities, and serene gardens.",
    imageUrl: "https://images.unsplash.com/photo-1589462146720-44a04004338e?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589462146720-44a04004338e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566130985099-30039fd9b341?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "mumbai",
    location: {
      address: "Hare Krishna Land, Juhu, Mumbai, Maharashtra 400049",
      coordinates: {
        lat: 19.0836,
        lng: 72.8309
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "rev1",
        user: "KrishnaDevotee",
        username: "Meena Sharma",
        rating: 5,
        comment: "Beautiful temple with serene ambiance. The prasadam is delicious and the aarti ceremony is spiritual.",
        date: "2023-12-12"
      },
      {
        id: "rev2",
        user: "MumbaiVisitor",
        username: "Rajiv Kumar",
        rating: 4,
        comment: "Well-maintained temple with beautiful architecture. The garden area is peaceful for meditation.",
        date: "2024-01-05"
      }
    ],
    transportOptions: {
      car: "Located in Juhu, accessible by taxi or car. Parking available.",
      bus: [
        {
          busNumber: "Route 249",
          from: "Bandra Station",
          to: "Juhu",
          stops: ["Bandra", "Santacruz", "Juhu"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "4:30 AM to 9:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "Early morning for peaceful experience, evening for aarti ceremony",
    popularFor: "Krishna worship, spiritual lectures, prasadam meals",
    localCuisine: [
      {
        name: "Govinda's Restaurant",
        description: "Pure vegetarian restaurant inside temple premises serving sattvic food",
        price: "₹300-500 per person"
      },
      {
        name: "Juhu Beach Food Stalls",
        description: "Famous for Mumbai street food including pav bhaji and bhel puri",
        price: "₹100-200 per item"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "JW Marriott Mumbai Juhu",
        rating: 4.7,
        price: "₹17,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1542293787-a9aeafb7add1?q=80&w=800&auto=format&fit=crop",
        distance: "1 km"
      },
      {
        id: "h2",
        name: "Sun-n-Sand Hotel",
        rating: 4.3,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        distance: "0.7 km"
      }
    ]
  }
];
