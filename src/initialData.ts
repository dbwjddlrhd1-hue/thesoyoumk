import { SiteData } from './types';

export const initialData: SiteData = {
  settings: {
    brandName: "더소유마케팅",
    heroTitle: "INSTAGRAM\nMARKETING",
    heroSubtitle: "팔로워 증대부터 계정 관리, 광고 대행까지 전문적인 솔루션을 제공합니다.",
    primaryColor: "#0047AB", // Royal Blue
    fontFamily: "'Pretendard', sans-serif",
    contactEmail: "thesoyoumk@naver.com",
    contactPhone: "010-3016-4524",
    instagramUrl: "https://instagram.com/thesoyou",
    kakaoUrl: "https://pf.kakao.com/_ZgLxhX"
  },
  services: [
    {
      id: "1",
      title: "팔로워 & 좋아요 증대",
      description: "타겟팅된 실제 유저 유입을 통해 계정의 영향력을 극대화합니다.",
      icon: "Users"
    },
    {
      id: "2",
      title: "계정 토탈 관리",
      description: "콘텐츠 기획부터 업로드, 소통까지 전문가가 직접 관리합니다.",
      icon: "Instagram"
    },
    {
      id: "3",
      title: "인플루언서 마케팅",
      description: "브랜드 이미지에 최적화된 인플루언서 매칭 및 캠페인을 진행합니다.",
      icon: "Star"
    },
    {
      id: "4",
      title: "광고 대행 (Meta Ads)",
      description: "정밀한 타겟팅 광고를 통해 최적의 ROAS를 달성합니다.",
      icon: "BarChart3"
    }
  ],
  portfolio: [
    {
      id: "1",
      title: "A 뷰티 브랜드 런칭 캠페인",
      category: "계정 육성 & 인플루언서",
      metrics: "팔로워 1.2만 돌파, 매출 300% 성장"
    },
    {
      id: "2",
      title: "B 패션 쇼핑몰 시즌 프로모션",
      category: "스폰서 광고",
      metrics: "ROAS 800% 달성, 신규 유입 5만 명"
    },
    {
      id: "3",
      title: "C 인테리어 디자인 스튜디오",
      category: "콘텐츠 제작 & 브랜딩",
      metrics: "문의 건수 250% 증가, 브랜드 인지도 상승"
    }
  ],
  testimonials: [
    {
      id: "1",
      name: "김민수",
      company: "카페 루미에르 대표",
      content: "더소유마케팅 덕분에 오픈 3개월 만에 지역 핫플레이스로 등극했습니다. 관리가 정말 꼼꼼해요.",
      rating: 5
    },
    {
      id: "2",
      name: "이지혜",
      company: "코스메틱 브랜드 마케팅 팀장",
      content: "광고 효율이 타 업체 대비 2배 이상 좋아졌습니다. 데이터 기반의 분석이 인상적입니다.",
      rating: 5
    }
  ],
  posts: [
    {
      id: "1",
      title: "2024년 인스타그램 알고리즘 변화와 대응 전략",
      content: "최근 릴스 비중이 높아지면서 알고리즘에도 큰 변화가 있었습니다. 이에 따른 새로운 전략을 소개합니다...",
      date: "2024-03-20",
      category: "마케팅 뉴스",
      author: "관리자"
    },
    {
      id: "2",
      title: "효과적인 해시태그 사용법 5가지",
      content: "해시태그는 단순히 많이 다는 것이 중요한 게 아닙니다. 타겟 도달을 위한 핵심 팁을 공개합니다.",
      date: "2024-03-15",
      category: "팁 & 가이드",
      author: "관리자"
    }
  ]
};
