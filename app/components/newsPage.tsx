// import { getNews } from "@/sanity/sanity-utils";
// import Image from "next/image";
// import { News } from "@/types/News";

// export default async function NewsPage() {
//   const newsItems: News[] = await getNews();

//   return (
//     <div className="max-w-5xl mx-auto py-20 px-20">
//       <h2 className="font-bold text-gray-700 text-3xl">News</h2>
//       <div className="mt-5">
//         {newsItems.map((news) => (
//           <div
//             key={news._id}
//             className="border-2 border-gray-500 rounded-lg p-4 mb-4"
//           >
//             <Image
//               src={news.coverart}
//               alt={news.alt || "Default Alt Text"}
//               width={750}
//               height={300}
//               className="object-cover rounded-lg border border-gray-500"
//               priority
//             />
//             <h3 className="text-lg font-semibold mt-2">{news.songtitle}</h3>
//             {/* Render other properties like songtitle, songlink, etc. */}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { getNews } from "@/sanity/sanity-utils";
import Image from "next/image";
import { News } from "@/types/News";
import { PortableText } from "@portabletext/react";
import styles from "./button.module.css";

export default async function NewsPage() {
  const newsItems: News[] = await getNews();

  return (
    <div className="relative z-0 py-20">
      <div className="absolute inset-0 z-0">
        <video
          src="/newsbg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-black"></div>
        {/* Top Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-t"></div>
      </div>
      {/* News banner */}
      <div className="relative z-0 py-0 md:px-0">
        <h1
          // style={{ color: "#FFF200" }}
          className="font-staatliches uppercase text-yellow-500 text-5xl font-semibold text-white mb-0 md:mb-10 md:text-7xl text-center"
        >
          {newsItems[0]?.heading || "News"}
        </h1>
      </div>
      {/* News Content */}
      <section className="relative">
        <div className="z-10 max-w-[100vw] mx-auto py-10 md:py-0 px-5 md:px-0">
          {newsItems.map((news) => (
            <section
              key={news._id}
              className="relative  backdrop-blur-sm  rounded-lg bg-black bg-opacity-50 overflow-hidden shadow-lg flex justify-center flex-col md:flex-row items-center p-5 mt-0 md:p-8 mb-20 md:mb-40"
            >
              <div className="bg-gray-300 rounded-lg p-1 md:p-3 flex-shrink-0 mx-10 overflow-hidden w-[300px] h-[300px] xl:w-[400px] xl:h-[400px]">
                <Image
                  src={news.coverart}
                  alt={news.alt || "Default Alt Text"}
                  width={600}
                  height={600}
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="rounded-lg w-[300px] h-[300px] xl:w-[400px] xl:h-[400px] md:ml-8 flex flex-col justify-center items-center md:text-center bg-gray-300 mt-4 md:mt-0">
                <h2 className="uppercase text-lg lg:text-2xl mx-5 mt-0 mb-5 font-semibold">
                  {news.songtitle}
                </h2>
                <div className=" text-gray-600 text-center md:max-h-none px-5 lg:text-lg text-sm">
                  <PortableText value={news.aboutrelease} />
                </div>

                <a
                  href={news.songlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block bg-green-600 uppercase mt-10 px-20 py-5 relative rounded-lg text-center leading-none overflow-hidden hover:text-gray-700 ${styles["btn2"]}`}
                >
                  <span className="absolute inset-0 bg-green-500"></span>
                  <span className="absolute inset-0 flex justify-center items-center font-bold">
                    Listen Now
                  </span>
                </a>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
