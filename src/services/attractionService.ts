
import { Attraction } from "@/types";

const ATTRACTIONS: Record<string, Attraction[]> = {
  "hyderabad": [
    // Tourist Places
    {
      id: "charminar",
      name: "Charminar",
      description: "Built in 1591, this iconic monument is a symbol of Hyderabad with its four grand arches and minarets. The structure was built to commemorate the eradication of plague from the city and houses a mosque on its top floor.",
      imageUrl: "https://images.unsplash.com/photo-1588416499018-d8c621e3e257?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      category: "tourist",
      entryFee: "₹25 for Indians, ₹300 for foreigners",
      timings: "9:00 AM - 5:30 PM (Closed on Fridays)",
      bestTimeToVisit: "October to March"
    },
    {
      id: "golconda-fort",
      name: "Golconda Fort",
      description: "This majestic fort dating back to the 13th century features impressive acoustic effects where a hand clap at the entrance can be heard at the highest point. The fort was once home to the famous Kohinoor diamond.",
      imageUrl: "https://images.unsplash.com/photo-1590063603240-71d53e69dbc6?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      category: "tourist",
      entryFee: "₹20 for Indians, ₹200 for foreigners",
      timings: "8:00 AM - 5:30 PM",
      bestTimeToVisit: "November to February"
    },
    {
      id: "salar-jung-museum",
      name: "Salar Jung Museum",
      description: "One of the three National Museums of India, it houses a unique collection of sculptures, paintings, carvings, and other artifacts from around the world, including the famous Veiled Rebecca sculpture.",
      imageUrl: "https://images.unsplash.com/photo-1613727798351-1c890fd8b98c?q=80&w=800&auto=format&fit=crop",
      rating: 4.6,
      category: "tourist",
      entryFee: "₹20 for Indians, ₹500 for foreigners",
      timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "ramoji-film-city",
      name: "Ramoji Film City",
      description: "Recognized by the Guinness Book of World Records as the world's largest film studio complex, it spans 1,666 acres and offers tours, attractions, and a glimpse into movie production.",
      imageUrl: "https://images.unsplash.com/photo-1533075377664-f5c0cbc5a91c?q=80&w=800&auto=format&fit=crop",
      rating: 4.3,
      category: "tourist",
      entryFee: "₹1,500 onwards",
      timings: "9:00 AM - 5:30 PM",
      bestTimeToVisit: "October to March"
    },
    {
      id: "hussain-sagar",
      name: "Hussain Sagar Lake",
      description: "This heart-shaped artificial lake built in 1563 features a massive 18-meter tall Buddha statue installed on Gibraltar Rock in the middle of the lake. Boat rides and the surrounding Lumbini Park are popular attractions.",
      imageUrl: "https://images.unsplash.com/photo-1626931067455-bc3ed7f75b99?q=80&w=800&auto=format&fit=crop",
      rating: 4.4,
      category: "tourist",
      entryFee: "Free (boat rides extra)",
      timings: "24 hours (boat rides 8:00 AM - 9:00 PM)",
      bestTimeToVisit: "September to March"
    },
    
    // Temples
    {
      id: "birla-mandir",
      name: "Birla Mandir",
      description: "This stunning white marble temple dedicated to Lord Venkateshwara stands on a 280-foot high hill called Naubath Pahad. Built in 1976, it offers panoramic views of the city and Twin Lakes.",
      imageUrl: "https://images.unsplash.com/photo-1613570192443-5dddc3c16390?q=80&w=800&auto=format&fit=crop",
      rating: 4.8,
      category: "temple",
      entryFee: "Free",
      timings: "7:00 AM - 12:00 PM, 3:00 PM - 9:00 PM",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "mecca-masjid",
      name: "Mecca Masjid",
      description: "One of the oldest and largest mosques in India, it was built in 1614 during Muhammad Quli Qutb Shah's reign. The main hall can accommodate 10,000 worshippers, and bricks made from soil brought from Mecca are used in the central arch.",
      imageUrl: "https://images.unsplash.com/photo-1621495471660-e1fc467c8731?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      category: "temple",
      entryFee: "Free",
      timings: "4:00 AM - 9:30 PM (Closed during prayer times)",
      bestTimeToVisit: "October to March"
    },
    {
      id: "jagannath-temple",
      name: "Jagannath Temple",
      description: "A replica of the famous Jagannath Temple of Puri, this temple in Hyderabad is dedicated to Lord Jagannath, Lord Balabhadra, and Devi Subhadra. The annual Rath Yatra festival draws thousands of devotees.",
      imageUrl: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?q=80&w=800&auto=format&fit=crop",
      rating: 4.6,
      category: "temple",
      entryFee: "Free",
      timings: "5:00 AM - 12:00 PM, 4:00 PM - 8:30 PM",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "chilkur-balaji-temple",
      name: "Chilkur Balaji Temple",
      description: "Known as 'Visa Balaji Temple', it's famous for granting visa wishes to devotees who circumambulate the shrine 11 times. It's one of the oldest temples in Hyderabad, dating back to the 10th century.",
      imageUrl: "https://images.unsplash.com/photo-1613727799683-a152038ec306?q=80&w=800&auto=format&fit=crop",
      rating: 4.7,
      category: "temple",
      entryFee: "Free",
      timings: "5:00 AM - 8:00 PM",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "shri-peddamma-temple",
      name: "Shri Peddamma Temple",
      description: "This temple dedicated to Goddess Peddamma (a form of Durga) is one of the oldest and most popular temples in the Jubilee Hills area of Hyderabad. The annual Bonalu festival is celebrated with great enthusiasm here.",
      imageUrl: "https://images.unsplash.com/photo-1582717171950-a54fa275cb62?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      category: "temple",
      entryFee: "Free",
      timings: "6:00 AM - 9:00 PM",
      bestTimeToVisit: "Year-round"
    },
    
    // Other Attractions
    {
      id: "nizam-museum",
      name: "Nizam's Museum",
      description: "This museum showcases the gifts and memorabilia received by the last Nizam of Hyderabad, Mir Osman Ali Khan. Highlights include a 1930s Rolls Royce, gold burnished wooden throne, and the world's largest wardrobe.",
      imageUrl: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=800&auto=format&fit=crop",
      rating: 4.2,
      category: "other",
      entryFee: "₹100 for Indians, ₹200 for foreigners",
      timings: "10:00 AM - 5:00 PM (Closed on Fridays)",
      bestTimeToVisit: "October to March"
    },
    {
      id: "lumbini-park",
      name: "Lumbini Park",
      description: "Named after Buddha's birthplace, this urban park offers musical fountain shows, laser shows, and boating facilities. Located near Hussain Sagar Lake, it's a perfect evening destination for families.",
      imageUrl: "https://images.unsplash.com/photo-1516214104703-d870798883c5?q=80&w=800&auto=format&fit=crop",
      rating: 4.1,
      category: "other",
      entryFee: "₹10 for entry, ₹50 for laser show",
      timings: "9:00 AM - 9:00 PM",
      bestTimeToVisit: "October to February"
    },
    {
      id: "nehru-zoological-park",
      name: "Nehru Zoological Park",
      description: "One of the largest zoos in India, it houses nearly 1,500 species of birds, animals, and reptiles in near-natural habitats. The zoo also features a natural history museum and a train ride through the premises.",
      imageUrl: "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?q=80&w=800&auto=format&fit=crop",
      rating: 4.3,
      category: "other",
      entryFee: "₹40 for adults, ₹20 for children",
      timings: "8:00 AM - 5:00 PM (Closed on Mondays)",
      bestTimeToVisit: "October to March"
    },
    {
      id: "shilparamam",
      name: "Shilparamam",
      description: "This arts and crafts village showcases traditional handicrafts from different parts of India. With artificial waterfalls, rock formations, and an ethnic museum, it offers insights into rural Indian lifestyle.",
      imageUrl: "https://images.unsplash.com/photo-1558383385-c33cb4fbc2dc?q=80&w=800&auto=format&fit=crop",
      rating: 4.4,
      category: "other",
      entryFee: "₹20 for adults, ₹10 for children",
      timings: "10:30 AM - 8:00 PM",
      bestTimeToVisit: "October to March"
    },
    {
      id: "kbr-national-park",
      name: "KBR National Park",
      description: "Formerly the hunting grounds of the Nizams, this 400-acre urban jungle offers walking trails, jogging tracks, and opportunities to spot over 600 plant species and 140 bird species. A peaceful retreat in the bustling city.",
      imageUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop",
      rating: 4.5,
      category: "other",
      entryFee: "₹25 per person",
      timings: "5:30 AM - 10:00 AM, 4:00 PM - 6:30 PM (Closed on Mondays)",
      bestTimeToVisit: "October to February"
    }
  ],
  "mumbai": [
    {
      id: "gateway-of-india",
      name: "Gateway of India",
      description: "An iconic arch-monument built during the British Raj, overlooking the Arabian Sea.",
      imageUrl: "https://example.com/gateway.jpg",
      rating: 4.5,
      category: "tourist",
      entryFee: "Free",
      timings: "24 hours",
      bestTimeToVisit: "October to March"
    },
    {
      id: "marine-drive",
      name: "Marine Drive",
      description: "A scenic promenade along the Arabian Sea, also known as the Queen's Necklace.",
      imageUrl: "https://example.com/marine.jpg",
      rating: 4.6,
      category: "tourist",
      entryFee: "Free",
      timings: "24 hours",
      bestTimeToVisit: "October to March"
    },
    {
      id: "shri-siddhivinayak-temple",
      name: "Shri Siddhivinayak Temple",
      description: "A famous Hindu temple dedicated to Lord Ganesha.",
      imageUrl: "https://example.com/siddhivinayak.jpg",
      rating: 4.7,
      category: "temple",
      entryFee: "Free",
      timings: "6:00 AM - 10:00 PM",
      bestTimeToVisit: "Year-round"
    },
    {
      id: "kanheri-caves",
      name: "Kanheri Caves",
      description: "Ancient Buddhist caves located within the Sanjay Gandhi National Park.",
      imageUrl: "https://example.com/kanheri.jpg",
      rating: 4.3,
      category: "other",
      entryFee: "₹15 for Indians, ₹200 for foreigners",
      timings: "9:00 AM - 5:00 PM (Closed on Mondays)",
      bestTimeToVisit: "October to March"
    }
  ]
};

export const fetchAttractionsByCity = async (cityId: string): Promise<Attraction[]> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => resolve(ATTRACTIONS[cityId] || []), 500);
  });
};

export const fetchAttractionById = async (attractionId: string): Promise<Attraction | null> => {
  // In a real app, this would be an API call to fetch a specific attraction
  return new Promise(resolve => {
    // Search for the attraction in all cities
    for (const cityAttractions of Object.values(ATTRACTIONS)) {
      const attraction = cityAttractions.find(attr => attr.id === attractionId);
      if (attraction) {
        return resolve(attraction);
      }
    }
    resolve(null);
  });
};
