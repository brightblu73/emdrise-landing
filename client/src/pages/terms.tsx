import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Header />
      <main className="py-20">
        <div className="max-w-container mx-auto px-6">
          <h1 className="text-4xl font-bold text-text-dark mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none">
            {/* TODO: Add full legal terms content here */}
            <p className="text-text-muted">
              Terms of Use content will be added here. This is a placeholder for the legal terms and conditions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
