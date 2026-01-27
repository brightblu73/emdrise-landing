import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - EMDRise";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">EMDRise</span>
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated: January 2026</strong>
          </p>

          <p className="mb-6">
            At EMDRise, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our EMDR therapy application.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>

          <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">
            We may collect personal information that you provide directly to us, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Account credentials</li>
            <li>Payment information (if applicable)</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Usage Data</h3>
          <p className="mb-4">
            We automatically collect certain information about your use of the app:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Session data and therapy progress</li>
            <li>Device information and app usage statistics</li>
            <li>Log data and crash reports</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>

          <p className="mb-4">
            We use the collected information to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our EMDR therapy services</li>
            <li>Personalize your therapy experience</li>
            <li>Improve our app and develop new features</li>
            <li>Communicate with you about updates and support</li>
            <li>Ensure security and prevent fraud</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>

          <p className="mb-4">
            We implement industry-standard security measures to protect your personal information:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>End-to-end encryption for sensitive data</li>
            <li>Secure data storage and transmission</li>
            <li>Regular security audits and updates</li>
            <li>Limited access to personal information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Sharing and Disclosure</h2>

          <p className="mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With trusted service providers who assist our operations</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>

          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access and review your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of certain data collection</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h2>

          <p className="mb-4">
            Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>

          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page and updating the "Last updated" date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>

          <p className="mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="mb-6">
            Email: privacy@emdrise.com<br />
            Address: [Company Address]
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2026 EMDRise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}