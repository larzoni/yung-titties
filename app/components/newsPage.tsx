import { getNews } from "@/sanity/sanity-utils";
import Image from "next/image";
import { News } from "@/types/News";

export default async function NewsPage() {
  const newsItems: News[] = await getNews();

  return (
    <div className="max-w-5xl mx-auto py-20 px-20">
      <h2 className="font-bold text-gray-700 text-3xl">News</h2>
      <div className="mt-5">
        {newsItems.map((news) => (
          <div
            key={news._id}
            className="border-2 border-gray-500 rounded-lg p-4 mb-4"
          >
            <Image
              src={news.coverart}
              alt={news.alt || "Default Alt Text"}
              width={750}
              height={300}
              className="object-cover rounded-lg border border-gray-500"
              priority
            />
            <h3 className="text-lg font-semibold mt-2">{news.songtitle}</h3>
            {/* Render other properties like songtitle, songlink, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
}
