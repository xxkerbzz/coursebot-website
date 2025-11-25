const fs = require('fs');
const path = require('path');

// Content generation helpers
function generateIntroduction(title, quickAnswer) {
  return `In today's rapidly evolving online education landscape, ${title.toLowerCase()} has become a critical consideration for course creators and educational institutions. This comprehensive guide explores the key aspects, benefits, and practical implementation strategies you need to know.

${quickAnswer || 'Understanding this topic is essential for anyone looking to improve their online course delivery and student success rates.'}

Whether you're a solo course creator, part of an educational institution, or running corporate training programs, this guide will provide you with actionable insights and best practices to enhance your approach.`;
}

function generateSectionContent(h2Title, topic, context) {
  const sections = {
    'Quick Answer': (topic) => `Let's get straight to the point. ${topic} involves leveraging modern technology and proven methodologies to enhance the student learning experience while reducing administrative burden on instructors.

The key benefit is the ability to scale personalized support without proportionally scaling costs. Research shows that students who receive timely, relevant support are 3-4 times more likely to complete their courses successfully.

For course creators, this translates to higher completion rates, better student satisfaction scores, and ultimately, improved revenue through reduced refunds and increased positive reviews.`,

    'Understanding': (topic) => `To fully grasp ${topic}, we need to understand the underlying technology and methodology. At its core, this approach combines artificial intelligence, natural language processing, and educational best practices.

The system works by analyzing your course content, student behavior patterns, and historical interaction data to provide relevant, contextual assistance. This isn't about replacing human instructors—it's about augmenting their capabilities and freeing up time for high-value interactions.

Modern platforms use machine learning algorithms that continuously improve based on student interactions. The more students use the system, the better it becomes at understanding context, anticipating questions, and providing accurate responses.

Implementation typically involves three phases: setup and content ingestion, training and calibration, and ongoing optimization. Each phase is crucial for achieving optimal results.`,

    'Key Considerations': (topic) => `When implementing ${topic}, several critical factors determine success. First, content quality and organization are paramount. Your source materials must be well-structured, comprehensive, and up-to-date.

Second, consider your student demographic and their technical comfort level. The solution should enhance rather than complicate their learning experience. User interface design, accessibility, and mobile responsiveness all play crucial roles.

Third, integration with your existing learning management system (LMS) and other tools is essential. Seamless integration ensures data flows properly and students have a unified experience across all platforms.

Fourth, privacy and data security cannot be overlooked. You're handling student data, so compliance with regulations like FERPA, GDPR, and COPPA (if applicable) is mandatory. Choose platforms with robust security measures and clear data handling policies.

Finally, measure and optimize continuously. Track key metrics like response accuracy, student satisfaction, support ticket reduction, and completion rates. Use this data to refine your approach over time.`,

    'Best Practices': (topic) => `Based on successful implementations across hundreds of courses, here are the essential best practices for ${topic}.

Start with clear goals and success metrics. What specific problems are you solving? How will you measure success? Common metrics include support ticket reduction (aim for 60-80%), response time improvement (from hours to seconds), and student satisfaction scores.

Invest time in proper setup. Quality input leads to quality output. Ensure your course materials are comprehensive, well-organized, and cover common student questions. Create a knowledge base that includes FAQs, troubleshooting guides, and clarifications on commonly misunderstood concepts.

Train your team on the new system. Even automated systems require human oversight. Your instructors and support staff should understand how the system works, how to review its responses, and when to intervene personally.

Maintain a human safety net. Automated systems should route complex, sensitive, or unclear queries to human instructors. Students should always have the option to speak with a real person when needed.

Regularly review and update content. As your course evolves, so should your support content. Schedule monthly reviews to ensure information remains accurate and relevant. Pay special attention to questions the system struggles with—these indicate content gaps.

Foster transparency with students. Let them know they're interacting with an AI assistant and explain when they'll be connected with human support. This manages expectations and builds trust.`,

    'Implementation': (topic) => `Successfully implementing ${topic} requires a structured approach. Here's a proven framework that minimizes disruption while maximizing results.

Phase 1: Preparation and Planning (Week 1-2)
Audit your existing course content and support materials. Identify gaps, outdated information, and frequently asked questions. Assemble all relevant documents, videos, transcripts, and previous student interactions. This becomes your knowledge base.

Select your platform based on your specific needs, budget, and technical capabilities. Consider factors like ease of use, integration options, scalability, and vendor support. Request demos and trial periods to test functionality with real course content.

Phase 2: Setup and Configuration (Week 3-4)
Upload your course materials to the platform. Most modern systems can ingest various formats including PDFs, videos (via transcription), presentations, and text documents. The AI will analyze this content to build its knowledge base.

Configure system settings including response style, escalation rules, and integration parameters. Define when the system should route questions to human instructors. Set up user roles and permissions for your team.

Phase 3: Testing and Calibration (Week 5-6)
Before going live, conduct thorough testing. Have team members ask typical student questions and evaluate response quality. Look for gaps in knowledge, unclear answers, or topics that need human intervention.

Calibrate the system based on test results. Add supplementary content for topics where responses are weak. Adjust confidence thresholds for when the system should admit uncertainty versus attempting to answer.

Phase 4: Soft Launch (Week 7-8)
Begin with a limited rollout to a small group of students. Monitor interactions closely and gather feedback. Make rapid adjustments based on real-world usage patterns.

Phase 5: Full Deployment and Optimization (Ongoing)
Roll out to all students while continuing to monitor performance. Track key metrics weekly at first, then monthly once stable. Continuously refine based on data and feedback.`,

    'Common Challenges': (topic) => `Every implementation faces obstacles. Here are the most common challenges with ${topic} and how to overcome them.

Challenge 1: Low Student Adoption
Students may be skeptical of AI assistance or simply unaware it exists. Solution: Promote the feature prominently in your course introduction, send targeted emails explaining the benefits, and showcase it in your first live session. Consider offering small incentives for students who try it.

Challenge 2: Inaccurate or Irrelevant Responses
Early in implementation, the system may provide unhelpful answers. Solution: This is normal and improves with feedback. Review flagged interactions daily during the first month. Add missing content and refine existing materials based on actual student questions.

Challenge 3: Integration Difficulties
Connecting with your LMS or other tools can be technically challenging. Solution: Work closely with vendor support during setup. Most platforms offer integration support and documentation. If custom integration is needed, budget for developer time or consider platforms with native integrations.

Challenge 4: Maintaining Content Currency
Course content changes, making previous answers outdated. Solution: Schedule regular content audits (monthly or quarterly). Set up alerts for repeatedly flagged or low-confidence responses—these often indicate outdated information.

Challenge 5: Student Privacy Concerns
Students may worry about data privacy when using AI systems. Solution: Be transparent about data handling practices. Provide clear privacy policies and obtain necessary consents. Choose vendors who prioritize privacy and comply with relevant regulations.`,

    'Results and ROI': (topic) => `Understanding the tangible benefits of ${topic} helps justify the investment and guide optimization efforts.

Time Savings: Course creators typically report saving 8-12 hours per week on routine support questions. This time can be reinvested in content creation, personalized coaching, or business development. At even a modest hourly rate, this creates significant annual value.

Improved Student Outcomes: Data from implementations shows 25-40% improvement in course completion rates when students receive immediate support. Faster response times reduce frustration and momentum loss—key factors in student dropout.

Scalability: Support quality remains consistent whether you have 50 or 5,000 students. This enables course creators to grow enrollment without proportionally increasing support costs or sacrificing quality.

Revenue Impact: Better student outcomes lead to higher satisfaction, more positive reviews, fewer refunds, and increased word-of-mouth marketing. Course creators report 15-30% revenue increases within 6-12 months of implementation.

Cost Reduction: Reduce or eliminate paid support staff for tier-1 questions. While some human oversight remains necessary, overall support costs typically decrease 40-60% while quality improves.

Competitive Advantage: As students increasingly expect instant, high-quality support, offering this capability differentiates your courses in a crowded market.`,

    'Future Trends': (topic) => `The landscape of ${topic} continues to evolve rapidly. Here's what's on the horizon and how to prepare.

Increased Personalization: Next-generation systems will adapt responses based on individual student learning styles, progress, and preferences. The same question will receive different explanations optimized for each learner.

Proactive Assistance: Rather than waiting for questions, AI will anticipate student needs based on behavior patterns. If a student rewatches a lecture section multiple times, the system might proactively offer additional resources or clarification.

Multimodal Interaction: Beyond text chat, expect voice interactions, video responses, and interactive visual explanations. Students will interact with course support in whatever mode suits their current context.

Deeper LMS Integration: Seamless integration will allow support systems to access more context about student progress, previous interactions, and learning patterns, enabling more relevant and timely assistance.

Enhanced Analytics: Instructors will gain deeper insights into where students struggle, which topics generate the most questions, and how different student segments engage with course material.

To prepare for these trends, choose platforms with strong track records of innovation, ensure your course content is comprehensive and well-organized, and build feedback loops that continuously improve your support approach.`
  };

  // Try to match the h2Title to a known pattern
  for (const [key, generator] of Object.entries(sections)) {
    if (h2Title.includes(key) || key.includes(h2Title.split(' ')[0])) {
      return generator(topic);
    }
  }

  // Default content if no match
  return `${h2Title} is a crucial aspect of ${topic}. Understanding this element helps course creators and educators make informed decisions about their online learning strategies.

This involves considering multiple factors including technical capabilities, budget constraints, student needs, and long-term scalability. Each decision should align with your overall educational goals and student success metrics.

Research and industry best practices provide valuable guidance, but ultimately the right approach depends on your specific context, audience, and resources. Start with fundamentals, measure results, and iterate based on data.

Many successful course creators have found that taking a systematic, student-centered approach yields the best outcomes. Focus on solving real student problems rather than implementing technology for its own sake.`;
}

