
import { Attraction } from "@/types";
import { hyderabadAttractions } from "./hyderabad";
import { mumbaiAttractions } from "./mumbai";
import { delhiAttractions } from "./delhi";

// Combine all attractions from all cities
const ATTRACTIONS: Record<string, Attraction[]> = {
  "hyderabad": hyderabadAttractions,
  "mumbai": mumbaiAttractions,
  "delhi": delhiAttractions
};

export default ATTRACTIONS;
