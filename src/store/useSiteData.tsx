import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteData, SiteSettings, Post, Service, PortfolioItem, Testimonial } from '../types';
import { initialData } from '../initialData';

interface SiteDataContextType {
  data: SiteData;
  updateSettings: (settings: Partial<SiteSettings>) => void;
  addPost: (post: Omit<Post, 'id' | 'date' | 'author'>) => void;
  updatePost: (id: string, post: Partial<Post>) => void;
  deletePost: (id: string) => void;
  addPortfolio: (item: Omit<PortfolioItem, 'id'>) => void;
  updatePortfolio: (id: string, item: Partial<PortfolioItem>) => void;
  deletePortfolio: (id: string) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(() => {
    const saved = localStorage.getItem('thesoyou_site_data');
    const parsedData = saved ? JSON.parse(saved) : initialData;
    
    // Migration: Update old Kakao URL to new one
    if (parsedData.settings.kakaoUrl === "https://pf.kakao.com/_thesoyou") {
      parsedData.settings.kakaoUrl = "https://pf.kakao.com/_ZgLxhX";
    }
    
    return parsedData;
  });

  useEffect(() => {
    localStorage.setItem('thesoyou_site_data', JSON.stringify(data));
  }, [data]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setData(prev => ({
      ...prev,
      settings: { ...prev.settings, ...newSettings }
    }));
  };

  const addPost = (post: Omit<Post, 'id' | 'date' | 'author'>) => {
    const newPost: Post = {
      ...post,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      author: "관리자"
    };
    setData(prev => ({
      ...prev,
      posts: [newPost, ...prev.posts]
    }));
  };

  const updatePost = (id: string, updatedFields: Partial<Post>) => {
    setData(prev => ({
      ...prev,
      posts: prev.posts.map(p => p.id === id ? { ...p, ...updatedFields } : p)
    }));
  };

  const deletePost = (id: string) => {
    setData(prev => ({
      ...prev,
      posts: prev.posts.filter(p => p.id !== id)
    }));
  };

  const addPortfolio = (item: Omit<PortfolioItem, 'id'>) => {
    const newItem: PortfolioItem = {
      ...item,
      id: Date.now().toString()
    };
    setData(prev => ({
      ...prev,
      portfolio: [...prev.portfolio, newItem]
    }));
  };

  const updatePortfolio = (id: string, updatedFields: Partial<PortfolioItem>) => {
    setData(prev => ({
      ...prev,
      portfolio: prev.portfolio.map(p => p.id === id ? { ...p, ...updatedFields } : p)
    }));
  };

  const deletePortfolio = (id: string) => {
    setData(prev => ({
      ...prev,
      portfolio: prev.portfolio.filter(p => p.id !== id)
    }));
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Date.now().toString()
    };
    setData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, newTestimonial]
    }));
  };

  const updateTestimonial = (id: string, updatedFields: Partial<Testimonial>) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => t.id === id ? { ...t, ...updatedFields } : t)
    }));
  };

  const deleteTestimonial = (id: string) => {
    setData(prev => ({
      ...prev,
      testimonials: prev.testimonials.filter(t => t.id !== id)
    }));
  };

  const addService = (service: Omit<Service, 'id'>) => {
    const newService: Service = {
      ...service,
      id: Date.now().toString()
    };
    setData(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const updateService = (id: string, updatedFields: Partial<Service>) => {
    setData(prev => ({
      ...prev,
      services: prev.services.map(s => s.id === id ? { ...s, ...updatedFields } : s)
    }));
  };

  const deleteService = (id: string) => {
    setData(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  return (
    <SiteDataContext.Provider value={{ 
      data, 
      updateSettings, 
      addPost, 
      updatePost, 
      deletePost,
      addPortfolio,
      updatePortfolio,
      deletePortfolio,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addService,
      updateService,
      deleteService
    }}>
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) throw new Error('useSiteData must be used within a SiteDataProvider');
  return context;
};
