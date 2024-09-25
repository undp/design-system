import React from 'react';
import { Canvas, Meta, Story } from '@storybook/addon-docs';
import { BioCard } from './BioCard';
import img from '../../../../assets/images/bio.jpg';
import img2 from '../../../../assets/images/modal.png';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        name: "Firstname Lastname",
        descriptionText:
          "Director of UNDP’s Representation Office in Brussels, UN Secretary-General’s Representative",
        descriptionText2:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        btnlabel: "READ MORE",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        name: "Ім'я прізвище",
        descriptionText:
          "Директор Представництва ПРООН в Брюсселі, Представник Генерального секретаря ООН",
        descriptionText2:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        btnlabel: "ЧИТАТИ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        name: "الاسم الاول الاسم الاخير",
        descriptionText:
          "مدير مكتب تمثيل برنامج الأمم المتحدة الإنمائي في بروكسل ، ممثل الأمين العام للأمم المتحدة",
        descriptionText2:
          'خلافًا للاعتقاد الشائع ، فإن Lorem Ipsum ليس مجرد نص عشوائي. لها جذور في قطعة من الأدب اللاتيني الكلاسيكي من 45 قبل الميلاد ، مما يجعلها أكثر من 2000 عام. قام ريتشارد مكلينتوك ، أستاذ اللغة اللاتينية في كلية هامبدن سيدني في فيرجينيا ، بالبحث عن واحدة من أكثر الكلمات اللاتينية غموضًا ، consectetur ، من مقطع لوريم إيبسوم ، وتصفح اقتباسات الكلمة في الأدب الكلاسيكي ، اكتشف المصدر الذي لا شك فيه. يأتي Lorem Ipsum من الأقسام 1.10.32 و 1.10.33 من "de Finibus Bonorum et Malorum" (أقصى الخير والشر) بقلم شيشرون ، الذي كتبه عام 45 قبل الميلاد. هذا الكتاب عبارة عن أطروحة حول نظرية الأخلاق ، وقد حظيت بشعبية كبيرة خلال عصر النهضة. السطر الأول من Lorem Ipsum ، "Lorem ipsum dolor sit amet .." ، يأتي من سطر في القسم 1.10.32.',
        btnlabel: "اقرأ أكثر",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        name: "နံမည် နောက်ဆုံးအမည်",
        descriptionText:
          "ဘရပ်ဆဲလ်မြို့ရှိ UNDP ၏ ကိုယ်စားလှယ်ရုံး ညွှန်ကြားရေးမှူး၊ ကုလသမဂ္ဂ အထွေထွေ အတွင်းရေးမှူးချုပ်၏ ကိုယ်စားလှယ်၊",
        descriptionText2:
          'လူကြိုက်များသောယုံကြည်ချက်နှင့်ဆန့်ကျင်ဘက်ဖြစ်သော Lorem Ipsum သည် ရိုးရိုးကျပန်းစာသားမဟုတ်ပါ။ ၎င်းသည် ဘီစီ ၄၅ မှ ဘီစီ ၄၅ မှ ဂန္ထဝင်လက်တင်စာပေတွင် အမြစ်များပါရှိပြီး ၎င်းသည် နှစ်ပေါင်း ၂၀၀၀ ကျော်သက်တမ်းရှိပြီဖြစ်သည်။ ဗာဂျီးနီးယားရှိ Hampden-Sydney ကောလိပ်မှ လက်တင်ပါမောက္ခ Richard McClintock သည် ပိုမိုရှင်းလင်းသော လက်တင်စကားလုံးများ၊ consectetur၊ Lorem Ipsum ကျမ်းပိုဒ်မှ စကားလုံးများကို ဂန္တဝင်စာပေများတွင် ကိုးကားကြည့်ရာ သံသယဖြစ်ဖွယ်အရင်းအမြစ်ကို ရှာဖွေတွေ့ရှိခဲ့သည်။ Lorem Ipsum သည် 45 BC တွင်ရေးသားခဲ့သော Cicero မှ "de Finibus Bonorum et Malorum" (De Finibus Bonorum et Malorum) ၏ အပိုင်း 1.10.32 နှင့် 1.10.33 တို့မှ ဆင်းသက်လာသည်။ ဤစာအုပ်သည် ကျင့်ဝတ်ဆိုင်ရာ သီအိုရီနှင့် စပ်လျဉ်းသည့် တက်ကျမ်းဖြစ်ပြီး လက်ရာမြောက်သည့် ခေတ်ကာလတွင် အလွန်ရေပန်းစားသည်။ Lorem Ipsum ၏ ပထမစာကြောင်းဖြစ်သော "Lorem ipsum dolor sit amet.." သည် အပိုင်း 1.10.32 ရှိ စာကြောင်းမှ ဆင်းသက်လာသည်။',
        btnlabel: "ပိုပြီးဖတ်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        name: "名前苗字",
        descriptionText:
          "ブリュッセルにあるUNDPの代表事務所の所長、国連事務総長の代表",
        descriptionText2:
          "一般に信じられていることとは異なり、LoremIpsumは単なるランダムなテキストではありません。紀元前45年の古典ラテン文学にルーツがあり、2000年以上の歴史があります。バージニア州のハムデンシドニー大学のラテン語教授であるリチャードマクリントックは、Lorem Ipsumの一節から、よりあいまいなラテン語の1つであるconsecteturを調べ、古典文学の単語の引用を調べて、疑いの余地のない情報源を発見しました。 Lorem Ipsumは、紀元前45年に書かれた、Ciceroによる「deFinibus Bonorum et Malorum」（善と悪の極限）のセクション1.10.32と1.10.33に由来します。この本は、ルネサンス期に非常に人気のあった倫理理論に関する論文です。 LoremIpsumの最初の行「Loremipsumdolor sit amet ..」は、セクション1.10.32の行から来ています。",
        btnlabel: "続きを読む",
      };
      return japaneseText;
    default:
      return {
        name: "Firstname Lastname",
        descriptionText:
          "Director of UNDP’s Representation Office in Brussels, UN Secretary-General’s Representative",
        descriptionText2:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        btnlabel: "READ MORE",
      };
  }
};

