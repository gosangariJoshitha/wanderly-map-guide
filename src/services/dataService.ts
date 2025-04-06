import { City } from "@/types";

export const CITIES: City[] = [
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    description: "India's financial capital, known for colonial architecture, beaches, and Bollywood.",
    imageUrl: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 42,
    coordinates: {
      lat: 19.076,
      lng: 72.8777
    },
    region: "West",
    bestTimeToVisit: "October to March",
    languages: ["Marathi", "Hindi", "English"],
    famousFor: ["Bollywood", "Gateway of India", "Marine Drive"],
    population: "20.4 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    description: "The City of Pearls with rich Nizami heritage, famous for biryani and historical monuments.",
    imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 37,
    coordinates: {
      lat: 17.385,
      lng: 78.4867
    },
    region: "South",
    bestTimeToVisit: "September to March",
    languages: ["Telugu", "Urdu", "Hindi", "English"],
    famousFor: ["Biryani", "Charminar", "Golconda Fort"],
    population: "10.5 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    description: "India's Silicon Valley with pleasant climate, beautiful parks, and vibrant nightlife.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 29,
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    },
    region: "South",
    bestTimeToVisit: "September to February",
    languages: ["Kannada", "English", "Tamil", "Telugu"],
    famousFor: ["IT Industry", "Gardens", "Microbreweries"],
    population: "12.3 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    description: "Cultural capital of India known for literature, art, and the iconic Howrah Bridge.",
    imageUrl: "https://images.unsplash.com/photo-1558508893-fef085c41376?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 33,
    coordinates: {
      lat: 22.5726,
      lng: 88.3639
    },
    region: "East",
    bestTimeToVisit: "October to March",
    languages: ["Bengali", "Hindi", "English"],
    famousFor: ["Durga Puja", "Howrah Bridge", "Rasgulla"],
    population: "14.8 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    description: "The Pink City famous for stunning architecture, royal heritage, and colorful markets.",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 28,
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "Rajasthani", "English"],
    famousFor: ["Amber Fort", "Hawa Mahal", "Handicrafts"],
    population: "3.1 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free (monuments have separate fees)"
  },
  {
    id: "pune",
    name: "Pune",
    state: "Maharashtra",
    description: "Known as the 'Oxford of the East', with rich historical significance, educational institutions, and thriving IT sector.",
    imageUrl: "https://images.unsplash.com/photo-1558383817-6a5d08baee7f?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 26,
    coordinates: {
      lat: 18.5204,
      lng: 73.8567
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Marathi", "Hindi", "English"],
    famousFor: ["Shaniwar Wada", "Aga Khan Palace"],
    population: "3.5 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    description: "The cultural hub of South India, known for its beaches, temples, and classical music and dance traditions.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 31,
    coordinates: {
      lat: 13.0827,
      lng: 80.2707
    },
    region: "South",
    bestTimeToVisit: "November to February",
    languages: ["Tamil", "English"],
    famousFor: ["Marina Beach", "Kapaleeshwarar Temple", "Carnatic Music"],
    population: "10.9 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    description: "A port city with beautiful beaches, hills, and valleys along the East Coast.",
    imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 22,
    coordinates: {
      lat: 17.6868,
      lng: 83.2185
    },
    region: "East",
    bestTimeToVisit: "October to March",
    languages: ["Telugu", "English"],
    famousFor: ["Ramakrishna Beach", "Kailasagiri Hill", "INS Kurusura Submarine Museum"],
    population: "2.5 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "One of the world's oldest continuously inhabited cities, sacred to Hindus.",
    imageUrl: "https://images.unsplash.com/photo-1561361058-c24e021e2964?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 24,
    coordinates: {
      lat: 25.3176,
      lng: 82.9739
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "Bhojpuri"],
    famousFor: ["Ghats", "Ganga Aarti", "Silk Sarees"],
    population: "1.2 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free (some ghats have viewing fees)"
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    description: "Home to the iconic Taj Mahal, with rich Mughal heritage and stunning architecture.",
    imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 19,
    coordinates: {
      lat: 27.1767,
      lng: 78.0081
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "English"],
    famousFor: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri"],
    population: "1.5 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free (monuments have separate fees)"
  },
  {
    id: "vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    description: "A major commercial center on the banks of the Krishna River, known as the 'Business Capital of Andhra Pradesh'.",
    imageUrl: "https://images.unsplash.com/photo-1623097832828-52985cc87cc1?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 18,
    coordinates: {
      lat: 16.5062,
      lng: 80.6480
    },
    region: "South",
    bestTimeToVisit: "October to March",
    languages: ["Telugu", "English"],
    famousFor: ["Kanaka Durga Temple", "Prakasam Barrage"],
    population: "1.8 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "surat",
    name: "Surat",
    state: "Gujarat",
    description: "Known as the 'Diamond City' and 'Textile City' of India, a major industrial hub and commercial center.",
    imageUrl: "https://images.unsplash.com/photo-1612861489262-bf248ae2c94f?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 15,
    coordinates: {
      lat: 21.1702,
      lng: 72.8311
    },
    region: "West",
    bestTimeToVisit: "October to March",
    languages: ["Gujarati", "English"],
    famousFor: ["Dutch Gardens", "Surat Castle", "Dumas Beach"],
    population: "2.2 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    description: "The 'City of Nawabs', known for its Nawabi culture, exquisite cuisine, architecture, and traditional crafts.",
    imageUrl: "https://images.unsplash.com/photo-1627301517082-56449eb4aa6f?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 25,
    coordinates: {
      lat: 26.8467,
      lng: 80.9462
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "English"],
    famousFor: ["Bara Imambara", "Chota Imambara", "Tunday Kebabs"],
    population: "1.7 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    description: "India's capital with a blend of ancient history and modern development.",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 51,
    coordinates: {
      lat: 28.6139,
      lng: 77.209
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "Punjabi", "Urdu", "English"],
    famousFor: ["Red Fort", "India Gate", "Street Food"],
    population: "29.6 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free (monuments have separate fees)"
  },
  {
    id: "prayagraj",
    name: "Prayagraj (Allahabad)",
    state: "Uttar Pradesh",
    description: "The holy city at the confluence of the Ganges, Yamuna, and mythical Saraswati rivers.",
    imageUrl: "https://images.unsplash.com/photo-1615031335148-079791f09927?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 20,
    coordinates: {
      lat: 25.4358,
      lng: 81.8463
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "English"],
    famousFor: ["Triveni Sangam", "Allahabad Fort"],
    population: "1.3 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad",
    state: "Gujarat",
    description: "Gujarat's largest city with a rich architectural heritage, textiles, and a vibrant cultural scene.",
    imageUrl: "https://images.unsplash.com/photo-1558383738-8e1da9a45d82?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 27,
    coordinates: {
      lat: 23.0225,
      lng: 72.5714
    },
    region: "West",
    bestTimeToVisit: "October to March",
    languages: ["Gujarati", "English"],
    famousFor: ["Sabarmati Ashram", "Sidi Saiyyed Mosque", "Stepwells"],
    population: "2.7 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "srinagar",
    name: "Srinagar",
    state: "Jammu & Kashmir",
    description: "The summer capital of Jammu and Kashmir, known for its gardens, lakes, houseboats, and stunning natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1614591276564-7b35c04f3607?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 23,
    coordinates: {
      lat: 34.0837,
      lng: 74.7973
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Urdu", "English"],
    famousFor: ["Dal Lake", "Mughal Gardens", "Shankaracharya Temple"],
    population: "1.1 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "amritsar",
    name: "Amritsar",
    state: "Punjab",
    description: "Home to the Golden Temple, this holy city is the spiritual and cultural center of the Sikh religion.",
    imageUrl: "https://images.unsplash.com/photo-1578898395416-78920d5eb999?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 18,
    coordinates: {
      lat: 31.6340,
      lng: 74.8723
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Punjabi", "English"],
    famousFor: ["Golden Temple", "Jallianwala Bagh", "Wagah Border"],
    population: "1.8 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "ranchi",
    name: "Ranchi",
    state: "Jharkhand",
    description: "The capital of Jharkhand surrounded by waterfalls and hills, known for its tribal culture and natural beauty.",
    imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 15,
    coordinates: {
      lat: 23.3441,
      lng: 85.3096
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Bengali", "English"],
    famousFor: ["Dassam Falls", "Hundru Falls", "Tagore Hill"],
    population: "1.5 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    description: "A major industrial city known as the 'Manchester of South India', with pleasant climate and surrounded by the Western Ghats.",
    imageUrl: "https://images.unsplash.com/photo-1611911006752-b49c5672559a?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 17,
    coordinates: {
      lat: 11.0168,
      lng: 76.9558
    },
    region: "South",
    bestTimeToVisit: "October to March",
    languages: ["Tamil", "English"],
    famousFor: ["Marudamalai Temple", "Siruvani Falls", "VOC Park"],
    population: "1.7 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "madurai",
    name: "Madurai",
    state: "Tamil Nadu",
    description: "One of the oldest continuously inhabited cities in the world, known for the magnificent Meenakshi Temple.",
    imageUrl: "https://images.unsplash.com/photo-1621532798365-29f9a11f0ff5?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 20,
    coordinates: {
      lat: 9.9252,
      lng: 78.1198
    },
    region: "South",
    bestTimeToVisit: "October to March",
    languages: ["Tamil", "English"],
    famousFor: ["Gandhi Memorial Museum", "Thirumalai Nayakkar Palace"],
    population: "1.2 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "kota",
    name: "Kota",
    state: "Rajasthan",
    description: "An education hub and industrial city on the banks of the Chambal River, known for its coaching institutes.",
    imageUrl: "https://images.unsplash.com/photo-1619866551272-d95b33c146e1?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 12,
    coordinates: {
      lat: 25.2138,
      lng: 75.8648
    },
    region: "North",
    bestTimeToVisit: "October to March",
    languages: ["Hindi", "English"],
    famousFor: ["Kishore Sagar Lake", "Jagmandir Palace", "Chambal Gardens"],
    population: "1.2 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "warangal",
    name: "Warangal",
    state: "Telangana",
    description: "The cultural center of Telangana, known for its rich history, lakes, temples, and architectural heritage.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 14,
    coordinates: {
      lat: 17.9689,
      lng: 79.5941
    },
    region: "South",
    bestTimeToVisit: "October to March",
    languages: ["Telugu", "English"],
    famousFor: ["Warangal Fort", "Thousand Pillar Temple", "Ramappa Temple"],
    population: "1.4 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  },
  {
    id: "tirupathi",
    name: "Tirupathi",
    state: "Andhra Pradesh",
    description: "A major pilgrimage center and home to the Sri Venkateswara Temple, one of the most visited religious sites in the world.",
    imageUrl: "https://images.unsplash.com/photo-1584811644165-33828482b565?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 16,
    coordinates: {
      lat: 13.6288,
      lng: 79.4192
    },
    region: "South",
    bestTimeToVisit: "October to March",
    languages: ["Telugu", "English"],
    famousFor: ["Chandragiri Fort", "ISKCON Temple", "Silathoranam Geological Formations"],
    population: "1.6 million",
    currency: "Indian Rupee (INR)",
    entryFee: "Free"
  }
];

export const fetchCities = async (): Promise<City[]> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => resolve(CITIES), 500);
  });
};

export const fetchCityById = async (cityId: string): Promise<City | undefined> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => resolve(CITIES.find(city => city.id === cityId)), 500);
  });
};
