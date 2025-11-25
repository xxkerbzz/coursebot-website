import type { SEOData } from '@/types/seo';

export function generateMetaTags(seo: SEOData) {
  const {
    title,
    description,
    canonical,
    keywords,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
    nofollow = false,
  } = seo;

  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
  ].join(', ');

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    robots: robotsContent,
    canonical: canonical || '',
    openGraph: {
      title,
      description,
      url: canonical || '',
      type: ogType,
      images: ogImage ? [{ url: ogImage }] : [],
      siteName: 'CourseBot',
    },
    twitter: {
      card: twitterCard,
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
  };
}

export function generateSitemap(pages: Array<{ url: string; lastmod?: string; changefreq?: string; priority?: number }>) {
  const baseUrl = 'https://coursebot.com';

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority !== undefined ? page.priority : 0.8}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}
