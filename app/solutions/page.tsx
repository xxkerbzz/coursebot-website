import type { Metadata } from 'next';
import Link from 'next/link';
import { FiUser, FiUsers, FiBriefcase, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Solutions - AI Support for Every Education Model',
  description: 'Tailored AI support solutions for course creators, universities, and corporate training programs. Scalable from solo educators to enterprise deployments.',
  keywords: ['AI education support solutions', 'course creator solutions', 'enterprise education AI'],
};

export default function SolutionsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Solutions', url: 'https://coursebot-website.vercel.app/solutions' }]} />
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Solutions for Every Type of Educator</h1>
          <p className="text-xl text-gray-600 font-light">Tailored AI support from solo creators to enterprise institutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/solutions/course-creators" className="border border-gray-200 rounded-lg p-8 hover:border-primary transition-colors">
            <FiUser className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-3">For Course Creators</h2>
            <p className="text-gray-600 font-light mb-4">Built for independent educators. Affordable, easy setup, powerful results.</p>
            <span className="text-primary font-light inline-flex items-center">Learn more <FiArrowRight className="ml-2" /></span>
          </Link>

          <Link href="/solutions/universities" className="border border-gray-200 rounded-lg p-8 hover:border-primary transition-colors">
            <FiUsers className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-3">For Universities</h2>
            <p className="text-gray-600 font-light mb-4">Enterprise AI support with FERPA compliance and dedicated support.</p>
            <span className="text-primary font-light inline-flex items-center">Learn more <FiArrowRight className="ml-2" /></span>
          </Link>

          <Link href="/solutions/corporate-training" className="border border-gray-200 rounded-lg p-8 hover:border-primary transition-colors">
            <FiBriefcase className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-medium text-gray-900 mb-3">For Corporate Training</h2>
            <p className="text-gray-600 font-light mb-4">Scale employee training support without scaling costs.</p>
            <span className="text-primary font-light inline-flex items-center">Learn more <FiArrowRight className="ml-2" /></span>
          </Link>
        </div>
      </div>
    </div>
  );
}
