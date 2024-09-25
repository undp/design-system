import { Meta, Story, Canvas, Source } from "@storybook/addon-docs";
import { PublicationPage } from "./PublicationPage";
import { getCaptionForLocale as PublicationCardData } from "../../Molecules/Blocks/PublicationCard/PublicationCard.stories.js";
import { getCaptionForLocale as ContentCardWithOutImageData } from "../../Components/UIcomponents/Cards/ContentCard/ContentCardWithOutImage.stories.js";
import { getCaptionForLocale as footerData } from "../../Organism/Footer/FooterUtils.js";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";
import { getCaptionForLocale as Languageswitcher } from "../../Components/UIcomponents/LanguageSwitcher/LanguageSwitcherUtils.js";
import img from "../../assets/images/card2.jpg";
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
        postheaderdata: [
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
        download: "Download",
        readmore: "READ MORE",
        header: "UNDP Strategic Plan 2022-2025",
        description: "SEPTEMBER 2, 2021",
        paragraphTop1:
          "Non incidunt et consequatur ea ut esse. Quis non quos. Et placeat veniam autem ipsam eum dolor ut aspernatur. Odit accusantium molestias quae dicta. Dolorum voluptatem consectetur qui et tenetur eum. Ex et voluptas perspiciatis laborum.",
        paragraphTop2:
          "Exercitationem ut enim dolore pariatur magni non fuga. Et enim impedit sit eos dolor cupiditate. Blanditiis eum et velit exercitationem quia est consectetur. Aperiam molestiae aut nam. Unde qui possimus. Perferendis animi natus neque atque ab.",
        paragraphTop3:
          "Earum eos eos qui natus unde vero. Dolorem delectus commodi. Quia cupiditate maiores eos sunt quia ratione consequatur voluptate id.",
        buttonname: "VIEW MORE",
        PublicationHeading: ["Related", <br />, "Publications"],
        menuTitle1: "TOPICS",
        menuTitle2: ["REGIONS &", <br />, "COUNTRIES"],
        menuTitle3: "SDGS",
        menuTitle4: "AUTHORS",
        menuData1: [
          {
            label: "Topic 1",
          },
          {
            label: "Topic 2",
          },
          {
            label: "Topic 3",
          },
        ],
        menuData2: [
          {
            label: "Region 1",
          },
          {
            label: "Region 2",
          },
          {
            label: "Region 3",
          },
        ],
        menuData3: [
          {
            label: "SGD 1",
          },
          {
            label: "SGD 2",
          },
        ],
        menuData4: [
          {
            label: "First Name Last Name",
          },
          {
            label: "First Name Last Name",
          },
        ],
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
        ],
      };
      return engText;
    case "arabic":
      const arabicText = {
        postheaderdata: [
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
        download: "تحميل",
        readmore: "اقرأ أكثر",
        header: "الخطة الإستراتيجية لبرنامج الأمم المتحدة الإنمائي 2022-2025",
        description: "2 سبتمبر 2021",
        paragraphTop1:
          "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور.عدم التعرض للحوادث وما يترتب عليها من أمور.",
        paragraphTop2:
          "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور.عدم التعرض للحوادث وما يترتب عليها من أمور.",
        paragraphTop3:
          "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور.عدم التعرض للحوادث وما يترتب عليها من أمور.",
        buttonname: "إنجليزي",
        PublicationHeading: ["متعلق ب", <br />, "المنشورات"],
        menuTitle1: "المواضيع",
        menuTitle2: ["المناطق و", <br />, "الدول"],
        menuTitle3: "أهداف التنمية المستدامة",
        menuTitle4: "المؤلفون",
        menuData1: [
          {
            label: "الموضوع 1",
          },
          {
            label: "الموضوع 2",
          },
          {
            label: "الموضوع 3",
          },
        ],
        menuData2: [
          {
            label: "المنطقة 1",
          },
          {
            label: "المنطقة 2",
          },
          {
            label: "المنطقة 3",
          },
        ],
        menuData3: [
          {
            label: "دولار سنغافوري 1",
          },
          {
            label: "دولار سنغافوري 2",
          },
        ],
        menuData4: [
          {
            label: "الاسم الاول الاسم الاخير",
          },
          {
            label: "الاسم الاول الاسم الاخير",
          },
        ],
        featuredcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "علامة المحتوى",
            contentname:
              " عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            descriptionText:
              "عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما يترتب عليها من أمور. عدم التعرض للحوادث وما",
            button: "اقرأ أكثر",
            type: "image",
            scale: "medium",
            imgback: img,
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        postheaderdata: [
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
        download: "ဒေါင်းလုပ်",
        readmore: "ပိုပြီးဖတ်ပါ",
        header: "UNDP မဟာဗျူဟာစီမံချက် 2022-2025",
        description: "စက်တင်ဘာလ 2 ရက်၊ 2021 ခုနှစ်",
        paragraphTop1:
          "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
        paragraphTop2:
          "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
        paragraphTop3:
          "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
        buttonname: "ပိုမိုကြည့်ရှုပါ။",
        PublicationHeading: ["ဆက်စပ်", <br />, "စာစောင်များ"],
        menuTitle1: "ခေါင်းစဉ်များ",
        menuTitle2: ["ဒေသများ &", <br />, "နိုင်ငံများ"],
        menuTitle3: "SDGS",
        menuTitle4: "စာရေးသူများ",
        menuData1: [
          {
            label: "ခေါင်းစဉ် ၁",
          },
          {
            label: "ခေါင်းစဉ် ၂",
          },
          {
            label: "ခေါင်းစဉ် ၃",
          },
        ],
        menuData2: [
          {
            label: "တိုင်းဒေသကြီး ၁",
          },
          {
            label: "တိုင်းဒေသကြီး ၂",
          },
          {
            label: "တိုင်းဒေသကြီး ၃",
          },
        ],
        menuData3: [
          {
            label: "SGD ၁",
          },
          {
            label: "SGD ၂",
          },
        ],
        menuData4: [
          {
            label: "ပထမအမည် နောက်ဆုံးအမည်",
          },
          {
            label: "ပထမအမည် နောက်ဆုံးအမည်",
          },
        ],
        featuredcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ဆက်ဖတ်ရန်",
            type: "image",
            scale: "medium",
            imgback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        postheaderdata: [
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
        download: "ダウンロード",
        readmore: "続きを読む",
        header: "UNDP戦略計画2022-2025",
        description: "2021年9月2日",
        paragraphTop1:
          "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。",
        paragraphTop2:
          "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。",
        paragraphTop3:
          "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。",
        buttonname: "もっと見る",
        PublicationHeading: ["関連している", <br />, "出版物"],
        menuTitle1: "トピック",
        menuTitle2: ["地域＆", <br />, "国"],
        menuTitle3: "SDGS",
        menuTitle4: "著者",
        menuData1: [
          {
            label: "トピック1",
          },
          {
            label: "トピック2",
          },
          {
            label: "トピック3",
          },
        ],
        menuData2: [
          {
            label: "リージョン1",
          },
          {
            label: "リージョン2",
          },
          {
            label: "リージョン3",
          },
        ],
        menuData3: [
          {
            label: "SGD 1",
          },
          {
            label: "SGD 2",
          },
        ],
        menuData4: [
          {
            label: "名前苗字",
          },
          {
            label: "名前苗字",
          },
        ],
        featuredcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "コンテンツタグ",
            contentname:
              "「開発のための武器」イニシアチブの支援を受けて、シエラレオネの農村コミュニティによって破壊された72の小さな武器",
            descriptionText:
              "Weapons for Developmentイニシアチブ-OCWAR-Tプロジェクトは、EUとGFFOが共同出資するECOWASプロジェクトです。 ",
            button: "続きを読む",
            type: "image",
            scale: "medium",
            imgback: img,
          },
        ],
      };
      return japaneseText;
    default:
      return {
        postheaderdata: [
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
        download: "Download",
        readmore: "READ MORE",
        header: "UNDP Strategic Plan 2022-2025",
        description: "SEPTEMBER 2, 2021",
        paragraphTop1:
          "Non incidunt et consequatur ea ut esse. Quis non quos. Et placeat veniam autem ipsam eum dolor ut aspernatur. Odit accusantium molestias quae dicta. Dolorum voluptatem consectetur qui et tenetur eum. Ex et voluptas perspiciatis laborum.",
        paragraphTop2:
          "Exercitationem ut enim dolore pariatur magni non fuga. Et enim impedit sit eos dolor cupiditate. Blanditiis eum et velit exercitationem quia est consectetur. Aperiam molestiae aut nam. Unde qui possimus. Perferendis animi natus neque atque ab.",
        paragraphTop3:
          "Earum eos eos qui natus unde vero. Dolorem delectus commodi. Quia cupiditate maiores eos sunt quia ratione consequatur voluptate id.",
        buttonname: "VIEW MORE",
        PublicationHeading: ["Related", <br />, "Publications"],
        menuTitle1: "TOPICS",
        menuTitle2: ["REGIONS &", <br />, "COUNTRIES"],
        menuTitle3: "SDGS",
        menuTitle4: "AUTHORS",
        menuData1: [
          {
            label: "Topic 1",
          },
          {
            label: "Topic 2",
          },
          {
            label: "Topic 3",
          },
        ],
        menuData2: [
          {
            label: "Region 1",
          },
          {
            label: "Region 2",
          },
          {
            label: "Region 3",
          },
        ],
        menuData3: [
          {
            label: "SGD 1",
          },
          {
            label: "SGD 2",
          },
        ],
        menuData4: [
          {
            label: "First Name Last Name",
          },
          {
            label: "First Name Last Name",
          },
        ],
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit",
            descriptionText:
              "Lorem ipsum dolor sit amet, consectetur domus adipiscing elit, sed do eiusmod tempor incididunt",
            button: "READ MORE",
            type: "image",
            scale: "medium",
            imgback: img,
          },
        ],
      };
  }
};

