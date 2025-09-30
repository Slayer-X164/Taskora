import { useState } from "react";
import HeroText from "./components/HeroText";
import ImageSection from "./components/ImageSection";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen font-[Poppins]">
      <div className="bg-[url(/bgImage.svg)] bg-no-repeat bg-size-[auto_110%] relative">
          <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <HeroText />
          <ImageSection />
          <h1 className="z-0 absolute bottom-0 left-1/2 -translate-x-1/2 text-[#d5dded] font-bold text-[20rem] md:text-[28rem] whitespace-nowrap overflow-hidden text-clip pointer-events-none select-none max-w-full">Taskora</h1>
        </div>
      </div>
    </>
  );
}

export default App;
