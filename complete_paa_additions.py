#!/usr/bin/env python3
"""
Script to add PAA posts to all CourseBot silo JSON files
"""
import json
import re

def slugify(text):
    """Convert text to URL slug"""
    text = text.lower()
    text = text.replace("?", "").replace("'", "").replace(",", "")
    text = text.replace(" ", "-")
    text = re.sub(r'-+', '-', text)
    return text.strip('-')

# Define PAA questions for each silo and subtopic
EDTECH_PAA = {
    "edtech-solutions-for-creators": [
        "Best EdTech Solutions for Course Creators",
        "How to Choose EdTech Solutions for Your Courses",
        "EdTech Tools Every Course Creator Needs",
        "Benefits of EdTech for Independent Educators",
        "EdTech Solutions vs Traditional Course Tools"
    ],
    "ai-in-education": [
        "How AI Is Transforming Education",
        "Benefits of AI in Online Education",
        "Best AI Tools for Educators",
        "Future of AI in Education",
        "How to Implement AI in Your Courses"
    ],
    "educational-automation-tools": [
        "What Are Educational Automation Tools",
        "Best Educational Automation Tools for Teachers",
        "How Educational Automation Improves Teaching",
        "Benefits of Automating Educational Tasks",
        "Educational Automation ROI for Course Creators"
    ],
    "digital-learning-platforms": [
        "Best Digital Learning Platforms for Course Creators",
        "How to Choose a Digital Learning Platform",
        "Digital Learning Platform Comparison",
        "Features of Modern Digital Learning Platforms",
        "Digital Learning Platform Trends"
    ],
    "education-technology-trends": [
        "Top Education Technology Trends",
        "Future of Education Technology",
        "How EdTech Trends Affect Course Creators",
        "Emerging Technologies in Education",
        "Education Technology Market Growth"
    ]
}

# LMS Integration PAA
LMS_PAA = {
    "learning-management-system-integration": [
        "What Is LMS Integration",
        "How to Integrate AI Tools with Your LMS",
        "Benefits of LMS Integration for Course Creators",
        "Best Practices for LMS Integration",
        "LMS Integration Challenges and Solutions"
    ],
    "teachable-integration": [
        "How to Integrate AI Support with Teachable",
        "Best Teachable Integration Tools",
        "Teachable AI Chatbot Integration Guide",
        "Benefits of Automating Teachable Student Support",
        "Teachable API Integration for Course Creators"
    ],
    "thinkific-integration": [
        "How to Add AI Support to Thinkific Courses",
        "Best Thinkific Integration Tools for Automation",
        "Thinkific Student Support Integration",
        "How to Set Up Chatbots on Thinkific",
        "Thinkific vs Teachable Integration Capabilities"
    ],
    "canvas-lms-integration": [
        "How to Integrate AI Support with Canvas LMS",
        "Canvas LMS Automation Tools",
        "Benefits of Canvas LMS Integration for Universities",
        "Canvas API Integration Guide",
        "Best Canvas LMS Support Tools"
    ],
    "education-platform-apis": [
        "What Are Education Platform APIs",
        "How to Use LMS APIs for Course Automation",
        "Best Education Platform APIs for Developers",
        "API Integration for Course Creator Tools",
        "Understanding LMS API Documentation"
    ]
}

# Online Course Creation PAA
COURSE_CREATION_PAA = {
    "online-course-creation": [
        "How to Create an Online Course from Scratch",
        "Best Practices for Online Course Creation",
        "Online Course Creation Tools and Platforms",
        "How Long Does It Take to Create an Online Course",
        "Common Online Course Creation Mistakes to Avoid"
    ],
    "course-content-development": [
        "How to Develop Engaging Course Content",
        "Course Content Development Process",
        "Best Tools for Course Content Development",
        "How to Structure Course Content Effectively",
        "Course Content Quality Standards"
    ],
    "online-teaching-best-practices": [
        "Best Practices for Online Teaching Success",
        "How to Become a Better Online Instructor",
        "Online Teaching vs In-Person Teaching",
        "Essential Skills for Online Teachers",
        "How to Engage Students in Online Learning"
    ],
    "course-materials-organization": [
        "How to Organize Course Materials Effectively",
        "Best Systems for Course Material Organization",
        "Course Material Management Tools",
        "How Organization Affects Student Learning",
        "Digital Course Material Organization Tips"
    ],
    "digital-learning-resources": [
        "What Are Digital Learning Resources",
        "Best Digital Learning Resources for Course Creators",
        "How to Create Digital Learning Resources",
        "Types of Digital Learning Resources",
        "How to Choose Digital Learning Resources"
    ]
}

