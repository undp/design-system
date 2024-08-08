import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { AuthorSummary } from "./AuthorSummary";
import user from "../../../assets/images/user.svg";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        paragraph:
          "Explicabo sequi dolorem. Inventore est saepe. Aut et dignissimos ab sed deserunt voluptatem. Commodi aliquid et provident. Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem.",
        text1: "Author summary",
        text2: "Firstname Lastname",
        text3: "Job title",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        paragraph:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        text1: "Author summary",
        text2: "Наталiя Бойко",
        text3: "Керівник проекту",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        paragraph:
          "سأشرح لك ألمي. غالبًا ما يكون مخترعًا. أو ، الأكثر جدارة ، ولكن التخلي عن اللذة. يقدمون شيئًا مفيدًا. تم تحسينها جميعًا ، لكن التمرين مزعج أيضًا. أو ، الأكثر جدارة ، ولكن التخلي عن اللذة.",
        text1: "ملخص المؤلف",
        text2: "الاسم الاول الاسم الاخير",
        text3: "عنوان وظيفي",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        paragraph:
          "Explico sequi dolorem est saepe ကို တီထွင်ပါ။ Aut et dignissimos ab sed deserunt voluptatem ။ ကုန်စည်ဒိုင် နှင့် အရည်များ။ Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem.",
        text1: "စာရေးသူ အကျဉ်းချုပ်",
        text2: "နံမည် နောက်ဆုံးအမည်",
        text3: "အလုပ်အကိုင်အမည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        paragraph:
          "私の痛みをあなたに説明します。彼はしばしば発明者です。または、最も価値があるが、喜びを放棄します。それらは何か有益なものを提供します。それらはすべて強化されていますが、演習も面倒です。または、最も価値があるが、喜びを放棄します。",
        text1: "著者の概要",
        text2: "名前苗字",
        text3: "職名",
      };
      return japaneseText;
    default:
      const dummy = {
        paragraph:
          "Explicabo sequi dolorem. Inventore est saepe. Aut et dignissimos ab sed deserunt voluptatem. Commodi aliquid et provident. Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem. ",
        text1: "Author summary",
        text2: "Firstname Lastname",
        text3: "Job title",
      };
      return dummy;
  }
};

export default {
  title: "Components/UI components/Author summary",
  component: {AuthorSummary}
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return <AuthorSummaryGallery data={caption} />;
};

export const AuthorSummaryGalleryTemp = Template.bind({});
ImageCarousel.args = {};
ImageCarousel.parameters = {
  docs: {
    page: () => (
      <>
      <h1>Author Summary</h1>

      <h3>Overview</h3>

      <p>The Author summary is created for showing the authors name, designation, photo and bio in particular section. It is a multi-usage component that creates are usually teasing some kind of content.</p>

      <div>
        <h4>Author summary</h4>
        <div>
          <p>Explicabo sequi dolorem. Inventore est saepe. Aut et dignissimos ab sed deserunt voluptatem. Commodi aliquid et provident. Omnis quidem consectetur in sed exercitationem molestiae ut vero est. Aut et dignissimos ab sed deserunt voluptatem.</p>
          <p>Author summary</p>
          <p>Firstname Lastname</p>
          <p>Job title</p>
        </div>
      </div>

      <h3>Usage</h3>

      <ul>
        <li>Copy HTML from the Canvas page and add CSS and JS from the 'CSS and JS References' section below.</li>
      </ul>

      <h3>CSS and JS References</h3>

      <h4>CSS:</h4>

      <p>Add the base layout style from</p>

      <ul>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
        <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/author-summary.min.css</a></li>
      </ul>

      <h4>JS:</h4>

      <ul>
        <li>NA</li>
      </ul>

      <h3>Changelog</h3>

      <p>1.0 — Released component</p>
      </>
    )
  },
};
