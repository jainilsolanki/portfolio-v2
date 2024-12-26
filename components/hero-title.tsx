import { motion } from "framer-motion";

export default function HeroSection() {
  const gradientVariants:any = {
    animate: {
      background: [
        "linear-gradient(45deg, #f0f4f8, #dfe7f0)", // Soft pastel gradient
        "linear-gradient(45deg, #f7e9e4, #f3d7b1)", // Soft warm tones
        "linear-gradient(45deg, #cfd9e6, #e0e7ff)", // Subtle blue to light purple
        "linear-gradient(45deg, #f3f4f9, #dfe2f0)", // Soft blue-gray
      ],
      transition: {
        duration: 10, // Slower transition for subtle effect
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
      {/* Subtle Animated Gradient */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={gradientVariants}
        animate="animate"
      />
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-8xl font-semibold text-neutral-800"
          initial="hidden"
          animate="visible"
        >
          {"Janmey Solanki".split("").map((char, i) => (
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
    </div>
  );
}
