import { Meta, Story, Canvas, ArgTypes } from "@storybook/addon-docs";
import { FormTypes } from "./TextPanel";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      return {
        labelname: "Sign up for our newsletter",
        buttonname: "SUBMIT",
        firstname: "First Name",
        lastname: "Last Name",
        placeholdername: "Name",
        placeholderemail: "Email",
        errorLabel: "*Error: this field is required",
        heading: "Connect with UNDP",
        heading2: "Stay connected to our work.",
        para: "Enter your email address to get inspiring stories straight to your inbox.",
      };
    case "ukrainian":
      return {
        labelname: "Підпишіться на наші новини",
        buttonname: "НАДІСЛАТИ",
        firstname: "Ім'я",
        lastname: "Прізвище",
        placeholdername: "Ім'я",
        placeholderemail: "Електронна пошта",
        errorLabel: "*Помилка: це поле обов'язкове",
        heading: "Зв'яжіться з ПРООН",
        heading2: "Залишайтеся на зв'язку з нашою роботою.",
        para: "Введіть свою адресу електронної пошти, щоб наші історії надходили прямо до вашої поштової скриньки.",
      };
    case "arabic":
      return {
        labelname: "سجل للحصول على اخر اخبارنا",
        buttonname: "يقدم",
        placeholdername: "اسم",
        firstname: "الاسم الاول",
        lastname: "اسم العائلة",
        placeholderemail: "بريد الالكتروني",
        errorLabel: "* خطأ: هذا الحقل مطلوب",
        heading: "UNDP متصل مع",
        heading2: "ابق على اتصال بعملنا.",
        para: "أدخل عنوان بريدك الإلكتروني للحصول على قصص ملهمة مباشرة إلى صندوق الوارد الخاص بك.",
      };
    case "burmese":
      return {
        labelname: "ကျွန်ုပ်တို့၏သတင်းလွှာအတွက်စာရင်းပေးသွင်းပါ",
        buttonname: "တင်ပေးပါ",
        firstname: "နာမည်",
        lastname: "မျိုးနွယ်အမည်",
        placeholdername: "နာမည်",
        placeholderemail: "အီးမေးလ်",
        errorLabel: "*အမှား - ဤအကွက်လိုအပ်သည်",
        heading: "နှင့်ချိတ်ဆက်ပါ။ UNDP",
        heading2: "ကျွန်ုပ်တို့၏အလုပ်နှင့် ချိတ်ဆက်နေပါ။",
        para: "စိတ်လှုပ်ရှားဖွယ်ရာ ဇာတ်လမ်းများကို သင့်ဝင်စာပုံးသို့ တိုက်ရိုက်ရရှိနိုင်ရန် သင့်အီးမေးလ်လိပ်စာကို ထည့်သွင်းပါ။",
      };
    case "japanese":
      return {
        labelname: "ニュースレターに登録する",
        buttonname: "送信",
        firstname: "ファーストネーム",
        lastname: "苗字",
        placeholdername: "名前",
        placeholderemail: "Eメール",
        errorLabel: "*エラー：このフィールドは必須です",
        heading: "と接続する UNDP",
        heading2: "私たちの仕事とのつながりを保ちましょう。",
        para: "メールアドレスを入力して、感動的なストーリーを受信トレイに直接送信します。",
      };
    default:
      return {
        labelname: "Sign up for our newsletter",
        buttonname: "SUBMIT",
        firstname: "First Name",
        lastname: "Last Name",
        placeholdername: "Name",
        placeholderemail: "Email",
        errorLabel: "*Error: this field is required",
        heading: "Connect with UNDP",
        heading2: "Stay connected to our work.",
        para: "Enter your email address to get inspiring stories straight to your inbox.",
      };
  }
};

export default {
  title: "Components/Forms/Text panel",
  component: FormTypes,
  argTypes: {
    variant: {
      options: [
        "text panel and form",
        "form with photo",
        "wide form",
        "stacked form",
      ],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "text panel and form",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Text Panel</h1>
          <p>On the text panel, it shows all the forms structures.</p>

          <h3>Overview</h3>
          <p>The text panel is the page for form structure that shows how input fields can be used in various ways.</p>

          <h4>When to use:</h4>
          <ul>
            <li>When the user needs to create a form.</li>
          </ul>

          <h3>Behaviors</h3>

          <h4>States</h4>
          <p>The following behavior modifiers are available:</p>
          <ol>
            <li>Text panel and form</li>
            <li>Form with photo</li>
            <li>Wide form</li>
            <li>Stacked form</li>
          </ol>

          <Canvas>
            <Story
              name="Text panel"
            >
              {(args) => (
                <FormTypes
                  element="input"
                  typeemail="email"
                  typename="text"
                  typelname="text"
                  required="required"
                  mode="form-email"
                  errorText={caption.errorLabel}
                  label={caption.labelname}
                  button={caption.buttonname}
                  placeholder={caption.placeholdername}
                  placeholderemail={caption.placeholderemail}
                  placeholderfirst={caption.firstname}
                  placeholderlast={caption.lastname}
                  anchorTag={caption.heading}
                  anchorTag2={caption.heading2}
                  para={caption.para}
                  {...args}
                ></FormTypes>
              )}
            </Story>
          </Canvas>

          <h3>Usage</h3>
          <p>Copy the HTML from the HTML tab of the canvas and include the CSS files mentioned below.</p>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>
          <p>Add the base layout style from:</p>
          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/text-panel.min.css" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/text-panel.min.css</a></li>
          </ul>

          <h4>JS:</h4>
          <p>NA</p>

          <h3>Changelog</h3>
          <p>1.0 — Released component</p>
        </>
      )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <FormTypes
      element="input"
      typeemail="email"
      typename="text"
      typelname="text"
      required="required"
      mode="form-email"
      errorText={caption.errorLabel}
      label={caption.labelname}
      button={caption.buttonname}
      placeholder={caption.placeholdername}
      placeholderemail={caption.placeholderemail}
      placeholderfirst={caption.firstname}
      placeholderlast={caption.lastname}
      anchorTag={caption.heading}
      anchorTag2={caption.heading2}
      para={caption.para}
      {...args}
    ></FormTypes>
  );
}

export const TextPanelStory = Template.bind({});
TextPanelStory.storyName = 'Text panel';
