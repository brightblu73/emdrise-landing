import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary mb-4">Privacy Policy</h1>
            <h2 className="text-xl text-muted mb-8">Last updated: 6 September 2025</h2>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introduction</h3>
            <p className="text-muted leading-relaxed mb-4">
              This Privacy Policy explains how GC Psychotherapy (we, us, our) collects, uses, shares and protects personal information when you use the EMDRise mobile and web application, our websites and related services. Protecting your privacy is important to us, and we comply with applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Who We Are & Scope</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise is owned and operated by GC Psychotherapy, a company based in the United Kingdom. This policy applies to information we process through our mobile application, web platform, and related services. It does not apply to third‑party websites, services, or applications, even if accessible through our services.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Information We Collect</h3>
            <p className="text-muted leading-relaxed mb-4">We collect several types of information to operate and improve EMDRise:</p>
            <ul className="text-muted leading-relaxed mb-4 space-y-2">
              <li><strong>Account & Identity Data:</strong> When you create an account or communicate with us, we may collect personal information such as your name, email address, Apple ID or sign‑in identifier, and authentication tokens. For subscription management through RevenueCat, we may collect transaction identifiers, subscription status and related billing metadata.</li>
              <li><strong>Usage & Technical Data:</strong> We collect information about your use of our services, including device information, IP address, operating system, app version, session times, pages visited, and actions taken. We may use cookies or similar technologies to support the technical operation of the application.</li>
              <li><strong>Session & Health Data:</strong> As part of the EMDR therapy process, you may input target memories, distress ratings, script progress, and other session‑related notes. We treat this information as sensitive and store it securely. We may also collect haptic, audio or visual preference settings.</li>
              <li><strong>Payment & Subscription Data:</strong> Subscription payments are processed by Apple via RevenueCat. We do not store your full payment card details but may receive payment status, receipts and subscription identifiers.</li>
              <li><strong>Communication & Survey Data:</strong> If you contact us by email or participate in surveys, we may collect the content of your communications and responses. Participation in surveys is voluntary, and you may decline to provide information.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. How We Use Your Information</h3>
            <p className="text-muted leading-relaxed mb-4">
              We use the information we collect to provide and improve EMDRise, including to create and manage your account, deliver sessions, manage your pause and resume flow, and ensure that you can access the content offline. We process subscriptions and billing, communicate with you about your account, send important service notifications and customer support messages, and may send newsletters or promotional emails, which you can opt out of at any time. We analyse usage and performance data to improve our services, detect and prevent fraud, and ensure security. We may also use aggregated or anonymised data for research and development purposes.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Legal Basis for Processing</h3>
            <p className="text-muted leading-relaxed mb-4">
              Our legal basis for collecting and using personal information under UK GDPR includes: (a) performance of a contract with you when we provide the services; (b) our legitimate interests in improving our services, preventing fraud and ensuring security; (c) compliance with legal obligations; and (d) your consent where required, for example, to receive marketing emails.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">6. AI & Data Analytics</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise may integrate AI features to enhance session guidance. If enabled, these features may process your session data to provide personalised recommendations. We will anonymise or aggregate personal information where feasible. We do not sell personal or health data to advertising platforms or data brokers. We may share aggregated, non‑identifying data with researchers to improve EMDR techniques.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Cookies & Tracking Technologies</h3>
            <p className="text-muted leading-relaxed mb-4">
              We use local storage and cookies to remember your settings, manage your session flow, and enable offline functionality. Our mobile app may send push notifications; you can disable notifications in your device settings. We do not use advertising identifiers for tracking. Some third‑party service providers may use cookies or similar technologies; please refer to their privacy policies.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">8. How We Share Your Information</h3>
            <p className="text-muted leading-relaxed mb-4">
              We do not sell or rent your personal information to third parties. We may share information with service providers who perform services on our behalf, such as hosting, authentication, video streaming, analytics, payment processing and customer support. These providers are authorised to use your information only as necessary to provide services to us. We may share information with law enforcement or government agencies when required by law, legal process or to protect the rights, safety or property of EMDRise, our users or others.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">9. International Data Transfers</h3>
            <p className="text-muted leading-relaxed mb-4">
              Our service providers may be located outside the UK and the European Economic Area. When we transfer personal data internationally, we implement appropriate safeguards, such as standard contractual clauses, to ensure your data is protected.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Data Retention</h3>
            <p className="text-muted leading-relaxed mb-4">
              We retain personal information only as long as necessary to fulfil the purposes described in this policy, including compliance with legal obligations, dispute resolution and enforcing agreements. Session data may be retained to allow you to pause and resume sessions. You may request deletion of your account and personal data at any time; we will comply unless we have a legitimate reason to retain certain data.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Your Rights</h3>
            <p className="text-muted leading-relaxed mb-4">
              You have certain rights under data protection laws, including the right to access, correct, or delete your personal data, object to or restrict processing, and request data portability. You may also withdraw consent for marketing communications at any time. To exercise your rights, please contact us at <a href="mailto:support@emdrise.com" className="text-primary hover:opacity-80">support@emdrise.com</a>. If you reside in the UK or EU, you also have the right to lodge a complaint with the Information Commissioner's Office or your local data protection authority.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Children's Privacy</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise is intended for adults. We do not knowingly collect personal data from children under 16. If we become aware that a child has provided us with personal information, we will take steps to delete such information.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">13. Security Measures</h3>
            <p className="text-muted leading-relaxed mb-4">
              We implement appropriate technical and organisational measures to protect your personal information from unauthorised access, loss, or misuse. These include encryption, access controls, secure servers and regular security reviews. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">14. Third‑Party Services & Links</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise may contain links to or integrate with third‑party services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third‑party services you access through our app.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">15. Changes to This Policy</h3>
            <p className="text-muted leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. When we make material changes, we will notify you by posting the updated policy on our website or within the app and update the "Last Updated" date. Your continued use of EMDRise after such changes have been made indicates your acceptance of the updated policy.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">16. Contact Us</h3>
            <p className="text-muted leading-relaxed mb-4">
              If you have any questions or concerns about this Privacy Policy or your personal information, please contact us at <a href="mailto:support@emdrise.com" className="text-primary hover:opacity-80">support@emdrise.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
