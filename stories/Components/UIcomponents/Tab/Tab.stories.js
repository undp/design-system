import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { Tab } from "./Tab";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        tabdata: [
          {
            text: "tab 1",
            text_id: "tab-1",
            data: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
          {
            text: "tab 2",
            text_id: "tab-2",
            data: "This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
          {
            text: "tab 3",
            text_id: "tab-3",
            data: "It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
        ],
      };
      return engText.tabdata;
    case "ukrainian":
      const ukText = {
        tabdata: [
          {
            text: "НАПРЯМ 1",
            text_id: "tab-1",
            data: "Уряд України, працюючи з максимальною віддачею, стикається з безпрецедентними потребами, пов’язаними з подоланням наслідків війни.",
          },
          {
            text: "НАПРЯМ 2",
            text_id: "tab-2",
            data: "Доступ до життєво важливих документів та державних послуг став серйозною проблемою в регіонах, які найбільше постраждали від війни. Оскільки інфраструктура зруйнована, а тисячі державних службовців, як і мільйони людей, були змушені евакуюватися в безпечні місця, — надання основних адміністративних послуг стало складним завданням у той момент, коли люди найбільше їх потребують.",
          },
          {
            text: "НАПРЯМ 3",
            text_id: "tab-3",
            data: "Війна змусила мільйони людей покинути свої домівки. 14 мільйонів людей евакуювалися в безпечні місця, зокрема 7 мільйонів залишаються в Україні як вимушено переміщені особи. Крім того, величезних втрат зазнала інфраструктура, мільйони нерозірваних боєприпасів та уламків становлять величезну загрозу для безпеки та добробуту.",
          },
        ],
      };
      return ukText.tabdata;
    case "arabic":
      const arabicText = {
        tabdata: [
          {
            text: "علامة التبويب 1",
            text_id: "tab-1",
            data: 'شير النص الوهمي إلى أجزاء المحتوى المستخدمة لملء نموذج موقع الويب. يساعد هذا النص مصممي الويب على تصور أفضل لكيفية ظهور موقع الويب كمنتج نهائي. من المهم أن نفهم أن النص الوهمي ليس له معنى على الإطلاق. والغرض الوحيد منه هو ملء الفراغات بمحتوى "يشبه الكلمات" ، دون القيام بأي انتهاك لحقوق النشر.',
          },
          {
            text: "علامة التبويب 2",
            text_id: "tab-2",
            data: 'شير النص الوهمي إلى أجزاءيفية ظهور موقع الويب كمنتج نهائي. من المهم أن نفهم أن النص الوهمي ليس له معنى على الإطلاق. والغرض الوحيد منه هو ملء الفراغات بمحتوى "يشبه الكلمات" ، دون القيام بأي انتهاك لحقوق النشر.',
          },
          {
            text: "علامة التبويب 3",
            text_id: "tab-3",
            data: "شير النص الوهمي إلى أجزاءيفية ظهور موقع الويب كمنتج نهائي. من المهم أن نفهم أن النص الوهمي ليس له معنى على ، دون القيام بأي انتهاك لحقوق النشر.",
          },
        ],
      };
      return arabicText.tabdata;
    case "burmese":
      const burmeseText = {
        tabdata: [
          {
            text: "tab ၁",
            text_id: "tab-1",
            data: "Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။ ဤစာသားသည် ၀ က်ဘ်ဒီဇိုင်နာများအနေဖြင့် ၀ က်ဘ်ဆိုက်သည်အချောထည်ထုတ်ကုန်တစ်ခုအဖြစ်မည်သို့ပုံဖော်ရန်စိတ်ကူးကောင်းမြင်နိုင်စေသည်။ dummy စာသားသည်မည်သည့်အဓိပ္ပါယ်မှမရှိကြောင်းနားလည်ရန်အရေးကြီးသည်။ ၎င်း၏တစ်ခုတည်းသောရည်ရွယ်ချက်မှာမူပိုင်ခွင့်ချိုးဖောက်မှုများကိုမပြုလုပ်ဘဲ“ စကားလုံးကဲ့သို့” အကြောင်းအရာဖြင့်ဖြည့်ရန်ဖြစ်သည်။",
          },
          {
            text: "tab ၂",
            text_id: "tab-2",
            data: "က်ဘ်ဒီဇိုင်နာများအနေဖြင့် ၀ က်ဘ်ဆိုက်သည်အချောထည်ထုတ်ကုန်တစ်ခုအဖြစ်မည်သို့ပုံဖော်ရန်စိတ်ကူးကောင်းမြင်နိုင်စေသည်။ dummy စာသားသည်မည်သည့်အဓိပ္ပါယ်မှမရှိကြောင်းနားလည်ရန်အရေးကြီးသည်။ ၎င်း၏တစ်ခုတည်းသောရည်ရွယ်ချက်မှာမူပိုင်ခွင့်ချိုးဖောက်မှုများကိုမပြုလုပ်ဘဲ“ စကားလုံးကဲ့သို့” အကြောင်းအရာဖြင့်ဖြည့်ရန်ဖြစ်သည်။",
          },
          {
            text: "tab ၃",
            text_id: "tab-3",
            data: "dummy စာသားသည်မည်သည့်အဓိပ္ပါယ်မှမရှိကြောင်းနားလည်ရန်အရေးကြီးသည်။ ၎င်း၏တစ်ခုတည်းသောရည်ရွယ်ချက်မှာမူပိုင်ခွင့်ချိုးဖောက်မှုများကိုမပြုလုပ်ဘဲ“ စကားလုံးကဲ့သို့” အကြောင်းအရာဖြင့်ဖြည့်ရန်ဖြစ်သည်။",
          },
        ],
      };
      return burmeseText.tabdata;
    case "japanese":
      const japaneseText = {
        tabdata: [
          {
            text: "タブ1",
            text_id: "tab-1",
            data: "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。ダミーテキストには何の意味もないことを理解することが重要です。その唯一の目的は、著作権を侵害することなく、「単語のような」コンテンツで空白を埋めることです。",
          },
          {
            text: "タブ2",
            text_id: "tab-2",
            data: "このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。ダミーテキストには何の意味もないことを理解することが重要です。その唯一の目的は、著作権を侵害することなく、「単語のような」コンテンツで空白を埋めることです。",
          },
          {
            text: "タブ3",
            text_id: "tab-3",
            data: "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。ダミーテキストには何の意味もないことを理解することが重要です。",
          },
        ],
      };
      return japaneseText.tabdata;
    default:
      const dummy = {
        tabdata: [
          {
            text: "tab 1",
            text_id: "tab-1",
            data: "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
          {
            text: "tab 2",
            text_id: "tab-2",
            data: "This text helps web designers better envision how the website will look as a finished product. It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
          {
            text: "tab 3",
            text_id: "tab-3",
            data: "It is important to understand that dummy text has no meaning whatsoever. Its sole purpose is to fill out blank spaces with “word-like” content, without making any copyright infringements.",
          },
        ],
      };
      return dummy.tabdata;
  }
};

export default {
  title: "Components/UI components/Tabs",
  component: Tab,
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Tab</h1>

              <p>The Tabs are used to navigate through the same groups of content.</p>

              <h3>Overview</h3>

              <p>The Tab components are used to show the tabs to alternate between views within the same content, not to navigate to different areas. The active tab is highlighted with the red color.</p>

              <h4>When to use:</h4>

              <p>To navigate through the same groups of content.</p>

              <h3>Formatting</h3>

              <h4>Default</h4>

              <p>It consists of different tabs and a tab border.</p>

              <h4>Content</h4>

              <p>There are two types of tabs: single tab and tab bar with wrapping.</p>

              <ol>
                  <li><strong>Single tab:</strong></li>
                  <li><strong>Tab bar with wrapping:</strong></li>
              </ol>

              <h3>Behaviors</h3>

              <h4>States</h4>

              <p>There are three states: Default, Hover, and Selected.</p>

              <ol>
                  <li><strong>Default:</strong> It is the tab bar that is displayed when the page opens.</li>
                  <li><strong>Hover:</strong> It changes appearance once the mouse hovers over it.</li>
                  <li><strong>Selected:</strong> It is a selected state with a red horizontal line below it.</li>
              </ol>

              <Canvas>
                <Story name="Tabs">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return <Tab tabdata={caption}></Tab>;
                  }}
                </Story>
              </Canvas>

              <h3>Usage:</h3>

              <ul>
                  <li>Copy the HTML from the HTML tab (Canvas) into your HTML file.</li>
                  <li>Include Foundation’s core and tabs JavaScript from <a href="https://github.com/foundation/foundation-sites/tree/develop/dist/js/plugins">Foundation’s GitHub repository</a>.</li>
                  {/* <li>Initialize the tab function in document ready or window load by calling <code>tabs()</code> function.</li> */}
                  <li><strong>Optional:</strong> If you want to add left-right animation then add <code>data-viewport="true"</code> attribute to your HTML element and include <code>viewport.min.js</code>.</li>
                  <li>Add other resources in your HTML file given below.</li>
                  <li>Choose one of the following initialization methods:</li>
              </ul>
              
              <h4>Method 1: Automatic Initialization (Recommended)</h4>
              <ul>
                <li>Include the component initializer script:
                  <code>&lt;script src="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/init.min.js"&gt;&lt;/script&gt;</code>
                </li>
                <li>Add the required data attribute to your tabs element:
                  <code>data-undpds-component="tabs"</code>
                </li>
                <li>The tabs will initialize automatically when the page loads - no JavaScript calls required!</li>
              </ul>

              <h4>Method 2: Manual Initialization (Traditional)</h4>
              <ul>
                <li>Include <code>tabs.min.js</code> in your HTML.</li>
                <li>Call the initialization function directly in your JavaScript:
                  <code>tabs();</code>
                </li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/tab.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/tab.min.css</a></li>
              </ul>

              <h4>JS:</h4>
              <ul>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/tabs.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/tabs.min.js</a></li>
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
              </ul>

              <h3>Interactions</h3>

              <ul>
                  <li>Hover state applies to the entire tab.</li>
                  <li>By clicking on the tab, the particular tab opens.</li>
              </ul>

              

              

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return <Tab tabdata={caption}></Tab>;
}

export const TabStory = Template.bind({});
TabStory.storyName = "Tabs";
