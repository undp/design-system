import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Footer } from "./Footer";
import logo from "../../assets/images/undp-logo-blue.svg";
import logowhite from "../../assets/images/undp-logo-white.svg";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        footerdata: [
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
        ],
        menudata: [
          {
            menu: "Report Fraud, Abuse, Misconduct",
          },
          {
            menu: "Submit Social Or Environmental Complaint",
          },
          {
            menu: "Scam Alert",
          },
          {
            menu: "Terms Of Use",
          },
        ],
        menudata2: [
          {
            menu: "Terms Of Use",
          },
        ],
        headerText: ["United Nations", <br />, "Development Programme"],
        labelname: "Sign up for our newsletter",
        buttonname: "SUBMIT",
        placeholdername: "Email",
        errorLabel: "*Error: this field is required",
        pageTitle: "Page Title",
        copyright: "© United Nations Development Programme",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        footerdata: [
          {
            text: "Назва сторінки",
          },
          {
            text: "Назва сторінки",
          },
          {
            text: "Назва сторінки",
          },
          {
            text: "Назва сторінки",
          },
          {
            text: "Назва сторінки",
          },
        ],
        menudata: [
          {
            menu: "Повідомити про обман, порушення або неналежну поведінку",
          },
          {
            menu: "Гаряча лінія з соціальних та екологічних питань",
          },
          {
            menu: "Запобігання шахрайству",
          },
          {
            menu: "Умови використання",
          },
        ],
        menudata2: [
          {
            menu: "Умови використання",
          },
        ],
        headerText: ["United Nations", <br />, "Development Programme"],
        labelname: "Підпишіться на наші новини",
        buttonname: "SUBMIT",
        placeholdername: "Email",
        errorLabel: "*Помилка: це поле обов'язкове",
        pageTitle: "Назва сторінки",
        copyright: "© ПРООН",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        footerdata: [
          {
            text: "عنوان الصفحة",
          },
          {
            text: "عنوان الصفحة",
          },
          {
            text: "عنوان الصفحة",
          },
          {
            text: "عنوان الصفحة",
          },
          {
            text: "عنوان الصفحة",
          },
        ],
        menudata: [
          {
            menu: "الإبلاغ عن الاحتيال والإساءة وسوء السلوك",
          },
          {
            menu: "إرسال شكوى اجتماعية أو بيئية",
          },
          {
            menu: "تنبيه احتيال",
          },
          {
            menu: "تعليمات الاستخدام",
          },
        ],
        menudata2: [
          {
            menu: "تعليمات الاستخدام",
          },
        ],
        headerText: ["الأمم المتحدة", <br />, "برنامج التطوير"],
        labelname: "سجل للحصول على اخر اخبارنا",
        buttonname: "يقدم",
        placeholdername: "بريد الالكتروني",
        errorLabel: "* خطأ: هذا الحقل مطلوب",
        pageTitle: "عنوان الصفحة",
        copyright: "© برنامج الأمم المتحدة الإنمائي ",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        footerdata: [
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
          {
            text: "စာမျက်နှာခေါင်းစဉ်",
          },
        ],
        menudata: [
          {
            menu: "လိမ်လည်မှု၊ အလွဲသုံးစားမှု၊ အကျင့်ပျက်ခြစားမှုကိုအစီရင်ခံပါ",
          },
          {
            menu: "လူမှုရေးသို့မဟုတ်ပတ်ဝန်းကျင်ဆိုင်ရာတိုင်ကြားစာကိုတင်ပါ",
          },
          {
            menu: "Scam သတိပေးချက်",
          },
          {
            menu: "သတ်မှတ်ချက်များ",
          },
        ],
        menudata2: [
          {
            menu: "သတ်မှတ်ချက်များ",
          },
        ],
        headerText: ["ကုလသမဂ္ဂ", <br />, "ဖွံ့ဖြိုးရေးအစီအစဉ်"],
        labelname: "ကျွန်ုပ်တို့၏သတင်းလွှာအတွက်စာရင်းပေးသွင်းပါ",
        buttonname: "တင်ပေးပါ",
        placeholdername: "အီးမေးလ်",
        errorLabel: "*အမှား - ဤအကွက်လိုအပ်သည်",
        pageTitle: "စာမျက်နှာခေါင်းစဉ်",
        copyright: "© ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        footerdata: [
          {
            text: "ページタイトル",
          },
          {
            text: "ページタイトル",
          },
          {
            text: "ページタイトル",
          },
          {
            text: "ページタイトル",
          },
          {
            text: "ページタイトル",
          },
        ],
        menudata: [
          {
            menu: "詐欺、虐待、不正行為を報告する",
          },
          {
            menu: "社会的または環境的苦情を提出する",
          },
          {
            menu: "詐欺警告",
          },
          {
            menu: "利用規約",
          },
        ],
        menudata2: [
          {
            menu: "利用規約",
          },
        ],
        headerText: ["国連", <br />, "開発プログラム"],
        labelname: "ニュースレターに登録する",
        buttonname: "送信",
        placeholdername: "Eメール",
        errorLabel: "*エラー：このフィールドは必須です",
        pageTitle: "ページタイトル",
        copyright: "© 国連開発計画",
      };
      return japaneseText;
    default:
      const dummy = {
        footerdata: [
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
          {
            text: "Page title",
          },
        ],
        menudata: [
          {
            menu: "Report Fraud, Abuse, Misconduct",
          },
          {
            menu: "Submit Social Or Environmental Complaint",
          },
          {
            menu: "Scam Alert",
          },
          {
            menu: "Terms Of Use",
          },
        ],
        menudata2: [
          {
            menu: "Terms Of Use",
          },
        ],
        headerText: ["United Nations", <br />, "Development Programme"],
        labelname: "Sign up for our newsletter",
        buttonname: "SUBMIT",
        placeholdername: "Email",
        errorLabel: "*Error: this field is required",
        pageTitle: "Page Title",
        copyright: "© United Nations Development Programme",
      };
      return dummy;
  }
};

