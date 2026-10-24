import { Project, SkillItem, EducationInfo } from '../types';

export const PERSONAL_INFO = {
  name: 'Eka Yulita',
  role: 'Information Systems Student | Semester 1',
  university: 'Universitas Komputama (UNIKMA) Cilacap',
  studyProgram: 'Sistem Informasi (S1)',
  location: 'Cilacap, Jawa Tengah, Indonesia',
  email: 'ekayulita756@gmail.com',
  whatsappNumber: '6287893275399',
  whatsappDisplay: '+62 878-9327-5399',
  linkedinUrl: 'https://linkedin.com/in/eka-yulita-unikma',
  avatarImage: '/src/assets/images/avatar_student_portrait_1792586967175.jpg',
  heroTagline: 'Halo, saya Eka Yulita',
  heroSubheadline:
    'Mahasiswa Sistem Informasi yang sedang belajar, berkembang, dan mengeksplorasi dunia teknologi digital.',
  aboutStory:
    'Halo! Saya Eka Yulita, mahasiswa semester 1 Program Studi Sistem Informasi di Universitas Komputama Cilacap. Saya tertarik mempelajari teknologi, pengolahan data, dan pemanfaatan teknologi untuk membantu menyelesaikan masalah sehari-hari.\n\nSaat ini saya sedang mengembangkan kemampuan dasar melalui pembelajaran di perkuliahan, latihan mandiri, dan pengerjaan proyek sederhana. Saya percaya bahwa kemampuan dapat berkembang melalui proses belajar dan pengalaman.',
  growthGoal:
    'Saya ingin terus meningkatkan kemampuan di bidang Sistem Informasi, teknologi digital, dan pengolahan data. Ke depannya, saya berharap dapat mengembangkan proyek yang bermanfaat, memperoleh pengalaman baru, dan mempersiapkan diri untuk kesempatan magang maupun pekerjaan di bidang teknologi.',
};

