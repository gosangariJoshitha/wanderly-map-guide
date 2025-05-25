
import { Attraction } from "@/types";

export const templeAttractions: Attraction[] = [
  {
    id: "birla-mandir",
    name: "Birla Mandir",
    cityId: "hyderabad",
    description: "This stunning white marble temple dedicated to Lord Venkateshwara stands on a 280-foot high hill called Naubath Pahad. Built in 1976, it offers panoramic views of the city and Twin Lakes.",
    imageUrl: "https://images.unsplash.com/photo-1613570192443-5dddc3c16390?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1613570192443-5dddc3c16390?q=80&w=1200&auto=format&fit=crop", // Birla Mandir main view
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop", // Temple architecture details
      "https://images.unsplash.com/photo-1618782434072-e577be1b2e0c?q=80&w=1200&auto=format&fit=crop", // Temple interior
      "https://images.unsplash.com/photo-1606294790380-c4b36cfb8401?q=80&w=1200&auto=format&fit=crop", // Evening temple view
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop" // Temple surroundings and city view
    ],
    rating: 4.8,
    category: "temple",
    reviews: [
      {
        id: "r7",
        user: "u7",
        username: "SpiritualSeeker",
        rating: 5,
        comment: "Peaceful atmosphere and beautiful architecture. The view of the city is amazing.",
        date: "2023-01-18"
      }
    ],
    location: {
      address: "Hill Fort Rd, Khairtabad, Hyderabad, Telangana 500004",
      coordinates: {
        lat: 17.4062,
        lng: 78.4691
      }
    },
    transportOptions: {
      car: "Easily accessible by car or auto-rickshaw.",
      bus: [
        {
          busNumber: "127",
          from: "Secunderabad",
          to: "Birla Mandir",
          stops: ["Lakdi-ka-pul", "Khairatabad"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "mecca-masjid",
    name: "Mecca Masjid",
    cityId: "hyderabad",
    description: "One of the oldest and largest mosques in India, it was built in 1614 during Muhammad Quli Qutb Shah's reign. The main hall can accommodate 10,000 worshippers, and bricks made from soil brought from Mecca are used in the central arch.",
    imageUrl: "https://images.unsplash.com/photo-1621495471660-e1fc467c8731?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1621495471660-e1fc467c8731?q=80&w=1200&auto=format&fit=crop", // Mecca Masjid main entrance
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1200&auto=format&fit=crop", // Mosque interior arches
      "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=1200&auto=format&fit=crop", // Mosque architecture details
      "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200&auto=format&fit=crop", // Prayer hall
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop" // Mosque courtyard
    ],
    rating: 4.5,
    category: "temple",
    reviews: [
      {
        id: "r8",
        user: "u8",
        username: "HistoricalPlaces",
        rating: 4.5,
        comment: "A magnificent mosque with historical significance.",
        date: "2023-02-17"
      }
    ],
    location: {
      address: "Charminar Rd, Charminar, Hyderabad, Telangana 500002",
      coordinates: {
        lat: 17.3604,
        lng: 78.4736
      }
    },
    transportOptions: {
      car: "Located near Charminar, accessible by taxi or auto.",
      bus: [
        {
          busNumber: "5K",
          from: "Secunderabad",
          to: "Charminar",
          stops: ["Koti", "Sultan Bazaar"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "4:00 AM - 9:30 PM (Closed during prayer times)",
    bestTimeToVisit: "October to March"
  },
  {
    id: "jagannath-temple",
    name: "Jagannath Temple",
    cityId: "hyderabad",
    description: "A replica of the famous Jagannath Temple of Puri, this temple in Hyderabad is dedicated to Lord Jagannath, Lord Balabhadra, and Devi Subhadra. The annual Rath Yatra festival draws thousands of devotees.",
    imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=1200&auto=format&fit=crop", // Jagannath Temple main structure
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop", // Temple towers and spires
      "https://images.unsplash.com/photo-1618623266812-a0cc5992df13?q=80&w=1200&auto=format&fit=crop", // Temple entrance and courtyard
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1200&auto=format&fit=crop", // Festival celebrations
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop" // Temple architecture details
    ],
    rating: 4.6,
    category: "temple",
    reviews: [
      {
        id: "r9",
        user: "u9",
        username: "DevoteeVisitor",
        rating: 5,
        comment: "Very peaceful temple. The Rath Yatra is a must-see event.",
        date: "2023-07-12"
      }
    ],
    location: {
      address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034",
      coordinates: {
        lat: 17.4107,
        lng: 78.4339
      }
    },
    transportOptions: {
      car: "Located in Banjara Hills, easily accessible by car or auto.",
      bus: [
        {
          busNumber: "127H",
          from: "Secunderabad",
          to: "Banjara Hills",
          stops: ["Ameerpet", "Punjagutta"],
          frequency: "Every 25 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "5:00 AM - 12:00 PM, 4:00 PM - 8:30 PM",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "chilkur-balaji-temple",
    name: "Chilkur Balaji Temple",
    cityId: "hyderabad",
    description: "Known as 'Visa Balaji Temple', it's famous for granting visa wishes to devotees who circumambulate the shrine 11 times. It's one of the oldest temples in Hyderabad, dating back to the 10th century.",
    imageUrl: "https://images.unsplash.com/photo-1613727799683-a152038ec306?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1613727799683-a152038ec306?q=80&w=1200&auto=format&fit=crop", // Chilkur Balaji Temple entrance
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop", // Temple main shrine
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop", // Temple complex view
      "https://images.unsplash.com/photo-1618782434072-e577be1b2e0c?q=80&w=1200&auto=format&fit=crop", // Devotees and rituals
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1200&auto=format&fit=crop" // Temple surroundings
    ],
    rating: 4.7,
    category: "temple",
    reviews: [
      {
        id: "r10",
        user: "u10",
        username: "VisaSeeker",
        rating: 5,
        comment: "The temple has a unique tradition. Many people claim their visa wishes were granted after visiting.",
        date: "2023-08-15"
      }
    ],
    location: {
      address: "Chilkur Village, Gandipet, Hyderabad, Telangana 500075",
      coordinates: {
        lat: 17.3624,
        lng: 78.2917
      }
    },
    transportOptions: {
      car: "Located 30km from the city center, best reached by car or taxi.",
      bus: [
        {
          busNumber: "288",
          from: "Mehdipatnam",
          to: "Chilkur",
          stops: ["Gandipet", "ORR Exit"],
          frequency: "Every 45 minutes"
        }
      ]
    },
    entryFee: "Free",
    timings: "5:00 AM - 8:00 PM",
    bestTimeToVisit: "Year-round"
  },
  {
    id: "shri-peddamma-temple",
    name: "Shri Peddamma Temple",
    cityId: "hyderabad",
    description: "This temple dedicated to Goddess Peddamma (a form of Durga) is one of the oldest and most popular temples in the Jubilee Hills area of Hyderabad. The annual Bonalu festival is celebrated with great enthusiasm here.",
    imageUrl: "https://images.unsplash.com/photo-1582717171950-a54fa275cb62?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1582717171950-a54fa275cb62?q=80&w=1200&auto=format&fit=crop", // Peddamma Temple main view
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1200&auto=format&fit=crop", // Goddess statue and shrine
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1200&auto=format&fit=crop", // Temple decorations
      "https://images.unsplash.com/photo-1618623266812-a0cc5992df13?q=80&w=1200&auto=format&fit=crop", // Festival celebrations
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1200&auto=format&fit=crop" // Temple complex
    ],
    rating: 4.5,
    category: "temple",
    reviews: [
      {
        id: "r11",
        user: "u11",
        username: "LocalDevotee",
        rating: 4.5,
        comment: "Beautiful temple with strong local significance. Bonalu celebrations are spectacular.",
        date: "2023-07-28"
      }
    ],
    location: {
      address: "Road No. 56, Jubilee Hills, Hyderabad, Telangana 500033",
      coordinates: {
        lat: 17.4279,
        lng: 78.4089
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
    entryFee: "Free",
    timings: "6:00 AM - 9:00 PM",
    bestTimeToVisit: "Year-round"
  }
];
