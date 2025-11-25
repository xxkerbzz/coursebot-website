import type { Metadata } from 'next';
import Link from 'next/link';
import { FiUpload, FiSettings, FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'How CourseBot Works - 3 Simple Steps to Automated Student Support',
  description: 'Get up and running in 3 simple steps: Upload course materials, train your AI assistant, and activate 24/7 student support. No technical expertise required.',
  keywords: ['how AI student support works', 'course automation setup', 'AI training process'],
  openGraph: {
    title: 'How CourseBot Works - 3 Simple Steps',
    description: 'From setup to support in 3 simple steps. Get started in 2-3 hours.',
    url: 'https://coursebot-website.vercel.app/how-it-works',
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <StructuredData
        type="HowTo"
        data={{
          name: 'How to Set Up CourseBot for Your Online Course',
          description: '3-step process to automate student support with AI',
          step: [
            {
              '@type': 'HowToStep',
              name: 'Upload Your Course Materials',
              text: 'Upload your syllabus, FAQs, course materials, and past Q&A. CourseBot learns from everything.',
            },
            {
              '@type': 'HowToStep',
              name: 'Train Your AI Assistant',
              text: 'CourseBot analyzes your materials and learns your teaching style in minutes.',
            },
            {
              '@type': 'HowToStep',
              name: 'Activate 24/7 Student Support',
              text: 'Students start getting instant answers through chat, email, or your LMS.',
            },
          ],
        }}
      />

      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumbs items={[{ name: 'How It Works', url: 'https://coursebot-website.vercel.app/how-it-works' }]} />

          {/* Hero */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
              From Setup to Support in 3 Simple Steps
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
              Get CourseBot up and running in just 2-3 hours. No technical expertise required,
              no complex implementation—just three simple steps to automated student support.
            </p>
            <Link
              href="/demo"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
            >
              Start Free Trial
              <FiArrowRight className="ml-2" />
            </Link>
          </div>

          {/* Steps */}
          <div className="mb-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-medium mb-6">
                  1
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">Upload Your Course Materials</h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                  Start by uploading your course materials, including your syllabus, FAQs, lecture notes,
                  assignment instructions, and any historical Q&A from past students. CourseBot learns from
                  everything you provide.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiUpload className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Drag & Drop Interface</h3>
                      <p className="text-gray-600 font-light">
                        Simple file upload—just drag your PDFs, docs, and presentations into the system
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiUpload className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Bulk Upload</h3>
                      <p className="text-gray-600 font-light">
                        Upload multiple files at once—no need to upload one at a time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiUpload className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Supported Formats</h3>
                      <p className="text-gray-600 font-light">
                        PDFs, Word docs, PowerPoint, text files, and more
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg border-2 border-dashed border-gray-300">
                  <div className="text-center">
                    <FiUpload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 font-light mb-2">Drag and drop your files here</p>
                    <p className="text-sm text-gray-500 font-light">or click to browse</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700 font-light">Course_Syllabus_2024.pdf</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700 font-light">Frequently_Asked_Questions.docx</span>
                  </div>
                  <div className="bg-white p-3 rounded border border-gray-200 flex items-center">
                    <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700 font-light">Assignment_Instructions.pdf</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="lg:order-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-medium mb-6">
                  2
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">Train Your AI Assistant</h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                  CourseBot analyzes your materials and learns your teaching style in minutes. The AI understands
                  your course structure, terminology, and the types of questions students typically ask.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiSettings className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Automatic Processing</h3>
                      <p className="text-gray-600 font-light">
                        AI automatically extracts key information and learns your course structure
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiSettings className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Customize Responses</h3>
                      <p className="text-gray-600 font-light">
                        Review and customize AI responses to match your teaching style
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiSettings className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Test & Refine</h3>
                      <p className="text-gray-600 font-light">
                        Test the AI with sample questions and refine responses before going live
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 p-8 rounded-lg lg:order-1">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Processing course materials...</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">Learning course structure</p>
                    <div className="space-y-2 text-xs text-gray-600 font-light">
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Identified 12 course modules</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Extracted 45 FAQ entries</span>
                      </div>
                      <div className="flex items-center">
                        <FiCheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>Learned course-specific terminology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-medium mb-6">
                  3
                </div>
                <h2 className="text-4xl font-light text-gray-900 mb-4">Activate 24/7 Student Support</h2>
                <p className="text-xl text-gray-600 font-light leading-relaxed mb-6">
                  Students immediately start getting instant answers through chat, email, or directly within your LMS.
                  You focus on teaching while CourseBot handles the repetitive questions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Instant Activation</h3>
                      <p className="text-gray-600 font-light">
                        CourseBot starts answering questions within minutes of training completion
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Multi-Channel Support</h3>
                      <p className="text-gray-600 font-light">
                        Students can ask questions via chat, email, or LMS—CourseBot works everywhere
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FiCheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-4" />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">Continuous Learning</h3>
                      <p className="text-gray-600 font-light">
                        CourseBot improves with every interaction, getting smarter over time
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 mb-1 font-medium">Student</p>
                      <p className="text-sm text-gray-600 font-light">
                        Where can I find the assignment for Week 3?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-primary rounded-full mr-3 flex-shrink-0 flex items-center justify-center text-white text-xs">
                      CB
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-700 mb-1 font-medium">CourseBot</p>
                      <p className="text-sm text-gray-600 font-light">
                        The Week 3 assignment can be found in the "Assignments" section of your course dashboard.
                        It's titled "Market Analysis Project" and is due on Friday, March 15th at 11:59 PM.
                        You can also download the assignment instructions PDF here: [link]
                      </p>
                      <p className="text-xs text-gray-500 mt-2 font-light">Answered instantly • 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-24">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">What Happens Next</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-light text-primary mb-4">80%</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Questions Handled Automatically</h3>
                  <p className="text-gray-600 font-light">
                    CourseBot handles routine questions instantly, freeing you to focus on complex student needs
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-primary mb-4">10+</div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">Hours Saved Per Week</h3>
                  <p className="text-gray-600 font-light">
                    Reclaim your time for content creation, teaching, and the work that actually matters
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="mb-24">
            <h2 className="text-4xl font-light text-gray-900 mb-12 text-center">Implementation Timeline</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Hour 1</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Upload & Organize Materials</h3>
                    <p className="text-gray-600 font-light">
                      Gather and upload your course materials, syllabus, and FAQs
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Hour 2</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Train & Customize AI</h3>
                    <p className="text-gray-600 font-light">
                      Review AI responses, customize tone, and test with sample questions
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Hour 3</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Go Live & Monitor</h3>
                    <p className="text-gray-600 font-light">
                      Activate CourseBot and monitor initial interactions to ensure quality
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">Week 1+</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Continuous Improvement</h3>
                    <p className="text-gray-600 font-light">
                      CourseBot learns from each interaction and gets smarter over time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-4xl font-light text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
              Set up CourseBot in 2-3 hours and start saving 10+ hours every week. No credit card required for
              your 14-day free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
              >
                Start Free Trial
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors"
              >
                Book Implementation Call
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
