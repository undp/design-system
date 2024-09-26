export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        blockquote:
          "“UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.”",
        cite: "—Firstname Lastname",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        blockquote:
          "“Мудра людина залишається на задньому плані й саме завдяки цьому опиняється попереду інших.”",
        cite: "—Лао Цзи",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        blockquote:
          "“يعمل برنامج الأمم المتحدة الإنمائي في حوالي 170 دولة ومنطقة ، مما يساعد على تحقيق القضاء على الفقر ، والحد من عدم المساواة والإقصاء”",
        cite: "-الاسم الاول الاسم الاخير",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        blockquote:
          "“UNDP သည်နိုင်ငံနှင့်နယ်မြေ ၁၇၀ ခန့်တွင်အလုပ်လုပ်ပြီးဆင်းရဲမွဲတေမှုပပျောက်ရေး၊ မညီမျှမှုများနှင့်ဖယ်ထုတ်မှုလျော့ချရန်ကူညီသည်။”",
        cite: "—ပထမနာမည် မျိုးနွယ်အမည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        blockquote:
          "“UNDPは約170の国と地域で活動しており、貧困の撲滅と不平等と排除の削減を支援しています”",
        cite: "—名前苗字",
      };
      return japaneseText;
    default:
      return {
        blockquote:
          "“UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.”",
        cite: "—Firstname Lastname",
      };
  }
};