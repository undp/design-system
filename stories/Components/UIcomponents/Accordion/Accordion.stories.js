import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { renderToStaticMarkup } from "react-dom/server";
import { Accordion } from "./Accordion";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: "Section Header",
        country: "Algeria",
        description:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: "Заголовок розділу",
        country: "Україна",
        description:
          "ПРООН працює приблизно в 170 країнах і територіях, допомагаючи долати бідність, зменшити нерівність та дискримінацію, а також зміцнити стійкість, щоб країни могли підтримувати досягнутий прогрес. Як агентство ООН із розвитку, ПРООН відіграє важливу роль, допомагаючи країнам досягати Цілей сталого розвитку.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: "مقطع الرأس",
        country: "الجزائر",
        description:
          'يشير النص الوهمي إلى أجزاء المحتوى المستخدمة لملء نموذج موقع الويب. يساعد هذا النص مصممي الويب على تصور أفضل لكيفية ظهور موقع الويب كمنتج نهائي. من المهم أن نفهم أن النص الوهمي ليس له معنى على الإطلاق. والغرض الوحيد منه هو ملء الفراغات بمحتوى "يشبه الكلمات" ، دون القيام بأي انتهاك لحقوق النشر.',
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: "အပိုင်းခေါင်းစီး",
        country: "အယ်လ်ဂျီးရီးယား",
        description:
          "Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။ ဤစာသားသည် ၀ က်ဘ်ဒီဇိုင်နာများအနေဖြင့် ၀ က်ဘ်ဆိုက်သည်အချောထည်ထုတ်ကုန်တစ်ခုအဖြစ်မည်သို့ပုံဖော်ရန်စိတ်ကူးကောင်းမြင်နိုင်စေသည်။ dummy စာသားသည်မည်သည့်အဓိပ္ပါယ်မှမရှိကြောင်းနားလည်ရန်အရေးကြီးသည်။ ၎င်း၏တစ်ခုတည်းသောရည်ရွယ်ချက်မှာမူပိုင်ခွင့်ချိုးဖောက်မှုများကိုမပြုလုပ်ဘဲ“ စကားလုံးကဲ့သို့” အကြောင်းအရာဖြင့်ဖြည့်ရန်ဖြစ်သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: "セクションヘッダー",
        country: "アルジェリア",
        description:
          "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。ダミーテキストには何の意味もないことを理解することが重要です。その唯一の目的は、著作権を侵害することなく、「単語のような」コンテンツで空白を埋めることです。",
      };
      return japaneseText;
    default:
      return {
        header: "Section Header",
        country: "Algeria",
        description:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
      };
  }
};