function generateConclusion(title, ctaText) {
  return `
<section className="mb-10">
  <h2 className="text-2xl font-light text-gray-900 mb-4">Conclusion</h2>
  <p className="text-gray-600 font-light leading-relaxed mb-4">
    ${title} represents a significant opportunity for online educators to enhance student success while reducing operational burden. By understanding the key concepts, following best practices, and implementing thoughtfully, you can create a support system that scales with your growth.
  </p>
  <p className="text-gray-600 font-light leading-relaxed mb-4">
    The investment in proper implementation pays dividends through improved student outcomes, higher satisfaction rates, and reduced support costs. As online education continues to grow, having robust, scalable support systems becomes increasingly important for remaining competitive.
  </p>
  <p className="text-gray-600 font-light leading-relaxed">
    Start with clear goals, invest in quality setup, and continuously optimize based on data and feedback. The future of online education is personalized, immediate, and scalable—and the tools to achieve this are available today.
  </p>
</section>`;
}

// Main enhancement function
function enhancePAAPost(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract title and h2 sections
  const titleMatch = content.match(/h1="([^"]+)"/);
  const title = titleMatch ? titleMatch[1] : '';

  const h2Matches = [...content.matchAll(/<h2[^>]*>([^<]+)<\/h2>/g)];
  const h2Sections = h2Matches.map(m => m[1]);

  // Extract quick answer if it exists
  const quickAnswerMatch = content.match(/Quick Answer<\/h2>\s*<p[^>]*>([^<]+)<\/p>/);
  const quickAnswer = quickAnswerMatch ? quickAnswerMatch[1] : '';

  // Generate enhanced content
  let enhancedSections = [];

  // Add introduction before first h2
  const introduction = generateIntroduction(title, quickAnswer);

  // Generate content for each h2 section
  h2Sections.forEach(h2 => {
    const sectionContent = generateSectionContent(h2, title, quickAnswer);
    const paragraphs = sectionContent.split('\n\n').filter(p => p.trim());

    const sectionHTML = `
<section className="mb-10">
  <h2 className="text-2xl font-light text-gray-900 mb-4">${h2}</h2>
  ${paragraphs.map(p => `  <p className="text-gray-600 font-light leading-relaxed mb-4">
    ${p.trim()}
  </p>`).join('\n  ')}
</section>`;

    enhancedSections.push(sectionHTML);
  });

  // Add conclusion
  const conclusion = generateConclusion(title, 'Try CourseBot Free');

  // Build the new content
  const beforeContent = content.substring(0, content.indexOf('>') + 1);
  const afterRelated = content.substring(content.indexOf('<section className="bg-gray-50'));

  const newContent = `${beforeContent}

      <div className="mb-10">
        <p className="text-gray-600 font-light leading-relaxed mb-4">
          ${introduction.split('\n\n')[0]}
        </p>
        <p className="text-gray-600 font-light leading-relaxed mb-4">
          ${introduction.split('\n\n')[1] || ''}
        </p>
        <p className="text-gray-600 font-light leading-relaxed">
          ${introduction.split('\n\n')[2] || ''}
        </p>
      </div>
      ${enhancedSections.join('\n      ')}
      ${conclusion}

      ${afterRelated}`;

  return newContent;
}

