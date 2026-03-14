import { PortfolioClient } from '@/components/portfolio/PortfolioClient';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-stone-50">
      <section className="pt-40 pb-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Portfolio</span>
            <h1 className="text-4xl md:text-6xl font-light text-white mt-4">
              Τα Έργα <span className="font-semibold">μας</span>
            </h1>
            <p className="text-stone-400 text-lg mt-6 max-w-2xl mx-auto">
              Εξερευνήστε μερικά από τα πιο πρόσφατα έργα μας.
            </p>
          </div>
        </div>
      </section>

      <PortfolioClient />
    </div>
  );
}