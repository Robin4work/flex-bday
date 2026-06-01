"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

type IntroSectionProps = {
  onOpenLetter: () => void;
};

export default function IntroSection({ onOpenLetter }: IntroSectionProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const [accepted, setAccepted] = useState(false);
  const [showNoButton, setShowNoButton] = useState(false);
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let currentScroll = slider.scrollLeft;
    let targetScroll = slider.scrollLeft;

    let animationFrame: number;

    const smoothScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.08;

      slider.scrollLeft = currentScroll;

      animationFrame = requestAnimationFrame(smoothScroll);
    };

    smoothScroll();

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      targetScroll += e.deltaY * 1.2;

      const maxScroll = slider.scrollWidth - slider.clientWidth;

      if (targetScroll < 0) targetScroll = 0;
      if (targetScroll > maxScroll) targetScroll = maxScroll;

      // Detect current slide
      const currentSlide = Math.round(targetScroll / window.innerWidth);

      // Slide indexes:
      // 0 = Slide 1
      // 1 = Slide 2
      // 2 = Slide 3
      // 3 = Slide 4

      if (currentSlide >= 3) {
        setShowNoButton(true);
      } else {
        setShowNoButton(false);
      }
    };
    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const moveButton = () => {
    const buttonWidth = 170;
    const buttonHeight = 70;

    const padding = 80;

    const maxX = window.innerWidth - buttonWidth - padding;
    const maxY = window.innerHeight - buttonHeight - padding;

    const randomX = Math.random() * maxX - window.innerWidth / 2;
    const randomY = Math.random() * maxY - window.innerHeight / 2;

    setPosition({
      x: randomX,
      y: randomY,
    });
  };
  return (
    <div
      className="
    relative
    w-screen
    h-screen
    overflow-hidden
    bg-[#050505]
    text-white
    scale-[0.78]
    md:scale-100
    origin-top-left
  "
    >
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-rose-500/10 blur-[140px] rounded-full" />

      {/* Header */}
      <div className="fixed top-4 left-4 md:top-6 md:left-6 z-50 flex items-center gap-2 md:gap-4">
        <div className="relative flex flex-col items-center justify-center mt-2">
          {/* Glow */}
          <div className="absolute -top-2 w-10 h-10 bg-yellow-400/20 blur-2xl rounded-full" />

          {/* Flame */}
          <div
            className="
      w-3 h-5
      bg-gradient-to-t from-yellow-500 via-yellow-300 to-white
      rounded-full
      animate-pulse
      rotate-[-8deg]
      shadow-[0_0_25px_rgba(255,215,0,0.7)]
      z-10
    "
          />

          {/* Wick */}
          <div className="w-[2px] h-2 bg-black/70 rounded-full -mt-1 z-0" />

          {/* Candle Body */}
          <div
            className="
      w-5 h-10
      rounded-md
      bg-gradient-to-b
      from-[#fff3c4]
      via-[#f4d87a]
      to-[#d6a93d]
      shadow-lg
      border border-yellow-200/30
      relative
      overflow-hidden
    "
          >
            {/* Candle Shine */}
            <div className="absolute left-1 top-1 w-[2px] h-6 bg-white/40 rounded-full" />
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-6xl tracking-wide font-cursive drop-shadow-lg">
            <span className="text-yellow-400">H</span>
            <span className="text-white">appy</span>{" "}
            <span className="text-yellow-400">B</span>
            <span className="text-white">irthday</span>
          </h1>

          <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 mt-1 md:mt-2 tracking-[2px] md:tracking-[4px] uppercase">
            A Little Journey Of Us ✨
          </p>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex overflow-x-scroll no-scrollbar"
      >
        {/* Slide 1 */}
        <section className="min-w-full h-full flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="uppercase tracking-[6px] text-yellow-400 text-sm mb-4">
                The Beginning
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl leading-tight font-light mb-8">
                The Day <br />
                Everything <br />
                Felt Different
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Some people enter life quietly... and somehow become the loudest
                happiness.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-[40px]" />

              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200"
                alt="Memory"
                className="relative rounded-[40px] w-full h-[260px] sm:h-[350px] md:h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </motion.div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="min-w-full h-full flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-7xl">
            <div>
              <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
                Memories
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl leading-tight font-light mb-8">
                Laughs <br />
                That Stayed <br />
                Forever
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                The kind of moments you replay in silence when life gets heavy.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-rose-400/20 blur-3xl rounded-[40px]" />

              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200"
                alt="Memory"
                className="relative rounded-[40px] w-full h-[260px] sm:h-[350px] md:h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* Slide 3 */}
        <section className="min-w-full h-full flex items-center justify-center px-6 md:px-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-7xl">
            <div>
              <p className="uppercase tracking-[6px] text-yellow-400 text-sm mb-4">
                Feelings
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl leading-tight font-light mb-8">
                Somehow <br />
                You Became <br />
                Home
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Not every home is a place. Sometimes it’s just a person.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-[40px]" />

              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
                alt="Memory"
                className="relative rounded-[40px] w-full h-[260px] sm:h-[350px] md:h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* Slide 4 - Impossible Choice */}
        <section className="min-w-full h-full flex items-center justify-center relative px-10">
          <div className="text-center relative z-10">
            <p className="uppercase tracking-[8px] text-yellow-400 text-sm mb-6">
              One Important Question 👀
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-7xl leading-tight text-white font-cursive">
              Will You Always <br />
              Be My Favorite <br />
              Human? 🙄
            </h2>

            <p className="text-gray-400 mt-6 text-lg">Choose wisely 😌</p>

            <div className="relative mt-16 flex items-center justify-center gap-8 h-[220px] overflow-hidden">
              {/* YES */}
              {!accepted ? (
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setAccepted(true);

                    confetti({
                      particleCount: 250,
                      spread: 140,
                      origin: { y: 0.6 },
                    });

                    setTimeout(() => {
                      onOpenLetter();
                    }, 1200);
                  }}
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
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <h3 className="text-5xl font-cursive text-yellow-400">
                    Good. Correct Answer 😌💛
                  </h3>

                  <p className="mt-6 text-gray-300 text-lg">
                    Relationship status successfully secured ✨
                  </p>

                  <p className="mt-3 text-sm tracking-[4px] uppercase text-gray-500">
                    Opening something special...
                  </p>
                </motion.div>
              )}

              {/* NO */}
              <motion.button
                animate={{
                  x: position.x,
                  y: position.y,
                }}
                initial={{
                  x: 0,
                  y: 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 450,
                  damping: 16,
                }}
                onMouseEnter={moveButton}
                className="
    fixed
    top-[55%],
    left-[55%]
    px-10 py-4
    rounded-full
    border border-white/20
    bg-white/10
    backdrop-blur-md
    text-white
    text-xl
    whitespace-nowrap
    z-50
  "
                hidden={!showNoButton || accepted}
              >
                No 🙈
              </motion.button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
