import Link from 'next/link';
import { createPageUrl } from '@/lib/utils';
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold text-white leading-tight">Antimisaris</div>
              <div className="text-sm font-semibold tracking-widest uppercase text-amber-500">Woodcraft</div>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Δημιουργούμε εξατομικευμένες κουζίνες, ντουλάπες και έπιπλα υψηλής ποιότητας από το 2008.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Σύνδεσμοι</h4>
            <ul className="space-y-3">
              {[['Home', 'Αρχική'], ['Services', 'Υπηρεσίες'], ['Portfolio', 'Έργα'], ['Contact', 'Επικοινωνία']].map(([page, label]) => (
                <li key={page}>
                  <Link href={createPageUrl(page)} className="text-stone-400 hover:text-amber-500 transition-colors text-sm">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {['Κουζίνες', 'Ντουλάπες', 'Πόρτες', 'Ειδικές Κατασκευές'].map(s => (
                <li key={s} className="text-stone-400 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-500" />
                <div className="flex flex-col">
                  <a href="tel:+306955508228" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">6955 508 228</a>
                  <a href="tel:+306972842025" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">6972 842 025</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-500" />
                <a href="mailto:antimisarisg@gmail.com" className="text-stone-400 hover:text-amber-500 transition-colors text-sm">antimisarisg@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5" />
                <span className="text-stone-400 text-sm">Ηράκλειο Κρήτης</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5" />
                <span className="text-stone-400 text-sm">Δευ-Παρ: 08:00-17:00<br />Σάβ: 09:00-14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">© 2024 Antimisaris Woodcraft. Όλα τα δικαιώματα διατηρούνται.</p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/antimisaris_woodcraft/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-amber-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
