import React from "react";
import { motion } from "framer-motion";

const DynamicRippleFlow = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 1, ease: "easeInOut" },
    }),
  };

  return (
    <div className="relative h-screen w-full bg-white overflow-hidden flex justify-center items-center">
      {/* Background Gradient Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            120deg,
            rgba(200, 220, 240, 0.7),  /* Soft light blue */
            rgba(180, 160, 220, 0.7),  /* Muted lavender */
            rgba(200, 200, 255, 0.7),  /* Subtle pastel pink */
            rgba(180, 210, 255, 0.7)   /* Soft blue */
          )`,
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: [
            "0% 50%",
            "50% 100%",
            "100% 50%",
            "50% 0%",
            "0% 50%",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Ripple Effect Layers */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle,
              transparent,
              rgba(255, 255, 255, 0.15),
              transparent
            )`,
            opacity: 0.3,
          }}
          animate={{
            scale: [1, 2, 1], // Expand and contract
            opacity: [0.2, 0.4, 0.2], // Fade in and out
          }}
          transition={{
            duration: 6 + i * 2, // Different speeds for each ripple
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

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
};

export default DynamicRippleFlow;
