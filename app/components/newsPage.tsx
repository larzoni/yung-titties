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

export default async function NewsPage() {
  const newsItems: News[] = await getNews();

  return (
    <div className="bg-black px-2 md:px-0">
      <h1 className="font-staatliches text-3xl font-semibold text-white mb-5 md:text-4xl text-center">
        Latest News
      </h1>
      <section className="relative">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/newsbg.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
          {/* Top Gradient Overlay */}
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-t"></div>
        </div>
        {/* News Content */}
        <div className="z-10 max-w-[100vw] mx-auto py-10 md:py-20 px-2 md:px-0">
          {newsItems.map((news) => (
            <section
              key={news._id}
              className="relative bg-black bg-opacity-80 overflow-hidden shadow-lg flex justify-center flex-col md:flex-row items-center p-6 md:p-8 mb-6 md:mb-8"
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
                <h2 className="text-1xl mx-2 md:text-2xl font-semibold mb-2">
                  {news.songtitle}
                </h2>
                <div className="text-black text-center p-5 text-mg md:text-lg">
                  <PortableText
                    value={news.aboutrelease} // Use 'blocks' prop instead of 'value'
                  />
                </div>
                <a
                  href={news.songlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 mb-4 inline-block rounded-lg px-10 py-2 bg-green-500 text-black font-semibold hover:bg-green-600 transition duration-300"
                >
                  Listen Now
                </a>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
}
