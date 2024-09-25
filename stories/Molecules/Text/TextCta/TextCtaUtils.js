export const getCaptionForLocale = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          header: "Join Us in UNDP Partnership",
          description:
            "Partnership is at the heart of everything UNDP does. We offer a nearly universal presence across the world. We are determined to mobilize the means to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, with a focus on the poorest and most vulnerable.",
          button: "READ MORE",
        };
        return engText;
      case "ukrainian":
        const ukText = {
          header: "Стажування",
          description:
            "ПРООН в Україні пропонує студентам останніх курсів унікальну можливість отримати досвід роботи в ПРООН. Програма стажування допоможе отримати нові знання та зрозуміти цілі та принципи роботи ПРООН. До стажування заохочуються студенти, які спеціалізуються на вивченні процесів розвитку та мають досвід у сферах демократичного врядування, розбудови миру та відновлення та сталого розвитку.",
          button: "ЧИТАТИ ДАЛІ",
        };
        return ukText;
      case "arabic":
        const arabicText = {
          header: "انضم إلينا في شراكة برنامج الأمم المتحدة الإنمائية",
          description:
            "الشراكة هي جوهر كل ما يقوم به برنامج الأمم المتحدة الإنمائي. نحن نقدم حضورًا عالميًا تقريبًا في جميع أنحاء العالم. نحن مصممون على حشد الوسائل اللازمة لتنفيذ خطة عام 2030 من خلال شراكة عالمية متجددة من أجل التنمية المستدامة ، مع التركيز على الأشد فقرا وضعفا.",
          button: "انضم إلينا",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          header: "UNDP Partnership တွင် ကျွန်ုပ်တို့နှင့် ပူးပေါင်းပါ။",
          description:
            "UNDP ၏လုပ်ဆောင်မှုအားလုံး၏ အဓိကအချက်မှာ မိတ်ဖက်ဆက်ဆံရေးဖြစ်သည်။ ကျွန်ုပ်တို့သည် ကမ္ဘာတစ်ဝှမ်းရှိ စကြဝဠာနီးပါးတည်ရှိမှုကို ပေးဆောင်ပါသည်။ အဆင်းရဲဆုံးနှင့် ထိခိုက်လွယ်ဆုံးသူများကို အာရုံစိုက်ခြင်းဖြင့် စဉ်ဆက်မပြတ်ဖွံ့ဖြိုးတိုးတက်သော ကမ္ဘာလုံးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို ပြန်လည်အသက်သွင်းထားသော ကမ္ဘာလုံးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုမှတစ်ဆင့် 2030 အစီအစဉ်ကို အကောင်အထည်ဖော်ရန် နည်းလမ်းများကို စုစည်းရန် ကျွန်ုပ်တို့ ဆုံးဖြတ်ထားပါသည်။",
          button: "ငါတို့နဲ့လာပူးပေါင်းပါ",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          header: "UNDPパートナーシップにご参加ください",
          description:
            "パートナーシップは、UNDPが行うすべての中心です。私たちは世界中でほぼ普遍的な存在感を提供します。私たちは、最も貧しく最も脆弱な人々に焦点を当て、持続可能な開発のためのグローバルなパートナーシップを活性化することにより、2030アジェンダを実施するための手段を動員することを決意しています。",
          button: "参加しませんか",
        };
        return japaneseText;
      default:
        return {
          header: "Join Us in UNDP Partnership",
          description:
            "Partnership is at the heart of everything UNDP does. We offer a nearly universal presence across the world. We are determined to mobilize the means to implement the 2030 Agenda through a revitalized Global Partnership for Sustainable Development, with a focus on the poorest and most vulnerable.",
          button: "READ MORE",
        };
    }
  };