import { motion } from "motion/react";

export function AnimatedGradient({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        backgroundSize: "200% 200%"
      }}
    />
  );
}

export function GlowingLine() {
  return (
    <motion.div
      className="absolute h-[502px] left-[calc(16.67%+200px)] mix-blend-plus-lighter top-[459.42px] w-[1156.667px]"
      animate={{
        opacity: [0.6, 1, 0.6],
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}
