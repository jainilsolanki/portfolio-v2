import { delay, motion } from "framer-motion";

export default function HeroSection() {
  const blobGradientVariants:any = {
    animate: {
      background: [
        "linear-gradient(45deg, rgba(244, 244, 246, 1) 20%, rgba(220, 220, 240, 1) 100%)", // Soft pastel pink-to-blue
        "linear-gradient(45deg, rgba(255, 220, 225, 1) 20%, rgba(150, 200, 255, 1) 100%)", // Warm pink-to-blue
        "linear-gradient(45deg, rgba(230, 240, 250, 1) 30%, rgba(150, 170, 220, 1) 70%)", // Light blue-to-gray
        "linear-gradient(45deg, rgba(250, 250, 250, 1) 30%, rgba(100, 180, 230, 1) 70%)", // Cool light gradient
        "linear-gradient(45deg, rgba(250, 250, 250, 1) 30%, rgba(100, 180, 230, 1) 70%)", // Reversing the cool light gradient
        "linear-gradient(45deg, rgba(230, 240, 250, 1) 30%, rgba(150, 170, 220, 1) 70%)", // Reversing light blue-to-gray
        "linear-gradient(45deg, rgba(255, 220, 225, 1) 20%, rgba(150, 200, 255, 1) 100%)", // Reversing warm pink-to-blue
        "linear-gradient(45deg, rgba(244, 244, 246, 1) 20%, rgba(220, 220, 240, 1) 100%)", // Reversing soft pastel pink-to-blue
      ],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        delay: 4,
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
      {/* Blob Gradient Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={blobGradientVariants}
        animate="animate"
      />
      
      {/* Content */}
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
    </div>
  );
}
