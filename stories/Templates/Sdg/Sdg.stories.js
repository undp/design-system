import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { SdgPage } from "./Sdg";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/FooterUtils.js";
import { getCaptionForLocale as sdgsmodaldata } from "../../Molecules/Sdgmodal/Sdgmodal";
import heroImage from "../../assets/images/garden.jpg";
import BackgroundVideo from "../../assets/video/video_sample.mp4";
import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import { statsArray as statsData } from "../../Organism/StatsCardSlider/StatsCardSliderUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeaderUtils.js";
import sdglinkimage from "../../assets/images/sdg-link-image.png";
import sdg1 from "../../assets/images/sdg1.png";
import sdg2 from "../../assets/images/sdg2.jpeg";
import sdg3 from "../../assets/images/sdg3.jpeg";
import sdg4 from "../../assets/images/sdg4.jpeg";
import sdg5 from "../../assets/images/sdg5.jpeg";
import sdg6 from "../../assets/images/sdg6.jpeg";
import sdg7 from "../../assets/images/sdg7.jpeg";
import sdg8 from "../../assets/images/sdg8.jpeg";
import sdg9 from "../../assets/images/sdg9.jpeg";
import sdg10 from "../../assets/images/sdg10.jpeg";
import sdg11 from "../../assets/images/sdg11.jpeg";
import sdg12 from "../../assets/images/sdg12.jpeg";
import sdg13 from "../../assets/images/sdg13.jpeg";
import sdg14 from "../../assets/images/sdg14.jpeg";
import sdg15 from "../../assets/images/sdg15.jpeg";
import sdg16 from "../../assets/images/sdg16.jpeg";
import sdg17 from "../../assets/images/sdg17.jpeg";
import img from "../../assets/images/card-thumbnail.jpg";
import img2 from "../../assets/images/CardImage2.jpg";
import img3 from "../../assets/images/CardImage3.jpg";
import img4 from "../../assets/images/CardImage4.jpg";
import img5 from "../../assets/images/CardImage5.jpg";
import img6 from "../../assets/images/CardImage6.jpg";
import sdgimg from "../../assets/images/sdgmodalimg.png";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        herodata: [
          {
            text: "Home",
          },
          {
            text: "Sustainable Development Goals",
          },
        ],
        Sdgdata: [
          {
            text: "No poverty",
            bgcolor: "sdg-color-1",
            image: sdg1,
            anchor: "#no-poverty",
          },
          {
            text: "Zero hunger",
            bgcolor: "sdg-color-2",
            image: sdg2,
            anchor: "#zero-hunger",
          },
          {
            text: "Good health and well-being",
            bgcolor: "sdg-color-3",
            image: sdg3,
            anchor: "#good-health-and-well-being",
          },
          {
            text: "Quality education",
            bgcolor: "sdg-color-4",
            image: sdg4,
            anchor: "#quality-education",
          },
          {
            text: "Gender equality",
            bgcolor: "sdg-color-5",
            image: sdg5,
            anchor: "#gender-equality",
          },
          {
            text: "Clean water and sanitation",
            bgcolor: "sdg-color-6",
            image: sdg6,
            anchor: "#clean-water-and-sanitation",
          },
          {
            text: "Affordable and clean energy",
            bgcolor: "sdg-color-7",
            image: sdg7,
            anchor: "#affordable-and-clean-energy",
          },
          {
            text: "Decent work and economic growth",
            bgcolor: "sdg-color-8",
            image: sdg8,
            anchor: "#decent-work-and-economic-growth",
          },
          {
            text: "Industry, innovation and infrastructure",
            bgcolor: "sdg-color-9",
            image: sdg9,
            anchor: "#industry-innovation-and-infrastructure",
          },
          {
            text: "Reduced inequalities",
            bgcolor: "sdg-color-10",
            image: sdg10,
            anchor: "#reduced-inequalities",
          },
          {
            text: "Sustainable cities and communities",
            bgcolor: "sdg-color-11",
            image: sdg11,
            anchor: "#sustainable-cities-and-communities",
          },
          {
            text: "Responsible consumption and production",
            bgcolor: "sdg-color-12",
            image: sdg12,
            anchor: "#responsible-consumption-and-production",
          },
          {
            text: "Climate action",
            bgcolor: "sdg-color-13",
            image: sdg13,
            anchor: "#climate-action",
          },
          {
            text: "Life Below Water",
            bgcolor: "sdg-color-14",
            image: sdg14,
            anchor: "#life-below-water",
          },
          {
            text: "Life on land",
            bgcolor: "sdg-color-15",
            image: sdg15,
            anchor: "#life-on-land",
          },
          {
            text: "Peace, justice and strong institutions",
            bgcolor: "sdg-color-16",
            image: sdg16,
            anchor: "#peace-justice-and-strong-institutions",
          },
          {
            text: "Partnerships for the goals",
            bgcolor: "sdg-color-17",
            image: sdg17,
            anchor: "#partnerships-for-the-goals",
          },
        ],
        goaldata: [
          {
            text: "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round",
          },
          {
            text: "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons",
          },
          {
            text: "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment",
          },
          {
            text: "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality",
          },
          {
            text: "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed",
          },
          {
            text: "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries",
          },
          {
            text: "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round",
          },
          {
            text: "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility.",
          },
        ],
        modaltitle: "No Poverty",
        description: [
          "The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger.",
          <br />,
          <br />,
          "Unfortunately, extreme hunger and malnutrition remain a huge barrier to development in many countries. There are 821 million people estimated to be chronically undernourished as of 2017, often as a direct consequence of environmental degradation, drought and biodiversity loss. Over 90 million children under five are dangerously underweight. Undernourishment and severe food insecurity appear to be increasing in almost all regions of Africa, as well as in South America.",
          <br />,
          <br />,
          "The SDGs aim to end all forms of hunger and malnutrition by 2030, making sure all people-especially children-have sufficient and nutritious food all year. This involves promoting sustainable agricultural, supporting small-scale farmers and equal access to land, technology and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity.",
        ],
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "“UNDP at the Paris Peace” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "EIF and UNDP to strengthen cooperation for sustainable finance.",
            contentnametwo:
              "EIF and UNDP to strengthen cooperation for sustainable finance.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "EXPLORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "In Costa Rica, rural women grow their own",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "“UN calls for comprehensive debt standstill in all developing countries.”",
            contentnametwo:
              "“UN calls for comprehensive debt standstill in all developing countries.”",
            paragraph:
              "More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
        ],
        storyBtn: "VIEW MORE",
        Sdgcontenttitle: "SDGs in Action",
        nextcardtitle: "Good health and well being",
        modalgoaltitle: "Goal Targets",
        sdgtitle: "Sustainable Development Goals",
        goalcount: "Goal 1",
        goaltitle: "What are the Sustainable Development Goals?",
        goalpara:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "The SDGS In Action.",
        title: "The SDGS In Action.",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
      };
      return engText;
    case "arabic":
      const arabicText = {
        herodata: [
          {
            text: "الصفحة الرئيسية",
          },
          {
            text: "أهداف التنمية المستدامة",
          },
        ],
        Sdgdata: [
          {
            text: "لا يوجد فقر",
            bgcolor: "sdg-color-1",
            image: sdg1,
            anchor: "#no-poverty",
          },
          {
            text: "انعدام الجوع",
            bgcolor: "sdg-color-2",
            image: sdg2,
            anchor: "#zero-hunger",
          },
          {
            text: "بصحة جيدة ورفاهية",
            bgcolor: "sdg-color-3",
            image: sdg3,
            anchor: "#good-health-and-well-being",
          },
          {
            text: "تعليم ذو جودة",
            bgcolor: "sdg-color-4",
            image: sdg4,
            anchor: "#quality-education",
          },
          {
            text: "المساواة بين الجنسين",
            bgcolor: "sdg-color-5",
            image: sdg5,
            anchor: "#gender-equality",
          },
          {
            text: "المياه النظيفة والصرف الصحي",
            bgcolor: "sdg-color-6",
            image: sdg6,
            anchor: "#clean-water-and-sanitation",
          },
          {
            text: "طاقة نظيفة وبأسعار معقولة",
            bgcolor: "sdg-color-7",
            image: sdg7,
            anchor: "#affordable-and-clean-energy",
          },
          {
            text: "العمل اللائق والنمو الاقتصادي",
            bgcolor: "sdg-color-8",
            image: sdg8,
            anchor: "#decent-work-and-economic-growth",
          },
          {
            text: "الصناعة والابتكار والبنية التحتية",
            bgcolor: "sdg-color-9",
            image: sdg9,
            anchor: "#industry-innovation-and-infrastructure",
          },
          {
            text: "تقليل التفاوتات",
            bgcolor: "sdg-color-10",
            image: sdg10,
            anchor: "#reduced-inequalities",
          },
          {
            text: "المدن والمجتمعات المستدامة",
            bgcolor: "sdg-color-11",
            image: sdg11,
            anchor: "#sustainable-cities-and-communities",
          },
          {
            text: "الاستهلاك والإنتاج المسؤولان",
            bgcolor: "sdg-color-12",
            image: sdg12,
            anchor: "#responsible-consumption-and-production",
          },
          {
            text: "العمل المناخي",
            bgcolor: "sdg-color-13",
            image: sdg13,
            anchor: "#climate-action",
          },
          {
            text: "الحياة تحت الماء",
            bgcolor: "sdg-color-14",
            image: sdg14,
            anchor: "#life-below-water",
          },
          {
            text: "الحياة على الأرض",
            bgcolor: "sdg-color-15",
            image: sdg15,
            anchor: "#life-on-land",
          },
          {
            text: "السلام والعدل والمؤسسات القوية",
            bgcolor: "sdg-color-16",
            image: sdg16,
            anchor: "#peace-justice-and-strong-institutions",
          },
          {
            text: "شراكات للأهداف",
            bgcolor: "sdg-color-17",
            image: sdg17,
            anchor: "#partnerships-for-the-goals",
          },
        ],
        goaldata: [
          {
            text: "بحلول عام 2030 ، القضاء على الجوع وضمان حصول جميع الناس ، ولا سيما الفقراء والأشخاص المستضعفين ، بمن فيهم الأطفال ، على غذاء آمن ومغذٍ وكافٍ على مدار السنة",
          },
          {
            text: "إنهاء جميع أشكال سوء التغذية ، بحلول عام 2030 ، بما في ذلك تحقيق الأهداف المتفق عليها دوليًا بشأن التقزم والهزال لدى الأطفال دون سن الخامسة ، بحلول عام 2025 ، ومعالجة الاحتياجات الغذائية للمراهقات والنساء الحوامل والمرضعات وكبار السن",
          },
          {
            text: "مضاعفة الإنتاجية الزراعية ودخل صغار منتجي الأغذية ، ولا سيما النساء والشعوب الأصلية والمزارعين الأسريين والرعاة والصيادين ، بما في ذلك من خلال الوصول الآمن والمتساوي إلى الأراضي والموارد والمدخلات الإنتاجية الأخرى والمعرفة والخدمات المالية ، بحلول عام 2030 الأسواق وفرص إضافة القيمة والعمالة غير الزراعية",
          },
          {
            text: "بحلول عام 2030 ، ضمان وجود نظم إنتاج غذائي مستدامة وتنفيذ ممارسات زراعية مرنة تزيد من الإنتاجية والإنتاج ، وتساعد في الحفاظ على النظم البيئية ، وتعزز القدرة على التكيف مع تغير المناخ ، والطقس المتطرف ، والجفاف ، والفيضانات ، والكوارث الأخرى ، والتي تعمل على تحسين جودة الأرض والتربة تدريجياً",
          },
          {
            text: "بحلول عام 2020 ، الحفاظ على التنوع الجيني للبذور والنباتات المزروعة والحيوانات المستزرعة والمستأنسة والأنواع البرية ذات الصلة ، بما في ذلك من خلال بنوك البذور والنباتات المدارة بشكل سليم والمتنوعة على المستويات الوطنية والإقليمية والدولية ، وتعزيز الوصول إلى وبنوك عادلة ومنصفة تقاسم المنافع الناشئة عن استخدام الموارد الجينية والمعارف التقليدية المرتبطة بها ، على النحو المتفق عليه دوليا",
          },
          {
            text: "زيادة الاستثمار ، بما في ذلك من خلال تعزيز التعاون الدولي ، في البنية التحتية الريفية ، والبحوث الزراعية وخدمات الإرشاد ، وتطوير التكنولوجيا وبنوك الجينات النباتية والحيوانية من أجل تعزيز القدرة الإنتاجية الزراعية في البلدان النامية ، ولا سيما أقل البلدان نموا",
          },
          {
            text: "تصحيح ومنع القيود والتشوهات التجارية في الأسواق الزراعية العالمية ، بما في ذلك من خلال الإلغاء الموازي لجميع أشكال دعم الصادرات الزراعية وجميع تدابير التصدير ذات الأثر المماثل ، وفقًا لتفويض جولة الدوحة الإنمائية",
          },
          {
            text: "اعتماد تدابير لضمان الأداء السليم لأسواق السلع الغذائية ومشتقاتها وتسهيل الوصول في الوقت المناسب إلى معلومات السوق ، بما في ذلك الاحتياطيات الغذائية ، من أجل المساعدة في الحد من التقلبات الشديدة في أسعار الغذاء.",
          },
        ],
        modaltitle: "لا فقر",
        description: [
          "انخفض عدد الأشخاص الذين يعانون من نقص التغذية بمقدار النصف تقريبًا في العقدين الماضيين بسبب النمو الاقتصادي السريع وزيادة الإنتاجية الزراعية. العديد من البلدان النامية التي كانت تعاني من المجاعة والجوع يمكنها الآن تلبية احتياجاتها الغذائية. لقد أحرزت آسيا الوسطى والشرقية وأمريكا اللاتينية والبحر الكاريبي جميعها تقدماً هائلاً في القضاء على الجوع المدقع.",
          <br />,
          <br />,
          "لسوء الحظ ، لا يزال الجوع الشديد وسوء التغذية يشكلان عائقًا كبيرًا أمام التنمية في العديد من البلدان. تشير التقديرات إلى أن هناك 821 مليون شخص يعانون من نقص التغذية المزمن اعتبارًا من عام 2017 ، غالبًا كنتيجة مباشرة للتدهور البيئي والجفاف وفقدان التنوع البيولوجي. يعاني أكثر من 90 مليون طفل دون سن الخامسة من نقص الوزن بشكل خطير. يبدو أن نقص التغذية وانعدام الأمن الغذائي الحاد يتزايدان في جميع مناطق إفريقيا تقريبًا ، وكذلك في أمريكا الجنوبية.",
          <br />,
          <br />,
          "تهدف أهداف التنمية المستدامة إلى القضاء على جميع أشكال الجوع وسوء التغذية بحلول عام 2030 ، والتأكد من حصول جميع الناس - وخاصة الأطفال - على غذاء كافٍ ومغذٍ طوال العام. وهذا ينطوي على تعزيز الزراعة المستدامة ، ودعم صغار المزارعين والمساواة في الوصول إلى الأرض والتكنولوجيا والأسواق. كما يتطلب تعاونًا دوليًا لضمان الاستثمار في البنية التحتية والتكنولوجيا لتحسين الإنتاجية الزراعية.",
        ],
        contentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: "“برنامج الأمم المتحدة الإنمائي في باريس للسلام” ",
            contentnametwo: "“نحن شعب منسي.”",
            paragraph:
              "استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            contentnametwo:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            paragraph:
              "الألم نفسه هو الحب ، نظام التخزين الرئيسي. من جعبة اليخت الناعمة ، يحتاج عدد كبير من اللحم البقري النقي.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "كرم مع ماض عريق يتلقى حقنة من الحياة الجديدة.",
            button: "يكتشف",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "في كوستاريكا ، تقوم المرأة الريفية بتنمية بلدها",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "“نحن شعب منسي.” ",
            contentnametwo: "“نحن شعب منسي.”",
            paragraph:
              "استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "“الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.”",
            contentnametwo:
              "“الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.”",
            paragraph:
              "خلفت أكثر من تسع سنوات من الحرب 11.7 مليون سوري بحاجة إلى المساعدة و 6.2 مليون نازح داخليًا ، عدة مرات أكثر.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
        ],
        storyBtn: "عرض المزيد",
        Sdgcontenttitle: "أهداف التنمية المستدامة في العمل",
        nextcardtitle: "صحة جيدة ورفاهية",
        modalgoaltitle: "أهداف الهدف",
        sdgtitle: "أهداف التنمية المستدامة",
        goalcount: "الهدف 1",
        goaltitle: "ما هي أهداف التنمية المستدامة؟",
        goalpara:
          "الألم بحد ذاته هو حب الألم ، المشاكل البيئية الرئيسية ، لكني أعطي هذا النوع من الوقت للتراجع ، بحيث يكون هناك بعض الألم والألم العظيمين. من أجل ذلك ، سيأتي أي واحد منا في الغالب لممارسة أي نوع من العمل باستثناء الاستفادة من الأهداف منه.",
        title: "أهداف التنمية المستدامة قيد التنفيذ",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        herodata: [
          {
            text: "အိမ်ပြန်",
          },
          {
            text: "စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေများ",
          },
        ],
        Sdgdata: [
          {
            text: "ဆင်းရဲခြင်း မရှိ။",
            bgcolor: "sdg-color-1",
            image: sdg1,
            anchor: "#no-poverty",
          },
          {
            text: "လုံးဝဆာလောင်မှု",
            bgcolor: "sdg-color-2",
            image: sdg2,
            anchor: "#zero-hunger",
          },
          {
            text: "ကျန်းမာချမ်းသာကြပါစေ",
            bgcolor: "sdg-color-3",
            image: sdg3,
            anchor: "#good-health-and-well-being",
          },
          {
            text: "ပညာရေးအရည်အသွေး",
            bgcolor: "sdg-color-4",
            image: sdg4,
            anchor: "#quality-education",
          },
          {
            text: "ကျားမတန်းတူရေ",
            bgcolor: "sdg-color-5",
            image: sdg5,
            anchor: "#gender-equality",
          },
          {
            text: "ရေသန့် တို့ဖြစ်ကြောင်း သိရှိရပါတယ်။",
            bgcolor: "sdg-color-6",
            image: sdg6,
            anchor: "#clean-water-and-sanitation",
          },
          {
            text: "တတ်နိုင်သော သန့်ရှင်းသောစွမ်းအင်",
            bgcolor: "sdg-color-7",
            image: sdg7,
            anchor: "#affordable-and-clean-energy",
          },
          {
            text: "သင့်လျော်သောအလုပ်နှင့် စီးပွားရေးတိုးတက်မှု",
            bgcolor: "sdg-color-8",
            image: sdg8,
            anchor: "#decent-work-and-economic-growth",
          },
          {
            text: "စက်မှု၊ ဆန်းသစ်တီထွင်မှုနှင့် အခြေခံအဆောက်အအုံ",
            bgcolor: "sdg-color-9",
            image: sdg9,
            anchor: "#industry-innovation-and-infrastructure",
          },
          {
            text: "မညီမျှမှုများကို လျှော့ချပါ။",
            bgcolor: "sdg-color-10",
            image: sdg10,
            anchor: "#reduced-inequalities",
          },
          {
            text: "ရေရှည်တည်တံ့သောမြို့များနှင့်အသိုင်းအဝိုင်း",
            bgcolor: "sdg-color-11",
            image: sdg11,
            anchor: "#sustainable-cities-and-communities",
          },
          {
            text: "သုံးစွဲမှုနှင့် ထုတ်လုပ်ရေးတွင် တာဝန်ရှိသည်။",
            bgcolor: "sdg-color-12",
            image: sdg12,
            anchor: "#responsible-consumption-and-production",
          },
          {
            text: "ရာသီဥတုလုပ်ဆောင်ချက်",
            bgcolor: "sdg-color-13",
            image: sdg13,
            anchor: "#climate-action",
          },
          {
            text: "ရေအောက်ဘဝ",
            bgcolor: "sdg-color-14",
            image: sdg14,
            anchor: "#life-below-water",
          },
          {
            text: "မြေပေါ်ဘဝ",
            bgcolor: "sdg-color-15",
            image: sdg15,
            anchor: "#life-on-land",
          },
          {
            text: "ငြိမ်းချမ်းရေး၊ တရားမျှတမှုနှင့် ခိုင်မာသော အင်စတီကျူးရှင်းများ",
            bgcolor: "sdg-color-16",
            image: sdg16,
            anchor: "#peace-justice-and-strong-institutions",
          },
          {
            text: "ရည်မှန်းချက်များအတွက် ပူးပေါင်းဆောင်ရွက်ခြင်း",
            bgcolor: "sdg-color-17",
            image: sdg17,
            anchor: "#partnerships-for-the-goals",
          },
        ],
        goaldata: [
          {
            text: "2030 ခုနှစ်တွင် ငတ်မွတ်ခေါင်းပါးမှုကို ရပ်တန့်စေပြီး မွေးကင်းစကလေးငယ်များ အပါအဝင် ဘေးအန္တရာယ် ကင်းရှင်းရေး၊ အာဟာရပြည့်ဝပြီး တစ်နှစ်ပတ်လုံး အစာအာဟာရ လုံလောက်စွာ ရရှိနိုင်ရေး၊ အထူးသဖြင့် ဆင်းရဲနွမ်းပါးသူများ၊",
          },
          {
            text: "2030 ခုနှစ်တွင် အောင်မြင်မှု အပါအဝင် အာဟာရချို့တဲ့မှု ပုံစံအားလုံးကို 2025 ခုနှစ်တွင် ရပ်တန့်၍ အသက် 5 နှစ်အောက် ကလေးများတွင် ပုညှက်ခြင်းနှင့် ဖြုန်းတီးခြင်းဆိုင်ရာ နိုင်ငံတကာ သဘောတူထားသည့် ရည်မှန်းချက်များနှင့် ဆယ်ကျော်သက် မိန်းကလေးများ၊ ကိုယ်ဝန်ဆောင်နှင့် နို့တိုက်မိခင်များနှင့် သက်ကြီးရွယ်အိုများ၏ အာဟာရလိုအပ်ချက်များကို ကိုင်တွယ်ဖြေရှင်းရန်၊",
          },
          {
            text: "2030 ခုနှစ်တွင် အသေးစားစားနပ်ရိက္ခာထုတ်လုပ်သူများ အထူးသဖြင့် အမျိုးသမီးများ၊ ဌာနေတိုင်းရင်းသားလူမျိုးများ၊ မိသားစုလယ်သမားများ၊ သင်းအုပ်ဆရာနှင့် တံငါသည်များ၏ လယ်ယာကုန်ထုတ်စွမ်းအားနှင့် ဝင်ငွေနှစ်ဆတိုးလာခြင်း၊ အခြားကုန်ထုတ်စွမ်းအားအရင်းအမြစ်များနှင့် သွင်းအားစုများ၊ အသိပညာ၊ ငွေကြေးဝန်ဆောင်မှုများ၊ စျေးကွက်များနှင့် တန်ဖိုးထပ်တိုးမှုနှင့် လယ်ယာမဟုတ်သော အလုပ်အကိုင်အခွင့်အလမ်းများ",
          },
          {
            text: "2030 ခုနှစ်တွင် ရေရှည်တည်တံ့သော စားနပ်ရိက္ခာထုတ်လုပ်မှုစနစ်များကို သေချာစေရန်နှင့် ကုန်ထုတ်စွမ်းအားနှင့် ထုတ်လုပ်မှုကို မြှင့်တင်ပေးသည့် ဂေဟစနစ်များကို ထိန်းသိမ်းရန်၊ ရာသီဥတုဖောက်ပြန်မှု၊ လွန်ကဲသောရာသီဥတု၊ မိုးခေါင်မှု၊ ရေကြီးမှုနှင့် အခြားဘေးအန္တရာယ်များနှင့် မြေဆီလွှာအရည်အသွေးကို အဆင့်ဆင့်တိုးတက်ကောင်းမွန်လာစေသော ဂေဟစနစ်များကို ထိန်းသိမ်းရာတွင် အထောက်အကူဖြစ်စေသော ကျင့်ဝတ်များကို အကောင်အထည်ဖော်ပါ။",
          },
          {
            text: "2020 တွင် မျိုးစေ့များ၊ စိုက်ပျိုးထားသော အပင်များနှင့် မွေးမြူရေးနှင့် အိမ်မွေးတိရစ္ဆာန်များနှင့် ၎င်းတို့၏ ဆက်စပ်သော တောရိုင်းမျိုးစိတ်များကို နိုင်ငံတော်၊ ဒေသဆိုင်ရာနှင့် နိုင်ငံတကာအဆင့်များတွင် ကောင်းစွာ စီမံခန့်ခွဲပြီး မျိုးစေ့နှင့် အပင်ဘဏ်များမှတစ်ဆင့် ထိန်းသိမ်းကာ တရားမျှတ၍ သာတူညီမျှရရှိရေးကို မြှင့်တင်ပါ။ နိုင်ငံတကာမှ သဘောတူထားသည့်အတိုင်း မျိုးဗီဇဆိုင်ရာ အရင်းအမြစ်များနှင့် ဆက်စပ်မိရိုးဖလာ အသိပညာများကို အသုံးချခြင်းမှ ဖြစ်ပေါ်လာသည့် အကျိုးကျေးဇူးများကို မျှဝေပေးခြင်း",
          },
          {
            text: "ဖွံ့ဖြိုးဆဲနိုင်ငံများတွင် အထူးသဖြင့် ဖွံ့ဖြိုးမှုအနည်းဆုံးနိုင်ငံများတွင် စိုက်ပျိုးရေးသုတေသနနှင့် တိုးချဲ့ဝန်ဆောင်မှုများ၊ နည်းပညာဖွံ့ဖြိုးတိုးတက်ရေးနှင့် အပင်နှင့် တိရစ္ဆာန်မျိုးရိုးဗီဇဘဏ်များ အပါအဝင် နိုင်ငံတကာ ပူးပေါင်းဆောင်ရွက်မှုများ တိုးမြှင့်ခြင်းဖြင့် ရင်းနှီးမြှုပ်နှံမှုများ တိုးမြှင့်ဆောင်ရွက်ခြင်း၊",
          },
          {
            text: "Doha Development Round ၏ လုပ်ပိုင်ခွင့်များနှင့်အညီ စိုက်ပျိုးရေးပို့ကုန်ထောက်ပံ့မှုပုံစံအားလုံးကို စင်ပြိုင်ပပျောက်ရေးနှင့် ညီမျှသောအကျိုးသက်ရောက်မှုဖြင့် တင်ပို့ခြင်းအစီအမံများ အပါအဝင် ကမ္ဘာ့စိုက်ပျိုးရေးဈေးကွက်အတွင်း ကုန်သွယ်မှုကန့်သတ်ချုပ်ချယ်မှုများနှင့် လွဲမှားမှုများကို တားဆီးကာကွယ်ရန်၊",
          },
          {
            text: "စားနပ်ရိက္ခာစျေးကွက်နှင့် ၎င်းတို့၏ ဆင်းသက်လာမှုများ၏ သင့်လျော်သောလည်ပတ်မှုကို သေချာစေရန် အစီအမံများကို ချမှတ်ပြီး အစားအသောက်သိုလှောင်မှုဆိုင်ရာ အချက်အလက်များအပါအဝင် စျေးကွက်အချက်အလက်များကို အချိန်နှင့်တစ်ပြေးညီ ဝင်ရောက်ကြည့်ရှုနိုင်စေရန်အတွက် အလွန်အမင်းစားသောက်ကုန်စျေးနှုန်းမတည်ငြိမ်မှုကို ကန့်သတ်ရန် ကူညီပေးပါသည်။",
          },
        ],
        modaltitle: "ဆင်းရဲမွဲတေမှု မရှိပါ။",
        description: [
          "စီးပွားရေး အရှိန်အဟုန်နဲ့ ဖွံ့ဖြိုးတိုးတက်လာပြီး လယ်ယာကုန်ထုတ်စွမ်းအား တိုးလာမှုကြောင့် လွန်ခဲ့သည့် ဆယ်စုနှစ် နှစ်ခုအတွင်း အာဟာရချို့တဲ့သူဦးရေ ထက်ဝက်နီးပါး ကျဆင်းသွားခဲ့သည်။ အငတ်ဘေးနှင့် ငတ်မွတ်မှုဒဏ်ကို ခံစားခဲ့ရဖူးသော ဖွံ့ဖြိုးဆဲနိုင်ငံများစွာသည် ယခုအခါ ၎င်းတို့၏ အာဟာရလိုအပ်ချက်များကို ဖြည့်ဆည်းပေးနိုင်ပြီဖြစ်သည်။ အလယ်ပိုင်းနှင့် အရှေ့အာရှ၊ လက်တင်အမေရိကနှင့် ကာရေဘီယံဒေသအားလုံးသည် အလွန်အမင်းငတ်မွတ်မှုကို ချေဖျက်ရာတွင် ကြီးမားသောတိုးတက်မှုကို ရရှိခဲ့သည်။",
          <br />,
          <br />,
          "ကံမကောင်းစွာဖြင့်၊ အလွန်အမင်းငတ်မွတ်မှုနှင့် အာဟာရချို့တဲ့မှုသည် နိုင်ငံများစွာတွင် ဖွံ့ဖြိုးတိုးတက်မှုအတွက် ကြီးမားသောအတားအဆီးတစ်ခုအဖြစ် ရှိနေသေးသည်။ သဘာဝပတ်ဝန်းကျင် ပျက်စီးယိုယွင်းခြင်း၊ မိုးခေါင်ခြင်းနှင့် ဇီဝမျိုးစုံမျိုးကွဲများ ဆုံးရှုံးခြင်း၏ တိုက်ရိုက်အကျိုးဆက်အနေဖြင့် 2017 ခုနှစ်အထိ လူပေါင်း 821 သန်းခန့် ရှိသည်။ ငါးနှစ်အောက် ကလေး သန်း 90 ကျော်သည် အန္တရာယ်ရှိသော ကိုယ်အလေးချိန်များနေပါသည်။ အာဟာရချို့တဲ့မှုနှင့် ပြင်းထန်သော စားနပ်ရိက္ခာမလုံလောက်မှုတို့သည် အာဖရိကဒေသအားလုံးနီးပါးတွင်သာမက တောင်အမေရိကတွင်ပါ တိုးများလာနေပုံပေါ်သည်။",
          <br />,
          <br />,
          "SDGs သည် 2030 ခုနှစ်တွင် ငတ်မွတ်ခေါင်းပါးမှုနှင့် အာဟာရချို့တဲ့မှုပုံစံအားလုံးကို အဆုံးသတ်ရန် ရည်မှန်းထားပြီး လူသားအားလုံး အထူးသဖြင့် ကလေးများသည် တစ်နှစ်ပတ်လုံး အာဟာရပြည့်ဝပြီး လုံလောက်သောအစားအစာရရှိရေး သေချာစေရန် ရည်မှန်းထားသည်။ ယင်းတွင် ရေရှည်တည်တံ့သော စိုက်ပျိုးရေးကို မြှင့်တင်ခြင်း၊ အသေးစား လယ်သမားများကို ပံ့ပိုးပေးခြင်းနှင့် မြေယာ၊ နည်းပညာနှင့် စျေးကွက်များ တန်းတူညီမျှ လက်လှမ်းမီနိုင်ခြင်းတို့ ပါဝင်သည်။ လယ်ယာကုန်ထုတ်စွမ်းအားမြှင့်တင်ရန် အခြေခံအဆောက်အအုံနှင့် နည်းပညာများတွင် ရင်းနှီးမြှုပ်နှံမှုများ သေချာစေရန် နိုင်ငံတကာ ပူးပေါင်းဆောင်ရွက်မှု လိုအပ်ပါသည်။",
        ],
        contentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: "“UNDP က Paris ငြိမ်းချမ်းရေး၊” ",
            contentnametwo: "“ကျွန်ုပ်တို့သည် မေ့လျော့နေသူများဖြစ်သည်။”",
            paragraph:
              "COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            contentnametwo:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            paragraph:
              "နာကျင်မှုကိုယ်တိုင်က အချစ်ကို ပင်မသိမ်းဆည်းခြင်းဖြစ်ပါသည်။ ရွက်လှေ၏ ပျော့ပျောင်းသော ကျည်တောက်မှ အမဲသားစစ်စစ် အများအပြား လိုအပ်သည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပုံပြင်အတိတ်တစ်ခုပါရှိသော စပျစ်ဥယျာဉ်သည် ဘဝသစ်ကို ဆေးထိုးခြင်းခံရသည်။",
            button: "စူးစမ်းပါ။",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့ကိုယ်တိုင် စိုက်ပျိုးကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: "“ကျွန်ုပ်တို့သည် မေ့လျော့နေသူများဖြစ်သည်။” ",
            contentnametwo: "“ကျွန်ုပ်တို့သည် မေ့လျော့နေသူများဖြစ်သည်။”",
            paragraph:
              "COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "“ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။”",
            contentnametwo:
              "“ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။”",
            paragraph:
              "စစ်ပွဲ ကိုးနှစ်ကျော်ကြာ ဖြစ်ပွားခဲ့သော ဆီးရီးယားနိုင်ငံသား ၁၁.၇ သန်းသည် အကူအညီများ လိုအပ်နေပြီး ၆.၂ သန်းမှာ ပြည်တွင်း အိုးအိမ်စွန့်ခွာ ထွက်ပြေးခဲ့ရပြီး အချို့မှာ အကြိမ်များစွာ ပြီးဆုံးသွားခဲ့သည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
        ],
        storyBtn: "ပိုမိုကြည့်ရှုပါ။",
        Sdgcontenttitle: "လုပ်ဆောင်ချက်ရှိ SDGs",
        nextcardtitle: "ကျန်းမာချမ်းသာကြပါစေ",
        modalgoaltitle: "ရည်မှန်းချက်ပန်းတိုင်များ",
        sdgtitle: "စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေး ပန်းတိုင်များ",
        goalcount: "ပန်းတိုင် ၁",
        goaltitle: "စဉ်ဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်ရေး ပန်းတိုင်များကား အဘယ်နည်း။",
        goalpara:
          "ဝေဒနာကိုယ်တိုင်က ဝေဒနာရဲ့ အဓိက ဂေဟဗေဒဆိုင်ရာ ပြဿနာတွေကို တပ်မက်မှု ဖြစ်ပေမယ့် ပြိုလဲဖို့ ဒီလိုမျိုး အချိန်ပေးလိုက်တာ ဆိုတော့ ကြီးစွာသော ဝေဒနာနဲ့ ဝေဒနာ။ သို့မှသာ အများစုအတွက်၊ ကျွန်ုပ်တို့ထဲမှ မည်သူတစ်ဦးတစ်ယောက်သည် ယင်းမှ ရည်ရွယ်ချက်များကို အခွင့်ကောင်းယူရန်မှတပါး မည်သည့်အလုပ်အကိုင်မျိုးကိုမဆို ကျင့်သုံးလာမည်ဖြစ်သည်။",
        title: "SDGS လုပ်ဆောင်ချက်",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        herodata: [
          {
            text: "家",
          },
          {
            text: "持続可能な開発目標",
          },
        ],
        Sdgdata: [
          {
            text: "貧困はありません",
            bgcolor: "sdg-color-1",
            image: sdg1,
            anchor: "#no-poverty",
          },
          {
            text: "空腹ゼロ",
            bgcolor: "sdg-color-2",
            image: sdg2,
            anchor: "#zero-hunger",
          },
          {
            text: "健康と幸福",
            bgcolor: "sdg-color-3",
            image: sdg3,
            anchor: "#good-health-and-well-being",
          },
          {
            text: "質の高い教育",
            bgcolor: "sdg-color-4",
            image: sdg4,
            anchor: "#quality-education",
          },
          {
            text: "男女平等",
            bgcolor: "sdg-color-5",
            image: sdg5,
            anchor: "#gender-equality",
          },
          {
            text: "きれいな水と衛生",
            bgcolor: "sdg-color-6",
            image: sdg6,
            anchor: "#clean-water-and-sanitation",
          },
          {
            text: "手ごろな価格でクリーンなエネルギー",
            bgcolor: "sdg-color-7",
            image: sdg7,
            anchor: "#affordable-and-clean-energy",
          },
          {
            text: "まともな仕事と経済成長",
            bgcolor: "sdg-color-8",
            image: sdg8,
            anchor: "#decent-work-and-economic-growth",
          },
          {
            text: "産業、イノベーション、インフラストラクチャ",
            bgcolor: "sdg-color-9",
            image: sdg9,
            anchor: "#industry-innovation-and-infrastructure",
          },
          {
            text: "不平等の削減",
            bgcolor: "sdg-color-10",
            image: sdg10,
            anchor: "#reduced-inequalities",
          },
          {
            text: "持続可能な都市とコミュニティ",
            bgcolor: "sdg-color-11",
            image: sdg11,
            anchor: "#sustainable-cities-and-communities",
          },
          {
            text: "責任ある消費と生産",
            bgcolor: "sdg-color-12",
            image: sdg12,
            anchor: "#responsible-consumption-and-production",
          },
          {
            text: "気候変動対策",
            bgcolor: "sdg-color-13",
            image: sdg13,
            anchor: "#climate-action",
          },
          {
            text: "水面下での生活",
            bgcolor: "sdg-color-14",
            image: sdg14,
            anchor: "#life-below-water",
          },
          {
            text: "陸上での生活",
            bgcolor: "sdg-color-15",
            image: sdg15,
            anchor: "#life-on-land",
          },
          {
            text: "平和、正義、そして強力な制度",
            bgcolor: "sdg-color-16",
            image: sdg16,
            anchor: "#peace-justice-and-strong-institutions",
          },
          {
            text: "目標のためのパートナーシップ",
            bgcolor: "sdg-color-17",
            image: sdg17,
            anchor: "#partnerships-for-the-goals",
          },
        ],
        goaldata: [
          {
            text: "2030年までに、飢餓を終わらせ、すべての人々、特に貧困層や乳幼児を含む脆弱な状況にある人々が、一年中安全で栄養価の高い十分な食料にアクセスできるようにします。",
          },
          {
            text: "2030年までに、5歳未満の子供たちの発育阻害と消耗に関する国際的に合意された目標を達成することを含め、あらゆる形態の栄養失調を終わらせ、思春期の少女、妊娠中および授乳中の女性、および高齢者の栄養ニーズに対処します。",
          },
          {
            text: "2030年までに、小規模食品生産者、特に女性、先住民、家族農家、牧畜民、漁師の農業生産性と収入を2倍にします。これには、土地、その他の生産的な資源と投入物、知識、金融サービスへの安全で平等なアクセスが含まれます。 付加価値と非農業雇用の市場と機会",
          },
          {
            text: "2030年までに、持続可能な食料生産システムを確保し、生産性と生産性を高め、生態系の維持を助け、気候変動、異常気象、干ばつ、洪水、その他の災害への適応能力を強化し、土地と土壌の質を徐々に改善する回復力のある農業慣行を実施する",
          },
          {
            text: "2020年までに、国、地域、国際レベルでの健全に管理され多様化された種子および植物バンクを含む、種子、栽培植物、養殖および家畜およびそれらに関連する野生種の遺伝的多様性を維持し、公正かつ公平なアクセスを促進する 国際的に合意された、遺伝資源および関連する伝統的知識の利用から生じる利益の共有",
          },
          {
            text: "発展途上国、特に発展途上国における農業生産能力を強化するために、農村インフラ、農業研究および普及サービス、技術開発、植物および家畜の遺伝子バンクへの国際協力の強化などを通じて投資を増やす",
          },
          {
            text: "ドーハ開発ラウンドのマンデートに従って、あらゆる形態の農業輸出補助金と同等の効果を持つすべての輸出措置を並行して廃止するなど、世界の農業市場における貿易制限と歪みを修正および防止します。",
          },
          {
            text: "極端な食料価格の変動を制限するために、食料品市場とその派生物の適切な機能を確保し、食料備蓄を含む市場情報へのタイムリーなアクセスを容易にするための措置を採用する。",
          },
        ],
        modaltitle: "貧困なし",
        description: [
          "急速な経済成長と農業生産性の向上により、栄養不足の人々の数は過去20年間でほぼ半分に減少しました。 飢饉と飢餓に苦しんでいた多くの開発途上国は、今や彼らの栄養ニーズを満たすことができます。 中央アジアと東アジア、ラテンアメリカ、カリブ海諸国はすべて、極度の飢餓撲滅において大きな進歩を遂げました。",
          <br />,
          <br />,
          "残念ながら、極度の飢餓と栄養失調は、多くの国で開発に対する大きな障壁となっています。 2017年の時点で、慢性的に栄養不足になっていると推定される8億2100万人の人々がいます。これは、多くの場合、環境の悪化、干ばつ、生物多様性の喪失の直接的な結果です。 5歳未満の9千万人以上の子供は危険なほど低体重です。 栄養不足と深刻な食糧不安は、アフリカのほぼすべての地域と南アメリカで増加しているようです。",
          <br />,
          <br />,
          "SDGsは、2030年までにあらゆる形態の飢餓と栄養失調を終わらせ、すべての人々、特に子供たちが一年中十分で栄養価の高い食料を確実に摂取できるようにすることを目指しています。 これには、持続可能な農業の促進、小規模農家の支援、土地、技術、市場への平等なアクセスが含まれます。 また、農業生産性を向上させるためのインフラと技術への投資を確保するための国際協力も必要です。",
        ],
        contentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "“パリ講和会議でのUNDP” ",
            contentnametwo: "“私たちは忘れられた人口です。”",
            paragraph:
              "ソーシャルメディアを使用して、疎外されたグループがCOVID-19中にHIVサービスを受けるのを支援する",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            contentnametwo: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            paragraph:
              "痛み自体は愛、主な記憶システムです。 ヨットの柔らかい矢筒から、たくさんの純粋な牛肉が必要です。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "green",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "名高い過去のあるブドウ園は、新しい生命の注入を受けます",
            button: "يكتشف",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "コスタリカでは、地方の女性が自分たちで育ちます",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "“私たちは忘れられた人口です。” ",
            contentnametwo: "“私たちは忘れられた人口です。”",
            paragraph:
              "ソーシャルメディアを使用して、疎外されたグループがCOVID-19中にHIVサービスを受けるのを支援する",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "“国連は、すべての開発途上国で包括的な債務停止を求めています。”",
            contentnametwo:
              "“国連は、すべての開発途上国で包括的な債務停止を求めています。”",
            paragraph:
              "9年以上の戦争により、1170万人のシリア人が支援を必要としており、620万人が国内避難民となっています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
        ],
        storyBtn: "もっと見る",
        Sdgcontenttitle: "実行中のSDGs",
        nextcardtitle: "健康と幸福",
        modalgoaltitle: "目標目標",
        sdgtitle: "持続可能な開発目標",
        goalcount: "ゴール1",
        goaltitle: "持続可能な開発目標とは何ですか？",
        goalpara:
          "痛み自体は、主な生態学的問題である痛みへの愛情ですが、私はこの種の時間を与えて倒れるので、いくつかの大きな痛みと痛みがあります。 ほとんどの場合、私たちの誰もが、そこからの目的を利用することを除いて、あらゆる種類の雇用の行使に来るでしょう。",
        title: "SDGSの実施",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
      };
      return japaneseText;
    default:
      const dummy = {
        herodata: [
          {
            text: "Home",
          },
          {
            text: "Sustainable Development Goals",
          },
        ],
        Sdgdata: [
          {
            text: "No poverty",
            bgcolor: "sdg-color-1",
            image: sdg1,
            anchor: "#no-poverty",
          },
          {
            text: "Zero hunger",
            bgcolor: "sdg-color-2",
            image: sdg2,
            anchor: "#zero-hunger",
          },
          {
            text: "Good health and well-being",
            bgcolor: "sdg-color-3",
            image: sdg3,
            anchor: "#good-health-and-well-being",
          },
          {
            text: "Quality education",
            bgcolor: "sdg-color-4",
            image: sdg4,
            anchor: "#quality-education",
          },
          {
            text: "Gender equality",
            bgcolor: "sdg-color-5",
            image: sdg5,
            anchor: "#gender-equality",
          },
          {
            text: "Clean water and sanitation",
            bgcolor: "sdg-color-6",
            image: sdg6,
            anchor: "#clean-water-and-sanitation",
          },
          {
            text: "Affordable and clean energy",
            bgcolor: "sdg-color-7",
            image: sdg7,
            anchor: "#affordable-and-clean-energy",
          },
          {
            text: "Decent work and economic growth",
            bgcolor: "sdg-color-8",
            image: sdg8,
            anchor: "#decent-work-and-economic-growth",
          },
          {
            text: "Industry, innovation and infrastructure",
            bgcolor: "sdg-color-9",
            image: sdg9,
            anchor: "#industry-innovation-and-infrastructure",
          },
          {
            text: "Reduced inequalities",
            bgcolor: "sdg-color-10",
            image: sdg10,
            anchor: "#reduced-inequalities",
          },
          {
            text: "Sustainable cities and communities",
            bgcolor: "sdg-color-11",
            image: sdg11,
            anchor: "#sustainable-cities-and-communities",
          },
          {
            text: "Responsible consumption and production",
            bgcolor: "sdg-color-12",
            image: sdg12,
            anchor: "#responsible-consumption-and-production",
          },
          {
            text: "Climate action",
            bgcolor: "sdg-color-13",
            image: sdg13,
            anchor: "#climate-action",
          },
          {
            text: "Life Below Water",
            bgcolor: "sdg-color-14",
            image: sdg14,
            anchor: "#life-below-water",
          },
          {
            text: "Life on land",
            bgcolor: "sdg-color-15",
            image: sdg15,
            anchor: "#life-on-land",
          },
          {
            text: "Peace, justice and strong institutions",
            bgcolor: "sdg-color-16",
            image: sdg16,
            anchor: "#peace-justice-and-strong-institutions",
          },
          {
            text: "Partnerships for the goals",
            bgcolor: "sdg-color-17",
            image: sdg17,
            anchor: "#partnerships-for-the-goals",
          },
        ],
        goaldata: [
          {
            text: "By 2030, end hunger and ensure access by all people, in particular the poor and people in vulnerable situations, including infants, to safe, nutritious and sufficient food all year round",
          },
          {
            text: "By 2030, end all forms of malnutrition, including achieving, by 2025, the internationally agreed targets on stunting and wasting in children under 5 years of age, and address the nutritional needs of adolescent girls, pregnant and lactating women and older persons",
          },
          {
            text: "By 2030, double the agricultural productivity and incomes of small-scale food producers, in particular women, indigenous peoples, family farmers, pastoralists and fishers, including through secure and equal access to land, other productive resources and inputs, knowledge, financial services, markets and opportunities for value addition and non-farm employment",
          },
          {
            text: "By 2030, ensure sustainable food production systems and implement resilient agricultural practices that increase productivity and production, that help maintain ecosystems, that strengthen capacity for adaptation to climate change, extreme weather, drought, flooding and other disasters and that progressively improve land and soil quality",
          },
          {
            text: "By 2020, maintain the genetic diversity of seeds, cultivated plants and farmed and domesticated animals and their related wild species, including through soundly managed and diversified seed and plant banks at the national, regional and international levels, and promote access to and fair and equitable sharing of benefits arising from the utilization of genetic resources and associated traditional knowledge, as internationally agreed",
          },
          {
            text: "Increase investment, including through enhanced international cooperation, in rural infrastructure, agricultural research and extension services, technology development and plant and livestock gene banks in order to enhance agricultural productive capacity in developing countries, in particular least developed countries",
          },
          {
            text: "Correct and prevent trade restrictions and distortions in world agricultural markets, including through the parallel elimination of all forms of agricultural export subsidies and all export measures with equivalent effect, in accordance with the mandate of the Doha Development Round",
          },
          {
            text: "Adopt measures to ensure the proper functioning of food commodity markets and their derivatives and facilitate timely access to market information, including on food reserves, in order to help limit extreme food price volatility.",
          },
        ],
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "“UNDP at the Paris Peace” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "EIF and UNDP to strengthen cooperation for sustainable finance.",
            contentnametwo:
              "EIF and UNDP to strengthen cooperation for sustainable finance.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "EXPLORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "In Costa Rica, rural women grow their own",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "image",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "“UN calls for comprehensive debt standstill in all developing countries.”",
            contentnametwo:
              "“UN calls for comprehensive debt standstill in all developing countries.”",
            paragraph:
              "More than nine years of war have left 11.7 million Syrians in need of assistance and 6.2 million are internally displaced, some many times over.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "large-4 medium-6",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "sdg-content color",
          },
        ],
        storyBtn: "VIEW MORE",
        Sdgcontenttitle: "SDGs in Action",
        nextcardtitle: "Good health and well being",
        modaltitle: "No Poverty",
        description: [
          "The number of undernourished people has dropped by almost half in the past two decades because of rapid economic growth and increased agricultural productivity. Many developing countries that used to suffer from famine and hunger can now meet their nutritional needs. Central and East Asia, Latin America and the Caribbean have all made huge progress in eradicating extreme hunger.",
          <br />,
          <br />,
          "Unfortunately, extreme hunger and malnutrition remain a huge barrier to development in many countries. There are 821 million people estimated to be chronically undernourished as of 2017, often as a direct consequence of environmental degradation, drought and biodiversity loss. Over 90 million children under five are dangerously underweight. Undernourishment and severe food insecurity appear to be increasing in almost all regions of Africa, as well as in South America.",
          <br />,
          <br />,
          "The SDGs aim to end all forms of hunger and malnutrition by 2030, making sure all people-especially children-have sufficient and nutritious food all year. This involves promoting sustainable agricultural, supporting small-scale farmers and equal access to land, technology and markets. It also requires international cooperation to ensure investment in infrastructure and technology to improve agricultural productivity.",
        ],
        modalgoaltitle: "Goal Targets",
        sdgtitle: "Sustainable Development Goals",
        goalcount: "Goal 1",
        goaltitle: "What are the Sustainable Development Goals?",
        goalpara:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        title: "The SDGS In Action.",
        imgsrc: heroImage,
        imgalt: heroImage,
        videosrc: BackgroundVideo,
      };
      return dummy;
  }
};

