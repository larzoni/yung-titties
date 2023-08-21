import { getNews } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function News() {
  const news = await getNews();
  return (
    <div className="max-w-5xl mx-auto py-20 px-20">
      {/* <div className="mt-5 grid md-grid-cols-2 lg:grid-cols-3 gap-8">
        {News.map((news) => (
          <div
            key={news._id}
            className="border-2 border-gray-500 rounded-lg p-1"
          >
            <div className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              {news.name}
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
