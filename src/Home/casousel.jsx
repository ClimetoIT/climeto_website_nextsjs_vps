import React from "react";

const TestCarousel = () => {
  return (
    <section className="relative w-full h-screen max-h-[800px] min-h-[400px] bg-gray-900 overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          src="https://www.youtube.com/embed/58xv1gELHqE?autoplay=1&mute=1&loop=1&playlist=58xv1gELHqE&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3"
          title="Background Video"
          allow="autoplay; encrypted-media"
          loading="eager"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default TestCarousel;