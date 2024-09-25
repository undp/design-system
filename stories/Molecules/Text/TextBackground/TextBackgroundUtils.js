export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          header: ["Global", <br />, "Impact"],
          description:
            "Our work in sustainable development, governance, and resilience building.",
        };
        return engText;
      case "ukrainian":
        const ukText = {
          header: ["Фінансування", <br />, "та виконання бюджету"],
          description:
            "Для виконання свого мандату ПРООН повністю покладається на добровільні внески держав-членів ООН, багатосторонніх організацій, приватного сектору та інших джерел у формі необмежених регулярних (основних) ресурсів і внесків, виділених для конкретної теми, програми чи проєкту.",
        };
        return ukText;
      case "arabic":
        const arabicText = {
          header: ["عالمي", <br />, "تأثير"],
          description:
            "عملنا في التنمية المستدامة والحوكمة وبناء القدرة على الصمود.",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          header: ["ကမ္ဘာလုံးဆိုင်ရာ", <br />, "ထိခိုက်မှု"],
          description:
            "စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေး၊ အုပ်ချုပ်မှုနှင့် ခံနိုင်ရည်ရှိရေး တည်ဆောက်ရေးတို့တွင် ကျွန်ုပ်တို့၏ လုပ်ဆောင်မှုများ။",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          header: ["グローバル", <br />, "影響"],
          description:
            "持続可能な開発、ガバナンス、およびレジリエンス構築における私たちの仕事。",
        };
        return japaneseText;
      default:
        return {
          header: ["Global", <br />, "Impact"],
          description:
            "Our work in sustainable development, governance, and resilience building.",
        };
    }
  };