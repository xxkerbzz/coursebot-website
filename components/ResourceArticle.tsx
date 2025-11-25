import type { ReactNode } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiClock, FiUser } from 'react-icons/fi';
import Breadcrumbs from './Breadcrumbs';
import StructuredData from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ResourceArticleProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  h1: string;
  author?: string;
  readTime?: string;
  publishDate?: string;
  children: ReactNode;
  relatedLinks?: { title: string; url: string }[];
  ctaText?: string;
  ctaUrl?: string;
}

export default function ResourceArticle({
  breadcrumbs,
  title,
  h1,
  author = 'CourseBot Team',
  readTime = '8 min read',
  publishDate,
  children,
  relatedLinks,
  ctaText = 'Start Free Trial',
  ctaUrl = '/demo',
}: ResourceArticleProps) {
  const publishDateFormatted = publishDate || new Date().toISOString();

  return (
    <div className="bg-white">
      <StructuredData
        type="Article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: h1,
          author: {
            '@type': 'Organization',
            name: 'CourseBot',
          },
          publisher: {
            '@type': 'Organization',
            name: 'CourseBot',
            logo: {
              '@type': 'ImageObject',
              url: 'https://coursebot-website.vercel.app/logo.png',
            },
          },
          datePublished: publishDateFormatted,
          dateModified: publishDateFormatted,
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbs} />

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-5xl font-light text-gray-900 mb-6">{h1}</h1>
            <div className="flex items-center gap-6 text-sm text-gray-600 font-light">
              <div className="flex items-center gap-2">
                <FiUser className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-lg p-8 my-16 text-center">
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Ready to Automate Your Student Support?
            </h3>
            <p className="text-gray-600 font-light mb-6">
              Join thousands of educators saving 10+ hours every week with CourseBot.
            </p>
            <Link
              href={ctaUrl}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-light inline-flex items-center"
            >
              {ctaText} <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Related Articles */}
          {relatedLinks && relatedLinks.length > 0 && (
            <div className="border-t border-gray-200 pt-12 mt-12">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.url}
                    className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
                  >
                    <h4 className="text-gray-900 font-medium mb-2">{link.title}</h4>
                    <span className="text-primary text-sm">Read more →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
