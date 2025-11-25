import type { StructuredDataProps } from '@/types/seo';

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {};

  switch (type) {
    case 'Organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'CourseBot',
        url: 'https://coursebot.com',
        logo: 'https://coursebot.com/logo.png',
        description: 'AI-powered student support assistant for online educators',
        ...data,
      };
      break;

    case 'WebSite':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'CourseBot',
        url: 'https://coursebot.com',
        description: 'AI-powered student support assistant for online educators',
        ...data,
      };
      break;

    case 'Article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        ...data,
      };
      break;

    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        ...data,
      };
      break;

    case 'BreadcrumbList':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: data.items?.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;

    case 'HowTo':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        ...data,
      };
      break;

    case 'Product':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        ...data,
      };
      break;

    default:
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
