import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot for Course Creators - Reclaim Your Time',
  description: 'AI support built for independent course creators. $49/month, 3-step setup, save 10+ hours weekly.',
};

export default function CourseCreatorsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[
          { name: 'Solutions', url: 'https://coursebot-website.vercel.app/solutions' },
          { name: 'For Course Creators', url: 'https://coursebot-website.vercel.app/solutions/course-creators' }
        ]} />
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Built for Independent Course Creators Like You</h1>
          <p className="text-xl text-gray-600 font-light mb-8">Stop drowning in student questions. Reclaim 10+ hours every week with AI support designed specifically for solo educators.</p>
          <Link href="/demo" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">
            Start Free Trial <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-light text-gray-900 mb-8">Why Course Creators Choose CourseBot</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Creator-first design for individual educators, not just institutions',
              'Affordable $49/month vs $500+ enterprise solutions',
              'Quick 3-step setup in 2-3 hours',
              'Handles 80% of routine questions automatically',
              'Your students get 24/7 support without hiring staff',
              'ROI in the first week'
            ].map((benefit, i) => (
              <div key={i} className="flex items-start">
                <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-3" />
                <p className="text-gray-700 font-light">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
