import React from 'react';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';
import { FeaturedContentCard } from './FeaturedContentCard';
import img from '../../../../assets/images/card2.jpg';

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return engText;
    case "ukrainian":
      const ukText = {
        featuredcontentdata: [
          {
            contenttile: "ТЕГ ВМІСТУ",
            contentname: "Програма ПРООН із підвищення стійкості та відновлення",
            descriptionText:
              "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку. ",
            button: "ЧИТАТИ ДАЛІ",
            imgback: img,
          },
        ],
      };
      return ukText;
    case "arabic":
      const arabicText = {
        featuredcontentdata: [
          {
            contenttile: "علامة المحتوى",
            contentname: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            descriptionText: " عنوان المشاركة يظهر هنا ويتكون من سطرين",
            button: "اقرأ أكث",
            imgback: img,
          },
        ],
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        featuredcontentdata: [
          {
            contenttile: "အကြောင်းအရာ TAG",
            contentname:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            descriptionText:
              "ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ၊ နာမည်က ပို့စ်ခေါင်းစဉ်ကဒီမှာပါ၊ အဲဒါကစာကြောင်းနှစ်ကြောင်းပါ",
            button: "ပိုပြီးဖတ်ပါ",
            imgback: img,
          },
        ],
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        featuredcontentdata: [
          {
            contenttile: "コンテンツタグ",
            contentname: "投稿のタイトルはここにあり、2行です",
            descriptionText: "投稿のタイトルはここにあり、2行です",
            button: "続きを読む",
            imgback: img,
          },
        ],
      };
      return japaneseText;
    // case "azerbaijani":
    //   const azerbaijaniText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "MƏZMUN ETİKETİ",
    //         contentname:
    //           "Monqolustan iqlimə davamlılığı gücləndirmək üçün 23,1 milyon dollarlıq yeni GCF qrantı alır",
    //         descriptionText:
    //           "Yeni Yaşıl İqlim Fondunun qrantı ilə BMTİP tərəfindən dəstəklənən layihə bir milyona yaxın həssas əhaliyə fayda verəcək.",
    //         button: "ƏTRAFLI OXUYUN",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return azerbaijaniText;
    // case "georgian":
    //   const georgianText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "კონტენტის ტეგი",
    //         contentname:
    //           "მონღოლეთი იღებს ახალ 23,1 მილიონი აშშ დოლარის GCF გრანტს კლიმატის მდგრადობის გასაძლიერებლად",
    //         descriptionText:
    //           "მწვანე კლიმატის ფონდის ახალი გრანტით, გაეროს განვითარების პროგრამის მიერ მხარდაჭერილი პროექტი სარგებელს მიიღებს მილიონზე მეტ სოციალურად დაუცველ მოსახლეობას.",
    //         button: "წაიკითხეთ მეტი",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return georgianText;
    // case "khmer":
    //   const khmerText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "ស្លាកមាតិកា",
    //         contentname:
    //           "ប្រទេសម៉ុងហ្គោលីទទួលបានជំនួយ GCF ថ្មីចំនួន 23.1 លានដុល្លារ ដើម្បីពង្រឹងភាពធន់នឹងអាកាសធាតុ",
    //         descriptionText:
    //           "ជាមួយនឹងជំនួយមូលនិធិអាកាសធាតុបៃតងថ្មី គម្រោងដែលគាំទ្រដោយ UNDP នឹងផ្តល់អត្ថប្រយោជន៍ជិតមួយលាននាក់ដែលងាយរងគ្រោះ។",
    //         button: "អានបន្ថែម",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return khmerText;
    // case "nepali":
    //   const nepaliText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "सामग्री ट्याग",
    //         contentname:
    //           "मङ्गोलियाले जलवायु लचिलोपनलाई बलियो बनाउन नयाँ $ 23.1 मिलियन GCF अनुदान प्राप्त गर्दछ",
    //         descriptionText:
    //           "नयाँ हरित जलवायु कोष अनुदानबाट, UNDP-समर्थित परियोजनाले करिब १० लाख जोखिममा परेका जनसंख्यालाई फाइदा पुर्‍याउनेछ।",
    //         button: "थप पढ्नुहोस्",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return nepaliText;
    // case "chinese":
    //   const chineseText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "内容标签",
    //         contentname:
    //           "蒙古获得 2310 万美元绿色气候基金新拨款，以增强气候适应能力",
    //         descriptionText:
    //           "借助绿色气候基金的新拨款，联合国开发计划署支持的项目将使近一百万弱势群体受益。",
    //         button: "阅读更多",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return chineseText;
    // case "korean":
    //   const koreanText = {
    //     featuredcontentdata: [
    //       {
    //         contenttile: "콘텐츠 태그",
    //         contentname:
    //           "몽골, ​​기후 회복력 강화를 위해 새로운 2,310만 달러 GCF 보조금 수령",
    //         descriptionText:
    //           "새로운 Green Climate Fund 보조금으로 UNDP 지원 프로젝트는 약 100만 명의 취약 계층에게 혜택을 제공합니다.",
    //         button: "더 읽기",
    //         imgback: img,
    //       },
    //     ],
    //   };
    //   return koreanText;
    default:
      const dummy = {
        featuredcontentdata: [
          {
            contenttile: "CONTENT TAG",
            contentname:
              "Mongolia receives new $23.1 million GCF grant to strengthen climate resilience",
            descriptionText:
              "With the new Green Climate Fund grant, UNDP-supported project will benefit close to one million vulnerable population.",
            button: "READ MORE",
            imgback: img,
          },
        ],
      };
      return dummy;
  }
};

