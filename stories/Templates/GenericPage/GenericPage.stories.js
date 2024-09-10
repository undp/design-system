import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { GenericPage } from "./GenericPage";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/Footer.stories.js";
import { getCaptionForLocale as sidebarCaptionData } from "../../Components/Navigationcomponents/Sidebar/sidebarUtils.js";
import { getCaptionForLocale as ContentCardData } from "../../Organism/Blocks/ContentCard/ContentCardUtils.js";
import heroImage from "../../assets/images/generic_page_hero.jpg";
import BackgroundVideo from "../../assets/video/video_sample.mp4";
import fluidCarouselImg from "../../assets/images/crosssboard.jpg";
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
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeaderUtils.js";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        herodata: [
          {
            text: "Home",
          },
          {
            text: "Second-level",
          },
          {
            text: "Third-level",
          },
          {
            text: "Page Title",
          },
        ],
        title: "ABOUT US",
        content: "UNDP",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
        detail2: "Our mission, our goals, our mandate",
        topParagraph:
          "As the United Nations lead agency on international development, UNDP works in 170 countries and territories to eradicate poverty and reduce inequality. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities, and to build resilience to achieve the Sustainable Development Goals. Our work is concentrated in three focus areas; sustainable development, democratic governance and peace building, and climate and disaster resilience.",
        headingMissionVision: "Mission and vision",
        paraMissionVision:
          "UNDP’s mandate is to end poverty, build democratic governance, rule of law, and inclusive institutions. We advocate for change, and connect countries to knowledge, experience and resources to help people build a better life.",
        headingHistory: "The UN Charter",
        paraHistory:
          "The Charter of the United Nations was signed in San Francisco on 26 June 1945, at the conclusion of the United Nations Conference on International Organization, and came into force on 24 October 1945. Its purposes and principles are to maintain international peace and security, develop friendly relations among nations based on equal rights and self-determination, and to achieve international co-operation in solving economic, social, cultural, or humanitarian challenges without distinction for race, sex, language, or religion.",
        headingUNcharter: "History",
        paraUNcharter:
          "UNDP is based on the merging of the United Nations Expanded Programme of Technical Assistance, created in 1949, and the United Nations Special Fund, established in 1958. UNDP, as we know it now, was established in 1965 by the General Assembly of the United Nations.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        herodata: [
          { text: "Home" },
          { text: "Другий рівень" },
          { text: "Третій рівень" },
          { text: "Назва сторінки" },
        ],
        title: "ПРООН В УКРАЇНІ",
        content: "ПРО НАС",
        imgsrc: "https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2022-05/15724686425_15e35b8031_b.jpg?h=199d8c1f&itok=mqpiXlb5",
        imgalt: "https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2022-05/15724686425_15e35b8031_b.jpg?h=199d8c1f&itok=mqpiXlb5",
        videosrc: BackgroundVideo,
        detail2: "Про Програму розвитку ООН в Україні",
        topParagraph:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. Завдяки партнерству з національними, обласними та місцевими органами влади, громадянським суспільством і приватним сектором, ПРООН прагне підтримати Україну на шляху до подолання бідності, розвитку людського потенціалу, досягнення справедливих результатів, захисту довкілля і просування демократичного врядування.",
        headingMissionVision: "Чого ми прагнемо досягти?",
        paraMissionVision:
          "ПРООН працює у партнерстві з Урядом України, іншими агентствами ООН, організаціями, що займаються питаннями розвитку, громадянським суспільством та місцевими громадами, допомагаючи знаходити рішення для глобальних і національних викликів у сфері розвитку через впровадження низки ініціатив, що базуються на досвіді ПРООН та порівняльному аналізі.",
        headingHistory: "Якими є результати нашої діяльності?",
        paraHistory:
          "Починаючи з 1993 р. ПРООН надає допомогу Уряду України у розробці рішень для здійснення переходу від планової до ринкової економіки та розвитку демократичної системи. Партнерство ПРООН  з центральними, обласними та місцевими органами влади сприяло прийняттю низки законів та стратегій, а також зміцненню потенціалу цих органів у контексті ширшої інтеграції України до світових процесів.",
        headingUNcharter: "Хто ухвалює рішення?",
        paraUNcharter:
          "Координатор системи ООН в Україні координує роботу агентств ООН, представлених в Україні. ПРООН працює у тісному партнерстві з Урядом України через низку Міністерств, департаментів та відомств. Впровадження програмної діяльності ПРООН здійснюється відповідними виконавчими партнерами, зокрема партнерами з числа центральних та місцевих органів влади та організаціями громадянського суспільства.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        herodata: [
          {
            text: "الصفحة الرئيسية",
          },
          {
            text: "المستوى الثاني",
          },
          {
            text: "المستوى الثالث",
          },
          {
            text: "عنوان الصفحة",
          },
        ],
        title: "معلومات عنا",
        content: "برنامج الأمم المتحدة الإنمائي",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
        detail2: "مهمتنا ، أهدافنا ، ولايتنا",
        topParagraph:
          "بصفته وكالة الأمم المتحدة الرائدة في مجال التنمية الدولية ، يعمل برنامج الأمم المتحدة الإنمائي في 170 دولة وإقليمًا للقضاء على الفقر والحد من عدم المساواة. نحن نساعد البلدان على تطوير السياسات ومهارات القيادة وقدرات الشراكة والقدرات المؤسسية وبناء المرونة لتحقيق أهداف التنمية المستدامة. يتركز عملنا في ثلاثة مجالات تركيز ؛ التنمية المستدامة ، والحكم الديمقراطي وبناء السلام ، والمناخ والصمود في مواجهة الكوارث.",
        headingMissionVision: "المهمة والرؤية",
        paraMissionVision:
          "تتمثل مهمة برنامج الأمم المتحدة الإنمائي في إنهاء الفقر ، وبناء الحكم الديمقراطي ، وسيادة القانون ، والمؤسسات الشاملة. نحن ندعو للتغيير ، ونربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل.",
        headingHistory: "ميثاق الأمم المتحدة",
        paraHistory:
          "تم التوقيع على ميثاق الأمم المتحدة في سان فرانسيسكو في 26 يونيو 1945 ، في ختام مؤتمر الأمم المتحدة المعني بالمنظمة الدولية ، ودخل حيز التنفيذ في 24 أكتوبر 1945. وتتمثل أهدافه ومبادئه في الحفاظ على السلم والأمن الدوليين ، وتطوير العلاقات الودية بين الأمم على أساس المساواة في الحقوق وتقرير المصير ، وتحقيق التعاون الدولي في حل التحديات الاقتصادية أو الاجتماعية أو الثقافية أو الإنسانية دون تمييز بسبب العرق أو الجنس أو اللغة أو الدين.",
        headingUNcharter: "تاريخ",
        paraUNcharter:
          "يعتمد برنامج الأمم المتحدة الإنمائي على دمج برنامج الأمم المتحدة الموسع للمساعدة الفنية ، الذي تم إنشاؤه في عام 1949 ، وصندوق الأمم المتحدة الخاص ، الذي أنشئ في عام 1958. وقد تم إنشاء برنامج الأمم المتحدة الإنمائي ، كما نعرفه الآن ، في عام 1965 من قبل الجمعية العامة للأمم المتحدة. الأمم.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        herodata: [
          {
            text: "အိမ်ပြန်",
          },
          {
            text: "ဒုတိယအဆင့်",
          },
          {
            text: "တတိယအဆင့်",
          },
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
        ],
        title: "ကြှနျုပျတို့အကွောငျး",
        content: "UNDP",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
        detail2:
          "ကျွန်တော်တို့ရဲ့ ရည်မှန်းချက်တွေ၊ ရည်မှန်းချက်တွေ၊ လုပ်ပိုင်ခွင့်တွေ",
        topParagraph:
          "ကုလသမဂ္ဂ နိုင်ငံတကာ ဖွံ့ဖြိုးတိုးတက်ရေးဆိုင်ရာ အေဂျင်စီအဖြစ် ဦးဆောင်သည့်အနေဖြင့် UNDP သည် ဆင်းရဲမွဲတေမှု ပပျောက်ရေးနှင့် မညီမျှမှု လျှော့ချရန်အတွက် နိုင်ငံနှင့် နယ်မြေပေါင်း ၁၇၀ တွင် လုပ်ဆောင်လျက်ရှိသည်။ မူဝါဒများ၊ ခေါင်းဆောင်မှုစွမ်းရည်၊ မိတ်ဖက်စွမ်းရည်များ၊ အဖွဲ့အစည်းဆိုင်ရာစွမ်းရည်များ ဖွံ့ဖြိုးတိုးတက်စေရန်နှင့် စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်မှုပန်းတိုင်များရရှိရန် ကြံ့ကြံ့ခံနိုင်ရည်ရှိစေရန် နိုင်ငံများကို ကျွန်ုပ်တို့ ကူညီပေးပါသည်။ ကျွန်ုပ်တို့၏လုပ်ငန်းကို အာရုံစူးစိုက်မှုနယ်ပယ် သုံးခုတွင် အာရုံစိုက်ထားသည်။ စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေး၊ ဒီမိုကရေစီ အုပ်ချုပ်ရေးနှင့် ငြိမ်းချမ်းရေး တည်ဆောက်ရေး၊ ရာသီဥတုနှင့် သဘာဝဘေးဒဏ်ကို ခံနိုင်ရည်ရှိရေး၊",
        headingMissionVision: "ရည်မှန်းချက်နှင့်အမြင်",
        paraMissionVision:
          "UNDP ၏ လုပ်ပိုင်ခွင့်မှာ ဆင်းရဲမွဲတေမှု အဆုံးသတ်ရေး၊ ဒီမိုကရေစီ အုပ်ချုပ်ရေး၊ တရားဥပဒေ စိုးမိုးရေးနှင့် ပါဝင်သော အင်စတီကျူးရှင်းများ တည်ဆောက်ရန် ဖြစ်သည်။ ကျွန်ုပ်တို့သည် အပြောင်းအလဲအတွက် ထောက်ခံအားပေးပြီး လူများကို ပိုမိုကောင်းမွန်သောဘဝတည်ဆောက်နိုင်ရန် အသိပညာ၊ အတွေ့အကြုံနှင့် အရင်းအမြစ်များကို နိုင်ငံများနှင့် ချိတ်ဆက်ပေးပါသည်။",
        headingHistory: "ကုလသမဂ္ဂပဋိညာဉ်စာတမ်း",
        paraHistory:
          "ကုလသမဂ္ဂ ပဋိညာဉ်စာတမ်းကို ၁၉၄၅ ခုနှစ် ဇွန်လ ၂၆ ရက်နေ့တွင် ဆန်ဖရန်စစ္စကိုတွင် လက်မှတ်ရေးထိုးခဲ့ပြီး နိုင်ငံတကာအဖွဲ့အစည်းဆိုင်ရာ ကုလသမဂ္ဂ ညီလာခံ အပြီးတွင် ၁၉၄၅ ခုနှစ် အောက်တိုဘာလ ၂၄ ရက်နေ့တွင် အသက်ဝင်ခဲ့သည်။ ၎င်း၏ ရည်ရွယ်ချက်များနှင့် အခြေခံမူများမှာ နိုင်ငံတကာ ငြိမ်းချမ်းရေးနှင့် လုံခြုံရေးကို ထိန်းသိမ်းရန်၊ တန်းတူညီမျှအခွင့်အရေးနှင့် ကိုယ်ပိုင်ပြဋ္ဌာန်းခွင့်အပေါ် အခြေခံသော နိုင်ငံများအကြား ချစ်ကြည်ရင်းနှီးစွာ ဆက်ဆံရေးနှင့် စီးပွားရေး၊ လူမှုရေး၊ ယဉ်ကျေးမှု၊ သို့မဟုတ် လူသားချင်းစာနာမှုဆိုင်ရာ စိန်ခေါ်မှုများကို ဖြေရှင်းရာတွင် အပြည်ပြည်ဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုများ အောင်မြင်စေရန်၊ လူမျိုး၊",
        headingUNcharter: "သမိုင်း",
        paraUNcharter:
          "UNDP သည် 1949 ခုနှစ်တွင်ဖန်တီးခဲ့သော United Nations Expanded Technical Assistance of the Programme နှင့် 1958 ခုနှစ်တွင်တည်ထောင်ခဲ့သော United Nations Special Fund ကိုအခြေခံ၍ UNDP ကိုအခြေခံ၍ UNDP ကို ​​United Nations General Assembly မှ 1965 ခုနှစ်တွင် စတင်ဖွဲ့စည်းခဲ့ပါသည်။ လူမျိုး။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        herodata: [
          {
            text: "الصفحة الرئيسية",
          },
          {
            text: "セカンドレベル",
          },
          {
            text: "第3レベル",
          },
          {
            text: "ページタイトル",
          },
        ],
        title: "私たちに関しては",
        content: "UNDP",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
        detail2: "私たちの使命、私たちの目標、私たちの使命",
        topParagraph:
          "国連が国際開発の主導機関として、UNDPは170の国と地域で貧困を根絶し、不平等を減らすために活動しています。私たちは、各国が政策、リーダーシップスキル、パートナー能力、制度的能力を開発し、持続可能な開発目標を達成するためのレジリエンスを構築するのを支援します。私たちの仕事は3つの重点分野に集中しています。持続可能な開発、民主的統治と平和構築、そして気候と災害に対する回復力",
        headingMissionVision: "ミッションとビジョン",
        paraMissionVision:
          "UNDPの使命は、貧困を終わらせ、民主的な統治、法の支配、そして包摂的な制度を構築することです。私たちは変化を提唱し、人々がより良い生活を築くのを助けるために、国を知識、経験、資源に結び付けます。",
        headingHistory: "国連憲章",
        paraHistory:
          "国連憲章は、1945年6月26日、国際組織に関する国連会議の終わりにサンフランシスコで署名され、1945年10月24日に発効しました。その目的と原則は、国際の平和と安全を維持し、発展させることです。平等な権利と自己決定に基づく国家間の友好関係、および人種、性別、言語、または宗教を区別することなく、経済的、社会的、文化的、または人道的課題を解決するための国際協力を達成すること。",
        headingUNcharter: "歴史",
        paraUNcharter:
          "UNDPは、1949年に創設された国連拡張技術支援プログラムと1958年に設立された国連特別基金の統合に基づいています。UNDPは、現在私たちが知っているように、1965年に国連総会によって設立されました。国連。",
      };
      return japaneseText;
    default:
      const dummy = {
        herodata: [
          {
            text: "Home",
          },
          {
            text: "Second-level",
          },
          {
            text: "Third-level",
          },
          {
            text: "Page Title",
          },
        ],
        title: "ABOUT US",
        content: "UNDP",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
        detail2: "Our mission, our goals, our mandate",
        topParagraph:
          "As the United Nations lead agency on international development, UNDP works in 170 countries and territories to eradicate poverty and reduce inequality. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities, and to build resilience to achieve the Sustainable Development Goals. Our work is concentrated in three focus areas; sustainable development, democratic governance and peace building, and climate and disaster resilience.",
        headingMissionVision: "Mission and vision",
        paraMissionVision:
          "UNDP’s mandate is to end poverty, build democratic governance, rule of law, and inclusive institutions. We advocate for change, and connect countries to knowledge, experience and resources to help people build a better life.",
        headingHistory: "The UN Charter",
        paraHistory:
          "The Charter of the United Nations was signed in San Francisco on 26 June 1945, at the conclusion of the United Nations Conference on International Organization, and came into force on 24 October 1945. Its purposes and principles are to maintain international peace and security, develop friendly relations among nations based on equal rights and self-determination, and to achieve international co-operation in solving economic, social, cultural, or humanitarian challenges without distinction for race, sex, language, or religion.",
        headingUNcharter: "History",
        paraUNcharter:
          "UNDP is based on the merging of the United Nations Expanded Programme of Technical Assistance, created in 1949, and the United Nations Special Fund, established in 1958. UNDP, as we know it now, was established in 1965 by the General Assembly of the United Nations.",
      };
      return dummy;
  }
};

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "Блог",
            titleText:
              "Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів",
            descText:
              "Нова оцінка стану енергетичного сектора в усій країні підтвердила, що нанесені збитки перевищують 10 млрд дол. США, ...",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Блог",
            titleText:
              "Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів",
            descText:
              "Нова оцінка стану енергетичного сектора в усій країні підтвердила, що нанесені збитки перевищують 10 млрд дол. США, ...",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Блог",
            titleText:
              "Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів",
            descText:
              "Нова оцінка стану енергетичного сектора в усій країні підтвердила, що нанесені збитки перевищують 10 млрд дол. США, ...",
            buttonText: "ЧИТАТИ ДАЛІ",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "مشاركة مدونة",
            titleText: "نقاط الدخول والخروج: التطرف العنيف في جنوب شرق آسيا",
            descText: "تلخص هذه الدراسة أربع أوراق تكميلية متعمقة تستكشف ...",
            buttonText: "اقرأ أكثر",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ဘလော့ပို့စ်",
            titleText:
              "အဝင်နှင့်အထွက်အချက်များ- အရှေ့တောင် အာရှတွင် ပြင်းထန်သော အစွန်းရောက်ဝါဒ",
            descText:
              "ဤလေ့လာမှုသည် ဒေသန္တရပုံစံကို စူးစမ်းလေ့လာသည့် အသေးစိပ် လေးနက်သော စာတမ်းလေးစောင်ကို အကျဉ်းချုပ်ဖော်ပြထားသည်...",
            buttonText: "ပိုပြီးဖတ်ပါ",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "ブログ投稿",
            titleText: "入口と出口：東南アジアにおける暴力的過激主義",
            descText:
              "この調査では、ローカライズされたものを調査する4つの補足的な詳細な論文を要約しています…",
            buttonText: "続きを読む",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
          {
            slideImage: fluidCarouselImg,
            tagtext: "Blog post",
            titleText:
              "Entry and Exit Points: Violent Extremism in South-East Asia",
            descText:
              "This study summarizes four complementary in-depth papers that explore the localized… ",
            buttonText: "Read More",
          },
        ],
      };
      return dummy.data;
  }
};

