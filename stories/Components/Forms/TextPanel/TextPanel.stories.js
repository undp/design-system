import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { FormTypes } from "./TextPanel";

export const getCaptionForLocale = (locale) => {
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

export const parameters = {
  title: 'Components/Forms/Text panel',
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
};

export const TextPanelComponent = () => (
  <>
    <Meta
      title="Components/Forms/Text panel"
      argTypes={{
        variant: {
          options: [
            "text panel and form",
            "form with photo",
            "wide form",
            "stacked form",
          ],
          control: { type: "radio" },
        },
      }}
      args={{
        variant: "text panel and form",
      }}
    />

    <h1>Text Panel</h1>

    <p>On the text panel, it shows all the forms structures.</p>

    <h2>Overview</h2>

    <p>Text panel is the page for form structue that shows that we can use the input fields with many ways.</p>

    <h3>When to use:</h3>

    <p>When the user needs to create a form.</p>

    <h2>Behaviors</h2>

    <h3>States</h3>

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
        parameters={{
          chromatic: { viewports: process.env.CHROMATIC_VIEWPORTS },
        }}
      >
        {(args, { globals: { locale } }) => {
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
            />
          );
        }}
      </Story>
    </Canvas>

    <h2>Usage</h2>

    <p>Copy the HTML from the HTML tab of canvas and include the css files mentioned below.</p>

    <h3>CSS and JS References</h3>

    <h4>CSS:</h4>

    <ul>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
      <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/text-panel.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/text-panel.min.css</a></li>
    </ul>

    <h4>JS:</h4>

    <p>NA</p>

    <h2>Changelog</h2>

    <p>1.0 — Released component</p>
  </>
);

export default {
  title: "Components/Forms/Text panel",
  parameters,
}