import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { GenericLandingPage } from "./GenericLandingPage";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/Footer.stories.js";
import img from "../../assets/images/card-thumbnail.jpg";
import img2 from "../../assets/images/CardImage2.jpg";
import img3 from "../../assets/images/CardImage3.jpg";
import img4 from "../../assets/images/CardImage4.jpg";
import img5 from "../../assets/images/CardImage5.jpg";
import img6 from "../../assets/images/CardImage6.jpg";
import BackgroundImg from "../../assets/images/lady.jpg";
import BackgroundVideo from "../../assets/video/video_sample.mp4";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import { getButtonForLocale as buttonData } from "../../Patterns/FilterAndSearchBar/FilterAndSearchBarUtils.js";

import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeader.stories.js";

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
        title: "NEWS CENTER",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "VIEW MORE",
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines",
        btnlabel: "READ MORE",
        searchData: "Select Language",
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
        title: "Новини",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "VIEW MORE",
        titlename: "Title of the hero story",
        text: "Subtitle or excerpt of the story goes below and it is two lines",
        btnlabel: "READ MORE",
        searchData: "Select Language",
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
        title: "مركز الأخبار",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            contentnametwo: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            paragraph:
              "الألم بحد ذاته يسبب الكثير من الألم ، لكن التركيز الأساسي ينصب على العميل. من جعبة اليخت الناعمة ، عدد كبير من اللحم البقري النقي",
            button: "اقرأ أكث",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "إنجليزي",
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
        title: "သတင်းစင်တာ",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            contentnametwo:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            paragraph:
              "နာကျင်မှုသည်ကိုယ်တိုင်နာကျင်မှုများစွာရှိသော်လည်းအဓိကအာရုံစိုက်သူမှာ ၀ ယ်သူဖြစ်သည်။ ရွက်လှေ၏နူးညံ့သောကျည်တောက်မှအမဲသားစစ်စစ်ကိုလိုသည်ထက်ပိုစားသည်",
            button: "ပိုပြီးဖတ်ပါ",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "ပိုမိုကြည့်ရှုပါ။",
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
        title: "ニュースセンター",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            contentnametwo: "投稿のタイトルはここにあり、2行です",
            paragraph:
              "痛み自体は多くの痛みですが、主な焦点は顧客にあります。 ヨットのやわらかい矢筒から、たっぷりの純粋な牛肉",
            button: "続きを読む",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "もっと見る",
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
        title: "NEWS CENTER",
        imgsrc: BackgroundImg,
        imgsrc2: BackgroundImg,
        videosrc: BackgroundVideo,
        groupcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: "CONTENT TAG",
            contentname: "Title of the post goes here and it’s two lines",
            contentnametwo: "Title of the post goes here and it’s two lines",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis pharetra ex, a laoreet purus vulputate eget.",
            button: "READ MORE",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "VIEW MORE",
      };
      return dummy;
  }
};

const getCaptionForCategoryLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = "Category";
      return engText;
    case "arabic":
      const arabicText = "فئة";
      return arabicText;
    case "burmese":
      const burmeseText = "အမျိုးအစား";
      return burmeseText;
    case "japanese":
      const japaneseText = "カテゴリー";
      return japaneseText;
    default:
      return "Category";
  }
};

const getCaptionForClearLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = "Clear All";
      return engText;
    case "arabic":
      const arabicText = "امسح الكل";
      return arabicText;
    case "burmese":
      const burmeseText = "အားလုံးကိုရှင်း";
      return burmeseText;
    case "japanese":
      const japaneseText = "すべてクリア";
      return japaneseText;
    default:
      return "Clear All";
  }
};

const getCaptionForActiveLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = "Active Filters";
      return engText;
    case "arabic":
      const arabicText = "عوامل التصفية النشطة";
      return arabicText;
    case "burmese":
      const burmeseText = "အသက်ဝင်သော စစ်ထုတ်မှုများ";
      return burmeseText;
    case "japanese":
      const japaneseText = "すべてクリア";
      return japaneseText;
    default:
      return "Active Filters";
  }
};

export default {
  title: "Templates/Generic landing page",
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>


<h1>Landing Page</h1>

<p>A generic landing page has dynamic content list</p>

<h3>Overview</h3>

<p>Generic Landing Page is the template where all the content is available for the user. The user can easily search for specific content here. Mock up - <a href="https://www.undp.org/news-centre">https://www.undp.org/news-centre</a></p>

<h3>Template Structure</h3>

<p>The following components are used to create the “Article page” template in the design system:</p>

<ul>
<li>Global header</li>
<li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
<li>Page Hero - Creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle and Breadcrumb.</li>
<li>Filters and search bar - Allows the user to apply filters to the search section.</li>
<li>Set of content cards (Results should be filtered based on Filter and search bar) - card of information with some items.</li>
<li>View more button - Call to action that will be performed when the user clicks/touches it.</li>
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
<li>Initialize size animation, navigation, language switcher, multi-select, accordion, filter by calling below mentioned functions.</li>
<ul>
<li>expandToSize('.pagehero-full');</li>
<li>navigationInitialize();</li>
<li>langSwitch();</li>
<li>expandSearch();</li>
<li>multiSelect();</li>
<li>toggleFilter();</li>
<li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
</ul>
<li>Add <code>data-viewport="true"</code> attribute on elements for the visibility animation.</li>
</ul>


<h4>CSS and JS References</h4>

<h5>CSS:</h5>

<p>Add the base layout style from <code>dist/css/base-minimal.min.css</code></p>

<ul>
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
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-group.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-group.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/countryhome-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/countryhome-page.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css</a></li>
<li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
</ul>

<h5>JS:</h5>

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

<h3>Changelog</h3>

<p>1.0 — Released component</p>

<Canvas>
  <Story
    name="Generic landing page"
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
      const categoryText = getCaptionForCategoryLocale(locale);
      const clearText = getCaptionForClearLocale(locale);
      const activeFilterText = getCaptionForActiveLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <GenericLandingPage
          args={args}
          clearText={clearText}
          activeFilterText={activeFilterText}
          buttonData={buttonData(locale)}
          data={categoryText}
          herodata={caption.herodata}
          title={caption.title}
          imgsrc={caption.imgsrc}
          heroimgsrc2={caption.imgsrc2}
          videosrc={caption.videosrc}
          active={"default"}
          groupcontentdata={caption.groupcontentdata}
          buttonname={caption.buttonname}
          footerData={footerData(locale)}
          logo={logo}
          logowhite={logowhite}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          {...args}
        ></GenericLandingPage>
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
      const categoryText = getCaptionForCategoryLocale(locale);
      const clearText = getCaptionForClearLocale(locale);
      const activeFilterText = getCaptionForActiveLocale(locale);
      const navigationData = getNavLinks(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <GenericLandingPage
          args={args}
          clearText={clearText}
          activeFilterText={activeFilterText}
          buttonData={buttonData(locale)}
          data={categoryText}
          herodata={caption.herodata}
          title={caption.title}
          imgsrc={caption.imgsrc}
          heroimgsrc2={caption.imgsrc2}
          videosrc={caption.videosrc}
          active={"default"}
          groupcontentdata={caption.groupcontentdata}
          buttonname={caption.buttonname}
          footerData={footerData(locale)}
          logo={logo}
          logowhite={logowhite}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          {...args}
        ></GenericLandingPage>
      );
}

export const GenericLandingPageStory = Template.bind({});
GenericLandingPageStory.storyName = "Generic Landing Page";
