import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'About CourseBot - Our Mission to Empower Educators', description: 'Founded by course creators who experienced the pain of repetitive questions. We built CourseBot to give educators their time back.' };

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'About', url: 'https://coursebot-website.vercel.app/about' }]} />
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-light text-gray-900 mb-12 text-center">We're on a Mission to Give Educators Their Time Back</h1>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Story</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">CourseBot was founded by course creators who experienced the pain of endless repetitive student questions firsthand. After spending 10+ hours every week answering "Where is the assignment?" and "When is this due?", we knew there had to be a better way.</p>
            <p className="text-xl text-gray-600 font-light leading-relaxed">We built CourseBot to solve our own problem—and discovered that thousands of other educators faced the same challenge.</p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Why We Built This</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed">Education should be about teaching, not answering the same questions over and over. We believe every educator deserves to focus on what they do best: creating exceptional learning experiences and helping students succeed.</p>
          </section>

          <section className="mb-16 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">Our Mission</h2>
              <p className="text-xl text-gray-600 font-light text-center leading-relaxed">Transform education by eliminating repetitive work so educators can focus on teaching and students get better support.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Our Values</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Educators First</h3>
                <p className="text-gray-600 font-light">Built for individual educators, not just institutions. Affordable, accessible, and powerful.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Student Success</h3>
                <p className="text-gray-600 font-light">Better support means better learning outcomes. We help students get answers when they need them.</p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Transparency</h3>
                <p className="text-gray-600 font-light">Clear pricing, honest communication, and full data ownership. No surprises.</p>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-6">Join Our Journey</h2>
            <p className="text-xl text-gray-600 font-light mb-8">Help us transform education. Start saving 10+ hours every week.</p>
            <Link href="/demo" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">
              Start Free Trial <FiArrowRight className="ml-2" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
