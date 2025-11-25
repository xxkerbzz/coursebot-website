import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiZap } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Integrations - Connect with Your LMS Platform',
  description: 'Seamless integration with Teachable, Thinkific, Canvas, Moodle, and more. CourseBot works where your students already are. No platform switching required.',
  keywords: ['LMS integration AI support', 'Teachable integration', 'Thinkific integration', 'Canvas LMS'],
  openGraph: {
    title: 'CourseBot Integrations - Works With Your Platform',
    description: 'Seamless integration with major LMS platforms',
    url: 'https://coursebot.com/integrations',
  },
};

export default function IntegrationsPage() {
  const integrations = [
    {
      name: 'Teachable',
      description: 'Full integration with Teachable courses. Automatic student enrollment sync, course content access, and seamless chat widget embedding.',
      features: ['Auto student sync', 'Course content access', 'Chat widget', 'Assignment tracking'],
    },
    {
      name: 'Thinkific',
      description: 'Native Thinkific integration with automatic course data sync, student management, and embedded support directly in your course pages.',
      features: ['Course data sync', 'Student management', 'Embedded support', 'Progress tracking'],
    },
    {
      name: 'Canvas LMS',
      description: 'Enterprise-grade Canvas integration perfect for universities. SSO support, grade book integration, and comprehensive student data access.',
      features: ['SSO support', 'Grade book integration', 'Student data access', 'API access'],
    },
    {
      name: 'Moodle',
      description: 'Open-source Moodle integration with flexible deployment options. Works with self-hosted and cloud Moodle instances.',
      features: ['Self-hosted support', 'Cloud support', 'Plugin installation', 'Custom themes'],
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Integrations', url: 'https://coursebot.com/integrations' }]} />

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Seamless Integration with Your Favorite Platforms
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            CourseBot works where your students already are. No platform switching, no complicated setup—just
            powerful AI support integrated directly into your existing LMS.
          </p>
          <Link
            href="/demo"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
          >
            Start Free Trial
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Major Integrations */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-4">{integration.name}</h2>
                <p className="text-gray-600 font-light mb-6">{integration.description}</p>
                <div className="space-y-2">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <FiCheck className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How Integration Works */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">How Integration Works</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-medium mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Connect Your Platform</h3>
                  <p className="text-gray-600 font-light">
                    Simple one-click connection to your LMS. Just authorize CourseBot to access your course data—no
                    coding required.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-medium mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Automatic Data Sync</h3>
                  <p className="text-gray-600 font-light">
                    CourseBot automatically syncs your course structure, student list, and content. Updates happen in
                    real-time as you modify your course.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-medium mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Deploy Support Widget</h3>
                  <p className="text-gray-600 font-light">
                    CourseBot chat widget appears directly in your course pages. Students get instant help without
                    leaving your platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email & Chat Integration */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Email & Chat Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/5 p-8 rounded-lg">
              <FiZap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Email Integration</h3>
              <p className="text-gray-600 font-light mb-6">
                Forward student emails to CourseBot or connect your support email directly. CourseBot responds
                automatically to routine questions via email.
              </p>
              <ul className="space-y-2">
                {['Automatic email responses', 'Email forwarding support', 'Custom email templates', 'Priority flagging'].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center">
                      <FiCheck className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg">
              <FiZap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Chat Widget</h3>
              <p className="text-gray-600 font-light mb-6">
                Embed the CourseBot chat widget anywhere—your website, course pages, or student portal. Fully
                customizable to match your brand.
              </p>
              <ul className="space-y-2">
                {['Customizable design', 'Mobile responsive', 'Conversation history', 'Instant responses'].map(
                  (feature, index) => (
                    <li key={index} className="flex items-center">
                      <FiCheck className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-gray-700 font-light">{feature}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </section>

        {/* API Access */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Need a Custom Integration?</h2>
            <p className="text-xl text-gray-600 font-light mb-8">
              Professional and Institution plans include API access for custom integrations. Build exactly what you
              need with our developer-friendly REST API.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
              >
                Request Custom Integration
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/demo"
                className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors"
              >
                View API Documentation
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">See Your Platform Integration</h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Start your free trial and connect CourseBot to your platform in minutes.
          </p>
          <Link
            href="/demo"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
          >
            Start Free Trial
            <FiArrowRight className="ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}
