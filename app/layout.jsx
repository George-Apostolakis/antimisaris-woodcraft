import './globals.css';
import { Inter } from 'next/font/google';
import Providers from '@/providers/Providers';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: 'Antimisaris Woodcraft',
  description: 'Κουζίνες, ντουλάπες και έπιπλα κομμένα και ραμμένα στα μέτρα σας.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="el">
      <body className={`${inter.className} min-h-screen bg-stone-50`}>
        <Providers>
          <style>{`
            ::-webkit-scrollbar { width: 8px; }
            ::-webkit-scrollbar-track { background: #f5f5f4; }
            ::-webkit-scrollbar-thumb { background: #d6d3d1; border-radius: 4px; }
            ::-webkit-scrollbar-thumb:hover { background: #a8a29e; }
          `}</style>
          <Toaster position="top-center" richColors />
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
