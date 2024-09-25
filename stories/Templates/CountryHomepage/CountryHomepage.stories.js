import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { CountryHomepage } from "./CountryHomepage";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/FooterUtils.js";
import { getCaptionForLocale as takeactioncard } from "../../Organism/Blocks/ImageRevealCards/ImageRevealCardsUtils.js";
import { getCaptionForLocale as contentcardimagesdata } from "../../Organism/Blocks/ContentCardWithAndWithoutImage/ContentCardWithAndWithoutImageUtils.js";
import BackgroundImg from "../../assets/images/country-hero-img.jpg";
import BackgroundVideo from "../../assets/video/video_sample.mp4";
import img from "../../assets/images/card2.jpg";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/CountrySiteHeader/CountrySiteHeaderUtils.js";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        titlename: [
          "Sierra Leone Youth",
          <br />,
          "Minister Launches ",
          <br />,
          "2020 Social Good Summit",
        ],
        text: "Sierra Leone",
        btnlabel: "READ MORE",
        subtitle:
          "As we ‘come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced…",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "SUCCESS STORY",
            contentname:
              "Communities score joint UNDP-WFP supported Peacebuilding Fund Project 80%",
            descriptionText:
              "Building peace and livelihoods to achieve and sustain development.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "Sierra Leone COVID-19: United Nations Socio-economic Response Plan Response",
            descriptionText:
              "A UN country plan to help position Sierra Leone on a surer path towards attaining sustainable development in the wake of COVID-19",
            button: "DOWNLOAD",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "Article",
            contentname:
              "72 small arms destroyed by rural communities in Sierra Leone with support from the ‘Weapons for Development’ Initiative",
            descriptionText:
              "The Weapons for Development initiative - OCWAR-T project is an ECOWAS project co-funded by the EU and the GFFO",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "COVID-19 Response",
            contentname:
              "UNDP Supports Joint Border Simulation Exercise to Promote Safe Trade for Women on Sierra Leone/Liberia",
            descriptionText:
              "As we ‘come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["Featured", <br />, "Local", <br />, "Stories"],
        tag: "VIDEO",
        label1: "UNDP’s Country Programme for Sierra Leone: 2020 to 2023",
        label2: [
          "The UNDP Executive Board approved the Sierra Leone’s 4-year Country Programme Document (CPD) on the 4th September 2020. The CPD is a core strategic document that guides UNDP’s development assistance to the Government of Sierra Leone (GOSL).",
          <br />,
          "The CPD will focus on enhancing the ability of state institutions to deliver services to citizens using a coordinated and sustainable",
        ],
        pagewidecardbtn: "WATCH VIDEO",
        whatwedoheader: ["What", <br />, "We do"],
        whatwedodescription:
          "UNDP has had a presence in Sierra Leone since 1965, working in partnership with the Government of Sierra Leone, development partners, UN agencies, civil society and local communities, contributing to inclusive growth, sustainabily, and efficient democratic governance.",
        statHeading: "Our Impact",
        storiesHeading: "Stories",
        takeAcrtionHead: "Take Action",
        storyBtn: "SEE ALL STORIES",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        titlename: [
          "«НІХТО НЕ ЗЛЯКАВСЯ ",
          <br />,
          "ВІДПОВІДАЛЬНОСТІ»",
        ],
        text: "Україна",
        btnlabel: "ЧИТАТИ ДАЛІ",
        subtitle:
          "Незважаючи на небезпеку, українські енергетики продовжують працювати",
        imgsrc: "https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2023-05/IMG_9127.jpg?h=e5aec6c8&itok=-J1yZOFX",
        imgsrc2: "https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2023-05/IMG_9127.jpg?h=e5aec6c8&itok=-J1yZOFX",
        imgalt: "https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2023-05/IMG_9127.jpg?h=e5aec6c8&itok=-J1yZOFX",
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "SUCCESS STORY",
            contentname:
              "Communities score joint UNDP-WFP supported Peacebuilding Fund Project 80%",
            descriptionText:
              "Building peace and livelihoods to achieve and sustain development.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "Sierra Leone COVID-19: United Nations Socio-economic Response Plan Response",
            descriptionText:
              "A UN country plan to help position Sierra Leone on a surer path towards attaining sustainable development in the wake of COVID-19",
            button: "DOWNLOAD",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "Article",
            contentname:
              "72 small arms destroyed by rural communities in Sierra Leone with support from the ‘Weapons for Development’ Initiative",
            descriptionText:
              "The Weapons for Development initiative - OCWAR-T project is an ECOWAS project co-funded by the EU and the GFFO",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "COVID-19 Response",
            contentname:
              "UNDP Supports Joint Border Simulation Exercise to Promote Safe Trade for Women on Sierra Leone/Liberia",
            descriptionText:
              "As we ‘come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              "“Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["В фокусі уваги"],
        tag: "VIDEO",
        label1: "UNDP’s Country Programme for Sierra Leone: 2020 to 2023",
        label2: [
          "The UNDP Executive Board approved the Sierra Leone’s 4-year Country Programme Document (CPD) on the 4th September 2020. The CPD is a core strategic document that guides UNDP’s development assistance to the Government of Sierra Leone (GOSL).",
          <br />,
          "The CPD will focus on enhancing the ability of state institutions to deliver services to citizens using a coordinated and sustainable",
        ],
        pagewidecardbtn: "WATCH VIDEO",
        whatwedoheader: ["Наша місія"],
        whatwedodescription:
          "Місія Програми розвитку ООН в Україні – підтримка стійкості країни в умовах війни та сприяння інклюзивному, цифровому та сталому відновленню.",
        statHeading: "Наша діяльність",
        storiesHeading: "Останні новини",
        takeAcrtionHead: "На пульсі подій",
        storyBtn: "ЧИТАТИ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        titlename: [
          "شباب سيراليون",
          <br />,
          "الوزير يطلق",
          <br />,
          "2020 قمة الخير الاجتماعي",
        ],
        text: "سيرا ليون",
        btnlabel: "اقرأ أكثر",
        subtitle:
          "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. Cras mattis quis nibh في molestie. وهكذا كان المراهقون الدافئون هم احتياجات المراهقين. Duis in eros sauce سعر الملعقة.",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "قصة نجاح",
            contentname:
              " المجتمعات تسجل 80٪ من مشروع صندوق بناء السلام المشترك الذي يدعمه برنامج الأمم المتحدة الإنمائي وبرنامج الأغذية العالمي",
            descriptionText:
              " بناء السلام وسبل العيش لتحقيق التنمية واستدامتها.",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "النشر",
            contentname:
              " سيراليون COVID-19: استجابة خطة الأمم المتحدة للاستجابة الاجتماعية والاقتصادية",
            descriptionText:
              "خطة قطرية للأمم المتحدة للمساعدة في وضع سيراليون على مسار أكيد نحو تحقيق التنمية المستدامة في أعقاب COVID-19",
            button: "تحميل",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "مقالة - سلعة",
            contentname:
              '72 قطعة سلاح صغيرة دمرتها المجتمعات الريفية في سيراليون بدعم من مبادرة "أسلحة من أجل التنمية',
            descriptionText:
              "مبادرة الأسلحة من أجل التنمية - مشروع OCWAR-T هو مشروع إيكواس بتمويل مشترك من قبل الاتحاد الأوروبي و GFFO",
            button: "اقرأ أكث",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "استجابة COVID-19",
            contentname:
              "برنامج الأمم المتحدة الإنمائي يدعم تمرين محاكاة الحدود المشتركة لتعزيز التجارة الآمنة للمرأة في سيراليون / ليبيريا",
            descriptionText:
              'بينما "نقف على أقدامنا" للاستجابة لقضايا الصحة العامة على الحدود ، يجب تعزيز الرسائل الرئيسية حول Covid-19 ، وتعزيز أمن الحدود',
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "تقرير التنمية البشرية الوطني لسيراليون 2019",
            descriptionText:
              '"حتى في مواجهة العديد من المآسي الإنسانية والقيود على الموارد المالية ، أظهرت سيراليون مرونة في ذلك',
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "تقرير التنمية البشرية الوطني لسيراليون 2019",
            descriptionText:
              '"حتى في مواجهة العديد من المآسي الإنسانية والقيود على الموارد المالية ، أظهرت سيراليون مرونة في ذلك',
            button: "اقرأ أكث",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["متميز", <br />, "محلي", <br />, "قصص"],
        tag: "فيديو",
        label1:
          "لبرنامج القطري لبرنامج الأمم المتحدة الإنمائي لسيراليون: من 2020 إلى 2023",
        label2: [
          "يضمن التباين بين ألوان المقدمة والخلفية يفي بحدود نسبة التباين WCAG 2 AA",
          <br />,
          "ستركز وثيقة البرنامج القطري على تعزيز قدرة مؤسسات الدولة على تقديم الخدمات للمواطنين باستخدام أسلوب منسق ومستدام",
        ],
        pagewidecardbtn: "شاهد الفيديو",
        whatwedoheader: ["ماذا او ما", <br />, "نحن نفعل"],
        whatwedodescription:
          "تواجد برنامج الأمم المتحدة الإنمائي في سيراليون منذ عام 1965 ، حيث يعمل في شراكة مع حكومة سيراليون ، وشركاء التنمية ، ووكالات الأمم المتحدة ، والمجتمع المدني والمجتمعات المحلية ، ويساهم في النمو الشامل والحكم الديمقراطي الفعال والمستدام.",
        statHeading: "تأثيرنا",
        storiesHeading: "قصص",
        takeAcrtionHead: "أبدي فعل",
        storyBtn: "شاهد كل القصص",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        titlename: [
          "Sierra Leone လူငယ်",
          <br />,
          "ဝန်ကြီးက စတင်လိုက်ပါတယ်။",
          <br />,
          " 2020 လူမှုရေးကောင်းမွန်သောထိပ်သီးအစည်းအဝေး",
        ],
        text: "ဆီးရီးယားလီယွန်",
        btnlabel: "ပိုပြီးဖတ်ပါ",
        subtitle:
          "နယ်စပ်ရှိပြည်သူ့ကျန်းမာရေးပြဿနာများကိုတုံ့ပြန်ရန်ကျွန်ုပ်တို့ 'ခြေရာခံ' လာသည်နှင့်အမျှ Covid-19 ဆိုင်ရာအဓိကသတင်းစကားများကိုအားဖြည့်သင့်သည်၊ နယ်စပ်လုံခြုံရေးကိုတိုးမြှင့်သင့်သည်...",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "အောင်မြင်မှု ဇာတ်လမ်း",
            contentname:
              "UNDP-WFP မှ ပူးတွဲပံ့ပိုးထားသော ငြိမ်းချမ်းရေးတည်ဆောက်မှုရန်ပုံငွေ ပရောဂျက် 80%",
            descriptionText:
              "ငြိမ်းချမ်းရေးနှင့် အသက်မွေးဝမ်းကျောင်းလုပ်ငန်းများကို တည်ဆောက်ပြီး ဖွံ့ဖြိုးတိုးတက်မှု ရေရှည်တည်တံ့စေရန်။",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "စာအုပ်ထုတ်ဝေရေး",
            contentname:
              "Sierra Leone COVID-19- ကုလသမဂ္ဂ လူမှုစီးပွားတုံ့ပြန်မှု အစီအစဉ် တုံ့ပြန်ချက်",
            descriptionText:
              "COVID-19 ကြောင့် ရေရှည်တည်တံ့ခိုင်မြဲသော ဖွံ့ဖြိုးတိုးတက်မှုရရှိရေးဆီသို့ တိကျသေချာသော လမ်းကြောင်းပေါ်ရှိ Sierra Leone တွင် ရပ်တည်ကူညီမည့် ကုလသမဂ္ဂနိုင်ငံတစ်ခု၏ အစီအစဉ်",
            button: "ဒေါင်းလုဒ်လုပ်ပါ။",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "ဆောင်းပါး",
            contentname:
              "Sierra Leone မှ ကျေးလက်နေပြည်သူများမှ လက်နက်ငယ် ၇၂ လုံးကို 'ဖွံ့ဖြိုးတိုးတက်ရေးလက်နက်' မှပံ့ပိုးကူညီမှုဖြင့် ဖျက်ဆီးခဲ့သည်။",
            descriptionText:
              "ဖွံ့ဖြိုးတိုးတက်ရေးလက်နက်များ ပဏာမခြေလှမ်း - OCWAR-T ပရောဂျက်သည် EU နှင့် GFFO တို့ ပူးပေါင်းရန်ပုံငွေဖြင့် ECOWAS ပရောဂျက်တစ်ခုဖြစ်သည်။",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "COVID-19 တုံ့ပြန်မှု",
            contentname:
              "UNDP သည် Sierra Leone/Liberia တွင် အမျိုးသမီးများအတွက် ဘေးကင်းလုံခြုံသော ကုန်သွယ်မှုကို မြှင့်တင်ရန် ပူးတွဲနယ်နိမိတ်ပုံတူခြင်း လေ့ကျင့်ခန်းကို ပံ့ပိုးကူညီသည်",
            descriptionText:
              "နယ်စပ်ရှိ ပြည်သူ့ကျန်းမာရေးပြဿနာများကို တုံ့ပြန်ရန် ကျွန်ုပ်တို့ 'ခြေရာခံ' လာသည်နှင့်အမျှ Covid-19 ဆိုင်ရာ အဓိကသတင်းစကားများကို အားဖြည့်သင့်သည်၊ နယ်စပ်လုံခြုံရေးကို မြှင့်တင်ထားသင့်သည်",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "Sierra Leone အမျိုးသားလူ့ဖွံ့ဖြိုးတိုးတက်မှုအစီရင်ခံစာ 2019",
            descriptionText:
              "“လူသားအဖြစ်ဆိုးများစွာနဲ့ ငွေကြေးအရင်းအမြစ် ကန့်သတ်ချက်တွေနဲ့ ရင်ဆိုင်ရရင်တောင် Sierra Leone ဟာ ခံနိုင်ရည်ရှိမှုကို ပြသခဲ့ပါတယ်။",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "Sierra Leone အမျိုးသားလူ့ဖွံ့ဖြိုးတိုးတက်မှုအစီရင်ခံစာ 2019",
            descriptionText:
              "“လူသားအဖြစ်ဆိုးများစွာနဲ့ ငွေကြေးအရင်းအမြစ် ကန့်သတ်ချက်တွေနဲ့ ရင်ဆိုင်ရရင်တောင် Sierra Leone ဟာ ခံနိုင်ရည်ရှိမှုကို ပြသခဲ့ပါတယ်။",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["အသားပေး", <br />, "ပြည်တွင်း", <br />, "ပုံပြင်များ"],
        tag: "ဗီဒီယို",
        label1: "UNDP ၏ Sierra Leone အတွက် နိုင်ငံအစီအစဉ်- 2020 မှ 2023 ခုနှစ်",
        label2: [
          "မျက်နှာပြင်နှင့် နောက်ခံအရောင်များအကြား ခြားနားမှုအား WCAG 2 AA ခြားနားမှု အချိုးသတ်မှတ်ချက်များနှင့် ကိုက်ညီကြောင်း သေချာစေသည်",
          <br />,
          "CPD သည် ပေါင်းစပ်ညှိနှိုင်းပြီး ရေရှည်တည်တံ့သော ဝန်ဆောင်မှုများကို အသုံးပြု၍ နိုင်ငံသားများထံ ဝန်ဆောင်မှုများ ပေးအပ်ရန် ပြည်နယ်အဖွဲ့အစည်းများ၏ စွမ်းဆောင်ရည်ကို မြှင့်တင်ရန် အာရုံစိုက်မည်ဖြစ်သည်။",
        ],
        pagewidecardbtn: "ဗီဒီယိုကို ကြည့်ပါ။",
        whatwedoheader: ["ဘာလဲ", <br />, "ကျွန်တော်တို"],
        whatwedodescription:
          "UNDP သည် Sierra Leone အစိုးရ၊ ဖွံ့ဖြိုးတိုးတက်ရေးမိတ်ဖက်များ၊ UN အေဂျင်စီများ၊ အရပ်ဘက်လူမှုအဖွဲ့အစည်းများနှင့် ဒေသခံလူထုများ ပါဝင်သော တိုးတက်မှု၊ ရေရှည်တည်တံ့ခိုင်မြဲပြီး ထိရောက်သောဒီမိုကရေစီ အုပ်ချုပ်ရေးကို ပံ့ပိုးပေးသည့် ဖွံ့ဖြိုးတိုးတက်ရေးမိတ်ဖက်များ၊ ကုလသမဂ္ဂအေဂျင်စီများနှင့် ပူးပေါင်းလုပ်ဆောင်သည့် ၁၉၆၅ ခုနှစ်ကတည်းက Sierra Leone တွင် ရောက်ရှိခဲ့ပါသည်။",
        statHeading: "ကျွန်ုပ်တို့၏သက်ရောက်မှု",
        storiesHeading: "ပုံပြင်မျာ",
        takeAcrtionHead: "အရေးယူပါ။",
        storyBtn: "ဇာတ်လမ်းများအားလုံးကို ကြည့်ပါ။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        titlename: [
          "シエラレオネユース",
          <br />,
          "大臣が発足",
          <br />,
          "2020ソーシャルグッドサミット",
        ],
        text: "シエラレオネ",
        btnlabel: "続きを読む",
        subtitle:
          "国境での公衆衛生問題に対応するために「立ち上がって」いるので、Covid-19に関する重要なメッセージを強化し、国境のセキュリティを強化する必要があります…",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "サクセスストーリー",
            contentname:
              "コミュニティはUNDPとWFPが共同で支援する平和構築基金プロジェクトを80％スコアリング",
            descriptionText: "開発を達成し、維持するための平和と生計の構築。",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "出版物",
            contentname: "シエラレオネCOVID-19：国連の社会経済的対応計画の対応",
            descriptionText:
              "COVID-19をきっかけに持続可能な開発を達成するためのより確実な道にシエラレオネを位置づけるのを助ける国連国の計画",
            button: "ダウンロード",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "論文",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。",
            button: "続きを読む",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "COVID-19応答",
            contentname:
              "UNDPは、シエラレオネ/リベリアの女性の安全な貿易を促進するための共同国境シミュレーション演習を支援しています",
            descriptionText:
              "国境での公衆衛生問題に対応するために「立ち上がって」、Covid-19に関する重要なメッセージを強化し、国境のセキュリティを強化する必要があります",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "シエラレオネ国家人間開発報告書2019",
            descriptionText:
              "「いくつかの人的悲劇と財源の制約に直面しても、シエラレオーネは",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "シエラレオネ国家人間開発報告書2019",
            descriptionText:
              "「いくつかの人的悲劇と財源の制約に直面しても、シエラレオーネは",
            button: "続きを読む",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["特徴", <br />, "ローカル", <br />, "ストーリー"],
        tag: "ビデオ",
        label1: "UNDPのシエラレオネカントリープログラム：2020年から2023年",
        label2: [
          "前景色と背景色のコントラストがWCAG2AAコントラスト比のしきい値を満たしていることを確認します",
          <br />,
          "CPDは、調整された持続可能なサービスを使用して市民にサービスを提供する州の機関の能力を強化することに焦点を当てます",
        ],
        pagewidecardbtn: "ビデオを見る",
        whatwedoheader: ["何", <br />, "私たちはします"],
        whatwedodescription:
          "UNDPは、1965年以来、シエラレオネに存在し、シエラレオネ政府、開発パートナー、国連機関、市民社会、地域社会と協力して、包摂的な成長、持続可能、効率的な民主的ガバナンスに貢献しています。",
        statHeading: "私たちの影響",
        storiesHeading: "ストーリー",
        takeAcrtionHead: "行動を起こす",
        storyBtn: "すべてのストーリーを見る",
      };
      return japaneseText;
    default:
      return {
        titlename: [
          "Sierra Leone Youth",
          <br />,
          "Minister Launches",
          <br />,
          "2020 Social Good Summit",
        ],
        text: "Sierra Leone",
        btnlabel: "READ MORE",
        subtitle:
          "As we ‘come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced…",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        featureddata: [
          {
            contenttile: "SUCCESS STORY",
            contentname:
              "Communities score joint UNDP-WFP supported Peacebuilding Fund Project 80%",
            descriptionText:
              "Building peace and livelihoods to achieve and sustain development.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "Sierra Leone COVID-19: United Nations Socio-economic Response Plan Response",
            descriptionText:
              "A UN country plan to help position Sierra Leone on a surer path towards attaining sustainable development in the wake of COVID-19",
            button: "DOWNLOAD",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "Article",
            contentname:
              "72 small arms destroyed by rural communities in Sierra Leone with support from the ‘Weapons for Development’ Initiative",
            descriptionText:
              "The Weapons for Development initiative - OCWAR-T project is an ECOWAS project co-funded by the EU and the GFFO",
            button: "READ MORE",
            imgback: img,
            type: "Image",
            scale: "large",
          },
          {
            contenttile: "COVID-19 Response",
            contentname:
              "UNDP Supports Joint Border Simulation Exercise to Promote Safe Trade for Women on Sierra Leone/Liberia",
            descriptionText:
              "As we 'come to our feet’ to respond to public health issues at the borders, key messages on Covid-19 should be reinforced, border security enhanced",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              " “Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Sierra Leone National Human Development Report 2019",
            descriptionText:
              " “Even in the face of several human tragedies and financial resource constraints, Sierra Leone has demonstrated resilience that",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "medium",
          },
        ],
        headertext: ["Featured", <br />, "Local", <br />, "Stories"],
        tag: "VIDEO",
        label1: "UNDP’s Country Programme for Sierra Leone: 2020 to 2023",
        label2: [
          "The UNDP Executive Board approved the Sierra Leone’s 4-year Country Programme Document (CPD) on the 4th September 2020. The CPD is a core strategic document that guides UNDP’s development assistance to the Government of Sierra Leone (GOSL).",
          <br />,
          "The CPD will focus on enhancing the ability of state institutions to deliver services to citizens using a coordinated and sustainable",
        ],
        pagewidecardbtn: "WATCH VIDEO",
        whatwedoheader: ["What", <br />, "We do"],
        whatwedodescription:
          "UNDP has had a presence in Sierra Leone since 1965, working in partnership with the Government of Sierra Leone, development partners, UN agencies, civil society and local communities, contributing to inclusive growth, sustainabily, and efficient democratic governance.",
        statHeading: "Our Impact",
        storiesHeading: "Stories",
        takeAcrtionHead: "Take Action",
        storyBtn: "SEE ALL STORIES",
      };
  }
};

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
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

