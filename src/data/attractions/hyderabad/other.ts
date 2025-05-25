
import { Attraction } from "@/types";

export const otherAttractions: Attraction[] = [
  {
    id: "nizam-museum",
    name: "Nizam's Museum",
    cityId: "hyderabad",
    description: "This museum showcases the gifts and memorabilia received by the last Nizam of Hyderabad, Mir Osman Ali Khan. Highlights include a 1930s Rolls Royce, gold burnished wooden throne, and the world's largest wardrobe.",
    imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1200&auto=format&fit=crop", // Nizam's Museum exterior
      "https://images.unsplash.com/photo-1584037013349-8c598fc90da7?q=80&w=1200&auto=format&fit=crop", // Royal artifacts display
      "https://images.unsplash.com/photo-1584711725090-bf04ed6dd879?q=80&w=1200&auto=format&fit=crop", // Vintage cars collection
      "https://images.unsplash.com/photo-1565705732022-83642c809afc?q=80&w=1200&auto=format&fit=crop", // Historical treasures
      "https://images.unsplash.com/photo-1613727798351-1c890fd8b98c?q=80&w=1200&auto=format&fit=crop" // Museum interior halls
    ],
    rating: 4.2,
    category: "other",
    reviews: [
      {
        id: "r12",
        user: "u12",
        username: "HistoryBuff2",
        rating: 4,
        comment: "Fascinating collection of royal artifacts. The solid gold tiffin box is incredible!",
        date: "2023-03-10"
      }
    ],
    location: {
      address: "Purani Haveli, Hyderabad, Telangana 500002",
      coordinates: {
        lat: 17.3684,
        lng: 78.4842
      }
    },
    transportOptions: {
      car: "Located in the old city, accessible by car or auto-rickshaw.",
      bus: [
        {
          busNumber: "9",
          from: "Secunderabad",
          to: "Purani Haveli",
          stops: ["Koti", "Chaderghat"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹100 for Indians, ₹200 for foreigners",
    timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
    bestTimeToVisit: "October to March"
  },
  {
    id: "lumbini-park",
    name: "Lumbini Park",
    cityId: "hyderabad",
    description: "Named after Buddha's birthplace, this urban park offers musical fountain shows, laser shows, and boating facilities. Located near Hussain Sagar Lake, it's a perfect evening destination for families.",
    imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop", // Lumbini Park fountains
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop", // Park evening lights
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop", // Musical fountain show
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop", // Park walkways and gardens
      "https://images.unsplash.com/photo-1626931067455-bc3ed7f75b99?q=80&w=1200&auto=format&fit=crop" // Lake view from park
    ],
    rating: 4.1,
    category: "other",
    reviews: [
      {
        id: "r13",
        user: "u13",
        username: "FamilyTraveler",
        rating: 4,
        comment: "Great place for an evening out with kids. The laser show is entertaining.",
        date: "2023-05-22"
      }
    ],
    location: {
      address: "Tank Bund Rd, Hyderabad, Telangana 500004",
      coordinates: {
        lat: 17.4084,
        lng: 78.4729
      }
    },
    transportOptions: {
      car: "Located near Hussain Sagar Lake, easily accessible by car or auto.",
      bus: [
        {
          busNumber: "10",
          from: "Secunderabad",
          to: "Tank Bund",
          stops: ["Paradise", "Begumpet"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    entryFee: "₹10 for entry, ₹50 for laser show",
    timings: "9:00 AM - 9:00 PM",
    bestTimeToVisit: "October to February"
  },
  {
    id: "nehru-zoological-park",
    name: "Nehru Zoological Park",
    cityId: "hyderabad",
    description: "One of the largest zoos in India, it houses nearly 1,500 species of birds, animals, and reptiles in near-natural habitats. The zoo also features a natural history museum and a train ride through the premises.",
    imageUrl: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=1200&auto=format&fit=crop", // Zoo animals habitat
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=1200&auto=format&fit=crop", // Wildlife sanctuary areas
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?q=80&w=1200&auto=format&fit=crop", // Safari and animal enclosures
      "https://images.unsplash.com/photo-1520034650770-75d4c9df6e9a?q=80&w=1200&auto=format&fit=crop", // Zoo train and facilities
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop" // Nature trails and gardens
    ],
    rating: 4.3,
    category: "other",
    reviews: [
      {
        id: "r14",
        user: "u14",
        username: "WildlifeEnthusiast",
        rating: 4.5,
        comment: "Well-maintained zoo with a good variety of animals. The safari is worth trying.",
        date: "2023-02-25"
      }
    ],
    location: {
      address: "NH 7, Bahadurpura, Hyderabad, Telangana 500064",
      coordinates: {
        lat: 17.3375,
        lng: 78.4513
      }
    },
    transportOptions: {
      car: "Located about 15km from the city center, accessible by car or taxi.",
      bus: [
        {
          busNumber: "20",
          from: "Secunderabad",
          to: "Zoo Park",
          stops: ["Afzalgunj", "Bahadurpura"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "₹40 for adults, ₹20 for children",
    timings: "8:00 AM - 5:00 PM (Closed on Mondays)",
    bestTimeToVisit: "October to March"
  },
  {
    id: "shilparamam",
    name: "Shilparamam",
    cityId: "hyderabad",
    description: "This arts and crafts village showcases traditional handicrafts from different parts of India. With artificial waterfalls, rock formations, and an ethnic museum, it offers insights into rural Indian lifestyle.",
    imageUrl: "https://images.unsplash.com/photo-1558383385-c33cb4fbc2dc?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1558383385-c33cb4fbc2dc?q=80&w=1200&auto=format&fit=crop", // Shilparamam crafts village
      "https://images.unsplash.com/photo-1574279607937-1c3b9bf08b98?q=80&w=1200&auto=format&fit=crop", // Traditional handicrafts display
      "https://images.unsplash.com/photo-1600189020840-43537dc4f3a0?q=80&w=1200&auto=format&fit=crop", // Artisan workshops
      "https://images.unsplash.com/photo-1558383738-8e1da9a45d82?q=80&w=1200&auto=format&fit=crop", // Cultural performances
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop" // Village architecture and design
    ],
    rating: 4.4,
    category: "other",
    reviews: [
      {
        id: "r15",
        user: "u15",
        username: "CraftLover",
        rating: 4.5,
        comment: "Great place to buy authentic handicrafts and experience folk culture.",
        date: "2023-04-08"
      }
    ],
    location: {
      address: "Hi tech City, Madhapur, Hyderabad, Telangana 500081",
      coordinates: {
        lat: 17.4539,
        lng: 78.3824
      }
    },
    transportOptions: {
      car: "Located in Hi-Tech City, accessible by car or auto.",
      bus: [
        {
          busNumber: "127C",
          from: "Secunderabad",
          to: "Hi-Tech City",
          stops: ["Ameerpet", "Kukatpally"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹20 for adults, ₹10 for children",
    timings: "10:30 AM - 8:00 PM",
    bestTimeToVisit: "October to March"
  },
  {
    id: "kbr-national-park",
    name: "KBR National Park",
    cityId: "hyderabad",
    description: "Formerly the hunting grounds of the Nizams, this 400-acre urban jungle offers walking trails, jogging tracks, and opportunities to spot over 600 plant species and 140 bird species. A peaceful retreat in the bustling city.",
    imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop", // KBR Park nature trails
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop", // Forest walking paths
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop", // Wildlife and bird watching
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop", // Jogging tracks and fitness areas
      "https://images.unsplash.com/photo-1520034650770-75d4c9df6e9a?q=80&w=1200&auto=format&fit=crop" // Park landscapes and greenery
    ],
    rating: 4.5,
    category: "other",
    reviews: [
      {
        id: "r16",
        user: "u16",
        username: "NatureWalker",
        rating: 5,
        comment: "Perfect for morning walks and bird watching. A green oasis in the city.",
        date: "2023-06-30"
      }
    ],
    location: {
      address: "Jubilee Hills, Hyderabad, Telangana 500033",
      coordinates: {
        lat: 17.4229,
        lng: 78.4329
      }
    },
    transportOptions: {
      car: "Located in Jubilee Hills, easily accessible by car or auto.",
      bus: [
        {
          busNumber: "127JH",
          from: "Secunderabad",
          to: "Jubilee Hills",
          stops: ["Ameerpet", "Yousufguda"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    entryFee: "₹25 per person",
    timings: "5:30 AM - 10:00 AM, 4:00 PM - 6:30 PM (Closed on Mondays)",
    bestTimeToVisit: "October to February"
  }
];
