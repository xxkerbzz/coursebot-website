import type { Metadata } from 'next';
import Link from 'next/link';
import { FiMessageCircle, FiZap, FiBarChart, FiRepeat, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'CourseBot Product - AI-Powered Student Support for Course Creators',
  description: 'AI-powered student support that handles 80% of routine inquiries automatically. 24/7 instant support, intelligent routing, and LMS integration for course creators.',
  keywords: ['AI course support software', 'student support automation', 'course creator tools'],
  openGraph: {
    title: 'CourseBot Product - AI-Powered Student Support',
    description: 'AI-powered student support that handles 80% of routine inquiries automatically',
    url: 'https://coursebot.com/product',
  },
};

export default function ProductPage() {
  return (
    <>
      <StructuredData
        type="Product"
        data={{
          name: 'CourseBot',
          description: 'AI-powered student support assistant for online educators',
          brand: {
            '@type': 'Organization',
            name: 'CourseBot',
          },
          offers: {
            '@type': 'Offer',
            price: '49.00',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'Product', url: 'https://coursebot.com/product' }]} />

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              AI-Powered Student Support That Grows With Your Courses
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              CourseBot handles 80% of routine student inquiries automatically, giving you back 10+ hours every week
              while providing your students with instant 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </div>

          {/* What Is CourseBot? */}
          <section className="mb-24">
            <h2 className="text-4xl font-light text-gray-900 mb-6">What Is CourseBot?</h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
              CourseBot is an AI-powered student support assistant that automatically answers course-related questions
              for online educators. It integrates seamlessly with your learning management system to provide instant,
              24/7 support to your students while dramatically reducing your workload.
            </p>
            <p className="text-xl text-gray-600 font-light leading-relaxed">
              Train CourseBot once on your course materials, syllabus, and FAQ history, and it becomes an expert on
              your specific course—learning your teaching style and adapting to your course-specific terminology.
            </p>
          </section>

          {/* Core Features */}
          <section className="mb-24">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Core Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiMessageCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">AI-Powered FAQ System</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Trained on your course materials, syllabus, and historical Q&A, CourseBot understands the context
                    of your course and provides accurate, helpful answers to student questions automatically.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiZap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Multi-Channel Support</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Students can ask questions through chat widgets, email, or directly within your LMS. CourseBot
                    works across all channels, providing consistent support wherever your students need it.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiCheckCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Intelligent Question Routing</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    CourseBot automatically handles 80% of routine questions and intelligently flags complex or
                    sensitive issues that require your personal attention, ensuring students always get the right level
                    of support.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiRepeat className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">LMS Integration</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Seamless integration with major learning management systems including Teachable, Thinkific, Canvas,
                    and Moodle. No platform switching required—CourseBot works where your students already are.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiBarChart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Analytics Dashboard</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Track common questions, response accuracy, time saved, and student satisfaction. Gain insights into
                    what your students need and where your course materials might need clarification.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg">
                    <FiRepeat className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-3">Continuous AI Learning</h3>
                  <p className="text-gray-600 font-light leading-relaxed">
                    CourseBot improves from each interaction, adapting to course-specific terminology and learning from
                    your feedback to provide increasingly accurate and helpful responses over time.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Why Course Creators Choose CourseBot */}
          <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">
                Why Course Creators Choose CourseBot
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                  <p className="text-xl text-gray-700 font-light">
                    <strong className="font-medium">Handles 80% of routine student inquiries automatically</strong> —
                    Free up your time for what matters: teaching and creating great content
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                  <p className="text-xl text-gray-700 font-light">
                    <strong className="font-medium">24/7 instant support without instructor burnout</strong> — Your
                    students get help anytime, anywhere, without you being on call 24/7
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                  <p className="text-xl text-gray-700 font-light">
                    <strong className="font-medium">AI learns your course and communication style</strong> — CourseBot
                    adapts to your specific teaching approach and course terminology
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                  <p className="text-xl text-gray-700 font-light">
                    <strong className="font-medium">Works across chat, email, and LMS platforms</strong> — Support
                    students wherever they are, with consistent answers across all channels
                  </p>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                  <p className="text-xl text-gray-700 font-light">
                    <strong className="font-medium">ROI achieved in the first week</strong> — If you're spending 10
                    hours weekly on repetitive questions, CourseBot pays for itself immediately
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Ready to Transform Your Student Support?</h2>
            <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
              Join hundreds of course creators who are saving 10+ hours every week with CourseBot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/pricing"
                className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors"
              >
                See Pricing
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
