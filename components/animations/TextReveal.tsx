'use client';
import { motion } from 'framer-motion';

export default function TextReveal({
  children,
  text,
  className = "",
  delay = 0,
  stagger = 0.03,
  inline = false,
}: {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inline?: boolean;
}) {
  // Word-by-word mode for plain strings
  if (text) {
    const words = text.split(' ');
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={{
              hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
              visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
            }}
            transition={{
              duration: 0.4,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  }

  // Block mode for JSX children
  const Tag = inline ? motion.span : motion.div;
  return (
    <Tag
      className={className}
      style={inline ? { display: 'inline-block' } : undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Tag>
  );
}
