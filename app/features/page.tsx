import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCpu, FiMessageSquare, FiFilter, FiUploadCloud, FiBarChart2, FiRefreshCw, FiClock, FiLink, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Features - Complete AI Student Support Platform',
  description: 'Explore CourseBot features: AI-powered FAQ, multi-channel support, intelligent routing, analytics dashboard, LMS integrations, and continuous learning capabilities.',
  keywords: ['AI student support features', 'course automation features', 'LMS integration'],
  openGraph: {
    title: 'CourseBot Features - Complete AI Student Support Platform',
    description: 'Every feature you need to automate student support and save 10+ hours weekly',
    url: 'https://coursebot.com/features',
  },
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <FiCpu className="w-10 h-10 text-primary" />,
      title: 'AI-Powered FAQ System',
      description: 'Trained on your course materials, syllabus, and historical Q&A, CourseBot becomes an expert on your specific course. It understands context, provides accurate answers, and adapts to your teaching style.',
      benefits: [
        'Upload course materials, syllabus, FAQs, and past student questions',
        'AI learns your course structure and terminology',
        'Provides contextually accurate answers based on your materials',
        'Continuously improves accuracy based on feedback',
      ],
    },
    {
      icon: <FiMessageSquare className="w-10 h-10 text-primary" />,
      title: 'Multi-Channel Support (Chat, Email, LMS)',
      description: 'Meet students where they are. CourseBot works across chat widgets, email, and directly within your LMS, providing consistent support on every channel.',
      benefits: [
        'Embedded chat widget for your website',
        'Email integration for inbox automation',
        'Direct LMS integration (Teachable, Thinkific, Canvas, Moodle)',
        'Consistent answers across all channels',
      ],
    },
    {
      icon: <FiFilter className="w-10 h-10 text-primary" />,
      title: 'Intelligent Question Routing',
      description: 'CourseBot automatically handles routine questions and intelligently flags complex or sensitive issues that need your attention. Get the best of both worlds: automation and human touch.',
      benefits: [
        'Automatically answers 80% of routine questions',
        'Flags complex questions for instructor review',
        'Prioritizes urgent or sensitive student issues',
        'Customizable routing rules based on question type',
      ],
    },
    {
      icon: <FiUploadCloud className="w-10 h-10 text-primary" />,
      title: 'Custom Training Interface',
      description: 'Easy-to-use interface for uploading course materials and training your AI assistant. No technical expertise required—just drag and drop your files.',
      benefits: [
        'Simple drag-and-drop file upload',
        'Supports PDFs, documents, presentations, and more',
        'Bulk upload of multiple files',
        'Easy updates when course materials change',
      ],
    },
    {
      icon: <FiBarChart2 className="w-10 h-10 text-primary" />,
      title: 'Analytics & Reporting Dashboard',
      description: 'Track common questions, response accuracy, time saved, and student satisfaction. Gain valuable insights into what your students need and where your course might need improvement.',
      benefits: [
        'Most frequently asked questions report',
        'Response accuracy metrics',
        'Time saved calculator',
        'Student satisfaction scores',
        'Question volume trends over time',
      ],
    },
    {
      icon: <FiRefreshCw className="w-10 h-10 text-primary" />,
      title: 'Continuous AI Learning',
      description: 'CourseBot gets smarter with every interaction. It learns from your feedback, adapts to your course-specific terminology, and continuously improves its responses.',
      benefits: [
        'Learns from instructor feedback and corrections',
        'Adapts to course-specific terminology and jargon',
        'Improves accuracy over time',
        'Updates automatically when course materials change',
      ],
    },
    {
      icon: <FiClock className="w-10 h-10 text-primary" />,
      title: '24/7 Student Portal',
      description: 'Students get instant access to help anytime, anywhere. The 24/7 portal includes chat history, FAQs, and the ability to escalate to an instructor when needed.',
      benefits: [
        'Instant answers at any time of day',
        'Conversation history for reference',
        'Easy escalation to instructor for complex issues',
        'Mobile-responsive design',
      ],
    },
    {
      icon: <FiLink className="w-10 h-10 text-primary" />,
      title: 'LMS Integrations',
      description: 'Seamless integration with major learning management systems. CourseBot works where your students already are—no platform switching required.',
      benefits: [
        'Teachable integration',
        'Thinkific integration',
        'Canvas LMS integration',
        'Moodle integration',
        'API access for custom integrations',
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Features', url: 'https://coursebot.com/features' }]} />

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Every Feature You Need to Automate Student Support
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            From AI-powered FAQ systems to comprehensive analytics, CourseBot has everything you need to provide
            exceptional student support while saving 10+ hours every week.
          </p>
          <Link
            href="/demo"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
          >
            Start Free Trial
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Features Grid */}
        <div className="space-y-20 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-lg mb-6">
                  {feature.icon}
                </div>
                <h2 className="text-3xl font-light text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">{feature.description}</p>
              </div>
              <div className={`bg-gray-50 p-8 rounded-lg ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Key Capabilities:</h3>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="bg-primary py-20 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-white mb-6">See CourseBot Features in Action</h2>
            <p className="text-xl text-blue-100 mb-8 font-light leading-relaxed">
              Experience how easy it is to automate student support. Start your free 14-day trial today.
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
                href="/how-it-works"
                className="border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded-md text-lg font-light transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
