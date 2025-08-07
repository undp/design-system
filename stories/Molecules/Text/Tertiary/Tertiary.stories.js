import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { Tertiary } from "./Tertiary";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: "Location",
        country: "Algeria",
        description:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: "Стажування",
        country: "Київ",
        description:
          "ПРООН в Україні пропонує студентам останніх курсів унікальну можливість отримати досвід роботи в ПРООН. Програма стажування допоможе отримати нові знання та зрозуміти цілі та принципи роботи ПРООН. До стажування заохочуються студенти, які спеціалізуються на вивченні процесів розвитку та мають досвід у сферах демократичного врядування, розбудови миру та відновлення та сталого розвитку.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: "موقع",
        country: "الجزائر",
        description:
          'يشير النص الوهمي إلى أجزاء المحتوى المستخدمة لملء نموذج موقع الويب. يساعد هذا النص مصممي الويب على تصور أفضل لكيفية ظهور موقع الويب كمنتج نهائي. من المهم أن نفهم أن النص الوهمي ليس له معنى على الإطلاق. والغرض الوحيد منه هو ملء الفراغات بمحتوى "يشبه الكلمات" ، دون القيام بأي انتهاك لحقوق النشر.',
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: "တည်နေရာ",
        country: "အယ်လ်ဂျီးရီးယား",
        description:
          "Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။ ဤစာသားသည် ၀ က်ဘ်ဒီဇိုင်နာများအနေဖြင့် ၀ က်ဘ်ဆိုက်သည်အချောထည်ထုတ်ကုန်တစ်ခုအဖြစ်မည်သို့ပုံဖော်ရန်စိတ်ကူးကောင်းမြင်နိုင်စေသည်။ dummy စာသားသည်မည်သည့်အဓိပ္ပါယ်မှမရှိကြောင်းနားလည်ရန်အရေးကြီးသည်။ ၎င်း၏တစ်ခုတည်းသောရည်ရွယ်ချက်မှာမူပိုင်ခွင့်ချိုးဖောက်မှုများကိုမပြုလုပ်ဘဲ“ စကားလုံးကဲ့သို့” အကြောင်းအရာဖြင့်ဖြည့်ရန်ဖြစ်သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: "位置",
        country: "アルジェリア",
        description:
          "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。ダミーテキストには何の意味もないことを理解することが重要です。その唯一の目的は、著作権を侵害することなく、「単語のような」コンテンツで空白を埋めることです。",
      };
      return japaneseText;
    default:
      return {
        header: "Location",
        country: "Algeria",
        description:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
      };
  }
};

export default {
  title: "Components/UI components/Text/Tertiary block",
  component: Tertiary,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Tertiary Block</h1>

              <p>The Tertiary Block defines a section of information data with some items - location, country, and description. <code>H2</code>, <code>H4</code>, and <code>P</code> atom tags are used for creating this section.</p>

              <Canvas>
                <Story name="Tertiary block">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <Tertiary
                        headerText={caption.header}
                        countryText={caption.country}
                        descriptionText={caption.description}
                      ></Tertiary>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/teritiary.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/teritiary.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <p>NA</p>

              

              

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Tertiary
      headerText={caption.header}
      countryText={caption.country}
      descriptionText={caption.description}
    ></Tertiary>
  );
}

export const TertiaryBlockStory = Template.bind({});
TertiaryBlockStory.storyName = "Tertiary block";