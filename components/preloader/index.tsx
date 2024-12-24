import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { slideUp } from "./anim";

const messages = ["Hello", "Getting ready", "Almost there", "Welcome"];

const WaveForm = ({ currentMessage }: { currentMessage: string }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="absolute w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-96 h-96 border border-black/5"
            style={{
              rotate: index * 60,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [index * 60, index * 60 + 360],
              borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "50% 50% 50% 50%",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
        ))}

        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-black/5 to-transparent"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1, 0.8],
            borderRadius: [
              "30% 70% 70% 30% / 30% 30% 70% 70%",
              "50% 50% 50% 50%",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            className="absolute text-3xl font-light text-black/30 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {currentMessage}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const router = useRouter();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
    router.push("/");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 70);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 2000); // Change message every 2 seconds

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="h-screen w-screen flex items-center justify-center fixed z-[10000000000000000] overflow-hidden bg-white"
    >
      <WaveForm currentMessage={messages[messageIndex]} />

      <motion.div
        className={styles.preloader}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        {dimension.width > 0 && (
          <div className={styles.loader}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={styles.bar}
                style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                animate={{
                  scaleY: [1, 2, 1],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: i * 0.15,
                }}
              />
            ))}
            <motion.div
              className={styles.loaderText}
              style={{ color: "rgba(0, 0, 0, 0.3)" }}
            >
              {progress}%
            </motion.div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
