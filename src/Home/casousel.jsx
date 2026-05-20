import React from "react";

const TestCarousel = () => {
  return (
    <section className="relative w-full h-screen max-h-[800px] min-h-[400px] bg-gray-900 overflow-hidden">
      {/* High-Performance HTML5 Background Video */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
          src="https://res.cloudinary.com/day3dgjd9/video/upload/f_auto,q_auto/vidssave.com_Climeto_720P_v9ei8w.mp4"
          poster="https://res.cloudinary.com/day3dgjd9/video/upload/f_auto,q_auto/vidssave.com_Climeto_720P_v9ei8w.jpg"
          autoPlay
          muted
          loop
          playsInline // Crucial for iOS autoplay
        />
      </div>
    </section>
  );
};

export default TestCarousel;