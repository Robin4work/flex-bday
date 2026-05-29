"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ImpossibleChoice() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 140 - 70;

    setPosition({ x, y });
  };

  return (
    <section className="min-w-full h-screen flex items-center justify-center relative overflow-hidden bg-[#050505]">
      {/* Glow */}
      <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-yellow-500/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-rose-500/10 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <p className="uppercase tracking-[8px] text-yellow-400 text-sm mb-6">
          One Important Question 👀
        </p>

        <h2 className="text-5xl md:text-7xl leading-tight text-white font-cursive">
          Will You Always <br />
          Be My Favorite <br />
          Human? 🥺
        </h2>

        <p className="text-gray-400 mt-6 text-lg">Choose wisely 😌</p>

        {/* Buttons */}
        <div className="relative mt-16 flex items-center justify-center gap-8 h-[120px]">
          {/* YES */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-10 py-4
              rounded-full
              bg-yellow-400
              text-black
              text-xl
              font-semibold
              shadow-[0_0_40px_rgba(255,215,0,0.5)]
            "
          >
            Yes 💛
          </motion.button>

          {/* NO */}
          <motion.button
            animate={{
              x: position.x,
              y: position.y,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            onMouseEnter={moveButton}
            className="
              absolute
              px-10 py-4
              rounded-full
              border border-white/20
              bg-white/10
              backdrop-blur-md
              text-white
              text-xl
            "
          >
            No 🙈
          </motion.button>
        </div>
      </div>
    </section>
  );
}