export const HIGHLIGHT_CARDS = [
  {
    title: 'Mahasiswa Sistem Informasi',
    description:
      'Menempuh studi Sarjana di Universitas Komputama Cilacap, mendalami integrasi teknologi komputer dengan proses bisnis.',
    badge: 'Akademik · UNIKMA Cilacap',
  },
  {
    title: 'Digital Technology Learner',
    description:
      'Aktif mempelajari dasar logika komputasi, algoritma dasar, eksplorasi tools digital, dan tren teknologi masa kini.',
    badge: 'Pembelajar Aktif · Semester 1',
  },
  {
    title: 'Beginner Project Explorer',
    description:
      'Membangun portofolio dari tugas perkuliahan, latihan analisis data spreadsheet sederhana, dan perancangan materi digital.',
    badge: 'Proyek Latihan · Terapan',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'word-docs',
    name: 'Microsoft Word / Google Docs',
    toolCategory: 'Produktivitas',
    description: 'Pengolahan dokumen.',
    practicalUse:
      'Penyusunan makalah akademik terstruktur, pembuatan laporan tugas kuliah, penataan format sitasi, serta kolaborasi dokumen tim.',
    learningStatus: 'Tingkat: Dasar · Sedang Dipelajari di Perkuliahan',
    iconName: 'FileText',
  },
  {
    id: 'excel-sheets',
    name: 'Microsoft Excel / Google Sheets',
    toolCategory: 'Produktivitas',
    description: 'Pengolahan data dasar.',
    practicalUse:
      'Perhitungan otomatis dengan formula dasar (SUM, AVERAGE, COUNT, IF sederhana), perapian tabel data, filter, serta pembuatan bagan grafik.',
    learningStatus: 'Tingkat: Dasar · Praktik Latihan Mandiri',
    iconName: 'Table',
  },
  {
    id: 'canva',
    name: 'Canva',
    toolCategory: 'Desain',
    description: 'Desain presentasi dan konten digital.',
    practicalUse:
      'Merancang visual slide presentasi kuliah, infografis ringkas materi pelajaran, serta poster sederhana dengan tata letak yang rapi.',
    learningStatus: 'Tingkat: Menengah Pemula · Eksplorasi Visual',
    iconName: 'Palette',
  },
  {
    id: 'problem-solving',
    name: 'Problem Solving',
    toolCategory: 'Keterampilan Pribadi',
    description: 'Belajar mencari solusi atas masalah sederhana.',
    practicalUse:
      'Mengurai persoalan studi kasus tugas kuliah menjadi tahapan logis, mencari alternatif solusi yang realistis, serta menguji hasil secara bertap.',
    learningStatus: 'Keterampilan Pikir · Diasah Berkelanjutan',
    iconName: 'Brain',
  },
  {
    id: 'communication',
    name: 'Communication',
    toolCategory: 'Keterampilan Pribadi',
    description: 'Menyusun dan menyampaikan informasi dengan jelas.',
    practicalUse:
      'Menyampaikan hasil kerja kelompok, berdiskusi dalam sesi kelas, serta menyajikan materi presentasi dengan bahasa yang terstruktur dan santun.',
    learningStatus: 'Keterampilan Interpersonal · Praktik Diskusi Kelas',
    iconName: 'MessageSquare',
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sistem-pencatatan-penjualan-warung',
    title: 'Sistem Pencatatan Penjualan Warung',
    category: 'spreadsheet',
    categoryLabel: 'Spreadsheet & Data',
    statusLabel: 'Konsep Proyek · Sedang Dipelajari',
    relatedCourse: 'Komputer Bisnis',
    shortDescription:
      'Konsep pencatatan stok barang, penjualan harian, dan pemasukan menggunakan spreadsheet untuk membantu pengelolaan warung kecil.',
    fullDescription:
      'Proyek eksplorasi mandiri ini lahir dari observasi warung-warung kecil di sekitar lingkungan tempat tinggal yang umumnya masih mencatat pemasukan secara manual di buku tulis biasa. Konsep ini dirancang menggunakan spreadsheet agar pemilik warung dapat mencatat transaksi harian, memantau sisa barang dagangan, dan menghitung laba kotor secara otomatis.',
    background:
      'Usaha mikro seperti warung kelontong membutuhkan alat pencatatan yang sederhana, tanpa perlu sistem POS rumit atau berbayar mahal. Spreadsheet menjadi pilihan ideal karena fleksibel dan mudah diakses melalui handphone maupun laptop.',
    keyFeatures: [
      'Tabel daftar barang dagangan beserta harga beli modal dan harga jual eceran',
      'Pencatatan kas masuk dari penjualan per hari dengan formula penjumlahan otomatis',
      'Status stok otomatis (indikator barang yang mulai habis untuk segera di-restock)',
      'Ringkasan estimasi laba kotor mingguan dan bulanan',
    ],
    toolsUsed: ['Google Sheets', 'Microsoft Excel', 'Logika Formula Dasar'],
    learningOutcomes:
      'Belajar menyusun struktur data tabel yang teratur, memanfaatkan formula logika sederhana (SUM, IF, multiply), serta memahami kebutuhan riil sistem informasi pada bisnis skala mikro.',
    image: '/src/assets/images/project_warung_spreadsheet_1792586968123.jpg',
    defaultImage: '/src/assets/images/project_warung_spreadsheet_1792586968123.jpg',
  },
  {
    id: 'presentasi-sistem-pemerintahan',
    title: 'Presentasi Sistem Pemerintahan',
    category: 'academic',
    categoryLabel: 'Tugas Kuliah',
    statusLabel: 'Tugas Kuliah · Selesai Dipresentasikan',
    relatedCourse: 'Pancasila',
    shortDescription:
      'Tugas kuliah untuk merangkum materi tentang negara dan sistem pemerintahan menjadi presentasi yang ringkas dan mudah dipahami.',
    fullDescription:
      'Karya tugas presentasi perkuliahan semester 1 yang bertujuan membedah struktur ketatanegaraan, bentuk-bentuk pemerintahan dunia, serta prinsip-prinsip tata kelola yang baik (Good Governance). Materi yang padat dirangkum ke dalam format visual yang komunikatif agar audiens dapat memahami konsep dengan cepat.',
    background:
      'Sebagai mahasiswa Sistem Informasi, kemampuan menyerap materi teoretis dan menyampaikannya kembali secara visual serta terstruktur kepada audiens merupakan fondasi komunikasi yang sangat penting.',
    keyFeatures: [
      'Diagram alur pemisahan kekuasaan (Eksekutif, Legislatif, dan Yudikatif)',
      'Perbandingan ringkas sistem presidensial dan parlementer',
      'Infografis hierarki kelembagaan negara yang mudah dipahami',
      'Slide ringkasan poin tanya-jawab untuk diskusi kelas',
    ],
    toolsUsed: ['Canva', 'Microsoft PowerPoint', 'Riset Dokumen'],
    learningOutcomes:
      'Meningkatkan keterampilan sintesis informasi, public speaking di hadapan dosen dan teman sejawat, serta pemilihan hierarki tipografi visual yang nyaman dibaca.',
    image: '/src/assets/images/project_government_presentation_1792586968274.jpg',
    defaultImage: '/src/assets/images/project_government_presentation_1792586968274.jpg',
  },
  {
    id: 'desain-konten-digital',
    title: 'Desain Konten Digital',
    category: 'design',
    categoryLabel: 'Latihan Visual',
    statusLabel: 'Latihan & Eksplorasi · Berkelanjutan',
    relatedCourse: 'Konsep Sistem Informasi',
    shortDescription:
      'Latihan membuat desain sederhana untuk kebutuhan presentasi atau promosi produk digital.',
    fullDescription:
      'Serangkaian latihan eksplorasi desain grafis digital untuk mengasah kepekaan estetika, proporsi elemen, dan komposisi warna. Latihan ini mencakup pembuatan banner materi edukasi, slide promosi produk digital, serta mockup layout media sosial.',
    background:
      'Di era digital, penyampaian sistem informasi sering kali berhadapan langsung dengan pengguna melalui antarmuka visual. Menguasai dasar-dasar visual layout membantu dalam memahami estetika User Interface di masa mendatang.',
    keyFeatures: [
      'Penerapan palet warna modern berbasis biru navy dan cyan yang profesional',
      'Mockup penempatan konten pada frame perangkat modern (mobile & tablet)',
      'Penataan tata letak tipografi dengan rasio kontras yang memenuhi standar keterbacaan',
      'Format grafis siap pakai untuk kebutuhan presentasi akademik dan media informasi',
    ],
    toolsUsed: ['Canva', 'Google Slides', 'Prinsip Desain Layout'],
    learningOutcomes:
      'Memahami pentingnya white space (ruang kosong), konsistensi gaya visual, serta bagaimana desain yang rapi dapat meningkatkan kredibilitas sebuah pesan.',
    image: '/src/assets/images/project_digital_content_design_1792586968557.jpg',
    defaultImage: '/src/assets/images/project_digital_content_design_1792586968557.jpg',
  },
];

