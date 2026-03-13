'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

const BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/';

const services = [
  { id: 'kitchen', title: 'Κουζίνες', description: 'Σχεδιασμός και κατασκευή κουζινών που συνδυάζουν λειτουργικότητα με αισθητική αρτιότητα.', image: BASE + '9f48734f2_enea_city_suites_kichen3-1024x683.png' },
  { id: 'wardrobe', title: 'Ντουλάπες', description: 'Εντοιχιζόμενες και συρόμενες ντουλάπες προσαρμοσμένες στον χώρο σας.', image: BASE + 'd509095c0_IMG_20201223_145239.jpg' },
  { id: 'door', title: 'Πόρτες', description: 'Εσωτερικές πόρτες υψηλής ποιότητας σε κλασικά και μοντέρνα σχέδια.', image: BASE + '54089a0f5_IMG_20201223_145311.jpg' },
  { id: 'furniture', title: 'Ειδικές Κατασκευές', description: 'Έπιπλα και κατασκευές σχεδιασμένα αποκλειστικά για εσάς.', image: BASE + '6b129d098_enea_city_suites_living2.png' },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Οι Υπηρεσίες μας</span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-4">
            Εξειδικευμένες <span className="font-semibold">Κατασκευές</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
              <Link href={`${createPageUrl('Services')}?type=${service.id}`}>
                <div className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/40 to-transparent" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                        <p className="text-stone-300 text-sm max-w-xs">{service.description}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
