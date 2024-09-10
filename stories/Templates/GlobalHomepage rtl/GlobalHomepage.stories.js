import {
  Meta,
  Story,
  Canvas,
  DocsPage,
  DocsContainer,
} from "@storybook/addon-docs";
import { GlobalHomePage } from "./GlobalHomepage.jsx";
import img from "../../assets/images/card2.jpg";

import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import {
  getNavLinks,
  menuData,
  getSiteTitle,
  getLocationDataForLocale,
  getBackForLocale,
  getSelectlanguage,
} from "../../Components/Navigationcomponents/Mainnavigation/GlobalHeader/GlobalHeaderUtils.js";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        groupcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "small",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "small",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "small",
          },
        ],
        headertext: ["Related", <br />, "Posts"],
        label: "Publications",
        whatwedoheader: ["Our", <br />, "Mission"],
        whatwedodescription:
          "On the ground in about 170 countries and territories, UNDP works to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress.",
        img: img,
      };
      return engText;
    case "arabic":
      const arabicText = {
        groupcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            button: "اقرأ أكث",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "small",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            imgback: img,
            type: "image",
            scale: "small",
          },
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            type: "color",
            scale: "small",
          },
        ],
        headertext: ["علامة", <br />, "المحتو"],
        label: "المنشورات",
        whatwedoheader: ["بعثة", <br />, "لنا"],
        whatwedodescription:
          "على الأرض في حوالي 170 دولة وإقليم ، يعمل برنامج الأمم المتحدة الإنمائي على القضاء على الفقر مع حماية كوكب الأرض. نحن نساعد البلدان على تطوير سياسات ومهارات وشراكات ومؤسسات قوية حتى تتمكن من الحفاظ على تقدمها.",
        img: img,
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        groupcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "small",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
            type: "image",
            scale: "small",
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            type: "color",
            scale: "small",
          },
        ],
        headertext: ["အကြောင်", <br />, "အကြောင်"],
        label: "စာစောင်များ",
        whatwedoheader: ["ကျွန်တော်တို့ရဲ့", <br />, "သာသနာ"],
        whatwedodescription:
          "နိုင်ငံနှင့် နယ်မြေပေါင်း ၁၇၀ ခန့်ရှိ မြေပြင်တွင် UNDP သည် ကမ္ဘာမြေကို ကာကွယ်ရင်း ဆင်းရဲမွဲတေမှု ပပျောက်ရေး လုပ်ဆောင်နေပါသည်။ နိုင်ငံများ၏ ခိုင်မာသောမူဝါဒများ၊ ကျွမ်းကျင်မှု၊ မိတ်ဖက်များနှင့် အင်စတီကျူးရှင်းများ ဖွံ့ဖြိုးတိုးတက်စေရန် ကျွန်ုပ်တို့သည် ၎င်းတို့၏တိုးတက်မှုကို ထိန်းထားနိုင်စေရန် ကူညီပေးပါသည်။",
        img: img,
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        groupcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "small",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            imgback: img,
            type: "image",
            scale: "small",
          },
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            type: "color",
            scale: "small",
          },
        ],
        headertext: ["コンテン", <br />, "ツタグ"],
        label: "出版物",
        whatwedoheader: ["私たちの", <br />, "ミッション"],
        whatwedodescription:
          "UNDPは、約170の国と地域で、地球を守りながら貧困を根絶するために活動しています。私たちは、各国が進歩を維持できるように、強力な政策、スキル、パートナーシップ、制度を開発するのを支援します。",
        img: img,
      };
      return japaneseText;
    default:
      const dummy = {
        groupcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "large",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "medium",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "small",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
            type: "image",
            scale: "small",
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            type: "color",
            scale: "small",
          },
        ],
        headertext: ["Related", <br />, "Posts"],
        label: "Publications",
        whatwedoheader: ["Our", <br />, "Mission"],
        img: img,
        whatwedodescription:
          "On the ground in about 170 countries and territories, UNDP works to eradicate poverty while protecting the planet. We help countries develop strong policies, skills, partnerships and institutions so they can sustain their progress.",
      };
      return dummy;
  }
};

