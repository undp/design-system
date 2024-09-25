import { Meta, Story, Canvas } from "@storybook/addon-docs";
import AuthorPage from "./AuthorPage.jsx";
import { getCaptionForLocale as breadcrumbData } from "../../Components/Navigationcomponents/Breadcrumbs/BreadcrumbsUtils.js";
import { getCaptionForLocale as authorSummaryData } from "../../Organism/Blocks/AuthorSummary/AuthorSummaryUtils.js";
import { getCaptionForLocale as contentCardData } from "../../Organism/Blocks/ContentCard/ContentCard.stories.js";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/FooterUtils.js";
import img from "../../assets/images/card-thumbnail.jpg";
import img2 from "../../assets/images/CardImage2.jpg";
import img3 from "../../assets/images/CardImage3.jpg";
import img4 from "../../assets/images/CardImage4.jpg";
import img5 from "../../assets/images/CardImage5.jpg";
import img6 from "../../assets/images/CardImage6.jpg";
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
      return { authorheading: "Author" };
    case "ukrainian":
      return { authorheading: "Автор" };
    case "arabic":
      const arabicText = { authorheading: "مؤلف" };
      return arabicText;
    case "burmese":
      const burmeseText = { authorheading: "စာရေးသူ" };
      return burmeseText;
    case "japanese":
      const japaneseText = { authorheading: "著者" };
      return japaneseText;
    default:
      return { authorheading: "Author" };
  }
};

const getCaptionDataLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
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
        groupcontentdata: [
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img6,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img2,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img3,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img4,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img5,
          },
          {
            contenttile: " Блог ",
            contentname: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM ",
            contentnametwo: "Сприяючи гендерній рівності: Як ми допомогаємо жінкам досягти успіху в STEM",
            paragraph:
              "Три ініціативи від Програми розвитку ООН за фінансування Швеції прагнуть залучити більше жінок у технічні професії та надихнути їх не боятися вивчати STEM-спеціальності",
            button: "Більше ",
            link: "#",
            imgback: img6,
          },
        ],
        buttonname: "ПЕРЕГЛЯНУТИ БІЛЬШЕ",
        titlename: "Виявлення реального стану енергетичної інфраструктури України після руйнівних обстрілів",
        text: "Нова оцінка стану енергетичного сектора в усій країні підтвердила, що нанесені збитки перевищують 10 млрд дол. США, а здатність України виробляти електроенергію знизилася на 61%. Оскільки інтенсивність обстрілів енергосистеми не вщухає, що чекає на Україну в майбутньому?",
        btnlabel: "ЧИТАТИ ДАЛІ",
        searchData: "Оберіть мову",
      };
      return ukText;
    case "arabic":
      const arabicText = {
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

export default {
  title: "Templates/Author detail page",
  parameters: {
    docs: {
        page: () => (
            <>
<style>
  {`
  .sbdocs-preview {display: none}
  `}
</style>

<h1>Author Page</h1>
<p>An Author page has all information about the author and articles or blogs written by that particular author.</p>

<h3>Overview</h3>
<p>An Author page has all information about the author and articles or blogs written by that particular author.</p>

<h3>Template Structure</h3>
<p>The following components are used to create the “Author Page” template in the design system:</p>
<ul>
    <li>Global header</li>
    <li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
    <li>Author Summary - Shows the author's name, designation, and image in a particular section</li>
    <li>Group of single content cards with images along with CTA links (this can be just #).</li>
    <li>View more buttons in case of more content available</li>
    <li>Standard footer</li>
</ul>

<h3>Performance</h3>
<ul>
    <li>The page performance will be optimized by considering the following:</li>
    <ul>
        <li>Lazy load</li>
        <li>Use appropriate media renditions based on the client’s viewpoint.</li>
        <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc)</li>
        <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc)</li>
        <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed.</li>
    </ul>
</ul>

<h3>Usage</h3>
<ul>
    <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section</li>
    <li>Initialize navigation, language switcher, accordion, filter by calling below mentioned functions.</li>
    <ul>
        <li><code>navigationInitialize();</code></li>
        <li><code>langSwitch();</code></li>
        <li><code>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</code></li>
    </ul>
    <li>If you want to add left-right animation then add <code>data-viewport=”true”</code> attribute to your HTML element.</li>
</ul>

<h3>CSS and JS References</h3>

<h4>CSS:</h4>
<p>Add the base layout style from</p>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/breadcrumbs.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-card.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/authors.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/content-card.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/chips.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/chips.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/author-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/author-page.min.css</a></li>
</ul>

<h4>JS:</h4>
<ul>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/animation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
    <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
</ul>

<h3>Changelog</h3>
<p>1.0 — Released component</p>

<Canvas>
  <Story
    name="Author detail page"
  >
    {(args, { globals: { locale, accent } }) => {
      const navigationData = getNavLinks(locale);
      const caption = getCaptionDataLocale(locale);
      const leftNavigationData = navigationData.filter(
        (item) => item.position === "left"
      );
      const rightNavigationData = navigationData.filter(
        (item) => item.position === "right"
      );
      return (
        <AuthorPage
          footerData={footerData(locale)}
          breadcrumbData={breadcrumbData(locale)}
          authorSummaryData={authorSummaryData(locale)}
          groupcontentdata={caption.groupcontentdata}
          buttonname={caption.buttonname}
          locale={locale}
          leftNavigationData={leftNavigationData}
          navigationData={navigationData}
          rightNavigationData={rightNavigationData}
          menuData={menuData(locale)}
          languageswitcherData={Languageswitcher(locale)}
          locationData={getLocationDataForLocale(locale)}
          langSelect={getSelectlanguage(locale)}
          backcaption={getBackForLocale(locale)}
          Authorlabel={getCaptionForLocale(locale)}
          {...args}
        ></AuthorPage>
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
  const navigationData = getNavLinks(locale);
  const caption = getCaptionDataLocale(locale);
  const leftNavigationData = navigationData.filter(
    (item) => item.position === "left"
  );
  const rightNavigationData = navigationData.filter(
    (item) => item.position === "right"
  );
  return (
    <AuthorPage
      footerData={footerData(locale)}
      breadcrumbData={breadcrumbData(locale)}
      authorSummaryData={authorSummaryData(locale)}
      groupcontentdata={caption.groupcontentdata}
      buttonname={caption.buttonname}
      locale={locale}
      leftNavigationData={leftNavigationData}
      navigationData={navigationData}
      rightNavigationData={rightNavigationData}
      menuData={menuData(locale)}
      languageswitcherData={Languageswitcher(locale)}
      locationData={getLocationDataForLocale(locale)}
      langSelect={getSelectlanguage(locale)}
      backcaption={getBackForLocale(locale)}
      Authorlabel={getCaptionForLocale(locale)}
      {...args}
    ></AuthorPage>
  );
}

export const AuthorPageStory = Template.bind({});
AuthorPageStory.storyName = "Author Page";

