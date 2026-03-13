'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-amber-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-700 rounded-full translate-x-1/3 translate-y-1/3 opacity-30" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">Έχετε ένα project στο μυαλό σας;</h2>
          <p className="text-amber-100 text-lg max-w-2xl mx-auto mb-10">
            Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και σχεδιασμό. Θα χαρούμε να συζητήσουμε τις ιδέες σας.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href={createPageUrl('Contact')}>
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-lg rounded-full group">
                Ζητήστε Προσφορά <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+306955508228">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                <Phone className="mr-2 w-5 h-5" />6955 508 228
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-amber-100">
            <MapPin className="w-5 h-5" /><span>Ηράκλειο Κρήτης</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
