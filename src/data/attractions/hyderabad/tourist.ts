
import { Attraction } from "@/types";

export const touristAttractions: Attraction[] = [
  {
    id: "charminar",
    name: "Charminar",
    cityId: "hyderabad",
    description: "Built in 1591, this iconic monument is a symbol of Hyderabad with its four grand arches and minarets. The structure was built to commemorate the eradication of plague from the city and houses a mosque on its top floor.",
    imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=1200&auto=format&fit=crop", // Charminar main view
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop", // Charminar close-up architecture
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1200&auto=format&fit=crop", // Charminar evening view
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200&auto=format&fit=crop", // Charminar detail architecture
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop" // Charminar surrounding area
    ],
    rating: 4.7,
    category: "tourist",
    reviews: [
      {
        id: "r1",
        user: "u1",
        username: "TravelExplorer",
        rating: 5,
        comment: "A must-visit landmark in Hyderabad! The architecture is stunning and the surrounding market is vibrant.",
        date: "2023-02-15"
      },
      {
        id: "r2",
        user: "u2",
        username: "HistoryBuff",
        rating: 4.5,
        comment: "Incredible historical monument. The view from the top is worth the climb.",
        date: "2023-03-22"
      }
    ],
    location: {
      address: "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002",
      coordinates: {
        lat: 17.3616,
        lng: 78.4747
      }
    },
    transportOptions: {
      car: "Easily accessible by taxi or auto-rickshaw from any part of the city.",
      bus: [
        {
          busNumber: "5K",
          from: "Secunderabad",
          to: "Charminar",
          stops: ["Koti", "Abids", "Nampally", "Sultan Bazaar"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹25 for Indians, ₹300 for foreigners",
    timings: "9:00 AM - 5:30 PM (Closed on Fridays)",
    bestTimeToVisit: "October to March"
  },
  {
    id: "golconda-fort",
    name: "Golconda Fort",
    cityId: "hyderabad",
    description: "This majestic fort dating back to the 13th century features impressive acoustic effects where a hand clap at the entrance can be heard at the highest point. The fort was once home to the famous Kohinoor diamond.",
    imageUrl: "https://images.unsplash.com/photo-1590063603240-71d53e69dbc6?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1590063603240-71d53e69dbc6?q=80&w=1200&auto=format&fit=crop", // Golconda Fort main structure
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1200&auto=format&fit=crop", // Fort walls and architecture
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200&auto=format&fit=crop", // Fort entrance gate
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop", // Fort ruins and structure
      "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200&auto=format&fit=crop" // Fort interior architecture
    ],
    rating: 4.5,
    category: "tourist",
    reviews: [
      {
        id: "r3",
        user: "u3",
        username: "HistoryLover",
        rating: 5,
        comment: "One of the best preserved forts in India. The sound and light show is fantastic!",
        date: "2023-01-12"
      }
    ],
    location: {
      address: "Ibrahim Bagh, Hyderabad, Telangana 500008",
      coordinates: {
        lat: 17.3833,
        lng: 78.4011
      }
    },
    transportOptions: {
      car: "About 30 minutes from the city center by car or taxi.",
      bus: [
        {
          busNumber: "66",
          from: "Mehdipatnam",
          to: "Golconda Fort",
          stops: ["Tolichowki", "Langar Houz"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "₹20 for Indians, ₹200 for foreigners",
    timings: "8:00 AM - 5:30 PM",
    bestTimeToVisit: "November to February"
  },
  {
    id: "salar-jung-museum",
    name: "Salar Jung Museum",
    cityId: "hyderabad",
    description: "One of the three National Museums of India, it houses a unique collection of sculptures, paintings, carvings, and other artifacts from around the world, including the famous Veiled Rebecca sculpture.",
    imageUrl: "https://images.unsplash.com/photo-1613727798351-1c890fd8b98c?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1613727798351-1c890fd8b98c?q=80&w=1200&auto=format&fit=crop", // Museum exterior
      "https://images.unsplash.com/photo-1584037013349-8c598fc90da7?q=80&w=1200&auto=format&fit=crop", // Museum interior galleries
      "https://images.unsplash.com/photo-1584711725090-bf04ed6dd879?q=80&w=1200&auto=format&fit=crop", // Art collections
      "https://images.unsplash.com/photo-1565705732022-83642c809afc?q=80&w=1200&auto=format&fit=crop", // Sculptures and artifacts
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1200&auto=format&fit=crop" // Historical artifacts display
    ],
    rating: 4.6,
    category: "tourist",
    reviews: [
      {
        id: "r4",
        user: "u4",
        username: "ArtEnthusiast",
        rating: 5,
        comment: "The collection is breathtaking! Plan to spend at least half a day here.",
        date: "2023-04-15"
      }
    ],
    location: {
      address: "Salar Jung Rd, Darulshifa, Hyderabad, Telangana 500002",
      coordinates: {
        lat: 17.3714,
        lng: 78.4804
      }
    },
    transportOptions: {
      car: "Located in the city center, easily accessible by taxi or auto.",
      bus: [
        {
          busNumber: "7",
          from: "Secunderabad",
          to: "Salar Jung Museum",
          stops: ["Koti", "Sultan Bazaar"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "₹20 for Indians, ₹500 for foreigners",
    timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "ramoji-film-city",
    name: "Ramoji Film City",
    cityId: "hyderabad",
    description: "Recognized by the Guinness Book of World Records as the world's largest film studio complex, it spans 1,666 acres and offers tours, attractions, and a glimpse into movie production.",
    imageUrl: "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?q=80&w=1200&auto=format&fit=crop", // Film studio sets
      "https://images.unsplash.com/photo-1570073131906-dbdaaa4ce7ee?q=80&w=1200&auto=format&fit=crop", // Movie production areas
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=1200&auto=format&fit=crop", // Studio buildings and architecture
      "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?q=80&w=1200&auto=format&fit=crop", // Film city attractions
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1200&auto=format&fit=crop" // Entertainment facilities
    ],
    rating: 4.3,
    category: "tourist",
    reviews: [
      {
        id: "r5",
        user: "u5",
        username: "FilmBuff",
        rating: 4,
        comment: "Great place for film enthusiasts. The guided tour is worth it.",
        date: "2023-05-20"
      }
    ],
    location: {
      address: "Anaspur Village, Hayathnagar, Hyderabad, Telangana 501512",
      coordinates: {
        lat: 17.2543,
        lng: 78.6808
      }
    },
    transportOptions: {
      car: "Located about 40km from the city center, best accessed by car or taxi.",
      bus: [
        {
          busNumber: "250",
          from: "Secunderabad",
          to: "Ramoji Film City",
          stops: ["LB Nagar", "Hayathnagar"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    entryFee: "₹1,500 onwards",
    timings: "9:00 AM - 5:30 PM",
    bestTimeToVisit: "October to March"
  },
  {
    id: "hussain-sagar",
    name: "Hussain Sagar Lake",
    cityId: "hyderabad",
    description: "This heart-shaped artificial lake built in 1563 features a massive 18-meter tall Buddha statue installed on Gibraltar Rock in the middle of the lake. Boat rides and the surrounding Lumbini Park are popular attractions.",
    imageUrl: "https://images.unsplash.com/photo-1626931067455-bc3ed7f75b99?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1626931067455-bc3ed7f75b99?q=80&w=1200&auto=format&fit=crop", // Hussain Sagar Lake with Buddha statue
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1200&auto=format&fit=crop", // Lake evening view
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1200&auto=format&fit=crop", // Buddha statue close-up
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=1200&auto=format&fit=crop", // Lake promenade and walkway
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop" // Tank Bund area
    ],
    rating: 4.4,
    category: "tourist",
    reviews: [
      {
        id: "r6",
        user: "u6",
        username: "NatureEnthusiast",
        rating: 4.5,
        comment: "Beautiful place for evening walks and boat rides.",
        date: "2023-06-12"
      }
    ],
    location: {
      address: "Tank Bund Rd, Hyderabad, Telangana 500080",
      coordinates: {
        lat: 17.4239,
        lng: 78.4738
      }
    },
    transportOptions: {
      car: "Central location, easily accessible from most parts of the city.",
      bus: [
        {
          busNumber: "10",
          from: "Secunderabad",
          to: "Tank Bund",
          stops: ["Paradise", "Begumpet", "Khairatabad"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    entryFee: "Free (boat rides extra)",
    timings: "24 hours (boat rides 8:00 AM - 9:00 PM)",
    bestTimeToVisit: "September to March"
  }
];
