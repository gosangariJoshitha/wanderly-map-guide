
import { Attraction } from "@/types";
import { hyderabadAttractions } from "./hyderabad";
import { mumbaiAttractions } from "./mumbai";

// Combine all attractions from all cities
const ATTRACTIONS: Record<string, Attraction[]> = {
  "hyderabad": hyderabadAttractions,
  "mumbai": mumbaiAttractions
};

export default ATTRACTIONS;
