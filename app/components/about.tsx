import { getAbout } from "@/sanity/sanity-utils";
import { About } from "@/types/About";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default async function AboutComponent() {
  const aboutItems: About[] = await getAbout();
  return (
    <section className="relative -mt-20 py-20 overflow-hidden z-[-1] bg-black">
      {aboutItems.map((about) => (
        <section
          key={about._id}
          className="grid md:grid-cols-[30%,70%] gap-0 items-stretch"
        >
          <div className="md:w-full md:col-span-1">
            <div className="h-[400px] md:h-full">
              <Image
                src={about.image}
                alt={about.alt || "Default Alt Text"}
                width={600}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="bg-gray-200 text-gray-600 md:w-full md:col-span-1 px-10 py-10 md:text-lg text-sm">
            <div className="flex flex-col h-full justify-center">
              <h2 className="uppercase text-black text-lg lg:text-2xl mx-5 mt-0 mb-5 font-semibold">
                {about.heading}
              </h2>
              <PortableText value={about.about} />
            </div>
          </div>
        </section>
      ))}
    </section>
  );
}
