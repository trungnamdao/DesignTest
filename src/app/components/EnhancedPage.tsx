import { motion } from "motion/react";
import { ReactNode } from "react";
import { MouseFollowGlow } from "./MouseFollowGlow";
import { useSmoothScroll } from "./SmoothScroll";
import { EffectsOverlay } from "./EffectsOverlay";

interface EnhancedPageProps {
  children: ReactNode;
}

export function EnhancedPage({ children }: EnhancedPageProps) {
  useSmoothScroll();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative"
    >
      <MouseFollowGlow />
      <EffectsOverlay />
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
