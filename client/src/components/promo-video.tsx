export default function PromoVideo() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-blue-600">
          Meet one of your EMDR guides and discover how EMDRise works
        </h2>
        
        <div className="max-w-4xl mx-auto mt-8">
          <video
            className="w-full rounded-lg shadow-2xl aspect-video"
            controls
            preload="metadata"
            data-testid="video-promo"
          >
            <source
              src="https://jxhjghgectlpgrpwpkfd.supabase.co/storage/v1/object/public/videos/Landing%20Page%20-%20Maria%20(no%20WM).mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
