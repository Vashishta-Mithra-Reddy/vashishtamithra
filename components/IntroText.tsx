'use client';
import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 8, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const words1 = ["I'm", "VASHISHTA", "a", "product-focused", "Founding", "Engineer", "who", "loves", "building", "0-to-1", "AI", "applications."];
const words2 = "I have a proven track record of architecting and shipping production-ready MVPs for international startups, obsessing over performance, scalability, and clean system design.".split(' ');

export default function IntroText() {
  return (
    <div className="text-base sm:text-lg lg:text-xl text-foreground/80 font-bricolage leading-relaxed">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words1.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={wordVariants}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            {word === 'VASHISHTA' ? (
              <span className="text-foreground underline underline-offset-4 decoration-wavy decoration-blue-500">Vashishta</span>
            ) : word}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        className="mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {words2.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-[0.25em]"
            variants={wordVariants}
            transition={{ duration: 0.4, delay: 0.3 + i * 0.03, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}
