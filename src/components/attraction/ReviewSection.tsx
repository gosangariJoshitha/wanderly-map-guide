
import { useState } from "react";
import { Review } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

interface ReviewSectionProps {
  reviews: Review[];
}

export function ReviewSection({ reviews }: ReviewSectionProps) {
  const [userRating, setUserRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    setIsOpen(false);
    setUserRating(5);
    setReviewText("");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Visitor Reviews</h3>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">Write a Review</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Your Experience</DialogTitle>
              <DialogDescription>
                Tell us what you thought about this place.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitReview} className="space-y-4 pt-4">
              <div>
                <div className="text-sm font-medium mb-2">Your Rating</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className="focus:outline-none"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 ${
                          userRating >= star ? "text-yellow-400" : "text-gray-300"
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="review" className="text-sm font-medium">
                  Your Review
                </label>
                <Textarea
                  id="review"
                  placeholder="Share your thoughts about this place..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows={4}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit">Submit Review</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {reviews.length > 0 ? (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="font-medium">{review.username}</div>
                  <div className="text-xs text-gray-500">{review.date}</div>
                </div>
                <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm">{review.rating}</span>
                </div>
              </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-6 bg-muted/50 rounded-lg">
          <h3 className="font-medium">No reviews yet</h3>
          <p className="text-sm text-muted-foreground mt-1">Be the first to review this attraction!</p>
        </div>
      )}
    </div>
  );
}
