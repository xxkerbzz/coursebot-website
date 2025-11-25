import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Privacy Policy',
  description: 'How we collect, use, and protect your data. FERPA compliant and transparent.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Privacy Policy', url: 'https://coursebot.com/privacy' }]} />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-600 font-light mb-12">Last updated: November 25, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                At CourseBot, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered student support platform. We are committed to full transparency and FERPA compliance.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Information We Collect</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">We collect information that you provide directly to us:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li><strong>Account Information:</strong> Name, email address, password, and billing information when you create an account</li>
                <li><strong>Course Content:</strong> Course materials, syllabi, assignments, and other educational content you upload to train your AI assistant</li>
                <li><strong>Student Interactions:</strong> Questions submitted by students, AI responses, and instructor feedback</li>
                <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages viewed, features used, and time spent</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies for authentication and analytics</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">How We Use Your Information</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li>Provide, maintain, and improve our AI-powered student support services</li>
                <li>Train your specific AI assistant on your course content</li>
                <li>Process transactions and send related information including confirmations and invoices</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze usage patterns and trends to improve user experience</li>
                <li>Detect, prevent, and address technical issues and security vulnerabilities</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                <strong>Important:</strong> Your course content and student data are NEVER used to train our general AI models or shared with other CourseBot users. Each AI assistant is trained exclusively on your content and kept completely separate.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Data Security</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li><strong>Access Controls:</strong> Strict role-based access controls limit who can access your data</li>
                <li><strong>SOC 2 Type II Certified:</strong> Our security practices are independently audited and certified</li>
                <li><strong>Regular Audits:</strong> We conduct regular security audits and penetration testing</li>
                <li><strong>Data Isolation:</strong> Each customer's data is logically isolated in our database</li>
                <li><strong>Backup & Recovery:</strong> Regular automated backups with tested disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Student Data Privacy (FERPA)</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                CourseBot is fully compliant with the Family Educational Rights and Privacy Act (FERPA):
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li>We act as a school official providing institutional services under FERPA</li>
                <li>Student data is used solely to provide educational services and never for marketing</li>
                <li>Student information is never sold to third parties</li>
                <li>We maintain appropriate security safeguards for student education records</li>
                <li>Educational institutions maintain full ownership and control of student data</li>
                <li>We will delete student data upon request in accordance with retention policies</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Third-Party Services</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We use select third-party services to provide our platform:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li><strong>Cloud Hosting:</strong> AWS for secure cloud infrastructure</li>
                <li><strong>Payment Processing:</strong> Stripe for secure payment processing (we do not store credit card numbers)</li>
                <li><strong>Analytics:</strong> Privacy-focused analytics to understand usage patterns</li>
                <li><strong>Email Services:</strong> Transactional email providers for system notifications</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                All third-party services are carefully vetted and contractually required to maintain appropriate security and privacy standards.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Your Rights</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">You have the following rights regarding your data:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li><strong>Access:</strong> Request a copy of all data we have about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                <li><strong>Deletion:</strong> Request deletion of your account and associated data</li>
                <li><strong>Export:</strong> Export your data in machine-readable format at any time</li>
                <li><strong>Portability:</strong> Transfer your data to another service provider</li>
                <li><strong>Opt-out:</strong> Opt out of non-essential communications</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                To exercise any of these rights, contact us at <a href="mailto:privacy@coursebot.com" className="text-primary hover:underline">privacy@coursebot.com</a>.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Data Retention</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                We retain your information for as long as your account is active or as needed to provide services:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-600 font-light mb-6">
                <li><strong>Active Accounts:</strong> Data retained for the duration of your subscription</li>
                <li><strong>Canceled Accounts:</strong> Data retained for 30 days to allow reactivation, then deleted</li>
                <li><strong>Legal Requirements:</strong> Some data may be retained longer to comply with legal obligations</li>
                <li><strong>Backups:</strong> Deleted data is purged from backups within 90 days</li>
              </ul>
              <p className="text-gray-600 font-light leading-relaxed">
                You can request immediate data deletion by contacting support. We will process deletion requests within 30 days.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Children's Privacy</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                CourseBot is designed for use by educational institutions and instructors, not directly by children under 13. We do not knowingly collect personal information from children under 13 without appropriate parental or school consent in accordance with COPPA and FERPA.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by email and by posting a notice on our platform at least 30 days before the changes take effect. Your continued use of CourseBot after changes are made constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-600 font-light leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 font-light mb-2"><strong>Privacy Team</strong></p>
                <p className="text-gray-600 font-light mb-1">Email: <a href="mailto:privacy@coursebot.com" className="text-primary hover:underline">privacy@coursebot.com</a></p>
                <p className="text-gray-600 font-light mb-1">Address: CourseBot, Inc., 123 Education Drive, San Francisco, CA 94105</p>
                <p className="text-gray-600 font-light">Phone: 1-800-555-1234</p>
              </div>
            </section>

            <section className="bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-8 rounded-lg">
              <p className="text-center text-gray-600 font-light">
                For general support inquiries, visit our <Link href="/support" className="text-primary hover:underline">Support Center</Link> or <Link href="/contact" className="text-primary hover:underline">Contact Us</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
