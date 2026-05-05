import { motion } from "motion/react";
import { ReactNode } from "react";

interface HoverCardProps {
  children: ReactNode;
  className?: string;
}

export function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ scale: 1, y: 0 }}
    >
      <motion.div
        whileHover={{
          boxShadow: "0 20px 40px rgba(255, 102, 19, 0.3), 0 10px 20px rgba(23, 151, 255, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
