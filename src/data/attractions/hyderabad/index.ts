
import { Attraction } from "@/types";
import { touristAttractions } from "./tourist";
import { templeAttractions } from "./temples";
import { otherAttractions } from "./other";

// Combine all Hyderabad attractions
export const hyderabadAttractions: Attraction[] = [
  ...touristAttractions,
  ...templeAttractions,
  ...otherAttractions
];
