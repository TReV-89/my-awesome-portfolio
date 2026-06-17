const PodcastsSection = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="font-mono text-sm text-muted-foreground mb-4">Media</p>
          <h2 className="text-2xl font-light mb-2">Podcasts & Talks</h2>
          <p className="text-muted-foreground text-sm">
            Conversations and presentations on AI, machine learning, and technology.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="border border-border bg-card overflow-hidden">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/H0V6_WGaZHc?start=958"
                title="Podcast"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;
