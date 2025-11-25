import type { Metadata } from 'next';
import Link from 'next/link';
import { FiMail, FiPhone, FiMessageCircle, FiMapPin } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact CourseBot - Get in Touch',
  description: 'Contact CourseBot for sales, support, or general inquiries. Response within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <StructuredData
        type="ContactPage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact CourseBot',
          description: 'Contact CourseBot for sales, support, or general inquiries',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Contact', url: 'https://coursebot.com/contact' }]} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 font-light">We're here to help you succeed. Response within 24 hours.</p>
          </div>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Send Us a Message</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <ContactForm />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Other Ways to Reach Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-gray-200 p-6 rounded-lg">
                <FiMail className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Sales Inquiries</h3>
                <p className="text-gray-600 font-light mb-4">Questions about pricing, features, or enterprise plans?</p>
                <a href="mailto:sales@coursebot.com" className="text-primary hover:underline">sales@coursebot.com</a>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <FiMessageCircle className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600 font-light mb-4">Need help with your CourseBot account?</p>
                <a href="mailto:support@coursebot.com" className="text-primary hover:underline">support@coursebot.com</a>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <FiPhone className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 font-light mb-4">Prefer to talk? Call us during business hours.</p>
                <a href="tel:+18005551234" className="text-primary hover:underline">1-800-555-1234</a>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9am-5pm EST</p>
              </div>

              <div className="border border-gray-200 p-6 rounded-lg">
                <FiMapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-medium text-gray-900 mb-2">Media & Press</h3>
                <p className="text-gray-600 font-light mb-4">Press inquiries and media requests</p>
                <a href="mailto:press@coursebot.com" className="text-primary hover:underline">press@coursebot.com</a>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Office Location</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 font-light mb-2">CourseBot, Inc.</p>
              <p className="text-gray-600 font-light mb-1">123 Education Drive</p>
              <p className="text-gray-600 font-light mb-1">San Francisco, CA 94105</p>
              <p className="text-gray-600 font-light">United States</p>
            </div>
          </section>

          <section className="bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 font-light mb-6">Many common questions are answered in our FAQ.</p>
              <Link href="/faq" className="text-primary hover:underline font-medium">Visit FAQ Page</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
