'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

const galleryImages = [
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/8f7b5c87d_1.jpg', title: 'Μοντέρνα Κουζίνα', category: 'Κουζίνες' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/d3009d39a_IMG_20230421_133920.jpg', title: 'Ντουλάπα Υπνοδωματίου', category: 'Ντουλάπες' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/06d5c8e37_11.jpg', title: 'Έπιπλο Τηλεόρασης', category: 'Έπιπλα' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/ecb025d40_IMG_20201223_145654.jpg', title: 'Κουζίνα με Ξύλινο Πάγκο', category: 'Κουζίνες' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/abb3f24cd_IMG_20220726_204849.jpg', title: 'Εντοιχιζόμενη Ντουλάπα', category: 'Ντουλάπες' },
  { src: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/21a9c6d2c_349448422_1750156158736419_115112091799008454_n.jpg', title: 'Κουζίνα Taupe', category: 'Κουζίνες' },
];

export default function GallerySection() {
  return (
    <section className="py-24 bg-stone-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-4">Τα Έργα <span className="font-semibold">μας</span></h2>
          </div>
          <Link href={createPageUrl('Portfolio')}>
            <Button variant="link" className="text-amber-400 hover:text-amber-300 p-0 text-lg mt-4 md:mt-0">
              Δείτε όλα τα έργα <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
              <img src={image.src} alt={image.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">{image.category}</span>
                <h3 className="text-white text-lg font-semibold mt-1">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
