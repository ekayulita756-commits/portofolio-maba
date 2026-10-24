import { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import { FileText, Table, Palette, Brain, MessageSquare, Info, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState<'Semua' | 'Produktivitas' | 'Desain' | 'Keterampilan Pribadi'>('Semua');

  const getIcon = (name: string) => {
    switch (name) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-blue-600" />;
      case 'Table':
        return <Table className="w-5 h-5 text-emerald-600" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-600" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-amber-600" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-sky-600" />;
      default:
        return <FileText className="w-5 h-5 text-slate-600" />;
    }
  };

  const filteredSkills =
    activeFilter === 'Semua'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.toolCategory === activeFilter);

  return (
    <section id="keahlian" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Kemampuan & Tools</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Keahlian yang Sedang Dipelajari
            </h2>
            <div className="h-1 w-12 bg-sky-500 rounded-full mt-3" />
          </div>

          {/* Interactive filter tabs (responsive horizontal layout) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto max-w-full">
            {(['Semua', 'Produktivitas', 'Desain', 'Keterampilan Pribadi'] as const).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                    activeFilter === category
                      ? 'bg-white text-slate-900 shadow-xs font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Honest Academic Disclaimer Callout */}
        <div className="mb-8 p-4 sm:p-5 bg-sky-50/70 border border-sky-100 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-sky-950">
          <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Catatan Keterampilan:</strong> Seluruh daftar di bawah merupakan kemampuan dasar yang sedang aktif saya pelajari dan kembangkan di semester 1 perkuliahan, bukan klaim keahlian tingkat profesional.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 tracking-wide uppercase">
                    {skill.toolCategory}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-sky-800 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-sm font-semibold text-sky-700 mb-3">
                  {skill.description}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {skill.practicalUse}
                </p>
              </div>

              {/* Unboxed learning status indicator */}
              <div className="pt-4 border-t border-slate-100 text-[11px] font-medium text-slate-500 flex items-center justify-between">
                <span>{skill.learningStatus}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
