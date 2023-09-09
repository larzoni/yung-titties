import { getSocials } from "@/sanity/sanity-utils";
import { Socials } from "@/types/Socials";
import {
  FaInstagram,
  FaSpotify,
  FaYoutube,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa";

export default async function SocialsComponent() {
  const socialsData: Socials = await getSocials();

  return (
    <section className="relative h-full py-5 bg-black overflow-hidden">
      <h1 className="text-center text-3xl text-white font-semibold mb-6">
        SOCIALS
      </h1>
      <div className="flex justify-center items-center mb-10">
        <a
          href={socialsData.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaFacebook />
        </a>
        <a
          href={socialsData.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaInstagram />
        </a>
        <a
          href={socialsData.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaSpotify />
        </a>
        <a
          href={socialsData.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaYoutube />
        </a>
        <a
          href={socialsData.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}
