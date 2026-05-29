"use client";

export default function AmbientParticles() {
  const particles = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}
