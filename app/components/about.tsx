import { getAbout } from "@/sanity/sanity-utils";
import { About } from "@/types/About";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function AboutComponent() {
  const aboutItems: About[] = await getAbout();
  return (
    <section className="relative -mt-20 py-20 bg-black">
      {aboutItems.map((about) => (
        <section
          key={about._id}
          className="grid md:grid-cols-[30%,70%] gap-0 items-stretch"
        >
          <div className="md:w-full md:col-span-1">
            <div className="h-[300px] md:h-full">
              <Image
                src={about.image}
                alt={about.alt || "Default Alt Text"}
                width={600}
                height={600}
                className="object-cover md:h-full"
                priority
              />
            </div>
          </div>

          <div className="bg-gray-900 text-gray-400 md:w-full md:col-span-1 px-10 md:px-20 py-10 md:text-lg text-sm text-center">
            <div className="flex flex-col h-full">
              <h2 className="uppercase text-white text-lg lg:text-2xl mx-5 mt-0 mb-5 md:py-10 font-semibold">
                {about.heading}
              </h2>
              <div className="p-5 overflow-scroll md:h-full h-[20rem]">
                <PortableText value={about.about} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
