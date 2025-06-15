
import { Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CourseCardProps {
  title: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Pro';
  rating: number;
  reviewCount: number;
  imageUrl: string;
}

export function CourseCard({ title, instructor, level, rating, reviewCount, imageUrl }: CourseCardProps) {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden group transition-transform duration-300 hover:scale-105 shadow-lg">
      <div className="aspect-video bg-muted flex items-center justify-center">
        {/* Placeholder for image */}
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
            <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
            <Badge variant={level === 'Beginner' ? 'default' : level === 'Intermediate' ? 'secondary' : 'destructive'} className="capitalize shrink-0 ml-2 bg-primary/20 text-primary border-primary/30">
                {level}
            </Badge>
        </div>
        <p className="text-sm text-muted-foreground mt-1">By {instructor}</p>
        <div className="flex items-center mt-3">
          <span className="font-bold text-primary text-sm mr-1">{rating.toFixed(1)}</span>
          <div className="flex text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'fill-current' : 'fill-muted stroke-muted-foreground'}`} />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">({reviewCount})</span>
        </div>
      </div>
    </div>
  );
}
