
import { Attraction } from "@/types";
import { chennaiTouristAttractions } from "./tourist";
import { chennaiTempleAttractions } from "./temples";
import { chennaiOtherAttractions } from "./other";

// Combine all Chennai attractions from different categories
export const chennaiAttractions: Attraction[] = [
  ...chennaiTouristAttractions,
  ...chennaiTempleAttractions,
  ...chennaiOtherAttractions
];
