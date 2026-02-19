"use client";
import { motion } from "framer-motion";

export default function AnimatedHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ").map((word) => word + " ");
  
  return (
    <motion.h2
      className={`text-4xl font-bold mb-12 pt-12 text-left text-foreground/60 flex items-start justify-start font-satoshi px-8 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.8, delay: index * 0.2, type: "decay" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
