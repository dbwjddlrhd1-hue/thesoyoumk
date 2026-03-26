import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronLeft,
  ChevronRight, 
  Users, 
  Star, 
  BarChart3, 
  LayoutDashboard, 
  Settings as SettingsIcon, 
  FileText, 
  Plus, 
  Trash2, 
  Edit,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Globe,
  Send,
  MessageSquare
} from 'lucide-react';
import { SiteDataProvider, useSiteData } from './store/useSiteData';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const { data } = useSiteData();
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 primary-bg rounded-lg flex items-center justify-center">
              <Instagram className="text-white w-6 h-6" />
            </div>
            <span className="text-xl tracking-tighter uppercase">
              <span className="font-black text-black">THESOYOU</span> <span className="font-light primary-text">MARKETING</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-blue-600 transition-colors">홈</Link>
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">서비스</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-blue-600 transition-colors">포트폴리오</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-blue-600 transition-colors">고객후기</a>
            <Link to="/admin" className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:bg-gray-50 transition-all">관리자</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4"
          >
            <Link to="/" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>홈</Link>
            <a href="#services" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>서비스</a>
            <a href="#portfolio" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>포트폴리오</a>
            <a href="#testimonials" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>고객후기</a>
            <Link to="/admin" className="block text-lg font-medium text-blue-600" onClick={() => setIsOpen(false)}>관리자</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { data } = useSiteData();
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) return null;

  return (
    <footer className="bg-black text-white py-20 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-16">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="text-blue-500 w-8 h-8" />
              <span className="text-xl tracking-tighter uppercase">
                <span className="font-black text-white">THESOYOU</span> <span className="font-light text-blue-500">MARKETING</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-8">
              더소유마케팅은 인스타그램 마케팅의 본질을 꿰뚫는 전략으로 브랜드의 디지털 성장을 책임집니다.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors">
                <MessageSquare className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">회사 소개</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">서비스 안내</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">성공 사례</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">문의하기</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/terms" className="hover:text-white transition-colors">이용약관</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">쿠키 정책</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600">
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <span>© 2026 더소유마케팅. All rights reserved.</span>
            <span>업체명: 더소유마케팅</span>
            <span>대표자: 이소정</span>
            <span>사업자등록번호: 202-56-00689</span>
            <span>이메일: {data.settings.contactEmail}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const ServiceCarousel = ({ services }: { services: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % services.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);

  const displayItems = [];
  for (let i = 0; i < Math.min(visibleCount, services.length); i++) {
    displayItems.push(services[(currentIndex + i) % services.length]);
  }

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {displayItems.map((service, idx) => {
            const Icon = { Users, Instagram, Star, BarChart3 }[service.icon] || Instagram;
            return (
              <motion.div
                key={`${service.id}-${(currentIndex + idx) % services.length}`}
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all group flex-1 min-w-0"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:primary-bg transition-colors">
                  <Icon className="w-7 h-7 primary-text group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      {services.length > visibleCount && (
        <div className="flex justify-center mt-10 space-x-4">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const PortfolioCarousel = ({ portfolio }: { portfolio: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(1);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % portfolio.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + portfolio.length) % portfolio.length);

  const displayItems = [];
  for (let i = 0; i < Math.min(visibleCount, portfolio.length); i++) {
    displayItems.push(portfolio[(currentIndex + i) % portfolio.length]);
  }

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {displayItems.map((item, idx) => (
            <motion.div
              key={`${item.id}-${(currentIndex + idx) % portfolio.length}`}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-gray-800/50 hover:border-blue-500/30 transition-all group flex-1 min-w-0"
            >
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 bg-blue-900/20 text-blue-400 text-[10px] font-bold rounded-full mb-4">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="pt-6 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">성공 지표</span>
                <span className="text-xs font-bold text-blue-500 text-right">{item.metrics}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {portfolio.length > visibleCount && (
        <div className="flex justify-center mt-10 space-x-4">
          <button onClick={prev} className="w-10 h-10 rounded-full bg-gray-800 text-white shadow-md flex items-center justify-center hover:bg-blue-600 transition-all">
            <ChevronLeft size={20} />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full bg-gray-800 text-white shadow-md flex items-center justify-center hover:bg-blue-600 transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const TestimonialCarousel = ({ testimonials }: { testimonials: any[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [visibleCount, setVisibleCount] = React.useState(3);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Infinite loop logic for display
  const displayItems = [];
  for (let i = 0; i < visibleCount; i++) {
    displayItems.push(testimonials[(currentIndex + i) % testimonials.length]);
  }

  return (
    <div className="relative">
      <div className="flex gap-6 transition-all duration-500 ease-in-out overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {displayItems.map((t, idx) => (
            <motion.div
              key={`${t.id}-${(currentIndex + idx) % testimonials.length}`}
              layout
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white p-8 rounded-3xl shadow-sm flex-1 min-w-0"
            >
              <div className="flex mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-base text-gray-700 italic mb-6 line-clamp-4">"{t.content}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-full mr-3 overflow-hidden">
                  {t.avatarUrl ? (
                    <img src={t.avatarUrl} alt={t.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <div className="w-full h-full primary-bg flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {testimonials.length > visibleCount && (
        <div className="flex justify-center mt-10 space-x-4">
          <button 
            onClick={prev}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
};

const TermsPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">이용약관</h1>
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            본 약관은 더소유마케팅(이하 '회사'라 함)이 운영하는 웹사이트에서 제공하는 서비스(이하 '서비스'라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제1조 (목적)</h2>
            <p>본 약관은 회사가 제공하는 마케팅 상담 및 관련 서비스의 이용 조건 및 절차에 관한 기본적인 사항을 정함을 목적으로 합니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제2조 (용어의 정의)</h2>
            <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>'이용자'란 회사의 웹사이트에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 말합니다.</li>
              <li>'서비스'란 회사가 웹사이트를 통해 이용자에게 제공하는 상담 신청, 정보 제공 등의 모든 서비스를 말합니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제3조 (약관의 명시와 개정)</h2>
            <p>회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 웹사이트의 초기 서비스 화면에 게시합니다. 회사는 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제4조 (서비스의 제공 및 변경)</h2>
            <p>회사는 이용자에게 마케팅 상담 신청 접수, 마케팅 관련 정보 제공 등의 서비스를 제공합니다. 회사는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 서비스의 내용을 변경할 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제5조 (이용자의 의무)</h2>
            <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>상담 신청 시 허위 내용의 등록</li>
              <li>타인의 정보 도용</li>
              <li>회사가 게시한 정보의 변경</li>
              <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제6조 (개인정보보호)</h2>
            <p>회사는 이용자의 개인정보 수집 시 서비스 제공을 위하여 필요한 최소한의 개인정보를 수집합니다. 상세한 사항은 별도의 '개인정보처리방침'을 따릅니다.</p>
          </section>

          <p className="pt-8 border-t border-gray-100 text-sm text-gray-500">
            본 약관은 2026년 3월 18일부터 시행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

const PrivacyPage = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">개인정보처리방침</h1>
        <div className="prose prose-blue max-w-none text-gray-700 leading-relaxed space-y-6">
          <p>
            더소유마케팅(이하 '회사'라 함)은 개인정보보호법 등 관련 법령에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
          </p>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제1조 (개인정보의 처리 목적 및 항목)</h2>
            <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>수집 목적:</strong> 서비스 문의 응대, 상담 제공, 마케팅 정보 제공</li>
              <li><strong>수집 항목(필수):</strong> 성함, 연락처, 브랜드명/계정명, 이메일 주소, 상담 상세 내용</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제2조 (개인정보의 처리 및 보유 기간)</h2>
            <p>회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>보유 및 이용 기간: 수집일로부터 1년</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제3조 (개인정보의 제3자 제공에 관한 사항)</h2>
            <p>회사는 이용자의 개인정보를 제1조(개인정보의 처리 목적 및 항목)에서 명시한 범위 내에서만 처리하며, 이용자의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>제3자 제공 현황: 해당 사항 없음</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제4조 (개인정보 처리의 위탁에 관한 사항)</h2>
            <p>회사는 원활한 개인정보 업무처리를 위하여 개인정보 처리업무를 위탁하고 있지 않습니다. 향후 위탁 업무 발생 시, 관련 법령에 따라 본 개인정보 처리방침을 통해 공개하도록 하겠습니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>처리 위탁 현황: 해당 사항 없음</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제5조 (개인정보의 파기절차 및 파기방법)</h2>
            <p>회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>파기절차:</strong> 목적 달성 후 내부 방침 및 관련 법령에 따라 파기</li>
              <li><strong>파기방법:</strong> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제하며, 이메일 등 통신 기록은 즉시 삭제 처리함</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">제6조 (개인정보 보호책임자)</h2>
            <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="bg-gray-50 p-4 rounded-lg space-y-1">
              <p><strong>성명:</strong> 이소정</p>
              <p><strong>직책:</strong> 대표</p>
              <p><strong>연락처:</strong> thesoyoumk@naver.com</p>
            </div>
          </section>

          <p className="pt-8 border-t border-gray-100 text-sm text-gray-500">
            본 방침은 2026년 3월 18일부터 시행됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const { data } = useSiteData();
  const [formStatus, setFormStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('https://formspree.io/f/mdawpqgd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const marketingKeywords = [
    { text: 'REELS', size: 'text-4xl', color: 'text-gray-400', top: '10%', left: '5%', delay: 0 },
    { text: 'STORY', size: 'text-5xl', color: 'text-gray-500', top: '20%', left: '70%', delay: 1 },
    { text: 'FOLLOWER', size: 'text-3xl', color: 'text-blue-300', top: '5%', left: '40%', delay: 2 },
    { text: 'HASHTAG', size: 'text-xl', color: 'text-gray-600', top: '15%', left: '50%', delay: 0.5 },
    { text: 'EXPLORE', size: 'text-4xl', color: 'text-gray-400', top: '30%', left: '80%', delay: 1.5 },
    { text: 'FEED', size: 'text-2xl', color: 'text-blue-200', top: '40%', left: '10%', delay: 2.5 },
    { text: 'DM', size: 'text-3xl', color: 'text-gray-500', top: '50%', left: '60%', delay: 0.2 },
    { text: 'INFLUENCER', size: 'text-2xl', color: 'text-gray-600', top: '60%', left: '20%', delay: 1.2 },
    { text: 'ENGAGEMENT', size: 'text-4xl', color: 'text-blue-300', top: '70%', left: '75%', delay: 2.2 },
    { text: 'CONTENT', size: 'text-3xl', color: 'text-gray-400', top: '80%', left: '30%', delay: 0.8 },
    { text: 'ALGORITHM', size: 'text-2xl', color: 'text-gray-500', top: '85%', left: '50%', delay: 1.8 },
    { text: 'PROFILE', size: 'text-4xl', color: 'text-blue-200', top: '15%', left: '25%', delay: 2.8 },
    { text: 'INSIGHTS', size: 'text-5xl', color: 'text-gray-400', top: '65%', left: '5%', delay: 0.4 },
    { text: 'TAG', size: 'text-2xl', color: 'text-gray-600', top: '45%', left: '85%', delay: 1.4 },
    { text: 'MENTION', size: 'text-3xl', color: 'text-blue-300', top: '75%', left: '45%', delay: 2.4 },
    { text: 'LIVE', size: 'text-xl', color: 'text-gray-500', top: '25%', left: '15%', delay: 0.6 },
    { text: 'BOOMERANG', size: 'text-4xl', color: 'text-gray-400', top: '55%', left: '35%', delay: 1.6 },
    { text: 'LAYOUT', size: 'text-5xl', color: 'text-blue-200', top: '35%', left: '55%', delay: 2.6 },
    { text: 'FILTER', size: 'text-2xl', color: 'text-gray-600', top: '90%', left: '10%', delay: 0.9 },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[95vh] flex items-center overflow-hidden bg-white border-b border-gray-100">
        {/* Animated Background Elements - Word Cloud Style */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {marketingKeywords.map((kw, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.2, 0.1],
                x: [0, 20, 0],
                y: [0, -20, 0]
              }}
              transition={{ 
                duration: 8 + Math.random() * 5, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: kw.delay 
              }}
              className={cn(
                "absolute font-black tracking-tighter select-none",
                kw.size,
                kw.color
              )}
              style={{ top: kw.top, left: kw.left }}
            >
              {kw.text}
            </motion.div>
          ))}
          
          {/* Large Background Gradients */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-15%] right-[-10%] w-[70%] h-[70%] bg-blue-50 rounded-full blur-[120px] opacity-40" 
          />
          
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, -30, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-gray-100 rounded-full blur-[120px] opacity-30" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider primary-text bg-blue-50 rounded-full shadow-sm"
              >
                INSTAGRAM MARKETING EXPERT
              </motion.span>
              
              <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-8 tracking-tighter uppercase">
                <span className="block text-blue-600">THESOYOU</span>
                <span className="block text-black">MARKETING</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 leading-relaxed font-medium max-w-2xl">
                {data.settings.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="#contact"
                  className="w-full sm:w-auto px-10 py-5 primary-bg text-white rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-blue-200 transition-all flex items-center justify-center group"
                >
                  상담 신청하기 
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">전문 마케팅 서비스</h2>
            <p className="text-gray-600">당신의 비즈니스 성장을 위한 최적의 솔루션을 제안합니다.</p>
          </div>

          <ServiceCarousel services={data.services} />
        </div>
      </section>

      {/* Portfolio Section (Success Stories) */}
      <section id="portfolio" className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-sm font-bold primary-text uppercase tracking-widest mb-4 block">SUCCESS STORIES</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-0">더소유와 함께한 성공의 기록</h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-400 text-lg leading-relaxed">
                수많은 브랜드들이 더소유마케팅의 전략을 통해 인스타그램에서의 확실한 성장을 경험했습니다.
              </p>
            </div>
          </div>

          <PortfolioCarousel portfolio={data.portfolio} />
        </div>
      </section>

      {/* Testimonials Slider */}
      <section id="testimonials" className="py-24 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">고객 후기</h2>
            <p className="text-gray-600">실제 파트너사들이 경험한 변화입니다.</p>
          </div>

          <TestimonialCarousel testimonials={data.testimonials} />
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1a1a1a] rounded-[2.5rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
            {/* Left Side: Blue Info */}
            <div className="lg:w-[42%] primary-bg p-12 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                성장의 시작, 지금 바로 문의하세요.
              </h2>
              <p className="text-blue-100 mb-12 leading-relaxed">
                귀하의 브랜드에 가장 적합한 마케팅 전략을 제안해 드립니다.<br />
                전문 컨설턴트가 24시간 이내에 답변해 드립니다.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70 mb-1">PHONE</div>
                    <div className="text-xl font-bold">{data.settings.contactPhone}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest opacity-70 mb-1">EMAIL</div>
                    <div className="text-sm md:text-xl font-bold break-all">{data.settings.contactEmail}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex-1 p-12 md:p-16 bg-[#1a1a1a]">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2">성함 / 담당자명</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="홍길동"
                      className="w-full bg-[#242424] border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2">연락처</label>
                    <input 
                      type="text" 
                      name="phone"
                      required
                      placeholder="010-0000-0000"
                      className="w-full bg-[#242424] border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">회사명 / 브랜드명</label>
                  <input 
                    type="text" 
                    name="brand"
                    placeholder="더소유마케팅"
                    className="w-full bg-[#242424] border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-blue-500 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2">문의 내용</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder="문의하실 내용을 입력해 주세요."
                    className="w-full bg-[#242424] border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:border-blue-500 outline-none transition-all resize-none"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className={cn(
                    "w-full py-4 rounded-xl font-bold text-lg text-white flex items-center justify-center transition-all",
                    formStatus === 'loading' ? "bg-gray-700 cursor-not-allowed" : "primary-bg hover:shadow-lg hover:shadow-blue-900/20"
                  )}
                >
                  {formStatus === 'loading' ? '전송 중...' : '상담 신청하기'} 
                  {formStatus !== 'loading' && <Send className="ml-2 w-5 h-5" />}
                </button>

                {formStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-blue-400 font-bold text-center text-sm"
                  >
                    문의가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.
                  </motion.p>
                )}

                {formStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 font-bold text-center text-sm"
                  >
                    전송 중 오류가 발생했습니다. 다시 시도해 주세요.
                  </motion.p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Admin Dashboard ---

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { data } = useSiteData();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: '대시보드', path: '/admin' },
    { icon: Instagram, label: '서비스 관리', path: '/admin/services' },
    { icon: Star, label: '성공 사례 관리', path: '/admin/portfolio' },
    { icon: Users, label: '고객 후기 관리', path: '/admin/testimonials' },
    { icon: SettingsIcon, label: '사이트 설정', path: '/admin/settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
          <div className="w-8 h-8 primary-bg rounded flex items-center justify-center">
            <Instagram className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg">Admin Panel</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  isActive ? "primary-bg text-white shadow-lg shadow-blue-100" : "text-gray-500 hover:bg-gray-100"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link to="/" className="flex items-center space-x-3 px-4 py-3 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
            <ChevronRight className="w-5 h-5 rotate-180" />
            <span>사이트로 돌아가기</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-10">
        <header className="mb-10 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {menuItems.find(m => m.path === location.pathname)?.label || '관리자'}
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-bold">관리자 계정</div>
              <div className="text-xs text-gray-400">admin@thesoyou.com</div>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">A</div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
};

const AdminDashboard = () => {
  const { data } = useSiteData();
  
  const stats = [
    { label: '전체 게시글', value: data.posts.length, icon: FileText, color: 'bg-blue-500' },
    { label: '서비스 항목', value: data.services.length, icon: Star, color: 'bg-purple-500' },
    { label: '포트폴리오', value: data.portfolio.length, icon: Instagram, color: 'bg-pink-500' },
    { label: '고객 후기', value: data.testimonials.length, icon: Users, color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white", stat.color)}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
            <div className="text-3xl font-bold">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">최근 게시글</h3>
          <div className="space-y-4">
            {data.posts.slice(0, 3).map(post => (
              <div key={post.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <div className="font-bold">{post.title}</div>
                  <div className="text-xs text-gray-400">{post.date}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold mb-6">사이트 설정 요약</h3>
          <div className="space-y-4">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-400">브랜드명</span>
              <span className="font-medium">{data.settings.brandName}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-400">테마 색상</span>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: data.settings.primaryColor }} />
                <span className="font-medium">{data.settings.primaryColor}</span>
              </div>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-400">연락처</span>
              <span className="font-medium">{data.settings.contactPhone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminServices = () => {
  const { data, addService, updateService, deleteService } = useSiteData();
  const [isAdding, setIsAdding] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [newItem, setNewItem] = React.useState({ title: '', description: '', icon: 'Instagram' });
  const [editItem, setEditItem] = React.useState({ title: '', description: '', icon: 'Instagram' });

  const handleAdd = () => {
    if (!newItem.title || !newItem.description) return;
    addService(newItem);
    setNewItem({ title: '', description: '', icon: 'Instagram' });
    setIsAdding(false);
  };

  const startEdit = (service: any) => {
    setEditingId(service.id);
    setEditItem({ title: service.title, description: service.description, icon: service.icon });
  };

  const handleUpdate = () => {
    if (!editingId) return;
    updateService(editingId, editItem);
    setEditingId(null);
  };

  const iconOptions = [
    { name: 'Instagram', icon: Instagram },
    { name: 'Users', icon: Users },
    { name: 'Star', icon: Star },
    { name: 'BarChart3', icon: BarChart3 },
    { name: 'MessageCircle', icon: MessageCircle },
    { name: 'Globe', icon: Globe },
    { name: 'CheckCircle2', icon: CheckCircle2 },
    { name: 'ArrowRight', icon: ArrowRight },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">서비스 목록 ({data.services.length})</h2>
        <button 
          onClick={() => { setIsAdding(true); setEditingId(null); }}
          className="px-4 py-2 primary-bg text-white rounded-lg flex items-center text-sm font-bold"
        >
          <Plus className="w-4 h-4 mr-2" /> 새 서비스 추가
        </button>
      </div>

      {(isAdding || editingId) && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <h3 className="text-lg font-bold mb-4">{editingId ? '서비스 수정' : '새 서비스 추가'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">서비스명</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.title : newItem.title}
                onChange={e => editingId ? setEditItem({ ...editItem, title: e.target.value }) : setNewItem({ ...newItem, title: e.target.value })}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
              <textarea 
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.description : newItem.description}
                onChange={e => editingId ? setEditItem({ ...editItem, description: e.target.value }) : setNewItem({ ...newItem, description: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">아이콘</label>
              <div className="grid grid-cols-4 gap-2">
                {iconOptions.map(opt => (
                  <button
                    key={opt.name}
                    onClick={() => editingId ? setEditItem({ ...editItem, icon: opt.name }) : setNewItem({ ...newItem, icon: opt.name })}
                    className={cn(
                      "p-3 rounded-lg border flex flex-col items-center justify-center space-y-1 transition-all",
                      (editingId ? editItem.icon === opt.name : newItem.icon === opt.name)
                        ? "primary-bg text-white border-transparent"
                        : "border-gray-100 hover:bg-gray-50 text-gray-500"
                    )}
                  >
                    <opt.icon className="w-5 h-5" />
                    <span className="text-[10px]">{opt.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="px-6 py-2 text-gray-500 font-medium">취소</button>
            <button onClick={editingId ? handleUpdate : handleAdd} className="px-6 py-2 primary-bg text-white rounded-lg font-bold">
              {editingId ? '수정 완료' : '추가하기'}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.services.map(service => {
          const IconComponent = iconOptions.find(o => o.name === service.icon)?.icon || Instagram;
          return (
            <div key={service.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <IconComponent className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">{service.title}</h4>
                <p className="text-gray-500 text-sm line-clamp-2">{service.description}</p>
              </div>
              <div className="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => startEdit(service)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                <button onClick={() => deleteService(service.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AdminPortfolio = () => {
  const { data, addPortfolio, updatePortfolio, deletePortfolio } = useSiteData();
  const [isAdding, setIsAdding] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [newItem, setNewItem] = React.useState({ title: '', category: '', metrics: '' });
  const [editItem, setEditItem] = React.useState({ title: '', category: '', metrics: '' });

  const handleAdd = () => {
    if (!newItem.title || !newItem.metrics) return;
    addPortfolio(newItem);
    setNewItem({ title: '', category: '', metrics: '' });
    setIsAdding(false);
  };

  const startEdit = (item: any) => {
    setEditingId(item.id);
    setEditItem({ title: item.title, category: item.category, metrics: item.metrics });
  };

  const handleUpdate = () => {
    if (!editingId) return;
    updatePortfolio(editingId, editItem);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">성공 사례 목록 ({data.portfolio.length})</h2>
        <button 
          onClick={() => { setIsAdding(true); setEditingId(null); }}
          className="px-4 py-2 primary-bg text-white rounded-lg flex items-center text-sm font-bold"
        >
          <Plus className="w-4 h-4 mr-2" /> 새 성공 사례 추가
        </button>
      </div>

      {(isAdding || editingId) && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <h3 className="text-lg font-bold mb-4">{editingId ? '성공 사례 수정' : '새 성공 사례 추가'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
              <input 
                type="text" 
                placeholder="예: A 뷰티 브랜드 런칭 캠페인"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.title : newItem.title}
                onChange={e => editingId ? setEditItem({ ...editItem, title: e.target.value }) : setNewItem({ ...newItem, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
              <input 
                type="text" 
                placeholder="예: 계정 육성 & 인플루언서"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.category : newItem.category}
                onChange={e => editingId ? setEditItem({ ...editItem, category: e.target.value }) : setNewItem({ ...newItem, category: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">성공 지표 (파란색으로 표시됨)</label>
              <input 
                type="text" 
                placeholder="예: 팔로워 1.2만 돌파, 매출 300% 성장"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-blue-600 font-bold"
                value={editingId ? editItem.metrics : newItem.metrics}
                onChange={e => editingId ? setEditItem({ ...editItem, metrics: e.target.value }) : setNewItem({ ...newItem, metrics: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="px-6 py-2 text-gray-500 font-medium">취소</button>
            <button onClick={editingId ? handleUpdate : handleAdd} className="px-6 py-2 primary-bg text-white rounded-lg font-bold">
              {editingId ? '수정 완료' : '추가하기'}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.portfolio.map(item => (
          <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-start group">
            <div className="flex-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{item.category}</span>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase">성공 지표:</span>
                <p className="text-sm font-bold text-blue-600">{item.metrics}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <button 
                onClick={() => startEdit(item)}
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Edit className="w-5 h-5" />
              </button>
              <button 
                onClick={() => deletePortfolio(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminTestimonials = () => {
  const { data, addTestimonial, updateTestimonial, deleteTestimonial } = useSiteData();
  const [isAdding, setIsAdding] = React.useState(false);
  const [editingId, setEditingId] = React.useState<string | null>(null);
  const [newItem, setNewItem] = React.useState({ name: '', company: '', content: '', rating: 5, avatarUrl: '' });
  const [editItem, setEditItem] = React.useState({ name: '', company: '', content: '', rating: 5, avatarUrl: '' });

  const handleAdd = () => {
    if (!newItem.name || !newItem.content) return;
    addTestimonial(newItem);
    setNewItem({ name: '', company: '', content: '', rating: 5, avatarUrl: '' });
    setIsAdding(false);
  };

  const startEdit = (t: any) => {
    setEditingId(t.id);
    setEditItem({ name: t.name, company: t.company, content: t.content, rating: t.rating, avatarUrl: t.avatarUrl || '' });
  };

  const handleUpdate = () => {
    if (!editingId) return;
    updateTestimonial(editingId, editItem);
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">고객 후기 목록 ({data.testimonials.length})</h2>
        <button 
          onClick={() => { setIsAdding(true); setEditingId(null); }}
          className="px-4 py-2 primary-bg text-white rounded-lg flex items-center text-sm font-bold"
        >
          <Plus className="w-4 h-4 mr-2" /> 새 후기 추가
        </button>
      </div>

      {(isAdding || editingId) && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <h3 className="text-lg font-bold mb-4">{editingId ? '후기 수정' : '새 후기 추가'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">고객명</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.name : newItem.name}
                onChange={e => editingId ? setEditItem({ ...editItem, name: e.target.value }) : setNewItem({ ...newItem, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">회사/직함</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.company : newItem.company}
                onChange={e => editingId ? setEditItem({ ...editItem, company: e.target.value }) : setNewItem({ ...newItem, company: e.target.value })}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">사진 URL (선택사항)</label>
              <input 
                type="text" 
                placeholder="https://..."
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.avatarUrl : newItem.avatarUrl}
                onChange={e => editingId ? setEditItem({ ...editItem, avatarUrl: e.target.value }) : setNewItem({ ...newItem, avatarUrl: e.target.value })}
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">후기 내용</label>
              <textarea 
                rows={3}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={editingId ? editItem.content : newItem.content}
                onChange={e => editingId ? setEditItem({ ...editItem, content: e.target.value }) : setNewItem({ ...newItem, content: e.target.value })}
              />
            </div>
          </div>
          <div className="flex justify-end space-x-3 pt-4">
            <button onClick={() => { setIsAdding(false); setEditingId(null); }} className="px-6 py-2 text-gray-500 font-medium">취소</button>
            <button onClick={editingId ? handleUpdate : handleAdd} className="px-6 py-2 primary-bg text-white rounded-lg font-bold">
              {editingId ? '수정 완료' : '추가하기'}
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-6">
        {data.testimonials.map(t => (
          <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                {t.avatarUrl ? <img src={t.avatarUrl} className="w-full h-full object-cover" /> : <div className="w-full h-full primary-bg" />}
              </div>
              <div>
                <div className="font-bold">{t.name} <span className="text-xs text-gray-400 font-normal ml-2">{t.company}</span></div>
                <p className="text-sm text-gray-500 line-clamp-1">{t.content}</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <button onClick={() => startEdit(t)} className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-5 h-5" /></button>
              <button onClick={() => deleteTestimonial(t.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-5 h-5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminPosts = () => {
  const { data, addPost, deletePost } = useSiteData();
  const [isAdding, setIsAdding] = React.useState(false);
  const [newPost, setNewPost] = React.useState({ title: '', content: '', category: '마케팅 뉴스' });

  const handleAdd = () => {
    if (!newPost.title || !newPost.content) return;
    addPost(newPost);
    setNewPost({ title: '', content: '', category: '마케팅 뉴스' });
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">게시글 목록 ({data.posts.length})</h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="px-4 py-2 primary-bg text-white rounded-lg flex items-center text-sm font-bold"
        >
          <Plus className="w-4 h-4 mr-2" /> 새 게시글 작성
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-4">
          <h3 className="text-lg font-bold mb-4">새 게시글 작성</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={newPost.title}
                onChange={e => setNewPost({ ...newPost, title: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
              <select 
                className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none"
                value={newPost.category}
                onChange={e => setNewPost({ ...newPost, category: e.target.value })}
              >
                <option>마케팅 뉴스</option>
                <option>팁 & 가이드</option>
                <option>공지사항</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              value={newPost.content}
              onChange={e => setNewPost({ ...newPost, content: e.target.value })}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button onClick={() => setIsAdding(false)} className="px-6 py-2 text-gray-500 font-medium">취소</button>
            <button onClick={handleAdd} className="px-6 py-2 primary-bg text-white rounded-lg font-bold">저장하기</button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-sm font-bold text-gray-500">제목</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-500">카테고리</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-500">작성일</th>
              <th className="px-6 py-4 text-sm font-bold text-gray-500 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.posts.map(post => (
              <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium">{post.title}</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-md">{post.category}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">{post.date}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><Edit className="w-4 h-4" /></button>
                  <button onClick={() => deletePost(post.id)} className="p-2 text-gray-400 hover:text-red-600 transition-colors"><Trash2 className="w-4 h-4" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AdminSettings = () => {
  const { data, updateSettings } = useSiteData();
  const [settings, setSettings] = React.useState(data.settings);

  const handleSave = () => {
    updateSettings(settings);
    alert('설정이 저장되었습니다.');
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h3 className="text-xl font-bold border-b border-gray-50 pb-4">기본 정보 설정</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">브랜드 이름</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.brandName}
              onChange={e => setSettings({ ...settings, brandName: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">테마 포인트 컬러</label>
            <div className="flex space-x-2">
              <input 
                type="color" 
                className="h-10 w-10 border-none p-0 cursor-pointer"
                value={settings.primaryColor}
                onChange={e => setSettings({ ...settings, primaryColor: e.target.value })}
              />
              <input 
                type="text" 
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.primaryColor}
                onChange={e => setSettings({ ...settings, primaryColor: e.target.value })}
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">메인 히어로 제목</label>
            <textarea 
              rows={2}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.heroTitle}
              onChange={e => setSettings({ ...settings, heroTitle: e.target.value })}
            />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">메인 히어로 부제목</label>
            <textarea 
              rows={2}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.heroSubtitle}
              onChange={e => setSettings({ ...settings, heroSubtitle: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <h3 className="text-xl font-bold border-b border-gray-50 pb-4">연락처 및 소셜 정보</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">이메일</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.contactEmail}
              onChange={e => setSettings({ ...settings, contactEmail: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">전화번호</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.contactPhone}
              onChange={e => setSettings({ ...settings, contactPhone: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">인스타그램 URL</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.instagramUrl}
              onChange={e => setSettings({ ...settings, instagramUrl: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">카카오톡 채널 URL</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.kakaoUrl}
              onChange={e => setSettings({ ...settings, kakaoUrl: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button 
          onClick={handleSave}
          className="px-10 py-4 primary-bg text-white rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-200 transition-all"
        >
          설정 저장하기
        </button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <SiteDataProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              <Route path="/admin/services" element={<AdminLayout><AdminServices /></AdminLayout>} />
              <Route path="/admin/portfolio" element={<AdminLayout><AdminPortfolio /></AdminLayout>} />
              <Route path="/admin/testimonials" element={<AdminLayout><AdminTestimonials /></AdminLayout>} />
              <Route path="/admin/posts" element={<AdminLayout><AdminPosts /></AdminLayout>} />
              <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
            </Routes>
          </main>
          <Footer />
        </div>
        
        <FloatingButton />
        <ThemeInjector />
      </Router>
    </SiteDataProvider>
  );
}

const FloatingButton = () => {
  const { data } = useSiteData();
  return (
    <a 
      href={data.settings.kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#fae100] text-[#3c1e1e] px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 font-bold hover:scale-105 transition-transform"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span>실시간 상담</span>
    </a>
  );
};

const ThemeInjector = () => {
  const { data } = useSiteData();
  return (
    <style>
      {`
        :root {
          --primary: ${data.settings.primaryColor};
        }
      `}
    </style>
  );
};
