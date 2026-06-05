"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import confetti from "canvas-confetti";

const notes = [
  {
    id: 1,
    title: "For You Meri Jaan ❤️",
    message:
      "Somehow you made ordinary days feel magical that never felt before you.",
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
      "Not every home is a place. Sometimes it’s just one person & that is always you.",
  },
];

const reasons = [
  "Your smile makes everything better ❤️",
  "You make ordinary moments special ✨",
  "You always support me 💛",
  "You understand me without words 🌙",
  "You are my safest place 🏡",
  "You make me want to be better every day 🌹",
];

const wishes = [
  "May Krishna bless you with endless happiness 🙏",
  "May every dream find its way to you ✨",
  "May your smile never fade ❤️",
  "May we create countless memories together 💕",
];

export default function LoveNotes() {
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [showFinal, setShowFinal] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-[#050505] text-white px-6 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl md:text-7xl mb-6"
          >
            A Few Things I Never Say Enough ❤️
          </motion.h1>

          <p className="text-center text-gray-400 mb-20">
            Because one birthday message is never enough...
          </p>

          {/* Reasons */}
          <div className="grid md:grid-cols-3 gap-6 mb-24">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                }}
                className="
                  p-6
                  rounded-3xl
                  bg-white/5
                  border
                  border-white/10
                  backdrop-blur-md
                "
              >
                {reason}
              </motion.div>
            ))}
          </div>

          {/* Photos */}
          <div className="mb-28">
            <h2 className="text-center text-3xl md:text-5xl mb-12">
              Our Favourite Memories 📸
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "/images/r.jpeg",
                "/images/rr.jpeg",
                "/images/rrr.jpeg",
                "/images/rrrrr.jpeg",
              ].map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.05,
                    rotate: 0,
                  }}
                  className={`
                    bg-white
                    p-3
                    pb-8
                    shadow-2xl
                    ${index % 2 ? "rotate-3" : "-rotate-3"}
                  `}
                >
                  <img src={img} alt="" className="w-full h-52 object-cover" />

                  <p className="text-black text-center mt-4">R 💖 R</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Wishes */}
          <div className="mb-32">
            <h2 className="text-center text-3xl md:text-5xl mb-12">
              Birthday Wishes ✨
            </h2>

            <div className="space-y-6">
              {wishes.map((wish, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="
                    text-center
                    text-lg
                    md:text-2xl
                    text-yellow-300
                  "
                >
                  {wish}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final Surprise Button */}
          <div className="flex justify-center mb-24">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setShowFinal(true);

                confetti({
                  particleCount: 500,
                  spread: 180,
                  origin: { y: 0.6 },
                });
              }}
              className="
                px-10
                py-5
                rounded-full
                bg-yellow-500
                text-black
                font-bold
                text-xl
                shadow-[0_0_40px_rgba(255,215,0,0.5)]
              "
            >
              🎁 One Last Surprise
            </motion.button>
          </div>
        </div>
      </div>

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

      {/* Notes Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="relative bg-[#f8ecd9] text-black max-w-xl w-full rounded-2xl p-10"
            >
              <button
                onClick={() => setSelectedNote(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <h2 className="text-4xl text-center text-yellow-700">
                {notes.find((n) => n.id === selectedNote)?.title}
              </h2>

              <p className="text-center mt-8 text-lg leading-8">
                {notes.find((n) => n.id === selectedNote)?.message}
              </p>

              <p className="text-right mt-10 text-2xl text-yellow-800">
                — Always Yours
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Modal */}
      <AnimatePresence>
        {showFinal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              fixed
              inset-0
              z-[200]
              bg-black/90
              backdrop-blur-xl
              flex
              items-center
              justify-center
              px-6
            "
          >
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-8xl text-yellow-400 mb-10">
                Happy Birthday ❤️
              </h1>

              <p className="text-xl md:text-3xl text-white mb-8">
                Thank you for being mine.
              </p>

              <p className="text-lg md:text-2xl text-gray-300">
                Forever & Always
              </p>

              <p className="mt-8 text-4xl text-yellow-400">R 💖 R</p>

              <button
                onClick={() => setShowFinal(false)}
                className="
                  mt-12
                  px-8
                  py-3
                  rounded-full
                  bg-white
                  text-black
                "
              >
                Close ❤️
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
