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
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h1
          id="heading"
          className="font-staatliches text-8xl font-title text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-10xl"
          style={{ color: "#FFF200" }}
        >
          YUNG TITTIES
        </h1>
      </div>
      {/* Font Import */}
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Staatliches&display=swap');
      </style>
    </section>
  );
}