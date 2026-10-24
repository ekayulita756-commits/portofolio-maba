import { useState } from 'react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ArrowUpRight, Sparkles, Layers, Info, CheckCircle2 } from 'lucide-react';
import ProjectDetailModal from './ProjectDetailModal';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>(PROJECTS_DATA);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'spreadsheet' | 'academic' | 'design'>('all');

  const handleUpdateImage = (projectId: string, newImage: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, image: newImage } : p))
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) => (prev ? { ...prev, image: newImage } : null));
    }
  };

  const handleResetImage = (projectId: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === projectId ? { ...p, image: p.defaultImage } : p))
    );
    if (selectedProject && selectedProject.id === projectId) {
      setSelectedProject((prev) => (prev ? { ...prev, image: prev.defaultImage } : null));
    }
  };

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>Karya & Studi Kasus</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Proyek & Tugas Perkuliahan
            </h2>
            <div className="h-1 w-12 bg-sky-500 rounded-full mt-3" />
          </div>

          {/* Interactive filter tabs (horizontal scrolling on mobile) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Proyek
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('spreadsheet')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'spreadsheet'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Spreadsheet & Data
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('academic')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'academic'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tugas Kuliah
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory('design')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeCategory === 'design'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Desain Visual
            </button>
          </div>
        </div>

        {/* Informative Note */}
        <div className="mb-8 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-slate-600">
          <Info className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Setiap karya di bawah mencerminkan proses pembelajaran mandiri maupun tugas perkuliahan semester 1. Klik <strong>"Lihat Detail"</strong> untuk membaca deskripsi lengkap, latar belakang masalah, dan catatan refleksi proses belajarnya.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Media frame with refined hover zoom */}
                <div className="relative aspect-4/3 w-full bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Subtle gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Status label overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 font-medium shadow-sm">
                      {project.statusLabel}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category & Course Metadata */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs mb-2.5">
                    <span className="font-semibold text-sky-700">{project.categoryLabel}</span>
                    {project.relatedCourse && (
                      <>
                        <span aria-hidden="true" className="text-slate-300">·</span>
                        <span className="text-slate-600 font-medium">
                          Mata Kuliah: {project.relatedCourse}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-sky-800 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Tools used mini strip */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.toolsUsed.map((tool) => (
                      <span
                        key={tool}
                        className="text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 px-4 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-sky-500 hover:text-white border border-transparent rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs hover:shadow-md"
                >
                  <span>Lihat Detail</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onUpdateImage={handleUpdateImage}
        onResetImage={handleResetImage}
      />
    </section>
  );
}
