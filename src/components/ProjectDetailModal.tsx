import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';
import { X, CheckCircle2, Wrench, Sparkles, Upload, RotateCcw, Copy, Check } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onUpdateImage: (projectId: string, newImage: string) => void;
  onResetImage: (projectId: string) => void;
}

export default function ProjectDetailModal({
  project,
  onClose,
  onUpdateImage,
  onResetImage,
}: ProjectDetailModalProps) {
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isCustomImage = project.image !== project.defaultImage;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          onUpdateImage(project.id, event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCopySummary = () => {
    const text = `${project.title}\nStatus: ${project.statusLabel}\n${project.shortDescription}\n\nFitur Utama:\n${project.keyFeatures.map((f) => `- ${f}`).join('\n')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 flex items-center justify-between z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
            <span className="font-semibold text-sky-700">{project.categoryLabel}</span>
            {project.relatedCourse && (
              <>
                <span aria-hidden="true">·</span>
                <span className="font-medium text-slate-700">Mata Kuliah: {project.relatedCourse}</span>
              </>
            )}
            <span aria-hidden="true">·</span>
            <span>{project.statusLabel}</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Tutup jendela detail proyek"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Project Title and Overview */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3"
            >
              {project.title}
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Media Viewport with Image Replacement Option */}
          <div className="space-y-2">
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900 border border-slate-200">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Custom Documentation Toolstrip */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs">
              <div className="text-slate-600">
                <span>Dokumentasi karya: </span>
                <span className="font-medium text-slate-800">
                  {isCustomImage ? 'Gambar kustom dimuat' : 'Gambar ilustrasi mockup'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                  id={`modal-upload-${project.id}`}
                />
                <label
                  htmlFor={`modal-upload-${project.id}`}
                  className="py-1.5 px-3 font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg cursor-pointer flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <Upload className="w-3.5 h-3.5 text-sky-600" />
                  <span>Ganti dengan Foto Asli</span>
                </label>

                {isCustomImage && (
                  <button
                    type="button"
                    onClick={() => onResetImage(project.id)}
                    className="py-1.5 px-2.5 font-medium text-slate-500 hover:text-slate-800 bg-white border border-slate-300 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                    title="Kembalikan ke ilustrasi bawaan"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Background and Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500" />
                Latar Belakang & Kebutuhan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.background}
              </p>
            </div>

            <div className="p-5 bg-sky-50/50 border border-sky-100 rounded-xl">
              <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                Deskripsi Lengkap
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Fitur Utama & Komponen
            </h3>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-slate-50/80 p-3 rounded-lg border border-slate-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-sky-600" />
              Alat yang Digunakan
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700">
              {project.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-200/80 rounded-lg text-slate-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Reflection */}
          <div className="p-5 bg-gradient-to-r from-blue-50/60 to-sky-50/60 border border-blue-100 rounded-xl">
            <h3 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-sky-600" />
              Refleksi & Pembelajaran yang Didapat
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {project.learningOutcomes}
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopySummary}
            className="py-2 px-3 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Ringkasan Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Salin Ringkasan Proyek</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-2 px-5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-950 rounded-lg transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
