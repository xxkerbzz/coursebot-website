import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'CourseBot for Corporate Training - Automated Learning Support', description: 'Scale employee training support without scaling costs. Custom branding, enterprise LMS integration, and 24/7 support.' };

export default function CorporateTrainingPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Solutions', url: 'https://coursebot-website.vercel.app/solutions' }, { name: 'For Corporate Training', url: 'https://coursebot-website.vercel.app/solutions/corporate-training' }]} />
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">AI-Powered Support for Corporate Learning Programs</h1>
          <p className="text-xl text-gray-600 font-light mb-8">Support employee training programs at scale with custom branding, enterprise integrations, and 24/7 automated assistance.</p>
          <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">Request Proposal <FiArrowRight className="ml-2" /></Link>
        </div>

        <section className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Scale Training Without Scaling Support Staff</h2>
          <p className="text-xl text-gray-600 font-light mb-8">Provide instant support to thousands of employees without increasing training department headcount. Reduce training support costs while improving completion rates.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {['Support unlimited employees', 'Reduce training support costs', 'Improve completion rates', '24/7 availability'].map((item, i) => (
              <div key={i} className="flex items-start">
                <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <span className="text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Custom Branding & White-Label Options</h2>
          <p className="text-xl text-gray-600 font-light">Brand the AI assistant with your company colors, logo, and voice. White-label options available for seamless internal deployment.</p>
        </section>

        <section className="text-center">
          <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">Request Proposal <FiArrowRight className="ml-2" /></Link>
        </section>
      </div>
    </div>
  );
}
