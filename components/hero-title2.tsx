"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BoxesCore = ({ className, ...rest }: { className?: string }) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  let colors = [
    "--sky-300",
    "--pink-300",
    "--green-300",
    "--yellow-300",
    "--red-300",
    "--purple-300",
    "--blue-300",
    "--indigo-300",
    "--violet-300",
  ];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
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
    <div className="flex items-center justify-center w-full h-full">
      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0) `,
        }}
        className={cn(
          "left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2  z-0 fixed ",
          className
        )}
        {...rest}
      >
        {rows.map((_, i) => (
          <motion.div
            key={`row` + i}
            className="w-16 h-8  border-l  border-slate-700 relative"
          >
            {cols.map((_, j) => (
              <motion.div
                whileHover={{
                  backgroundColor: `var(${getRandomColor()})`,
                  transition: { duration: 0 },
                }}
                animate={{
                  transition: { duration: 2 },
                }}
                key={`col` + j}
                className="w-16 h-8  border-r border-t border-slate-700 relative"
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-slate-700 stroke-[1px] pointer-events-none"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
      {/* Content */}
      <div className="z-10 text-center self-center flex flex-col justify-self-center bg-white rounded-full p-8 shadow-[inset_8px_8px_8px_rgba(0,0,0,0.1)]">

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

export const Boxes = React.memo(BoxesCore);