export default {
  title: "Templates/Country homepage",
    parameters: {
      docs: {
        page: () => (
            <>
            <style>
              {`
              .sbdocs-preview {display: none}
              `}
            </style>

            <h1>Country Homepage</h1>
            <p>A country homepage has all the list of content related to one particular country.</p>

            <h3>Overview</h3>
            <p>A country homepage has a content list related to one specific country. This includes content lists like articles, publications, success stories, blogs, etc.</p>
            <p>Mock Up: <a href="https://undp-design-system.azurewebsites.net/country-page">https://undp-design-system.azurewebsites.net/country-page</a></p>

            <h3>Template Structure</h3>
            <p>The following components are used to create the “Country Homepage” template in the design system:</p>
            <ul>
                <li>Country header</li>
                <li>Homepage Hero - Homepage Hero images are large sized images with text in front of the image and present at the top of the homepage.</li>
                <li>Group of featured cards - Featured card groups that will have CTA links (this can be just #).</li>
                <li>Background image(color) with text</li>
                <li>Title for success stories</li>
                <li>Pagewide featured content card</li>
                <li>Group of content cards</li>
                <li>Secondary button, no arrow</li>
                <li>Stats slider - Group of cards arranged horizontally in two rows that slide in from opposite directions on page scroll.</li>
                <li>Text title - Take action</li>
                <li>Group of image reveal cards</li>
                <li>Standard footer</li>
            </ul>

            <h3>Performance</h3>
            <p>The page performance will be optimized by considering the following:</p>
            <ul>
                <li>Lazy load</li>
                <li>Use appropriate media renditions based on the client’s viewpoint.</li>
                <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc)</li>
                <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc)</li>
                <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed.</li>
            </ul>

            <h3>Usage</h3>
            <ul>
                <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section</li>
                <li>Initialize navigation, language switcher, accordion, statsHover, swiper, and parallax effect by calling below mentioned functions.</li>
                <ul>
                    <li><code>navigationInitialize();</code></li>
                    <li><code>langSwitch();</code></li>
                    <li><code>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</code></li>
                    <li><code>swiper('.stats-card-slider');</code></li>
                    <li><code>parallaxEffect('.stats-card-slider');</code></li>
                </ul>
                <li>Refer <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options</li>
                <li>Refer <a href="https://github.com/undp/design-system/wiki/Parallax-documentation">this document</a> for Parallax integration & options</li>
                <li>If you want to add left-right animation then add <code>data-viewport=”true”</code> attribute to your HTML element.</li>
            </ul>

            <h3>CSS and JS References</h3>

            <h4>CSS:</h4>
            <p>Add the base layout style from</p>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card-with-and-without-image.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card-with-and-without-image.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-wide-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-wide-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-reveal-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-reveal-cards.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-slider.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-slider.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/countryhome-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/countryhome-page.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
            </ul>

            <h4>JS:</h4>
            <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smooth-bg-change.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smooth-bg-change.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
            </ul>
            <p>Add following external libraries</p>
            <ul>
                <li>Swiper (<a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a>)</li>
                <li>GSAP (<a href="https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo">https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo</a>)</li>
            </ul>

            <h3>Changelog</h3>
            <p>1.0 — Released component</p>

            <Canvas>
              <Story
                name="Country homepage"
              >
                {(args, { globals: { locale, accent } }) => {
                  const caption = getCaptionForLocale(locale);
                  const navigationData = getNavLinks(locale);
                  const leftNavigationData = navigationData.filter(
                    (item) => item.position === "left"
                  );
                  const rightNavigationData = navigationData.filter(
                    (item) => item.position === "right"
                  );
                  const siteTitleData = getSiteTitle(locale);
                  const statCaption = statsArray(locale);
                  return (
                    <CountryHomepage
                      herotitle={caption.titlename}
                      headingTop={caption.text}
                      herobtnlabel={caption.btnlabel}
                      herosubtitle={caption.subtitle}
                      heroimgsrc={caption.imgsrc}
                      heroimgsrc2={caption.imgsrc2}
                      heroimgalt={caption.imgalt}
                      featureddata={caption.featureddata}
                      featureddataafterwedo={{ ...caption.featureddataafterwedo, ...contentcardimagesdata(locale) }}
                      headertext={caption.headertext}
                      PagewidecardTag={caption.tag}
                      PagewidecardTitle={caption.label1}
                      PagewidecardParagraph={caption.label2}
                      PagewidecardBtnlabel={caption.pagewidecardbtn}
                      whatwedoheader={caption.whatwedoheader}
                      whatwedodescription={caption.whatwedodescription}
                      takeactioncard={takeactioncard(locale)}
                      statHeading={caption.statHeading}
                      storiesHeading={caption.storiesHeading}
                      footerData={footerData(locale)}

                      locale={locale}
                      leftNavigationData={leftNavigationData}
                      navigationData={navigationData}
                      rightNavigationData={rightNavigationData}
                      menuData={menuData(locale)}
                      languageswitcherData={Languageswitcher(locale)}
                      locationData={getLocationDataForLocale(locale)}
                      langSelect={getSelectlanguage(locale)}
                      backcaption={getBackForLocale(locale)}
                      siteTitleData={getSiteTitle(locale)}
                      logo={logo}
                      logowhite={logowhite}
                      takeAcrtionHead={caption.takeAcrtionHead}
                      storyBtn={caption.storyBtn}
                      statdata={statCaption}
                      {...args}
                    ></CountryHomepage>
                  );
                }}
              </Story>
            </Canvas>
          </>
        ),
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  const caption = getCaptionForLocale(locale);
  const navigationData = getNavLinks(locale);
  const leftNavigationData = navigationData.filter(
    (item) => item.position === "left"
  );
  const rightNavigationData = navigationData.filter(
    (item) => item.position === "right"
  );
  const siteTitleData = getSiteTitle(locale);
  const statCaption = statsArray(locale);
  return (
    <CountryHomepage
      herotitle={caption.titlename}
      headingTop={caption.text}
      herobtnlabel={caption.btnlabel}
      herosubtitle={caption.subtitle}
      heroimgsrc={caption.imgsrc}
      heroimgsrc2={caption.imgsrc2}
      heroimgalt={caption.imgalt}
      featureddata={caption.featureddata}
      featureddataafterwedo={{ ...caption.featureddataafterwedo, ...contentcardimagesdata(locale) }}
      headertext={caption.headertext}
      PagewidecardTag={caption.tag}
      PagewidecardTitle={caption.label1}
      PagewidecardParagraph={caption.label2}
      PagewidecardBtnlabel={caption.pagewidecardbtn}
      whatwedoheader={caption.whatwedoheader}
      whatwedodescription={caption.whatwedodescription}
      takeactioncard={takeactioncard(locale)}
      statHeading={caption.statHeading}
      storiesHeading={caption.storiesHeading}
      footerData={footerData(locale)}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      menuData={menuData(locale)}
      languageswitcherData={Languageswitcher(locale)}
      locationData={getLocationDataForLocale(locale)}
      langSelect={getSelectlanguage(locale)}
      backcaption={getBackForLocale(locale)}
      siteTitleData={getSiteTitle(locale)}
      logo={logo}
      logowhite={logowhite}
      takeAcrtionHead={caption.takeAcrtionHead}
      storyBtn={caption.storyBtn}
      statdata={statCaption}
      {...args}
    ></CountryHomepage>
  );
}

export const CountryHomepageStory = Template.bind({});
CountryHomepageStory.storyName = "Country homepage";