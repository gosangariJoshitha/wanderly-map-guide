
import { Attraction } from "@/types";
import ATTRACTIONS from "@/data/attractions";

/**
 * Fetches attractions by city ID
 * @param cityId The ID of the city
 * @returns Promise that resolves to an array of attractions
 */
export const fetchAttractionsByCity = async (cityId: string): Promise<Attraction[]> => {
  // In a real app, this would be an API call
  return new Promise(resolve => {
    setTimeout(() => resolve(ATTRACTIONS[cityId] || []), 500);
  });
};

/**
 * Fetches a specific attraction by ID
 * @param attractionId The ID of the attraction
 * @returns Promise that resolves to an attraction or null if not found
 */
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

/**
 * Gets all attractions regardless of city
 * @returns All attractions from all cities
 */
export const getAllAttractions = (): Attraction[] => {
  return Object.values(ATTRACTIONS).flat();
};

/**
 * Filters attractions by category
 * @param category The category to filter by
 * @returns Attractions in the specified category
 */
export const getAttractionsByCategory = (category: "tourist" | "temple" | "other"): Attraction[] => {
  const allAttractions = getAllAttractions();
  return allAttractions.filter(attraction => attraction.category === category);
};
