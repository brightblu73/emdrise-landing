import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            {/* TODO: Add full privacy policy content here */}
            <p className="text-muted">
              Privacy Policy content will be added here. This is a placeholder for the privacy policy.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
