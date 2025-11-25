import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-sm text-gray-600 hover:text-primary font-light">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-600 hover:text-primary font-light">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 hover:text-primary font-light">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-sm text-gray-600 hover:text-primary font-light">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-sm text-gray-600 hover:text-primary font-light">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/solutions/course-creators" className="text-sm text-gray-600 hover:text-primary font-light">
                  For Course Creators
                </Link>
              </li>
              <li>
                <Link href="/solutions/universities" className="text-sm text-gray-600 hover:text-primary font-light">
                  For Universities
                </Link>
              </li>
              <li>
                <Link href="/solutions/corporate-training" className="text-sm text-gray-600 hover:text-primary font-light">
                  For Corporate Training
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/resources" className="text-sm text-gray-600 hover:text-primary font-light">
                  All Resources
                </Link>
              </li>
              <li>
                <Link href="/resources/ai-student-support-for-online-education" className="text-sm text-gray-600 hover:text-primary font-light">
                  AI Student Support
                </Link>
              </li>
              <li>
                <Link href="/resources/course-creator-tools-and-productivity" className="text-sm text-gray-600 hover:text-primary font-light">
                  Course Creator Tools
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-600 hover:text-primary font-light">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-primary font-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-primary font-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-600 hover:text-primary font-light">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-primary font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-primary font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 font-light">
              © {currentYear} CourseBot. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 font-light mt-4 md:mt-0">
              AI-powered student support for online educators
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
