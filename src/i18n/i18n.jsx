import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      all_categoriies: "Home page",
      about: "About us",
      product: "Products and serive",
      new: "News",
      experience: "experience",
      contract: "contract",
    },
  },
  vn: {
    translation: {
      all_categoriies: "Trang chủ",
      about: "Về chúng tôi",
      product: "Sản phẩm và dịch vụ",
      new: "Tin tức",
      experience: "Trải nghiệm",
      contract: "Liên hệ",
    },
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeVale: false,
  },
});