export default {
  title: "Components/UI components/Cards/Bio card",
  argTypes: {
    size: {
      name: "Size variant",
      options: ["Large", "Medium"],
      control: { type: "inline-radio" },
    },
    accent: {
      name: "Hover accent color",
      options: ["global", "yellow", "red", "green", "blue"],
      control: { type: "inline-radio" },
    },
  },
  args: {
    size: "Medium",
    accent: "global",
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Bio Content Card</h1>

          <p>A bio card is a profile summary of an author/leader along with their profile picture.</p>

          <h3>Overview</h3>

          <p>A bio card showcases a contributor’s name, title, photo, and a summary of their background and work. It also contains a CTA to open more information in a lightbox modal.</p>

          <p>A bio card is usually displayed with a story or article that the user has contributed to. It is an entry point to a more detailed description of the contributor when clicked on.</p>

          <h4>When to use:</h4>

          <p>To give a brief introduction of the author/contributor of the article or story and act as an entry point to more information in a lightbox modal.</p>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>The bio card consists of a user’s first and last names, title, a summary of their background/work, a profile picture, and a CTA that opens up a lightbox modal highlighting salient information about the user.</p>

          <h3>Content</h3>

          <p>The bio card requires a profile image, first and last name, title, profile summary, and a CTA that opens the lightbox modal with more information.</p>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>The bio card has a default and hover state. On hover, an accent color overlay is displayed over the profile photo.</p>

          <Canvas>
            <Story name="BioCard">
              {(args) => (
                <BioCard
                contenttile={caption.title}
                contentname={caption.name}
                descriptionText={caption.descriptionText}
                descriptionText2={caption.descriptionText2}
                button={caption.btnlabel}
                alt={"feature card"}
                image={img}
                image2={img2}
                {...args}
              ></BioCard>
              )}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>Choose the size either large or medium from the control tab on canvas.</li>
            <li>Copy the HTML from the HTML tab in the canvas and include the CSS and JS files listed below.</li>
            <li>If you want left-right animation, add <code>data-viewport=”true”</code> attribute to your HTML element and include <code>viewport.min.js</code> file.</li>
            <li>If you want to add a modal on click, include <code>modal.min.js</code> and initialize <code>modal();</code> on load.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/bio-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/bio-card.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/modal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/modal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/cta-link.min.css</a></li>
          </ul>

          <h4>JS:</h4>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/modal.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/modal.min.js</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/js/viewport.min.js</a></li>
          </ul>

          <h3>Interactions</h3>

          <ul>
            <li>The hover state is applied to the profile image only.</li>
            <li>Clicking the bio card opens the information in a lightbox modal.</li>
            <li>The bio card should never be used without the modal.</li>
          </ul>

          <h3>Changelog</h3>

          <p>1.0 — Released component</p>

        </>
      ),
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <BioCard
          contenttile={caption.title}
          contentname={caption.name}
          descriptionText={caption.descriptionText}
          descriptionText2={caption.descriptionText2}
          button={caption.btnlabel}
          alt={"feature card"}
          image={img}
          image2={img2}
          {...args}
        ></BioCard>
  );
}

export const BioCardStory = Template.bind({});
BioCardStory.storyName = "Bio Card";