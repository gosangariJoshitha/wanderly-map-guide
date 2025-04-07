
import { Attraction } from "@/types";

export const kolkataTempleAttractions: Attraction[] = [
  {
    id: "dakshineswar-kali-temple",
    name: "Dakshineswar Kali Temple",
    description: "A famous Hindu temple dedicated to Goddess Kali, built in 1855 by Rani Rashmoni. It's associated with Ramakrishna Paramhansa, whose spiritual movement played a significant role in the Bengal Renaissance.",
    imageUrl: "https://images.unsplash.com/photo-1605440522243-3d641bb1584b?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1605440522243-3d641bb1584b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612457777902-ad3546dea2ee?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612892538789-f8611675b6fa?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "kolkata",
    location: {
      address: "Dakshineswar, Kolkata",
      coordinates: {
        lat: 22.6576,
        lng: 88.3572
      }
    },
    rating: 4.8,
    reviews: [
      {
        id: "dk1",
        user: "user222",
        username: "Samarth B.",
        rating: 5,
        comment: "Serene atmosphere with beautiful architecture. Best to visit early morning for the aarti and to avoid crowds.",
        date: "2023-10-15"
      },
      {
        id: "dk2",
        user: "user333",
        username: "Lalita R.",
        rating: 4,
        comment: "Spiritually uplifting place. The temple by the Ganges creates a divine atmosphere. Weekends are very crowded.",
        date: "2023-09-22"
      }
    ],
    transportOptions: {
      car: "Located in northern Kolkata, accessible by car with parking facilities.",
      bus: [
        {
          busNumber: "D9",
          from: "Shyambazar",
          to: "Dakshineswar",
          stops: ["Dunlop", "Bonhooghly", "Dakshineswar Temple"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    timings: "6:00 AM - 12:30 PM, 3:00 PM - 8:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or during festivals like Kali Puja",
    popularFor: "Religious significance, architecture, riverside location",
    localCuisine: [
      {
        name: "Bhog Khichuri",
        description: "Sacred offering made of rice, lentils, and spices, distributed to devotees on special days.",
        price: "Free or by donation"
      },
      {
        name: "Nolen Gur Rosogolla",
        description: "Special winter sweet made with date palm jaggery, available at sweet shops near the temple.",
        price: "₹20-30 per piece"
      }
    ],
    nearbyHotels: [
      {
        id: "floratel-kolkata",
        name: "Floratel Kolkata",
        rating: 3.9,
        price: "₹2,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "3 km"
      }
    ]
  },
  {
    id: "kalighat-temple",
    name: "Kalighat Temple",
    description: "One of the 51 Shakti Peethas in India, this ancient temple is dedicated to Goddess Kali. The name 'Kolkata' is believed to have been derived from 'Kalighat'.",
    imageUrl: "https://images.unsplash.com/photo-1605604910851-3c8a678332c5?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1605604910851-3c8a678332c5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1623689043725-a3e14fc5bf8c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546542168-ab0e13a9af65?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "kolkata",
    location: {
      address: "Kalighat, S.P. Mukherjee Road, Kolkata",
      coordinates: {
        lat: 22.5196,
        lng: 88.3437
      }
    },
    rating: 4.5,
    reviews: [
      {
        id: "kt1",
        user: "user444",
        username: "Nitin G.",
        rating: 5,
        comment: "Historic and powerful temple. The energy here is amazing, though it can get very crowded.",
        date: "2023-11-10"
      },
      {
        id: "kt2",
        user: "user555",
        username: "Amrita S.",
        rating: 4,
        comment: "Important pilgrimage site. Recommend hiring a guide to understand the significance and navigate the complex.",
        date: "2023-10-05"
      }
    ],
    transportOptions: {
      car: "Located in south Kolkata, accessible by car but limited parking.",
      bus: [
        {
          busNumber: "8B",
          from: "Esplanade",
          to: "Kalighat",
          stops: ["Park Street", "Jatin Das Park", "Kalighat Metro"],
          frequency: "Every 12 minutes"
        }
      ]
    },
    timings: "5:00 AM - 2:00 PM, 5:00 PM - 10:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "Early morning for less crowd or during Kali Puja",
    popularFor: "Religious significance, historical importance, rituals",
    localCuisine: [
      {
        name: "Kalighat Macher Jhol",
        description: "Traditional fish curry served at small eateries around the temple complex.",
        price: "₹100-180"
      },
      {
        name: "Mihidana",
        description: "Fine, sweet yellow gram flour beads, a specialty sweet available nearby.",
        price: "₹80-100 per box"
      }
    ],
    nearbyHotels: [
      {
        id: "peerless-inn",
        name: "Peerless Inn",
        rating: 4.2,
        price: "₹4,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "4 km"
      }
    ]
  },
  {
    id: "birla-temple",
    name: "Birla Mandir",
    description: "Also known as Radha Krishna Temple, this white marble temple was built by the industrialist Birla family in 1996 and is dedicated to Lord Krishna and Goddess Radha.",
    imageUrl: "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1606393777429-3962f8faa459?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618782434072-e577be1b2e0c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606294790380-c4b36cfb8401?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "kolkata",
    location: {
      address: "29, Ashutosh Chowdhury Avenue, Ballygunge, Kolkata",
      coordinates: {
        lat: 22.5341,
        lng: 88.3635
      }
    },
    rating: 4.6,
    reviews: [
      {
        id: "bt1",
        user: "user666",
        username: "Rahul D.",
        rating: 5,
        comment: "Beautiful white marble temple with intricate carvings. Very peaceful compared to other temples in the city.",
        date: "2023-12-05"
      },
      {
        id: "bt2",
        user: "user777",
        username: "Kavita P.",
        rating: 4,
        comment: "Clean and well-maintained temple. Evening aarti is a wonderful experience with beautiful bhajans.",
        date: "2023-11-15"
      }
    ],
    transportOptions: {
      car: "Located in south Kolkata, easily accessible by car with parking available.",
      bus: [
        {
          busNumber: "S12C",
          from: "Esplanade",
          to: "Birla Temple",
          stops: ["Park Street", "Ballygunge", "Birla Temple"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "5:30 AM - 11:30 AM, 4:30 PM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "Morning or evening hours, especially during aarti",
    popularFor: "Architecture, spiritual atmosphere, evening aarti",
    localCuisine: [
      {
        name: "Vegetarian Thali",
        description: "Pure vegetarian meals served at restaurants near the temple complex.",
        price: "₹150-250"
      },
      {
        name: "Kheer",
        description: "Sweet rice pudding offered as prasad during festivals at the temple.",
        price: "Free during festivals"
      }
    ],
    nearbyHotels: [
      {
        id: "hindusthan-international",
        name: "Hindusthan International",
        rating: 4.3,
        price: "₹5,500 per night",
        imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        distance: "2 km"
      }
    ]
  },
  {
    id: "iskon-temple",
    name: "ISKCON Temple",
    description: "The ISKCON Temple in Kolkata is dedicated to Lord Krishna and is one of the largest Krishna temples in the world. Known for its beautiful architecture and spiritual ambiance.",
    imageUrl: "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1000&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1615887480363-e6b27cc12de2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618623266812-a0cc5992df13?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592549585866-486f41343aaf?q=80&w=1000&auto=format&fit=crop"
    ],
    category: "temple",
    cityId: "kolkata",
    location: {
      address: "3C Albert Road, Minto Park, Kolkata",
      coordinates: {
        lat: 22.5266,
        lng: 88.3530
      }
    },
    rating: 4.7,
    reviews: [
      {
        id: "it1",
        user: "user888",
        username: "Sanjay M.",
        rating: 5,
        comment: "Beautifully maintained temple with excellent prasadam. The Sunday feast program is a must-attend for visitors.",
        date: "2023-12-15"
      },
      {
        id: "it2",
        user: "user999",
        username: "Anita R.",
        rating: 4,
        comment: "Spiritual and peaceful environment. The evening aarti is mesmerizing with beautiful kirtans.",
        date: "2023-11-20"
      }
    ],
    transportOptions: {
      car: "Located in south-central Kolkata, easily accessible by car with parking available.",
      bus: [
        {
          busNumber: "AB12",
          from: "Esplanade",
          to: "ISKCON Temple",
          stops: ["Park Street", "Loudon Street", "Albert Road"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    timings: "4:30 AM - 12:30 PM, 4:00 PM - 8:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "Evenings for aarti or Sundays for the feast program",
    popularFor: "Krishna consciousness, architecture, prasadam distribution",
    localCuisine: [
      {
        name: "ISKCON Prasadam",
        description: "Sanctified vegetarian food with various dishes prepared according to Vedic principles.",
        price: "Varies based on program"
      },
      {
        name: "Sweets Offering",
        description: "Various milk-based sweets offered to the deities and later distributed to devotees.",
        price: "Available for purchase at temple shop"
      }
    ],
    nearbyHotels: [
      {
        id: "hotel-hindusthan",
        name: "Hotel Hindusthan International",
        rating: 4.3,
        price: "₹6,000 per night",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        distance: "1.5 km"
      }
    ]
  }
];
