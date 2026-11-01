import { ArrowDown, Mail, GraduationCap, Quote } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="beranda"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden scroll-mt-20"
    >
      {/* Subtle modern digital background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Ambient radial glows in deep navy & cyan */}
      <div
        className="absolute -top-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide text-sky-400 mb-4 bg-sky-950/40 border border-sky-800/40 px-3.5 py-1.5 rounded-full">
              <span>Information Systems Student</span>
              <span aria-hidden="true" className="text-sky-600">·</span>
              <span>Semester 1</span>
              <span aria-hidden="true" className="text-sky-600">·</span>
              <span>UNIKMA Cilacap</span>
            </div>

            {/* Display Headline */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.15]"
              style={{ textWrap: 'balance' }}
            >
              Halo, saya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-200 to-blue-200">
                Eka Yulita
              </span>
            </h1>

            {/* Subheadline verbatim from prompt */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-4 max-w-2xl">
              Mahasiswa Sistem Informasi yang sedang belajar, berkembang, dan mengeksplorasi dunia teknologi digital.
            </p>

            {/* Personal Motto from Official Photo */}
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-sky-300 italic mb-6 bg-slate-900/60 border border-sky-500/20 px-3.5 py-2 rounded-xl">
              <Quote className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>"{PERSONAL_INFO.motto}"</span>
            </div>

            {/* University context strip */}
            <div className="flex items-center gap-3 py-2.5 px-4 bg-slate-800/70 border border-slate-700/60 rounded-xl mb-8 max-w-xl text-xs sm:text-sm text-slate-200">
              <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Universitas Komputama (UNIKMA) Cilacap · Angkatan 2026</span>
            </div>

            {/* 2 CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => onNavigate('proyek')}
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-xl shadow-lg shadow-sky-950/40 transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer hover:shadow-sky-400/20"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('kontak')}
                className="px-6 py-3.5 text-sm font-medium text-slate-200 bg-slate-800/90 hover:bg-slate-800 hover:text-white active:bg-slate-700 border border-slate-700 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>Hubungi Saya</span>
              </button>
            </div>
          </div>

          {/* Right Column: Permanent Official Photo Container */}
          <div className="md:col-span-5 flex flex-col items-center justify-center w-full mt-6 md:mt-0">
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/30 via-blue-600/20 to-indigo-500/30 rounded-3xl blur-md" />

              {/* Main Photo Card */}
              <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl p-3 sm:p-4 shadow-2xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/60 group shadow-inner">
                  <img
                    src={PERSONAL_INFO.avatarImage}
                    alt="Foto Resmi Eka Yulita - Mahasiswa Sistem Informasi UNIKMA Cilacap"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-103"
                  />

                  {/* Corner status watermark */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-md">
                    <span className="font-semibold text-white">Eka Yulita</span>
                    <span className="text-sky-300 font-medium">Semester 1</span>
                  </div>
                </div>

                {/* Permanent profile badge */}
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-1">
                  <span className="text-[11px] font-medium text-sky-400">
                    S1 Sistem Informasi
                  </span>
                  <span className="text-[11px] text-slate-400">
                    UNIKMA Cilacap
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
