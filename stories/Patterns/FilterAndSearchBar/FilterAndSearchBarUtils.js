export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        return "Category";
      case "ukrainian":
        return "Категорія";
      case "arabic":
        const arabicText = "فئة";
        return arabicText;
      case "burmese":
        const burmeseText = "အမျိုးအစား";
        return burmeseText;
      case "japanese":
        const japaneseText = "カテゴリー";
        return japaneseText;
      default:
        return "Category";
    }
  };
  export const getCaptionForClearLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = "Clear All";
        return engText;
      case "ukrainian":
        return "Очистити все";
      case "arabic":
        const arabicText = "امسح الكل";
        return arabicText;
      case "burmese":
        const burmeseText = "အားလုံးကိုရှင်း";
        return burmeseText;
      case "japanese":
        const japaneseText = "すべてクリア";
        return japaneseText;
      default:
        return "Clear All";
    }
  };
  export const getCaptionForActiveLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = "Active Filters:";
        return engText;
      case "ukrainian":
        return "Активні фільтри:";
      case "arabic":
        const arabicText = "عوامل التصفية النشطة:";
        return arabicText;
      case "burmese":
        const burmeseText = "အသက်ဝင်သော စစ်ထုတ်မှုများ:";
        return burmeseText;
      case "japanese":
        const japaneseText = "すべてクリア:";
        return japaneseText;
      default:
        return "Active Filters:";
    }
  };
  
  export const getButtonForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = { close: "Close", sort: "Search and filter" };
        return engText;
      case "ukrainian":
        const ukText = { close: "Закрити", sort: "Пошук і фільтр" };
        return ukText;
      case "arabic":
        const arabicText = { close: "قريب", sort: "البحث والتصفية" };
        return arabicText;
      case "burmese":
        const burmeseText = { close: "ပိတ်လိုက်", sort: "ရှာဖွေပြီး စစ်ထုတ်ပါ။" };
        return burmeseText;
      case "japanese":
        const japaneseText = { close: "選ぶ", sort: "検索とフィルタリング" };
        return japaneseText;
      default:
        return { close: "Close", sort: "Search and filter" };
    }
  };