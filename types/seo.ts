export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  noindex?: boolean;
  nofollow?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Article' | 'FAQPage' | 'Product' | 'BreadcrumbList' | 'HowTo' | 'ContactPage';
  data: any;
}
