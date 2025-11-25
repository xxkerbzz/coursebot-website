const fs = require('fs');
const path = require('path');

// Map of silo directories to their JSON files
const silos = {
  'ai-student-support-for-online-education': '../../SEO Strategy/AI Student Support for Online Education/04. Silo - Detailed.json',
  'course-creator-tools-and-productivity': '../../SEO Strategy/Course Creator Tools & Productivity/04. Silo - Detailed.json',
  'educational-technology-and-edtech': '../../SEO Strategy/Educational Technology & EdTech/04. Silo - Detailed.json',
  'lms-integration-and-technology': '../../SEO Strategy/LMS Integration & Technology/04. Silo - Detailed.json',
  'online-course-creation-and-teaching': '../../SEO Strategy/Online Course Creation & Teaching/04. Silo - Detailed.json',
  'student-engagement-and-success': '../../SEO Strategy/Student Engagement & Success/04. Silo - Detailed.json'
};

// Process each silo
Object.entries(silos).forEach(([siloDir, jsonPath]) => {
  const fullJsonPath = path.join(__dirname, jsonPath);

  if (!fs.existsSync(fullJsonPath)) {
    console.log(`Skipping ${siloDir} - JSON not found`);
    return;
  }

  const siloData = JSON.parse(fs.readFileSync(fullJsonPath, 'utf8'));

  // 1. Add subtopic links to main pillar page
  addSubtopicLinksToMainPillar(siloDir, siloData);

  // 2. Add PAA links to each subtopic page
  siloData.subtopic_pillars.forEach(subtopic => {
    addPAALinksToSubtopic(siloDir, subtopic);
  });
});

console.log('\n✓ Internal linking structure added successfully!');

function addSubtopicLinksToMainPillar(siloDir, siloData) {
  const pillarPath = path.join(__dirname, '../app/resources', siloDir, 'page.tsx');

  if (!fs.existsSync(pillarPath)) {
    console.log(`Main pillar not found: ${siloDir}`);
    return;
  }

  let content = fs.readFileSync(pillarPath, 'utf8');

  // Check if links already exist
  if (content.includes('Related Topics in This Guide')) {
    console.log(`Main pillar already has links: ${siloDir}`);
    return;
  }

  // Generate subtopic links
  const subtopicLinks = siloData.subtopic_pillars.map(subtopic => {
    const url = subtopic.url.replace('https://coursebot.com', '');
    return `          <Link
            href="${url}"
            className="border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all group"
          >
            <h4 className="text-lg font-medium text-gray-900 mb-2 group-hover:text-primary">
              ${subtopic.title.replace(/: .*/, '')}
            </h4>
            <p className="text-gray-600 font-light text-sm mb-3">
              ${subtopic.description || 'Explore this topic in depth'}
            </p>
            <span className="text-primary text-sm font-medium">Learn more →</span>
          </Link>`;
  }).join('\n');

  // Add the links section before the closing </ResourceArticle>
  const linksSection = `
      <section className="mt-16 border-t border-gray-200 pt-12">
        <h2 className="text-3xl font-light text-gray-900 mb-8">Related Topics in This Guide</h2>
        <div className="grid md:grid-cols-2 gap-6">
${subtopicLinks}
        </div>
      </section>
    </ResourceArticle>`;

  content = content.replace('</ResourceArticle>', linksSection);

  fs.writeFileSync(pillarPath, content);
  console.log(`✓ Added ${siloData.subtopic_pillars.length} subtopic links to: ${siloDir}`);
}

function addPAALinksToSubtopic(siloDir, subtopic) {
  // Extract slug from URL
  const urlParts = subtopic.url.split('/');
  const subtopicSlug = urlParts[urlParts.length - 1];

  const subtopicPath = path.join(__dirname, '../app/resources', siloDir, subtopicSlug, 'page.tsx');

  if (!fs.existsSync(subtopicPath)) {
    console.log(`Subtopic not found: ${siloDir}/${subtopicSlug}`);
    return;
  }

  let content = fs.readFileSync(subtopicPath, 'utf8');

  // Check if PAA links already exist
  if (content.includes('Related Articles')) {
    console.log(`Subtopic already has PAA links: ${siloDir}/${subtopicSlug}`);
    return;
  }

  // Get PAA posts for this subtopic
  const paaPostsection = subtopic.paa_posts || [];

  if (paaPostsection.length === 0) {
    console.log(`No PAA posts for: ${siloDir}/${subtopicSlug}`);
    return;
  }

  // Generate PAA links
  const paaLinks = paaPostsection.slice(0, 10).map(paa => {  // Limit to 10 for better UX
    const url = paa.url.replace('https://coursebot.com', '');
    return `          <Link
            href="${url}"
            className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-gray-50 transition-all group"
          >
            <span className="text-primary mt-1">→</span>
            <div>
              <h4 className="text-gray-900 font-medium group-hover:text-primary mb-1">
                ${paa.title}
              </h4>
              <p className="text-sm text-gray-600 font-light">
                ${paa.quick_answer?.substring(0, 120) || 'Learn more about this topic'}...
              </p>
            </div>
          </Link>`;
  }).join('\n');

  // Find the "Learn More" section and add PAA links before it
  const learnMoreSection = content.match(/<section className="bg-gray-50 p-8 rounded-lg mb-12">[\s\S]*?<\/section>/);

  if (learnMoreSection) {
    const paaSection = `
      <section className="border-t border-gray-200 pt-12 mb-12">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
${paaLinks}
        </div>
      </section>

      ${learnMoreSection[0]}`;

    content = content.replace(learnMoreSection[0], paaSection);
  } else {
    // If no "Learn More" section, add before closing </ResourceArticle>
    const paaSection = `
      <section className="border-t border-gray-200 pt-12 mt-12">
        <h3 className="text-2xl font-light text-gray-900 mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-4">
${paaLinks}
        </div>
      </section>
    </ResourceArticle>`;

    content = content.replace('</ResourceArticle>', paaSection);
  }

  fs.writeFileSync(subtopicPath, content);
  console.log(`✓ Added ${paaPostsection.length} PAA links to: ${siloDir}/${subtopicSlug}`);
}
