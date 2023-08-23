import { useState, useEffect } from "react";

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        sticky ? "fixed top-0 bg-white shadow-md" : ""
      } transition duration-300 ease-in-out w-full md:flex md:justify-center md:items-center`}
    >
      {/* Add your links here */}
    </nav>
  );
}