export default {
  title: "Components/UI components/Footer",
  argTypes: {
    variant: {
      options: ["default", "simple"],
      control: { type: "inline-radio" },
    },
    color: {
      options: ["default", "inverted"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    variant: "default",
    color: "default",
  },
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <Footer data={caption} />;
}

export const FooterStory = Template.bind({});
FooterStory.args = { variant: "default", color: "default" };
FooterStory.parameters = {
  docs: {
    description: {
      component: `

# Footer

A footer has a list of information about the website at the bottom of the page.

### Overview

A footer has all the information or other web pages that are there in the website. Footer is treated as its own section of the web page that is separated from the header, content and sidebars.This includes the copyright information for the website, the name of the website's author, the business name and address.

#### When to use:

When a standardized footer is required to be placed at the bottom of a webpage

### Formatting

#### Default

Footer in default state is with blue color background which has newsletter subscription section, Company name logo in white background. It has a list of internal webpages, search and globe icons. Even there will be social media icons like LinkedIn, Twitter, Facebook, Instagram, and youtube. There will be copyright and terms of the company.

### Content

There are 2 types of footers: Default and Simple

Default: This has a blue background with newsletter subscription section, company name logo in white background, internal webpage links, search and global icon, along with social media logos.

Simple: This has blue background with logo in white background with company name.This will have only social media logos, terms and copyright sections.

### Behaviors

#### States

Footer has 2 states: Default, and Inverted

Default: In default state footer background will be in blue color. The text will be in white color.

Desktop view: In this view, the footer appears in rectangle shape.

Mobile view: In this view, the footer will appear in verticle shaped box

Inverted : In the state the footer has white background and the text will be in blue color rest will be same as default state.

<Canvas>
  <Story
    name="Footer"
    parameters={{
      layout: "fullscreen",
      chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
    }}
  >
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      const menuData =
        args["variant"] === "simple" ? caption.menudata2 : caption.menudata;
      return (
        <Footer
          src={logo}
          srctwo={logowhite}
          logolink="https://www.undp.org"
          headerText={caption.headerText}
          alt={"UNDP Logo"}
          element="input"
          type="email"
          required="required"
          mode="form-email"
          errorText={caption.errorLabel}
          label={caption.labelname}
          button={caption.buttonname}
          placeholder={caption.placeholdername}
          menutitle={caption.pageTitle}
          data={caption.footerdata}
          copyright={caption.copyright}
          menudata={menuData}
          {...args}
        ></Footer>
      );
    }}
  </Story>
</Canvas>

### Usage:

- Choose the control either Default or Inverted from the control tab of canvas.
- Copy HTML from the HTML tab and include below listed css and js files.
- Initialize the accordion by calling accordion('[data-accordion="mobile"]', '.footer-panel', 'active'); function, this needs to be called to make links accordion on smaller screen (mobile).

### CSS and JS References

#### CSS:

Add the base layout style from

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/footer.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/input-fields.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/newsletter-signup.min.css
- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css

#### JS:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js

### Interactions

No interactions

### Changelog

1.0 — Released component

`,
    },
  },
};