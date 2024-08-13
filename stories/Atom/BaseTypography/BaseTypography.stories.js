import { Canvas, Meta, Story, Source, Anchor } from "@storybook/addon-docs";

import { Heading } from "../Typography/Heading/Heading";
import { Abbreviation } from "./Abbr/Abbr";
import { Blockquote } from "./Blockquote/Blockquote";
import { Cite } from "./Cite/Cite";
import { Code } from "./Code/Code";
import { Hr } from "./Hr/Hr";
import { Mark } from "./Mark/Mark";
import { P } from "./Paragraph/Paragraph";
import { Quotation } from "./Quotation/Quotation";
import { Small } from "./Small/Small";
import { List } from "../Typography/Lists/Lists";
import { Descriptionlist } from "../Typography/Lists/Descriptionlist";
import { DetailsTag } from "../ReachElement/Details/Details";
import { Figcaption } from "../ReachElement/Figcaption/Figcaption";


export default {
    title: "Foundation/Typography/Base typography",
    parameters: {
    docs: {
      page: () => (
        <section>
        <h1>Base Typography</h1>
        <p>Basic elements which the design system has some styling listed here, you can use the elements as it is, without any specific CSS classes.</p>
        <Anchor storyId="foundation-typography-basetypography--abbreviation"></Anchor>
        <h3>Abbreviation</h3>
        <p>Abbreviation component defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".</p>
        <ul>
            <li>We can use the <code>abbr tag</code> in any component, to display as a tooltip when you hover over the element.</li>
        </ul>
        <p>Typographic scale when using abbreviation in text component:</p>

        <Canvas>
            <Story name="Abbreviation">
                {(args, { globals: { locale } }) => renderComponentForStory("Abbreviation", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--blockquote"></Anchor>
        <h3>Blockquote</h3>
        <p>The blockquote component is used to define a section that is quoted from another source.</p>
        <ul>
            <li>We can use the <code>blockquote tag</code> in any component to render the text found within the <code>blockquote tag</code>.</li>
        </ul>
        <p>Typographic scale when using blockquote in text component:</p>

        <Canvas>
            <Story name="Blockquote">
                {(args, { globals: { locale } }) => renderComponentForStory("Blockquote", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--cite"></Anchor>
        <h3>Cite</h3>
        <p>The Cite component defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).</p>
        <ul>
            <li>We can use <code>cite</code> in any component to render the text found within the <code>cite tag</code>.</li>
        </ul>
        <p>Typographic scale when using cite in text component:</p>

        <Canvas>
            <Story name="Cite">
                {(args, { globals: { locale } }) => renderComponentForStory("Cite", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--code"></Anchor>
        <h3>Code</h3>
        <p>The code component is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font.</p>
        <ul>
            <li>We can use the <code>code tag</code> in any component to render the text found within the <code>code tag</code> in monospace font.</li>
        </ul>
        <p>Typographic scale when using code in text component:</p>

        <Canvas>
            <Story name="Code">
                {(args, { globals: { locale } }) => renderComponentForStory("Code", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--description-list"></Anchor>
        <h3>Description List</h3>
        <p>A description list is a list of terms, with a description of each term.</p>
        <ul>
            <li>The <code>dl tag</code> defines the description list, the <code>dt tag</code> defines the term (name), and the <code>dd tag</code> describes each term.</li>
        </ul>

        <Canvas>
            <Story name="Description list">
                {(args, { globals: { locale } }) => renderComponentForStory("Description list", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--details"></Anchor>
        <h3>Details</h3>
        <p>The details tag creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the summary element.</p>

        <Canvas>
            <Story name="Details">
                {(args, { globals: { locale } }) => renderComponentForStory("Details", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--figcaption"></Anchor>
        <h3>Figcaption</h3>
        <p>The <code>figcaption</code> tag is used to caption the image. The <code>figcaption</code> tag is used with the <code>figure</code> tag.</p>

        <Canvas>
            <Story name="Figcaption">
                {(args, { globals: { locale } }) => renderComponentForStory("Figcaption", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--headings"></Anchor>
        <h3>Headings</h3>
        <p>We can use the <code>h1/h2/h3/h4/h5/h6 tags</code> in any component to display the headings. h1 for most important heading to h6 for least important heading.</p>
        <p>Typographic scale when using headings in text component:</p>

        <Canvas>
            <Story name="Headings">
                {(args, { globals: { locale } }) => renderComponentForStory("Headings", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--hr"></Anchor>
        <h3>Horizontal Rule</h3>
        <p>The <code>hr tag</code> defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.</p>
        <ul>
            <li>We can use the <code>hr tag</code> in any component to render a horizontal line.</li>
        </ul>
        <p>Typographic scale when using hr in text component:</p>

        <Canvas>
            <Story name="Hr">
                {(args, { globals: { locale } }) => renderComponentForStory("Hr", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--mark"></Anchor>
        <h3>Mark</h3>
        <p>The <code>mark tag</code> defines marked or highlighted text.</p>
        <ul>
            <li>We can use the <code>mark tag</code> in any component to render the text found within the <code>mark tag</code> in a highlighted style.</li>
        </ul>
        <p>Typographic scale when using mark in text component:</p>

        <Canvas>
            <Story name="Mark">
                {(args, { globals: { locale } }) => renderComponentForStory("Mark", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--ordered-list"></Anchor>
        <h3>Ordered List</h3>
        <p>The <code>ol tag</code> defines an ordered list. An ordered list can be numerical or alphabetical.</p>
        <ul>
            <li>We can use the <code>ol tag</code> in any component to render the text found within the <code>ol tag</code> in a numerical or alphabetical list.</li>
        </ul>

        <Canvas>
            <Story name="Ordered list">
                {(args, { globals: { locale } }) => renderComponentForStory("Ordered list", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--p"></Anchor>
        <h3>Paragraph</h3>
        <p>The <code>p tag</code> defines a paragraph.</p>
        <ul>
            <li>We can use the <code>p tag</code> in any component to render the text found within the <code>p tag</code> in a paragraph.</li>
        </ul>
        <p>Typographic scale when using paragraph in text component:</p>

        <Canvas>
            <Story name="P">
                {(args, { globals: { locale } }) => renderComponentForStory("P", locale)}
            </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--quotation"></Anchor>
        <h3>Quotation</h3>
        <p>The <code>q tag</code> defines a short quotation.</p>
        <ul>
            <li>We can use the <code>q tag</code> in any component to render the text found within the <code>q tag</code> in a short quotation.</li>
        </ul>
        <p>Typographic scale when using quotation in text component:</p>

        <Canvas>
            <Story name="Quotation">
                {(args, { globals: { locale } }) => renderComponentForStory("Quotation", locale)}
            </Story>
        </Canvas>

          <Anchor storyId="foundation-typography-basetypography--small"></Anchor>

          <h3>Small</h3>

          <p>The <code>small tag</code> defines smaller text.</p>
          <ul>
            <li>We can use the <code>small tag</code> in any component to render the text found within the <code>small tag</code> in a smaller font size.</li>
          </ul>
          <p>Typographic scale when using small in text component:</p>

                  <Canvas>
                    <Story name="Small">
                      {(args, { globals: { locale } }) => renderComponentForStory("Small", locale)}
                    </Story>
        </Canvas>

        <Anchor storyId="foundation-typography-basetypography--unordered-list"></Anchor>
            

            <h3>Unordered List</h3>

            <p>The <code>ul tag</code> defines an unordered list. An unordered list can be bulleted.</p>
            <ul>
              <li>We can use the <code>ul tag</code> in any component to render the text found within the <code>ul tag</code> in a bulleted list.</li>
            </ul>

            <Anchor storyId="foundation-typography-basetypography--unordered-list"></Anchor>


            <Canvas>
              <Story name="Unordered list">
                {(args, { globals: { locale } }) => renderComponentForStory("Unordered list", locale)}
              </Story>
            </Canvas>



            <h3>Usage</h3>

            <p>- Include **https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css** file in your HTML file, no other CSS and JS file required.</p>
          </section>
          )
        }
    }
  }

  const renderComponentForStory = (StoryName, locale) => {
    switch (StoryName) {
      case "Abbreviation":
        const captionAbbr = getCaptionForLocaleAbbr(locale);
        return <Abbreviation label={captionAbbr.detail1} />;
      case "Blockquote":
        const captionBlockquote = getCaptionForLocaleBlockquote(locale);
        return (
          <Blockquote
            text={captionBlockquote.detail}
            citeText={captionBlockquote.citeText}
          />
        );
      case "Cite":
        const captionCite = getCaptionForLocaleCite(locale);
        return <Cite text={captionCite.detail} />;
      case "Code":
        const captionCode = getCaptionForLocaleCode(locale);
        return (
          <p>
            {captionCode.detail1} <Code label={captionCode.detail2}></Code> {
              captionCode.detail3
            } <Code label={captionCode.detail4}></Code> {captionCode.detail5}
          </p>
        );
      case "Description list":
        const captionList = getCaptionForLocaleList(locale);
        return <Descriptionlist data={captionList} />;
      case "Details":
        const captionDetails = getLocaleForDetails(locale);
        return (
          <DetailsTag
            summary={captionDetails.summary}
            details={captionDetails.details}
          />
        );
      case "Figcaption":
        const captionFigcaption = getLocaleForFigcaption(locale);
        return <Figcaption details={captionFigcaption.details} />;
      case "Headings":
        const captionHeading = getCaptionForLocaleHeading(locale);
        return (
          <>
            <Heading type="1" label={captionHeading.detail1}></Heading>
            <Heading type="2" label={captionHeading.detail2}></Heading>
            <Heading type="3" label={captionHeading.detail3}></Heading>
            <Heading type="4" label={captionHeading.detail4}></Heading>
            <Heading type="5" label={captionHeading.detail5}></Heading>
            <Heading type="6" label={captionHeading.detail6}></Heading>
          </>
        );
      case "Hr":
        const captionHr = getCaptionForLocaleHr(locale);
        return <Hr detailsText={captionHr.detail} />;
      case "Mark":
        const captionMark = getCaptionForLocaleMark(locale);
        return <Mark label={captionMark.detail} />;
      case "Ordered list":
        const captionOrderedList = getCaptionForLocaleList(locale);
        return <List data={captionOrderedList} type="ol" />;
      case "P":
        const captionParagraph = getCaptionForLocaleParagraph(locale);
        return <P label={captionParagraph.detail} />;
      case "Quotation":
        const captionQuotation = getCaptionForLocaleQuotation(locale);
        return <Quotation label={captionQuotation.detail} />;
      case "Small":
        const captionSmall = getCaptionForLocaleSmall(locale);
        return <Small label={captionSmall.detail} />;
      case "Unordered list":
        const captionUnorderedList = getCaptionForLocaleList(locale);
        return <List data={captionUnorderedList} type="ul" />;
      default:
        return null;
    }
  };

  const TemplateHeading  = (args) => <Heading {...args} />;
  const TemplateAbbreviation  = (args) => <Abbreviation {...args} />;
  const TemplateBlockquote  = (args) => <Blockquote {...args} />;
  const TemplateCite  = (args) => <Cite {...args} />;
  const TemplateCode  = (args) => <Code {...args} />;
  const TemplateHr  = (args) => <Hr {...args} />;
  const TemplateMark  = (args) => <Mark {...args} />;
  const TemplateP  = (args) => <P {...args} />;
  const TemplateQuotation  = (args) => <Quotation {...args} />;
  const TemplateSmall  = (args) => <Small {...args} />;
  const TemplateList  = (args) => <List {...args} />;
  const TemplateDescriptionlist  = (args) => <Descriptionlist {...args} />;
  const TemplateDetailsTag  = (args) => <DetailsTag {...args} />;
  const TemplateFigcaption  = (args) => <Figcaption {...args} />;
  
  export const AbbreviationComponent = TemplateAbbreviation.bind({});  
  export const HeadingComponent = TemplateHeading.bind({});
  export const BlockquoteComponent = TemplateBlockquote.bind({});
  export const CiteComponent = TemplateCite.bind({});
  export const CodeComponent = TemplateCode.bind({});
  export const HrComponent = TemplateHr.bind({});
  export const MarkComponent = TemplateMark.bind({});
  export const PComponent = TemplateP.bind({});
  export const QuotationComponent = TemplateQuotation.bind({});
  export const SmallComponent = TemplateSmall.bind({});
  export const ListComponent = TemplateList.bind({});
  export const DescriptionlistComponent = TemplateDescriptionlist.bind({});
  export const DetailsTagComponent = TemplateDetailsTag.bind({});
  export const FigcaptionComponent = TemplateFigcaption.bind({});



  const getCaptionForLocaleHeading = (locale) => {
    switch (locale) {
      case "english":
        const engText = {
          detail1: "Headline 1",
          detail2: "Headline 2",
          detail3: "Headline 3",
          detail4: "Headline 4",
          detail5: "Headline 5",
          detail6: "Headline 6",
        };
        return engText;
      case "arabic":
        const arabicText = {
          detail1: "العنوان 1.",
          detail2: "العنوان 2",
          detail3: "العنوان 3",
          detail4: "العنوان 4",
          detail5: "العنوان 5",
          detail6: "العنوان 6",
        };
        return arabicText;
      case "burmese":
        const burmeseText = {
          detail1: "ခခေါင်းစီး ၁",
          detail2: "ခေါင်းစဉ် ၂",
          detail3: "ခေါင်းစဉ် ၃",
          detail4: "ခေါင်းစဉ် ၄",
          detail5: "ခေါင်းစဉ် ၅",
          detail6: "ခေါင်းစီး ၆",
        };
        return burmeseText;
      case "japanese":
        const japaneseText = {
          detail1: "見出し1",
          detail2: "見出し2",
          detail3: "見出し3",
          detail4: "見出し4",
          detail5: "見出し5",
          detail6: "見出し6",
        };
        return japaneseText;
      case "ukrainian":
        const ukrainianText = {
          detail1: "Заголовок 1",
          detail2: "Заголовок 2",
          detail3: "Заголовок 3",
          detail4: "Заголовок 4",
          detail5: "Заголовок 5",
          detail6: "Заголовок 6",
        };
        return ukrainianText;
      default:
        return {
          detail1: "Headline 1",
          detail2: "Headline 2",
          detail3: "Headline 3",
          detail4: "Headline 4",
          detail5: "Headline 5",
          detail6: "Headline 6",
        };
    }
  };



const getCaptionForLocaleAbbr = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail1: "HyperText Markup Language",
        detail2: "Cascading Style Sheets",
        text1: "You can use",
        text2: "to style your",
      };
      return engText;
    case "ukrainian":
      const ukrainianText = {
        detail1: "Мова розмітки гіпертексту",
        detail2: "Каскадні таблиці стилів",
        text1: "Ви можете використовувати",
        text2: "стилізувати свій",
      };
      return ukrainianText;
    case "arabic":
      const arabicText = {
        detail1: "لغة ترميز النصوص التشعبية",
        detail2: "اوراق النمط المتعاقب",
        text1: "يمكنك استخدام",
        text2: "لأسلوبك",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail1: "hyperText အမှတ်အသားဘာသာစကား",
        detail2: "Cascading ပုံစံစာရွက်များ",
        text1: "သင်သုံးနိုင်သည်",
        text2: "မင်းရဲ့စတိုင်လ်ကို",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail1: "ハイパーテキストマークアップ言語",
        detail2: "カスケードスタイルシート",
        text1: "あなたが使用することができます",
        text2: "あなたのスタイルを整える",
      };
      return japaneseText;
    default:
      return {
        detail1: "HyperText Markup Language",
        detail2: "Cascading Style Sheets",
        text1: "You can use",
        text2: "to style your",
      };
  }
};



const getCaptionForLocaleBlockquote = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail:
          "“Blockquote lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.”",
        citeText: "-Firstname Lastname",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        detail:
          "“Мудра людина залишається на задньому плані й саме завдяки цьому опиняється попереду інших”",
        citeText: "-Лао Цзи",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        detail:
          "“بلوككوت هو ألم الإنترنت نفسه. من هو وسادة الانتقام في العبارة”",
        citeText: "الاسم الاول الاسم الاخير-",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail:
          "“Blockquote သည်အင်တာနက်ကိုယ်တိုင်၏နာကျင်မှုဖြစ်သည်။ ကူးတို့ဆိပ်ရဲ့ ဒဏ်ပေးအုံး ဘယ်သူလဲ။”",
        citeText: "-နာမည် မျိုးနွယ်အမည်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail:
          "“ブロッククォートはインターネット自体の苦痛です。 フェリーの復讐に満ちたクッションは誰ですか”",
        citeText: "-名前苗字",
      };
      return japaneseText;
    default:
      return {
        detail:
          "“Blockquote lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.”",
        citeText: "-Firstname Lastname",
      };
  }
};


const getCaptionForLocaleCite = (locale) => {
  switch (locale) {
    case "english":
      const engText = { detail: "-Firstname Lastname" };
      return engText;
    case "ukrainian":
      const ukText = { detail: "-Лао Цзи" };
      return ukText;
    case "arabic":
      const arabicText = { detail: "الاسم الاول الاسم الاخير-" };
      return arabicText;
    case "burmese":
      const burmeseText = { detail: "-နာမည် မျိုးနွယ်အမည်" };
      return burmeseText;
    case "japanese":
      const japaneseText = { detail: "-名前苗字" };
      return japaneseText;
    default:
      return { detail: "-Firstname Lastname" };
  }
};


const getCaptionForLocaleCode = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail1: "The",
        detail2: "length()",
        detail3: "method on a",
        detail4: "String",
        detail5:
          "object contains the length of the string. It can also serve as a character counter.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        detail1: "Властивість",
        detail2: "length()",
        detail3: "об'єкта",
        detail4: "String",
        detail5:
          "містить довжину рядка у кодових одиницях UTF-16.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        detail1: "ال",
        detail2: "الطول()",
        detail3: "طريقة على",
        detail4: "",
        detail5:
          "يحتوي الكائن على طول السلسلة. يمكن أن يكون أيضًا بمثابة عداد أحرف.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail1: "ဟိ",
        detail2: "အရှည် ()",
        detail3: "a ပေါ်မှာနည်းလမ်း",
        detail4: "စာတန်း",
        detail5:
          "object တွင် string အရှည်ရှိသည်။ ၎င်းကိုဇာတ်ကောင်ကောင်တာတစ်ခုအဖြစ်လည်းဆောင်ရွက်နိုင်သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail1: "NS",
        detail2: "長さ（）",
        detail3: "上のメソッド",
        detail4: "弦",
        detail5:
          "オブジェクトには文字列の長さが含まれます。キャラクターカウンターとしても使用できます。",
      };
      return japaneseText;
    default:
      return {
        detail1: "The",
        detail2: "length()",
        detail3: "method on a",
        detail4: "String",
        detail5:
          "object contains the length of the string. It can also serve as a character counter.",
      };
  }
};


export const getLocaleForDetails = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        summary: "Epcot Center",
        details:
          "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        summary: "Київ",
        details:
          "столиця та найбільше місто України. Розташований у середній течії Дніпра, у північній Наддніпрянщині",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        summary: "مركز Epcot",
        details:
          "pcot هي حديقة ترفيهية في Walt Disney World Resort تضم معالم جذب مثيرة وأجنحة دولية وألعاب نارية حائزة على جوائز ومناسبات موسمية خاصة.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        summary: "Epcot စင်တာ",
        details:
          "pcot သည်စိတ်လှုပ်ရှားဖွယ်ဆွဲဆောင်မှုများ၊ နိုင်ငံတကာမဏ္ionsပ်များ၊ ဆုရမီးရှူးမီးပန်းများနှင့်ရာသီအလိုက်အထူးအစီအစဉ်များပါ ၀ င်သော Walt Disney World Resort တွင်အဓိကပန်းခြံဖြစ်သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        summary: "エプコットセンター",
        details:
          "pcotは、エキサイティングなアトラクション、国際的なパビリオン、受賞歴のある花火、季節の特別イベントを備えたウォルトディズニーワールドリゾートのテーマパークです。",
      };
      return japaneseText;
    default:
      return {
        summary: "Epcot Center",
        details:
          "Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.",
      };
  }
};

export const getLocaleForFigcaption = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        details:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. ",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        details:
          "Підпис до зображення. Завжди розміщується всередині елемента <figure>.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        details:
          "يشير النص الوهمي إلى أجزاء المحتوى المستخدمة لملء نموذج موقع الويب. يساعد هذا النص مصممي الويب على تصور أفضل لكيفية ظهور موقع الويب كمنتج نهائي.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        details:
          "Dummy စာသားသည် ၀ က်ဘ်ဆိုက်၏လှောင်ပြောင်မှုကိုဖြည့်ရန်အသုံးပြုသောအကြောင်းအရာအနည်းငယ်ကိုရည်ညွှန်းသည်။ ဤစာသားသည် ၀ က်ဘ်ဒီဇိုင်နာများအနေဖြင့် ၀ က်ဘ်ဆိုက်သည်အချောထည်ထုတ်ကုန်တစ်ခုအဖြစ်မည်သို့ပုံဖော်ရန်စိတ်ကူးကောင်းမြင်နိုင်စေသည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        details:
          "ダミーテキストとは、Webサイトのモックアップを埋めるために使用されるコンテンツの一部を指します。このテキストは、WebデザイナーがWebサイトが完成品としてどのように見えるかをよりよく想像するのに役立ちます。",
      };
      return japaneseText;
    default:
      return {
        details:
          "Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. ",
      };
  }
};

const getCaptionForLocaleHr = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        detail:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. Завдяки партнерству з національними, обласними та місцевими органами влади, громадянським суспільством і приватним сектором, ПРООН прагне підтримати Україну на шляху до подолання бідності, розвитку людського потенціалу, досягнення справедливих результатів, захисту довкілля і просування демократичного врядування.",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        detail:
          "فقرة كبيرة lorem ipsum dolor sit amet، consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio، vel viverra ipsum. Sed pharetra varius gentissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu Turpis quam. نولا فاسيليسي.-",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail:
          "ကြီးမားသောစာပိုဒ် lorem ipsum dolor sit amet, consectetur adipiscing elit ။ Pellentesque porttitor mauris quis pulvinar ultrices Quisque eget placerat odio, vel viverra ipsum ။ Sed pharetra varius dignissim ဖြစ်သည်။ Cras varius luctus est amet sollicitudin ထိုင်သည်။ Donec eget dui eget nulla luctus ultrices ။ Sed eu turpis quam ။ Nulla facilisi",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail:
          "大きな段落はインターネット自体の苦痛です。 Pellentesque porttitor mauris quis pulvinarultrices。誰もが本物、または漫画自体を嫌う必要があります。しかし、矢筒は資産です。悲しみは大変なことです。住宅の必要性が痛みを必要としないまで。しかし、どれほど素晴らしくて醜い。複雑なことは何もありません。",
      };
      return japaneseText;
    default:
      return {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
  }
};


const getCaptionForLocaleMark = (locale) => {
  switch (locale) {
    case "english":
      const engText = { detail: "Eos nulla molestiae" };
      return engText;
    case "ukrainian":
      return { detail: "Розвиток ніколи не спиняється. Не спиняємось і ми." };
    case "arabic":
      const arabicText = { detail: "لا إزعاج" };
      return arabicText;
    case "burmese":
      const burmeseText = { detail: "အဆင်မပြေတာမရှိဘူး" };
      return burmeseText;
    case "japanese":
      const japaneseText = { detail: "不快感なし" };
      return japaneseText;
    default:
      return { detail: "Eos nulla molestiae" };
  }
};

const getCaptionForLocaleParagraph = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
      return engText;
    case "ukrainian":
      return {detail: "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. Завдяки партнерству з національними, обласними та місцевими органами влади, громадянським суспільством і приватним сектором, ПРООН прагне підтримати Україну на шляху до подолання бідності, розвитку людського потенціалу, досягнення справедливих результатів, захисту довкілля і просування демократичного врядування."}
    case "arabic":
      const arabicText = {
        detail:
          "فقرة كبيرة lorem ipsum dolor sit amet، consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio، vel viverra ipsum. Sed pharetra varius gentissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu Turpis quam. نولا فاسيليسي.-",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail:
          "ကြီးမားသောစာပိုဒ် lorem ipsum dolor sit amet, consectetur adipiscing elit ။ Pellentesque porttitor mauris quis pulvinar ultrices Quisque eget placerat odio, vel viverra ipsum ။ Sed pharetra varius dignissim ဖြစ်သည်။ Cras varius luctus est amet sollicitudin ထိုင်သည်။ Donec eget dui eget nulla luctus ultrices ။ Sed eu turpis quam ။ Nulla facilisi",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail:
          "大きな段落はインターネット自体の苦痛です。 Pellentesque porttitor mauris quis pulvinarultrices。誰もが本物、または漫画自体を嫌う必要があります。しかし、矢筒は資産です。悲しみは大変なことです。住宅の必要性が痛みを必要としないまで。しかし、どれほど素晴らしくて醜い。複雑なことは何もありません。",
      };
      return japaneseText;
    default:
      return {
        detail:
          "Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Quisque eget placerat odio, vel viverra ipsum. Sed pharetra varius dignissim. Cras varius luctus est sit amet sollicitudin. Donec eget dui eget nulla luctus ultrices. Sed eu turpis quam. Nulla facilisi.",
      };
  }
};


const getCaptionForLocaleQuotation = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        detail:
          "Scientists are considering whether the Earth has entered an entirely new geological epoch: the Anthropocene, or the age of humans.",
      };
      return engText;
    case "ukrainian":
      return {detail: "Еней був парубок моторний I хлопець хоть куди козак, Удавсь на всеє зле проворний, Завзятіший од всіх бурлак."}
    case "arabic":
      const arabicText = {
        detail:
          "يفكر العلماء فيما إذا كانت الأرض قد دخلت حقبة جيولوجية جديدة تمامًا: الأنثروبوسين ، أو عصر البشر.",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail:
          "သိပ္ပံပညာရှင်များသည်ကမ္ဘာမြေသည်လုံးဝဘူမိဗေဒခေတ်ဖြစ်သည့် Anthropocene (သို့) လူသား၏အသက်",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail:
          "科学者たちは、地球がまったく新しい地質学的時代、人新世、または人間の時代に入ったかどうかを検討しています。",
      };
      return japaneseText;
    default:
      return {
        detail:
          "Scientists are considering whether the Earth has entered an entirely new geological epoch: the Anthropocene, or the age of humans.",
      };
  }
};



