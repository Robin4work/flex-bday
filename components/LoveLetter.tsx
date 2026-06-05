"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoveLetterProps = {
  onContinue: () => void;
};

export default function LoveLetter({ onContinue }: LoveLetterProps) {
  const [opened, setOpened] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const letterText = `
Thank you for being the calm in my chaos, the smile behind my happiest memories, and the person who somehow makes every ordinary day feel magical.

Your laughter is still my favourite sound. Your happiness is still my favourite goal. And your presence is still my favourite place.

On your birthday, I just want you to know that you are loved more deeply than words can ever fully explain.Be happy always my love may God Krishna bless us with lot of happiness and good health. May your all dreams comes true at right time. I am so grateful to have you in my life, and I look forward to creating many more beautiful memories together. "R💖R"
`;

  useEffect(() => {
    if (!showLetter) return;

    let index = 0;

    const interval = setInterval(() => {
      setTypedText(letterText.slice(0, index));
      index++;

      if (index > letterText.length) {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [showLetter]);

  const [typedText, setTypedText] = useState("");

  const handleOpen = () => {
    if (opened) return;

    setOpened(true);

    setTimeout(() => {
      setShowLetter(true);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="fixed inset-0 bg-[#050505] flex items-center justify-center overflow-hidden z-[999]"
    >
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[450px] h-[450px] bg-yellow-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[450px] h-[450px] bg-rose-500/10 blur-[140px] rounded-full" />

      <AnimatePresence mode="wait">
        {!showLetter ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="uppercase tracking-[6px] text-yellow-400 text-sm mb-8"
            >
              A letter has been waiting for you ✨
            </motion.p>

            {/* Envelope */}
            <motion.div
              onClick={handleOpen}
              whileHover={{ scale: 1.04 }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative cursor-pointer"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-3xl" />

              {/* Body */}
              <div className="relative w-[420px] h-[260px] bg-gradient-to-b from-[#f8e7b8] to-[#d8b46a] rounded-xl shadow-2xl overflow-hidden">
                {/* Flap */}
                <motion.div
                  animate={
                    opened
                      ? {
                          rotateX: -180,
                        }
                      : {}
                  }
                  transition={{
                    duration: 0.8,
                  }}
                  style={{
                    transformOrigin: "top",
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[150px]
                    bg-gradient-to-b
                    from-[#f3d890]
                    to-[#caa04b]
                    clip-path-triangle
                    z-20
                  "
                />

                {/* Envelope Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 border-[20px] border-black" />
                </div>

                {/* Seal */}
                <motion.div
                  animate={
                    opened
                      ? {
                          scale: 0,
                          opacity: 0,
                        }
                      : {}
                  }
                  className="
                    absolute
                    left-1/2
                    top-[90px]
                    -translate-x-1/2
                    w-14
                    h-14
                    rounded-full
                    bg-yellow-600
                    flex
                    items-center
                    justify-center
                    text-white
                    font-bold
                    z-30
                  "
                >
                  ❤️
                </motion.div>
              </div>
            </motion.div>

            <p className="mt-8 text-gray-400">Open it when you're ready 💌</p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{
              opacity: 0,
              y: 120,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="relative max-w-4xl px-10"
          >
            <div className="absolute inset-0 bg-yellow-400/10 blur-3xl rounded-[40px]" />

            <div
              className="
                relative
                bg-[#f7ecd1]
                text-[#2b2b2b]
                rounded-[32px]
                p-16
                shadow-[0_0_60px_rgba(255,215,0,0.15)]
                border
                border-yellow-700/20
              "
            >
              <p className="uppercase tracking-[6px] text-yellow-700 text-sm mb-6">
                A Letter For My Love 💖
              </p>

              <h2 className="text-6xl mb-10 font-serif">My Dear Love,</h2>

              <div
                className="
    text-lg
    leading-relaxed
    whitespace-pre-line
    h-[320px]
    overflow-y-auto
    pr-2
  "
              >
                {typedText}
              </div>

              <div className="mt-14">
                <p className="text-2xl">❤️ Happy Birthday Baby ❤️</p>

                <p className="mt-8 text-lg">Forever yours,</p>

                <p className="text-3xl font-serif mt-2">Robin</p>

                {typedText.length === letterText.length && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onContinue}
                    className="
    mt-12
    px-8
    py-4
    rounded-full
    bg-yellow-500
    text-black
    font-semibold
    shadow-[0_0_30px_rgba(255,215,0,0.4)]
  "
                  >
                    Continue The Journey ✨
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
