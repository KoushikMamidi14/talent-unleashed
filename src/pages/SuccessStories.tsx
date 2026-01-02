import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { successStories } from "@/data/mockData";

const SuccessStories = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Inspiring journeys of talented individuals who turned their passion into success
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 glass rounded-xl p-4 md:p-6">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-8 h-8 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Growth</p>
                        <p className="font-display font-bold text-lg md:text-xl text-gradient">
                          {((story.afterFollowers / story.beforeFollowers) * 100).toFixed(0)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-2 mb-4">
                    <Quote className="w-8 h-8 text-primary/50" />
                  </div>
                  <blockquote className="font-display text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                    "{story.story}"
                  </blockquote>
                  <div className="mb-6">
                    <p className="font-display font-bold text-xl text-foreground">{story.name}</p>
                    <p className="text-primary">{story.talent}</p>
                  </div>
                  <div className="glass rounded-xl p-4 inline-block">
                    <p className="text-sm text-muted-foreground mb-1">Achievement</p>
                    <p className="font-semibold text-foreground">{story.achievement}</p>
                  </div>
                  <div className="flex gap-8 mt-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Before</p>
                      <p className="font-display font-bold text-xl">{story.beforeFollowers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">After</p>
                      <p className="font-display font-bold text-xl text-gradient">
                        {story.afterFollowers.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              Write Your Own <span className="text-gradient">Success Story</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join TalentHub today and start your journey towards recognition and success.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/create-profile">
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SuccessStories;
