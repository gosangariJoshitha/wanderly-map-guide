
import { City } from "@/types";

export const CITIES: City[] = [
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    description: "The city of dreams and India's financial capital, known for its colonial architecture, beaches, and Bollywood industry.",
    imageUrl: "https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 42,
    coordinates: {
      lat: 19.076,
      lng: 72.8777
    }
  },
  {
    id: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    description: "The City of Pearls with a rich history of Nizams, famous for its biryani, historical monuments, and tech industry.",
    imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 37,
    coordinates: {
      lat: 17.385,
      lng: 78.4867
    }
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    description: "India's Silicon Valley, known for pleasant climate, beautiful parks, vibrant nightlife, and innovation.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 29,
    coordinates: {
      lat: 12.9716,
      lng: 77.5946
    }
  },
  {
    id: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    description: "The cultural capital of India, known for its literature, art, cuisine, and the iconic Howrah Bridge.",
    imageUrl: "https://images.unsplash.com/photo-1558508893-fef085c41376?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 33,
    coordinates: {
      lat: 22.5726,
      lng: 88.3639
    }
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    description: "The Pink City of India, famous for its stunning architecture, royal heritage, and colorful markets.",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 28,
    coordinates: {
      lat: 26.9124,
      lng: 75.7873
    }
  },
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    description: "India's capital city, a blend of ancient history and modern development with iconic landmarks and diverse culture.",
    imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 51,
    coordinates: {
      lat: 28.6139,
      lng: 77.209
    }
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
    }
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "One of the world's oldest continuously inhabited cities, sacred to Hindus, with beautiful ghats along the Ganges.",
    imageUrl: "https://images.unsplash.com/photo-1561361058-c24e021e2964?q=80&w=800&auto=format&fit=crop",
    attractionsCount: 24,
    coordinates: {
      lat: 25.3176,
      lng: 82.9739
    }
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
