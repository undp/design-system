export const statsArray = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          data: [
            {
              percentname: "very long Percent subline",
              numbername: "35",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Countries",
              numbername: "17",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Percent",
              numbername: "35",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Programs",
              numbername: "10",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Years",
              numbername: "23",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Offices",
              numbername: "9",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        };
        return engText.data;
      case "ukrainian":
        const ukText = {
          data: [
            {
              percentname: "населення",
              numbername: "44 млн",
              text: "(Держстат, 2020)",
            },
            {
              percentname: "Індекс",
              numbername: "49",
              text: "гендерної нерівності: 52-га з 162 країн і територій (HDR 2021)",
            },
            {
              percentname: "місць",
              numbername: "21%",
              text: "у парламенті займають жінки (Парламент, 2019)",
            },
            {
              percentname: "населення",
              numbername: "44 млн",
              text: "(Держстат, 2020)",
            },
            {
              percentname: "Індекс",
              numbername: "49",
              text: "гендерної нерівності: 52-га з 162 країн і територій (HDR 2021)",
            },
            {
              percentname: "місць",
              numbername: "21%",
              text: "у парламенті займають жінки (Парламент, 2019)",
            },
          ],
        };
        return ukText.data;
      case "arabic":
        const arabicText = {
          data: [
            {
              percentname: "نسبه مئويه",
              numbername: "35",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
            {
              percentname: "بلدان",
              numbername: "17",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
            {
              percentname: "نسبه مئويه",
              numbername: "35",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
            {
              percentname: "البرامج",
              numbername: "10",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
            {
              percentname: "سنوات",
              numbername: "23",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
            {
              percentname: "مكاتب",
              numbername: "9",
              text: "الألم بحد ذاته هو الحب ، الزبون الرئيسي",
            },
          ],
        };
        return arabicText.data;
      case "burmese":
        const burmeseText = {
          data: [
            {
              percentname: "ရာခိုင်နှုန်း",
              numbername: "35",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
            {
              percentname: "နိုင်ငံတွေ",
              numbername: "17",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
            {
              percentname: "ရာခိုင်နှုန်း",
              numbername: "35",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
            {
              percentname: "အစီအစဉ်မျာ",
              numbername: "10",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
            {
              percentname: "နှစ်တွေ",
              numbername: "23",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
            {
              percentname: "ရုံးများ",
              numbername: "9",
              text: "နာကျင်မှုကိုယ်တိုင်ကအချစ်ကိုအဓိကဖောက်သည်ချသည်",
            },
          ],
        };
        return burmeseText.data;
      case "japanese":
        const japaneseText = {
          data: [
            {
              percentname: "パーセント",
              numbername: "35",
              text: "痛み自体は愛、主な顧客です",
            },
            {
              percentname: "国",
              numbername: "17",
              text: "痛み自体は愛、主な顧客です",
            },
            {
              percentname: "パーセント",
              numbername: "35",
              text: "痛み自体は愛、主な顧客です",
            },
            {
              percentname: "プログラム",
              numbername: "10",
              text: "痛み自体は愛、主な顧客です",
            },
            {
              percentname: "年",
              numbername: "23",
              text: "痛み自体は愛、主な顧客です",
            },
            {
              percentname: "オフィス",
              numbername: "9",
              text: "痛み自体は愛、主な顧客です",
            },
          ],
        };
        return japaneseText.data;
      default:
        const dummy = {
          data: [
            {
              percentname: "Percent",
              numbername: "35",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Countries",
              numbername: "17",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Percent",
              numbername: "35",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Programs",
              numbername: "10",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Years",
              numbername: "23",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              percentname: "Offices",
              numbername: "9",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        };
        return dummy.data;
    }
  };