export const EDUCATION_DATA: EducationInfo = {
  institution: 'Universitas Komputama (UNIKMA) Cilacap',
  campusName: 'UNIKMA Cilacap',
  location: 'Cilacap, Jawa Tengah',
  program: 'Program Studi Sistem Informasi',
  degree: 'Sarjana Komputer (S1)',
  period: '2026 — Sekarang',
  semester: 'Semester 1',
  year: 2026,
  description:
    'Sedang menempuh semester 1 dengan fokus mempelajari mata kuliah inti sistem informasi, logika pemrograman, kalkulus, komputer bisnis, serta pengembangan karakter dan bahasa untuk membangun fondasi akademik yang kokoh.',
  courses: [
    {
      name: 'Komputer Bisnis',
      category: 'Teknologi & Bisnis',
      focus:
        'Pemanfaatan spreadsheet (Excel) dan aplikasi perkantoran untuk operasional bisnis, pemodelan tabel keuangan, pencatatan transaksi kas, serta otomatisasi administrasi.',
      outputDescription:
        'Menguasai formula kalkulasi dasar, penyusunan neraca sederhana, serta pembuatan laporan penjualan berkala yang rapi.',
      connectedProject: 'Sistem Pencatatan Penjualan Warung',
    },
    {
      name: 'Konsep Sistem Informasi',
      category: 'Teknologi & Bisnis',
      focus:
        'Pemahaman arsitektur sistem informasi (hardware, software, data, manusia, proses bisnis), peranan SI dalam keunggulan kompetitif organisasi, dan transformasi digital.',
      outputDescription:
        'Mampu memetakan kebutuhan sistem dalam organisasi bisnis serta memahami bagaimana data diolah menjadi informasi bernilai strategis.',
      connectedProject: 'Desain Konten Digital & Eksplorasi Antarmuka',
    },
    {
      name: 'Programming Fundamental',
      category: 'Pemrograman & Logika',
      focus:
        'Fondasi algoritma dan logika pemrograman komputer, mencakup pemahaman tipe data, variabel, struktur kontrol logika (if-else), perulangan (looping), dan fungsi terstruktur.',
      outputDescription:
        'Membangun pemikiran algoritmik untuk memecahkan persoalan komputasional dan persiapan menuju pemrograman web dan basis data.',
    },
    {
      name: 'Bahasa Inggris',
      category: 'Matematika & Bahasa',
      focus:
        'Penguasaan istilah-istilah teknis teknologi informasi (English for IT), kemampuan membaca literatur dan dokumentasi software internasional, serta komunikasi dasar.',
      outputDescription:
        'Kecakapan memahami error message, dokumentasi sintaks teknis, dan komunikasi profesional dalam ekosistem teknologi.',
    },
    {
      name: 'Pancasila',
      category: 'Karakter & Etika',
      focus:
        'Penanaman nilai-nilai kebangsaan, tata kelola kehidupan bernegara yang adil, pemahaman struktur pemerintahan konstitusional, dan integritas etika berorganisasi.',
      outputDescription:
        'Menerapkan etika kewarganegaraan dalam pemanfaatan teknologi informasi demi kemajuan masyarakat Indonesia.',
      connectedProject: 'Presentasi Sistem Pemerintahan',
    },
    {
      name: 'Pendidikan Agama Islam',
      category: 'Karakter & Etika',
      focus:
        'Pembinaan akhlak karimah, etika moralitas digital, kejujuran akademik, etos kerja profesional, dan kesadaran bahwa ilmu pengetahuan harus berorientasi pada kemaslahatan umat.',
      outputDescription:
        'Membentuk integritas moral dalam menjaga kerahasiaan data pribadi, kejujuran berkarya, dan tanggung jawab sosial.',
    },
    {
      name: 'Kalkulus',
      category: 'Matematika & Bahasa',
      focus:
        'Penguasaan konsep fungsi matematika, limit fungsi, turunan (diferensial), dan dasar integral sebagai instrumen penalaran kuantitatif.',
      outputDescription:
        'Melatih ketelitian logika berpikir analitis yang menopang pemahaman algoritma lanjutan, analisis data, dan optimasi sistem.',
    },
  ],
};

export const FUTURE_GOALS = [
  {
    number: '01',
    title: 'Penguasaan Pengolahan & Analisis Data',
    description:
      'Mendalami spreadsheet tingkat lanjut dan mulai mempelajari query SQL dasar untuk memahami bagaimana data bisnis disimpan dan diolah menjadi informasi berharga.',
  },
  {
    number: '02',
    title: 'Fondasi Pemrograman & Sistem Web',
    description:
      'Mempelajari logika pemrograman terstruktur dan pengantar teknologi antarmuka web untuk memahami arsitektur perangkat lunak modern.',
  },
  {
    number: '03',
    title: 'Portofolio Terapan & Peluang Magang',
    description:
      'Mengerjakan proyek-proyek studi kasus nyata di perkuliahan dan aktif bersiap menghadapi kesempatan magang industri di bidang teknologi informasi.',
  },
];
