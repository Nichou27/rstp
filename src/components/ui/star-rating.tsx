import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

const StarRating = ({
  rating,
  totalReviews,
}: {
  rating: number;
  totalReviews: number;
}) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star
      key={index}
      size={16}
      className={cn("text-yellow-400", {
        "fill-yellow-400": index < Math.floor(rating),
        "fill-yellow-400/50": index < rating && index >= Math.floor(rating),
        "text-gray-300": index >= rating,
      })}
    />
  ));

  return (
    <div className="flex items-center gap-2 sm:mt-4">
      <div className="flex">{stars}</div>
      <span className="text-sm text-gray-600">
        {rating} ({totalReviews} reseñas)
      </span>
    </div>
  );
};

export default StarRating;
