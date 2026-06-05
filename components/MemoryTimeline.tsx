"use client";

import { motion } from "framer-motion";

type MemoryTimelineProps = {
  onContinue: () => void;
};

export default function MemoryTimeline({ onContinue }: MemoryTimelineProps) {
  const memories = [
    {
      year: "2022 ❤️",
      title: "The Beginning",
      text: "The day everything started to feel different.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    },
    {
      year: "2023 ✨",
      title: "Beautiful Memories",
      text: "A year full of smiles, laughs and unforgettable moments.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    },
    {
      year: "2024 💛",
      title: "My Favourite Human",
      text: "Somewhere along the way, you became my safe place.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    },
    {
      year: "2025 🎂",
      title: "Still Choosing You",
      text: "And if I had to do it all again, I would still choose you.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",
    },
  ];

  return (
    <div
      className="bg-[#050505] text-white py-24 px-6"
      style={{ minHeight: "300vh" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-5xl md:text-7xl mb-24"
        >
          Our Journey ✨
        </motion.h1>

        <div className="space-y-32">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.year}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`
                flex flex-col md:flex-row items-center gap-10
                ${index % 2 ? "md:flex-row-reverse" : ""}
              `}
            >
              <div className="flex-1">
                <p className="text-yellow-400 tracking-[4px] mb-4">
                  {memory.year}
                </p>

                <h2 className="text-4xl md:text-5xl mb-6">{memory.title}</h2>

                <p className="text-gray-400 text-lg leading-relaxed">
                  {memory.text}
                </p>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-[40px]" />

                  <img
                    src={memory.image}
                    alt={memory.title}
                    className="relative w-full h-[300px] md:h-[450px] object-cover rounded-[40px] border border-white/10"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-32 text-2xl text-yellow-400"
        >
          And this is only the beginning... ❤️
        </motion.p>

        <div className="flex justify-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContinue}
            className="
              px-8
              py-4
              rounded-full
              bg-yellow-500
              text-black
              font-semibold
              shadow-[0_0_30px_rgba(255,215,0,0.4)]
            "
          >
            Open Secret Notes 💌
          </motion.button>
        </div>
      </div>
    </div>
  );
}
