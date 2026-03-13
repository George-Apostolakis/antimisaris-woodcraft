'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = ['Όλα', 'Κουζίνες', 'Ντουλάπες', 'Πόρτες', 'Έπιπλα'];
const BASE = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a5f986e3dc6e59007cb5ea/';

const projects = [
  { id: 1,  title: 'Enea City Suites – Κουζίνα', category: 'Κουζίνες', image: BASE + '9f48734f2_enea_city_suites_kichen3-1024x683.png', description: 'Λευκή γυαλιστερή κουζίνα με μαρμάρινο πάγκο' },
  { id: 2,  title: 'Enea City Suites – Σαλόνι & Κουζίνα', category: 'Κουζίνες', image: BASE + 'e922d332d_4bc1c-0294.jpg', description: 'Ανοιχτός χώρος διαβίωσης με ενσωματωμένη κουζίνα' },
  { id: 3,  title: 'Enea City Suites – Living', category: 'Κουζίνες', image: BASE + 'a8659b458_5bb0a-2f2d0-0282.jpg', description: 'Κουζίνα ανοιχτού σχεδίου με λευκά πορτάκια' },
  { id: 4,  title: 'Compact Κουζίνα Beige', category: 'Κουζίνες', image: BASE + '76b228b0f_8db71-0156.jpg', description: 'Μικρή κουζίνα με beige γυαλιστερά πορτάκια' },
  { id: 5,  title: 'Κουζίνα Taupe Matte', category: 'Κουζίνες', image: BASE + '889ad7301_349448422_1750156158736419_115112091799008454_n.jpg', description: 'Κουζίνα σε taupe matte χρώμα' },
  { id: 6,  title: 'Λευκή Κουζίνα με Ξύλινο Πάγκο', category: 'Κουζίνες', image: BASE + '8f7b5c87d_1.jpg', description: 'Λευκή κουζίνα με πάγκο ξύλου δρυός' },
  { id: 7,  title: 'Κουζίνα Λευκή Γυαλιστερή', category: 'Κουζίνες', image: BASE + 'dedda894e_IMG_20230412_162655.jpg', description: 'Λευκά γυαλιστερά πορτάκια με ξύλινη ζώνη' },
  { id: 8,  title: 'Κουζίνα Γκρι-Λευκή', category: 'Κουζίνες', image: BASE + 'b2f3cd056_IMG_20230412_162748.jpg', description: 'Συνδυασμός λευκών και γκρι πορτακιών' },
  { id: 9,  title: 'Κουζίνα Matte Γκρι', category: 'Κουζίνες', image: BASE + '81d48bf38_IMG_20230412_162809.jpg', description: 'Κουζίνα matte γκρι με εντοιχισμένο φούρνο Bosch' },
  { id: 10, title: 'Κουζίνα Ξύλο Δρυς', category: 'Κουζίνες', image: BASE + '2a317b062_11.jpg', description: 'Κλασική κουζίνα με πορτάκια ξύλου δρυός' },
  { id: 11, title: 'Κουζίνα με Βιτρίνα', category: 'Κουζίνες', image: BASE + '103ea1ccf_thumb__144a4-unnamed--4-.jpg', description: 'Κουζίνα με γυάλινη βιτρίνα' },
  { id: 12, title: 'Κουζίνα Μπεζ Γυαλιστερή', category: 'Κουζίνες', image: BASE + 'c4980c7d8_thumb__b55fa-unnamed--3-.jpg', description: 'Μπεζ γυαλιστερά πορτάκια με μαρμάρινο splash back' },
  { id: 13, title: 'Κουζίνα με Island – Κρεμ', category: 'Κουζίνες', image: BASE + '779f03cce_thumb__d40c7-unnamed--2-.jpg', description: 'Κρεμ κουζίνα με ενσωματωμένο island' },
  { id: 14, title: 'Κουζίνα Taupe με Ξύλινο Splash back', category: 'Κουζίνες', image: BASE + '4be2208c0_thumb__de398-0349.jpg', description: 'Taupe κουζίνα με ξύλινο splash back' },
  { id: 15, title: 'Enea – Ντουλάπα Υπνοδωματίου', category: 'Ντουλάπες', image: BASE + '50405aeb5_bf80c-0300.jpg', description: 'Ενσωματωμένη ντουλάπα Enea City Suites' },
  { id: 16, title: 'Ντουλάπα Καρυδιά', category: 'Ντουλάπες', image: BASE + 'd3009d39a_IMG_20230421_133920.jpg', description: 'Εντοιχιζόμενη ντουλάπα από καπλαμά καρυδιάς' },
  { id: 17, title: 'Ντουλάπα Taupe με Ξύλινες Λαβές', category: 'Ντουλάπες', image: BASE + 'abb3f24cd_IMG_20220726_204849.jpg', description: 'Ντουλάπα σε taupe χρώμα' },
  { id: 18, title: 'Ντουλάπα με LED', category: 'Ντουλάπες', image: BASE + 'f5c99c8d2_IMG_20220726_204902.jpg', description: 'Ντουλάπα με ενσωματωμένο φωτισμό LED' },
  { id: 19, title: 'Ντουλάπα Εσωτερική Οργάνωση', category: 'Ντουλάπες', image: BASE + 'fda7b0563_IMG_20220726_204924.jpg', description: 'Εσωτερική οργάνωση ντουλάπας με συρτάρια' },
  { id: 20, title: 'Πόρτα Ξύλου Δρυς', category: 'Πόρτες', image: BASE + '54089a0f5_IMG_20201223_145311.jpg', description: 'Πόρτα από φυσικό ξύλο δρυός' },
  { id: 21, title: 'Πόρτα Enea – Ξύλο & Laminate', category: 'Πόρτες', image: BASE + '6b129d098_enea_city_suites_living2.png', description: 'Εσωτερική πόρτα laminate' },
  { id: 22, title: 'Enea – Σαλόνι & Έπιπλα', category: 'Έπιπλα', image: BASE + '6b129d098_enea_city_suites_living2.png', description: 'Ολοκληρωμένος σχεδιασμός σαλονιού' },
  { id: 23, title: 'Enea – Living Room 2', category: 'Έπιπλα', image: BASE + '76778419a_enea.jpg', description: 'Έπιπλα σαλονιού και τραπεζαρίας' },
  { id: 24, title: 'Έπιπλο Τηλεόρασης', category: 'Έπιπλα', image: BASE + '06d5c8e37_11.jpg', description: 'Custom έπιπλο τηλεόρασης' },
  { id: 25, title: 'Έπιπλο Μπάνιου', category: 'Έπιπλα', image: BASE + 'ad5c234d2_eneampanio.jpg', description: 'Custom έπιπλο μπάνιου με μαρμάρινο νεροχύτη' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Όλα');
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const filteredProjects = activeCategory === 'Όλα' ? projects : projects.filter(p => p.category === activeCategory);

  const openLightbox = (project) => { setSelectedProject(project); setLightboxOpen(true); };
  const navigateProject = (direction) => {
    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredProjects.length
      : (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setSelectedProject(filteredProjects[newIndex]);
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24">
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-4">Τα Έργα <span className="font-semibold">μας</span></h1>
            <p className="text-stone-400 text-lg mt-6 max-w-2xl mx-auto">Εξερευνήστε μερικά από τα πιο πρόσφατα έργα μας.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-stone-200 bg-white sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={`rounded-full px-6 ${activeCategory === category ? 'bg-amber-600 hover:bg-amber-700 text-white' : 'border-stone-300 text-stone-600 hover:bg-stone-100'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id} layout
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => openLightbox(project)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg"
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-amber-400 text-xs font-medium uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-white text-xl font-semibold mt-1">{project.title}</h3>
                    <p className="text-stone-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-stone-950 border-none overflow-hidden">
          {selectedProject && (
            <div className="relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto max-h-[80vh] object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-950 to-transparent">
                <span className="text-amber-400 text-sm font-medium uppercase tracking-wider">{selectedProject.category}</span>
                <h3 className="text-white text-2xl font-semibold mt-1">{selectedProject.title}</h3>
                <p className="text-stone-300 mt-2">{selectedProject.description}</p>
              </div>
              <button onClick={() => navigateProject('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button onClick={() => navigateProject('next')} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
