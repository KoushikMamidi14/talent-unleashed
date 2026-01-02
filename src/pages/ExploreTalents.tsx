import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { TalentCard } from "@/components/cards/TalentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { featuredTalents, categories } from "@/data/mockData";

const allTalents = [
  ...featuredTalents,
  {
    id: "7",
    name: "Luna Martinez",
    talent: "Contemporary Dancer",
    category: "Dance",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop",
    rating: 4.7,
    views: 7600,
    featured: false,
  },
  {
    id: "8",
    name: "James Wilson",
    talent: "Hip Hop Producer",
    category: "Music",
    location: "Atlanta, GA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop",
    rating: 4.8,
    views: 9200,
    featured: false,
  },
  {
    id: "9",
    name: "Sophie Chen",
    talent: "Watercolor Artist",
    category: "Visual Arts",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&auto=format&fit=crop",
    rating: 4.9,
    views: 6800,
    featured: false,
  },
];

const ExploreTalents = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTalents = allTalents.filter((talent) => {
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.talent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || talent.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-12 pb-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Explore <span className="text-gradient">Talents</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover incredible individuals showcasing their unique skills and passions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 py-4 glass border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search talents, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50 border-border"
              />
            </div>

            {/* Category filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              <Badge
                variant={selectedCategory === null ? "default" : "outline"}
                className="cursor-pointer whitespace-nowrap"
                onClick={() => setSelectedCategory(null)}
              >
                All
              </Badge>
              {categories.slice(0, 6).map((cat) => (
                <Badge
                  key={cat.slug}
                  variant={selectedCategory === cat.slug ? "default" : "outline"}
                  className="cursor-pointer whitespace-nowrap"
                  onClick={() => setSelectedCategory(cat.slug === selectedCategory ? null : cat.slug)}
                >
                  {cat.name}
                </Badge>
              ))}
            </div>

            <Button variant="outline" size="sm" className="hidden md:flex">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredTalents.length}</span> talents
            </p>
          </div>

          {filteredTalents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredTalents.map((talent) => (
                <TalentCard key={talent.id} {...talent} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display font-semibold text-xl mb-2">No talents found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ExploreTalents;
