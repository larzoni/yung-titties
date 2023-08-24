import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="relative h-full py-5 bg-black overflow-hidden">
      <h1 className="text-center text-3xl text-white font-semibold mb-6">
        SOCIALS
      </h1>
      <div className="flex justify-center items-center mb-10">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl mx-3 px-1 text-gray-700 hover:text-white"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.tiktok.com/"
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
