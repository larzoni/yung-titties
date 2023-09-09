import NewsPage from "./components/newsPage"; // Adjust the path based on your actual file structure
import Banner from "./components/banner";
import About from "./components/about";
import Gigs from "./components/gigs";
import Socials from "./components/socials";
import Contact from "./components/contact";

export default function Home() {
  return (
    <div>
      <Banner />
      <div id="News">
        <NewsPage />
      </div>

      <div id="About">
        <About />
      </div>
      <div id="Gigs">
        <Gigs />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      <Socials />
    </div>
  );
}
