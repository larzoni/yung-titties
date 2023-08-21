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

export default async function NewsPage() {
  const newsItems: News[] = await getNews();

  return (
    <section className="relative">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/newsbg.mp4" // Use the relative path of the video in the public directory
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        {/* Top Gradient Overlay */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black to-t"></div>
      </div>
      {/* News Content */}
      <div className="z-10 max-w-5xl mx-auto py-40 px-20">
        {newsItems.map((news) => (
          <div className="relative bg-gray-200 rounded-lg p-6 overflow-hidden shadow-lg">
            <div className="z-10 flex items-center space-x-6">
              <div className="flex-shrink-0 overflow-hidden xl:w-64 xl:h-64 lg:w-48 lg:h-48 md:w-32 md:h-32 sm:w-16 sm:h-16">
                <Image
                  src={news.coverart}
                  alt={news.alt || "Default Alt Text"}
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{news.songtitle}</h3>
                <p className="text-gray-600">{/* Your text here */}</p>
                <a
                  href={news.songlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded-lg px-4 py-2 bg-green-500 text-black font-semibold hover:bg-green-600 transition duration-300"
                >
                  Listen Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
