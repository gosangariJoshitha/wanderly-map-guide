
import { Attraction } from "@/types";
import { hyderabadAttractions } from "./hyderabad";
import { mumbaiAttractions } from "./mumbai";
import { delhiAttractions } from "./delhi";
import { bengaluruAttractions } from "./bengaluru";
import { kolkataAttractions } from "./kolkata";

// Combine all attractions from all cities
const ATTRACTIONS: Record<string, Attraction[]> = {
  "hyderabad": hyderabadAttractions,
  "mumbai": mumbaiAttractions,
  "delhi": delhiAttractions,
  "bengaluru": bengaluruAttractions,
  "kolkata": kolkataAttractions
};

export default ATTRACTIONS;
