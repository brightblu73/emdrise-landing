export default function PromoVideo() {
  return (
    <section className="py-16 lg:py-24 bg-blue-50">
      <div className="max-w-container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-primary">
          Meet one of your EMDR guides and discover how EMDRise works
        </h2>
        
        <div className="video-wrap shadow-2xl mt-8">
          <video
            className="promo-video"
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
