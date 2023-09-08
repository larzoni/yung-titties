import { useState, useEffect, useRef } from "react";
import styles from "../styles/fonts.module.css";
import { FaBars } from "react-icons/fa"; // Import the hamburger icon from a library like react-icons

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navEl = useRef();

  useEffect(() => {
    const navElRect = navEl.current.getBoundingClientRect();

    function handleScroll() {
      setIsSticky(window.scrollY > navElRect.bottom);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      {/* Initial Desktop Navbar */}
      <div
        className={`md:flex ${
          !isMobileMenuOpen && !isSticky ? "block" : "hidden"
        } ${
          typeof window !== "undefined" && window.innerWidth < 768
            ? "md:hidden"
            : ""
        }`}
      >
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

      {/* Hamburger Icon for Mobile */}
      {isSticky && !isMobileMenuOpen && (
        <div
          className={`md:hidden fixed top-0 right-0 m-4 cursor-pointer`}
          onClick={toggleMobileMenu}
        >
          <FaBars size={32} color="#fff200" />
        </div>
      )}

      {/* Mobile Navbar */}
      {isMobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-20"
          onClick={toggleMobileMenu}
        >
          <div className="w-full h-1/2 bg-black bg-opacity-90 text-white text-3xl md:text-4xl flex justify-center items-center">
            <button
              className={`${styles.navItems} text-3xl md:text-4xl absolute top-4 right-4 cursor-pointer`}
              onClick={toggleMobileMenu}
            >
              ✕
            </button>
            <ul className="text-center space-y-4 mt-12">
              <li>
                <a
                  href="#News"
                  className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
                  key="news"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="#About"
                  className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
                  key="about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Gigs"
                  className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
                  key="gigs"
                >
                  Gigs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`${styles.navItems} z-10 block mt-2 px-2 md:px-4 py-2 hover:py-0 hover:px-3 uppercase text-3xl md:text-4xl transition duration-300 mx-10 mhover:mx-9 hover:text-4xl md:hover:text-5xl hover:underline`}
                  key="contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
