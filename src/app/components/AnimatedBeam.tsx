import { motion } from "motion/react";

export function AnimatedBeam() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b blur-[40px] from-[rgba(255,255,255,0)] h-[865.333px] left-[calc(66.67%-53.81px)] mix-blend-plus-lighter to-[#1797ff] top-[-221.83px] via-[#ff6613] via-[80%] w-[48px]"
      animate={{
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

export function PulsingGlow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      animate={{
        opacity: [0.7, 1, 0.7],
        filter: ["blur(40px)", "blur(50px)", "blur(40px)"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}
