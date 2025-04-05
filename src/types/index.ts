export interface City {
  id: string;
  name: string;
  state: string;
  description: string;
  imageUrl: string;
  attractionsCount: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  region: "North" | "South" | "East" | "West";
  bestTimeToVisit: string;
  languages: string[];
  famousFor: string[];
  population: string;
  entryFee?: string;
}

export interface Attraction {
  id: string;
  name: string;
  cityId: string;
  description: string;
  imageUrl: string;
  category: "tourist" | "temple" | "other";
  rating: number;
  reviews: Review[];
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  nearbyHotels?: NearbyHotel[];
  transportOptions: {
    car?: string;
    bus?: BusRoute[];
  };
}

export interface Review {
  id: string;
  userId: string;
  username: string;
  rating: number;
  comment: string;
  date: string;
}

export interface NearbyHotel {
  id: string;
  name: string;
  imageUrl: string;
  rating: number;
  price: string;
  distance: string;
  bookingLink: string;
}

export interface BusRoute {
  busNumber: string;
  from: string;
  to: string;
  stops: string[];
  frequency: string;
}