export default {
  title: 'Templates/SdgPage',
  component: SdgPage,
  argTypes: {
    active: {
      control: {
        type: 'select',
        options: ['white', 'black'],
      },
    },
  },
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>

<h1>SDG Page</h1>

<p>An SDG page has a collection of 17 interlinked global goals designed.</p>

<h3>Overview</h3>

<p>SDG page is a collection of 17 interlinked global goals designed to be a blueprint to achieve a better and more sustainable future for all. Mock Up: <a href="https://www.undp.org/sustainable-development-goals">https://www.undp.org/sustainable-development-goals</a></p>

<h3>Template Structure</h3>

<p>The following components are used to create the “Article Page” template in the design system:</p>

<ul>
  <li>Country header</li>
  <li>Homepage Hero - full width - Homepage Hero images are large-sized images with text in front of the image and present at the top of the homepage.</li>
  <li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
  <li>Text - Title + Description</li>
  <li>SDG card molecule 1-17 + white background</li>
  <li>Standard footer</li>
</ul>

<h3>Behavior</h3>

<p>Clicking any of the SDG cards will open a modal/lightbox:</p>

<ul>
  <li>Individual SDG goals appear as a modal and modal window that includes a transparent overlay by blurring the original page on the back. It also includes a floating close X button.</li>
  <li>Individual goal details are displayed on a white background having the following components:</li>
  <ul>
    <li>Title + subtitle - Title text color should match the individual goal’s color.</li>
    <li>Every individual SDG goal invocation should change the URL of the page adding the <code>#sdgX-title-of-the-goal</code> anchor. The goal here is to provide deep links for individual Goals so when a page is accessed via URL with a hash anchor - the respective goal is popped right after the page load.</li>
    <li>Color - Matches card background-color.</li>
    <li>Text</li>
    <li>Image</li>
    <li>Group of stats cards - glide - Group of cards arranged horizontally in two rows that slide in from opposite directions on page scroll.</li>
    <li>Note: Stats cards should have the same accent color as the background color of the SDG card molecule.</li>
    <li>Text: Title</li>
    <li>List items: Consists of related items grouped together.</li>
    <li>Title: SDGs in Action</li>
    <li>Group of featured content cards - Featured card groups that will have CTA links (this can be just #).</li>
    <li>SDG card molecule - Next card color</li>
    <ul>
      <li>No image with gradient</li>
      <li>On hover - show an arrow</li>
      <li>On click - Open next card content in the right section of the modal and scroll to the top. The left section remains as is.</li>
      <li>The transition between goals should also change the address according to the currently displaying Goal.</li>
      <li>If the current SDG card is the last one on the page, don’t show the next SDG card molecule.</li>
    </ul>
  </ul>
  <li>Clicking X in the left panel closes both modals.</li>
  <li>Clicking ESC also closes both modals.</li>
</ul>

<h3>Performance</h3>

<p>The page performance will be optimized by considering the following:</p>

<ul>
  <li>Lazy load</li>
  <li>Use appropriate media renditions based on the client’s viewpoint.</li>
  <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc.)</li>
  <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc.</li>
  <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed.</li>
</ul>

<h3>Usage</h3>

<ul>
  <li>Copy HTML from the HTML tab of Canvas and include CSS and JS files in the ‘CSS and JS References’ section.</li>
  <li>Initialize navigation, language switcher, accordion, and sdgModal by calling the below-mentioned functions:</li>
  <ul>
    <li>langSwitch();</li>
    <li>navigationInitialize(locale);</li>
    <li>sdgModal();</li>
    <li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
  </ul>
  <li>If you want to add left-right animation then add <code>data-viewport=”true”</code> attribute to your HTML element.</li>
</ul>


<h4>CSS and JS References</h4>

<h5>CSS:</h5>
<p>Add the base layout style from <code>dist/css/base-minimal.min.css</code></p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/country-site-header.min.css">Country Site Header</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">Language Switcher</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">Menu</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">Mega Menu</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">Mobile Nav</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css">Homepage Hero</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">Breadcrumbs</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css">Heading Big</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css">Content Card</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card-with-and-without-image.min.css">Content Card With and Without Image</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css">Featured Content Card</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">CTA Link</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/page-wide-card.min.css">Page Wide Card</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-card.min.css">Image Card</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/image-reveal-cards.min.css">Image Reveal Cards</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats.min.css">Stats</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css">Stats Cards</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-slider.min.css">Stats Slider</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-group.min.css">Input Group</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">Buttons</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">Newsletter Signup</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">Accordion</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">Footer</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/countryhome-page.min.css">Country Homepage</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css">Article Page</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">Swiper</a></li>
</ul>

<h5>JS:</h5>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">Navigation</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">UNDP</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">Language Switcher</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">Accordion</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smooth-bg-change.min.js">Smooth BG Change</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">Swiper</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/parallax.min.js">Parallax</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">Viewport</a></li>
</ul>

<p>Add following external libraries:</p>
<ul>
    <li><a href="https://swiperjs.com/get-started">Swiper</a></li>
    <li><a href="https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo">GSAP</a></li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

<Canvas>
  <Story
    name="SDG page"
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
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <SdgPage
          active={"white"}
          herodata={caption.herodata}
          title={caption.title}
          imgsource={caption.imgsrc}
          altname={caption.imgalt}
          footerData={footerData(locale)}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          languageswitcherData={Languageswitcher(locale)}
          Sdgnewdata={caption.Sdgdata}
          imgsrcsdg={sdglinkimage}
          sdgtitle={caption.sdgtitle}
          goaltitle={caption.goaltitle}
          goalpara={caption.goalpara}
          statsData={statsData(locale)}
          goaldata={caption.goaldata}
          contentdata={caption.contentdata}
          storyBtn={caption.storyBtn}
          Sdgcontenttitle={caption.Sdgcontenttitle}
          nextcardtitle={caption.nextcardtitle}
          goalcount={caption.goalcount}
          modaltitle={caption.modaltitle}
          description={caption.description}
          modalgoaltitle={caption.modalgoaltitle}
          modalsdgimg={sdgimg}
          modalsdgimgalt="sdg image"
        ></SdgPage>
      );
    }}
  </Story>
</Canvas>
            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <SdgPage
          active={"white"}
          herodata={caption.herodata}
          title={caption.title}
          imgsource={caption.imgsrc}
          altname={caption.imgalt}
          footerData={footerData(locale)}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          languageswitcherData={Languageswitcher(locale)}
          Sdgnewdata={caption.Sdgdata}
          imgsrcsdg={sdglinkimage}
          sdgtitle={caption.sdgtitle}
          goaltitle={caption.goaltitle}
          goalpara={caption.goalpara}
          statsData={statsData(locale)}
          goaldata={caption.goaldata}
          contentdata={caption.contentdata}
          storyBtn={caption.storyBtn}
          Sdgcontenttitle={caption.Sdgcontenttitle}
          nextcardtitle={caption.nextcardtitle}
          goalcount={caption.goalcount}
          modaltitle={caption.modaltitle}
          description={caption.description}
          modalgoaltitle={caption.modalgoaltitle}
          modalsdgimg={sdgimg}
          modalsdgimgalt="sdg image"
        ></SdgPage>
      );
}

export const SdgpageStory = Template.bind({});
SdgpageStory.storyName = "SDG page";