import type { Metadata } from 'next';
import Link from 'next/link';
import { FiBookOpen, FiTrendingUp, FiCpu, FiZap, FiUsers, FiMonitor } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Resources - CourseBot Learning Center',
  description: 'Guides, best practices, and insights for online educators using AI to automate student support.',
};

const resourceTopics = [
  {
    icon: FiCpu,
    title: 'AI Student Support for Online Education',
    description: 'Learn how AI can automate student questions, provide 24/7 support, and save you 10+ hours weekly.',
    url: '/resources/ai-student-support-for-online-education',
    articles: 6,
  },
  {
    icon: FiZap,
    title: 'Course Creator Tools & Productivity',
    description: 'Discover tools and strategies to boost your productivity and streamline course management.',
    url: '/resources/course-creator-tools-and-productivity',
    articles: 2,
  },
  {
    icon: FiMonitor,
    title: 'LMS Integration & Technology',
    description: 'Connect AI support with your LMS platform - Teachable, Thinkific, Canvas, Moodle, and more.',
    url: '/resources/lms-integration-and-technology',
    articles: 1,
  },
  {
    icon: FiUsers,
    title: 'Student Engagement & Success',
    description: 'Improve student retention, satisfaction, and learning outcomes with better support systems.',
    url: '/resources/student-engagement-and-success',
    articles: 6,
  },
  {
    icon: FiTrendingUp,
    title: 'Online Course Creation & Teaching',
    description: 'Best practices for creating and delivering exceptional online learning experiences.',
    url: '/resources/online-course-creation-and-teaching',
    articles: 1,
  },
  {
    icon: FiBookOpen,
    title: 'Educational Technology & EdTech',
    description: 'Stay current with edtech trends, AI innovations, and the future of online education.',
    url: '/resources/educational-technology-and-edtech',
    articles: 1,
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Resources', url: 'https://coursebot.com/resources' }]} />

        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-6 text-center">CourseBot Learning Center</h1>
          <p className="text-xl text-gray-600 font-light text-center">
            Guides, best practices, and insights for online educators using AI to transform student support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resourceTopics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <Link
                key={index}
                href={topic.url}
                className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors group"
              >
                <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h2 className="text-xl font-medium text-gray-900 mb-3">{topic.title}</h2>
                <p className="text-gray-600 font-light mb-4">{topic.description}</p>
                <p className="text-sm text-primary font-medium">{topic.articles} {topic.articles === 1 ? 'article' : 'articles'} →</p>
              </Link>
            );
          })}
        </div>

        <section className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">Ready to Transform Your Course Support?</h2>
          <p className="text-xl text-gray-600 font-light mb-6">
            Join thousands of educators saving 10+ hours every week with AI-powered student support.
          </p>
          <Link
            href="/demo"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light inline-block"
          >
            Start Free Trial
          </Link>
        </section>
      </div>
    </div>
  );
}