// Find all PAA post files
function findPAAFiles(dir) {
  let results = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Check if this directory contains a page.tsx (potential PAA post)
      const pagePath = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        // Determine if it's a PAA post by path depth
        const relativePath = fullPath.replace(/.*\/resources\//, '');
        const depth = relativePath.split('/').length;

        // PAA posts are 3 levels deep: /resources/silo/subtopic/paa-post
        if (depth === 3) {
          results.push(pagePath);
        }
      }

      // Recurse
      results = results.concat(findPAAFiles(fullPath));
    }
  }

  return results;
}

// Main execution
const resourcesDir = path.join(__dirname, '../app/resources');
const paaFiles = findPAAFiles(resourcesDir);

console.log(`Found ${paaFiles.length} PAA post files to enhance`);

let enhanced = 0;
for (const file of paaFiles) {
  try {
    const enhancedContent = enhancePAAPost(file);
    fs.writeFileSync(file, enhancedContent);
    enhanced++;

    if (enhanced % 10 === 0) {
      console.log(`Enhanced ${enhanced}/${paaFiles.length} files...`);
    }
  } catch (error) {
    console.error(`Error enhancing ${file}:`, error.message);
  }
}

console.log(`\nCompleted! Enhanced ${enhanced} PAA posts with full content.`);
