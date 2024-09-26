import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { ProjectPage } from "./ProjectPage";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/FooterUtils.js";
import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/CountrySiteHeader/CountrySiteHeaderUtils.js";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import BackgroundImg from "../../assets/images/prjbackground.jpg";
import BackgroundVideo from "../../assets/video/video_sample.mp4";
import img from "../../assets/images/card2.jpg";
import img1 from "../../assets/images/explore1.png";

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
        title: [
          "UNITED NATIONS PACIFIC",
          <br />,
          "REGIONAL ANTI-CORRUPTION",
          <br />,
          "PROJECT - PHASE II",
        ],
        content: "UNDP Projects",
        imgsrc: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        topHeading: [
          "United Nations Pacific",
          <br />,
          "Regional Anti-Corruption Project",
        ],
        topParagraph:
          "The United Nations Pacific Regional Anti-Corruption Project is a joint initiative of the United Nations Office on Drugs and Crime and the United Nations Development Programme, a unique partnership to prevent and fight corruption in 14 Pacific Island countries and the territory of Tokelau",
        topParagraph1:
          "UN-PRAC aims to strengthen PICs’ national integrity systems. This is to promote ‘clean’ governments and create an enabling environment to increase trade, business, investment and sustainable development in the Pacific. In turn, this will enhance the delivery of equitable and high-quality services to all Pacific Islanders.",
        whatwedoheader: ["What", <br />, "We do"],
        whatwedodescription: [
          "The goal of the project is to promote and strengthen measures to prevent and fight corruption more efficiently and effectively in the Pacific. This aligns with the purpose of the ",
          <a href="#">United Nations Convention against Corruption (UNCAC)</a>,
          "and contributes to the achievement of ",
          <a href="#">
            Sustainable Development Goal (SDG) 16 on Peace, Justice and Strong
            Institutions.
          </a>,
          <br />,
          <br />,
          "At the end of the project, we expect to achieve the following results:",
        ],
        relatedHeading: "Related Materials",
        downloadTitle:
          "Country Profiles - outcomes of the Mechanism for the Review of Implementation of the United Nations Convention against Corruption",
        downloadTitle1: "Legislative Guide for the Implementation of UNCAC",
        downloadTitle2: "Pacific Youth Anti-Corruption Advocate’s Toolkit",
        downloadTitle3:
          "Mechanism for the Review of Implementation of the United Nations Convention against Corruption",
        downloadTitle4:
          "Travaux Préparatoires of the negotiations for the elaboration of the United Nations Convention against Corruption",
        downloadTitle5:
          "Technical Guide to the United Nations Convention against Corruption",
        downloadTitle6: "United Nations Convention against Corruption (UNCAC)",
        download: "DOWNLOAD",
        readmore: "READ MORE",
        impactHead: "Impact",
        title1: "STATUS",
        subtitle1: "Ongoing",
        title2: "START DATE",
        subtitle2: "June 2019",
        title3: "END DATE",
        subtitle3: "June 2023",
        title4: "PROJECT OFFICE",
        subtitle4: <a href="#">UNDP Pacific Office in Fiji</a>,
        title5: "DONORS",
        subtitle5: [
          "Donor 1",
          <br />,
          "Second Donor",
          <br />,
          "A Third Donor",
          <br />,
          "Donor 4",
        ],
        title6: "CONTRIBUTION AMOUNT",
        subtitle6: [
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
        ],
        title7: "IMPLEMENTING PARTNER",
        subtitle7: "UNDP Global",
        buttonProjectInfo: "FULL PROJECT INFORMATION",
        supportHeading: "Countries We Support",
        exploreHeading: "Explore More",
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "UNDP at the Paris Peace Forum 2020.",
            contentnametwo: "UNDP at the Paris Peace Forum 2020.",
            paragraph:
              "Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "yellow",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "Explore",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "UNDP at the Paris Peace Forum 2020.",
            contentnametwo: "UNDP at the Paris Peace Forum 2020.",
            paragraph:
              "Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "Explore",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
        ],
        storyBtn: "VIEW MORE",
        listData: [
          {
            text: "PICs more effectively implement UNCAC and work towards the achievement of SDG 16.",
          },
          {
            text: "PICs strengthen broader governance frameworks in line with UNCAC and SDG 16",
          },
          {
            text: "PICs’ state and non-state actors more effectively engage and partner to prevent and fight corruption.",
          },
        ],
      };
      return engText;
    case "arabic":
      const arabicText = {
        herodata: [
          {
            text: "مسكن",
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
        title: [
          "الأمم المتحدة المحيط الهادئ",
          <br />,
          "مكافحة الفساد في المنطقة",
          <br />,
          "المشروع - المرحلة الثانية",
        ],
        content: "مشاريع برنامج الأمم المتحدة الإنمائي",
        imgsrc: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        topHeading: [
          "الأمم المتحدة المحيط الهادئ",
          <br />,
          "مشروع مكافحة الفساد الإقليمي",
        ],
        topParagraph:
          "مشروع الأمم المتحدة الإقليمي لمكافحة الفساد في منطقة المحيط الهادئ هو مبادرة مشتركة بين مكتب الأمم المتحدة المعني بالمخدرات والجريمة وبرنامج الأمم المتحدة الإنمائي ، وهو شراكة فريدة لمنع الفساد ومكافحته في 14 من بلدان جزر المحيط الهادئ وإقليم توكيلاو",
        topParagraph1:
          'تهدف UN-PRAC إلى تعزيز أنظمة النزاهة الوطنية في بلدان جزر المحيط الهادئ. هذا لتعزيز الحكومات "النظيفة" وخلق بيئة مواتية لزيادة التجارة والأعمال والاستثمار والتنمية المستدامة في المحيط الهادئ. وهذا بدوره سيعزز تقديم خدمات منصفة وعالية الجودة لجميع سكان جزر المحيط الهادئ.',
        whatwedoheader: ["ماذا", <br />, "نحن نفعل"],
        whatwedodescription: [
          "الهدف من المشروع هو تعزيز وتقوية تدابير منع الفساد ومكافحته بمزيد من الكفاءة والفعالية في منطتعزز بلدان جزر المحيط الهادئ أطر الحوكمة الأوسع نطاقا بما يتماشى مع اتفاقية الأمم المتحدة لمكافحة الفساد وهدف التنمية المستدامة 16.قة المحيط الهادئ. هذا يتوافق مع الغرض من",
          <a href="#">اتفاقية الأمم المتحدة لمكافحة الفساد</a>,
          "and contributes to the achievement of ",
          <a href="#">
            هدف التنمية المستدامة رقم 16 بشأن السلام والعدالة والمؤسسات القوية.
          </a>,
          <br />,
          <br />,
          "في نهاية المشروع نتوقع تحقيق النتائج التالية:",
        ],
        relatedHeading: "مواد ذات صلة",
        downloadTitle:
          "لملامح القطرية - نتائج آلية استعراض تنفيذ اتفاقية الأمم المتحدة لمكافحة الفساد",
        downloadTitle1:
          "دليل تشريعي لتنفيذ اتفاقية الأمم المتحدة لمكافحة الفساد",
        downloadTitle2:
          "مجموعة أدوات المناصر الشباب لمكافحة الفساد في منطقة المحيط الهادئ",
        downloadTitle3:
          "آلية استعراض تنفيذ اتفاقية الأمم المتحدة لمكافحة الفساد",
        downloadTitle4:
          "الأعمال التحضيرية للمفاوضات بشأن وضع اتفاقية الأمم المتحدة لمكافحة الفساد",
        downloadTitle5: "دليل تقني لاتفاقية الأمم المتحدة لمكافحة الفساد",
        downloadTitle6: "اتفاقية الأمم المتحدة لمكافحة الفساد",
        download: "تحميل",
        readmore: "اقرأ أكث",
        impactHead: "تأثير",
        title1: "الحالة",
        subtitle1: "جاري التنفيذ",
        title2: "تاريخ البدء",
        subtitle2: "يونيو 2019",
        title3: "تاريخ الانتهاء",
        subtitle3: "يونيو 2023",
        title4: "مكتب المشروع",
        subtitle4: (
          <a href="#">
            مكتب برنامج الأمم المتحدة الإنمائي في المحيط الهادئ في فيجي
          </a>
        ),
        title5: "المتبرعون",
        subtitle5: [
          "جهات مانحة 1",
          <br />,
          "المتبرع الثاني",
          <br />,
          "مانح ثالث",
          <br />,
          "الجهة المانحة 4",
        ],
        title6: "مبلغ المساهمة",
        subtitle6: [
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
        ],
        title7: "الشريك المنفذ",
        subtitle7: "برنامج الأمم المتحدة الإنمائي العالمي",
        buttonProjectInfo: "معلومات كاملة عن المشروع",
        supportHeading: "الدول التي ندعمها",
        exploreHeading: "استكشاف المزيد",
        contentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname:
              "برنامج الأمم المتحدة الإنمائي في منتدى باريس للسلام 2020.",
            contentnametwo:
              "برنامج الأمم المتحدة الإنمائي في منتدى باريس للسلام 2020.",
            paragraph:
              'ثلاثة مشاريع لبرنامج الأمم المتحدة الإنمائي من بين مائة "حلول من أجل السلام" تم اختيارها ، ليتم عرضها في "مساحة للحلول"',
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            contentnametwo:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "كرم مع ماض عريق يتلقى حقنة من الحياة الجديدة.",
            button: "يستكشف",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام",
            contentnametwo:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: '"نحن شعب منسي."',
            contentnametwo: '"نحن شعب منسي."',
            paragraph:
              "استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            contentnametwo:
              "الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "برنامج الأمم المتحدة الإنمائي في منتدى باريس للسلام 2020.",
            contentnametwo:
              "برنامج الأمم المتحدة الإنمائي في منتدى باريس للسلام 2020.",
            paragraph:
              'ثلاثة مشاريع لبرنامج الأمم المتحدة الإنمائي من بين مائة "حلول من أجل السلام" تم اختيارها ، ليتم عرضها في "مساحة للحلول"',
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            contentnametwo:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: "كرم مع ماض عريق يتلقى حقنة من الحياة الجديدة.",
            button: "يستكشف",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام",
            contentnametwo:
              "EIF وبرنامج الأمم المتحدة الإنمائي لتعزيز التعاون من أجل التمويل المستدام",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: '"نحن شعب منسي."',
            contentnametwo: '"نحن شعب منسي."',
            paragraph:
              "استخدام وسائل التواصل الاجتماعي لمساعدة الفئات المهمشة في الحصول على خدمات فيروس نقص المناعة البشرية خلال COVID-19",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            contentnametwo:
              "الأمم المتحدة تدعو إلى تجميد الديون الشامل في جميع البلدان النامية.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "اقرأ أكثر",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              "في كوستاريكا ، تقوم النساء الريفيات بتنمية أعمالهن الخاصة.",
            button: "اقرأ أكثر",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
        ],
        storyBtn: "عرض المزيد",
        listData: [
          {
            text: "تنفذ بلدان جزر المحيط الهادئ بشكل أكثر فعالية اتفاقية الأمم المتحدة لمكافحة الفساد وتعمل على تحقيق الهدف 16 من أهداف التنمية المستدامة.",
          },
          {
            text: "تعزز بلدان جزر المحيط الهادئ أطر الحوكمة الأوسع نطاقا بما يتماشى مع اتفاقية الأمم المتحدة لمكافحة الفساد وهدف التنمية المستدامة 16.",
          },
          {
            text: "تشارك الجهات الفاعلة الحكومية وغير الحكومية في بلدان جزر المحيط الهادئ بشكل أكثر فاعلية وشراكة لمنع الفساد ومكافحته.",
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        herodata: [
          {
            text: "အိမ်",
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
        title: [
          "UNITED NATIONS PACIFIC",
          <br />,
          "ဒေသဆိုင်ရာ အဂတိလိုက်စားမှု တိုက်ဖျက်ရေး",
          <br />,
          "ပရောဂျက် - ဒုတိယအဆင့်",
        ],
        content: "UNDP ပရောဂျက်များ",
        imgsrc: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        topHeading: [
          "ကုလသမဂ္ဂ ပစိဖိတ်",
          <br />,
          "ဒေသတွင်း အဂတိလိုက်စားမှု တိုက်ဖျက်ရေး စီမံကိန်း",
        ],
        topParagraph:
          "ကုလသမဂ္ဂ ပစိဖိတ်ဒေသတွင်း အဂတိလိုက်စားမှု တိုက်ဖျက်ရေး ပရောဂျက်သည် ကုလသမဂ္ဂ မူးယစ်ဆေးဝါးနှင့် ရာဇ၀တ်မှုဆိုင်ရာရုံးနှင့် ကုလသမဂ္ဂ ဖွံ့ဖြိုးတိုးတက်ရေး အစီအစဉ်တို့ ပူးပေါင်းလုပ်ဆောင်မှုဖြစ်ပြီး ပစိဖိတ်ကျွန်းနိုင်ငံ ၁၄ နိုင်ငံနှင့် Tokelau ပိုင်နက်တို့တွင် အဂတိလိုက်စားမှုကို တားဆီးနှိမ်နင်းရန် ထူးခြားသော ပူးပေါင်းဆောင်ရွက်မှု ဖြစ်သည်။",
        topParagraph1:
          "UN-PRAC သည် PICs ၏ အမျိုးသားဂုဏ်သိက္ခာစနစ်များကို အားကောင်းစေရန် ရည်ရွယ်ပါသည်။ ၎င်းသည် 'သန့်ရှင်းသော' အစိုးရများကို မြှင့်တင်ရန်နှင့် ပစိဖိတ်ဒေသအတွင်း ကုန်သွယ်မှု၊ စီးပွားရေး၊ ရင်းနှီးမြှုပ်နှံမှုနှင့် ရေရှည်တည်တံ့သော ဖွံ့ဖြိုးတိုးတက်မှုတို့ကို တိုးမြှင့်ရန် အထောက်အကူဖြစ်စေသော ပတ်ဝန်းကျင်ကို ဖန်တီးရန်ဖြစ်သည်။ တစ်ဖန်၊ ၎င်းသည် ပစိဖိတ်ကျွန်းသားများ အားလုံးအတွက် သာတူညီမျှနှင့် အရည်အသွေးမြင့် ဝန်ဆောင်မှုများ ပေးအပ်ခြင်းကို တိုးမြှင့်ပေးမည်ဖြစ်သည်။",
        whatwedoheader: ["ဘာလဲ", <br />, "ကျွန်တော်တို"],
        whatwedodescription: [
          "ပရောဂျက်၏ ရည်မှန်းချက်မှာ ပစိဖိတ်ဒေသတွင် အဂတိလိုက်စားမှုကို ပိုမိုထိရောက်စွာ တိုက်ဖျက်ရန် အစီအမံများကို မြှင့်တင်ရန်နှင့် အားကောင်းစေရန် ဖြစ်သည်။ ဒါက ရည်ရွယ်ချက်နဲ့ ကိုက်ညီတယ်။",
          <a href="#">
            ကုလသမဂ္ဂ အဂတိလိုက်စားမှု ဆန့်ကျင်ရေး သဘောတူစာချုပ် (UNCAC)၊
          </a>,
          "၏အောင်မြင်မှုကိုအထောက်အကူပြုသည်။",
          <a href="#">
            ငြိမ်းချမ်းရေး၊ တရားမျှတမှုနှင့် ခိုင်မာသော
            အင်စတီကျူးရှင်းများဆိုင်ရာ စဉ်ဆက်မပြတ်ဖွံ့ဖြိုးတိုးတက်ရေးပန်းတိုင်
            (SDG) 16။
          </a>,
          <br />,
          <br />,
          "ပရောဂျက်၏အဆုံးတွင်၊ ကျွန်ုပ်တို့သည် အောက်ပါရလဒ်များကို ရရှိရန် မျှော်လင့်ပါသည်။",
        ],
        relatedHeading: "ဆက်စပ်ပစ္စည်းများ",
        downloadTitle:
          "နိုင်ငံကိုယ်ရေးအကျဉ်းများ - အကျင့်ပျက်ခြစားမှုဆန့်ကျင်ရေး ကုလသမဂ္ဂသဘောတူညီချက်ကို အကောင်အထည်ဖော်မှု ပြန်လည်သုံးသပ်ခြင်းအတွက် ယန္တရား၏ရလဒ်များ",
        downloadTitle1: "UNCAC အကောင်အထည်ဖော်မှုအတွက် ဥပဒေပြုလမ်းညွှန်",
        downloadTitle2:
          "ပစိဖိတ်လူငယ် အဂတိလိုက်စားမှု တိုက်ဖျက်ရေးရှေ့နေ၏ ကိရိယာတန်ဆာပလာ",
        downloadTitle3:
          "ကုလသမဂ္ဂ အဂတိလိုက်စားမှု တိုက်ဖျက်ရေး သဘောတူညီချက်ကို အကောင်အထည်ဖော်ရေး ပြန်လည်သုံးသပ်ရေး ယန္တရား",
        downloadTitle4:
          "Travaux Préparatoires သည် ကုလသမဂ္ဂ အဂတိလိုက်စားမှု ဆန့်ကျင်ရေး ကွန်ဗင်းရှင်းကို အသေးစိတ် ဆွေးနွေးညှိနှိုင်းမှုများ၊",
        downloadTitle5:
          "ကုလသမဂ္ဂ အဂတိလိုက်စားမှု တိုက်ဖျက်ရေး ကွန်ဗင်းရှင်းဆိုင်ရာ နည်းပညာလမ်းညွှန်",
        downloadTitle6:
          "ကုလသမဂ္ဂ အဂတိလိုက်စားမှု ဆန့်ကျင်ရေး သဘောတူစာချုပ် (UNCAC)၊",
        download: "ဒေါင်းလုဒ်လုပ်ပါ။",
        readmore: "ပိုပြီးဖတ်ပါ",
        impactHead: "ထိခိုက်မှု",
        title1: "အဆင့်အတန်း",
        subtitle1: "လုပ်ဆောင်ဆဲ",
        title2: "စတင်သည့်ရက်စွဲ",
        subtitle2: "ဇွန်လ 2019 ခုနှစ်",
        title3: "DATE ကုန်ဆုံ",
        subtitle3: "ဇွန်လ 2023",
        title4: "ပရောဂျက်ရုံး",
        subtitle4: <a href="#">ဖီဂျီရှိ UNDP ပစိဖိတ်ရုံး</a>,
        title5: "အလှူရှင်များ",
        subtitle5: [
          "အလှူရှင် ၁",
          <br />,
          "ဒုတိယအလှူရှင်",
          <br />,
          "တတိယအလှူရှင်",
          <br />,
          "အလှူရှင် ၄",
        ],
        title6: "ပံ့ပိုးကူညီမှုပမာဏ",
        subtitle6: [
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
        ],
        title7: "အကောင်အထည်ဖော်နေသော ပါတနာ",
        subtitle7: "UNDP Global",
        buttonProjectInfo: "ပရောဂျက်အချက်အလက် အပြည့်အစုံ",
        supportHeading: "ကျွန်ုပ်တို့ထောက်ခံသောနိုင်ငံများ",
        exploreHeading: "နောက်ထပ်စူးစမ်းပါ။",
        contentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: "ပါရီငြိမ်းချမ်းရေးဖိုရမ် 2020 တွင် UNDP။",
            contentnametwo: "ပါရီငြိမ်းချမ်းရေးဖိုရမ် 2020 တွင် UNDP။",
            paragraph:
              "UNDP ပရောဂျက် သုံးခုသည် 'ဖြေရှင်းချက်များအတွက် အာကာသ' တွင် ဖော်ပြမည့် “ငြိမ်းချမ်းရေးအတွက် အဖြေရှာခြင်း” တစ်ရာကို ရွေးချယ်ထားသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            contentnametwo:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပုံပြင်အတိတ်တစ်ခုပါရှိသော စပျစ်ဥယျာဉ်သည် ဘဝသစ်ကို ဆေးထိုးခြင်းခံရသည်။",
            button: "စူးစမ်းပါ။",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            contentnametwo:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            contentnametwo: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            paragraph:
              "COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            contentnametwo:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: "ပါရီငြိမ်းချမ်းရေးဖိုရမ် 2020 တွင် UNDP။",
            contentnametwo: "ပါရီငြိမ်းချမ်းရေးဖိုရမ် 2020 တွင် UNDP။",
            paragraph:
              "UNDP ပရောဂျက် သုံးခုသည် 'ဖြေရှင်းချက်များအတွက် အာကာသ' တွင် ဖော်ပြမည့် “ငြိမ်းချမ်းရေးအတွက် အဖြေရှာခြင်း” တစ်ရာကို ရွေးချယ်ထားသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            contentnametwo:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပုံပြင်အတိတ်တစ်ခုပါရှိသော စပျစ်ဥယျာဉ်သည် ဘဝသစ်ကို ဆေးထိုးခြင်းခံရသည်။",
            button: "စူးစမ်းပါ။",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            contentnametwo:
              "EIF နှင့် UNDP တို့သည် ရေရှည်တည်တံ့သောဘဏ္ဍာရေးဆိုင်ရာ ပူးပေါင်းဆောင်ရွက်မှုကို အားကောင်းစေရန်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            contentnametwo: '"ကျွန်ုပ်တို့သည် မေ့လျော့နေသော လူဦးရေများ"',
            paragraph:
              "COVID-19 ကာလအတွင်း ဘေးဖယ်ခံထားရသော အုပ်စုများအား HIV ဝန်ဆောင်မှုများ ရရှိနိုင်ရန် လူမှုမီဒီယာကို အသုံးပြုခြင်း။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            contentnametwo:
              "ဖွံ့ဖြိုးဆဲနိုင်ငံအားလုံးတွင် ကျယ်ကျယ်ပြန့်ပြန့် ကြွေးမြီများ ရပ်တန့်ရန် ကုလသမဂ္ဂက တောင်းဆိုထားသည်။",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ကော်စတာရီကာတွင် ကျေးလက်နေ အမျိုးသမီးများသည် ၎င်းတို့၏ ကိုယ်ပိုင်စီးပွားရေးများကို တိုးချဲ့လုပ်ကိုင်ကြသည်။",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
        ],
        storyBtn: "ပိုမိုကြည့်ရှုပါ။",
        listData: [
          {
            text: "PIC များသည် UNCAC ကို ပိုမိုထိရောက်စွာ အကောင်အထည်ဖော်ပြီး SDG 16 ၏ အောင်မြင်မှုဆီသို့ ဦးတည်လုပ်ဆောင်သည်။",
          },
          {
            text: "PIC များသည် UNCAC နှင့် SDG 16 နှင့်အညီ ပိုမိုကျယ်ပြန့်သော အုပ်ချုပ်မှုမူဘောင်များကို အားကောင်းစေပါသည်။",
          },
          {
            text: "PIC ၏ ပြည်နယ်နှင့် ပြည်နယ်မဟုတ်သော သရုပ်ဆောင်များသည် အကျင့်ပျက်ခြစားမှုကို ကာကွယ်ရန်နှင့် တိုက်ဖျက်ရန်အတွက် ပိုမိုထိရောက်စွာ ထိတွေ့ဆက်ဆံပြီး လုပ်ဖော်ကိုင်ဖက်များဖြစ်သည်။",
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        herodata: [
          {
            text: "家",
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
        title: [
          "国連太平洋",
          <br />,
          "地域の腐敗防止",
          <br />,
          "プロジェクト-フェーズII",
        ],
        content: "UNDP Projects",
        imgsrc: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        topHeading: ["国連パシフィック", <br />, "地域の腐敗防止プロジェクト"],
        topParagraph:
          "国連太平洋地域腐敗防止プロジェクトは、国連薬物犯罪事務所と国連開発計画の共同イニシアチブであり、太平洋島嶼国14か国とトケラウ諸島の腐敗を防止し戦うための独自のパートナーシップです。",
        topParagraph1:
          "UN-PRACは、PICの国家保全システムを強化することを目的としています。これは、「クリーンな」政府を促進し、太平洋における貿易、ビジネス、投資、持続可能な開発を促進するための環境を整えることです。これにより、すべての太平洋諸島民への公平で高品質なサービスの提供が強化されます。",
        whatwedoheader: ["何", <br />, "私たちはします"],
        whatwedodescription: [
          "プロジェクトの目標は、太平洋における汚職をより効率的かつ効果的に防止し、戦うための措置を促進および強化することです。これは、",
          <a href="#">腐敗の防止に関する国連条約（UNCAC</a>,
          "の達成に貢献します ",
          <a href="#">
            平和、正義、強力な制度に関する持続可能な開発目標（SDG）16。
          </a>,
          <br />,
          <br />,
          "プロジェクトの終了時に、次の結果が得られると期待しています。",
        ],
        relatedHeading: "関連資料",
        downloadTitle:
          "国別プロファイル-腐敗の防止に関する国連条約の実施の見直しのためのメカニズムの成果",
        downloadTitle1: "UNCACの実施のための立法ガイド",
        downloadTitle2: "Pacific Youth Anti-CorruptionAdvocateのツールキット",
        downloadTitle3:
          "腐敗の防止に関する国連条約の実施を検討するためのメカニズム",
        downloadTitle4: "腐敗の防止に関する国連条約の精緻化のための交渉の",
        downloadTitle5: "腐敗の防止に関する国連条約の技術ガイド",
        downloadTitle6: "腐敗の防止に関する国連条約（UNCAC)",
        download: "ダウンロード",
        readmore: "続きを読む",
        impactHead: "影響",
        title1: "状態",
        subtitle1: "進行中",
        title2: "開始日",
        subtitle2: "2019年6月",
        title3: "終了日",
        subtitle3: "2023年6月",
        title4: "プロジェクトオフィス",
        subtitle4: <a href="#">フィジーのUNDPパシフィックオフィス</a>,
        title5: "ドナー",
        subtitle5: [
          "ドナー1",
          <br />,
          "セカンドドナー",
          <br />,
          "サードドナー",
          <br />,
          "ドナー4",
        ],
        title6: "貢献額",
        subtitle6: [
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
        ],
        title7: "実装パートナー",
        subtitle7: "UNDPグローバル",
        buttonProjectInfo: "完全なプロジェクト情報",
        supportHeading: "私たちがサポートする国",
        exploreHeading: "詳細を見る",
        contentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "パリ平和フォーラム2020でのUNDP",
            contentnametwo: "パリ平和フォーラム2020でのUNDP",
            paragraph:
              "選ばれた100の「SolutionsforPeace」の中に3つのUNDPプロジェクトがあり、「SpaceforSolutions」で取り上げられています。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            contentnametwo: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "名高い過去のあるブドウ園は、新しい生命の注入を受けます。",
            button: "探検",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            contentnametwo: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "「私たちは忘れられた人口です。」 ",
            contentnametwo: "「私たちは忘れられた人口です。」",
            paragraph:
              "ソーシャルメディアを使用して、疎外されたグループがCOVID-19中にHIVサービスを受けるのを支援する",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "国連は、すべての開発途上国で包括的な債務停止を求めています。",
            contentnametwo:
              "国連は、すべての開発途上国で包括的な債務停止を求めています。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "パリ平和フォーラム2020でのUNDP",
            contentnametwo: "パリ平和フォーラム2020でのUNDP",
            paragraph:
              "選ばれた100の「SolutionsforPeace」の中に3つのUNDPプロジェクトがあり、「SpaceforSolutions」で取り上げられています。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            contentnametwo: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "名高い過去のあるブドウ園は、新しい生命の注入を受けます。",
            button: "探検",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            contentnametwo: "EIFとUNDPは持続可能な金融のための協力を強化する。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "「私たちは忘れられた人口です。」 ",
            contentnametwo: "「私たちは忘れられた人口です。」",
            paragraph:
              "ソーシャルメディアを使用して、疎外されたグループがCOVID-19中にHIVサービスを受けるのを支援する",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "国連は、すべての開発途上国で包括的な債務停止を求めています。",
            contentnametwo:
              "国連は、すべての開発途上国で包括的な債務停止を求めています。",
            paragraph:
              "Lorem ipsum dolorは、amet、consectetur adipiscingelitに座ります。 Phasellus mollis pharetra ex、laoreet purus vulputateeget。",
            button: "続きを読む",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "コスタリカでは、地方の女性が自分たちのビジネスを成長させています。",
            button: "続きを読む",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
        ],
        storyBtn: "もっと見る",
        listData: [
          {
            text: "PICは、UNCACをより効果的に実施し、SDG16の達成に向けて取り組んでいます。",
          },
          {
            text: "PICは、UNCACおよびSDG16に沿ってより広範なガバナンスフレームワークを強化します",
          },
          {
            text: "PICの国家および非国家主体は、腐敗を防止し、戦うために、より効果的に関与し、協力します",
          },
        ],
      };
      return japaneseText;
    default:
      return {
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
        title: [
          "UNITED NATIONS PACIFIC",
          <br />,
          "REGIONAL ANTI-CORRUPTION",
          <br />,
          "PROJECT - PHASE II",
        ],
        content: "UNDP Projects",
        imgsrc: BackgroundImg,
        imgalt: BackgroundImg,
        videosrc: BackgroundVideo,
        topHeading: [
          "United Nations Pacific",
          <br />,
          "Regional Anti-Corruption Project",
        ],
        topParagraph:
          "The United Nations Pacific Regional Anti-Corruption Project is a joint initiative of the United Nations Office on Drugs and Crime and the United Nations Development Programme, a unique partnership to prevent and fight corruption in 14 Pacific Island countries and the territory of Tokelau",
        topParagraph1:
          "UN-PRAC aims to strengthen PICs’ national integrity systems. This is to promote ‘clean’ governments and create an enabling environment to increase trade, business, investment and sustainable development in the Pacific. In turn, this will enhance the delivery of equitable and high-quality services to all Pacific Islanders.",
        whatwedoheader: ["What", <br />, "We do"],
        whatwedodescription: [
          "The goal of the project is to promote and strengthen measures to prevent and fight corruption more efficiently and effectively in the Pacific. This aligns with the purpose of the ",
          <a href="#">United Nations Convention against Corruption (UNCAC)</a>,
          "and contributes to the achievement of ",
          <a href="#">
            Sustainable Development Goal (SDG) 16 on Peace, Justice and Strong
            Institutions.
          </a>,
          <br />,
          <br />,
          "At the end of the project, we expect to achieve the following results:",
        ],
        relatedHeading: "Related Materials",
        downloadTitle:
          "Country Profiles - outcomes of the Mechanism for the Review of Implementation of the United Nations Convention against Corruption",
        downloadTitle1: "Legislative Guide for the Implementation of UNCAC",
        downloadTitle2: "Pacific Youth Anti-Corruption Advocate’s Toolkit",
        downloadTitle3:
          "Mechanism for the Review of Implementation of the United Nations Convention against Corruption",
        downloadTitle4:
          "Travaux Préparatoires of the negotiations for the elaboration of the United Nations Convention against Corruption",
        downloadTitle5:
          "Technical Guide to the United Nations Convention against Corruption",
        downloadTitle6: "United Nations Convention against Corruption (UNCAC)",
        download: "DOWNLOAD",
        readmore: "READ MORE",
        impactHead: "Impact",
        title1: "STATUS",
        subtitle1: "Ongoing",
        title2: "START DATE",
        subtitle2: "June 2019",
        title3: "END DATE",
        subtitle3: "June 2023",
        title4: "PROJECT OFFICE",
        subtitle4: <a href="#">UNDP Pacific Office in Fiji</a>,
        title5: "DONORS",
        subtitle5: [
          "Donor 1",
          <br />,
          "Second Donor",
          <br />,
          "A Third Donor",
          <br />,
          "Donor 4",
        ],
        title6: "CONTRIBUTION AMOUNT",
        subtitle6: [
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
          <br />,
          "$10,000,000",
        ],
        title7: "IMPLEMENTING PARTNER",
        subtitle7: "UNDP Global",
        buttonProjectInfo: "FULL PROJECT INFORMATION",
        supportHeading: "Countries We Support",
        exploreHeading: "Explore More",
        contentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "UNDP at the Paris Peace Forum 2020.",
            contentnametwo: "UNDP at the Paris Peace Forum 2020.",
            paragraph:
              "Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "Explore",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "UNDP at the Paris Peace Forum 2020.",
            contentnametwo: "UNDP at the Paris Peace Forum 2020.",
            paragraph:
              "Three UNDP projects are among the one hundred “Solutions for Peace” selected, to be featured in the ‘Space for Solutions’.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "A vineyard with a storied past receives an injection of new life.",
            button: "Explore",
            link: "#",
            imgback: img1,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
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
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "“We are a forgotten population.” ",
            contentnametwo: "“We are a forgotten population.”",
            paragraph:
              "Using social media to help marginalized groups get HIV services during COVID-19",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card",
          },
          {
            contenttile: "PUBLICATION",
            contentname:
              "UN calls for comprehensive debt standstill in all developing countries.",
            contentnametwo:
              "UN calls for comprehensive debt standstill in all developing countries.",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "true",
            Hovercolors: "",
            type: "color",
            BackgroundColor: "card-emphasize",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "In Costa Rica, rural women grow their own businesses.",
            button: "READ MORE",
            link: "#",
            imgback: img,
            scale: "medium-3",
            btnType: "Arrow",
            Emphasize: "false",
            type: "image",
            Hovercolors: "",
          },
        ],
        storyBtn: "VIEW MORE",
        listData: [
          {
            text: "PICs more effectively implement UNCAC and work towards the achievement of SDG 16.",
          },
          {
            text: "PICs strengthen broader governance frameworks in line with UNCAC and SDG 16",
          },
          {
            text: "PICs’ state and non-state actors more effectively engage and partner to prevent and fight corruption.",
          },
        ],
      };
  }
};

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            percentname: "Cook Island",
          },
          {
            percentname: "Federated States of Micronesia",
          },
          {
            percentname: "Fiji",
          },
          {
            percentname: "Kingdom of Tonga",
          },
          {
            percentname: "Kiribati",
          },
          {
            percentname: "Nauro",
          },
        ],
      };
      return engText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            percentname: "جزيرة كوك",
          },
          {
            percentname: "ولايات ميكرونيزيا الموحدة",
          },
          {
            percentname: "فيجي",
          },
          {
            percentname: "مملكة تونجا",
          },
          {
            percentname: "كيريباتي",
          },
          {
            percentname: "ناورو",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            percentname: "ကွတ်ကျွန်း",
          },
          {
            percentname: "မိုက်ခရိုနီးရှားဖက်ဒရယ်ပြည်ထောင်စု",
          },
          {
            percentname: "ဖီဂျီ",
          },
          {
            percentname: "တွန်ဂါနိုင်ငံတော်",
          },
          {
            percentname: "ကီရီဘာတီ",
          },
          {
            percentname: "နိုရို",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            percentname: "クック諸島",
          },
          {
            percentname: "ミクロネシア連邦",
          },
          {
            percentname: "フィジー",
          },
          {
            percentname: "トンガ王国",
          },
          {
            percentname: "キリバス",
          },
          {
            percentname: "ナウロ",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            percentname: "Cook Island",
          },
          {
            percentname: "Federated States of Micronesia",
          },
          {
            percentname: "Fiji",
          },
          {
            percentname: "Kingdom of Tonga",
          },
          {
            percentname: "Kiribati",
          },
          {
            percentname: "Nauro",
          },
        ],
      };
      return dummy.data;
  }
};

