#!/usr/bin/env python3
import json
import sys

def slugify(text):
    """Convert text to URL slug"""
    return text.lower().replace(" ", "-").replace("?", "").replace("'", "").replace(",", "")

def add_paa_posts_to_silo(json_file, paa_data):
    """Add PAA posts to each subtopic_pillar in the JSON file"""
    with open(json_file, 'r') as f:
        data = json.load(f)

    # Remove old paa_blog_posts if it exists
    if 'paa_blog_posts' in data:
        del data['paa_blog_posts']

    # Add PAA posts to each subtopic
    for i, subtopic in enumerate(data['subtopic_pillars']):
        if 'paa_posts' not in subtopic or len(subtopic['paa_posts']) == 0:
            subtopic_slug = subtopic['url'].split('/')[-1]
            subtopic_base_url = subtopic['url']

            # Get PAA questions for this subtopic
            if i < len(paa_data):
                paa_questions = paa_data[i]
                paa_posts = []

                for question in paa_questions:
                    question_slug = slugify(question)
                    paa_post = {
                        "url": f"{subtopic_base_url}/{question_slug}",
                        "title": question,
                        "h1": question,
                        "primary_keyword": " ".join(question.lower().split()[:5]),
                        "target_word_count": 1200,
                        "h2_structure": [
                            "Quick Answer",
                            "Understanding " + question.split()[2:5].__str__().replace("['", "").replace("']", "") if len(question.split()) > 4 else "Key Concepts",
                            "Key Considerations",
                            "Best Practices",
                            "Getting Started"
                        ],
                        "quick_answer": f"[2-3 sentence answer to: {question}]",
                        "parent_subtopic_url": subtopic_base_url,
                        "cta_strategy": "Try CourseBot Free",
                        "schema_type": "Article"
                    }
                    paa_posts.append(paa_post)

                subtopic['paa_posts'] = paa_posts

    # Write back to file
    with open(json_file, 'w') as f:
        json.dump(data, f, indent=2)

    print(f"Updated {json_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python add_paa_posts.py <json_file>")
        sys.exit(1)

    json_file = sys.argv[1]
    print(f"Processing {json_file}...")
