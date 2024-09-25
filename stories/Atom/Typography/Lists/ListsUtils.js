export const getCaptionForLocale = (locale) => {
    switch(locale) {
      case 'english': const engText = {data: [{
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  },
  {
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  },
  {
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  }]}; return engText.data;
      case "ukrainian":
        return [
            {
              label: "НАПРЯМ 1",
              text: "Можливості Уряду реагувати на кризові ситуації та вирішувати їх.",
            },
            {
              label: "НАПРЯМ 2",
              text: "Безперервне надання державних послуг.",
            },
            {
              label: "НАПРЯМ 3",
              text: "Аварійні роботи, що сприяють відновленню та відбудові.",
            },
        ];
      case 'arabic': const arabicText = {data: [{
    label : 'برنامج الأمم المتحدة الإنمائي',
    text : 'برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.'
  },
  {
    label : 'برنامج الأمم المتحدة الإنمائي',
    text : 'برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.'
  },
  {
    label : 'برنامج الأمم المتحدة الإنمائي',
    text : 'برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.'
  }]}; return arabicText.data;
      case 'burmese': const burmeseText = {data: [{
    label : 'ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်',
    text : 'ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။'
  },
  {
    label : 'ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်',
    text : 'ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။'
  },
  {
    label : 'ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်',
    text : 'ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။'
  }]}; return burmeseText.data;
      case 'japanese': const japaneseText = {data: [{
    label : '国連開発計画',
    text : '国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。'
  },
  {
    label : '国連開発計画',
    text : '国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。'
  },
  {
    label : '国連開発計画',
    text : '国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。'
  }]}; return japaneseText.data;
      default:
        const dummy =  {data: [{
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  },
  {
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  },
  {
    label : 'United Nations Development Programme',
    text : 'The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.'
  }]};
  return dummy.data
    }
  };
  