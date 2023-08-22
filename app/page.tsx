import NewsPage from "./components/newsPage"; // Adjust the path based on your actual file structure
import Banner from "./components/banner";
import About from "./components/about";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewsPage />
      <About />
    </div>
  );
}
