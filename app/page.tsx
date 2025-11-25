import Link from 'next/link';
import { FiClock, FiMessageCircle, FiZap, FiTrendingUp, FiCheck, FiArrowRight } from 'react-icons/fi';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <StructuredData
        type="Organization"
        data={{
          name: 'CourseBot',
          url: 'https://coursebot.com',
          logo: 'https://coursebot.com/logo.png',
          description: 'AI-powered student support assistant for online educators that automatically answers course-related questions',
          sameAs: [
            'https://twitter.com/coursebot',
            'https://linkedin.com/company/coursebot',
          ],
        }}
      />
      <StructuredData
        type="WebSite"
        data={{
          name: 'CourseBot',
          url: 'https://coursebot.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://coursebot.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Stop Answering The Same Questions.{' '}
              <span className="text-primary">Start Teaching Again.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light leading-relaxed">
              CourseBot gives your students instant 24/7 answers while giving you back 10+ hours every week.
              Train it once, it handles 80% of questions forever.
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
                href="/how-it-works"
                className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
              >
                See How It Works
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-6 font-light">
              No credit card required • 14-day free trial • Setup in 2-3 hours
            </p>
          </div>
        </div>
      </section>

      {/* Save 10+ Hours Every Week */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Save 10+ Hours Every Week
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Stop drowning in repetitive student questions. CourseBot automates your inbox
              so you can focus on what matters: creating great content and teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Time Savings */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <FiClock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                10+ Hours Saved
              </h3>
              <p className="text-gray-600 font-light">
                Reclaim your time by automating repetitive question-answering
              </p>
            </div>

            {/* 24/7 Support */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <FiMessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                24/7 Instant Answers
              </h3>
              <p className="text-gray-600 font-light">
                Students get help anytime, anywhere, without waiting for you
              </p>
            </div>

            {/* 80% Automation */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <FiZap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                80% Automated
              </h3>
              <p className="text-gray-600 font-light">
                Handles routine questions automatically, flags complex ones for you
              </p>
            </div>

            {/* Improved Satisfaction */}
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 rounded-lg mb-4">
                <FiTrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                Higher Satisfaction
              </h3>
              <p className="text-gray-600 font-light">
                Students love instant support, you love reclaiming your schedule
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How CourseBot Works */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              How CourseBot Works
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Get up and running in 3 simple steps. No technical expertise required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-medium mb-4">
                1
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Upload Your Course Materials
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Upload your syllabus, FAQs, course materials, and past Q&A. CourseBot learns from everything.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-medium mb-4">
                2
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Train Your AI Assistant
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                CourseBot analyzes your materials and learns your teaching style in minutes. Customize responses as needed.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-medium mb-4">
                3
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                Activate 24/7 Student Support
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Students start getting instant answers through chat, email, or your LMS. You focus on teaching.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="text-primary hover:text-primary-dark font-light inline-flex items-center"
            >
              Learn more about our process
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Built for Course Creators */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Built for Course Creators, Not Just Institutions
              </h2>
              <p className="text-xl text-gray-600 font-light mb-8 leading-relaxed">
                Unlike enterprise-only solutions that cost $500+/month, CourseBot is designed for
                individual educators who want powerful AI support without the enterprise price tag.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Affordable at $49/month
                    </h3>
                    <p className="text-gray-600 font-light">
                      Designed for solo creators, not just large institutions
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      3-step setup in 2-3 hours
                    </h3>
                    <p className="text-gray-600 font-light">
                      No complex enterprise implementation required
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Learns your teaching style
                    </h3>
                    <p className="text-gray-600 font-light">
                      Context-aware AI adapts to your course-specific terminology
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FiCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      Hybrid intelligence
                    </h3>
                    <p className="text-gray-600 font-light">
                      AI handles routine, you handle complex—best of both worlds
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
                <p className="text-sm font-medium text-gray-500 mb-2">BEFORE COURSEBOT</p>
                <p className="text-gray-700 font-light mb-4">
                  "Where is the assignment for Week 3?"<br />
                  "When is the final project due?"<br />
                  "How do I access the course materials?"
                </p>
                <p className="text-sm text-red-600 font-medium">
                  10+ hours weekly answering repetitive questions
                </p>
              </div>

              <div className="bg-primary p-6 rounded-lg text-white">
                <p className="text-sm font-medium mb-2 opacity-90">WITH COURSEBOT</p>
                <p className="mb-4 font-light">
                  CourseBot instantly answers all routine questions 24/7
                </p>
                <p className="text-sm font-medium">
                  10+ hours saved for content creation & teaching
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Integration */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Seamless Integration with Your LMS
            </h2>
            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
              Works with the platforms you already use. No platform switching required.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <p className="text-xl font-medium text-gray-900">Teachable</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <p className="text-xl font-medium text-gray-900">Thinkific</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <p className="text-xl font-medium text-gray-900">Canvas</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <p className="text-xl font-medium text-gray-900">Moodle</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/integrations"
              className="text-primary hover:text-primary-dark font-light inline-flex items-center"
            >
              See all integrations
              <FiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What Course Creators Are Saying
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Join hundreds of educators saving 10+ hours weekly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-light mb-6 leading-relaxed">
                "CourseBot has been a game-changer. I'm saving 12+ hours every week and my students
                love getting instant answers at 2am when they're working on assignments."
              </p>
              <p className="text-gray-900 font-medium">Sarah Johnson</p>
              <p className="text-sm text-gray-600 font-light">Online Marketing Course Creator</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-light mb-6 leading-relaxed">
                "Setup took me 2 hours. Within 24 hours, CourseBot was answering 80% of my student
                questions. The ROI is incredible—I paid for itself in the first week."
              </p>
              <p className="text-gray-900 font-medium">Michael Chen</p>
              <p className="text-sm text-gray-600 font-light">Programming Course Instructor</p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-gray-700 font-light mb-6 leading-relaxed">
                "As my course grew to 500+ students, I couldn't keep up with questions. CourseBot
                handles the repetitive stuff so I can focus on the students who need real help."
              </p>
              <p className="text-gray-900 font-medium">Emily Rodriguez</p>
              <p className="text-sm text-gray-600 font-light">Business Course Creator</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Start Your Free Trial Today
          </h2>
          <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed">
            Join course creators who are saving 10+ hours every week.
            Set up CourseBot in 2-3 hours and start automating student support today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
            >
              Start Free Trial
              <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
          <p className="text-sm text-blue-100 mt-6 font-light">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </>
  );
}
