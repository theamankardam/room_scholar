import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navbar 
        properties: "Properties",
        destination: "Destination",
        blog: "Blog",
        about: "About us",
        contact: "Contact",
        login: "Login",
        enquireNow: "Enquire Now",

        // HeroSection
        trustedBy: "Trusted by 15,000+ students",
        FindYourPerfect: "Find Your Perfect",
        StudentHome: "Student Home",
        inLondon: "in London",
        description:
          "Handpicked student accommodation near top universities. Safe, comfortable and hassle-free living.",
          
          // Search bar
          location: "Location",
          moveIn: "Move In",
          moveOut: "Move Out",
          budgetPerWeek: "Budget (per week)",
          search: "Search",
          trustedByTopStudents: "Trusted by students from top universities",
        },

    },

    zh: {
      translation: {
        // Navbar 
        properties: "房源",
        destination: "目的地",
        blog: "博客",
        about: "关于我们",
        contact: "联系我们",
        login: "登录",
        enquireNow: "立即咨询",

        // HeroSection
        trustedBy: "超过15,000名学生信赖",
        FindYourPerfect: "找到你理想的",
        StudentHome: "学生之家",
        inLondon: "在伦敦",
        description: "精选靠近顶尖大学的学生住宿，安全、舒适、无忧的生活体验。",

        // Search bar
        location: "位置",
        moveIn: "入住日期",
        moveOut: "退房日期",
        budgetPerWeek: "每周预算",
        search: "搜索",
        trustedByTopStudents: "深受顶尖大学学生信赖",


      },
    },
  },

  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;