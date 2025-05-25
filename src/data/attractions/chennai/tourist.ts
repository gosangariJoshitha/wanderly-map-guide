import { Attraction } from "@/types";

export const chennaiTouristAttractions: Attraction[] = [
  {
    id: "marina-beach",
    name: "Marina Beach",
    description: "One of the world's longest urban beach stretching over 13 km along the Bay of Bengal. This iconic Chennai landmark features golden sands, historic statues, and a vibrant atmosphere with food stalls and local vendors. The sunrise views are particularly spectacular, and the beach comes alive in the evenings when locals gather to enjoy the sea breeze.",
    imageUrl: "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Marina Beach Road, Chennai, Tamil Nadu 600001",
      coordinates: {
        lat: 13.0499,
        lng: 80.2824
      }
    },
    category: "tourist",
    cityId: "chennai",
    rating: 4.6,
    timings: "Open 24 hours (swimming prohibited due to strong currents)",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or sunset",
    transportOptions: {
      car: "Parking available along the beach road",
      bus: [
        {
          busNumber: "27B",
          from: "Chennai Central",
          to: "Marina Beach",
          stops: ["Central Station", "High Court", "Marina Beach"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "fort-st-george",
    name: "Fort St. George",
    description: "Built in 1644, this is the first English fortress in India and marks the beginning of Chennai as a modern city. The fort houses St. Mary's Church (the oldest Anglican church in India), the Fort Museum with colonial artifacts, and the Tamil Nadu Legislative Assembly. Its historical significance makes it a must-visit for history enthusiasts.",
    imageUrl: "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Fort St George, Chennai, Tamil Nadu 600009",
      coordinates: {
        lat: 13.0798,
        lng: 80.2882
      }
    },
    category: "tourist",
    cityId: "chennai",
    rating: 4.3,
    timings: "9:00 AM - 5:00 PM (Closed on Fridays)",
    entryFee: "₹25 for Indians, ₹300 for foreigners",
    bestTimeToVisit: "Weekday mornings",
    transportOptions: {
      car: "Parking available within fort premises",
      bus: [
        {
          busNumber: "21G",
          from: "T. Nagar",
          to: "Fort St. George",
          stops: ["T. Nagar", "Egmore", "Central", "Fort St. George"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "government-museum",
    name: "Government Museum & National Art Gallery",
    description: "Established in 1851, this is one of India's oldest museums featuring a diverse collection of archaeological findings, sculptures, paintings, and artifacts. The complex includes several buildings housing different galleries, including the Bronze Gallery with exquisite Chola bronzes and the National Art Gallery with traditional Indian paintings. The natural history section with dinosaur fossils is particularly popular with children.",
    imageUrl: "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Pantheon Road, Egmore, Chennai, Tamil Nadu 600008",
      coordinates: {
        lat: 13.0695,
        lng: 80.2613
      }
    },
    category: "tourist",
    cityId: "chennai",
    rating: 4.4,
    timings: "9:30 AM - 5:00 PM (Closed on Fridays)",
    entryFee: "₹20 for Indians, ₹250 for foreigners",
    bestTimeToVisit: "Weekday afternoons",
    transportOptions: {
      car: "Parking available within museum complex",
      bus: [
        {
          busNumber: "27C",
          from: "Chennai Central",
          to: "Egmore Museum",
          stops: ["Central Station", "Egmore Station", "Museum"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "santhome-basilica",
    name: "Santhome Basilica",
    description: "A stunning Neo-Gothic cathedral built in the 16th century over the tomb of St. Thomas, one of Jesus Christ's twelve apostles who is believed to have arrived in India in 52 CE. The white-spired basilica features beautiful stained glass windows depicting the story of St. Thomas and a museum in the basement that houses artifacts related to the apostle. It's one of only three churches worldwide built over the tomb of an apostle.",
    imageUrl: "https://images.unsplash.com/photo-1586368939662-a8a3760c68bb?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1586368939662-a8a3760c68bb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Santhome High Road, Mylapore, Chennai, Tamil Nadu 600004",
      coordinates: {
        lat: 13.0325,
        lng: 80.2778
      }
    },
    category: "tourist",
    cityId: "chennai",
    rating: 4.6,
    timings: "6:00 AM - 8:00 PM",
    entryFee: "Free (Museum: ₹50)",
    bestTimeToVisit: "Morning or late afternoon",
    transportOptions: {
      car: "Parking available near the basilica",
      bus: [
        {
          busNumber: "6D",
          from: "Broadway",
          to: "Santhome",
          stops: ["Broadway", "Mylapore", "Santhome"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "valluvar-kottam",
    name: "Valluvar Kottam",
    description: "A monument dedicated to the classical Tamil poet and philosopher Thiruvalluvar, famous for his work Thirukkural. The impressive structure is built in the form of a temple chariot and houses a life-size statue of the poet. The monument's main hall can seat over 4,000 people and features all 1,330 verses of the Thirukkural carved on granite pillars, preserving this important cultural text for future generations.",
    imageUrl: "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=800&auto=format&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop"
    ],
    location: {
      address: "Valluvar Kottam High Road, Nungambakkam, Chennai, Tamil Nadu 600034",
      coordinates: {
        lat: 13.0570,
        lng: 80.2404
      }
    },
    category: "tourist",
    cityId: "chennai",
    rating: 4.2,
    timings: "8:00 AM - 6:00 PM (Closed on Mondays)",
    entryFee: "₹20 for Indians, ₹100 for foreigners",
    bestTimeToVisit: "Early morning or late afternoon",
    transportOptions: {
      car: "Parking available at the monument",
      bus: [
        {
          busNumber: "23C",
          from: "T. Nagar",
          to: "Valluvar Kottam",
          stops: ["T. Nagar", "Kodambakkam", "Valluvar Kottam"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  }
];
