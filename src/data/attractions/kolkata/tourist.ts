
import { Attraction } from "@/types";

export const kolkataTouristAttractions: Attraction[] = [
  {
    id: "victoria-memorial",
    name: "Victoria Memorial",
    description: "The Victoria Memorial is a large marble building built between 1906 and 1921. It is dedicated to the memory of Queen Victoria, Empress of India from 1876 to 1901. The memorial lies on the Maidan and is one of the most famous monuments in Kolkata.",
    imageUrl: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545126133-4f0b279a3dac?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623689043725-a3e14fc5bf8c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1652963809608-a42881692b3e?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "kolkata",
    location: {
      address: "Victoria Memorial Hall, 1, Queens Way, Maidan, Kolkata",
      coordinates: {
        lat: 22.5448,
        lng: 88.3426
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "vm1",
        user: "user123",
        username: "Aditya S.",
        rating: 5,
        comment: "A magnificent white marble structure that reflects the colonial past. The gardens are well maintained and the museum inside has a rich collection of artifacts.",
        date: "2023-09-15"
      },
      {
        id: "vm2",
        user: "user456",
        username: "Meera R.",
        rating: 4,
        comment: "Beautiful building with lots of history. Recommend going early morning to avoid crowds and heat.",
        date: "2023-08-22"
      }
    ],
    transportOptions: {
      car: "Easily accessible by car with parking facilities available nearby.",
      bus: [
        {
          busNumber: "234",
          from: "Howrah Station",
          to: "Victoria Memorial",
          stops: ["Esplanade", "Park Street", "Victoria"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "10:00 AM - 6:00 PM (Closed on Mondays)",
    entryFee: "₹30 for Indians, ₹500 for foreigners",
    bestTimeToVisit: "October to March when the weather is pleasant",
    popularFor: "Colonial architecture, museum collection, and lush gardens",
    localCuisine: [
      {
        name: "Street Phuchka",
        description: "Crispy hollow puris filled with tangy tamarind water and spiced mashed potatoes - Kolkata's signature street food.",
        price: "₹20-50"
      },
      {
        name: "Mishti Doi",
        description: "Sweet yogurt dessert, a Bengali specialty available at sweet shops near the memorial.",
        price: "₹40-60"
      }
    ],
    nearbyHotels: [
      {
        id: "taj-bengal",
        name: "Taj Bengal",
        rating: 4.8,
        price: "₹12,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.5 km"
      },
      {
        id: "oberoi-grand",
        name: "The Oberoi Grand",
        rating: 4.9,
        price: "₹15,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "howrah-bridge",
    name: "Howrah Bridge",
    description: "The Howrah Bridge is a cantilever bridge with a suspended span over the Hooghly River. Commissioned in 1943, it's one of the busiest bridges in the world and an iconic symbol of Kolkata.",
    imageUrl: "https://images.unsplash.com/photo-1621512548583-9695f0bb6dfd?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1621512548583-9695f0bb6dfd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570096053550-3155bf79b101?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527965408463-39be0a473aee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623666166860-5fc78eeca222?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "kolkata",
    location: {
      address: "Howrah Bridge, Kolkata",
      coordinates: {
        lat: 22.5852,
        lng: 88.3468
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "hb1",
        user: "user789",
        username: "Rajiv K.",
        rating: 5,
        comment: "Majestic bridge with incredible engineering! Best viewed from a boat ride on the Hooghly river during sunset.",
        date: "2023-07-10"
      },
      {
        id: "hb2",
        user: "user321",
        username: "Priya G.",
        rating: 4,
        comment: "One of Kolkata's most recognizable landmarks. Walking on the bridge during evening gives a great view of the city.",
        date: "2023-06-18"
      }
    ],
    transportOptions: {
      car: "Located in central Kolkata, easily accessible by taxi or car.",
      bus: [
        {
          busNumber: "12C",
          from: "Esplanade",
          to: "Howrah Station",
          stops: ["BBD Bagh", "Burrabazar", "Howrah Bridge"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    timings: "Open 24 hours",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or evening for less crowd and better photographs",
    popularFor: "Architectural marvel, connectivity between Kolkata and Howrah",
    localCuisine: [
      {
        name: "Ghugni Chaat",
        description: "Spicy yellow pea curry topped with onions, chili, and spices sold by street vendors near the bridge.",
        price: "₹20-30"
      },
      {
        name: "Jhal Muri",
        description: "Puffed rice mixed with spices, vegetables, and tangy tamarind sauce - a popular evening snack.",
        price: "₹15-25"
      }
    ],
    nearbyHotels: [
      {
        id: "lalit-great-eastern",
        name: "The LaLiT Great Eastern",
        rating: 4.5,
        price: "₹8,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?q=80&w=1000&auto=format&fit=crop",
        distance: "1.2 km"
      }
    ]
  },
  {
    id: "science-city",
    name: "Science City",
    description: "Science City is the largest science center in the Indian subcontinent, featuring interactive exhibits, a space theater, and dynamic motion rides, designed to promote science education and entertainment.",
    imageUrl: "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1503792501406-2c40da09e1e2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581093458791-9d19c9b1be7c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "kolkata",
    location: {
      address: "J.B.S Haldane Avenue, East Kolkata Township, Kolkata",
      coordinates: {
        lat: 22.5395,
        lng: 88.3961
      }
    },
    rating: 4.4,
    reviews: [
      {
        id: "sc1",
        user: "user555",
        username: "Ananya D.",
        rating: 5,
        comment: "Great place for kids! The 3D shows and space theater are excellent. Plan to spend at least half a day here.",
        date: "2023-11-05"
      },
      {
        id: "sc2",
        user: "user666",
        username: "Rohan M.",
        rating: 4,
        comment: "Educational and entertaining. The evolution park with dinosaur models is impressive.",
        date: "2023-10-12"
      }
    ],
    transportOptions: {
      car: "Located in East Kolkata, accessible by car with ample parking space available.",
      bus: [
        {
          busNumber: "S9",
          from: "Sealdah Station",
          to: "Science City",
          stops: ["Park Circus", "Ruby Hospital", "Kasba"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "9:00 AM - 8:00 PM (Closed on Holi & Diwali)",
    entryFee: "₹50 for general entry, additional charges for special shows",
    bestTimeToVisit: "Weekdays to avoid crowds, anytime during the year",
    popularFor: "Interactive science exhibits, space odyssey, evolution park",
    localCuisine: [
      {
        name: "Kolkata Biryani",
        description: "Distinctive Kolkata-style biryani with potato and boiled egg, available at restaurants near Science City.",
        price: "₹150-300"
      },
      {
        name: "Rossogolla",
        description: "Famous Bengali sweet made from cottage cheese dumplings soaked in sugar syrup.",
        price: "₹15-25 per piece"
      }
    ],
    nearbyHotels: [
      {
        id: "novotel-kolkata",
        name: "Novotel Kolkata Hotel & Residences",
        rating: 4.3,
        price: "₹6,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "eco-park",
    name: "Eco Tourism Park",
    description: "A large urban park spread over 480 acres featuring various attractions including lakes, gardens, a butterfly garden, and replicas of world famous landmarks like the Eiffel Tower and Taj Mahal.",
    imageUrl: "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1569860138092-8bab98c8a55f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1602537069781-3bd00ed6379d?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "kolkata",
    location: {
      address: "Major Arterial Road, Action Area II, Newtown, Kolkata",
      coordinates: {
        lat: 22.6028,
        lng: 88.4675
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "ep1",
        user: "user777",
        username: "Vikram T.",
        rating: 5,
        comment: "Beautiful urban green space! The boat rides on the lake are relaxing, and the mini-world park is fascinating.",
        date: "2023-12-23"
      },
      {
        id: "ep2",
        user: "user888",
        username: "Sneha P.",
        rating: 4,
        comment: "Great place for families and couples. Very well maintained with plenty of recreational activities.",
        date: "2023-11-30"
      }
    ],
    transportOptions: {
      car: "Located in Newtown area, about 10 km from downtown Kolkata. Parking available.",
      bus: [
        {
          busNumber: "New Town 1",
          from: "Salt Lake",
          to: "Eco Park",
          stops: ["Sector V", "Axis Mall", "Eco Park Gate"],
          frequency: "Every 30 minutes"
        }
      ]
    },
    timings: "2:00 PM - 8:30 PM (Weekdays), 12:00 PM - 8:30 PM (Weekends)",
    entryFee: "₹30 for adults, ₹10 for children",
    bestTimeToVisit: "Winter months (November to February)",
    popularFor: "Boating, cycling, mini-world park, musical fountain",
    localCuisine: [
      {
        name: "Bengali Thali",
        description: "Complete Bengali meal with rice, dal, vegetables, fish, and sweets at restaurants inside the park.",
        price: "₹250-400"
      },
      {
        name: "Sandesh",
        description: "Traditional Bengali sweet made from milk and sugar, available at food stalls in the park.",
        price: "₹20-30 per piece"
      }
    ],
    nearbyHotels: [
      {
        id: "bizz-the-hotel",
        name: "Bizz The Hotel",
        rating: 4.1,
        price: "₹3,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "1.5 km"
      }
    ]
  },
  {
    id: "indian-museum",
    name: "Indian Museum",
    description: "Founded in 1814, the Indian Museum is the oldest and largest museum in India and houses rare collections of antiques, armor, ornaments, fossils, skeletons, mummies, and Mughal paintings.",
    imageUrl: "https://images.unsplash.com/photo-1584037013349-8c598fc90da7?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1584037013349-8c598fc90da7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565705732022-83642c809afc?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584711725090-bf04ed6dd879?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "tourist",
    cityId: "kolkata",
    location: {
      address: "27, Jawaharlal Nehru Road, Kolkata",
      coordinates: {
        lat: 22.5575,
        lng: 88.3511
      }
    },
    rating: 4.3,
    reviews: [
      {
        id: "im1",
        user: "user999",
        username: "Arjun K.",
        rating: 4,
        comment: "A treasure trove of artifacts. The Egyptian mummy and the dinosaur fossils are highlights. Building itself is historically significant.",
        date: "2023-08-05"
      },
      {
        id: "im2",
        user: "user111",
        username: "Divya M.",
        rating: 5,
        comment: "The archaeology section is fantastic. Plan to spend 2-3 hours to properly appreciate the collections.",
        date: "2023-07-12"
      }
    ],
    transportOptions: {
      car: "Located in central Kolkata, easily accessible by taxi or car.",
      bus: [
        {
          busNumber: "230",
          from: "Howrah Station",
          to: "Esplanade",
          stops: ["BBD Bagh", "Indian Museum", "New Market"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "10:00 AM - 5:00 PM (Closed on Mondays and public holidays)",
    entryFee: "₹20 for Indians, ₹500 for foreigners",
    bestTimeToVisit: "Weekday mornings for fewer crowds",
    popularFor: "Historical artifacts, archaeological specimens, Egyptian mummy",
    localCuisine: [
      {
        name: "Kathi Roll",
        description: "Kolkata's famous wraps filled with egg, chicken, or paneer and spices available at nearby Nizam's restaurant.",
        price: "₹60-120"
      },
      {
        name: "Macher Jhol",
        description: "Traditional Bengali fish curry served with rice at local restaurants around Park Street.",
        price: "₹150-250"
      }
    ],
    nearbyHotels: [
      {
        id: "park-hotel",
        name: "The Park Kolkata",
        rating: 4.2,
        price: "₹7,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1 km"
      }
    ]
  }
];
