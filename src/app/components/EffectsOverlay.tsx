import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function EffectsOverlay() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Pulsing beam effects */}
      <motion.div
        className="fixed pointer-events-none z-10"
        style={{
          width: '48px',
          height: '100vh',
          left: 'calc(66.67% - 53.81px)',
          top: 0,
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, #ff6613 80%, #1797ff 100%)',
          mixBlendMode: 'plus-lighter',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? '#ff6613' : '#1797ff',
            filter: 'blur(1px)',
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Gradient overlay that responds to scroll */}
      <motion.div
        className="fixed pointer-events-none inset-0 z-5"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255,102,19,0.1) 0%, transparent 50%)',
          opacity: Math.min(scrollY / 1000, 0.3),
        }}
      />
    </>
  );
}
