import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Brand & Identity */}
          <div className="text-center md:text-left">
            <div className="text-lg font-bold text-white tracking-tight">
              Eka Yulita
            </div>
            <div className="text-xs text-sky-400 mt-0.5">
              Mahasiswa Sistem Informasi · UNIKMA Cilacap
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
            <button
              onClick={() => onNavigate('beranda')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <button
              onClick={() => onNavigate('tentang-saya')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tentang Saya
            </button>
            <button
              onClick={() => onNavigate('keahlian')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Keahlian
            </button>
            <button
              onClick={() => onNavigate('proyek')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Proyek
            </button>
            <button
              onClick={() => onNavigate('pendidikan')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Pendidikan
            </button>
            <button
              onClick={() => onNavigate('kontak')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kontak
            </button>
          </div>

          {/* Back to top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl transition-colors flex items-center gap-2 text-xs cursor-pointer"
              title="Kembali ke atas"
            >
              <span>Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits verbatim from instructions */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div>
            © 2026 Eka Yulita. Personal Portfolio.
          </div>
          <div className="text-slate-400 italic">
            Built with curiosity and a passion for learning.
          </div>
        </div>
      </div>
    </footer>
  );
}
