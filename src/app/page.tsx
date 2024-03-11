import Link from "next/link";
import HeroSection from "./components/HeroSection";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
    </div>
  );
}