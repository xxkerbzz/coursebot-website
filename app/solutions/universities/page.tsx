import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck, FiShield, FiUsers, FiBarChart, FiHeadphones, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot for Universities - Scalable Student Support',
  description: 'Enterprise AI support for educational institutions with FERPA compliance, centralized management, and dedicated support team.',
};

export default function UniversitiesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[
          { name: 'Solutions', url: 'https://coursebot.com/solutions' },
          { name: 'For Universities', url: 'https://coursebot.com/solutions/universities' }
        ]} />

        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl font-light text-gray-900 mb-6">Enterprise AI Support for Educational Institutions</h1>
          <p className="text-xl text-gray-600 font-light mb-8">Scale support across departments with FERPA-compliant, enterprise-grade AI assistance. Support hundreds of courses and thousands of students from one centralized platform.</p>
          <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">
            Schedule Enterprise Demo <FiArrowRight className="ml-2" />
          </Link>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-light text-gray-900 mb-12">Scale Support Across Departments</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xl text-gray-600 font-light mb-6">CourseBot enables universities to provide consistent, high-quality student support across all departments and programs. Centralized management means administrators can oversee AI performance while faculty focus on teaching.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="space-y-4">
                {['Support multiple departments from one dashboard', 'Consistent support quality across all courses', 'Scale without hiring additional staff', 'Department-specific customization'].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary flex-shrink-0 mt-1 mr-3" />
                    <span className="text-gray-700 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FiShield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">FERPA Compliance & Data Security</h3>
              <p className="text-gray-600 font-light">Full FERPA compliance with enterprise security. SOC 2 certified with end-to-end encryption and secure data handling.</p>
            </div>
            <div className="text-center p-6">
              <FiUsers className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Multi-Course Management</h3>
              <p className="text-gray-600 font-light">Centralized dashboard for managing AI support across hundreds of courses and thousands of students simultaneously.</p>
            </div>
            <div className="text-center p-6">
              <FiBarChart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-3">Enterprise Analytics</h3>
              <p className="text-gray-600 font-light">Institution-wide analytics showing support metrics, student satisfaction, and ROI across all departments.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">Dedicated Support Team</h2>
            <p className="text-xl text-gray-600 font-light text-center mb-12">Enterprise customers receive dedicated implementation, account management, and priority support to ensure success.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Dedicated account manager',
                'Custom SLA guarantees',
                'Priority technical support',
                'Regular strategy sessions',
                'Custom feature development',
                'Training for administrators'
              ].map((benefit, i) => (
                <div key={i} className="flex items-center">
                  <FiCheck className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Schedule a Demo</h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">See how CourseBot can transform student support across your institution. Schedule a personalized demo with our enterprise team.</p>
          <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-flex items-center">
            Schedule Enterprise Demo <FiArrowRight className="ml-2" />
          </Link>
        </section>
      </div>
    </div>
  );
}
