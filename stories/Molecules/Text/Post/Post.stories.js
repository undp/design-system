import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Post } from "./Post";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header:
          "Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19",
        country:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet consequat vulputate.",
        description: "Posted 27 January, 2021",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header:
          "Війна в Україні та її вплив на місцеву і глобальну продовольчу безпеку",
        country:
          "Висновки початкового дослідження та картування рішень, підготовлені Лабораторією інноваційного розвитку ПРООН в Україні",
        description: "21 ЧЕРВНЯ 2022 РОКУ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header:
          "مقاطعتا مويامبا وبوجيهون تحصلان على 80٪ من مشروع مشترك بين برنامج الأمم المتحدة الإنمائي وبرنامج الأغذية العالمي لنجاح مشروع بناء السلام وسط COVID-19",
        country:
          "يشير النص الوهمي إلى أجزاء المحتوى المستخدمة لملء نموذج موقع الويب.",
        description: "تم النشر في 27 كانون الثاني (يناير) 2021",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header:
          "Moyamba နှင့် Pujehun ခရိုင်များသည် COVID-19 ကာလအတွင်းငြိမ်းချမ်းရေးတည်ဆောက်မှုစီမံကိန်းအောင်မြင်ရေးအတွက် UNDP နှင့် WFP ထောက်ပံ့ပေးသောစီမံကိန်း ၈၀% ပူးတွဲရမှတ်",
        country:
          "Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။",
        description: "ဇန်နဝါရီ ၂၇၊ ၂၀၂၁ တွင်တင်ခဲ့သည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header:
          "モヤンバ地区とプジェフン地区は、COVID-19の中で平和構築プロジェクトが成功したことで、UNDPとWFPが支援する共同プロジェクトの80％を獲得しました。",
        country:
          "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。",
        description: "2021年1月27日投稿",
      };
      return japaneseText;
    default:
      return {
        header:
          "Moyamba and Pujehun Districts score joint UNDP, WFP-supported project 80% for Peacebuilding Project’s Success amidst COVID-19",
        country:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet consequat vulputate.",
        description: "Posted 27 January, 2021",
      };
  }
};

export default {
  title: "Components/UI components/Text/Post block", 
  component: Post,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Post Block</h1>

              <p>The Post Block Component defines a section of information data with some items - header title, date, Description. <code>H2</code>, <code>H5</code>, and <code>H6</code> atoms tags are used for creating this section.</p>

              <p>It is divided into two variations - First with Description option and Second without description option.</p>

              <h3>Post block are of 2 types</h3>

              <h4>Post Block with Description</h4>

              <Canvas of={PostWithDescription} />

              <h4>Post Block without Description</h4>

              <Canvas of={PostWithoutDescription} />

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/post.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/post.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a> (optional for viewport animation)</p>

              <h3>Changelog</h3>

              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const PostTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Post
      headerText={caption.header}
      countryText={caption.country}
      descriptionText={caption.description}
    ></Post>
  );
}

const PostWithoutDescTemplate = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Post
      headerText={caption.header}
      descriptionText={caption.description}
    ></Post>
  );
}

export const PostWithDescription = PostTemplate.bind({});
PostWithDescription.storyName = "Post block with description";

export const PostWithoutDescription = PostWithoutDescTemplate.bind({});
PostWithoutDescription.storyName = "Post block without description";