import React from 'react';
import { motion } from 'framer-motion';

const WaveGradient = () => {
  const numberOfRings = 5;
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 1, ease: "easeInOut" },
    }),
  };
  return (
    <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden z-0">
      {[...Array(numberOfRings)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{
            opacity: 0.6, // Consistent opacity for better blending
          }}
          animate={{
            scale: [2.5, 0.5], // Start larger and scale down for inward motion
            opacity: [0, 0.6, 0], // Fade in and out smoothly
          }}
          transition={{
            duration: 6, // Slower duration for smoother motion
            repeat: Infinity,
            delay: i * (6 / numberOfRings), // Evenly space the rings
            ease: "linear", // Linear easing for consistent speed
          }}
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background: `radial-gradient(circle at center,
                rgba(244, 244, 246, 1) 20%, 
                rgba(255, 220, 225, 0.6) 40%, 
                rgba(150, 200, 255, 0.3) 60%, 
                transparent 80%
              )`,
            }}
          />
        </motion.div>
      ))}

      {/* Stable central glow matching HeroSection with inverse gradients */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            // Forward gradients
            'radial-gradient(circle at center, rgba(244, 244, 246, 1) 20%, rgba(255, 220, 225, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(255, 220, 225, 1) 20%, rgba(150, 200, 255, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(230, 240, 250, 1) 20%, rgba(150, 170, 220, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(250, 250, 250, 1) 20%, rgba(100, 180, 230, 0.6) 40%, transparent 80%)',

            // Inverse gradients
            'radial-gradient(circle at center, rgba(250, 250, 250, 1) 20%, rgba(100, 180, 230, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(230, 240, 250, 1) 20%, rgba(150, 170, 220, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(255, 220, 225, 1) 20%, rgba(150, 200, 255, 0.6) 40%, transparent 80%)',
            'radial-gradient(circle at center, rgba(244, 244, 246, 1) 20%, rgba(255, 220, 225, 0.6) 40%, transparent 80%)',
          ],
        }}
        transition={{
          duration: 12, // Double duration to include forward and reverse
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
};

export default WaveGradient;
