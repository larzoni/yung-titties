import { useState, useEffect, useRef } from "react";

import styles from "../styles/fonts.module.css";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const navEl = useRef();

  useEffect(() => {
    const navElRect = navEl.current.getBoundingClientRect();
    console.log(navElRect);

    function handleScroll() {
      setIsSticky(window.scrollY > navElRect.top);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        rounded-lg
        bg-white backdrop-blur-sm md:backdrop-blur-md bg-opacity-0 shadow-md duration-300 ease-in-out w-full md:flex md:justify-center md:items-center md:flex-col
        top-0
        ${isSticky ? "fixed" : "relative"}
      `}
      ref={navEl}
    >
      <div className="md:flex">
        <a
          href="#News"
          className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
        >
          News
        </a>
        <a
          href="#About"
          className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
        >
          About
        </a>
        <a
          href="#Gigs"
          className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
        >
          Gigs
        </a>
        <a
          href="#"
          className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
