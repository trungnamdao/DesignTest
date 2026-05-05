import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function MouseFollowGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 rounded-full mix-blend-screen"
      style={{
        width: '400px',
        height: '400px',
        left: mousePosition.x - 200,
        top: mousePosition.y - 200,
        background: 'radial-gradient(circle, rgba(255, 102, 19, 0.15) 0%, rgba(23, 151, 255, 0.1) 50%, transparent 70%)',
        filter: 'blur(40px)',
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.3 }}
    />
  );
}
