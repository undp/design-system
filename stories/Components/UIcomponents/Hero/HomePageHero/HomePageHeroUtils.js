import BackgroundImg from "../../../../assets/images/refugee.jpg";
import BackgroundImg2 from "../../../../assets/images/refugee2.jpg";
import BackgroundVideo from "../../../../assets/video/video_sample.mp4";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines ",
        btnlabel: "READ MORE",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis quis nibh in molestie. Proin fermentum eleifend erat eget eleifend. Duis in eros condimentum, pretium ligula.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titlename: "ПРООН",
        text: "Програма ПРООН із підвищення стійкості та відновлення ",
        btnlabel: "ЧИТАТИ ДАЛІ",
        subtitle:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titlename: "عنوان قصة البطل",
        text: "يوجد أدناه عنوان فرعي أو مقتطف من القصة ويتألف من سطرين",
        btnlabel: "اقرأ أكثر",
        subtitle:
          "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Cras mattis quis nibh في molestie. وهكذا كان المراهقون الدافئون هم احتياجات المراهقين. Duis in eros sauce سعر الملعقة.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titlename: "သူရဲကောင်းဇာတ်လမ်းခေါင်းစဉ်",
        text: "ဇာတ်လမ်း၏ ခေါင်းစဉ်ခွဲ သို့မဟုတ် ကောက်နုတ်ချက်သည် အောက်တွင်ရှိပြီး ၎င်းသည် စာကြောင်းနှစ်ကြောင်းဖြစ်သည်။",
        btnlabel: "ပိုပြီးဖတ်ပါ",
        subtitle:
          "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ Cras mattis quis nibh မုဒိန်းကျင့်ခံရခြင်း။ ထို့ကြောင့်နွေးထွေးသောဆယ်ကျော်သက်များသည်ဆယ်ကျော်သက်များ၏လိုအပ်ချက်များဖြစ်သည်။ Duis in eros ငံပြာရည် တစ်ဇွန်း၏စျေးနှုန်း။",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titlename: "ヒーローストーリーのタイトル",
        text: "ストーリーの字幕または抜粋は以下のとおりで、2行です",
        btnlabel: "続きを読む",
        subtitle:
          "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 Cras mattis quis nibh inmolestie。 したがって、暖かいティーンエイジャーはティーンエイジャーのニーズでした。 エロスソースの飲酒運転、スプーンの価格。",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
      return japaneseText;
    default:
      return {
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines",
        btnlabel: "READ MORE",
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis quis nibh in molestie. Proin fermentum eleifend erat eget eleifend. Duis in eros condimentum, pretium ligula.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg2,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
      };
  }
};