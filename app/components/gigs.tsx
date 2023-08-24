// Gigs.tsx
import { getGigs } from "@/sanity/sanity-utils";
import { Gigs } from "@/types/Gigs";
import styles from "../styles/button.module.css";
import headings from "../styles/fonts.module.css";

export default async function Gigs() {
  const gigsItems: Gigs[] = await getGigs();

  return (
    <section className="relative h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          src="/gigsbg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-t"></div>
      </div>

      <div className="max-w-4xl mx-auto p-5 md:p-0">
        <h1
          className={`text-white mt-5 md:mt-20 z-10 ${headings.sectionHeadings} font-staatliches uppercase text-3xl font-bold mb-20 text-center relative`}
        >
          SEE US LIVE!
        </h1>
        <ul>
          {gigsItems.map((gig) => (
            <div
              key={gig._id}
              className={`mb-5 md:text-left text-center p-5 rounded-lg backdrop-blur-md shadow-md bg-opacity-0 ${
                gig.gigStatus === "false"
                  ? "bg-gray-700 bg-opacity-10"
                  : "bg-gray-400 bg-opacity-10"
              }`}
            >
              <div className="mb-2 md:flex md:justify-between md:items-center">
                <p
                  className={`text-lg md:text-left text-center md:text-2xl font-semibold ${
                    gig.gigStatus === "false" ? "text-gray-500 " : "text-white"
                  }`}
                >
                  {gig.location}
                </p>
                <p
                  className={`text-gray-400 md:text-lg mt-1 md:mt-0 ${
                    gig.gigStatus === "false" ? "text-gray-600" : ""
                  }`}
                >
                  {new Date(gig.date).toLocaleString()}
                </p>
              </div>
              {gig.gigStatus === "false" ? (
                <p className="text-red-900 text-center">No tickets available</p>
              ) : (
                <div className="text-center">
                  <div className="max-w-[190px] md:max-w-[240px] mx-auto mt-5 md:mt-0">
                    <a
                      href={gig.tickets}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block bg-green-600 uppercase px-5 md:px-20 py-4 md:py-5 relative rounded-lg text-center leading-none overflow-hidden hover:text-gray-700 ${styles["btn2"]}`}
                    >
                      <span className="absolute inset-0 bg-green-500"></span>
                      <span className="absolute inset-0 flex justify-center items-center font-bold text-sm md:text-lg">
                        Get Tickets
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