export default {
  title: 'Components/UI components/Cards/Featured card',
  argTypes: {
    image: {
      name: 'Image',
      options: ['image', 'color'],
      control: { type: 'inline-radio' },
    },
    size: {
      name: 'Size variant',
      options: ['large', 'medium', 'small'],
      control: { type: 'inline-radio' },
    },
    hovercolor: {
      name: 'Hover accent color',
      options: ['global', 'yellow', 'red', 'green', 'blue'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    image: 'image',
    size: 'medium',
    hovercolor: 'global',
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Featured Content Card</h1>

          <p>The Featured Content Card components are cards with information and/or image.</p>

          <h3>Overview</h3>

          <p>The Featured Content Card component defines a card of information with some items - Tag, Title, Image, Paragraph, and CTA Link. It uses a grid system to manage the different sizes. It is a multi-usage component that creates boxes that are usually teasing some kind of content.</p>

          <h4>When to use:</h4>

          <p>When a card with data, CTA link, and image is to be displayed.</p>

          <h3>Formatting</h3>

          <h4>Default</h4>

          <p>It consists of a grid with title, paragraph, CTA link, and/or image.</p>

          <h3>Content</h3>

          <p>There are two types of featured card components: Featured Card with Image and Featured Card without Image. It consists of three sizes: Small, Default, and Large.</p>

          <ul>
            <li>Small</li>
            <li>Default</li>
            <li>Large</li>
          </ul>

          <h3>Behaviors</h3>

          <h4>States</h4>

          <p>There are two states in Featured Cards: Default, Hover.</p>

          <ul>
            <li><strong>Default:</strong> It shows the title, paragraph, CTA link, and image for Featured Card with Image and title, paragraph, and CTA Link for Featured Card without Image.</li>
            <li><strong>Hover:</strong> In hover state, when the mouse hovers over the Featured Card with Image, the image is displayed. While for Featured Cards without Image, when the mouse hovers over it, yellow color is displayed without image.</li>
          </ul>

          <h4>Featured card</h4>

          <Canvas>
            <Story name="Featured card">
              {(args, { globals: { locale, accent } }) => {
                const caption = getCaptionForLocale(locale);
                return (
                  <FeaturedContentCard
                    data={caption.featuredcontentdata}
                    headertext={caption.headertext}
                    {...args}
                  ></FeaturedContentCard>
                );
              }}
            </Story>
          </Canvas>

          <h3>Usage</h3>

          <ul>
            <li>From the control tab of canvas, choose Image control either Image or Color, Size control either Large, Medium or Small, and Hover color from Yellow, Red, Green or Blue.</li>
            <li>Copy the HTML from the HTML tab and include the CSS and JS files listed below.</li>
            <li>If you want to add left-right animation then add data-viewport=”true” attribute to your HTML element and include viewport.min.js.</li>
          </ul>

          <h3>CSS and JS References</h3>

          <h4>CSS:</h4>

          <p>Add the base layout style from:</p>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/base-minimal.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-link.min.css</a></li>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/featured-content-card.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/featured-content-card.min.css</a></li>
          </ul>

          <h4>JS:</h4>

          <ul>
            <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/js/viewport.min.js</a></li>
          </ul>

          <h3>Interactions</h3>

          <ul>
            <li>Hover state applies to the image only.</li>
            <li>By clicking on the CTA Link, the associated page is opened.</li>
          </ul>

          

          

        </>
      ),
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <FeaturedContentCard
      data={caption.featuredcontentdata}
      headertext={caption.headertext}
      {...args}
    ></FeaturedContentCard>
  );
}

export const FeaturedContentCardStory = Template.bind({});
FeaturedContentCardStory.storyName = 'Featured Card';
