"use client";

export default function Candle() {
  return (
    <div className="absolute bottom-10 right-10 z-40 flex flex-col items-center">
      {/* Glow Behind Flame */}
      <div className="absolute -top-10 w-20 h-20 bg-yellow-400/20 blur-3xl rounded-full" />

      {/* Flame */}
      <div className="relative z-10">
        <div className="w-5 h-10 bg-gradient-to-t from-yellow-500 via-yellow-300 to-white rounded-full animate-pulse rotate-[-8deg]" />
      </div>

      {/* Wick */}
      <div className="w-[2px] h-4 bg-black" />

      {/* Candle Body */}
      <div
        className="
          w-16 h-44 rounded-2xl
          bg-gradient-to-b from-[#ffe08a] to-[#d89b00]
          shadow-[0_0_40px_rgba(255,215,0,0.25)]
          border border-yellow-200/20
          relative overflow-hidden
        "
      >
        {/* Shine */}
        <div className="absolute left-2 top-0 w-3 h-full bg-white/20 blur-sm" />
      </div>

      {/* Text */}
      <p className="mt-4 text-xs tracking-[4px] uppercase text-gray-500">
        Make A Wish ✨
      </p>
    </div>
  );
}
