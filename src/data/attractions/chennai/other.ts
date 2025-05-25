import { Attraction } from "@/types";

export const chennaiOtherAttractions: Attraction[] = [
  {
    id: "elliot-beach",
    name: "Elliot's Beach (Besant Nagar Beach)",
    description: "A quieter alternative to Marina Beach, Elliot's Beach offers a more relaxed atmosphere with fewer crowds. Popular among locals for evening walks and picnics, the beach features clean sands and is known for its safety. The area is surrounded by upscale cafes, restaurants, and ice cream parlors, making it a favorite leisure spot for young Chennaiites.",
    imageUrl: "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Besant Nagar, Chennai, Tamil Nadu 600090",
      coordinates: {
        lat: 12.9988,
        lng: 80.2731
      }
    },
    category: "other",
    cityId: "chennai",
    rating: 4.5,
    timings: "Open 24 hours (swimming not recommended)",
    entryFee: "Free",
    bestTimeToVisit: "Sunset and evenings",
    transportOptions: {
      car: "Ample parking available along beachfront",
      bus: [
        {
          busNumber: "29C",
          from: "Adyar",
          to: "Besant Nagar",
          stops: ["Adyar Bus Terminal", "Indira Nagar", "Besant Nagar"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "cholamandal-artists-village",
    name: "Cholamandal Artists' Village",
    description: "India's largest self-supporting artists' commune, established in 1966. This unique cultural center showcases contemporary art and sculptures created by resident artists. The complex includes art galleries, open-air theaters, and artists' studios. Visitors can observe artists at work and purchase original paintings, sculptures, and handicrafts directly from the creators.",
    imageUrl: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083288073-40892c0860cf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Injambakkam, East Coast Road, Chennai, Tamil Nadu 600115",
      coordinates: {
        lat: 12.9316,
        lng: 80.2484
      }
    },
    category: "other",
    cityId: "chennai",
    rating: 4.3,
    timings: "9:30 AM - 6:30 PM",
    entryFee: "₹20",
    bestTimeToVisit: "Weekday mornings",
    transportOptions: {
      car: "Parking available inside premises",
      bus: [
        {
          busNumber: "109",
          from: "Adyar",
          to: "ECR",
          stops: ["Adyar", "Thiruvanmiyur", "Injambakkam"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "dakshina-chitra",
    name: "DakshinaChitra Museum",
    description: "An interactive living museum dedicated to preserving the art, architecture, lifestyles, and crafts of South India. The museum features traditional houses from different South Indian states that have been transported and reconstructed on site. Visitors can explore these authentic homes and witness artisans demonstrating traditional crafts like pottery, weaving, and bronze casting.",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577083288073-40892c0860cf?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "East Coast Road, Muttukadu, Chennai, Tamil Nadu 603112",
      coordinates: {
        lat: 12.8264,
        lng: 80.2376
      }
    },
    category: "other",
    cityId: "chennai",
    rating: 4.6,
    timings: "10:00 AM - 6:00 PM (Closed on Tuesdays)",
    entryFee: "₹100 for Indians, ₹350 for foreigners",
    bestTimeToVisit: "Weekdays or during cultural festivals",
    transportOptions: {
      car: "Large parking area available",
      bus: [
        {
          busNumber: "109A",
          from: "Thiruvanmiyur",
          to: "Muttukadu",
          stops: ["Thiruvanmiyur", "Neelankarai", "Muttukadu"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "guindy-national-park",
    name: "Guindy National Park",
    description: "One of the smallest national parks in India but remarkably located within a metropolitan city. This protected area preserves the region's natural vegetation (tropical dry evergreen forest) and wildlife. Visitors can spot blackbucks, spotted deer, jackals, and various bird species. The park also includes a children's park, snake park, and mini zoo, making it educational and entertaining for families.",
    imageUrl: "https://images.unsplash.com/photo-1575364915083-cb9a0d4d8bf5?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1575364915083-cb9a0d4d8bf5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553603227-2358aabe821e?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Guindy, Chennai, Tamil Nadu 600025",
      coordinates: {
        lat: 13.0066,
        lng: 80.2206
      }
    },
    category: "other",
    cityId: "chennai",
    rating: 4.2,
    timings: "9:00 AM - 5:30 PM (Closed on Tuesdays)",
    entryFee: "₹30 for adults, ₹15 for children",
    bestTimeToVisit: "Early mornings for wildlife viewing",
    transportOptions: {
      car: "Parking available at entrance",
      bus: [
        {
          busNumber: "18A",
          from: "T. Nagar",
          to: "Guindy",
          stops: ["T. Nagar", "Saidapet", "Guindy"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "birla-planetarium",
    name: "Birla Planetarium",
    description: "One of the most modern planetariums in India, offering fascinating astronomical shows and exhibitions that explain the mysteries of the universe. The dome-shaped building houses a celestial theater where visitors can experience simulated night sky and astronomical phenomena. The complex also includes a science center with interactive exhibits on various scientific principles and discoveries.",
    imageUrl: "https://images.unsplash.com/photo-1518726068252-4f0d37a5c3e3?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1518726068252-4f0d37a5c3e3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Gandhi Mandapam Road, Chennai, Tamil Nadu 600025",
      coordinates: {
        lat: 13.0112,
        lng: 80.2418
      }
    },
    category: "other",
    cityId: "chennai",
    rating: 4.4,
    timings: "10:00 AM - 5:30 PM (Closed on Mondays)",
    entryFee: "₹40 for adults, ₹25 for children",
    bestTimeToVisit: "Weekday afternoons",
    transportOptions: {
      car: "Parking available on premises",
      bus: [
        {
          busNumber: "23C",
          from: "Broadway",
          to: "Kotturpuram",
          stops: ["Broadway", "Anna Salai", "Gandhi Mandapam"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    reviews: []
  }
];
