import { Attraction } from "@/types";

export const bengaluruAttractions: Attraction[] = [
  // TOURIST PLACES CATEGORY
  {
    id: "bengaluru-lalbagh",
    name: "Lalbagh Botanical Garden",
    description: "Lalbagh Botanical Garden is a well-known botanical garden in Bengaluru. It has a famous glass house which hosts an annual flower show. Lalbagh houses India's largest collection of tropical plants, has a lake, and is home to several species of birds.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585086779398-2696de08de68?q=80&w=800&auto=format&fit=crop"
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
    rating: 4.6,
    reviews: [
      {
        id: "r1",
        user: "GardenLover",
        username: "Aishwarya Rao",
        rating: 5,
        comment: "Beautiful botanical garden with a stunning glass house. The collection of plants is impressive!",
        date: "2023-11-15"
      },
      {
        id: "r2",
        user: "NatureExplorer",
        username: "Karthik Sharma",
        rating: 4,
        comment: "Peaceful place to spend your morning. The lake adds to the charm of this historical garden.",
        date: "2023-12-20"
      }
    ],
    transportOptions: {
      car: "Easily accessible by car or taxi. Dedicated parking available.",
      bus: [
        {
          busNumber: "Route 27",
          from: "Majestic Bus Stand",
          to: "Lalbagh Main Gate",
          stops: ["K.R. Market", "Double Road", "Lalbagh West Gate"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "6:00 AM to 7:00 PM (Open all days)",
    entryFee: "₹20 for adults, ₹10 for children",
    bestTimeToVisit: "Early morning or evening, especially during the flower shows in January and August",
    popularFor: "Botanical collections, glasshouse, flower shows, lake, walking trails",
    localCuisine: [
      {
        name: "MTR",
        description: "Iconic South Indian restaurant serving authentic Karnataka cuisine",
        price: "₹300-500 for two"
      },
      {
        name: "Mavalli Tiffin Room",
        description: "Famous for their dosas and filter coffee",
        price: "₹200-400 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Taj Westend",
        rating: 4.7,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "h2",
        name: "The Park Bangalore",
        rating: 4.3,
        price: "₹7,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "bengaluru-cubbon-park",
    name: "Cubbon Park",
    description: "Cubbon Park is a landmark 'lung' area of Bengaluru city, spread over 300 acres. Created in 1870, it has a rich recorded history and contains beautiful stone buildings, statues and an abundant flora and fauna. The park provides a serene environment in the heart of the city.",
    imageUrl: "https://images.unsplash.com/photo-1566131807516-e8c5aaee0e4a?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566131807516-e8c5aaee0e4a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578168369329-d7a03a4226b1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "MG Road, Bengaluru, Karnataka 560001",
      coordinates: {
        lat: 12.9766,
        lng: 77.5993
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        user: "MorningJogger",
        username: "Rohan Patel",
        rating: 5,
        comment: "Perfect for morning walks and jogging. The air is fresh and the surroundings are beautiful!",
        date: "2023-10-10"
      },
      {
        id: "r2",
        user: "WeekendVisitor",
        username: "Sneha Verma",
        rating: 4,
        comment: "Great place to relax on weekends. The historic buildings within the park add to its charm.",
        date: "2024-01-05"
      }
    ],
    transportOptions: {
      car: "Central location with street parking available nearby.",
      bus: [
        {
          busNumber: "Route 140",
          from: "Shivajinagar",
          to: "Cubbon Park",
          stops: ["Commercial Street", "MG Road", "High Court"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "5:00 AM to 8:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or late afternoon",
    popularFor: "Walking trails, heritage buildings, bandstand, children's play area",
    localCuisine: [
      {
        name: "Koshy's",
        description: "Iconic cafe near Cubbon Park known for its colonial ambiance and continental breakfast",
        price: "₹400-600 for two"
      },
      {
        name: "The Only Place",
        description: "Popular steakhouse and continental restaurant",
        price: "₹1,000-1,500 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Oberoi Bengaluru",
        rating: 4.8,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "1.5 km"
      },
      {
        id: "h2",
        name: "Taj MG Road",
        rating: 4.6,
        price: "₹10,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.8 km"
      }
    ]
  },
  {
    id: "bengaluru-bangalore-palace",
    name: "Bangalore Palace",
    description: "Bangalore Palace is a royal palace built in 1887, inspired by England's Windsor Castle. It showcases Tudor-style architecture with fortified towers, arches, and green lawns. The palace interior is decorated with elegant wood carvings, paintings, and regal furniture.",
    imageUrl: "https://images.unsplash.com/photo-1600073956867-529b2d4b2a97?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600073956867-529b2d4b2a97?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587826616038-dfaf72ae4b7f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Palace Road, Vasanth Nagar, Bengaluru, Karnataka 560052",
      coordinates: {
        lat: 12.9985,
        lng: 77.5920
      }
    },
    rating: 4.2,
    reviews: [
      {
        id: "r1",
        user: "HistoryBuff",
        username: "Vikram Rao",
        rating: 5,
        comment: "Amazing palace with great historical significance. The audio guide is worth taking!",
        date: "2023-12-15"
      },
      {
        id: "r2",
        user: "ArchitectureFan",
        username: "Nandini Krishnan",
        rating: 4,
        comment: "Beautiful Tudor-style architecture. The wood carvings inside are impressive.",
        date: "2024-01-20"
      }
    ],
    transportOptions: {
      car: "Drive-in access with paid parking available.",
      bus: [
        {
          busNumber: "Route 201",
          from: "Majestic",
          to: "Palace Grounds",
          stops: ["Anand Rao Circle", "Mekhri Circle", "Palace Entrance"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "10:00 AM to 5:30 PM (Closed on Mondays)",
    entryFee: "₹230 for Indians, ₹460 for foreigners (includes audio guide)",
    bestTimeToVisit: "Weekday mornings to avoid crowds",
    popularFor: "Tudor architecture, royal collections, audio tours, courtyard",
    localCuisine: [
      {
        name: "The Kings Court",
        description: "Restaurant near the palace serving North Indian cuisine",
        price: "₹800-1,200 for two"
      },
      {
        name: "Maiyas",
        description: "Popular vegetarian restaurant serving South Indian delicacies",
        price: "₹400-700 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "ITC Windsor",
        rating: 4.7,
        price: "₹12,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "h2",
        name: "Taj West End",
        rating: 4.8,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      }
    ]
  },
  {
    id: "bengaluru-wonderla",
    name: "Wonderla Amusement Park",
    description: "Wonderla is one of India's largest amusement parks featuring over 60 rides, water slides, and attractions. It offers a mix of high-thrill rides, kiddie rides, and a large water park section, making it perfect for family outings and adventure seekers.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534431310533-6c4248128fe3?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "28th Km, Mysore Road, Bengaluru, Karnataka 562109",
      coordinates: {
        lat: 12.8340,
        lng: 77.4001
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        user: "ThrillerSeeker",
        username: "Rahul Mehta",
        rating: 5,
        comment: "Best amusement park around Bangalore! The water rides are amazing and well-maintained.",
        date: "2023-10-30"
      },
      {
        id: "r2",
        user: "FamilyTraveler",
        username: "Priya Desai",
        rating: 4,
        comment: "Great place for kids and adults alike. Plenty of rides to keep you engaged all day.",
        date: "2023-12-05"
      }
    ],
    transportOptions: {
      car: "Best reached by car or taxi. Large parking area available.",
      bus: [
        {
          busNumber: "Wonderla Shuttle",
          from: "Satellite Bus Stand",
          to: "Wonderla",
          stops: ["Direct Bus"],
          frequency: "Hourly from 9 AM to 2 PM"
        }
      ]
    },
    timings: "11:00 AM to 6:00 PM (Weekdays), 11:00 AM to 7:00 PM (Weekends)",
    entryFee: "₹1,300 for adults, ₹1,000 for children (varies by season)",
    bestTimeToVisit: "Weekdays to avoid crowds, November to February for pleasant weather",
    popularFor: "Water rides, dry rides, wave pools, rain disco, musical fountain",
    localCuisine: [
      {
        name: "Red Ice",
        description: "In-park restaurant serving multi-cuisine meals",
        price: "₹400-700 for two"
      },
      {
        name: "Chillout",
        description: "Fast food stall with snacks and beverages",
        price: "₹250-400 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Wonderla Resort",
        rating: 4.4,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "0.1 km"
      },
      {
        id: "h2",
        name: "Royal Orchid Suites",
        rating: 4.2,
        price: "₹6,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "5 km"
      }
    ]
  },
  {
    id: "bengaluru-innovative-film-city",
    name: "Innovative Film City",
    description: "Innovative Film City is an entertainment complex featuring multiple attractions including a wax museum, haunted mansion, dinosaur park, mirror maze, and miniature city. It offers various themed experiences and activities for visitors of all ages.",
    imageUrl: "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1575546591285-8303657ca865?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "bengaluru",
    location: {
      address: "Off Bangalore-Mysore Highway, Bengaluru, Karnataka 562123",
      coordinates: {
        lat: 12.7947,
        lng: 77.3989
      }
    },
    rating: 3.9,
    reviews: [
      {
        id: "r1",
        user: "FamilyFun",
        username: "Sanjay Kumar",
        rating: 4,
        comment: "Great place for one-day family outing. The kids loved the dinosaur park and cartoon city.",
        date: "2023-11-15"
      },
      {
        id: "r2",
        user: "WeekendVisit",
        username: "Anjali Gupta",
        rating: 3,
        comment: "Some attractions are good but maintenance could be better. The wax museum is worth a visit.",
        date: "2024-01-10"
      }
    ],
    transportOptions: {
      car: "Best accessible by car or taxi, approximately 40 km from city center.",
      bus: [
        {
          busNumber: "KSRTC Buses",
          from: "Majestic Bus Stand",
          to: "Bidadi",
          stops: ["Multiple stops"],
          frequency: "Every 30 minutes (plus 3 km local transport required)"
        }
      ]
    },
    timings: "10:00 AM to 6:30 PM (Open all days)",
    entryFee: "₹649 for adults, ₹549 for children (basic package)",
    bestTimeToVisit: "Weekdays, September to February",
    popularFor: "Wax museum, haunted mansion, mini golf, cartoon city, indoor games",
    localCuisine: [
      {
        name: "Angana Restaurant",
        description: "In-house restaurant serving North and South Indian cuisine",
        price: "₹500-800 for two"
      },
      {
        name: "Food Court",
        description: "Multiple food stalls offering various cuisines",
        price: "₹300-500 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Goldfinch Retreat",
        rating: 4.1,
        price: "₹6,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "8 km"
      },
      {
        id: "h2",
        name: "The Golden Palms Hotel & Spa",
        rating: 4.3,
        price: "₹8,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "12 km"
      }
    ]
  },
  
  // TEMPLE CATEGORY
  {
    id: "bengaluru-iskcon-temple",
    name: "ISKCON Temple Bangalore",
    description: "ISKCON Temple Bangalore is one of the largest Krishna temples in the world. Built in a blend of modern and traditional styles, the temple complex includes shrines, a multimedia theater, Vedic museum, and gardens. It attracts devotees and tourists alike with its spiritual ambiance and architectural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1605169786162-fa3df8c3c163?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1605169786162-fa3df8c3c163?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1626195838586-a916deb298ef?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "bengaluru",
    location: {
      address: "Hare Krishna Hill, Chord Road, Rajajinagar, Bengaluru, Karnataka 560010",
      coordinates: {
        lat: 12.9850,
        lng: 77.5510
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "r1",
        user: "SpiritualSeeker",
        username: "Ananya Reddy",
        rating: 5,
        comment: "Beautiful temple with serene atmosphere. The evening aarti is soul-stirring.",
        date: "2023-10-15"
      },
      {
        id: "r2",
        user: "PeacefulPilgrim",
        username: "Venkat Iyer",
        rating: 4,
        comment: "Well-maintained temple complex. The prasadam is delicious and view from the hill is spectacular.",
        date: "2023-12-22"
      }
    ],
    transportOptions: {
      car: "Easily accessible by car with parking facilities available.",
      bus: [
        {
          busNumber: "Route 91",
          from: "Majestic",
          to: "Iskcon Temple",
          stops: ["Navrang", "Rajajinagar", "ISKCON"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "4:15 AM to 8:30 PM (Open all days)",
    entryFee: "Free (donations welcome)",
    bestTimeToVisit: "Early mornings or evenings during aarti",
    popularFor: "Krishna worship, architecture, spiritual discourses, prasadam",
    localCuisine: [
      {
        name: "Higher Taste Restaurant",
        description: "Pure vegetarian restaurant serving sattvic food within the temple complex",
        price: "₹300-500 for two"
      },
      {
        name: "ISKCON Prasadam",
        description: "Sacred food offered to devotees",
        price: "₹50-100 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Sheraton Grand Bengaluru",
        rating: 4.5,
        price: "₹9,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      },
      {
        id: "h2",
        name: "The Lalit Ashok",
        rating: 4.3,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "6 km"
      }
    ]
  },
  {
    id: "bengaluru-bull-temple",
    name: "Bull Temple (Nandi Temple)",
    description: "The Bull Temple or Nandi Temple is a 16th-century Hindu temple dedicated to a sacred bull (Nandi), the mount of Lord Shiva. The temple houses one of the largest monolithic bull statues in the world, carved from a single granite boulder. Located on Bugle Hill, it's one of the oldest temples in Bangalore.",
    imageUrl: "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605169786162-fa3df8c3c163?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "bengaluru",
    location: {
      address: "Bull Temple Road, Basavanagudi, Bengaluru, Karnataka 560004",
      coordinates: {
        lat: 12.9420,
        lng: 77.5682
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        user: "HistoryLover",
        username: "Mahesh Iyengar",
        rating: 5,
        comment: "Historic temple with a magnificent Nandi statue. The craftsmanship is incredible for its time.",
        date: "2023-11-05"
      },
      {
        id: "r2",
        user: "LocalVisitor",
        username: "Lakshmi Prasad",
        rating: 4,
        comment: "Beautiful old temple with cultural significance. Don't miss the annual groundnut fair (Kadalekai Parishe).",
        date: "2024-01-12"
      }
    ],
    transportOptions: {
      car: "Accessible by car with street parking available.",
      bus: [
        {
          busNumber: "Route 36",
          from: "Majestic",
          to: "Basavanagudi",
          stops: ["Market", "Bull Temple Road"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "6:00 AM to 8:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "Mornings or during Shivaratri festival",
    popularFor: "Monolithic Nandi statue, ancient architecture, spiritual significance, annual groundnut fair",
    localCuisine: [
      {
        name: "Vidyarthi Bhavan",
        description: "Iconic South Indian restaurant known for its crispy dosas",
        price: "₹200-350 for two"
      },
      {
        name: "Mahalakshmi Tiffin Room",
        description: "Traditional breakfast place serving South Indian specialties",
        price: "₹150-300 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Springs Hotel & Spa",
        rating: 4.1,
        price: "₹5,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "h2",
        name: "Elanza Hotel",
        rating: 4.0,
        price: "₹4,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      }
    ]
  },
  {
    id: "bengaluru-gavi-gangadhareshwara-temple",
    name: "Gavi Gangadhareshwara Temple",
    description: "Gavi Gangadhareshwara Temple is an ancient cave temple dedicated to Lord Shiva. Built in the 9th century, it's known for its unique architecture that allows sunlight to fall directly on the Shivalinga during Makar Sankranti. The temple features monolithic discs, pillars, and chambers carved out of a single rock.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686767783-65fe91155868?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605169786162-fa3df8c3c163?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "bengaluru",
    location: {
      address: "Gavipuram Extension, Kempegowda Nagar, Bengaluru, Karnataka 560019",
      coordinates: {
        lat: 12.9411,
        lng: 77.5656
      }
    },
    rating: 4.4,
    reviews: [
      {
        id: "r1",
        user: "HistoryEnthusiast",
        username: "Radha Krishna",
        rating: 5,
        comment: "Amazing ancient cave temple with astronomical significance. The stone discs and the way sunlight enters the cave is fascinating.",
        date: "2023-10-20"
      },
      {
        id: "r2",
        user: "HeritageExplorer",
        username: "Sudhir Menon",
        rating: 4,
        comment: "Unique temple with historical importance. Try to visit during Makar Sankranti to witness the sunlight phenomenon.",
        date: "2023-12-15"
      }
    ],
    transportOptions: {
      car: "Accessible by car with limited street parking.",
      bus: [
        {
          busNumber: "Route 42",
          from: "Majestic",
          to: "Gavipuram",
          stops: ["K.R. Market", "Chamarajpet", "Gavipuram"],
          frequency: "Every 25 minutes"
        }
      ]
    },
    timings: "6:00 AM to 12:30 PM, 5:30 PM to 8:30 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "During Makar Sankranti (mid-January) to see the sunlight phenomenon",
    popularFor: "Cave architecture, astronomical alignment, ancient sculptures, religious ceremonies",
    localCuisine: [
      {
        name: "Donne Biryani House",
        description: "Popular for traditional Karnataka-style biryani served in palm leaf",
        price: "₹200-350 for two"
      },
      {
        name: "Sri Udupi Park",
        description: "Vegetarian restaurant serving South Indian dishes",
        price: "₹150-300 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Pai Viceroy",
        rating: 3.9,
        price: "₹3,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      },
      {
        id: "h2",
        name: "The Capitol Hotel",
        rating: 4.1,
        price: "₹4,200 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "5 km"
      }
    ]
  },
  
  // OTHER ATTRACTIONS CATEGORY
  {
    id: "bengaluru-vidhana-soudha",
    name: "Vidhana Soudha",
    description: "Vidhana Soudha is the seat of the state legislature of Karnataka. It is an imposing building, constructed in a style sometimes described as 'Neo-Dravidian', and incorporates elements of Indo-Saracenic and Dravidian styles. The building is illuminated on special occasions and is a popular landmark and tourist attraction.",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566131807516-e8c5aaee0e4a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop"
    ],
    category: "other",
    cityId: "bengaluru",
    location: {
      address: "Dr Ambedkar Veedhi, Bengaluru, Karnataka 560001",
      coordinates: {
        lat: 12.9796,
        lng: 77.5907
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        user: "ArchitectureFan",
        username: "Vivek Shankar",
        rating: 5,
        comment: "Magnificent building with impressive architecture. Beautiful when illuminated in the evenings.",
        date: "2023-11-10"
      },
      {
        id: "r2",
        user: "CityExplorer",
        username: "Renu Gupta",
        rating: 4,
        comment: "Important landmark in Bengaluru. Great for photography from outside, though internal access is restricted.",
        date: "2024-01-20"
      }
    ],
    transportOptions: {
      car: "Accessible by car. Street parking available nearby.",
      bus: [
        {
          busNumber: "Route 176",
          from: "Majestic",
          to: "Vidhana Soudha",
          stops: ["K.R. Circle", "Cubbon Park", "High Court"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "Outside view accessible 24/7 (Internal access restricted)",
    entryFee: "Free (for viewing from outside)",
    bestTimeToVisit: "Evenings when illuminated, Sundays for fewer crowds",
    popularFor: "Architecture, photography, historical importance, illumination",
    localCuisine: [
      {
        name: "Indian Coffee House",
        description: "Historic cafe serving South Indian coffee and snacks",
        price: "₹150-250 for two"
      },
      {
        name: "The Only Place",
        description: "Classic restaurant known for steaks and continental cuisine",
        price: "₹800-1,200 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Chancery Pavilion",
        rating: 4.3,
        price: "₹7,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "h2",
        name: "Taj West End",
        rating: 4.7,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "3.5 km"
      }
    ]
  },
  {
    id: "bengaluru-ulsoor-lake",
    name: "Ulsoor Lake",
    description: "Ulsoor Lake is one of the largest lakes in Bengaluru, spread over an area of 125 acres. Created by Kempe Gowda II, it features multiple islands and is a popular spot for boating and recreation. The lake area includes a walking path, children's park, and is maintained by the Bruhat Bengaluru Mahanagara Palike.",
    imageUrl: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566131807516-e8c5aaee0e4a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop"
    ],
    category: "other",
    cityId: "bengaluru",
    location: {
      address: "Ulsoor, Bengaluru, Karnataka 560008",
      coordinates: {
        lat: 12.9782,
        lng: 77.6218
      }
    },
    rating: 4.2,
    reviews: [
      {
        id: "r1",
        user: "MorningWalker",
        username: "Anjali Mathur",
        rating: 4,
        comment: "Beautiful lake for morning walks. The boating facility adds to the experience.",
        date: "2023-09-30"
      },
      {
        id: "r2",
        user: "WeekendVisitor",
        username: "Kiran Reddy",
        rating: 5,
        comment: "Serene lake in the heart of the city. Great place to relax and unwind.",
        date: "2023-12-18"
      }
    ],
    transportOptions: {
      car: "Easily accessible by car. Parking available nearby.",
      bus: [
        {
          busNumber: "Route 300",
          from: "MG Road",
          to: "Ulsoor",
          stops: ["Trinity Circle", "Ulsoor Lake"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "6:00 AM to 8:00 PM (Open all days)",
    entryFee: "Free (Boating charges extra)",
    bestTimeToVisit: "Early mornings or evenings",
    popularFor: "Boating, walking, picnics, bird watching",
    localCuisine: [
      {
        name: "Burma Burma",
        description: "Burmese restaurant offering vegetarian cuisine",
        price: "₹800-1,200 for two"
      },
      {
        name: "Chinita",
        description: "Mexican restaurant known for burritos and tacos",
        price: "₹600-900 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Leela Palace",
        rating: 4.8,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "h2",
        name: "Taj MG Road",
        rating: 4.6,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "bengaluru-bangalore-aquarium",
    name: "Bangalore Aquarium",
    description: "Bangalore Aquarium is the second-largest aquarium in India, located in Cubbon Park. It houses a variety of exotic and ornamental freshwater fish species. The aquarium is split into three floors with different sections showcasing various aquatic species in well-maintained tanks.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566131807516-e8c5aaee0e4a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "other",
    cityId: "bengaluru",
    location: {
      address: "Kasturba Road, Cubbon Park, Bengaluru, Karnataka 560001",
      coordinates: {
        lat: 12.9764,
        lng: 77.5929
      }
    },
    rating: 3.9,
    reviews: [
      {
        id: "r1",
        user: "FamilyDay",
        username: "Sameer Joshi",
        rating: 4,
        comment: "Good place to take kids. They enjoyed seeing different fish species.",
        date: "2023-10-25"
      },
      {
        id: "r2",
        user: "WeekendExplorer",
        username: "Preeti Singh",
        rating: 3,
        comment: "Small but interesting aquarium. Worth a quick visit when you're in Cubbon Park.",
        date: "2024-01-08"
      }
    ],
    transportOptions: {
      car: "Accessible by car. Parking available in Cubbon Park.",
      bus: [
        {
          busNumber: "Route 140",
          from: "Majestic",
          to: "Cubbon Park",
          stops: ["K.R. Circle", "Vidhana Soudha", "Cubbon Park"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "10:00 AM to 5:30 PM (Closed on Mondays and Second Tuesdays)",
    entryFee: "₹40 for adults, ₹20 for children",
    bestTimeToVisit: "Weekday afternoons for fewer crowds",
    popularFor: "Freshwater fish species, educational tours, family outings",
    localCuisine: [
      {
        name: "Koshy's",
        description: "Iconic cafe with colonial atmosphere serving continental and Indian cuisine",
        price: "₹500-700 for two"
      },
      {
        name: "Cubbon Pavilion",
        description: "Multi-cuisine restaurant with indoor and outdoor seating",
        price: "₹1,500-2,000 for two"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Oberoi",
        rating: 4.7,
        price: "₹16,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "1.5 km"
      },
      {
        id: "h2",
        name: "ITC Gardenia",
        rating: 4.6,
        price: "₹14,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      }
    ]
  }
];
