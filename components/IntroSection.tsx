'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function IntroSection() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const handleWheel = (e: WheelEvent) => {
      if (slider) {
        e.preventDefault(); // stop page scroll
        slider.scrollLeft += e.deltaY; // scroll horizontally
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const scrollBySlide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth * 0.8;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-screen h-screen bg-rose-50 overflow-hidden">
      {/* Fixed Birthday Message */}
      <div className="fixed top-6 left-6 z-50 text-4xl font-cursive">
        🎉 <span className="text-yellow-500">H</span>
        <span className="text-black">appy</span>{' '}
        <span className="text-yellow-500">B</span>
        <span className="text-black">irthday</span> 🎉
      </div>

      {/* Left Arrow */}
      <button
        className="absolute top-1/2 left-4 z-50 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        onClick={() => scrollBySlide('left')}
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute top-1/2 right-4 z-50 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        onClick={() => scrollBySlide('right')}
      >
        <ChevronRight size={28} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="absolute inset-0 flex gap-10 overflow-x-scroll scroll-smooth snap-x snap-mandatory px-10 items-center justify-start"
        style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none' }}
      >
        {/* Slide 1 */}
        <div className="min-w-[80%] h-96 flex flex-col items-center justify-center snap-start">
          <h2 className="text-3xl font-cursive mb-4">A beautiful beginning 🌅</h2>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=600&q=80"
            alt="Memory 1"
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Slide 2 */}
        <div className="min-w-[80%] h-96 flex flex-col items-center justify-center snap-start">
          <h2 className="text-3xl font-cursive mb-4">Unforgettable laughs 😂</h2>
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=600&q=80"
            alt="Memory 2"
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Slide 3 */}
        <div className="min-w-[80%] h-96 flex flex-col items-center justify-center snap-start">
          <h2 className="text-3xl font-cursive mb-4">Moments to treasure ❤️</h2>
          <img
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?fit=crop&w=600&q=80"
            alt="Memory 3"
            className="w-[300px] h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
