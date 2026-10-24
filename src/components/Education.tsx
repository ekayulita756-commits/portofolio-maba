import { useState } from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  ArrowUpRight,
  Code2,
  Binary,
  Layers,
  Globe2,
  Scale,
  HeartHandshake,
  Sigma,
  Sparkles,
} from 'lucide-react';

interface EducationProps {
  onNavigateToProject?: (projectId: string) => void;
}

export default function Education({ onNavigateToProject }: EducationProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  const getCourseIcon = (courseName: string) => {
    switch (courseName) {
      case 'Komputer Bisnis':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'Konsep Sistem Informasi':
        return <Binary className="w-5 h-5 text-blue-600" />;
      case 'Programming Fundamental':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Bahasa Inggris':
        return <Globe2 className="w-5 h-5 text-teal-600" />;
      case 'Pancasila':
        return <Scale className="w-5 h-5 text-amber-600" />;
      case 'Pendidikan Agama Islam':
        return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'Kalkulus':
        return <Sigma className="w-5 h-5 text-purple-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-slate-600" />;
    }
  };

  const categories = [
    'Semua',
    'Teknologi & Bisnis',
    'Pemrograman & Logika',
    'Matematika & Bahasa',
    'Karakter & Etika',
  ];

  const filteredCourses =
    selectedCategory === 'Semua'
      ? EDUCATION_DATA.courses
      : EDUCATION_DATA.courses.filter((c) => c.category === selectedCategory);

  return (
    <section id="pendidikan" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Riwayat Studi & Kurikulum</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Pendidikan & Mata Kuliah Semester 1
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mt-3 mb-4" />
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Menempuh pendidikan tingkat Sarjana di Program Studi Sistem Informasi dengan fokus membangun fondasi teori, logika komputasi, pemodelan bisnis, serta karakter profesional.
          </p>
        </div>

        {/* Education Main Academic Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs hover:border-sky-300 transition-colors mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-sky-700 tracking-wide uppercase">
                  Pendidikan Tinggi (S1)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
                  {EDUCATION_DATA.institution}
                </h3>
                <p className="text-base font-semibold text-slate-700">
                  {EDUCATION_DATA.program}
                </p>
              </div>
            </div>

            {/* Unboxed clean metadata */}
            <div className="flex flex-wrap lg:flex-col lg:items-end text-xs text-slate-500 gap-2 shrink-0">
              <div className="flex items-center gap-1.5 font-medium text-slate-800 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200/70">
                <Calendar className="w-3.5 h-3.5 text-sky-600" />
                <span>{EDUCATION_DATA.semester} · {EDUCATION_DATA.year}</span>
              </div>
              <div className="flex items-center gap-1.5 px-1 text-slate-600">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{EDUCATION_DATA.location}</span>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-6">
            {EDUCATION_DATA.description}
          </p>
        </div>

        {/* 7 Courses Breakdown Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-sky-600" />
              <span>Daftar 7 Mata Kuliah & Fokus Pembelajaran</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Setiap mata kuliah dilengkapi fokus keilmuan dan keterkaitannya dengan proyek studi kasus nyata.
            </p>
          </div>

          {/* Category Filter with responsive horizontal scroller */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.name}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-sky-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Course Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getCourseIcon(course.name)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">
                    {course.category}
                  </span>
                </div>

                {/* Course Title */}
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 group-hover:text-sky-800 transition-colors">
                  {course.name}
                </h4>

                {/* Learning Focus */}
                <div className="space-y-3.5 mb-6">
                  <div>
                    <div className="text-[11px] font-bold text-sky-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span>Fokus Pembelajaran</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {course.focus}
                    </p>
                  </div>

                  <div>
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Luaran / Capaian Dasar</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {course.outputDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connected Project / Real Output Integration */}
              <div className="pt-4 border-t border-slate-100">
                {course.connectedProject ? (
                  <div className="p-2.5 bg-sky-50/70 border border-sky-100 rounded-xl text-xs flex items-center justify-between gap-2">
                    <div className="truncate">
                      <span className="text-[10px] font-semibold text-sky-800 uppercase block">
                        Terkoneksi dengan Proyek
                      </span>
                      <span className="font-medium text-slate-900 truncate block">
                        {course.connectedProject}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigateToProject ? onNavigateToProject('proyek') : (window.location.hash = '#proyek')}
                      className="p-1.5 text-sky-700 hover:text-sky-900 hover:bg-sky-100 rounded-md transition-colors shrink-0 cursor-pointer"
                      title="Lihat proyek terkait"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="text-[11px] text-slate-400 italic">
                    Fondasi keilmuan akademik semester 1
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
