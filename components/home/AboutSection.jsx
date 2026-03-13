'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const features = ['Απόλυτη εξατομίκευση σε διαστάσεις', 'Επιλογή χρωμάτων και υλικών', 'Προσωπική εξυπηρέτηση', 'Εγγύηση ποιότητας'];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative z-10">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/0050a0669_enea1.jpg" alt="Enea City Suites" className="w-full h-96 object-cover rounded-2xl shadow-2xl" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 z-20">
              <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/9b2546042_b206a-0397.jpg" alt="Λεπτομέρεια" className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white" />
            </div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-600/10 rounded-full" />
            <div className="absolute -bottom-4 right-20 w-20 h-20 bg-stone-200 rounded-full" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Σχετικά με εμάς</span>
            <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-4 mb-6">
              Οικογενειακή Παράδοση<span className="block font-semibold">από το 2008</span>
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-6">
              Στο ξυλουργείο μας στο Ηράκλειο Κρήτης, δημιουργούμε κουζίνες, ντουλάπες και έπιπλα κομμένα και ραμμένα στα μέτρα σας. Με 35 χρόνια εμπειρίας.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Δίνουμε έμφαση στη λεπτομέρεια, την προσωπική εξυπηρέτηση και την αξιοπιστία, προσφέροντας μοναδικές custom λύσεις.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-stone-700">{feature}</span>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-stone-200">
              {[['35+', 'Χρόνια Εμπειρίας'], ['500+', 'Ολοκληρωμένα Έργα'], ['100%', 'Ικανοποίηση']].map(([num, label]) => (
                <div key={label}>
                  <div className="text-4xl font-bold text-amber-600">{num}</div>
                  <div className="text-stone-500 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
