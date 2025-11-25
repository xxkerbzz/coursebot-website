import type { Metadata } from 'next';
import Link from 'next/link';
import { FiShield, FiLock, FiFileText, FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'CourseBot Security & Compliance - FERPA Compliant AI Support',
  description: 'Enterprise security with FERPA compliance, end-to-end encryption, SOC 2 certification, and secure data handling for educational institutions.',
  keywords: ['FERPA compliant AI student support', 'education data security', 'SOC 2 certified'],
  openGraph: {
    title: 'CourseBot Security & Compliance',
    description: 'Enterprise security and FERPA compliance you can trust',
    url: 'https://coursebot-website.vercel.app/security',
  },
};

export default function SecurityPage() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ name: 'Security & Compliance', url: 'https://coursebot-website.vercel.app/security' }]} />

        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            Enterprise Security and Education Compliance
          </h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed mb-8">
            Your students' data is precious. We protect it with enterprise-grade security, FERPA compliance, and
            transparent data practices you can trust.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
          >
            Download Security Whitepaper
            <FiArrowRight className="ml-2" />
          </Link>
        </div>

        {/* Key Security Features */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-lg mb-6">
                <FiShield className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">FERPA Compliant</h2>
              <p className="text-gray-600 font-light">
                Full compliance with the Family Educational Rights and Privacy Act for protecting student education
                records.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-lg mb-6">
                <FiLock className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">End-to-End Encryption</h2>
              <p className="text-gray-600 font-light">
                All data encrypted in transit (TLS 1.3) and at rest (AES-256). Your data is protected at every
                step.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-50 rounded-lg mb-6">
                <FiFileText className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">SOC 2 Type II</h2>
              <p className="text-gray-600 font-light">
                Certified for security, availability, and confidentiality. Independently audited and verified.
              </p>
            </div>
          </div>
        </section>

        {/* FERPA Compliance */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-8">FERPA Compliance</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-xl text-gray-700 font-light mb-6">
              CourseBot is designed from the ground up to comply with the Family Educational Rights and Privacy Act
              (FERPA), protecting student education records and personally identifiable information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Data Protection</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Student data encrypted at rest and in transit</li>
                  <li>• No unauthorized data access or sharing</li>
                  <li>• Secure data deletion upon request</li>
                  <li>• Access controls and audit logs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Your Rights</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• You own your data—always</li>
                  <li>• Export your data anytime</li>
                  <li>• Delete your data on demand</li>
                  <li>• Full transparency on data usage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Encryption & Privacy */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Data Encryption & Privacy</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Encryption Standards</h3>
              <p className="text-gray-600 font-light mb-4">
                All data is encrypted using industry-standard protocols:
              </p>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• <strong className="font-medium">In Transit:</strong> TLS 1.3 encryption for all data transmission</li>
                <li>• <strong className="font-medium">At Rest:</strong> AES-256 encryption for stored data</li>
                <li>• <strong className="font-medium">Backups:</strong> Encrypted and geographically redundant</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-medium text-gray-900 mb-3">Privacy Commitment</h3>
              <p className="text-gray-600 font-light mb-4">
                Your trust is our priority:
              </p>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• <strong className="font-medium">No Data Selling:</strong> We never sell your data to third parties</li>
                <li>• <strong className="font-medium">No AI Training:</strong> Student data is never used to train our AI models</li>
                <li>• <strong className="font-medium">Transparent Usage:</strong> Clear documentation of how data is used</li>
                <li>• <strong className="font-medium">Your Data, Your Control:</strong> Export or delete anytime</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SOC 2 Certification */}
        <section className="bg-primary/5 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 mb-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-light text-gray-900 mb-8 text-center">SOC 2 Type II Certified</h2>
            <p className="text-xl text-gray-600 font-light text-center mb-12">
              Independently audited and certified for security, availability, processing integrity, confidentiality,
              and privacy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">What This Means</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Annual third-party security audits</li>
                  <li>• Verified security controls and practices</li>
                  <li>• Continuous monitoring and improvement</li>
                  <li>• Industry-recognized compliance standard</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Security Practices</h3>
                <ul className="space-y-2 text-gray-600 font-light">
                  <li>• Regular penetration testing</li>
                  <li>• 24/7 security monitoring</li>
                  <li>• Incident response procedures</li>
                  <li>• Employee security training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Retention Policies */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Data Retention Policies</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Active Data</h3>
                <p className="text-gray-600 font-light">
                  Course materials and student interaction data are retained for as long as your account is active to
                  provide optimal service and continuous AI learning.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Data Deletion</h3>
                <p className="text-gray-600 font-light">
                  Upon account closure or deletion request, all data is permanently deleted within 30 days. We provide
                  export tools so you can take your data with you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Backup Retention</h3>
                <p className="text-gray-600 font-light">
                  Encrypted backups are retained for 90 days for disaster recovery purposes, then permanently deleted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="mb-24">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Security Best Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Access Controls</h3>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Role-based access control (RBAC)</li>
                <li>• Multi-factor authentication (MFA)</li>
                <li>• SSO/SAML support (Enterprise)</li>
                <li>• Activity audit logs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• Cloud infrastructure (AWS/GCP)</li>
                <li>• Geographic redundancy</li>
                <li>• DDoS protection</li>
                <li>• 99.9% uptime SLA</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">Monitoring</h3>
              <ul className="space-y-2 text-gray-600 font-light">
                <li>• 24/7 security monitoring</li>
                <li>• Automated threat detection</li>
                <li>• Regular security updates</li>
                <li>• Incident response team</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Questions About Security?</h2>
          <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
            Our security team is here to help. Contact us for detailed security documentation, compliance certificates,
            or to discuss your specific security requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md text-lg font-light transition-colors inline-flex items-center justify-center"
            >
              Contact Security Team
              <FiArrowRight className="ml-2" />
            </Link>
            <Link
              href="/demo"
              className="border border-gray-300 hover:border-primary text-gray-700 hover:text-primary px-8 py-4 rounded-md text-lg font-light transition-colors"
            >
              Download Compliance Docs
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
