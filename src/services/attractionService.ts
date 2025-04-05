
import { Attraction } from "@/types";

const ATTRACTIONS: Record<string, Attraction[]> = {
  "hyderabad": [
    // Tourist Places
    {
      id: "charminar",
      name: "Charminar",
      cityId: "hyderabad",
      description: "Built in 1591, this iconic monument is a symbol of Hyderabad with its four grand arches and minarets. The structure was built to commemorate the eradication of plague from the city and houses a mosque on its top floor.",
      imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      category: "tourist",
      reviews: [
        {
          id: "r1",
          userId: "u1",
          username: "TravelExplorer",
          rating: 5,
          comment: "A must-visit landmark in Hyderabad! The architecture is stunning and the surrounding market is vibrant.",
          date: "2023-02-15"
        },
        {
          id: "r2",
          userId: "u2",
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
      rating: 4.5,
      category: "tourist",
      reviews: [
        {
          id: "r3",
          userId: "u3",
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
      rating: 4.6,
      category: "tourist",
      reviews: [
        {
          id: "r4",
          userId: "u4",
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
      rating: 4.3,
      category: "tourist",
      reviews: [
        {
          id: "r5",
          userId: "u5",
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
      rating: 4.4,
      category: "tourist",
      reviews: [
        {
          id: "r6",
          userId: "u6",
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
    },
    
    // Temples
    {
      id: "birla-mandir",
      name: "Birla Mandir",
      cityId: "hyderabad",
      description: "This stunning white marble temple dedicated to Lord Venkateshwara stands on a 280-foot high hill called Naubath Pahad. Built in 1976, it offers panoramic views of the city and Twin Lakes.",
      imageUrl: "https://images.unsplash.com/photo-1613570192443-5dddc3c16390?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      category: "temple",
      reviews: [
        {
          id: "r7",
          userId: "u7",
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
      rating: 4.5,
      category: "temple",
      reviews: [
        {
          id: "r8",
          userId: "u8",
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
      rating: 4.6,
      category: "temple",
      reviews: [
        {
          id: "r9",
          userId: "u9",
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
      rating: 4.7,
      category: "temple",
      reviews: [
        {
          id: "r10",
          userId: "u10",
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
      rating: 4.5,
      category: "temple",
      reviews: [
        {
          id: "r11",
          userId: "u11",
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
    },
    
    // Other Attractions
    {
      id: "nizam-museum",
      name: "Nizam's Museum",
      cityId: "hyderabad",
      description: "This museum showcases the gifts and memorabilia received by the last Nizam of Hyderabad, Mir Osman Ali Khan. Highlights include a 1930s Rolls Royce, gold burnished wooden throne, and the world's largest wardrobe.",
      imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop",
      rating: 4.2,
      category: "other",
      reviews: [
        {
          id: "r12",
          userId: "u12",
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
      rating: 4.1,
      category: "other",
      reviews: [
        {
          id: "r13",
          userId: "u13",
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
      rating: 4.3,
      category: "other",
      reviews: [
        {
          id: "r14",
          userId: "u14",
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
      rating: 4.4,
      category: "other",
      reviews: [
        {
          id: "r15",
          userId: "u15",
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
      rating: 4.5,
      category: "other",
      reviews: [
        {
          id: "r16",
          userId: "u16",
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
  ],
  "mumbai": [
    {
      id: "gateway-of-india",
      name: "Gateway of India",
      cityId: "mumbai",
      description: "An iconic arch-monument built during the British Raj, overlooking the Arabian Sea.",
      imageUrl: "https://example.com/gateway.jpg",
      rating: 4.5,
      category: "tourist",
      reviews: [
        {
          id: "rm1",
          userId: "um1",
          username: "SeaLover",
          rating: 4.5,
          comment: "Beautiful monument with great views of the Arabian Sea.",
          date: "2023-05-15"
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
          }
        ]
      },
      entryFee: "Free",
      timings: "24 hours",
      bestTimeToVisit: "October to March"
    },
    {
      id: "marine-drive",
      name: "Marine Drive",
      cityId: "mumbai",
      description: "A scenic promenade along the Arabian Sea, also known as the Queen's Necklace.",
      imageUrl: "https://example.com/marine.jpg",
      rating: 4.6,
      category: "tourist",
      reviews: [
        {
          id: "rm2",
          userId: "um2",
          username: "CityExplorer",
          rating: 5,
          comment: "Beautiful at night when the lights make it look like a necklace.",
          date: "2023-06-22"
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
          }
        ]
      },
      entryFee: "Free",
      timings: "24 hours",
      bestTimeToVisit: "October to March"
    },
    {
      id: "shri-siddhivinayak-temple",
      name: "Shri Siddhivinayak Temple",
      cityId: "mumbai",
      description: "A famous Hindu temple dedicated to Lord Ganesha.",
      imageUrl: "https://example.com/siddhivinayak.jpg",
      rating: 4.7,
      category: "temple",
      reviews: [
        {
          id: "rm3",
          userId: "um3",
          username: "DevotedVisitor",
          rating: 5,
          comment: "One of the most revered Ganesha temples. Peaceful despite the crowds.",
          date: "2023-04-10"
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
          }
        ]
      },
      entryFee: "Free",
      timings: "6:00 AM - 10:00 PM",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "kanheri-caves",
      name: "Kanheri Caves",
      cityId: "mumbai",
      description: "Ancient Buddhist caves located within the Sanjay Gandhi National Park.",
      imageUrl: "https://example.com/kanheri.jpg",
      rating: 4.3,
      category: "other",
      reviews: [
        {
          id: "rm4",
          userId: "um4",
          username: "HistoryExplorer",
          rating: 4.5,
          comment: "Amazing Buddhist rock-cut monuments dating back to 1st century BCE.",
          date: "2023-03-05"
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
          }
        ]
      },
      entryFee: "₹15 for Indians, ₹200 for foreigners",
      timings: "9:00 AM - 5:00 PM (Closed on Mondays)",
      bestTimeToVisit: "October to March"
    }
  ]
};

export const fetchAttractionsByCity = async (cityId: string): Promise<Attraction[]> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => resolve(ATTRACTIONS[cityId] || []), 500);
  });
};

export const fetchAttractionById = async (attractionId: string): Promise<Attraction | null> => {
  // In a real app, this would be an API call to fetch a specific attraction
  return new Promise(resolve => {
    // Search for the attraction in all cities
    for (const cityAttractions of Object.values(ATTRACTIONS)) {
      const attraction = cityAttractions.find(attr => attr.id === attractionId);
      if (attraction) {
        return resolve(attraction);
      }
    }
    resolve(null);
  });
};
