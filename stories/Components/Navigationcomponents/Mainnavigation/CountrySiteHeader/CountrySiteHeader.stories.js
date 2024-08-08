import { Meta, Story, Canvas } from "@storybook/addon-docs";
import CountrySiteHeader from "./CountrySiteHeader";
import { getCaptionForLocale as Languageswitcher } from "../../../UIcomponents/LanguageSwitcher/LanguageSwitcher.stories.js";

export const getNavLinks = (locale) => {
  switch (locale) {
    case "english":
      return [
        { title: "Who we are", id: "headerlink1" },
        { title: "What we do", id: "headerlink2" },
        { title: "Our Impact", id: "headerlink3" },
        { title: "Get Involved", id: "headerlink4" },
      ];
    case "ukrainian":
      return [
        { title: "ПРООН в Україні", id: "headerlink1" },
        { title: "Чим ми займаємося", id: "headerlink2" },
        { title: "Наші результати", id: "headerlink3" },
        { title: "Долучайтеся", id: "headerlink4" },
      ];
    case "arabic":
      return [
        { title: "من نحن", id: "headerlink1" },
        { title: "الذي نفعله", id: "headerlink2" },
        { title: "تأثيرنا", id: "headerlink3" },
        { title: "شارك", id: "headerlink4" },
      ];
    case "burmese":
      return [
        { title: "ငါတို့ဘယ်သူလဲ။", id: "headerlink1" },
        { title: "ငါတို့ဘာလုပ်မလဲ။", id: "headerlink2" },
        { title: "ကျွန်ုပ်တို့၏သက်ရောက်မှု", id: "headerlink3" },
        { title: "ပါဝင်လိုက်ပါ။", id: "headerlink4" },
      ];
    case "japanese":
      return [
        { title: "私たちは誰ですか", id: "headerlink1" },
        { title: "私達がすること", id: "headerlink2" },
        { title: "私たちの影響", id: "headerlink3" },
        { title: "参加する", id: "headerlink4" },
      ];
    default:
      return [
        { title: "Who we are", id: "headerlink1" },
        { title: "What we do", id: "headerlink2" },
        { title: "Our Impact", id: "headerlink3" },
        { title: "Get Involved", id: "headerlink4" },
      ];
  }
};

export const getSiteTitle = (locale) => {
  switch (locale) {
    case "english":
      return { label: "REGION", span: "Site Title" };
    case "ukrainian":
      return { label: "РЕГІОН", span: "Заголовок сайту" };
    case "arabic":
      return { label: "عالمي", span: "عنوان الموقع" };
    case "burmese":
      return { label: "ကမ္ဘာလုံးဆိုင်ရာ", span: "ငဆိုက်ခေါင်းစဉ်" };
    case "japanese":
      return { label: "グローバル", span: "ウェブサイト名" };
    default:
      return { label: "REGION", span: "Site Title" };
  }
};

export const getLocationDataForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { detail: "Locations" };
    case "ukrainian":
      return { detail: "Розташування" };
    case "arabic":
      return { detail: "المواقع" };
    case "burmese":
      return { detail: "နေရာမျာ" };
    case "japanese":
      return { detail: "場所" };
    default:
      return { detail: "Locations" };
  }
};

export const getBackForLocale = (locale) => {
  switch (locale) {
    case "english":
      return { detail: "Back" };
    case "ukrainian":
      return { detail: "назад" };
    case "arabic":
      return { detail: "الى الخلف" };
    case "burmese":
      return { detail: "ကျော" };
    case "japanese":
      return { detail: "戻る" };
    default:
      return { detail: "Back" };
  }
};

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return "Select Language";
    case "ukrainian":
      return "Оберіть мову";
    case "arabic":
      return "اختار اللغة";
    case "burmese":
      return "ဘာသာစကားကို ရွေးပါ။";
    case "japanese":
      return "言語を選択する";
    default:
      return "Category";
  }
};

export const getSelectlanguage = (locale) => {
  switch (locale) {
    case "english":
      return "Select Language";
    case "ukrainian":
      return "Оберіть мову";
    case "arabic":
      return "اختار اللغة";
    case "burmese":
      return "ဘာသာစကားကို ရွေးပါ။";
    case "japanese":
      return "言語を選択する";
    default:
      return "Select Language";
  }
};

export const menuData = (locale) => {
  switch (locale) {
    case "english":
      return [
        { text: "menu item" },
        { text: "menu item" },
      ];
    case "ukrainian":
      return [
        { text: "пункт меню" },
        { text: "пункт меню" },
      ];
    case "arabic":
      return [
        { text: "عنصر القائمة" },
        { text: "عنصر القائمة" },
      ];
    case "burmese":
      return [
        { text: "မီနူးပစ္စည်းများ" },
        { text: "မီနူးပစ္စည်းများ" },
      ];
    case "japanese":
      return [
        { text: "メニュー項目" },
        { text: "メニュー項目" },
      ];
    default:
      return [
        { text: "menu item" },
        { text: "menu item" },
      ];
  }
};

export default { 
  title: "Components/Navigation components/Main navigation/Country header",
};

CountryHeader.parameters = {
  docs: {
    description: {
      component: `
  return (
    <Canvas>
      <Story
        name="Country header"
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
          let lang = locale === "en" ? "english" : locale;
          const caption = getCaptionForLocale(locale);
          const navigationData = getNavLinks(locale);
          const backcaption = getBackForLocale(locale);
          const siteTitleData = getSiteTitle(locale);
          return (
            <CountrySiteHeader
              siteTitleData={siteTitleData}
              backcaption={backcaption}
              locale={locale}
              navigationData={navigationData}
              menuData={navigationData}
              languageswitcherData={Languageswitcher(locale)}
              text={caption}
              locationData={getLocationDataForLocale(locale)}
              langSelect={getSelectlanguage(locale)}
              {...args}
            ></CountrySiteHeader>
          );
        }}
      </Story>
    </Canvas>
  );

  `,
    },
  },
};




