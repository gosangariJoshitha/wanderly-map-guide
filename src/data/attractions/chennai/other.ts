
import { Attraction } from "@/types";

export const chennaiOtherAttractions: Attraction[] = [
  {
    id: "elliot-beach",
    name: "Elliot's Beach (Besant Nagar Beach)",
    description: "A quieter alternative to Marina Beach, Elliot's Beach offers a more relaxed atmosphere with fewer crowds. Popular among locals for evening walks and picnics, the beach features clean sands and is known for its safety. The area is surrounded by upscale cafes, restaurants, and ice cream parlors, making it a favorite leisure spot for young Chennaiites.",
    imageUrl: "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "Open 24 hours (swimming not recommended)",
    entryFee: "Free",
    bestTimeToVisit: "Sunset and evenings",
    tips: [
      "Visit in the evening to enjoy the vibrant atmosphere and food stalls",
      "Check out the Karl Schmidt Memorial at the southern end of the beach",
      "Combine with a visit to the nearby Ashtalakshmi Temple"
    ]
  },
  {
    id: "cholamandal-artists-village",
    name: "Cholamandal Artists' Village",
    description: "India's largest self-supporting artists' commune, established in 1966. This unique cultural center showcases contemporary art and sculptures created by resident artists. The complex includes art galleries, open-air theaters, and artists' studios. Visitors can observe artists at work and purchase original paintings, sculptures, and handicrafts directly from the creators.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "9:30 AM - 6:30 PM",
    entryFee: "₹20",
    bestTimeToVisit: "Weekday mornings",
    tips: [
      "Allow at least 2 hours to fully explore the galleries and workshops",
      "Great place to purchase unique, authentic Indian art as souvenirs",
      "Check if any cultural performances are scheduled during your visit"
    ]
  },
  {
    id: "dakshina-chitra",
    name: "DakshinaChitra Museum",
    description: "An interactive living museum dedicated to preserving the art, architecture, lifestyles, and crafts of South India. The museum features traditional houses from different South Indian states that have been transported and reconstructed on site. Visitors can explore these authentic homes and witness artisans demonstrating traditional crafts like pottery, weaving, and bronze casting.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "10:00 AM - 6:00 PM (Closed on Tuesdays)",
    entryFee: "₹100 for Indians, ₹350 for foreigners",
    bestTimeToVisit: "Weekdays or during cultural festivals",
    tips: [
      "Check their calendar for special workshops and cultural performances",
      "Plan to spend at least half a day here",
      "Try hands-on activities like pottery or kolam drawing"
    ]
  },
  {
    id: "guindy-national-park",
    name: "Guindy National Park",
    description: "One of the smallest national parks in India but remarkably located within a metropolitan city. This protected area preserves the region's natural vegetation (tropical dry evergreen forest) and wildlife. Visitors can spot blackbucks, spotted deer, jackals, and various bird species. The park also includes a children's park, snake park, and mini zoo, making it educational and entertaining for families.",
    imageUrl: "https://images.unsplash.com/photo-1575364915083-cb9a0d4d8bf5?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "9:00 AM - 5:30 PM (Closed on Tuesdays)",
    entryFee: "₹30 for adults, ₹15 for children",
    bestTimeToVisit: "Early mornings for wildlife viewing",
    tips: [
      "Morning visits offer better chances of wildlife sightings",
      "Wear comfortable shoes and bring insect repellent",
      "The Children's Park section is great for younger visitors"
    ]
  },
  {
    id: "birla-planetarium",
    name: "Birla Planetarium",
    description: "One of the most modern planetariums in India, offering fascinating astronomical shows and exhibitions that explain the mysteries of the universe. The dome-shaped building houses a celestial theater where visitors can experience simulated night sky and astronomical phenomena. The complex also includes a science center with interactive exhibits on various scientific principles and discoveries.",
    imageUrl: "https://images.unsplash.com/photo-1518726068252-4f0d37a5c3e3?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "10:00 AM - 5:30 PM (Closed on Mondays)",
    entryFee: "₹40 for adults, ₹25 for children",
    bestTimeToVisit: "Weekday afternoons",
    tips: [
      "Check the show timings in advance and arrive 15 minutes early",
      "Shows are available in multiple languages (Tamil, English)",
      "Combine with a visit to the nearby Periyar Science and Technology Centre"
    ]
  }
];
