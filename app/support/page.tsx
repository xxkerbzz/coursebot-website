import type { Metadata } from 'next';
import Link from 'next/link';
import { FiBook, FiVideo, FiTool, FiMessageCircle, FiFileText, FiHelpCircle } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Support - Help Center & Documentation',
  description: 'Access comprehensive documentation, video tutorials, and support resources for CourseBot.',
};

const supportCategories = [
  {
    icon: FiBook,
    title: 'Getting Started Guide',
    description: 'Step-by-step guide to setting up your CourseBot account and training your AI assistant',
    links: [
      { label: 'Quick Start Guide', href: '#' },
      { label: 'Uploading Course Materials', href: '#' },
      { label: 'Training Your AI', href: '#' },
      { label: 'First Questions', href: '#' },
    ],
  },
  {
    icon: FiTool,
    title: 'Integration Tutorials',
    description: 'Learn how to connect CourseBot with your LMS and other platforms',
    links: [
      { label: 'Teachable Integration', href: '#' },
      { label: 'Thinkific Integration', href: '#' },
      { label: 'Canvas Integration', href: '#' },
      { label: 'Moodle Integration', href: '#' },
      { label: 'Email & Chat Setup', href: '#' },
    ],
  },
  {
    icon: FiFileText,
    title: 'Feature Documentation',
    description: 'Detailed documentation for all CourseBot features',
    links: [
      { label: 'AI Training Interface', href: '#' },
      { label: 'Question Routing', href: '#' },
      { label: 'Analytics Dashboard', href: '#' },
      { label: 'Multi-Channel Support', href: '#' },
      { label: 'Student Portal', href: '#' },
    ],
  },
  {
    icon: FiHelpCircle,
    title: 'Troubleshooting',
    description: 'Common issues and solutions',
    links: [
      { label: 'AI Not Responding', href: '#' },
      { label: 'Integration Issues', href: '#' },
      { label: 'Login Problems', href: '#' },
      { label: 'Performance Issues', href: '#' },
    ],
  },
  {
    icon: FiVideo,
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides for every feature',
    links: [
      { label: 'Complete Setup Tutorial', href: '#' },
      { label: 'Training Your AI Effectively', href: '#' },
      { label: 'Using Analytics', href: '#' },
      { label: 'Advanced Features', href: '#' },
    ],
  },
  {
    icon: FiMessageCircle,
    title: 'Contact Support Team',
    description: 'Can\'t find what you need? Our support team is here to help',
    links: [
      { label: 'Submit Support Ticket', href: '/contact' },
      { label: 'Email Support', href: 'mailto:support@coursebot.com' },
      { label: 'Live Chat', href: '#' },
      { label: 'Schedule Call', href: '#' },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Support', url: 'https://coursebot.com/support' }]} />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 mb-6">How Can We Help You?</h1>
            <p className="text-xl text-gray-600 font-light mb-8">Browse documentation, watch tutorials, or contact our support team</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/faq" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-light">
                View FAQ
              </Link>
              <Link href="/contact" className="bg-white hover:bg-gray-50 text-primary border border-primary px-8 py-3 rounded-md font-light">
                Contact Support
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h2 className="text-xl font-medium text-gray-900 mb-3">{category.title}</h2>
                  <p className="text-gray-600 font-light mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-primary hover:underline text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <section className="bg-primary/5 rounded-lg p-8 mb-16">
            <div className="text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-4">Support Response Times</h2>
              <p className="text-gray-600 font-light mb-6">We're committed to helping you succeed</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div>
                  <p className="text-2xl font-medium text-primary mb-2">24 hours</p>
                  <p className="text-sm text-gray-600 font-light">Email support response</p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-primary mb-2">2 hours</p>
                  <p className="text-sm text-gray-600 font-light">Chat support response</p>
                </div>
                <div>
                  <p className="text-2xl font-medium text-primary mb-2">1 hour</p>
                  <p className="text-sm text-gray-600 font-light">Enterprise priority support</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Join Our Community</h2>
            <p className="text-xl text-gray-600 font-light mb-6">Connect with other educators using CourseBot</p>
            <p className="text-gray-600 font-light">Share best practices, get tips, and learn from fellow course creators in our active user community.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
