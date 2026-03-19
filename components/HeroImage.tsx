'use client';
import { motion } from 'framer-motion';

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      style={{ opacity: 0 }}
      className="w-full overflow-hidden"
    >
      <img
        src="/sea_stamp.webp"
        alt="Sea stamp hero"
        className="w-full h-auto object-cover"
        loading="eager"
      />
    </motion.div>
  );
}
