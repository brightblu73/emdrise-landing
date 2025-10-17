import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-primary mb-4">Terms of Use</h1>
            <h2 className="text-xl text-muted mb-8">Last updated: 22 September 2025</h2>
            
            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Introduction & Acceptance</h3>
            <p className="text-muted leading-relaxed mb-4">
              These Terms of Use ("Terms") constitute a legally binding agreement between you and EMDRISE Ltd, a private limited company incorporated in England and Wales with company registration number 16733416 and registered office at 20 Wenlock Road, London, N1 7GU (we, us, our), a company registered in the United Kingdom, governing your access and use of EMDRise — our mobile and web application offering self‑guided EMDR therapy sessions. By accessing or using our services, you confirm that you are at least 18 years old or of legal age in your jurisdiction and that you have read, understood, and agree to these Terms and to our Privacy Policy (which is incorporated by reference).
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Eligibility & Age Restrictions</h3>
            <p className="text-muted leading-relaxed mb-4">
              You must be at least 18 years old (or older if required by the laws of your jurisdiction) to use EMDRise. If you are under 18, your parent or guardian must consent to your use. We do not knowingly collect data from children under 16. If we discover that a minor has provided us with personal data, we will delete that data.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Description of the Services</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise provides guided Eye Movement Desensitisation and Reprocessing (EMDR) sessions via professionally recorded videos, bilateral stimulation (visual, auditory, haptic) and intelligent session management that allows you to pause and resume. The application follows the standard eight‑phase EMDR protocol and offers a choice of virtual therapists. Our services are delivered for general informational and self‑help purposes only. They are not a substitute for professional mental health care or therapy.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Medical Disclaimer</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise does not provide medical or mental health advice and is not intended for the provision of clinical diagnosis or for use in emergencies. The application is not designed for situations where your life or safety or that of others is at immediate risk; if you are thinking of suicide, considering harming yourself or others, or experiencing a medical emergency, you must immediately contact emergency services in your local area. You should never disregard the advice of a qualified healthcare professional or delay seeking medical treatment because of something you have read or seen on EMDRise.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Account Registration & Subscription</h3>
            <p className="text-muted leading-relaxed mb-4">
              To access certain features of EMDRise, you must create an account and maintain an active subscription. By creating an account, you agree to provide accurate and complete information and to maintain the confidentiality of your login credentials.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Billing and Renewal.</strong> Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order. The length of your billing cycle will depend on the type of subscription plan you choose when you subscribed to the Services.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Free Trial.</strong> We may offer a free trial to new users who register. Unless canceled before the end of the free trial period, your account will be charged according to the subscription plan you selected when you registered. The length of the free trial and subscription pricing are displayed at the time of sign-up.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Cancellation.</strong> For any questions, please contact us at{' '}
              <a href="mailto:support@emdrise.com" className="text-primary hover:opacity-80">support@emdrise.com</a>.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Fee Changes.</strong> We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
            </p>
            <p className="text-muted leading-relaxed mb-4">
              <strong>Refunds Policy.</strong> All sales are final and no refund will be issued.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Limited License & Acceptable Use</h3>
            <p className="text-muted leading-relaxed mb-4">
              We grant you a limited, non‑exclusive, non‑transferable licence to download and use EMDRise on your personal devices for your own non‑commercial use. You may not modify, reverse engineer, copy, sell, or distribute any part of the application or its content. You may not use EMDRise to post or transmit unlawful, harmful, abusive or infringing content, or to interfere with the operation of our systems. We reserve the right to terminate this licence if you violate these Terms or engage in prohibited activities.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Ownership & Intellectual Property</h3>
            <p className="text-muted leading-relaxed mb-4">
              All content, trademarks, logos, videos, scripts, software, and materials provided through EMDRise are owned by EMDRISE Ltd, a private limited company incorporated in England and Wales with company registration number 16733416 and registered office at 20 Wenlock Road, London, N1 7GU or its licensors and are protected by copyright and other intellectual property laws. You acknowledge that you do not acquire any ownership rights through your use of EMDRise and agree not to reproduce, alter, or create derivative works based on our content.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">8. AI Features & Future Development</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise may incorporate artificial intelligence features in future releases to personalise your experience. Such features will not provide clinical diagnoses or decisions. We may process de‑identified or aggregated session data to train and improve AI models, but personal or health data will never be sold or used for advertising. We will update our Privacy Policy to describe any new data processing and obtain your consent where required.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Third‑Party Services & External Links</h3>
            <p className="text-muted leading-relaxed mb-4">
              Our services rely on third‑party providers for hosting (Supabase, Neon), authentication (Supabase Authentication), payment processing (RevenueCat and Apple), and video streaming. These services have their own terms and privacy policies. We have not reviewed all of the sites linked to EMDRise and are not responsible for the content of any linked site; the inclusion of a link does not imply endorsement.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Disclaimers & Limitation of Liability</h3>
            <p className="text-muted leading-relaxed mb-4">
              EMDRise is provided "as is" without any warranties, expressed or implied. To the fullest extent permitted by law, we expressly disclaimer all warranties, including implied warranties of merchantability, fitness for a particular purpose, and non‑infringement. Your use of the application is at your own risk. We do not warrant that EMDRise will meet your requirements or that the service will be uninterrupted, timely, or error‑free. In no event shall EMDRISE Ltd, a private limited company incorporated in England and Wales with company registration number 16733416 and registered office at 20 Wenlock Road, London, N1 7GU, its affiliates, directors, employees or agents be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of EMDRise.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Indemnification</h3>
            <p className="text-muted leading-relaxed mb-4">
              You agree to indemnify, defend and hold harmless EMDRISE Ltd, a private limited company incorporated in England and Wales with company registration number 16733416 and registered office at 20 Wenlock Road, London, N1 7GU and its affiliates, directors, employees and agents from any claims, damages, liabilities, and expenses arising out of or related to your use of EMDRise, your violation of these Terms, or your infringement of any rights of another.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Governing Law & Dispute Resolution</h3>
            <p className="text-muted leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any dispute arising under these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you are a consumer residing outside the UK, you may have additional rights.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">13. Changes to Terms</h3>
            <p className="text-muted leading-relaxed mb-4">
              We may modify these Terms from time to time. Material changes will be posted within the application or on our website, and the date of the latest update will be indicated. Your continued use of EMDRise after the changes take effect constitutes your acceptance of the updated Terms.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">14. Contact Information</h3>
            <p className="text-muted leading-relaxed mb-4">
              For any questions, please contact us at <a href="mailto:support@emdrise.com" className="text-primary hover:opacity-80">support@emdrise.com</a>.
            </p>
            
            <div className="mt-8 p-6 bg-surface rounded-custom border border-custom">
              <p className="text-muted leading-relaxed mb-4">
                Use of the EMDRise app may involve confronting emotionally difficult material. By using the app, you acknowledge that any emotional responses are a normal part of the self-help process and agree that EMDRISE Ltd is not liable for any mental anguish or emotional distress that may arise.
              </p>
              <p className="text-muted leading-relaxed">
                EMDRise is not suitable for individuals currently experiencing a mental health crisis or those requiring ongoing psychiatric support. If you have been recently hospitalised, diagnosed with a dissociative disorder, or are working with a mental health professional, you should consult them before using the app.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
