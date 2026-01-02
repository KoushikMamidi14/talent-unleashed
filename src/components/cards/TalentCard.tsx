import { motion } from "framer-motion";
import { MapPin, Star, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface TalentCardProps {
  id: string;
  name: string;
  talent: string;
  category: string;
  location: string;
  image: string;
  rating: number;
  views: number;
  featured?: boolean;
}

export const TalentCard = ({
  id,
  name,
  talent,
  category,
  location,
  image,
  rating,
  views,
  featured = false,
}: TalentCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/profile/${id}`}
        className="block group relative overflow-hidden rounded-2xl bg-gradient-card card-shadow border border-border/50 hover:border-primary/30 transition-all duration-300"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {featured && (
            <Badge className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground border-0">
              Featured
            </Badge>
          )}
          
          <Badge variant="secondary" className="absolute top-3 right-3">
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
            {name}
          </h3>
          <p className="text-primary font-medium text-sm mb-3">{talent}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span>{rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{views}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