const getCaptionForLocaleSmall = (locale) => {
  switch (locale) {
    case "english":
      const engText = { detail: "Et occaecati eos nulla molestiae repellat." };
      return engText;
    case "ukrainian":
      return {detail: "Програма ПРООН із підвищення стійкості та відновлення"}
    case "arabic":
      const arabicText = {
        detail: "برنامج الأمم المتحدة الإنمائي في الدول العربية",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        detail: "Et occaecati eos nulla molestiae repellat ဖြစ်သည်။",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        detail: "そして盲目になると、彼は迷惑をかけずに彼らを撃退します。",
      };
      return japaneseText;
    default:
      return { detail: "Et occaecati eos nulla molestiae repellat." };
  }
};



const getCaptionForLocaleList = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      return [
          {
            label: "НАПРЯМ 1",
            text: "Можливості Уряду реагувати на кризові ситуації та вирішувати їх.",
          },
          {
            label: "НАПРЯМ 2",
            text: "Безперервне надання державних послуг.",
          },
          {
            label: "НАПРЯМ 3",
            text: "Аварійні роботи, що сприяють відновленню та відбудові.",
          },
      ];
    case "arabic":
      const arabicText = {
        data: [
          {
            label: "برنامج الأمم المتحدة الإنمائي",
            text: "برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.",
          },
          {
            label: "برنامج الأمم المتحدة الإنمائي",
            text: "برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.",
          },
          {
            label: "برنامج الأمم المتحدة الإنمائي",
            text: "برنامج الأمم المتحدة الإنمائي هو شبكة التنمية العالمية للأمم المتحدة. وهي تعزز التعاون التقني والاستثماري بين الدول وتدعو للتغيير وتربط البلدان بالمعرفة والخبرة والموارد لمساعدة الناس على بناء حياة أفضل لأنفسهم.",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            label: "ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်",
            text: "ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။",
          },
          {
            label: "ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်",
            text: "ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။",
          },
          {
            label: "ကုလသမဂ္ဂဖွံ့ဖြိုးရေးအစီအစဉ်",
            text: "ကုလသမဂ္ဂဖွံ့ဖြိုးမှုအစီအစဉ်သည်ကုလသမဂ္ဂ၏ကမ္ဘာလုံးဆိုင်ရာဖွံ့ဖြိုးရေးကွန်ယက်ဖြစ်သည်။ ၎င်းသည်နိုင်ငံများအကြားနည်းပညာနှင့်ရင်းနှီးမြှုပ်နှံမှုပူးပေါင်းဆောင်ရွက်မှုကိုအားပေးအားမြှောက် ပြု၍ ပြောင်းလဲမှုအတွက်ထောက်ခံသူများနှင့်နိုင်ငံများအားလူတို့အတွက်ပိုမိုကောင်းမွန်သောဘ ၀ ကိုတည်ဆောက်ရန်အကူအညီများ၊ အတွေ့အကြုံများနှင့်အရင်းအမြစ်များသို့ချိတ်ဆက်ပေးသည်။",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            label: "国連開発計画",
            text: "国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。",
          },
          {
            label: "国連開発計画",
            text: "国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。",
          },
          {
            label: "国連開発計画",
            text: "国連開発計画は、国連のグローバルな開発ネットワークです。 それは、国家間の技術的および投資協力を促進し、変化を提唱し、人々がより良い生活を築くのを助けるために、国家を知識、経験および資源に結び付けます。",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
          {
            label: "United Nations Development Programme",
            text: "The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.",
          },
        ],
      };
      return dummy.data;
  }
};

