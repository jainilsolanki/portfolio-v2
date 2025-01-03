import { Sacramento, Alice } from "next/font/google";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Preloader from "@/components/preloader";
import HeroSection from "@/components/hero-title";
import Header from "@/components/header";
import { BoxesCore } from "@/components/hero-title2";
import { AuroraBackground } from "@/components/hero-title3";
import { motion } from "framer-motion";
import { BackgroundLines } from "@/components/hero-title4";
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
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 1, ease: "easeInOut" },
    }),
  };
  return (
    <main className={`${sacramento.className} max-w-[1920px] mx-auto`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      {!isLoading && (
        <div>
          {/* <HeroSection /> */}
          {/* <div className="h-screen w-screen overflow-hidden">
            <BoxesCore />
          </div> */}
          <AuroraBackground
            children={
              <div className="relative z-10 text-center">
                <motion.h1
                  className="text-8xl font-semibold text-neutral-800"
                  initial="hidden"
                  animate="visible"
                >
                  {"Jainil Solanki".split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={textVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h2
                  className="text-4xl mt-4 font-light text-neutral-600"
                  initial="hidden"
                  animate="visible"
                >
                  {"Front-End Engineer".split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={textVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>
            }
          />

          {/* <BackgroundLines
            children={
              <div className="relative z-10 text-center">
                <motion.h1
                  className="text-8xl font-semibold text-neutral-800"
                  initial="hidden"
                  animate="visible"
                >
                  {"Jainil Solanki".split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={textVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h1>
                <motion.h2
                  className="text-4xl mt-4 font-light text-neutral-600"
                  initial="hidden"
                  animate="visible"
                >
                  {"Front-End Engineer".split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={textVariants}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.h2>
              </div>
            }
          /> */}
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
