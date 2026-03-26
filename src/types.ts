import { LucideIcon } from 'lucide-react';

export interface SiteSettings {
  brandName: string;
  heroTitle: string;
  heroSubtitle: string;
  primaryColor: string;
  fontFamily: string;
  contactEmail: string;
  contactPhone: string;
  instagramUrl: string;
  kakaoUrl: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  metrics: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  content: string;
  rating: number;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export interface SiteData {
  settings: SiteSettings;
  services: Service[];
  portfolio: PortfolioItem[];
  testimonials: Testimonial[];
  posts: Post[];
}
