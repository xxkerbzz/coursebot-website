import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = { title: 'Try CourseBot Demo - See AI Student Support in Action', description: 'Experience CourseBot with interactive demo or schedule personalized walkthrough. No credit card required.' };

export default function DemoPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Demo', url: 'https://coursebot-website.vercel.app/demo' }]} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 mb-6">See CourseBot in Action</h1>
            <p className="text-xl text-gray-600 font-light mb-8">Experience how CourseBot handles student questions automatically. Start your 14-day free trial or schedule a personalized demo.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Interactive Demo</h2>
              <p className="text-gray-600 font-light mb-6">Try CourseBot immediately with our interactive demo. No signup required.</p>
              <div className="bg-white p-6 rounded border border-gray-200">
                <p className="text-sm text-gray-600 font-light">Interactive demo would load here</p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Free Trial</h2>
              <p className="text-gray-600 font-light mb-6">Start your 14-day free trial. No credit card required.</p>
              <ul className="space-y-3 mb-6">
                {['Full access to all features', '14-day free trial', 'No credit card required', 'Setup support included'].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <FiCheck className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-600 font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing" className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-light block text-center">Start Free Trial</Link>
            </div>
          </div>

          <section>
            <h2 className="text-3xl font-light text-gray-900 mb-6 text-center">What You'll See in the Demo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {['AI answering student questions', 'Training interface walkthrough', 'Analytics dashboard preview'].map((item, i) => (
                <div key={i} className="text-center p-4 border border-gray-200 rounded">
                  <p className="text-gray-700 font-light">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
