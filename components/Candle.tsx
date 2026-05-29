"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Candle() {
  const [active, setActive] = useState(false);

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
      {/* Wish Text */}
      <motion.p
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mb-6 text-sm tracking-[5px] uppercase text-gray-400"
      >
        Make A Wish
      </motion.p>

      {/* Candle Wrapper */}
      <motion.div
        whileTap={{ scale: 0.96 }}
        onClick={() => setActive(!active)}
        className="relative flex flex-col items-center cursor-pointer"
      >
        {/* Flame Glow */}
        <motion.div
          animate={{
            scale: active ? [1, 1.3, 1] : [1, 1.1, 1],
            opacity: active ? [0.7, 1, 0.7] : [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
          }}
          className="absolute -top-10 w-16 h-16 bg-yellow-400/30 blur-2xl rounded-full"
        />

        {/* Flame */}
        <motion.div
          animate={{
            y: [0, -4, 0],
            scaleY: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
          }}
          className="relative z-10"
        >
          <div className="w-6 h-10 bg-gradient-to-t from-yellow-500 via-yellow-300 to-white rounded-full blur-[1px]" />
        </motion.div>

        {/* Wick */}
        <div className="w-[2px] h-4 bg-black" />

        {/* Candle */}
        <motion.div
          animate={{
            boxShadow: active
              ? [
                  "0 0 20px rgba(255,215,0,0.3)",
                  "0 0 40px rgba(255,215,0,0.5)",
                  "0 0 20px rgba(255,215,0,0.3)",
                ]
              : [
                  "0 0 10px rgba(255,215,0,0.15)",
                  "0 0 20px rgba(255,215,0,0.2)",
                  "0 0 10px rgba(255,215,0,0.15)",
                ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="w-20 h-44 rounded-t-2xl rounded-b-md 
          bg-gradient-to-b from-[#fff3c4] via-[#f6d365] to-[#c98c00]
          border border-yellow-200/20"
        />

        {/* Candle Shine */}
        <div className="absolute bottom-10 left-3 w-2 h-24 bg-white/20 blur-sm rounded-full" />
      </motion.div>

      {/* Bottom Quote */}
      <motion.p
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="mt-6 text-xs text-gray-500 tracking-[3px]"
      >
        Every flame holds a memory
      </motion.p>
    </div>
  );
}
