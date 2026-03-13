'use client';

import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';

const services = [
  {
    id: 'kitchen',
    title: 'Κουζίνες',
    subtitle: 'Ο χώρος που ζωντανεύει το σπίτι σας',
    description: 'Σχεδιάζουμε και κατασκευάζουμε κουζίνες που συνδυάζουν τη λειτουργικότητα με την αισθητική. Κάθε κουζίνα είναι μοναδική, προσαρμοσμένη στις ανάγκες και τον χώρο σας.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/9f48734f2_enea_city_suites_kichen3-1024x683.png',
    features: [
      'Μελέτη και σχεδιασμός δωρεάν', 'Premium υλικά και μηχανισμοί',
      'Απόλυτη εξατομίκευση διαστάσεων', 'Επιλογή από εκατοντάδες χρώματα',
      'Laminate & lacquer φινιρίσματα', 'Soft-close μηχανισμοί',
    ],
  },
  {
    id: 'wardrobe',
    title: 'Ντουλάπες',
    subtitle: 'Οργάνωση και στυλ σε κάθε χώρο',
    description: 'Εντοιχιζόμενες και συρόμενες ντουλάπες που αξιοποιούν κάθε εκατοστό του χώρου σας. Εσωτερική οργάνωση σχεδιασμένη για τις δικές σας ανάγκες.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/d509095c0_IMG_20201223_145239.jpg',
    features: [
      'Εντοιχιζόμενες λύσεις', 'Συρόμενα ή ανοιγόμενα φύλλα',
      'Καθρέπτες και φωτισμός LED', 'Ειδική εσωτερική διαρρύθμιση',
      'Ποικιλία υλικών και χρωμάτων', 'Soft-close μηχανισμοί',
    ],
  },
  {
    id: 'door',
    title: 'Πόρτες',
    subtitle: 'Ασφάλεια και στυλ σε κάθε είσοδο',
    description: 'Θωρακισμένες και laminate πόρτες υψηλής ποιότητας σε κλασικά και μοντέρνα σχέδια.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/54089a0f5_IMG_20201223_145311.jpg',
    features: [
      'Θωρακισμένες πόρτες ασφαλείας', 'Laminate επιφάνειες',
      'Μασίφ ξύλο ή MDF', 'Κρυφές ή εμφανείς κάσες',
      'Συρόμενες λύσεις', 'Ηχομόνωση',
    ],
  },
  {
    id: 'furniture',
    title: 'Ειδικές Κατασκευές',
    subtitle: 'Η φαντασία σας γίνεται πραγματικότητα',
    description: 'Έπιπλα σχεδιασμένα αποκλειστικά για εσάς. Από γραφεία και βιβλιοθήκες μέχρι επαγγελματικούς χώρους.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/6b129d098_enea_city_suites_living2.png',
    features: [
      'Γραφεία και workstations', 'Βιβλιοθήκες και ραφιέρες',
      'Έπιπλα τηλεόρασης', 'Επαγγελματικοί εξοπλισμοί',
      'Ξύλινες επενδύσεις', 'Έπιπλα μπάνιου',
    ],
  },
];

export default function Services() {
  const searchParams = useSearchParams();
  const activeType = searchParams.get('type');

  return (
    <div className="min-h-screen bg-stone-50 pt-24">
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Οι Υπηρεσίες μας</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-4">
              Εξειδικευμένες <span className="font-semibold">Κατασκευές</span>
            </h1>
            <p className="text-stone-400 text-lg mt-6 max-w-2xl mx-auto">
              Με 35 χρόνια εμπειρίας, προσφέρουμε ολοκληρωμένες λύσεις για κάθε χώρο.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`mb-24 last:mb-0 ${activeType === service.id ? 'scroll-mt-32' : ''}`}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl" />
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-600/10 rounded-2xl -z-10" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">{service.subtitle}</span>
                  <h2 className="text-4xl font-bold text-stone-900 mt-2 mb-4">{service.title}</h2>
                  <p className="text-stone-600 text-lg leading-relaxed mb-8">{service.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span className="text-stone-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`${createPageUrl('Contact')}?service=${service.id}`}>
                    <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg group">
                      Ζητήστε Προσφορά
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
