import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Trash2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactSubmission } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactSubmission | null>(null);
  const [savedMessages, setSavedMessages] = useState<ContactSubmission[]>([]);
  const [showDemoLog, setShowDemoLog] = useState(false);

  // Load demo messages from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('ekayulita_portfolio_messages');
      if (stored) {
        setSavedMessages(JSON.parse(stored));
      }
    } catch {
      // localStorage may be disabled
    }
  }, []);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap wajib diisi.';
    } else if (formData.name.trim().length < 3) {
      errs.name = 'Nama minimal terdiri dari 3 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Format alamat email tidak valid (contoh: nama@email.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan terlalu singkat (minimal 10 karakter).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      const newSubmission: ContactSubmission = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        createdAt: new Date().toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short',
        }),
      };

      const updated = [newSubmission, ...savedMessages];
      setSavedMessages(updated);
      try {
        localStorage.setItem('ekayulita_portfolio_messages', JSON.stringify(updated));
      } catch {
        // storage disabled
      }

      setSubmittedMessage(newSubmission);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }, 600);
  };

  const handleClearDemoLog = () => {
    setSavedMessages([]);
    localStorage.removeItem('ekayulita_portfolio_messages');
  };

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Halo Eka Yulita, saya melihat website portofolio Anda dan ingin berdiskusi mengenai...'
  )}`;

  return (
    <section id="kontak" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
            Komunikasi & Jejaring
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Hubungi Saya
          </h2>
          <div className="h-1 w-12 bg-sky-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Links & Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Saya sangat senang menerima masukan, ajakan diskusi mengenai tugas kuliah Sistem Informasi, maupun perbincangan seputar teknologi digital. Silakan hubungi saya melalui form di samping atau tautan komunikasi langsung berikut:
            </p>

            <div className="space-y-3">
              {/* Email link */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-sky-300 hover:shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      Email Resmi
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-colors" />
              </a>

              {/* WhatsApp link */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      WhatsApp Chat
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {PERSONAL_INFO.whatsappDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
              </a>

              {/* LinkedIn placeholder link */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                      Profil LinkedIn
                    </div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      Eka Yulita
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
                  <MapPin className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">
                    Domisili & Kampus
                  </div>
                  <div className="text-sm font-medium text-slate-800">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Kirim Pesan
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Silakan isi data berikut. Form dilengkapi validasi input dan simulasi penampungan pesan demo.
              </p>

              {/* Success Alert */}
              {submittedMessage && (
                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs sm:text-sm text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-emerald-800">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Pesan Berhasil Dikirim!</span>
                  </div>
                  <p className="text-emerald-800">
                    Terima kasih, <strong>{submittedMessage.name}</strong>. Pesan Anda telah tervalidasi dan tersimpan di penyimpanan demo lokal browser ini.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=Pesan dari ${encodeURIComponent(
                        submittedMessage.name
                      )}&body=${encodeURIComponent(submittedMessage.message)}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-medium transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Teruskan juga ke Email Saya</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Field: Nama */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Nama Lengkap <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Contoh: Rian Pratama"
                    className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                    }`}
                  />
                  {errors.name && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Field: Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Alamat Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="nama@domain.com"
                    className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                    }`}
                  />
                  {errors.email && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Field: Pesan */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5"
                  >
                    Pesan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tuliskan pesan, pertanyaan, atau tanggapan Anda..."
                    className={`w-full px-4 py-2.5 text-sm bg-slate-50 border rounded-xl focus:outline-none focus:ring-2 transition-all resize-y ${
                      errors.message
                        ? 'border-rose-300 focus:ring-rose-200 bg-rose-50/20'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                    }`}
                  />
                  {errors.message && (
                    <div className="mt-1 flex items-center gap-1 text-xs text-rose-600">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Demo Backend Note */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-slate-500 leading-normal">
                  <strong>Keterangan Teknis:</strong> Website ini belum tersambung ke backend server email khusus, sehingga pesan disimpan secara interaktif pada penyimpanan demo peramban (browser).
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 disabled:opacity-60 rounded-xl transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  {isSubmitting ? (
                    <span>Memproses Pengiriman...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>
              </form>

              {/* Demo Local Log Viewer Toggle */}
              {savedMessages.length > 0 && (
                <div className="mt-6 pt-5 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                    <button
                      type="button"
                      onClick={() => setShowDemoLog(!showDemoLog)}
                      className="font-medium text-sky-700 hover:text-sky-900 underline cursor-pointer"
                    >
                      {showDemoLog ? 'Sembunyikan' : 'Lihat'} Pesan Terkirim ({savedMessages.length})
                    </button>
                    {showDemoLog && (
                      <button
                        type="button"
                        onClick={handleClearDemoLog}
                        className="text-slate-400 hover:text-rose-600 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Hapus riwayat pesan demo"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Hapus Riwayat</span>
                      </button>
                    )}
                  </div>

                  {showDemoLog && (
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                      {savedMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg text-xs"
                        >
                          <div className="flex items-center justify-between font-semibold text-slate-800 mb-1">
                            <span>{msg.name}</span>
                            <span className="text-[10px] text-slate-400 font-normal">
                              {msg.createdAt}
                            </span>
                          </div>
                          <p className="text-slate-600 line-clamp-2">{msg.message}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
