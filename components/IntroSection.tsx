"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function IntroSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

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

      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
    };

    slider.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollBySlide = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = window.innerWidth * 0.9;

    sliderRef.current.scrollTo({
      left:
        sliderRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050505] text-white">
      {/* Ambient Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-rose-500/10 blur-[140px] rounded-full" />

      {/* Header */}
      <div className="fixed top-6 left-6 z-50">
        <h1 className="text-5xl md:text-6xl tracking-wide font-cursive drop-shadow-lg">
          <span className="text-yellow-400">H</span>
          <span className="text-white">appy</span>{" "}
          <span className="text-yellow-400">B</span>
          <span className="text-white">irthday</span>
        </h1>

        <p className="text-sm text-gray-400 mt-2 tracking-[4px] uppercase">
          A Special Story
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scrollBySlide("left")}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-50 
        bg-white/10 backdrop-blur-md border border-white/10
        p-3 rounded-full hover:scale-110 transition duration-300"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scrollBySlide("right")}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-50 
        bg-white/10 backdrop-blur-md border border-white/10
        p-3 rounded-full hover:scale-110 transition duration-300"
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex overflow-x-scroll snap-x snap-mandatory no-scrollbar"
      >
        {/* Slide 1 */}
        <section className="min-w-full h-full flex items-center justify-center px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
            {/* Left Content */}
            <div>
              <p className="uppercase tracking-[6px] text-yellow-400 text-sm mb-4">
                Memory One
              </p>

              <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
                The Day <br />
                Everything <br />
                Felt Different
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Some people enter life quietly... and somehow become the loudest
                happiness.
              </p>
            </div>

            {/* Right Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-[40px]" />

              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200"
                alt="Memory"
                className="relative rounded-[40px] w-full h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* Slide 2 */}
        <section className="min-w-full h-full flex items-center justify-center px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
            <div>
              <p className="uppercase tracking-[6px] text-rose-400 text-sm mb-4">
                Memory Two
              </p>

              <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
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
                className="relative rounded-[40px] w-full h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </section>

        {/* Slide 3 */}
        <section className="min-w-full h-full flex items-center justify-center px-20">
          <div className="grid md:grid-cols-2 gap-16 items-center w-full max-w-7xl">
            <div>
              <p className="uppercase tracking-[6px] text-yellow-400 text-sm mb-4">
                Memory Three
              </p>

              <h2 className="text-5xl md:text-7xl leading-tight font-light mb-8">
                And Somehow <br />
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
                className="relative rounded-[40px] w-full h-[550px] object-cover 
                shadow-2xl border border-white/10
                group-hover:scale-[1.02] transition duration-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
