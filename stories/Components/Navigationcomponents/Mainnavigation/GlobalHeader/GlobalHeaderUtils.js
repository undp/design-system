export const getNavLinks = (locale) => {
    switch (locale) {
      case "english":
        return [
          { label: "Who we are", id: "headerlink1", position: "left" },
          { label: "What we do", id: "headerlink2", position: "left" },
          { label: "Our Impact", id: "headerlink3", position: "right" },
          { label: "Get Involved", id: "headerlink4", position: "right" },
        ];
      case "ukrainian":
        return [
          { title: "ПРООН в Україні", id: "headerlink1", position: "left"  },
          { title: "Чим ми займаємося", id: "headerlink2", position: "left"  },
          { title: "Наші результати", id: "headerlink3", position: "right" },
          { title: "Долучайтеся", id: "headerlink4", position: "right" },
        ];
      case "arabic":
        return [
          { label: "من نحن", id: "headerlink1", position: "left" },
          { label: "الذي نفعله", id: "headerlink2", position: "left" },
          { label: "تأثيرنا", id: "headerlink3", position: "right" },
          { label: "شارك", id: "headerlink4", position: "right" },
        ];
      case "burmese":
        return [
          { label: "ငါတို့ဘယ်သူလဲ။", id: "headerlink1", position: "left" },
          { label: "ငါတို့ဘာလုပ်မလဲ။", id: "headerlink2", position: "left" },
          {
            label: "ကျွန်ုပ်တို့၏သက်ရောက်မှု",
            id: "headerlink3",
            position: "right",
          },
          { label: "ပါဝင်လိုက်ပါ။", id: "headerlink4", position: "right" },
        ];
      case "japanese":
        return [
          { label: "私たちは誰ですか", id: "headerlink1", position: "left" },
          { label: "私達がすること", id: "headerlink2", position: "left" },
          { label: "私たちの影響", id: "headerlink3", position: "right" },
          { label: "参加する", id: "headerlink4", position: "right" },
        ];
      default:
        return [
          { label: "Who we are", id: "headerlink1", position: "left" },
          { label: "What we do", id: "headerlink2", position: "left" },
          { label: "Our Impact", id: "headerlink3", position: "right" },
          { label: "Get Involved", id: "headerlink4", position: "right" },
        ];
    }
  };
  
  export const getSiteTitle = (locale) => {
    switch (locale) {
      case "english":
        return { label: "GLOBAL", span: "Site Title" };
      case "ukrainian":
        return { label: "ГЛОБАЛЬНИЙ", span: "Заголовок сайту" };
      case "arabic":
        return { label: "عالمي", span: "عنوان الموقع" };
      case "burmese":
        return { label: "ကမ္ဘာလုံးဆိုင်ရာ", span: "ငဆိုက်ခေါင်းစဉ်" };
      case "japanese":
        return { label: "グローバル", span: "ウェブサイト名" };
      default:
        return { label: "GLOBAL", span: "Site Title" };
    }
  };
  
  export const getLocationDataForLocale = (locale) => {
    switch (locale) {
      case "english":
        return { detail: "Locations" };
      case "ukrainian":
        return { detail: "Розташування" };
      case "arabic":
        return { detail: "المواقع" };
      case "burmese":
        return { detail: "နေရာမျာ" };
      case "japanese":
        return { detail: "場所" };
      default:
        return { detail: "Locations" };
    }
  };
  
  export const getBackForLocale = (locale) => {
    switch (locale) {
      case "english":
        return { detail: "Back" };
      case "ukrainian":
        return { detail: "назад" };
      case "arabic":
        return { detail: "الى الخلف" };
      case "burmese":
        return { detail: "ကျော" };
      case "japanese":
        return { detail: "戻る" };
      default:
        return { detail: "Back" };
    }
  };
  
  export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        return "Select Language";
      case "ukrainian":
        return "Оберіть мову";
      case "arabic":
        return "اختار اللغة";
      case "burmese":
        return "ဘာသာစကားကို ရွေးပါ။";
      case "japanese":
        return "言語を選択する";
      default:
        return "Category";
    }
  };
  
  export const getSelectlanguage = (locale) => {
    switch (locale) {
      case "english":
        return "Select Language";
      case "ukrainian":
        return "Оберіть мову";
      case "arabic":
        return "اختار اللغة";
      case "burmese":
        return "ဘာသာစကားကို ရွေးပါ။";
      case "japanese":
        return "言語を選択する";
      default:
        return "Select Language";
    }
  };
  
  export const menuData = (locale) => {
    switch (locale) {
      case "english":
        return [
          {
            text: "menu item",
          },
          {
            text: "menu item",
          },
        ];
      case "ukrainian":
        return [
          { text: "пункт меню" },
          { text: "пункт меню" },
        ];
      case "arabic":
        return [
          {
            text: "عنصر القائمة",
          },
          {
            text: "عنصر القائمة",
          },
        ];
      case "burmese":
        return [
          {
            text: "မီနူးပစ္စည်းများ",
          },
          {
            text: "မီနူးပစ္စည်းများ",
          },
        ];
      case "japanese":
        return [
          {
            text: "メニュー項目",
          },
          {
            text: "メニュー項目",
          },
        ];
      default:
        return [
          {
            text: "menu item",
          },
          {
            text: "menu item",
          },
        ];
    }
  };