'use client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold text-pink-600">
        🎉 Happy Birthday John! 🎉
      </h1>

      <p className="mt-4 text-lg text-gray-700 max-w-md">
        “You’re not getting older, you’re leveling up.” 🎮
      </p>

      <button
        className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition"
        onClick={() => {
          window.location.href = "/bday";
        }}
      >
        See The Surprise 🎁
      </button>
    </main>
  );
}
