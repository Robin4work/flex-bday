'use client';

import { motion } from 'framer-motion';

export default function IntroSection() {
  return (
    <motion.section
      className="flex flex-col items-center justify-center h-screen bg-rose-50 text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-pink-600 mb-4 font-[Pacifico]">
        🎉 Happy Birthday 🎉
      </h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Wishing you a day filled with love, laughter, and beautiful memories ✨
      </p>
    </motion.section>
  );
}
