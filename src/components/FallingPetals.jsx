import React, { useEffect, useState } from 'react';

export default function FallingPetals({ enabled = true }) {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    if (!enabled) {
      setPetals([]);
      return;
    }

    // Generate 18 distinct ambient petals with random initial offsets
    const items = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 10 + 12,
      delay: Math.random() * 8,
      rotation: Math.random() * 360,
      type: i % 3 === 0 ? 'gold' : 'rose',
    }));

    setPetals(items);
  }, [enabled]);

  if (!enabled || petals.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: '-40px',
            animation: `fallingPetal ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
          }}
        >
          {petal.type === 'gold' ? (
            /* Subtle Golden Sparkle Particle */
            <div
              className="rounded-full bg-gradient-to-tr from-gold-dark via-gold to-white opacity-60 blur-[0.5px]"
              style={{
                width: `${petal.size * 0.45}px`,
                height: `${petal.size * 0.45}px`,
                transform: `rotate(${petal.rotation}deg)`,
              }}
            />
          ) : (
            /* Delicate Velvet Rose Petal */
            <div
              className="opacity-55 shadow-sm"
              style={{
                width: `${petal.size}px`,
                height: `${petal.size * 1.3}px`,
                borderRadius: '60% 40% 60% 40%',
                background: 'radial-gradient(circle at 35% 35%, #FDA4AF 0%, #E11D48 60%, #4A1525 100%)',
                transform: `rotate(${petal.rotation}deg)`,
              }}
            />
          )}
        </div>
      ))}

      <style>{`
        @keyframes fallingPetal {
          0% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(105vh) translateX(60px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
