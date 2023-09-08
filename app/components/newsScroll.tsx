// components/NewsScroll.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headings from "../styles/fonts.module.css";

gsap.registerPlugin(ScrollTrigger);

const repeatCount = 10;

const NewsScroll = ({ newsText }) => {
  const textContainerRef = useRef(null);

  useEffect(() => {
    const textContainer = textContainerRef.current;

    gsap.to(textContainer, {
      xPercent: -20,
      ease: "none",
      scrollTrigger: {
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-100 flex items-center justify-center overflow-hidden">
      <div className="wrapper">
        <div
          ref={textContainerRef}
          className="text"
          style={{ display: "flex" }}
        >
          {[...Array(repeatCount)].map((_, index) => (
            <div key={index} className="inline-block mx-3">
              <span
                className="textItem whitespace-nowrap text-5xl md:text-7xl font-staatliches uppercase bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300/[.85] text-5xl font-black "

                // "text-yellow-500 textItem whitespace-nowrap font-staatliches uppercase text-5xl font-semibold text-white mb-0 md:mb-10 md:text-7xl"
              >
                {newsText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsScroll;
