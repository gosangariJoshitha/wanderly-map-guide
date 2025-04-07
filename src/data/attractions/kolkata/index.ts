
import { Attraction } from "@/types";
import { kolkataTouristAttractions } from "./tourist";
import { kolkataTempleAttractions } from "./temples";

// Combine all Kolkata attractions from different categories
export const kolkataAttractions: Attraction[] = [
  ...kolkataTouristAttractions,
  ...kolkataTempleAttractions,
  // Add other category arrays here when they are created
];
