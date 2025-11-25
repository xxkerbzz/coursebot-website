import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'CourseBot FAQ - Frequently Asked Questions',
  description: 'Common questions about CourseBot setup, pricing, integrations, security, and support.',
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How long does setup take?',
        answer: 'Initial setup takes 2-3 hours. You\'ll upload your course materials, train the AI on your content, and activate support. The AI starts answering questions within 24 hours.',
      },
      {
        question: 'Do I need technical skills to use CourseBot?',
        answer: 'No technical expertise required. Our interface is designed for educators, not developers. If you can upload files and type responses, you can set up CourseBot.',
      },
      {
        question: 'What\'s included in the 14-day free trial?',
        answer: 'Full access to all features in your chosen plan. No credit card required. You can train the AI, integrate with your LMS, and see real results before paying.',
      },
    ],
  },
  {
    category: 'Pricing & Plans',
    questions: [
      {
        question: 'How much does CourseBot cost?',
        answer: 'Creator Plan: $49/month (up to 100 students), Professional Plan: $99/month (up to 500 students), Institution Plan: Custom pricing for universities and large organizations.',
      },
      {
        question: 'Can I cancel anytime?',
        answer: 'Yes, cancel anytime with no penalties. We also offer a 30-day money-back guarantee if you\'re not satisfied.',
      },
      {
        question: 'What happens if I exceed my student limit?',
        answer: 'We\'ll notify you when you approach your limit. You can upgrade to the next plan or contact us for custom pricing.',
      },
    ],
  },
  {
    category: 'Integrations & Technical',
    questions: [
      {
        question: 'What platforms does CourseBot integrate with?',
        answer: 'We integrate directly with Teachable, Thinkific, Canvas, and Moodle. We also support email and chat integrations. New platform integrations are added regularly based on user requests.',
      },
      {
        question: 'Can I use CourseBot without an LMS?',
        answer: 'Yes! CourseBot works as a standalone support portal, via email, or embedded on your website. LMS integration is optional.',
      },
      {
        question: 'Does CourseBot have an API?',
        answer: 'Yes, Professional and Institution plans include API access for custom integrations.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        question: 'Is CourseBot FERPA compliant?',
        answer: 'Yes, CourseBot is fully FERPA compliant. Student data is encrypted, never sold to third parties, and never used to train our AI models.',
      },
      {
        question: 'What happens to my course content?',
        answer: 'Your content is encrypted and stored securely. It\'s only used to train your specific AI assistant and is never shared with other users or used for model training.',
      },
      {
        question: 'Can I export my data?',
        answer: 'Yes, you can export all your data (questions, answers, analytics) at any time. We believe in full data ownership.',
      },
    ],
  },
  {
    category: 'Support & Training',
    questions: [
      {
        question: 'How accurate is the AI?',
        answer: 'CourseBot answers 80%+ of questions accurately after initial training. Accuracy improves continuously as the AI learns from instructor corrections and new content.',
      },
      {
        question: 'What if the AI gives a wrong answer?',
        answer: 'You\'ll be notified when the AI is uncertain. You can review answers, correct them, and the AI learns from your feedback. Complex questions are automatically routed to you.',
      },
      {
        question: 'Do you provide training and support?',
        answer: 'Yes! All plans include onboarding support, video tutorials, and comprehensive documentation. Professional and Institution plans include personalized training sessions.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white">
      <StructuredData
        type="FAQPage"
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.flatMap((category) =>
            category.questions.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            }))
          ),
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'FAQ', url: 'https://coursebot-website.vercel.app/faq' }]} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-gray-900 mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 font-light">Quick answers to common questions about CourseBot</p>
          </div>

          {faqs.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 mb-8">{category.category}</h2>
              <div className="space-y-8">
                {category.questions.map((faq, faqIndex) => (
                  <div key={faqIndex} className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}

          <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-light text-gray-900 mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-600 font-light mb-8">Our support team is here to help.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-light inline-flex items-center justify-center">
                  Contact Support <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/demo" className="bg-white hover:bg-gray-50 text-primary border border-primary px-8 py-3 rounded-md font-light inline-flex items-center justify-center">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
