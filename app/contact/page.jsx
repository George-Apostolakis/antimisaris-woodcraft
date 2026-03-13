'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
// import { base44 } from '@/api/base44Client'; // Uncomment when base44 client is configured

const serviceOptions = [
  { value: 'kitchen', label: 'Κουζίνα' },
  { value: 'wardrobe', label: 'Ντουλάπα' },
  { value: 'door', label: 'Πόρτα' },
  { value: 'furniture', label: 'Ειδική Κατασκευή' },
  { value: 'other', label: 'Άλλο' },
];

export default function Contact() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '',
    service_type: preselectedService, message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast.error('Παρακαλώ συμπληρώστε τα υποχρεωτικά πεδία');
      return;
    }
    setIsSubmitting(true);
    try {
      // await base44.entities.ContactRequest.create(formData);
      await new Promise(r => setTimeout(r, 1000)); // placeholder
      setIsSubmitted(true);
      toast.success('Το μήνυμά σας στάλθηκε επιτυχώς!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 pt-24">
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Επικοινωνία</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-4">Ας <span className="font-semibold">Συνεργαστούμε</span></h1>
            <p className="text-stone-400 text-lg mt-6 max-w-2xl mx-auto">Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση και σχεδιασμό.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-stone-900 mb-8">Στοιχεία Επικοινωνίας</h2>
              <div className="space-y-6">
                {[
                  { icon: Phone, title: 'Τηλέφωνο', content: <><a href="tel:+306955508228" className="text-stone-600 hover:text-amber-600 transition-colors block">6955 508 228</a><a href="tel:+306972842025" className="text-stone-600 hover:text-amber-600 transition-colors block">6972 842 025</a></> },
                  { icon: Mail, title: 'Email', content: <a href="mailto:antimisarisg@gmail.com" className="text-stone-600 hover:text-amber-600 transition-colors">antimisarisg@gmail.com</a> },
                  { icon: MapPin, title: 'Διεύθυνση', content: <p className="text-stone-600">Ηράκλειο Κρήτης</p> },
                  { icon: Clock, title: 'Ωράριο', content: <p className="text-stone-600">Δευ-Παρ: 08:00-17:00<br />Σάβ: 09:00-14:00</p> },
                ].map(({ icon: Icon, title, content }) => (
                  <div key={title} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div><h3 className="font-semibold text-stone-900">{title}</h3>{content}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-3">Ευχαριστούμε!</h3>
                    <p className="text-stone-600 max-w-md mx-auto">Λάβαμε το μήνυμά σας και θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                    <Button onClick={() => setIsSubmitted(false)} className="mt-8 bg-amber-600 hover:bg-amber-700 rounded-full">Στείλτε νέο μήνυμα</Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-stone-900 mb-2">Φόρμα Επικοινωνίας</h2>
                    <p className="text-stone-500 mb-8">Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα μαζί σας</p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-stone-700">Ονοματεπώνυμο *</Label>
                          <Input id="name" value={formData.name} onChange={e => handleChange('name', e.target.value)} placeholder="Το όνομά σας" className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-stone-700">Τηλέφωνο *</Label>
                          <Input id="phone" value={formData.phone} onChange={e => handleChange('phone', e.target.value)} placeholder="Το τηλέφωνό σας" className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-stone-700">Email</Label>
                          <Input id="email" type="email" value={formData.email} onChange={e => handleChange('email', e.target.value)} placeholder="Το email σας" className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-stone-700">Τύπος Υπηρεσίας</Label>
                          <Select value={formData.service_type} onValueChange={value => handleChange('service_type', value)}>
                            <SelectTrigger className="h-12 border-stone-200 focus:border-amber-500 focus:ring-amber-500"><SelectValue placeholder="Επιλέξτε υπηρεσία" /></SelectTrigger>
                            <SelectContent>
                              {serviceOptions.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-stone-700">Μήνυμα *</Label>
                        <Textarea id="message" value={formData.message} onChange={e => handleChange('message', e.target.value)} placeholder="Περιγράψτε το project σας..." rows={5} className="border-stone-200 focus:border-amber-500 focus:ring-amber-500 resize-none" />
                      </div>
                      <Button type="submit" disabled={isSubmitting} className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-lg rounded-full group">
                        {isSubmitting
                          ? <div className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Αποστολή...</div>
                          : <div className="flex items-center gap-2"><Send className="w-5 h-5" />Αποστολή Μηνύματος</div>
                        }
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-stone-200">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102578.89432814085!2d25.078982642578133!3d35.33864899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5993dde6e78d%3A0x400bd2ce2b9f380!2z0JfRgNCw0LrQu9C40L7QvSwg0JPRgNC10YbQuNGP!5e0!3m2!1sru!2sgr!4v1699456789012!5m2!1sel!2sgr"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Χάρτης" />
      </section>
    </div>
  );
}
