export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          paragraph:
            "Explicabo sequi dolorem. Inventore est saepe. Aut et dignissimos ab sed deserunt voluptatem. Commodi aliquid et provident. Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem.",
          text1: "Author summary",
          text2: "Firstname Lastname",
          text3: "Job title",
        };
        return engText;
      case "ukrainian":
        const ukText = {
          paragraph:
            "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
          text1: "Author summary",
          text2: "Наталiя Бойко",
          text3: "Керівник проекту",
        };
        return ukText;
      case "arabic":
        const arabicText = {
          paragraph:
            "سأشرح لك ألمي. غالبًا ما يكون مخترعًا. أو ، الأكثر جدارة ، ولكن التخلي عن اللذة. يقدمون شيئًا مفيدًا. تم تحسينها جميعًا ، لكن التمرين مزعج أيضًا. أو ، الأكثر جدارة ، ولكن التخلي عن اللذة.",
          text1: "ملخص المؤلف",
          text2: "الاسم الاول الاسم الاخير",
          text3: "عنوان وظيفي",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          paragraph:
            "Explico sequi dolorem est saepe ကို တီထွင်ပါ။ Aut et dignissimos ab sed deserunt voluptatem ။ ကုန်စည်ဒိုင် နှင့် အရည်များ။ Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem.",
          text1: "စာရေးသူ အကျဉ်းချုပ်",
          text2: "နံမည် နောက်ဆုံးအမည်",
          text3: "အလုပ်အကိုင်အမည်",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          paragraph:
            "私の痛みをあなたに説明します。彼はしばしば発明者です。または、最も価値があるが、喜びを放棄します。それらは何か有益なものを提供します。それらはすべて強化されていますが、演習も面倒です。または、最も価値があるが、喜びを放棄します。",
          text1: "著者の概要",
          text2: "名前苗字",
          text3: "職名",
        };
        return japaneseText;
      default:
        const dummy = {
          paragraph:
            "Explicabo sequi dolorem. Inventore est saepe. Aut et dignissimos ab sed deserunt voluptatem. Commodi aliquid et provident. Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem. ",
          text1: "Author summary",
          text2: "Firstname Lastname",
          text3: "Job title",
        };
        return dummy;
    }
  };