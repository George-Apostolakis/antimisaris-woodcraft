'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPageUrl } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Αρχική', page: 'Home' },
  { name: 'Υπηρεσίες', page: 'Services' },
  { name: 'Έργα', page: 'Portfolio' },
  { name: 'Επικοινωνία', page: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (page) => pathname === createPageUrl(page);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href={createPageUrl('Home')} className="flex items-center gap-2">
          <div>
            <div className={`text-xl font-bold leading-tight transition-colors ${isScrolled ? 'text-stone-900' : 'text-white'}`}>Antimisaris</div>
            <div className="text-xs font-medium tracking-widest uppercase text-amber-500">Woodcraft</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.page}
              href={createPageUrl(link.page)}
              className={`text-sm font-medium transition-colors relative group ${
                isScrolled
                  ? isActive(link.page) ? 'text-amber-600' : 'text-stone-700 hover:text-amber-600'
                  : isActive(link.page) ? 'text-amber-400' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full ${isActive(link.page) ? 'w-full' : ''}`} />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+306955508228" className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? 'text-stone-600' : 'text-white/80'}`}>
            <Phone className="w-4 h-4" />6955 508 228
          </a>
          <Link href={createPageUrl('Contact')}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">Προσφορά</Button>
          </Link>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className={isScrolled ? 'text-stone-900' : 'text-white'}>
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-80 bg-stone-900 border-stone-800">
            <div className="flex flex-col h-full pt-8">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.page}
                    href={createPageUrl(link.page)}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-light transition-colors ${isActive(link.page) ? 'text-amber-500' : 'text-white hover:text-amber-400'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pb-8">
                <a href="tel:+306955508228" className="flex items-center gap-3 text-white/80 mb-4">
                  <Phone className="w-5 h-5" />6955 508 228
                </a>
                <Link href={createPageUrl('Contact')} onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full py-6">Ζητήστε Προσφορά</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
