export default function Banner() {
  return (
    <section className="relative h-[95vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/herobg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      {/* Title */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-center z-10">
        <h1 className="text-5xl font-title text-white">YUNG TITTIES</h1>
      </div>
    </section>
  );
}
