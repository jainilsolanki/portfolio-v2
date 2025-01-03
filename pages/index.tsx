import { Sacramento, Alice } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "@/components/preloader";
import HeroSection from "@/components/hero-title";
import Header from "@/components/header";
import WaveGradient from "@/components/hero-title2";
import DynamicRippleFlow from "@/components/hero-title3";
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
      <Header />
      {!isLoading && (
        <div>
          <HeroSection />
          <WaveGradient/> 
          <DynamicRippleFlow/>
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
