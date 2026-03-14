'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/7ee7d4d45_eneareception.jpg"
          alt="Antimisaris Woodcraft"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block px-4 py-2 bg-amber-700/20 border border-amber-600/30 rounded-full text-amber-400 text-sm font-medium mb-6">
              35 χρόνια εμπειρίας
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
            Δημιουργούμε
            <span className="block font-semibold text-amber-400">Μοναδικά Έπιπλα</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-xl">
            Κουζίνες, ντουλάπες και έπιπλα κομμένα και ραμμένα στα μέτρα σας. Με μεράκι, συνέπεια και σεβασμό στις ανάγκες κάθε οικογένειας.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4">
            <Link href={createPageUrl('Contact')}>
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-full group">
                Ζητήστε Προσφορά
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+306955508228">
              <Button size="lg" variant="outline" className="border-white/30 text-black hover:bg-white/10 px-8 py-6 text-lg rounded-full hover:text-white">
                <Phone className="mr-2 w-5 h-5" />6955 508 228
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-amber-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