# Student Engagement PAA
STUDENT_ENGAGEMENT_PAA = {
    "student-support-systems": [
        "What Are Student Support Systems",
        "How to Build Effective Student Support Systems",
        "Best Student Support Systems for Online Courses",
        "Benefits of Automated Student Support Systems",
        "Student Support System Implementation Guide"
    ],
    "student-retention-strategies": [
        "How to Improve Student Retention in Online Courses",
        "Why Students Drop Out of Online Courses",
        "Best Student Retention Strategies for Course Creators",
        "How Student Support Affects Retention Rates",
        "Measuring Student Retention Success"
    ],
    "instant-student-help": [
        "Why Instant Student Help Matters",
        "How to Provide Instant Help to Online Students",
        "Benefits of Instant Student Support",
        "Best Tools for Instant Student Assistance",
        "Instant Help vs Delayed Response Impact on Students"
    ],
    "student-experience-improvement": [
        "How to Improve Online Student Experience",
        "What Makes a Great Online Course Experience",
        "Student Experience Best Practices",
        "Measuring Student Experience and Satisfaction",
        "How Support Quality Affects Student Experience"
    ],
    "online-student-success": [
        "What Is Online Student Success",
        "Factors That Influence Online Student Success",
        "How to Support Online Student Success",
        "Best Practices for Online Student Achievement",
        "Tools That Improve Online Student Success"
    ]
}

def create_paa_post(subtopic_url, question, silo_name):
    """Create a PAA post object"""
    question_slug = slugify(question)
    # Extract primary keyword (first 4-5 words of question, excluding question words)
    words = question.lower().replace("?", "").split()
    # Remove common question words
    question_words = ['what', 'how', 'why', 'when', 'where', 'who', 'is', 'are', 'do', 'does', 'can']
    keyword_words = [w for w in words if w not in question_words][:5]
    primary_keyword = " ".join(keyword_words)

    return {
        "url": f"{subtopic_url}/{question_slug}",
        "title": question,
        "h1": question,
        "primary_keyword": primary_keyword,
        "target_word_count": 1200,
        "h2_structure": [
            "Quick Answer",
            "Understanding " + (" ".join(keyword_words[:3]).title() if len(keyword_words) >= 3 else "Key Concepts"),
            "Key Considerations",
            "Best Practices",
            "Getting Started"
        ],
        "quick_answer": f"[Provide a 2-3 sentence answer to: {question}]",
        "parent_subtopic_url": subtopic_url,
        "cta_strategy": "Try CourseBot Free",
        "schema_type": "Article"
    }

def process_silo(file_path, paa_dict, silo_name):
    """Process a silo JSON file and add PAA posts"""
    print(f"Processing {silo_name}...")

    with open(file_path, 'r') as f:
        data = json.load(f)

    # Remove old paa_blog_posts if exists
    if 'paa_blog_posts' in data:
        del data['paa_blog_posts']
        print(f"  Removed old paa_blog_posts array")

    # Add PAA posts to each subtopic
    for subtopic in data.get('subtopic_pillars', []):
        subtopic_slug = subtopic['url'].split('/')[-1]

        if subtopic_slug in paa_dict:
            questions = paa_dict[subtopic_slug]
            paa_posts = []

            for question in questions:
                paa_post = create_paa_post(subtopic['url'], question, silo_name)
                paa_posts.append(paa_post)

            subtopic['paa_posts'] = paa_posts
            print(f"  Added {len(paa_posts)} PAA posts to {subtopic_slug}")

    # Write back
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)

    print(f"✓ Completed {silo_name}\n")

def main():
    base_path = "/Users/hubert/Documents/Cursor Projects/Agents/v4 agents - chatgpt/coursebot/SEO Strategy"

    silos = [
        ("Educational Technology & EdTech/04. Silo - Detailed.json", EDTECH_PAA, "Educational Technology & EdTech"),
        ("LMS Integration & Technology/04. Silo - Detailed.json", LMS_PAA, "LMS Integration & Technology"),
        ("Online Course Creation & Teaching/04. Silo - Detailed.json", COURSE_CREATION_PAA, "Online Course Creation & Teaching"),
        ("Student Engagement & Success/04. Silo - Detailed.json", STUDENT_ENGAGEMENT_PAA, "Student Engagement & Success")
    ]

    for file_path, paa_dict, silo_name in silos:
        full_path = f"{base_path}/{file_path}"
        process_silo(full_path, paa_dict, silo_name)

    print("All silos processed successfully!")

if __name__ == "__main__":
    main()
