import { useEffect, useState } from 'react';

const LETTERS = ['A', 'M', 'V', 'I'];
const LETTER_DURATION_MS = 1200; // Increased for a more "stately" feel
const STAGGER_MS = 100;
const HOLD_AFTER_LETTERS_MS = 1000;
const EXIT_DURATION_MS = 1200;

export default function CinematicLoader({ children, onComplete }) {
  const [phase, setPhase] = useState('letters');

  useEffect(() => {
    const totalLettersTime = LETTER_DURATION_MS + (LETTERS.length - 1) * STAGGER_MS;
    const startExitAt = totalLettersTime + HOLD_AFTER_LETTERS_MS;
    const doneAt = startExitAt + EXIT_DURATION_MS;

    const t1 = setTimeout(() => setPhase('exit'), startExitAt);
    const t2 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, doneAt);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (phase === 'done') return children;

  return (
    <>
      <div
        className={`fixed inset-0 z-[500] flex items-center justify-center transition-all duration-[1200ms] cubic-bezier(0.7, 0, 0.3, 1) ${
          phase === 'exit' ? 'opacity-0 scale-105 blur-xl' : 'opacity-100 scale-100 blur-0'
        }`}
        style={{ backgroundColor: '#091F15' }}
      >
        {/* Ambient Radial Gradient - Creates a "premium spotlight" effect */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at center, #C5A059 0%, transparent 70%)',
            filter: 'blur(120px)'
          }}
        />

        <div className={`relative flex items-center justify-center transition-all duration-[2000ms] ease-out ${
          phase === 'exit' ? 'gap-12 md:gap-20' : 'gap-4 md:gap-8'
        }`}>
          {LETTERS.map((letter, i) => (
            <div key={i} className="relative overflow-hidden py-4">
              <span
                className="block font-serif font-extralight text-white text-7xl md:text-9xl tracking-tighter"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  animation: `luxuryReveal ${LETTER_DURATION_MS}ms cubic-bezier(0.215, 0.61, 0.355, 1) forwards`,
                  animationDelay: `${i * STAGGER_MS}ms`,
                  transform: 'translateY(110%) skewY(10deg)',
                  opacity: 0,
                  filter: 'blur(10px)'
                }}
              >
                {letter}
              </span>
            </div>
          ))}
        </div>

        {/* Minimalist Progress Line at the very bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5">
          <div 
            className="h-full bg-[#C5A059] transition-all duration-[3000ms] ease-in-out"
            style={{ width: phase === 'exit' ? '100%' : '0%' }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes luxuryReveal {
          0% {
            transform: translateY(110%) skewY(10deg);
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            transform: translateY(0) skewY(0deg);
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>

      {/* Background pre-load of site content */}
      <div className={phase === 'exit' ? 'block' : 'hidden'}>
        {children}
      </div>
    </>
  );
}