import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import type { BreadcrumbItem } from '@/types/seo';
import StructuredData from './StructuredData';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://coursebot-website.vercel.app' },
    ...items,
  ];

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        data={{
          items: breadcrumbItems.map(item => ({
            name: item.name,
            url: item.url,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <FiChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                )}
                {isLast ? (
                  <span className="font-medium text-gray-900">{item.name}</span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
