import { HIGHLIGHT_CARDS } from '../data/portfolioData';
import { BookOpen, Compass, Laptop, Sparkles } from 'lucide-react';

export default function About() {
  const cardIcons = [
    <BookOpen key="1" className="w-5 h-5 text-sky-600" />,
    <Laptop key="2" className="w-5 h-5 text-sky-600" />,
    <Compass key="3" className="w-5 h-5 text-sky-600" />,
  ];

  return (
    <section id="tentang-saya" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Profil & Latar Belakang</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Tentang Saya
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mt-3" />
        </div>

        {/* Narrative Box with Verbatim Content */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 shadow-xs hover:border-slate-300 transition-colors">
          <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
            <p>
              Halo! Saya Eka Yulita, mahasiswa semester 1 Program Studi Sistem Informasi di Universitas Komputama Cilacap. Saya tertarik mempelajari teknologi, pengolahan data, dan pemanfaatan teknologi untuk membantu menyelesaikan masalah sehari-hari.
            </p>
            <p>
              Saat ini saya sedang mengembangkan kemampuan dasar melalui pembelajaran di perkuliahan, latihan mandiri, dan pengerjaan proyek sederhana. Saya percaya bahwa kemampuan dapat berkembang melalui proses belajar dan pengalaman.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
              Program: S1 Sistem Informasi
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Kampus: UNIKMA Cilacap
            </span>
            <span aria-hidden="true" className="text-slate-300 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              Tahun Akademik: 2026
            </span>
          </div>
        </div>

        {/* 3 Information Cards as specified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHT_CARDS.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-sky-100/70 transition-all">
                  {cardIcons[idx]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-800 transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Unboxed metadata separator */}
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-sky-800 flex items-center justify-between">
                <span>{card.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
