import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCheck, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Pricing - Affordable AI Support for Course Creators',
  description: 'Transparent pricing starting at $49/month for individual creators. Save 10+ hours weekly with automated student support. 14-day free trial, no credit card required.',
  keywords: ['AI student support pricing', 'course automation cost', 'education AI pricing'],
  openGraph: {
    title: 'CourseBot Pricing - Starting at $49/month',
    description: 'Affordable pricing that scales with your teaching. Save 10+ hours weekly.',
    url: 'https://coursebot-website.vercel.app/pricing',
  },
};

export default function PricingPage() {
  const plans = [
    {
      name: 'Creator',
      price: 49,
      description: 'Perfect for individual course creators',
      students: 'Up to 100 students',
      features: [
        'AI-powered FAQ automation',
        '24/7 student support',
        'Multi-channel support (chat, email)',
        '1 course integration',
        'Basic analytics dashboard',
        'Email support',
        '2-3 hour setup assistance',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: 99,
      description: 'For growing course businesses',
      students: 'Up to 500 students',
      features: [
        'Everything in Creator, plus:',
        'Up to 3 course integrations',
        'Advanced analytics & reporting',
        'Custom AI training',
        'Priority email support',
        'Dedicated onboarding call',
        'Custom response templates',
        'API access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Institution',
      price: 'Custom',
      description: 'For universities and enterprises',
      students: 'Unlimited students',
      features: [
        'Everything in Professional, plus:',
        'Unlimited course integrations',
        'Enterprise analytics',
        'FERPA compliance',
        'SSO / SAML integration',
        'Dedicated account manager',
        'Custom SLA',
        'White-label options',
        'Volume discounts',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Pricing', url: 'https://coursebot-website.vercel.app/pricing' }]} />

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Pricing That Scales With Your Teaching
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Transparent pricing with no hidden fees. Save 10+ hours every week for less than the cost of a single
            hour of your time.
          </p>
          <p className="text-lg text-gray-600 font-light">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-lg border-2 ${
                plan.popular ? 'border-primary shadow-lg' : 'border-gray-200'
              } p-8`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h2 className="text-2xl font-medium text-gray-900 mb-2">{plan.name}</h2>
                <div className="mb-4">
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-5xl font-light text-gray-900">${plan.price}</span>
                      <span className="text-gray-600 font-light">/month</span>
                    </>
                  ) : (
                    <span className="text-5xl font-light text-gray-900">{plan.price}</span>
                  )}
                </div>
                <p className="text-gray-600 font-light mb-2">{plan.description}</p>
                <p className="text-sm text-gray-500 font-light">{plan.students}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <FiCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700 font-light">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.name === 'Institution' ? '/contact' : '/demo'}
                className={`block text-center py-3 px-6 rounded-md font-light transition-colors ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'border border-gray-300 hover:border-primary text-gray-700 hover:text-primary'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* All Plans Include */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">All Plans Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'AI-powered FAQ automation',
                'Intelligent question routing',
                'Multi-channel support',
                'Continuous AI learning',
                'Analytics dashboard',
                'LMS integrations',
                'Regular product updates',
                '30-day money-back guarantee',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FiCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-700 font-light">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-6 text-center">ROI Calculator</h2>
            <p className="text-xl text-gray-600 font-light text-center mb-12">
              See how much time and money you'll save with CourseBot
            </p>

            <div className="bg-primary/5 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Your Current Situation</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-700 font-light mb-2">
                        Hours spent on questions per week
                      </label>
                      <input
                        type="number"
                        defaultValue="10"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        disabled
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-light mb-2">
                        Your hourly rate ($)
                      </label>
                      <input
                        type="number"
                        defaultValue="50"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">With CourseBot</h3>
                  <div className="bg-white p-6 rounded-lg">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 font-light">Hours saved per week</p>
                        <p className="text-3xl font-light text-primary">10 hours</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-light">Value of time saved per month</p>
                        <p className="text-3xl font-light text-primary">$2,000</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 font-light">CourseBot cost</p>
                        <p className="text-3xl font-light text-gray-900">$49/mo</p>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 font-light">Net monthly savings</p>
                        <p className="text-4xl font-light text-green-600">$1,951</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-center text-gray-600 font-light">
                CourseBot pays for itself in the first week by reclaiming 10+ hours of your time.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Can I change plans later?</h3>
                <p className="text-gray-600 font-light">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate any billing adjustments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">What happens after the free trial?</h3>
                <p className="text-gray-600 font-light">
                  After your 14-day free trial, you'll be automatically enrolled in your chosen plan. You can cancel
                  anytime during the trial with no charges.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600 font-light">
                  Yes! We offer a 30-day money-back guarantee. If CourseBot doesn't meet your expectations, contact us
                  within 30 days for a full refund.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600 font-light">
                  We accept all major credit cards (Visa, Mastercard, American Express) and offer annual billing with a
                  discount.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Start Saving Time Today</h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Join hundreds of course creators saving 10+ hours every week with CourseBot.
          </p>
          <Link
            href="/demo"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
          >
            Start Your Free Trial
            <FiArrowRight className="ml-2" />
          </Link>
          <p className="text-sm text-gray-500 mt-4 font-light">
            No credit card required • Cancel anytime
          </p>
        </section>
      </div>
    </div>
  );
}