export default {
  title: "Templates/Generic page",
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>

<h1>Generic Page</h1>

<p>In the generic page, it shows all the information about the company or author.</p>

<h3>Overview</h3>

<p>Generic Page is the template for all the information about the company or author. The user can also see the related information in this. This helps the users to get complete information about the company or author. Mockup - <a href="https://www.undp.org/partners/united-nations-system">https://www.undp.org/partners/united-nations-system</a></p>

<h3>Template Structure</h3>

<ul>
  <li>The following components are used to create the “Article Page” template in the design system</li>
  <li>Global header</li>
  <li>Progress bar - reading meter, updated on scroll based on the amount of text remaining in the article. The related content part is not counted, only actual Article’s content.</li>
  <li>Page Hero - Creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle, and Breadcrumb.</li>
  <li>Sidebar menu (3 columns wide) - Column on the left or right side of a page which highlights the extra information related to the page.</li>
  <li>H2 Title along with large Paragraphs</li>
  <li>Fluid image size carousel - Shows sliders, designation, and image in a particular section. It is a multi-usage component that creates teasing kinds of content.</li>
  <li>Text/paragraphs about company or author</li>
  <li>Group of single content cards with images along with CTA links (this can be just #).</li>
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
  <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section.</li>
  <li>Initialize navigation, language switcher, accordion, sidebar and swiper by calling below mentioned functions.</li>
  <ul>
    <li>navigationInitialize();</li>
    <li>langSwitch();</li>
    <li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
    <li>expandToSize('.pagehero-full');</li>
    <li>sidebarNav();</li>
    <li>sidebarMenu();</li>
    <li>swiper('.fluid-carousel', '.slide-content'); on load (Include swiper library from <a href="https://swiperjs.com/get-started">here</a> in your html page).</li>
  </ul>
  <li>Refer <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
  <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element.</li>
</ul>

<h4>CSS and JS References</h4>

<h5>CSS:</h5>

<p>Add the base layout style from:</p>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-hero.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/progress.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/progress.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/sidebar-data.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fluid-image-size-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fluid-image-size-carousel.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/generic-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/generic-page.min.css</a></li>
</ul>

<h5>JS:</h5>

<ul>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/scrolling-progressbar.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/scrolling-progressbar.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sidebar.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sidebar.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
</ul>

<p>Add the following external libraries:</p>

<ul>
  <li>Swiper - <a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a></li>
  <li>GSAP - <a href="https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo">https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo</a></li>
</ul>

<h3>Changelog</h3>

<p>1.0 — Released component</p>


<Canvas>
  <Story
    name="Generic page"
    parameters={{
      layout: "fullscreen",
      docs: {
        story: {
          inline: false,
          iframeHeight: "100%",
        },
      },
      chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
    }}
  >
    {(args, { globals: { locale, accent } }) => {
      const caption = getCaptionForLocale(locale);
      const carouselData = statsArray(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <GenericPage
          active={"white"}
          herodata={caption.herodata}
          title={caption.title}
          content={caption.content}
          imgsource={caption.imgsrc}
          altname={caption.imgalt}
          topHeading={caption.detail2}
          topParagraph={caption.topParagraph}
          carouselData={carouselData}
          headingMissionVision={caption.headingMissionVision}
          paraMissionVision={caption.paraMissionVision}
          headingHistory={caption.headingHistory}
          paraHistory={caption.paraHistory}
          headingUNcharter={caption.headingUNcharter}
          paraUNcharter={caption.paraUNcharter}
          sidebarCaptionData={sidebarCaptionData(locale)}
          ContentCardData={ContentCardData(locale)}
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
          logo={logo}
          logowhite={logowhite}
          {...args}
        ></GenericPage>
      );
    }}
  </Story>
</Canvas>
            </>
        )
    }
  }
}