export default {
  title: "Components/UI components/Accordion",
  component: Accordion,
  argTypes: {
    headerText: {
      control: {
        type: "text",
      },
    },
    descriptionText: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Accordion</h1>
          <p>
            An accordion is a vertically stacked list of titles that reveal or
            hide additional content when selected.
          </p>
          <h3>Overview</h3>
          <p>
            The accordion component delivers large amounts of content in a small
            space through progressive disclosure. The accordion title gives the
            user a high-level overview of the content allowing the user to
            decide which sections to read.
          </p>
          <p>
            Accordions make information processing and discovering more
            effective. However, it does obscure content from users and it is
            important to account for a user not noticing or reading all content
            placed within an accordion section. If it is necessary for a user to
            read all of the content then don’t use an accordion as it adds the
            burden of an extra click; instead use a full scrolling page with
            normal headers.
          </p>
          <h3>When to use:</h3>
          <ul>
            <li>To organize related information.</li>
            <li>
              To shorten pages and reduce scrolling when content is not crucial
              to read in full.
            </li>
            <li>
              When space is at a premium and long content cannot be displayed
              all at once, like on a mobile interface or in a side panel.
            </li>
            <li>If you have only a small space to display a lot of content.</li>
          </ul>
          <h3>Formatting</h3>
          <h4>Default</h4>
          <Canvas>
            <Story name="Accordion">
              {(args, { globals: { locale } }) => {
                const caption = getCaptionForLocale(locale);
                return (
                  <Accordion
                    headerText={caption.header}
                    descriptionText={caption.description}
                  ></Accordion>
                );
              }}
            </Story>
          </Canvas>
          <h4>CSS</h4>
          <p>Add following CSS in your project</p>
          <ul>
            <li>
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">
                Base layouting CSS
              </a>
            </li>
            <li>
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/accordion.min.css">
                Copy and add this component CSS in your project
              </a>
            </li>
          </ul>
          <h4>JS</h4>
          <p>
            Use this JS file in your project{" "}
            <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/accordion.min.js">
              accordion.min.js
            </a>{" "}
            and then use following code:
          </p>
          <h4>Initialization</h4>
          <p>There are two ways to initialize the accordion component:</p>
          
          <h5>Method 1: Automatic Initialization (Recommended)</h5>
          <p>
            Add the <code>data-undpds-component="accordion"</code> attribute to the accordion element and include the component initializer script:
          </p>
          <pre>
            <code>
              &lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/init.js"&gt;&lt;/script&gt;
            </code>
          </pre>
          
          <h5>Method 2: Manual Initialization</h5>
          <p>Call the <code>accordion()</code> function in your JavaScript:</p>
          <pre>
            <code>
              $(document).ready(function() &#123; <br />
              &emsp;&emsp; accordion(); <br />
              &#125;);
            </code>
          </pre>
          <h3>Content</h3>
          <p>
            The accordion is made up of a title and body copy. Accordion titles
            should use a short amount of text that describes the content of the
            body copy.
          </p>
          <p>
            The contents within an accordion section may utilize multiple
            paragraphs and subsections as needed.
          </p>
          <h3>Behaviors</h3>
          <h4>States</h4>
          <p>
            An accordion panel has two states: collapsed and expanded. The
            chevron icon at the end of the accordion title should indicate the
            accordion panel’s state. By default, all panels of an accordion
            should begin at the collapsed state. The following behavior
            modifiers are available:
          </p>
          <ul>
            <li>
              <strong>Multi-expand</strong>. By default only one panel of the
              accordion can be open at a time. It can be changed by assigning
              data-multi-expand=”true” attribute to the accordion’s outermost
              element.
              <code>
                &lt;div class="accordion" data-multi-expand="true"&gt;
              </code>
            </li>
            {/* <li><strong>Disabled</strong>: temporary removing expanding capability of the specific panel while preserving overall look and feel</li> */}
            <li>
              <strong>Active</strong>: while default state of all panels is
              “close” we can enable certain panels by assigning class .is-active
              to it: <code>&lt;li class="is-active"&gt;</code>
            </li>
            <li>
              <strong>Mobile Only</strong>: To show the Accordion on mobile
              device only we have to pass the attribute to the parent div eg:{" "}
              <code>&lt;div class="accordion" data-accordion="mobile"&gt;</code>
            </li>
            <li>
              <strong>Multi-Expand Behavior on Page Load</strong>: If multiple
              sections have the <code>&lt;li class="is-active"&gt;</code> class
              on page load: <br />
              <strong>- When `multi-expand="true"`</strong> <br />
              1.All<code>&lt;li class="is-active"&gt;</code> sections remain
              open.
              <br />
              <strong>- When `multi-expand="false"`</strong>
              <br />
              1.Only the first<code>&lt;li class="is-active"&gt;</code> section
              remains open, and others are collapsed. <br />
              2.If<code>&lt;li class="is-active"&gt;</code> is set on multiple
              sections, the system will ignore additional .is-active instances.
            </li>
          </ul>
          <h4>Interactions</h4>
          <p>
            The entire accordion title and chevron is selectable. Users can
            click anywhere in the title area to expand or collapse the content,
            providing a large, easy to manipulate target.
          </p>
          <h4>Accordion and URLs</h4>
          <ul>
            <li>
              Optional <strong>deep linking</strong> - allow users to open a
              particular accordion panel at page load with hash-appended URL.
              Configurable by setting data-deep-link=”true”, disabled by default
            </li>
            <li>
              Browser history - modifying widget behavior for browser history
              modification, by default each click replaces current page’s URL,
              but by using data-update-history=”true” you can instruct browser
              to insert new entries on every click providing ability to track
              back the navigation history while clicking Back button.
            </li>
          </ul>
          <h3>Changelog</h3>
          <p>1.0 — Released component</p>
        </>
      ),
    },
  },
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Accordion
      headerText={caption.header}
      descriptionText={caption.description}
    ></Accordion>
  );
};

export const AccordionStory = Template.bind({});
AccordionStory.storyName = "Accordion";
AccordionStory.argTypes = {
  headerText: { table: { disable: true } },
  descriptionText: { table: { disable: true } },
};
