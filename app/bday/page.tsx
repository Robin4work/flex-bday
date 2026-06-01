"use client";

import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import IntroSection from "@/components/IntroSection";
import Candle from "@/components/Candle";
import SmoothScroll from "@/components/SmoothScroll";
import AmbientParticles from "@/components/AmbientParticles";
import LoveNotes from "@/components/LoveNotes";
import LoveLetter from "@/components/LoveLetter";

export default function BirthdayPage() {
  const [showLetter, setShowLetter] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

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

      {!showLetter ? (
        <>
          <SmoothScroll />
          <IntroSection onOpenLetter={() => setShowLetter(true)} />
          {/* <Candle /> */}
        </>
      ) : !showNotes ? (
        <LoveLetter onContinue={() => setShowNotes(true)} />
      ) : (
        <LoveNotes />
      )}
    </main>
  );
}