const Template = (args, { globals: { locale, accent } }) => {
  const caption = getCaptionForLocale(locale);
  const carouselData = statsArray(locale);
  const navigationData = getNavLinks(locale);
  const leftNavigationData = navigationData.filter(
    (item) => item.position === "left"
  );
  const rightNavigationData = navigationData.filter(
    (item) => item.position === "right"
  );
  return (
    <GenericPage
      active={"white"}
      herodata={caption.herodata}
      title={caption.title}
      content={caption.content}
      imgsource={caption.imgsrc}
      altname={caption.imgalt}
      topHeading={caption.detail2}
      topParagraph={caption.topParagraph}
      carouselData={carouselData}
      headingMissionVision={caption.headingMissionVision}
      paraMissionVision={caption.paraMissionVision}
      headingHistory={caption.headingHistory}
      paraHistory={caption.paraHistory}
      headingUNcharter={caption.headingUNcharter}
      paraUNcharter={caption.paraUNcharter}
      sidebarCaptionData={sidebarCaptionData(locale)}
      ContentCardData={ContentCardData(locale)}
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
      logo={logo}
      logowhite={logowhite}
      {...args}
    ></GenericPage>
  );
}

export const GenericPageStory = Template.bind({});
GenericPageStory.storyName = "Generic Page";