export default {
  title: "Templates/Project page",
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>

<h1>Project Page</h1>

<p>A Project page has the list of projects that the company is dealing with.</p>

<h3>Overview</h3>

<p>A project page has all the projects listed. This helps the user to get all the list of projects in one place. Mockup: <a href="https://undp-design-system.azurewebsites.net/project-page">https://undp-design-system.azurewebsites.net/project-page</a></p>

<h3>Template Structure</h3>

<p>The following components are used to create the “Article page” template in the design system:</p>

<ul>
  <li>Country header</li>
  <li>Homepage Hero - Homepage Hero images are large-sized images with text in front of the image and present at the top of the homepage.</li>
  <li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
  <li>Title of the project</li>
  <li>Text</li>
  <li>Text with background image</li>
  <li>Title</li>
  <li>Group of download modules where the document can be downloaded.</li>
  <li>Title</li>
  <li>Project Details - Complete details about the project like status, start date, Project office, contribution amount, donors, Implementing partners.</li>
  <li>Secondary button with text: “FULL PROJECT INFORMATION”</li>
  <li>Title</li>
  <li>Grid of content cards with image, without image, with emphasis</li>
  <li>Secondary button, no arrow</li>
  <li>Standard footer</li>
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
  <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in the ‘CSS and JS References’ section.</li>
  <li>Initialize navigation, language switcher, accordion, swiper, and animation by calling the below-mentioned functions:</li>
  <ul>
    <li>expandToSize('.pagehero-full');</li>
    <li>navigationInitialize();</li>
    <li>langSwitch();</li>
    <li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
    <li>swiper('.stats-slider');</li>
  </ul>
  <li>Refer to <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options.</li>
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
    name="Project page"
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
        <ProjectPage
          herodata={caption.herodata}
          title={caption.title}
          content={caption.content}
          active={"default"}
          imgsrc={caption.imgsrc}
          imgalt={caption.imgalt}
          videosrc={caption.videosrc}
          topHeading={caption.topHeading}
          topParagraph={caption.topParagraph}
          topParagraph1={caption.topParagraph1}
          whatwedoheader={caption.whatwedoheader}
          relatedHeading={caption.relatedHeading}
          whatwedodescription={caption.whatwedodescription}
          download={caption.download}
          readmore={caption.readmore}
          downloadTitle={caption.downloadTitle}
          downloadTitle1={caption.downloadTitle1}
          downloadTitle2={caption.downloadTitle2}
          downloadTitle3={caption.downloadTitle3}
          downloadTitle4={caption.downloadTitle4}
          downloadTitle5={caption.downloadTitle5}
          downloadTitle6={caption.downloadTitle6}
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
          impactHead={caption.impactHead}
          title1={caption.title1}
          title2={caption.title2}
          title3={caption.title3}
          title4={caption.title4}
          title5={caption.title5}
          title6={caption.title6}
          title7={caption.title7}
          subtitle1={caption.subtitle1}
          subtitle2={caption.subtitle2}
          subtitle3={caption.subtitle3}
          subtitle4={caption.subtitle4}
          subtitle5={caption.subtitle5}
          subtitle6={caption.subtitle6}
          subtitle7={caption.subtitle7}
          buttonProjectInfo={caption.buttonProjectInfo}
          supportHeading={caption.supportHeading}
          exploreHeading={caption.exploreHeading}
          exploreMoreData={caption.contentdata}
          exploreMoreBtn={caption.storyBtn}
          statsliderdata={statCaption}
          listData={caption.listData}
          {...args}
        ></ProjectPage>
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
        <ProjectPage
          herodata={caption.herodata}
          title={caption.title}
          content={caption.content}
          active={"default"}
          imgsrc={caption.imgsrc}
          imgalt={caption.imgalt}
          videosrc={caption.videosrc}
          topHeading={caption.topHeading}
          topParagraph={caption.topParagraph}
          topParagraph1={caption.topParagraph1}
          whatwedoheader={caption.whatwedoheader}
          relatedHeading={caption.relatedHeading}
          whatwedodescription={caption.whatwedodescription}
          download={caption.download}
          readmore={caption.readmore}
          downloadTitle={caption.downloadTitle}
          downloadTitle1={caption.downloadTitle1}
          downloadTitle2={caption.downloadTitle2}
          downloadTitle3={caption.downloadTitle3}
          downloadTitle4={caption.downloadTitle4}
          downloadTitle5={caption.downloadTitle5}
          downloadTitle6={caption.downloadTitle6}
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
          impactHead={caption.impactHead}
          title1={caption.title1}
          title2={caption.title2}
          title3={caption.title3}
          title4={caption.title4}
          title5={caption.title5}
          title6={caption.title6}
          title7={caption.title7}
          subtitle1={caption.subtitle1}
          subtitle2={caption.subtitle2}
          subtitle3={caption.subtitle3}
          subtitle4={caption.subtitle4}
          subtitle5={caption.subtitle5}
          subtitle6={caption.subtitle6}
          subtitle7={caption.subtitle7}
          buttonProjectInfo={caption.buttonProjectInfo}
          supportHeading={caption.supportHeading}
          exploreHeading={caption.exploreHeading}
          exploreMoreData={caption.contentdata}
          exploreMoreBtn={caption.storyBtn}
          statsliderdata={statCaption}
          listData={caption.listData}
          {...args}
        ></ProjectPage>
      );
}

export const ProjectPageStory = Template.bind({});
ProjectPageStory.storyName = "Project page";

