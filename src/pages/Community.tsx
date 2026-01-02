import { motion } from "framer-motion";
import { Users, MessageSquare, Calendar, Rocket, Heart, Lightbulb } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { communityStats } from "@/data/mockData";

const features = [
  {
    icon: MessageSquare,
    title: "Connect & Chat",
    description: "Network with talented individuals, share ideas, and build meaningful connections.",
  },
  {
    icon: Users,
    title: "Collaborate",
    description: "Find collaborators for projects, performances, and creative endeavors.",
  },
  {
    icon: Calendar,
    title: "Events",
    description: "Discover and participate in talent showcases, workshops, and meetups.",
  },
  {
    icon: Rocket,
    title: "Opportunities",
    description: "Access exclusive job postings, gigs, and career opportunities.",
  },
  {
    icon: Heart,
    title: "Support",
    description: "Give and receive feedback, encouragement, and mentorship.",
  },
  {
    icon: Lightbulb,
    title: "Learn & Grow",
    description: "Access resources, tutorials, and tips from experienced talents.",
  },
];

const Community = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Join Our <span className="text-gradient">Community</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Connect with passionate creators, find collaborators, and be part of a supportive 
              community that celebrates every unique talent.
            </p>
            <Button variant="hero" size="xl">
              Join the Community
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: communityStats.totalUsers.toLocaleString(), label: "Community Members" },
              { value: communityStats.collaborations.toLocaleString(), label: "Active Collaborations" },
              { value: communityStats.countries.toString(), label: "Countries" },
              { value: "500+", label: "Monthly Events" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="font-display font-bold text-3xl md:text-4xl text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
              What You'll <span className="text-gradient">Find Here</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our community is designed to help you grow, connect, and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
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
              Ready to Connect?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Join our Discord community and start connecting with talented individuals from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Join Discord
              </Button>
              <Button variant="glass" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Community;
