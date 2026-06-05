"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const notes = [
  {
    id: 1,
    title: "For You Meri Jaan ❤️",
    message:
      "Somehow you made ordinary days feel magical that never felt before you",
  },
  {
    id: 2,
    title: "A Little Secret ✨",
    message:
      "I still replay our happiest moments randomly and smile like an idiot.",
  },
  {
    id: 3,
    title: "Forever Mood 🌙",
    message:
      "Not every home is a place. Sometimes it’s just one person & that you always you",
  },
];

export default function LoveNotes() {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);

  return (
    <>
      {/* Floating Envelopes */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {/* Envelope 1 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[18%] right-[12%] pointer-events-auto"
        >
          <button onClick={() => setSelectedNote(1)} className="group relative">
            <div className="w-24 h-16 bg-[#f5e6c8] rounded-md shadow-2xl border border-yellow-200/30 relative overflow-hidden">
              {/* Envelope Flap */}
              <div className="absolute top-0 left-0 w-full h-full bg-[#e8d7b4] clip-envelope" />

              {/* Wax Seal */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-900 rounded-full border border-red-700 shadow-md" />
            </div>

            <div className="absolute inset-0 bg-yellow-300/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />
          </button>
        </motion.div>

        {/* Envelope 2 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [10, -10, 10] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[24%] left-[10%] pointer-events-auto"
        >
          <button onClick={() => setSelectedNote(2)} className="group relative">
            <div className="w-20 h-14 bg-[#f5e6c8] rounded-md shadow-2xl border border-yellow-200/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#e8d7b4] clip-envelope" />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-900 rounded-full border border-red-700 shadow-md" />
            </div>

            <div className="absolute inset-0 bg-rose-300/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />
          </button>
        </motion.div>

        {/* Envelope 3 */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-8, 8, -8] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[55%] right-[22%] pointer-events-auto"
        >
          <button onClick={() => setSelectedNote(3)} className="group relative">
            <div className="w-16 h-12 bg-[#f5e6c8] rounded-md shadow-2xl border border-yellow-200/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[#e8d7b4] clip-envelope" />

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-red-900 rounded-full border border-red-700 shadow-md" />
            </div>

            <div className="absolute inset-0 bg-yellow-300/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />
          </button>
        </motion.div>
      </div>

      {/* Opened Note Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ scale: 0.7, rotate: -4, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#f8ecd9] text-black max-w-xl w-full rounded-2xl p-10 shadow-[0_0_80px_rgba(255,215,0,0.15)] border border-yellow-900/10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4 text-black/60 hover:text-black transition"
              >
                <X size={22} />
              </button>

              {/* Letter Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-cursive text-center text-yellow-700">
                  {notes.find((n) => n.id === selectedNote)?.title}
                </h2>

                <div className="w-20 h-[1px] bg-yellow-700/40 mx-auto" />

                <p className="text-lg leading-9 text-center text-gray-800 font-light">
                  {notes.find((n) => n.id === selectedNote)?.message}
                </p>

                <p className="text-right pt-8 text-yellow-800 font-cursive text-2xl">
                  — Always Yours
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
