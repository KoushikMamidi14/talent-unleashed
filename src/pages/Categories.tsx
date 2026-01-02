import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { categories } from "@/data/mockData";

const Categories = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-12"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Talent <span className="text-gradient">Categories</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our diverse range of talent categories and find your community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.slug} {...category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Categories;
