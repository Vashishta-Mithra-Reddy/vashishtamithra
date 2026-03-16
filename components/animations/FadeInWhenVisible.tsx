// components/FadeInWhenVisible.tsx
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeInWhenVisible({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1, });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: 'easeInOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 30,
        scale: 0.95,
        transition: { duration: 0.5, ease: 'easeInOut' },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}
