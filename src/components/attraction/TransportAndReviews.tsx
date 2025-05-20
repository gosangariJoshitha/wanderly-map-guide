
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TransportOptions } from "@/components/attraction/TransportOptions";
import { ReviewSection } from "@/components/attraction/ReviewSection";
import { TransportOption, Review } from "@/types";

interface TransportAndReviewsProps {
  attractionName: string;
  transport: TransportOption;
  reviews: Review[];
}

export function TransportAndReviews({ attractionName, transport, reviews }: TransportAndReviewsProps) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-travel-blue-600">Transportation Options</CardTitle>
          <CardDescription>
            How to reach {attractionName} from different parts of the city
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TransportOptions transport={transport} />
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-travel-blue-600">Reviews & Ratings</CardTitle>
          <CardDescription>
            Visitor experiences at {attractionName}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ReviewSection reviews={reviews} />
        </CardContent>
      </Card>
    </>
  );
}
