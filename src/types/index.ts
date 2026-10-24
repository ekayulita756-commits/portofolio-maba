export interface Project {
  id: string;
  title: string;
  category: 'spreadsheet' | 'academic' | 'design';
  categoryLabel: string;
  statusLabel: string;
  relatedCourse?: string;
  shortDescription: string;
  fullDescription: string;
  background: string;
  keyFeatures: string[];
  toolsUsed: string[];
  learningOutcomes: string;
  image: string;
  defaultImage: string;
}

export interface SkillItem {
  id: string;
  name: string;
  toolCategory: 'Produktivitas' | 'Desain' | 'Keterampilan Pribadi';
  description: string;
  practicalUse: string;
  learningStatus: string;
  iconName: 'FileText' | 'Table' | 'Palette' | 'Brain' | 'MessageSquare';
}

export interface CourseSubject {
  name: string;
  category: 'Teknologi & Bisnis' | 'Pemrograman & Logika' | 'Matematika & Bahasa' | 'Karakter & Etika';
  focus: string;
  outputDescription: string;
  connectedProject?: string;
}

export interface EducationInfo {
  institution: string;
  campusName: string;
  location: string;
  program: string;
  degree: string;
  period: string;
  semester: string;
  year: number;
  description: string;
  courses: CourseSubject[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}
