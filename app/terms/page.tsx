import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Terms of Service',
  description: 'Terms and conditions for using CourseBot services.',
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Terms of Service', url: 'https://coursebot-website.vercel.app/terms' }]} />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-600 font-light mb-12">Last updated: November 25, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Welcome to CourseBot. These Terms of Service govern your use of our AI-powered student support platform. By accessing or using CourseBot, you agree to be bound by these Terms. Please read them carefully.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">1. Acceptance of Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                By creating an account, accessing, or using CourseBot, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, you may not use our services.
              </p>
              <p className="text-gray-600 font-light leading-relaxed">
                You must be at least 18 years old or have the legal capacity to enter into a binding contract in your jurisdiction to use CourseBot. By using our services, you represent and warrant that you meet these requirements.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">2. Service Description</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                CourseBot provides an AI-powered student support platform designed to help online educators automate responses to student questions. Our services include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>AI assistant training on your course materials</li>
                <li>Automated student question answering</li>
                <li>Multi-channel support (chat, email, LMS integration)</li>
                <li>Analytics and reporting dashboard</li>
                <li>Intelligent question routing</li>
                <li>Continuous AI learning and improvement</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice to users.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">3. User Accounts and Responsibilities</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-4 mt-6">Account Creation</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                To use CourseBot, you must create an account by providing accurate, current, and complete information. You are responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-6">
                <li>Maintaining the security of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access or security breach</li>
                <li>Ensuring your account information remains accurate and up-to-date</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-4">Acceptable Use</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>Use the service for any unlawful purpose or in violation of any regulations</li>
                <li>Upload malicious code, viruses, or any harmful content</li>
                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                <li>Reverse engineer, decompile, or disassemble any part of our platform</li>
                <li>Use automated scripts to access the service without permission</li>
                <li>Resell or redistribute our services without written authorization</li>
                <li>Upload content that infringes on intellectual property rights</li>
                <li>Use the service to harass, abuse, or harm another person</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">4. Subscription and Billing</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-4 mt-6">Pricing Plans</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">CourseBot offers multiple pricing tiers:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-6">
                <li><strong>Creator Plan:</strong> $49/month (up to 100 students)</li>
                <li><strong>Professional Plan:</strong> $99/month (up to 500 students)</li>
                <li><strong>Institution Plan:</strong> Custom pricing for universities and large organizations</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-4">Billing Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-6">
                <li>Subscriptions are billed monthly or annually in advance</li>
                <li>Payment is due at the start of each billing period</li>
                <li>Prices are subject to change with 30 days' notice</li>
                <li>You authorize us to charge your payment method automatically for recurring subscriptions</li>
                <li>Failure to pay may result in service suspension or termination</li>
                <li>All fees are non-refundable except as stated in our refund policy</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-4">Free Trial</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                We offer a 14-day free trial for new customers. No credit card is required to start your trial. After the trial period, you will need to select a paid plan to continue using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">5. Cancellation and Refunds</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-4 mt-6">Cancellation Policy</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings or by contacting support. Cancellations take effect at the end of your current billing period. You will retain access to paid features until the end of the billing period.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We offer a 30-day money-back guarantee on your first paid subscription. If you're not satisfied with CourseBot within the first 30 days, contact us for a full refund. After 30 days, subscription fees are non-refundable.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-4">Refund Process</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                To request a refund, email <a href="mailto:support@coursebot.com" className="text-primary hover:underline">support@coursebot.com</a> with your account details. Refunds are processed within 5-10 business days to your original payment method.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">6. Intellectual Property</h2>

              <h3 className="text-xl font-medium text-gray-900 mb-4 mt-6">Your Content</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                You retain all ownership rights to the content you upload to CourseBot (course materials, syllabi, assignments, etc.). By uploading content, you grant us a limited license to use, store, and process your content solely to provide our services.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-4">Our Platform</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                CourseBot and all related technology, software, and content (excluding your uploaded content) are owned by CourseBot, Inc. and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">7. Data Privacy and Security</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We take data privacy seriously and are committed to protecting your information:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>Full FERPA compliance for educational institutions</li>
                <li>End-to-end encryption for all data</li>
                <li>SOC 2 Type II certification</li>
                <li>Student data is never sold or used for AI training</li>
                <li>You maintain full ownership of your data</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                For complete details, see our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">8. Limitation of Liability</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>CourseBot is provided "as is" without warranties of any kind</li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>We are not liable for indirect, incidental, or consequential damages</li>
                <li>Our total liability is limited to the amount you paid in the past 12 months</li>
                <li>You are responsible for verifying AI responses before they reach students</li>
                <li>We are not responsible for third-party integrations or services</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                Some jurisdictions do not allow liability limitations, so these may not apply to you.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">9. Indemnification</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                You agree to indemnify and hold CourseBot, its affiliates, officers, directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">10. Changes to Terms</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may modify these Terms at any time. Material changes will be communicated via email at least 30 days before taking effect. Continued use of CourseBot after changes constitutes acceptance of the new Terms. If you do not agree to the changes, you must cancel your subscription.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">11. Governing Law and Dispute Resolution</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                These Terms are governed by the laws of the State of California, United States, without regard to conflict of law provisions. Any disputes arising from these Terms or use of CourseBot will be resolved through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>Good faith negotiation between the parties</li>
                <li>Binding arbitration in San Francisco, California if negotiation fails</li>
                <li>Small claims court for disputes under jurisdictional limits</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">12. Termination</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We reserve the right to suspend or terminate your account at any time for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600 font-light mb-4">
                <li>Violation of these Terms of Service</li>
                <li>Fraudulent or illegal activity</li>
                <li>Non-payment of fees</li>
                <li>Abuse of our platform or support team</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                Upon termination, you will lose access to your account and data. You may request a data export before termination. Fees paid are non-refundable upon termination for cause.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">13. Contact Information</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-light mb-2"><strong>Legal Department</strong></p>
                <p className="text-gray-600 font-light mb-1">Email: <a href="mailto:legal@coursebot.com" className="text-primary hover:underline">legal@coursebot.com</a></p>
                <p className="text-gray-600 font-light mb-1">Address: CourseBot, Inc., 123 Education Drive, San Francisco, CA 94105</p>
                <p className="text-gray-600 font-light">Phone: 1-800-555-1234</p>
              </div>
            </section>

            <section className="bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 rounded-lg">
              <p className="text-center text-gray-600 font-light">
                By using CourseBot, you acknowledge that you have read and understood these Terms of Service. Ready to get started? <Link href="/demo" className="text-primary hover:underline font-medium">Start your free trial</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
