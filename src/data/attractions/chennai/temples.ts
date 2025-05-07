
import { Attraction } from "@/types";

export const chennaiTempleAttractions: Attraction[] = [
  {
    id: "kapaleeshwarar-temple",
    name: "Kapaleeshwarar Temple",
    description: "One of Chennai's oldest and most famous temples dedicated to Lord Shiva, known for its impressive Dravidian architecture with a towering 120-foot gopuram (gateway tower) adorned with intricate sculptures and carvings. The temple's history dates back to the 7th century, though the current structure was rebuilt in the 16th century.",
    imageUrl: "https://images.unsplash.com/photo-1626196340105-9ec9339b1e6d?q=80&w=800&auto=format&fit=crop",
    location: {
      address: "Mylapore, Chennai, Tamil Nadu 600004",
      coordinates: {
        lat: 13.0335,
        lng: 80.2695
      }
    },
    category: "temple",
    cityId: "chennai",
    rating: 4.7,
    timings: "5:30 AM - 12:00 PM, 4:00 PM - 8:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "Morning or during festival celebrations",
    transportOptions: {
      car: "Limited parking available nearby, best to use ride-sharing services",
      bus: [
        {
          busNumber: "5B",
          from: "T. Nagar",
          to: "Mylapore Temple",
          stops: ["T. Nagar", "Alwarpet", "Mylapore"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "parthasarathy-temple",
    name: "Parthasarathy Temple",
    description: "An 8th-century Hindu Vaishnavite temple dedicated to Lord Krishna, one of the oldest structures in Chennai. The temple features five incarnations of Lord Vishnu and contains inscriptions from the Pallava and Chola periods, making it historically significant. Its beautiful architecture includes carved pillars and elaborate mandapams (halls).",
    imageUrl: "https://images.unsplash.com/photo-1669204184868-d7ce8cb29ed6?q=80&w=800&auto=format&fit=crop",
    location: {
      address: "Triplicane High Road, Triplicane, Chennai, Tamil Nadu 600005",
      coordinates: {
        lat: 13.0561,
        lng: 80.2773
      }
    },
    category: "temple",
    cityId: "chennai",
    rating: 4.6,
    timings: "6:00 AM - 12:30 PM, 4:00 PM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or evening",
    transportOptions: {
      car: "Street parking available",
      bus: [
        {
          busNumber: "27D",
          from: "Broadway",
          to: "Triplicane",
          stops: ["Broadway", "Marina Beach", "Triplicane"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "marundeeswarar-temple",
    name: "Marundeeswarar Temple",
    description: "An ancient temple dedicated to Lord Shiva in his aspect as a healer, dating back to the Chola period. Devotees believe that the deity has healing powers, and many come seeking cures for various ailments. The temple's elegant architecture features impressive gopurams, mandapams, and stone carvings depicting various Hindu gods and goddesses.",
    imageUrl: "https://images.unsplash.com/photo-1668513654913-fecffe7a6dd0?q=80&w=800&auto=format&fit=crop",
    location: {
      address: "Thiruvanmiyur, Chennai, Tamil Nadu 600041",
      coordinates: {
        lat: 12.9873,
        lng: 80.2567
      }
    },
    category: "temple",
    cityId: "chennai",
    rating: 4.5,
    timings: "6:00 AM - 12:00 PM, 4:30 PM - 8:30 PM",
    entryFee: "Free",
    bestTimeToVisit: "Early mornings or during Maha Shivaratri",
    transportOptions: {
      car: "Parking available",
      bus: [
        {
          busNumber: "5E",
          from: "Adyar",
          to: "Thiruvanmiyur",
          stops: ["Adyar", "IIT Madras", "Thiruvanmiyur"],
          frequency: "Every 20 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "vadapalani-murugan-temple",
    name: "Vadapalani Murugan Temple",
    description: "A prominent temple dedicated to Lord Murugan (Kartikeya), the Hindu god of war. Built in the 19th century, it's one of Chennai's most visited temples and is particularly popular among those in the film industry who come to seek blessings. The temple features a golden spire and vimanam (tower above the sanctum), with walls adorned with colorful sculptures.",
    imageUrl: "https://images.unsplash.com/photo-1590058732953-f27bfdb57d9e?q=80&w=800&auto=format&fit=crop",
    location: {
      address: "Vadapalani, Chennai, Tamil Nadu 600026",
      coordinates: {
        lat: 13.0524,
        lng: 80.2124
      }
    },
    category: "temple",
    cityId: "chennai",
    rating: 4.6,
    timings: "5:30 AM - 1:00 PM, 4:00 PM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "During Thai Poosam festival (January-February)",
    transportOptions: {
      car: "Limited parking available",
      bus: [
        {
          busNumber: "11G",
          from: "T. Nagar",
          to: "Vadapalani",
          stops: ["T. Nagar", "Kodambakkam", "Vadapalani"],
          frequency: "Every 10 minutes"
        }
      ]
    },
    reviews: []
  },
  {
    id: "shirdi-sai-baba-temple",
    name: "Shirdi Sai Baba Temple",
    description: "A modern temple dedicated to Shirdi Sai Baba, the 19th-century spiritual master revered by both Hindu and Muslim devotees. The temple's architecture is inspired by the original Shirdi Sai Baba temple in Maharashtra, featuring a central shrine with a life-sized statue of Sai Baba. The peaceful atmosphere makes it a popular destination for meditation and spiritual reflection.",
    imageUrl: "https://images.unsplash.com/photo-1669204184868-d7ce8cb29ed6?q=80&w=800&auto=format&fit=crop",
    location: {
      address: "Mylapore, Chennai, Tamil Nadu 600004",
      coordinates: {
        lat: 13.0371,
        lng: 80.2677
      }
    },
    category: "temple",
    cityId: "chennai",
    rating: 4.5,
    timings: "6:00 AM - 12:00 PM, 4:00 PM - 9:00 PM",
    entryFee: "Free",
    bestTimeToVisit: "Thursday evenings for special aarti",
    transportOptions: {
      car: "Parking available at temple premises",
      bus: [
        {
          busNumber: "23A",
          from: "T. Nagar",
          to: "Mylapore",
          stops: ["T. Nagar", "Alwarpet", "Mylapore"],
          frequency: "Every 15 minutes"
        }
      ]
    },
    reviews: []
  }
];
