"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";
import IntroSection from "@/components/IntroSection";
import Candle from "@/components/Candle";
import SmoothScroll from "@/components/SmoothScroll";
import AmbientParticles from "@/components/AmbientParticles";
import LoveNotes from "@/components/LoveNotes";

export default function BirthdayPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 1000,
        spread: 1200,
        origin: { y: 0.3 },
      });
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <AmbientParticles />
      <SmoothScroll />
      <IntroSection />
      <LoveNotes />
      {/* <Candle /> */}
    </main>
  );
}
