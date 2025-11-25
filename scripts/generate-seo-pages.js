const fs = require('fs');
const path = require('path');

// Base paths
const seoStrategyPath = '/Users/hubert/Documents/Cursor Projects/Agents/v4 agents - chatgpt/coursebot/SEO Strategy';
const appPath = path.join(__dirname, '../app');

// Helper function to convert title to URL slug
function titleToSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Helper function to create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate main pillar page
function generateMainPillarPage(pillarData, siloName) {
  const url = pillarData.url;
  const dirPath = path.join(appPath, url);
  ensureDir(dirPath);

  const pageContent = `import type { Metadata } from 'next';
import ResourceArticle from '@/components/ResourceArticle';

export const metadata: Metadata = {
  title: '${pillarData.title}',
  description: '${pillarData.value_proposition_alignment}',
};

export default function Page() {
  return (
    <ResourceArticle
      breadcrumbs={[
        { name: 'Resources', url: 'https://coursebot.com/resources' },
        { name: '${siloName}', url: 'https://coursebot.com${url}' },
      ]}
      title="${pillarData.title}"
      h1="${pillarData.h1}"
      readTime="12 min read"
      ctaText="${pillarData.cta_strategy}"
    >
      <section className="mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-6">${pillarData.h2_structure[0]}</h2>
        <p className="text-gray-600 font-light leading-relaxed mb-6">
          ${pillarData.value_proposition_alignment} This comprehensive guide covers everything you need to know about implementing AI student support in your online courses.
        </p>
      </section>

      ${pillarData.h2_structure.slice(1, -1).map(h2 => `
      <section className="mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-6">${h2}</h2>
        <p className="text-gray-600 font-light leading-relaxed mb-6">
          ${h2.includes('Benefits') ?
            'By implementing AI student support, you can save 10+ hours every week, provide instant 24/7 assistance to students, and focus on what matters most - teaching and creating great content.' :
            h2.includes('Works') ?
            'AI student support systems analyze your course materials, learn your teaching style, and automatically respond to student questions with accurate, contextual answers. The system continuously improves based on your feedback.' :
            h2.includes('Implementing') || h2.includes('Getting Started') ?
            'Getting started with AI student support is straightforward. Upload your course materials, train the AI on your content, and activate automated support. Most educators see results within 24 hours.' :
            h2.includes('Best Practices') ?
            'To maximize the effectiveness of AI student support, regularly review AI responses, update your course materials, and use analytics to identify common student challenges. The AI learns and improves continuously.' :
            h2.includes('Future') ?
            'AI student support is rapidly evolving. Future developments include advanced natural language understanding, personalized learning recommendations, and proactive student engagement features.' :
            'Learn more about this aspect of AI student support and how it can transform your online teaching experience.'
          }
        </p>
      </section>
      `).join('\n')}

      <section className="mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-6">${pillarData.h2_structure[pillarData.h2_structure.length - 1]}</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          AI student support is transforming online education by eliminating repetitive work and providing better student experiences. Start your journey today and join thousands of educators who have reclaimed their time while improving student satisfaction.
        </p>
      </section>
    </ResourceArticle>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  console.log(`✓ Generated: ${url}`);
  return url;
}

// Generate subtopic pillar page
function generateSubtopicPage(subtopicData, siloName, mainPillarUrl) {
  const url = subtopicData.url;
  const dirPath = path.join(appPath, url);
  ensureDir(dirPath);

  const pageContent = `import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceArticle from '@/components/ResourceArticle';

export const metadata: Metadata = {
  title: '${subtopicData.title}',
  description: '${subtopicData.h1}',
};

export default function Page() {
  return (
    <ResourceArticle
      breadcrumbs={[
        { name: 'Resources', url: 'https://coursebot.com/resources' },
        { name: '${siloName}', url: 'https://coursebot.com${mainPillarUrl}' },
        { name: '${subtopicData.title.split(':')[0]}', url: 'https://coursebot.com${url}' },
      ]}
      title="${subtopicData.title}"
      h1="${subtopicData.h1}"
      readTime="8 min read"
      ctaText="${subtopicData.cta_strategy}"
    >
      ${subtopicData.h2_structure.map((h2, index) => `
      <section className="mb-12">
        <h2 className="text-3xl font-light text-gray-900 mb-6">${h2}</h2>
        <p className="text-gray-600 font-light leading-relaxed mb-6">
          ${index === 0 ?
            `Understanding ${subtopicData.primary_keyword} is crucial for online educators looking to improve student support and save time. This guide covers everything you need to know.` :
            h2.includes('Benefits') ?
            'The key benefits include saving time, improving student satisfaction, providing 24/7 support, and focusing more on teaching rather than repetitive tasks.' :
            h2.includes('Works') || h2.includes('How') ?
            'The system analyzes your course content, learns patterns from student questions, and provides accurate automated responses while routing complex questions to you.' :
            h2.includes('Features') ?
            'Key features include AI-powered question answering, multi-channel support, analytics dashboards, continuous learning, and seamless LMS integration.' :
            h2.includes('Setting Up') || h2.includes('Implementing') ?
            'Implementation is straightforward: upload your materials, configure settings, train the AI, and activate. Most setups complete in 2-3 hours.' :
            h2.includes('Tools') || h2.includes('Best') ?
            'CourseBot stands out with its educator-first design, affordable pricing starting at $49/month, and proven track record of saving educators 10+ hours weekly.' :
            h2.includes('Pricing') || h2.includes('Cost') ?
            'Pricing ranges from $49/month for individual creators to custom enterprise plans. Given that most educators save 10+ hours weekly, the ROI is immediate.' :
            h2.includes('Practices') ?
            'Best practices include regularly reviewing AI responses, keeping course materials updated, using analytics to improve content, and letting the AI handle routine questions while you focus on complex issues.' :
            'Learn more about this important aspect and how it can benefit your online teaching.'
          }
        </p>
      </section>
      `).join('\n')}

      <section className="bg-gray-50 p-8 rounded-lg mb-12">
        <h3 className="text-xl font-medium text-gray-900 mb-4">Learn More About ${siloName}</h3>
        <Link href="${mainPillarUrl}" className="text-primary hover:underline">
          Read the complete guide to ${siloName} →
        </Link>
      </section>
    </ResourceArticle>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  console.log(`✓ Generated: ${url}`);
  return url;
}

// Generate PAA post page
function generatePAAPage(paaData, siloName, subtopicUrl, mainPillarUrl) {
  const url = paaData.url;
  const dirPath = path.join(appPath, url);
  ensureDir(dirPath);

  const pageContent = `import type { Metadata } from 'next';
import Link from 'next/link';
import ResourceArticle from '@/components/ResourceArticle';

export const metadata: Metadata = {
  title: '${paaData.title}',
  description: '${paaData.h1}',
};

export default function Page() {
  return (
    <ResourceArticle
      breadcrumbs={[
        { name: 'Resources', url: 'https://coursebot.com/resources' },
        { name: '${siloName}', url: 'https://coursebot.com${mainPillarUrl}' },
        { name: '${paaData.title}', url: 'https://coursebot.com${url}' },
      ]}
      title="${paaData.title}"
      h1="${paaData.h1}"
      readTime="5 min read"
      ctaText="${paaData.cta_strategy}"
    >
      ${paaData.h2_structure.map((h2, index) => `
      <section className="mb-10">
        <h2 className="text-2xl font-light text-gray-900 mb-4">${h2}</h2>
        <p className="text-gray-600 font-light leading-relaxed">
          ${index === 0 ?
            `${paaData.quick_answer}` :
            h2.includes('Key Points') || h2.includes('Important') ?
            'Understanding these key aspects helps you make informed decisions about implementing this in your courses. The right approach depends on your specific needs and course structure.' :
            h2.includes('Benefits') || h2.includes('Why') ?
            'The benefits are significant for course creators, including time savings, improved student satisfaction, and better learning outcomes. Many educators see immediate results.' :
            h2.includes('How') ?
            'The process is straightforward and designed for educators without technical expertise. CourseBot handles the complexity while you focus on teaching.' :
            h2.includes('Best Practices') || h2.includes('Tips') ?
            'Following best practices ensures you get maximum value. Start with clear course materials, monitor AI performance, and continuously refine based on student interactions.' :
            h2.includes('Get Started') || h2.includes('Next Steps') ?
            'Ready to implement this in your courses? CourseBot makes it easy with a 14-day free trial and setup support. No credit card required.' :
            'This is an important consideration for online educators looking to improve their course support and student experience.'
          }
        </p>
      </section>
      `).join('\n')}

      <section className="bg-gray-50 p-6 rounded-lg mb-10">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Related Topics</h3>
        <div className="space-y-2">
          <Link href="${subtopicUrl}" className="block text-primary hover:underline">
            Learn more about ${subtopicUrl.split('/').pop().replace(/-/g, ' ')} →
          </Link>
          <Link href="${mainPillarUrl}" className="block text-primary hover:underline">
            Explore ${siloName} →
          </Link>
        </div>
      </section>
    </ResourceArticle>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  console.log(`✓ Generated: ${url}`);
  return url;
}

// Main function to generate all pages
function generateAllPages() {
  console.log('🚀 Starting SEO page generation...\n');

  const generatedPages = [];
  const siloFolders = fs.readdirSync(seoStrategyPath).filter(item => {
    const itemPath = path.join(seoStrategyPath, item);
    return fs.statSync(itemPath).isDirectory() && !item.startsWith('.');
  });

  siloFolders.forEach(siloFolder => {
    const jsonPath = path.join(seoStrategyPath, siloFolder, '04. Silo - Detailed.json');

    if (!fs.existsSync(jsonPath)) {
      console.log(`⚠️  Skipping ${siloFolder} - no JSON file found`);
      return;
    }

    const siloData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
    console.log(`\n📁 Processing: ${siloData.silo_name}`);

    // Generate main pillar page
    const mainPillarUrl = generateMainPillarPage(siloData.main_pillar, siloData.silo_name);
    generatedPages.push(mainPillarUrl);

    // Generate subtopic pillar pages
    if (siloData.subtopic_pillars && Array.isArray(siloData.subtopic_pillars)) {
      siloData.subtopic_pillars.forEach(subtopic => {
        const subtopicUrl = generateSubtopicPage(subtopic, siloData.silo_name, mainPillarUrl);
        generatedPages.push(subtopicUrl);

        // Generate PAA pages for this subtopic
        if (subtopic.paa_posts && Array.isArray(subtopic.paa_posts)) {
          subtopic.paa_posts.forEach(paa => {
            const paaUrl = generatePAAPage(paa, siloData.silo_name, subtopicUrl, mainPillarUrl);
            generatedPages.push(paaUrl);
          });
        }
      });
    } else {
      console.log(`  ⚠️  No subtopic pillars found for ${siloData.silo_name}`);
    }
  });

  console.log(`\n✅ Generation complete! Created ${generatedPages.length} pages.`);
  return generatedPages;
}

// Run the generator
try {
  const pages = generateAllPages();

  // Update build progress
  const progressPath = path.join(seoStrategyPath, '.build-progress.json');
  const progress = JSON.parse(fs.readFileSync(progressPath, 'utf8'));
  progress.completed_pages = [...progress.completed_pages, ...pages];
  progress.current_step = 'Step 3: SEO Content Pages Complete';
  progress.step_3_status = 'completed';
  fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));

  console.log('\n📊 Build progress updated.');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
