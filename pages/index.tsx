import { Sacramento, Alice } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "@/components/preloader";
import HeroSection from "@/components/hero-title";
import Header1 from "@/components/header1";
import Header2 from "@/components/header2";
import Header3 from "@/components/header3";
import Header4 from "@/components/header4";
import Header5 from "@/components/header5";
const sacramento = Sacramento({
  variable: "--font-sacramento",
  subsets: ["latin"],
  weight: "400",
});

const alice = Alice({
  variable: "--font-alice",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    loadingTimeout;

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <main className={`${sacramento.className} max-w-[1920px] mx-auto`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <div>
        <Header1 />
        <Header2 />
        <Header3 />
        <Header4 />
        <Header5 />
      </div>
      {!isLoading && (
        <div>
          <HeroSection />
          {/* <Lamp />
          <About />
          <Skills />
          <Career />
          <Portfolio />
          <Contact /> */}
        </div>
      )}
    </main>
  );
}
