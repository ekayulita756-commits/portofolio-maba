import React, { useState, useRef } from 'react';
import { ArrowDown, Mail, GraduationCap, Upload, RotateCcw, Check, Sparkles, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [profileImg, setProfileImg] = useState<string>(PERSONAL_INFO.avatarImage);
  const [isCustomPhoto, setIsCustomPhoto] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setProfileImg(event.target.result as string);
          setIsCustomPhoto(true);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    setProfileImg(PERSONAL_INFO.avatarImage);
    setIsCustomPhoto(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold tracking-wide text-sky-400 mb-4 bg-sky-950/40 border border-sky-800/40 px-3 py-1.5 rounded-full">
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
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-6 max-w-2xl">
              Mahasiswa Sistem Informasi yang sedang belajar, berkembang, dan mengeksplorasi dunia teknologi digital.
            </p>

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

          {/* Right Column: Profile Photo Container & Minimalist Tech Framing */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              {/* Decorative subtle border frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-sky-500/25 via-blue-600/15 to-indigo-500/25 rounded-3xl blur-md" />

              {/* Main Photo Card */}
              <div className="relative bg-slate-900 border border-slate-700/80 rounded-2xl p-4 shadow-2xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img
                    src={profileImg}
                    alt="Foto Profil Eka Yulita - Mahasiswa Sistem Informasi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  />

                  {/* Subtle photo overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Corner status watermark */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white/95 bg-slate-900/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 shadow-sm">
                    <span className="font-semibold text-white">Eka Yulita</span>
                    <span className="text-sky-300 font-medium">Semester 1</span>
                  </div>
                </div>

                {/* Photo replacement control bar (Easy placeholder switch for student) */}
                <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                    id="profile-photo-input"
                  />
                  <label
                    htmlFor="profile-photo-input"
                    className="flex-1 py-2 px-3 text-[11px] font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg text-center cursor-pointer flex items-center justify-center gap-1.5 transition-colors"
                    title="Ganti foto dengan foto Anda sendiri untuk melihat pratinjau"
                  >
                    <Upload className="w-3.5 h-3.5 text-sky-400" />
                    <span>{isCustomPhoto ? 'Ganti Foto Lagi' : 'Ubah Foto (Pratinjau)'}</span>
                  </label>

                  {isCustomPhoto && (
                    <button
                      type="button"
                      onClick={handleResetPhoto}
                      className="py-2 px-3 text-[11px] font-medium text-slate-400 hover:text-slate-200 bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                      title="Kembalikan ke foto standar"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>

                {isCustomPhoto && (
                  <div className="mt-2 text-[11px] text-emerald-400 flex items-center gap-1.5 justify-center">
                    <Check className="w-3 h-3" />
                    <span>Foto kustom aktif dalam pratinjau</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
