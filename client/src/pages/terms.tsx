import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service - EMDRise";
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Last updated: January 2026</strong>
          </p>

          <p className="mb-6">
            Welcome to EMDRise. These Terms of Service ("Terms") govern your use of our EMDR therapy application and services. By accessing or using EMDRise, you agree to be bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>

          <p className="mb-4">
            By downloading, installing, or using EMDRise, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Description of Service</h2>

          <p className="mb-4">
            EMDRise is a mobile application that provides guided Eye Movement Desensitization and Reprocessing (EMDR) therapy sessions. Our service includes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Guided EMDR therapy sessions</li>
            <li>Bilateral stimulation techniques</li>
            <li>Progress tracking and session history</li>
            <li>Educational content about EMDR therapy</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Medical Disclaimer</h2>

          <p className="mb-4">
            <strong>IMPORTANT:</strong> EMDRise is not a substitute for professional medical or psychological treatment. Our app provides guided self-help tools based on established EMDR principles, but it does not replace therapy with a qualified mental health professional.
          </p>

          <p className="mb-4">
            If you are experiencing severe mental health symptoms, please consult with a qualified healthcare provider. EMDRise should not be used as a replacement for emergency medical care.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Eligibility</h2>

          <p className="mb-4">
            To use EMDRise, you must:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into these Terms</li>
            <li>Not be prohibited from using the service under applicable laws</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Conduct</h2>

          <p className="mb-4">
            You agree to use EMDRise responsibly and in accordance with these Terms. You will not:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the app while operating vehicles or machinery</li>
            <li>Share your account credentials with others</li>
            <li>Attempt to reverse engineer or modify the app</li>
            <li>Use the app for any unlawful purpose</li>
            <li>Interfere with the app's functionality or security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Privacy and Data</h2>

          <p className="mb-4">
            Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information. By using EMDRise, you consent to our data practices as described in the Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>

          <p className="mb-4">
            EMDRise and its content are protected by copyright, trademark, and other intellectual property laws. All rights are reserved. You may not reproduce, distribute, or create derivative works without our express written permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer of Warranties</h2>

          <p className="mb-4">
            EMDRise is provided "as is" without warranties of any kind. We do not guarantee that the app will be error-free, uninterrupted, or meet your specific needs. We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>

          <p className="mb-4">
            To the maximum extent permitted by law, EMDRise and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the app, even if we have been advised of the possibility of such damages.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indemnification</h2>

          <p className="mb-4">
            You agree to indemnify and hold harmless EMDRise and its affiliates from any claims, damages, or expenses arising from your use of the app or violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>

          <p className="mb-4">
            We reserve the right to terminate or suspend your access to EMDRise at our discretion, with or without notice, for any reason, including violation of these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>

          <p className="mb-4">
            We may update these Terms from time to time. We will notify you of significant changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of EMDRise after changes constitutes acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>

          <p className="mb-4">
            These Terms are governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>

          <p className="mb-4">
            If you have questions about these Terms, please contact us at:
          </p>
          <p className="mb-6">
            Email: legal@emdrise.com<br />
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