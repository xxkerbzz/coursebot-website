'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiChevronDown, FiMenu, FiX } from 'react-icons/fi';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-light text-gray-900">
              CourseBot
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              Product
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              Pricing
            </Link>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center text-gray-700 hover:text-primary transition-colors font-light"
              >
                Solutions
                <FiChevronDown className="ml-1 w-4 h-4" />
              </button>
              {solutionsOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/solutions/course-creators"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    For Course Creators
                  </Link>
                  <Link
                    href="/solutions/universities"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    For Universities
                  </Link>
                  <Link
                    href="/solutions/corporate-training"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    For Corporate Training
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center text-gray-700 hover:text-primary transition-colors font-light"
              >
                Resources
                <FiChevronDown className="ml-1 w-4 h-4" />
              </button>
              {resourcesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white border border-gray-200 rounded-md shadow-lg py-2 z-50">
                  <Link
                    href="/resources"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    All Resources
                  </Link>
                  <Link
                    href="/resources/ai-student-support-for-online-education"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    AI Student Support
                  </Link>
                  <Link
                    href="/resources/course-creator-tools-and-productivity"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    Course Creator Tools
                  </Link>
                  <Link
                    href="/resources/lms-integration-and-technology"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    LMS Integration
                  </Link>
                  <Link
                    href="/resources/student-engagement-and-success"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-light"
                  >
                    Student Success
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary transition-colors font-light"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/demo"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-light transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary font-light">
                Home
              </Link>
              <Link href="/product" className="text-gray-700 hover:text-primary font-light">
                Product
              </Link>
              <Link href="/how-it-works" className="text-gray-700 hover:text-primary font-light">
                How It Works
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-primary font-light">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary font-light">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-light">
                Contact
              </Link>
              <Link
                href="/demo"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md text-center font-light"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
