import { motion } from "motion/react";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export function GlowButton({ children, onClick }: GlowButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="content-stretch drop-shadow-[-45.333px_46.667px_9.333px_rgba(143,143,143,0),-29.333px_29.333px_8.667px_rgba(143,143,143,0.01),-16px_17.333px_7.333px_rgba(143,143,143,0.05),-6.667px_8px_5.333px_rgba(143,143,143,0.09),-1.333px_1.333px_2.667px_rgba(143,143,143,0.1)] flex items-center justify-center px-[32px] py-[21.333px] relative rounded-[85.333px] shrink-0 cursor-pointer"
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        aria-hidden="true"
        className="absolute bg-[#8b8989] inset-0 mix-blend-plus-lighter pointer-events-none rounded-[85.333px]"
        whileHover={{
          backgroundColor: "#ff6613",
          boxShadow: "0 0 30px rgba(255, 102, 19, 0.6), 0 0 60px rgba(255, 102, 19, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        whileHover={{
          textShadow: "0 0 10px rgba(255, 102, 19, 0.8)"
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}
