import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield } from "lucide-react";

const Privacy = () => {
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
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Privacy <span className="text-gradient">Policy</span>
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
              <h2 className="font-display font-semibold text-2xl mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to TalentTrack. We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">2. Information We Collect</h2>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p><strong className="text-foreground">Personal Information:</strong> We may collect personal information such as your name, email address, location, and profile information when you create an account.</p>
                <p><strong className="text-foreground">Content:</strong> We collect the content you upload, including images, videos, descriptions, and other materials you choose to share on your profile.</p>
                <p><strong className="text-foreground">Usage Data:</strong> We automatically collect information about how you interact with our platform, including pages visited, time spent, and features used.</p>
              </div>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>To provide, maintain, and improve our services</li>
                <li>To display your profile and content to other users</li>
                <li>To communicate with you about your account and our services</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To detect, prevent, and address technical issues</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed mt-3 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in operating our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">8. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display font-semibold text-2xl mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us through our{" "}
                <a href="/contact" className="text-primary hover:underline">Contact page</a>.
              </p>
            </section>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;

