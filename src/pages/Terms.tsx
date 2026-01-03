import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText } from "lucide-react";

const Terms = () => {
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
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 md:p-8 space-y-8"
          >
            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using TalentTrack, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Permission is granted to temporarily use TalentTrack for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on TalentTrack</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">3. User Accounts</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.</p>
                <p>You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account, whether or not you have authorized such activities or actions.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">4. User Content</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on or through the service, including its legality, reliability, and appropriateness.</p>
                <p>By posting content on or through the service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the service.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">5. Prohibited Uses</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You may not use our service:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>In any way that violates any applicable national or international law or regulation</li>
                <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
                <li>To impersonate or attempt to impersonate the company, a company employee, another user, or any other person or entity</li>
                <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful</li>
                <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">6. Content Ownership</h2>
              <p className="text-muted-foreground leading-relaxed">
                You retain all rights to any content you submit, post, or display on or through the service. By submitting, posting, or displaying content on or through the service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute such content solely for the purpose of providing and improving the service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">8. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, we exclude all representations, warranties, conditions, and terms relating to our website and the use of this website.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">9. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall TalentTrack, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">10. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:underline">Contact page</a>.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;

