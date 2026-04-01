import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  text: string;
}

const ReviewCard = ({ name, text }: ReviewCardProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-primary text-primary" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-4">"{text}"</p>
      <p className="font-heading font-bold text-card-foreground">{name}</p>
    </div>
  );
};

export default ReviewCard;
