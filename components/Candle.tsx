'use client';

export default function Candle() {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center space-y-2">
      {/* Candle Stick */}
      <div className="w-2 h-24 bg-yellow-900 rounded-md shadow-md relative">
        {/* Flame */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-4 h-6 bg-yellow-400 rounded-full animate-flicker shadow-lg" />
      </div>
      <p className="mt-2 text-xs text-gray-600 font-cursive">Make a wish...</p>
    </div>
  );
}