export default {
  title: "Templates/Global Homepage RTL",
  component: GlobalHomePage,
  parameters: {
    docs: {
        page: () => (
            <>
              <style>
                {`
                .sbdocs-preview {display: none}
                `}
              </style>


              <h1>Global Homepage</h1>
                  <p>A global page has all dynamic content lists from the website</p>

                  <h3>Overview</h3>
                  <p>A global page has all the content listed. This helps the user to get all the data in one place.</p>
                  <p>Mock Up: <a href="https://undp-design-system.azurewebsites.net/">https://undp-design-system.azurewebsites.net/</a></p>

                  <h3>Template Structure</h3>
                  <p>The following components are used to create the “Article Page” template in the design system:</p>
                  <ol>
                      <li>Global header</li>
                      <li>Page Hero - Creates boxes that are usually teasing some kind of content like- Image, Text, Subtitle, and Breadcrumb.</li>
                      <li>Group of single content cards with images along with CTA links (this can be just #).</li>
                      <li>Background image(color) with text</li>
                      <li>Our expertise</li>
                      <li>Title with big image copy and also has CTA button</li>
                      <li>Background image(color) with text, Header, and Description</li>
                      <li>Stats panel - displayed as a part of a collection of similar cards highlighting various statistics</li>
                      <li>Carousel - Shows sliders, designation, and image in a particular section.</li>
                      <li>Group of single content cards with images along with CTA links (this can be just #).</li>
                      <li>Tweets section - Where the user can redirect to the Twitter page</li>
                      <li>Standard footer</li>
                  </ol>

                  <h3>Performance</h3>
                  <p>The page performance will be optimized by considering the following:</p>
                  <ul>
                      <li>Lazy load</li>
                      <li>Use appropriate media renditions based on the client’s viewpoint.</li>
                      <li>Load common/static elements asynchronously (static navigation, menus, countries list, etc)</li>
                      <li>Optimize assets loading - inline important CSS, defer bulky assets calls, preconnect to required origins, etc)</li>
                      <li>Optimize transitions and animations so above-the-fold elements are always loaded first and available for viewers before the rest of the page is processed</li>
                  </ul>

                  <h3>Usage</h3>
                  <ul>
                      <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section</li>
                      <li>Initialize navigation, language switcher, accordion, statsHover, swiper by calling below mentioned functions when visible on screen:</li>
                      <ul>
                          <li>navigationInitialize();</li>
                          <li>langSwitch();</li>
                          <li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
                          <li>statsHover();</li>
                          <li>swiper('.fixed-carousel', '.fixed-carousel__button-wrap');</li>
                      </ul>
                      <li>Refer <a href="https://github.com/undp/design-system/wiki/Swiper-documentation">this document</a> for Swiper integration & options</li>
                      <li>If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element.</li>
                  </ul>

                  <h4>CSS and JS References</h4>

              <h5>CSS:</h5>
                  <p>Add the base layout style from:</p>
                  <ul>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/global-header.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/language-switcher.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/menu.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mega-menu.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/mobile-nav.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/homepage-hero.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/featured-content-card.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/headingbig.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textbackground.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textbackground.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/textcta.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/our-expertise.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/our-expertise.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-cards.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-panel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats-panel.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/stats.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fixed-size-carousel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/fixed-size-carousel.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/tweet-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/tweet-card.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/tweet-panel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/tweet-panel.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-group.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-group.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/globalhome-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/globalhome-page.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/templates/article-page.min.css</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/swiper.min.css</a></li>
                  </ul>

                  <h5>JS:</h5>
                  <ul>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/swiper.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/our-expertise.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/our-expertise.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smartresize.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smartresize.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/navigation.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/undp.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/lang-switcher.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sticky.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/sticky.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/stats.min.js</a></li>
                      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smooth-bg-change.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/smooth-bg-change.min.js</a></li>
                  </ul>

                  <p>Add the following external libraries:</p>
                  <ul>
                      <li>Swiper (<a href="https://swiperjs.com/get-started">https://swiperjs.com/get-started</a>)</li>
                      <li>GSAP (<a href="https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo">https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger,easePack,slowMo</a>)</li>
                  </ul>

                  <h3>Changelog</h3>
                  <ul>
                      <li>1.0 — Released component</li>
                      <li>1.0.10 - Our Expertise section replaced with new rendering</li>
                  </ul>

              <Canvas>
                <Story
                  name="Global homepage rtl"
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
                    return (
                      <GlobalHomePage
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
                      ></GlobalHomePage>
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
    <GlobalHomePage
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
    ></GlobalHomePage>
  );
}

export const GlobalHomepageRtlStory = Template.bind({});
GlobalHomepageRtlStory.storyName = "Global Homepage RTL";
