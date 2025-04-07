
import { Attraction } from "@/types";

export const chennaiTouristAttractions: Attraction[] = [
  {
    id: "marina-beach",
    name: "Marina Beach",
    description: "One of the world's longest urban beaches stretching over 13 km along the Bay of Bengal. This iconic Chennai landmark features golden sands, historic statues, and a vibrant atmosphere with food stalls and local vendors. The sunrise views are particularly spectacular, and the beach comes alive in the evenings when locals gather to enjoy the sea breeze.",
    imageUrl: "https://images.unsplash.com/photo-1590058767697-ad333827f982?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "Open 24 hours (swimming prohibited due to strong currents)",
    entryFee: "Free",
    bestTimeToVisit: "Early morning or sunset",
    tips: [
      "Visit early morning to avoid crowds and heat",
      "Don't miss the famous street food, especially sundal (spiced chickpeas)",
      "Swimming is dangerous and not allowed due to strong undercurrents"
    ]
  },
  {
    id: "fort-st-george",
    name: "Fort St. George",
    description: "Built in 1644, this is the first English fortress in India and marks the beginning of Chennai as a modern city. The fort houses St. Mary's Church (the oldest Anglican church in India), the Fort Museum with colonial artifacts, and the Tamil Nadu Legislative Assembly. Its historical significance makes it a must-visit for history enthusiasts.",
    imageUrl: "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "9:00 AM - 5:00 PM (Closed on Fridays)",
    entryFee: "₹25 for Indians, ₹300 for foreigners",
    bestTimeToVisit: "Weekday mornings",
    tips: [
      "Visit the museum to see artifacts from British colonial periods",
      "St. Mary's Church within the fort is worth visiting",
      "Carry water and wear comfortable shoes as there's significant walking involved"
    ]
  },
  {
    id: "government-museum",
    name: "Government Museum & National Art Gallery",
    description: "Established in 1851, this is one of India's oldest museums featuring a diverse collection of archaeological findings, sculptures, paintings, and artifacts. The complex includes several buildings housing different galleries, including the Bronze Gallery with exquisite Chola bronzes and the National Art Gallery with traditional Indian paintings. The natural history section with dinosaur fossils is particularly popular with children.",
    imageUrl: "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "9:30 AM - 5:00 PM (Closed on Fridays)",
    entryFee: "₹20 for Indians, ₹250 for foreigners",
    bestTimeToVisit: "Weekday afternoons",
    tips: [
      "Plan at least 3 hours to explore the various galleries",
      "The Bronze Gallery is a highlight and shouldn't be missed",
      "Photography is permitted but without flash"
    ]
  },
  {
    id: "santhome-basilica",
    name: "Santhome Basilica",
    description: "A stunning Neo-Gothic cathedral built in the 16th century over the tomb of St. Thomas, one of Jesus Christ's twelve apostles who is believed to have arrived in India in 52 CE. The white-spired basilica features beautiful stained glass windows depicting the story of St. Thomas and a museum in the basement that houses artifacts related to the apostle. It's one of only three churches worldwide built over the tomb of an apostle.",
    imageUrl: "https://images.unsplash.com/photo-1586368939662-a8a3760c68bb?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "6:00 AM - 8:00 PM",
    entryFee: "Free (Museum: ₹50)",
    bestTimeToVisit: "Morning or late afternoon",
    tips: [
      "Don't miss the museum in the basement",
      "Visit around sunset when the white façade glows beautifully",
      "Dress modestly as it's a place of worship"
    ]
  },
  {
    id: "valluvar-kottam",
    name: "Valluvar Kottam",
    description: "A monument dedicated to the classical Tamil poet and philosopher Thiruvalluvar, famous for his work Thirukkural. The impressive structure is built in the form of a temple chariot and houses a life-size statue of the poet. The monument's main hall can seat over 4,000 people and features all 1,330 verses of the Thirukkural carved on granite pillars, preserving this important cultural text for future generations.",
    imageUrl: "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=800&auto=format&fit=crop",
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
    openingHours: "8:00 AM - 6:00 PM (Closed on Mondays)",
    entryFee: "₹20 for Indians, ₹100 for foreigners",
    bestTimeToVisit: "Early morning or late afternoon",
    tips: [
      "The intricate carvings are worth studying closely",
      "Visit during weekdays to avoid crowds",
      "The surrounding gardens offer a peaceful retreat from the city"
    ]
  }
];
