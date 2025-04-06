import { Attraction } from "@/types";

export const delhiAttractions: Attraction[] = [
  // Tourist Places
  {
    id: "delhi-red-fort",
    name: "Red Fort",
    description: "The Red Fort is a historic fort in Old Delhi that was the main residence of the emperors of the Mughal dynasty. Built in 1639 by the fifth Mughal Emperor Shah Jahan, the massive walls of the fort extend for 2 km and vary in height from 18m on the riverside to 33m on the city side.",
    imageUrl: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552555958-75e5915c1f0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "delhi",
    location: {
      address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, Delhi, 110006",
      coordinates: {
        lat: 28.6562,
        lng: 77.2410
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "r1",
        user: "Traveler123",
        username: "Rahul Singh",
        rating: 4,
        comment: "Amazing historical place. The light and sound show in the evening is a must-watch.",
        date: "2023-11-15"
      },
      {
        id: "r2",
        user: "HistoryBuff22",
        username: "Anika Shah",
        rating: 5,
        comment: "One of the most impressive forts in India. The architecture is stunning.",
        date: "2023-10-25"
      }
    ],
    transportOptions: {
      car: "30-minute drive from central Delhi, parking available nearby for a fee.",
      bus: [
        {
          busNumber: "Route 100",
          from: "Connaught Place",
          to: "Red Fort",
          stops: ["Janpath", "Delhi Gate", "Chandni Chowk"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "9:30 AM to 4:30 PM (Closed on Mondays)",
    entryFee: "₹35 for Indians, ₹500 for foreigners",
    bestTimeToVisit: "October to March",
    popularFor: "Mughal architecture, historical significance, light and sound show",
    localCuisine: [
      {
        name: "Paranthe Wali Gali",
        description: "Famous for its stuffed parathas just a short walk from Red Fort",
        price: "₹150-250 per person"
      },
      {
        name: "Karim's",
        description: "Historic restaurant serving authentic Mughlai cuisine since 1913",
        price: "₹400-600 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Haveli Dharampura",
        rating: 4.5,
        price: "₹8,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "0.8 km"
      },
      {
        id: "h2",
        name: "Oberoi Delhi",
        rating: 4.8,
        price: "₹16,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3.5 km"
      }
    ]
  },
  {
    id: "delhi-india-gate",
    name: "India Gate",
    description: "India Gate is a war memorial dedicated to the soldiers who died during the First World War. This 42-meter-high arch stands at the eastern end of the Rajpath and is a popular spot for picnics and evening strolls.",
    imageUrl: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1597044656418-c808ace6e9fb?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572445271230-a78d4d184cd9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1569660072562-48e319bbe48a?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "delhi",
    location: {
      address: "Rajpath Marg, India Gate, New Delhi, Delhi 110001",
      coordinates: {
        lat: 28.6129,
        lng: 77.2295
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "r1",
        user: "Traveler456",
        username: "Priya Joshi",
        rating: 5,
        comment: "Beautiful place to visit in the evening. The whole area is lit up and very lively.",
        date: "2023-12-10"
      },
      {
        id: "r2",
        user: "DelhiExplorer",
        username: "Vikram Kumar",
        rating: 4,
        comment: "A symbolic monument that's a must-visit in Delhi. The lawns are perfect for an evening stroll.",
        date: "2023-09-15"
      }
    ],
    transportOptions: {
      car: "Located centrally, easily accessible by taxi or personal vehicle.",
      bus: [
        {
          busNumber: "Route 171",
          from: "Connaught Place",
          to: "India Gate",
          stops: ["Janpath", "National Museum"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "Evening hours or early morning",
    popularFor: "War memorial, architectural beauty, evening ambiance",
    localCuisine: [
      {
        name: "Street Food Vendors",
        description: "Ice cream, chaat, and other snacks available from vendors around India Gate",
        price: "₹50-150"
      },
      {
        name: "Andhra Bhavan Canteen",
        description: "Popular for authentic South Indian cuisine nearby",
        price: "₹250-400 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Imperial",
        rating: 4.8,
        price: "₹20,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "2.5 km"
      },
      {
        id: "h2",
        name: "Le Meridien",
        rating: 4.6,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "1.8 km"
      }
    ]
  },
  {
    id: "delhi-qutub-minar",
    name: "Qutub Minar",
    description: "Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world. This 73-meter tall tower was built in 1193 by Qutub-ud-din Aibak immediately after the defeat of Delhi's last Hindu kingdom.",
    imageUrl: "https://images.unsplash.com/photo-1607512060968-ef1d906bb372?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1572444859680-e7b5ce2c5b29?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1624624712047-cac07c79cca3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589811760663-07f0e1c88d06?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "delhi",
    location: {
      address: "Mehrauli, New Delhi, Delhi 110030",
      coordinates: {
        lat: 28.5245,
        lng: 77.1855
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "r1",
        user: "History123",
        username: "Arjun Mehta",
        rating: 5,
        comment: "Magnificent structure with incredible craftsmanship. The entire complex is worth exploring.",
        date: "2023-10-05"
      },
      {
        id: "r2",
        user: "DelhiTraveler",
        username: "Meera Nair",
        rating: 4,
        comment: "Beautiful historical site. Go early in the morning to avoid crowds and heat.",
        date: "2023-11-22"
      }
    ],
    transportOptions: {
      car: "30-40 minute drive from central Delhi. Parking available.",
      bus: [
        {
          busNumber: "Route 402",
          from: "Connaught Place",
          to: "Qutub Minar",
          stops: ["AIIMS", "Hauz Khas", "Mehrauli"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "7:00 AM to 5:00 PM (Open all days)",
    entryFee: "₹35 for Indians, ₹550 for foreigners",
    bestTimeToVisit: "October to March",
    popularFor: "Islamic architecture, historical significance, archeological complex",
    localCuisine: [
      {
        name: "Olive Bar & Kitchen",
        description: "Upscale Mediterranean restaurant near Qutub Minar with beautiful ambiance",
        price: "₹2,500-3,500 per person"
      },
      {
        name: "Qutub Institutional Area Food Stalls",
        description: "Various food stalls offering North Indian meals",
        price: "₹150-300 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Qutub Hotel",
        rating: 4.3,
        price: "₹6,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "1.2 km"
      },
      {
        id: "h2",
        name: "Taj Diplomatic Enclave",
        rating: 4.7,
        price: "₹14,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "5 km"
      }
    ]
  },
  {
    id: "delhi-humayuns-tomb",
    name: "Humayun's Tomb",
    description: "Humayun's Tomb is a UNESCO World Heritage Site and the tomb of the Mughal Emperor Humayun. Built in 1570, it was the first garden-tomb on the Indian subcontinent and inspired several major architectural innovations, culminating in the construction of the Taj Mahal.",
    imageUrl: "https://images.unsplash.com/photo-1553481838-38cacf9c72a8?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1602320613433-6df73ae1ea9f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614956547459-2d5ca5b8636b?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614952686219-3ac0bf79c4b2?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "delhi",
    location: {
      address: "Mathura Road, Nizamuddin East, New Delhi, Delhi 110013",
      coordinates: {
        lat: 28.5933,
        lng: 77.2507
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "r1",
        user: "ArchiLover",
        username: "Samir Khan",
        rating: 5,
        comment: "Stunning architecture and beautifully maintained gardens. Less crowded than other monuments.",
        date: "2023-12-20"
      },
      {
        id: "r2",
        user: "PhotoTraveller",
        username: "Aisha Sharma",
        rating: 4,
        comment: "Perfect for photography enthusiasts. The symmetry and Persian-inspired design are incredible.",
        date: "2023-11-05"
      }
    ],
    transportOptions: {
      car: "20-30 minute drive from central Delhi. Limited parking available.",
      bus: [
        {
          busNumber: "Route 347",
          from: "Connaught Place",
          to: "Humayun's Tomb",
          stops: ["Pragati Maidan", "Nizamuddin Railway Station"],
          frequency: "Every 25 minutes"
        }
      ]
    },
    timings: "6:00 AM to 6:00 PM (Open all days)",
    entryFee: "₹35 for Indians, ₹550 for foreigners",
    bestTimeToVisit: "October to March, early morning or late afternoon for photography",
    popularFor: "Mughal architecture, Persian-inspired gardens, historical significance",
    localCuisine: [
      {
        name: "Karim's Nizamuddin",
        description: "Famous for Mughlai cuisine near Nizamuddin Dargah",
        price: "₹300-500 per person"
      },
      {
        name: "Khan Chacha",
        description: "Popular for kebabs and rolls",
        price: "₹200-350 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Oberoi",
        rating: 4.8,
        price: "₹18,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "4 km"
      },
      {
        id: "h2",
        name: "Vivanta by Taj - Ambassador",
        rating: 4.4,
        price: "₹8,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "3.5 km"
      }
    ]
  },
  {
    id: "delhi-lotus-temple",
    name: "Lotus Temple",
    description: "The Lotus Temple is a Bahá'í House of Worship notable for its flower-like shape. It has won numerous architectural awards and has been featured in many newspaper and magazine articles. Like all Bahá'í Houses of Worship, the Lotus Temple is open to all, regardless of religion or any other qualification.",
    imageUrl: "https://images.unsplash.com/photo-1631081347335-892e305e79ff?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588856122867-363b0aa7f598?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=800&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "delhi",
    location: {
      address: "Lotus Temple Rd, Bahapur, Shambhu Dayal Bagh, Kalkaji, New Delhi, Delhi 110019",
      coordinates: {
        lat: 28.5535,
        lng: 77.2588
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "r1",
        user: "PeacefulSoul",
        username: "Neha Gupta",
        rating: 5,
        comment: "An oasis of peace in the bustling city. The architecture is breathtaking and the atmosphere is serene.",
        date: "2024-01-15"
      },
      {
        id: "r2",
        user: "ArchitectureEnthusiast",
        username: "Rohit Verma",
        rating: 4,
        comment: "Unique architectural marvel worth visiting. Be prepared for crowds though.",
        date: "2023-12-27"
      }
    ],
    transportOptions: {
      car: "30 minute drive from central Delhi. Parking available.",
      bus: [
        {
          busNumber: "Route 511",
          from: "Connaught Place",
          to: "Lotus Temple",
          stops: ["Moolchand", "Nehru Place", "Kalkaji"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "9:00 AM to 5:30 PM (Closed on Mondays)",
    entryFee: "Free",
    bestTimeToVisit: "October to March, preferably weekdays to avoid crowds",
    popularFor: "Modern architecture, peaceful meditation space, gardens",
    localCuisine: [
      {
        name: "Evergreen Sweet House",
        description: "Famous for North Indian sweets and snacks",
        price: "₹200-300 per person"
      },
      {
        name: "Barbeque Nation",
        description: "Popular chain restaurant offering buffet with live grills",
        price: "₹900-1400 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "Eros Hotel",
        rating: 4.3,
        price: "₹7,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      },
      {
        id: "h2",
        name: "Sheraton New Delhi",
        rating: 4.5,
        price: "₹10,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3.5 km"
      }
    ]
  },
  
  // Temple Category
  {
    id: "delhi-akshardham-temple",
    name: "Akshardham Temple",
    description: "Swaminarayan Akshardham is a Hindu mandir and spiritual-cultural complex. The temple displays millennia of traditional Indian and Hindu culture, spirituality, and architecture. It is one of the largest Hindu temples in the world.",
    imageUrl: "https://images.unsplash.com/photo-1631081370799-7e5cdb138851?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1631081370799-7e5cdb138851?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587203643957-654c8a0ce877?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588686857328-fa8fad368cd4?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "delhi",
    location: {
      address: "Noida Mor, Pandav Nagar, New Delhi, Delhi 110092",
      coordinates: {
        lat: 28.6127,
        lng: 77.2773
      }
    },
    rating: 4.8,
    reviews: [
      {
        id: "r1",
        user: "SpiritualJourney",
        username: "Ramesh Iyer",
        rating: 5,
        comment: "Breathtaking temple with incredible craftsmanship. The light and sound show in the evening is not to be missed.",
        date: "2023-12-05"
      },
      {
        id: "r2",
        user: "CultureSeeker",
        username: "Deepika Patel",
        rating: 5,
        comment: "One of the most beautiful temples I've ever visited. Plan to spend at least half a day here.",
        date: "2024-01-10"
      }
    ],
    transportOptions: {
      car: "30-40 minute drive from central Delhi. Large parking area available.",
      bus: [
        {
          busNumber: "Route 143",
          from: "Connaught Place",
          to: "Akshardham Temple",
          stops: ["ITO", "Indraprastha"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "9:30 AM to 6:30 PM (Closed on Mondays)",
    entryFee: "Free (exhibition and light show have separate charges)",
    bestTimeToVisit: "October to March, plan to visit in the afternoon and stay for the evening light show",
    popularFor: "Hindu architecture, spiritual exhibition, musical fountain, light and sound show",
    localCuisine: [
      {
        name: "Akshardham Food Court",
        description: "Vegetarian food court within the temple complex",
        price: "₹150-250 per person"
      },
      {
        name: "Food Stalls around Akshardham Metro",
        description: "Various street food options",
        price: "₹80-150 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Leela Ambience Convention Hotel",
        rating: 4.6,
        price: "₹9,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "3 km"
      },
      {
        id: "h2",
        name: "Crowne Plaza New Delhi Mayur Vihar",
        rating: 4.4,
        price: "₹7,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "delhi-iskcon-temple",
    name: "ISKCON Temple",
    description: "ISKCON Temple, also known as Sri Sri Radha Parthasarathi Mandir, is a popular Vaishnava temple of Lord Krishna and Radharani. The temple is a part of the International Society for Krishna Consciousness (ISKCON) and is known for its architecture and peaceful environment.",
    imageUrl: "https://images.unsplash.com/photo-1600189020840-43537dc4f3a0?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1600189020840-43537dc4f3a0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "delhi",
    location: {
      address: "Hare Krishna Hill, East of Kailash, New Delhi, Delhi 110065",
      coordinates: {
        lat: 28.5530,
        lng: 77.2504
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "r1",
        user: "KrishnaDevotee",
        username: "Lalita Sharma",
        rating: 5,
        comment: "Peaceful temple with beautiful deities. The evening aarti is spiritually uplifting.",
        date: "2023-11-20"
      },
      {
        id: "r2",
        user: "PeaceSeekers",
        username: "Ajay Mittal",
        rating: 4,
        comment: "Nice place to find peace in the busy city. The prasadam is delicious too.",
        date: "2024-01-05"
      }
    ],
    transportOptions: {
      car: "25 minute drive from central Delhi. Parking available but limited.",
      bus: [
        {
          busNumber: "Route 419",
          from: "Connaught Place",
          to: "ISKCON Temple",
          stops: ["Moolchand", "Nehru Place"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "4:30 AM to 9:00 PM (Open all days)",
    entryFee: "Free",
    bestTimeToVisit: "Morning or evening for aartis (prayer ceremonies)",
    popularFor: "Krishna worship, spiritual talks, prasadam (sacred food), evening aarti",
    localCuisine: [
      {
        name: "Govinda's Restaurant",
        description: "Pure vegetarian restaurant inside the temple serving sattvic food",
        price: "₹200-350 per person"
      },
      {
        name: "Haldiram's",
        description: "Popular Indian sweets and snacks chain nearby",
        price: "₹250-400 per person"
      }
    ],
    nearbyHotels: [
      {
        id: "h1",
        name: "The Muse Sarovar Portico",
        rating: 4.2,
        price: "₹5,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=800&auto=format&fit=crop",
        distance: "2.5 km"
      },
      {
        id: "h2",
        name: "The Suryaa",
        rating: 4.4,
        price: "₹7,800 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop",
        distance: "1.8 km"
      }
    ]
  },
  {
    id: "delhi-laxminarayan-temple",
    name: "Laxminarayan Temple (Birla Mandir)",
    description: "Laxminarayan Temple, also known as Birla Mandir, is a Hindu temple dedicated to Laxminarayan (Vishnu with his consort Lakshmi). Built by the industrialist Baldeo Das Birla and his son Jugal Kishore Birla, the temple was inaugurated by Mahatma Gandhi with the condition that people of all castes would be allowed to enter.",
    imageUrl: "https://images.unsplash.com/photo-1607512060968-ef1d906bb372?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1607512060968-ef1d906bb372?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=800&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "delhi",
    location: {
      address:
