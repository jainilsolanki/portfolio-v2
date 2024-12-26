import { motion } from "framer-motion";

export default function HeroSection() {
  const textVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  const floatingVariants:any = {
    float: {
      y: [0, 20, 0],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 4,
      },
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 overflow-hidden">
      {/* Floating Circles */}
      <motion.div
        className="absolute w-40 h-40 bg-blue-300 rounded-full top-20 left-10 opacity-60"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div
        className="absolute w-60 h-60 bg-pink-300 rounded-full bottom-20 right-20 opacity-60"
        variants={floatingVariants}
        animate="float"
      />

      {/* Text Animation */}
      <div className="text-center relative z-10">
        <motion.h1
          className="text-8xl font-bold text-neutral-900"
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
          className="text-4xl mt-4 font-light text-gray-500"
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

      {/* Additional Floating Shape */}
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-tr from-purple-400 to-indigo-500 rounded-full opacity-30 top-10 -right-40"
        variants={floatingVariants}
        animate="float"
      />
    </div>
  );
}
