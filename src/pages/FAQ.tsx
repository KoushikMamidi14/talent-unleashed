import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is TalentTrack?",
    answer: "TalentTrack is a platform designed to empower individuals to showcase their unique non-academic talents and connect with a global community of passionate creators. Whether you're an artist, musician, dancer, or have any other talent, TalentTrack helps you get discovered.",
  },
  {
    question: "How do I create a profile?",
    answer: "Creating a profile is easy! Simply click on the 'Create Profile' button in the navigation menu, fill out the form with your information, upload your portfolio media, and you're all set. Your profile will be visible to the community once created.",
  },
  {
    question: "Is TalentTrack free to use?",
    answer: "Yes, TalentTrack is free to use for all users. You can create a profile, browse talents, and connect with others at no cost. Some premium features may be available in the future, but the core platform remains free.",
  },
  {
    question: "How do I showcase my work?",
    answer: "You can showcase your work by uploading images and videos to your profile. In the 'Create Profile' section, you'll find options to upload portfolio media including photos and demo reels that best represent your talent.",
  },
  {
    question: "Can I edit my profile after creating it?",
    answer: "Yes, you can edit your profile at any time. Simply log in to your account and navigate to your profile settings to make updates to your information, portfolio, or any other details.",
  },
  {
    question: "How do I connect with other talents?",
    answer: "You can connect with other talents by exploring the platform, browsing different categories, and visiting individual talent profiles. You can also join the community section to participate in events and collaborations.",
  },
  {
    question: "What types of talents are welcome?",
    answer: "TalentTrack welcomes all types of non-academic talents including but not limited to: performing arts (singing, dancing, acting), visual arts (painting, drawing, photography), music (playing instruments, composition), creative writing, crafts, and many more. If you have a talent, we want to see it!",
  },
  {
    question: "How do I report inappropriate content?",
    answer: "If you come across any inappropriate content, please contact us through the Contact page. We take content moderation seriously and will review all reports promptly to ensure a safe and positive environment for all users.",
  },
];

const FAQ = () => {
  return (
    <Layout>
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-4">
              <HelpCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find answers to common questions about TalentTrack
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="text-left font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;

