export type Language = "en" | "zh";

export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      education: "Education",
      skills: "Skills",
    },
    profile: {
      title: "Frontend Developer",
      email: "Email",
      call: "Call",
      github: "GitHub",
      blog: "Blog",
    },
    about: {
      heading: "About Me",
      bio: "A Frontend developer with experience in building web applications using Angular and React. I'm passionate about learning new technologies and solving complex problems to deliver high-quality solutions. I enjoy sharing technical knowledge as a technical speaker and writing tech blogs to share insights and expertise.",
      highlights: [
        {
          title: "Frontend Expert",
          description: "Proficient in Angular & React with modern tooling",
        },
        {
          title: "Problem Solver",
          description: "Passionate about delivering high-quality solutions",
        },
        {
          title: "Team Player",
          description: "Experience collaborating with international teams",
        },
        {
          title: "Knowledge Sharer",
          description: "Technical speaker & tech blog writer",
        },
      ],
    },
    experience: {
      heading: "Work Experience",
      present: "Present",
      items: [
        {
          title: "Frontend Developer",
          company: "Galaxy Software Services",
          period: "November 2024 – Present",
          achievements: [
            "Developed SaaS applications including E-Form systems, case management systems, and integrated platform features",
            "Contributed to internal frontend component library, creating reusable and scalable components",
            "Designed iframe-based architecture to integrate core products with third-party services",
            "Implemented GitLab CI/CD pipelines with Docker-based development environments",
            "Collaborated on requirement analysis, frontend architecture design, and system optimization",
          ],
        },
        {
          title: "Frontend Developer",
          company: "Shinda Technology",
          period: "July 2023 – August 2024",
          achievements: [
            "Developed SaaS applications (E-commerce, EIP System) using Angular, RxJS, Tailwind, and Bootstrap",
            "Resolved cross-platform issues, ensuring adaptability across devices and browsers",
            "Optimized front-end performance through code refactoring and lazy loading",
            "Collaborated with international teams on complex projects",
            "Technical speaker for RxJS and Tailwind CSS sessions with 30+ attendees",
          ],
        },
      ],
    },
    skills: {
      heading: "Skills & Technologies",
      categories: [
        { title: "Languages", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
        { title: "CSS Framework/Tools", skills: ["SCSS", "Bootstrap", "Tailwind CSS", "Angular Material"] },
        { title: "Frameworks", skills: ["Angular", "React", "Node.js"] },
        { title: "Tools & Others", skills: ["Git", "GitHub", "GitLab", "Vite", "Vercel", "Tanstack Query", "Docker"] },
      ],
    },
    education: {
      heading: "Education & Certification",
      degree: "Bachelor of Food Science",
      university: "National Ilan University",
      universityPeriod: "June 2014 – September 2018",
      cert: "Full Stack Web Development",
      certSchool: "Alpha Camp",
      certPeriod: "October 2022 – April 2023",
    },
    footer: {
      connect: "Let's Connect",
      description: "I'm always open to discussing new opportunities and interesting projects.",
      rights: "All rights reserved.",
    },
  },
  zh: {
    nav: {
      about: "關於我",
      experience: "工作經歷",
      education: "學歷",
      skills: "技能",
    },
    profile: {
      title: "前端工程師",
      email: "電子郵件",
      call: "電話",
      github: "GitHub",
      blog: "部落格",
    },
    about: {
      heading: "關於我",
      bio: "具備使用 Angular 與 React 開發網頁應用程式的前端工程師。熱衷於學習新技術並解決複雜問題，致力於交付高品質的解決方案。喜歡擔任技術講師分享知識，並撰寫技術部落格分享見解與專業。",
      highlights: [
        {
          title: "前端專家",
          description: "熟練 Angular 與 React，掌握現代開發工具鏈",
        },
        {
          title: "問題解決者",
          description: "熱衷於交付高品質的解決方案",
        },
        {
          title: "團隊合作",
          description: "具備與國際團隊協作的經驗",
        },
        {
          title: "知識分享者",
          description: "技術講師 & 技術部落格作者",
        },
      ],
    },
    experience: {
      heading: "工作經歷",
      present: "至今",
      items: [
        {
          title: "前端工程師",
          company: "Galaxy Software Services",
          period: "2024年11月 – 至今",
          achievements: [
            "開發 SaaS 應用程式，包含電子表單系統、案件管理系統及整合平台功能",
            "貢獻內部前端元件庫，建立可重用且可擴展的元件",
            "設計基於 iframe 的架構，整合核心產品與第三方服務",
            "建置 GitLab CI/CD 流程，搭配 Docker 開發環境",
            "協作進行需求分析、前端架構設計與系統優化",
          ],
        },
        {
          title: "前端工程師",
          company: "新達科技",
          period: "2023年7月 – 2024年8月",
          achievements: [
            "使用 Angular、RxJS、Tailwind 與 Bootstrap 開發 SaaS 應用程式（電商、EIP 系統）",
            "解決跨平台問題，確保在不同裝置與瀏覽器的相容性",
            "透過程式碼重構與懶載入優化前端效能",
            "與國際團隊協作處理複雜專案",
            "擔任 RxJS 與 Tailwind CSS 技術分享講師，參與人數逾 30 人",
          ],
        },
      ],
    },
    skills: {
      heading: "技能與技術",
      categories: [
        { title: "程式語言", skills: ["HTML", "CSS", "JavaScript", "TypeScript"] },
        { title: "CSS 框架/工具", skills: ["SCSS", "Bootstrap", "Tailwind CSS", "Angular Material"] },
        { title: "前端框架", skills: ["Angular", "React", "Node.js"] },
        { title: "工具與其他", skills: ["Git", "GitHub", "GitLab", "Vite", "Vercel", "Tanstack Query", "Docker"] },
      ],
    },
    education: {
      heading: "學歷與認證",
      degree: "食品科學學士",
      university: "國立宜蘭大學",
      universityPeriod: "2014年6月 – 2018年9月",
      cert: "全端網頁開發",
      certSchool: "Alpha Camp",
      certPeriod: "2022年10月 – 2023年4月",
    },
    footer: {
      connect: "與我聯繫",
      description: "我隨時歡迎討論新的機會與有趣的專案。",
      rights: "版權所有。",
    },
  },
};

export type Translations = (typeof translations)["en"];
