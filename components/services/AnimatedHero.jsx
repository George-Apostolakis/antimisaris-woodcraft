'use client';
import { motion } from 'framer-motion';

export function AnimatedHero({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}

export function AnimatedServiceCard({ children, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-24 last:mb-0 scroll-mt-32"
    >
      {children}
    </motion.div>
  );
}