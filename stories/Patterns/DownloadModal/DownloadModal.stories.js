import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { DownloadModal } from "./DownloadModal";

const statsArray = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
        ],
        button: "DOWNLOAD",
        select: "Select language",
        modalbtn: "Modal",
        content: "",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        data: [
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2Mб)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
        ],
        button: "ЗАВАНТАЖИТИ",
        select: "Оберіть мову",
        modalbtn: "кнопка",
        content: "",
      };
      return ukText;
      case "arabic":
      const arabicText = {
        data: [
          {
            title: "عنوان المنشور طويل جدا - باستو",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "pasto",
          },
          {
            title: "عنوان المنشور طويل جدا - باستو",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "pasto",
          },
          {
            title: "عنوان المنشور طويل جدا - باستو",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "pasto",
          },
          {
            title: "عنوان المنشور طويل جدا - داري",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "dari",
          },
          {
            title: "عنوان المنشور طويل جدا - داري",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "dari",
          },
          {
            title: "عنوان المنشور طويل جدا - داري",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "dari",
          },
          {
            title: "عنوان المنشور طويل جدًا - إنجليزي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "en",
          },
          {
            title: "عنوان المنشور طويل جدًا - إنجليزي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "en",
          },
          {
            title: "عنوان المنشور طويل جدًا - إنجليزي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "en",
          },
          {
            title: "عنوان المنشور طويل جدا - ألباني",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "albanian",
          },
          {
            title: "عنوان المنشور طويل جدا - ألباني",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "albanian",
          },
          {
            title: "عنوان المنشور طويل جدا - ألباني",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "albanian",
          },
          {
            title: "عنوان المنشور طويل جدا - عربي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "arabic",
          },
          {
            title: "عنوان المنشور طويل جدا - عربي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "arabic",
          },
          {
            title: "عنوان المنشور طويل جدًا - برتغالي",
            subtitle: "PDF (1.2)ميجابايت",
            dataValue: "portuguese",
          },
          {
            title: "عنوان المنشور طويل جدًا - برتغالي",
            subtitle: "PDF (1.2) ميجابايت",
            dataValue: "portuguese",
          },
        ],
        button: "تحميل",
        select: "اختار اللغة",
        modalbtn: "مشروط",
        content: "",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        data: [
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ခေါက်ဆွဲ",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ခေါက်ဆွဲ",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ခေါက်ဆွဲ",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ဒါ",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ဒါ",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ဒါ",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အင်္ဂလိပ်",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အင်္ဂလိပ်",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အင်္ဂလိပ်",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အယ်လ်ဘေးနီးယန်း",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အယ်လ်ဘေးနီးယန်း",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အယ်လ်ဘေးနီးယန်း",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အာရဗီ",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - အာရဗီ",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ပေါ်တူဂီ",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
          {
            title: "စာအုပ်ခေါင်းစဉ်က တော်တော်ရှည်တယ်။ - ပေါ်တူဂီ",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
        ],
        button: "ဒေါင်းလုဒ်လုပ်ပါ။",
        select: "ဘာသာစကားကို ရွေးပါ။",
        modalbtn: "မော်ဒယ်",
        content: "",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        data: [
          {
            title: "出版物のタイトルはかなり長い - パスト",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "出版物のタイトルはかなり長い - パスト",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "出版物のタイトルはかなり長い - パスト",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "出版物のタイトルはかなり長い - ダリー語",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "出版物のタイトルはかなり長い - ダリー語",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "出版物のタイトルはかなり長い - ダリー語",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "出版物のタイトルはかなり長い - 英語",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "出版物のタイトルはかなり長い - 英語",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "出版物のタイトルはかなり長い - 英語",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "出版物のタイトルはかなり長い - アルバニア語",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "出版物のタイトルはかなり長い - アルバニア語",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "出版物のタイトルはかなり長い - アルバニア語",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "出版物のタイトルはかなり長い - アラビア語",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "出版物のタイトルはかなり長い - アラビア語",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "出版物のタイトルはかなり長い - -ポルトガル語",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
          {
            title: "出版物のタイトルはかなり長い - -ポルトガル語",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
        ],
        button: "ダウンロード",
        select: "言語を選択する",
        modalbtn: "モーダル",
        content: "",
      };
      return japaneseText;
    default:
      const dummy = {
        data: [
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Pasto",
            subtitle: "PDF (1.2MB)",
            dataValue: "pasto",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - Dari",
            subtitle: "PDF (1.2MB)",
            dataValue: "dari",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - English",
            subtitle: "PDF (1.2MB)",
            dataValue: "en",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Albanian",
            subtitle: "PDF (1.2MB)",
            dataValue: "albanian",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Arabic",
            subtitle: "PDF (1.2MB)",
            dataValue: "arabic",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
          {
            title: "Title of the publication quite long - Portuguese",
            subtitle: "PDF (1.2MB)",
            dataValue: "portuguese",
          },
        ],
        button: "DOWNLOAD",
        select: "Select language",
        modalbtn: "Modal",
        content: "",
      };
      return dummy;
  }
};

export default {
  title: "Patterns/Download modal",
  argTypes: {
    Image: {
      name: "Display image",
      options: ["True", "False"],
      control: { type: "inline-radio" },
    },
    Category: {
      name: "Category",
      options: ["Singlelanguage", "Multiplelanguages"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    Image: "True",
    Category: "Multiplelanguages",
  },
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Download Modal</h1>
              <p>The download modal is used to download the individual digital assets associated with the main page, optionally grouped by category.</p>

              <h3>Overview</h3>
              <p>This is a complex widget appearing in the modal window and representing a combination of Image (optional), Dropdown menu, and items list with corresponding checkboxes and Download button.</p>

              <h4>When to use:</h4>
              <p>To download assets, optionally grouped by category</p>

              <h3>Formatting</h3>

              <h4>Default</h4>
              <p>In this, the user will be given a list where they can select one or more assets to download.</p>

              <h3>Behaviors</h3>

              <h4>States</h4>
              <p>There are two states for the download modal: Default and Select</p>
              <ul>
                <li><strong>Default:</strong> In this state, the user will be given options to choose the language for downloading the document. When no checkboxes are checked, the download button is in a disabled state.</li>
                <li><strong>Select:</strong> In this state, the user will be given the dropdown to select one or more languages to download the document.</li>
              </ul>
              <p>The close button dismisses the entire modal window and resets filter states and checkboxes.</p>

              <Canvas>
                <Story name="Download modal">
                  {(args, { globals: { locale, accent } }) => {
                    const caption = statsArray(locale);
                    return (
                      <DownloadModal
                        data={caption.data}
                        button={caption.button}
                        select={caption.select}
                        id="downloadModal"
                        modalbtn={caption.modalbtn}
                        content={caption.content}
                        {...args}
                      ></DownloadModal>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>
              <ul>
                <li>Choose the image either true or false and Category either Single or Multiple Languages from the control tab on canvas.</li>
                <li>Grab the HTML from the HTML tab in the canvas and include CSS and JS files listed below.</li>
                <li>Make sure to add <code>data-toggle='modal'</code> and <code>data-target-modal='&lt;your-modal-id&gt;'</code> in your button or link which will open the modal box.</li>
                <li>If you want select option then include <code>select.min.js</code> and initialize select by calling <code>select();</code></li>
                <li>If you want the add modal on click then include <code>modal.min.js</code> and initialize modal();</li>
                <li>If you want the filter select on click then include <code>downloadmodal.min.js</code> and initialize <code>selectFilter();</code> and <code>checkbox('.form-check input', '.download-footer .button-primary');</code> on load.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS</h4>
              <p>Add the base layout style from:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/buttons.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/publication-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/publication-card.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/modal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/modal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/custom-select.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/checkbox.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/download-modal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/download-modal.min.css</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/download-row.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/download-row.min.css</a></li>
              </ul>

              <h4>JS</h4>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/modal.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/modal.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/select.min.js</a></li>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/download-modal.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/download-modal.min.js</a></li>
              </ul>

              <h3>Interactions</h3>
              <p>There will be a checkbox where the user can click on it to select the asset and then click on the download button to download the document.</p>

              <h3>Changelog</h3>
              <p>1.0 — Released component</p>

            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const caption = statsArray(locale);
  return (
    <DownloadModal
      data={caption.data}
      button={caption.button}
      select={caption.select}
      id="downloadModal"
      modalbtn={caption.modalbtn}
      content={caption.content}
      {...args}
    ></DownloadModal>
  );
}

export const DownloadModalStory = Template.bind({});
DownloadModalStory.storyName = "Download Modal";
