import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  count: number;
  gradient: string;
  slug: string;
}

export const CategoryCard = ({
  name,
  icon: Icon,
  count,
  gradient,
  slug,
}: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        to={`/explore?category=${slug}`}
        className="block group relative overflow-hidden rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-all duration-300"
        style={{ background: gradient }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-primary/10 blur-xl" />
        </div>
        
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-xl bg-background/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-foreground" />
          </div>
          
          <h3 className="font-display font-semibold text-lg text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {count.toLocaleString()} talents
          </p>
        </div>
      </Link>
    </motion.div>
  );
};
