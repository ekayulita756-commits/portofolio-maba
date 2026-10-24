import { FUTURE_GOALS, PERSONAL_INFO } from '../data/portfolioData';
import { TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';

export default function GrowthVision() {
  return (
    <section className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner / Quote Container with deep navy accents */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white p-6 sm:p-10 lg:p-14 overflow-hidden shadow-xl mb-12 border border-slate-800">
          {/* Subtle glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 tracking-wider uppercase mb-3">
              <TrendingUp className="w-4 h-4" />
              <span>Visi Pembelajaran Mandiri</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-5">
              Terus Belajar, Terus Berkembang
            </h2>

            {/* Verbatim quote from prompt */}
            <blockquote className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal italic border-l-2 border-sky-400 pl-4 sm:pl-6 my-6">
              "{PERSONAL_INFO.growthGoal}"
            </blockquote>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-sky-300">Eka Yulita</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>S1 Sistem Informasi UNIKMA Cilacap</span>
            </div>
          </div>
        </div>

        {/* 3 Structured Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FUTURE_GOALS.map((goal) => (
            <div
              key={goal.number}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-sky-100/70 border border-sky-200 text-sky-800 flex items-center justify-center font-mono font-bold text-xs mb-4">
                  {goal.number}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {goal.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
