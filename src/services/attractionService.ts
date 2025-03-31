
import { Attraction } from "@/types";

export const HYDERABAD_ATTRACTIONS: Attraction[] = [
  {
    id: "charminar",
    name: "Charminar",
    cityId: "hyderabad",
    description: "The Charminar ('Four Minarets') is a monument and mosque in Hyderabad, built in 1591 by Muhammad Quli Qutb Shah. It is a symbol of Hyderabad and is listed among the most recognized structures in India.",
    imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
    category: "tourist",
    rating: 4.5,
    reviews: [
      {
        id: "rev1",
        userId: "user1",
        username: "TravelLover",
        rating: 5,
        comment: "This is a must-visit historical monument in Hyderabad. The architecture is amazing!",
        date: "2023-05-15"
      },
      {
        id: "rev2",
        userId: "user2",
        username: "HistoryBuff",
        rating: 4,
        comment: "Beautiful structure with rich history. Can get crowded though.",
        date: "2023-06-22"
      }
    ],
    location: {
      address: "Charminar Rd, Char Kaman, Ghansi Bazaar, Hyderabad, Telangana 500002",
      coordinates: {
        lat: 17.3616,
        lng: 78.4747
      }
    },
    nearbyHotels: [
      {
        id: "hotel1",
        name: "Taj Falaknuma Palace",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.8,
        price: "₹24,000",
        distance: "5.2 km",
        bookingLink: "#"
      },
      {
        id: "hotel2",
        name: "ITC Kohenur",
        imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=800&auto=format&fit=crop",
        rating: 4.6,
        price: "₹12,500",
        distance: "7.8 km",
        bookingLink: "#"
      }
    ],
    transportOptions: {
      car: "Available from all major locations. Parking facilities nearby at Charminar Bus Stand.",
      bus: [
        {
          busNumber: "5K",
          from: "Secunderabad",
          to: "Charminar",
          stops: ["Paradise", "Begumpet", "Khairatabad", "Lakdikapul", "Afzalgunj"],
          frequency: "Every 15 minutes"
        },
        {
          busNumber: "9M",
          from: "Mehdipatnam",
          to: "Charminar",
          stops: ["Masab Tank", "Nampally", "Koti", "Sultan Bazaar"],
          frequency: "Every 20 minutes"
        }
      ]
    }
  },
  {
    id: "golconda-fort",
    name: "Golconda Fort",
    cityId: "hyderabad",
    description: "Golconda Fort is a magnificent fortress complex dating back to the 16th century. Known for its acoustical effects, innovative water supply system, and impressive architecture.",
    imageUrl: "https://images.unsplash.com/photo-1627301517344-9bc40824599b?q=80&w=800&auto=format&fit=crop",
    category: "tourist",
    rating: 4.6,
    reviews: [
      {
        id: "rev3",
        userId: "user3",
        username: "FortExplorer",
        rating: 5,
        comment: "One of the best preserved forts in India. The sound system at the entrance is fascinating!",
        date: "2023-07-10"
      }
    ],
    location: {
      address: "Golconda Fort, Hyderabad, Telangana 500008",
      coordinates: {
        lat: 17.3833,
        lng: 78.4011
      }
    },
    nearbyHotels: [
      {
        id: "hotel3",
        name: "Taj Banjara",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop",
        rating: 4.3,
        price: "₹8,500",
        distance: "6.5 km",
        bookingLink: "#"
      }
    ],
    transportOptions: {
      car: "Available from all major locations. Parking available at the fort.",
      bus: [
        {
          busNumber: "66",
          from: "Secunderabad",
          to: "Golconda",
          stops: ["Parade Grounds", "Begumpet", "Towlichowki"],
          frequency: "Every 30 minutes"
        }
      ]
    }
  },
  {
    id: "hussain-sagar",
    name: "Hussain Sagar Lake",
    cityId: "hyderabad",
    description: "A large heart-shaped lake in the center of Hyderabad, built in 1562. Features a giant monolithic statue of Buddha in the middle and offers boating experiences.",
    imageUrl: "https://images.unsplash.com/photo-1583075410970-1d3c2374d90c?q=80&w=800&auto=format&fit=crop",
    category: "tourist",
    rating: 4.3,
    reviews: [
      {
        id: "rev4",
        userId: "user4",
        username: "PeaceLover",
        rating: 4,
        comment: "Beautiful lake, especially during sunset. The Buddha statue is impressive.",
        date: "2023-08-05"
      }
    ],
    location: {
      address: "Tank Bund Rd, Hyderabad, Telangana",
      coordinates: {
        lat: 17.4239,
        lng: 78.4738
      }
    },
    transportOptions: {
      car: "Available from all parts of the city. Parking available at Tank Bund and Lumbini Park.",
      bus: [
        {
          busNumber: "10K",
          from: "Secunderabad",
          to: "Tank Bund",
          stops: ["Paradise", "Begumpet", "Khairatabad"],
          frequency: "Every 20 minutes"
        }
      ]
    }
  },
  {
    id: "birla-mandir",
    name: "Birla Mandir",
    cityId: "hyderabad",
    description: "A beautiful Hindu temple dedicated to Lord Venkateshwara, built with white marble on a hilltop offering panoramic views of the city and Hussain Sagar lake.",
    imageUrl: "https://images.unsplash.com/photo-1631774834039-a57a688968dd?q=80&w=800&auto=format&fit=crop",
    category: "temple",
    rating: 4.7,
    reviews: [
      {
        id: "rev5",
        userId: "user5",
        username: "SpiritualSeeker",
        rating: 5,
        comment: "Serene and peaceful temple with beautiful architecture. The view from the top is breathtaking!",
        date: "2023-09-12"
      }
    ],
    location: {
      address: "Birla Mandir Rd, Ambedkar Colony, Khairatabad, Hyderabad, Telangana 500004",
      coordinates: {
        lat: 17.4062,
        lng: 78.4691
      }
    },
    transportOptions: {
      car: "Available from all parts of the city. Limited parking available.",
      bus: [
        {
          busNumber: "1K",
          from: "Secunderabad",
          to: "Birla Mandir",
          stops: ["Paradise", "Begumpet", "Khairatabad"],
          frequency: "Every 25 minutes"
        }
      ]
    }
  }
];

export const fetchAttractionsByCity = async (cityId: string): Promise<Attraction[]> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    if (cityId === "hyderabad") {
      setTimeout(() => resolve(HYDERABAD_ATTRACTIONS), 500);
    } else {
      // For now, return an empty array for other cities
      setTimeout(() => resolve([]), 500);
    }
  });
};

export const fetchAttractionById = async (attractionId: string): Promise<Attraction | undefined> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    const allAttractions = [...HYDERABAD_ATTRACTIONS];
    setTimeout(() => resolve(allAttractions.find(attr => attr.id === attractionId)), 500);
  });
};