export default {
  title: "Templates/PublicationPage",
  component: PublicationPage,
  argTypes: {
    locale: {
      control: {
        type: "select",
        options: ["english", "french", "spanish", "arabic", "burmese", "japanese"],
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

<h1>Publication Page</h1>

<p>A Publication page has information about important things like copyright, publication details, and legal disclaimers.</p>

<h3>Overview</h3>

<p>In the Publication Page, the user can get important information such as copyright, publication details, and legal disclaimers. Mockup - <a href="https://www.undp.org/publications/fossil-fuel-subsidy-reform-lessons-and-opportunities">https://www.undp.org/publications/fossil-fuel-subsidy-reform-lessons-and-opportunities</a></p>

<h3>Template Structure</h3>

<p>The following components are used to create the “Article Page” template in the design system:</p>

<ul>
  <li>Global header</li>
  <li>Breadcrumbs - Creates navigation links for the current pathname based on an opinionated configuration object.</li>
  <li>Download Card - Download the document in the user preferred language.</li>
  <li>Read more links - Help users quickly understand the context in which they are placed.</li>
  <li>Post block without description - Defines a section of information data with some items - Header Title, Date.</li>
  <li>Paragraph</li>
  <li>Menu links with label - Consists of multiple clickable items placed at the top of the page.</li>
  <li>Featured Content Cards - Featured card groups that will have CTA links (this can be just #).</li>
  <li>View more buttons for showing more featured cards - Call to action that will be performed when the user clicks it.</li>
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
  <li>Copy HTML from the HTML tab of Canvas and include CSS and JS file in ‘CSS and JS References’ section.</li>
  <li>Initialize navigation, language switcher, accordion, filter by calling the below-mentioned functions:</li>
  <ul>
    <li>navigationInitialize();</li>
    <li>langSwitch();</li>
    <li>accordion('[data-accordion="mobile"]', '.footer-panel', 'active');</li>
  </ul>
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
    name="Publication page"
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
      return (
        <PublicationPage
          data={caption.postheaderdata}
          active={"default"}
          download={caption.download}
          readmore={caption.readmore}
          image
          blockHeader={caption.header}
          blockDescription={caption.description}
          paragraphTop1={caption.paragraphTop1}
          paragraphTop2={caption.paragraphTop2}
          paragraphTop3={caption.paragraphTop3}
          buttontype={caption.buttonname}
          relatedPublicationHeading={caption.PublicationHeading}
          ContentCardWithOutImageData={caption.contentdata}
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
          menuTitle1={caption.menuTitle1}
          menuTitle2={caption.menuTitle2}
          menuTitle3={caption.menuTitle3}
          menuTitle4={caption.menuTitle4}
          menuData1={caption.menuData1}
          menuData2={caption.menuData2}
          menuData3={caption.menuData3}
          menuData4={caption.menuData4}
          FeaturedCardData={caption.featuredcontentdata}
          {...args}
        ></PublicationPage>
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
        <PublicationPage
          data={caption.postheaderdata}
          active={"default"}
          download={caption.download}
          readmore={caption.readmore}
          image
          blockHeader={caption.header}
          blockDescription={caption.description}
          paragraphTop1={caption.paragraphTop1}
          paragraphTop2={caption.paragraphTop2}
          paragraphTop3={caption.paragraphTop3}
          buttontype={caption.buttonname}
          relatedPublicationHeading={caption.PublicationHeading}
          ContentCardWithOutImageData={caption.contentdata}
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
          menuTitle1={caption.menuTitle1}
          menuTitle2={caption.menuTitle2}
          menuTitle3={caption.menuTitle3}
          menuTitle4={caption.menuTitle4}
          menuData1={caption.menuData1}
          menuData2={caption.menuData2}
          menuData3={caption.menuData3}
          menuData4={caption.menuData4}
          FeaturedCardData={caption.featuredcontentdata}
          {...args}
        ></PublicationPage>
      );
}

export const PublicationPageStory = Template.bind({});
PublicationPageStory.storyName = "Publication page";
