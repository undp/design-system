import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { CtaBlock } from "./CtaBlock";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        header: "UNDP Hope",
        description:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        cta: "Read More",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        header: "ПРООН",
        description:
          "Будучи агентством Організації Об'єднаних Націй, що спеціалізується на питаннях розвитку, ПРООН підтримує стратегічні ініціативи, спрямовані на розвиток потенціалу, аби сприяти всебічному зростанню і сталому людському розвитку.",
        cta: "ЧИТАТИ ДАЛІ",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        header: "برنامج الأمم المتحدة الإنمائي الأمل",
        description:
          "يعمل برنامج الأمم المتحدة الإنمائي في حوالي 170 دولة وإقليم ، للمساعدة في تحقيق القضاء على الفقر ، والحد من عدم المساواة والإقصاء. نحن نساعد البلدان على تطوير السياسات ومهارات القيادة وقدرات الشراكة والقدرات المؤسسية وبناء المرونة من أجل الحفاظ على نتائج التنمية.",
        cta: "اقرأ أكثر",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        header: "UNDP မျှော်လင့်ချက်",
        description:
          "UNDP သည်နိုင်ငံနှင့်နယ်မြေ ၁၇၀ ခန့်တွင်အလုပ်လုပ်ပြီးဆင်းရဲမွဲတေမှုပပျောက်ရေး၊ မညီမျှမှုများနှင့်ဖယ်ထုတ်မှုလျော့ချရန်ကူညီသည်။ မူဝါဒများ၊ ခေါင်းဆောင်မှုအရည်အချင်းများ၊ ပူးပေါင်းလုပ်ဆောင်နိုင်မှုများ၊ အဖွဲ့အစည်းဆိုင်ရာစွမ်းရည်များနှင့်ဖွံ့ဖြိုးတိုးတက်မှုရလဒ်များကိုရေရှည်တည်တံ့စေရန်ကြံ့ကြံ့ခံတည်ဆောက်ရန်ကျွန်ုပ်တို့ကူညီသည်။",
        cta: "ပိုပြီးဖတ်ပါ",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        header: "UNDPの希望",
        description:
          "UNDPは約170の国と地域で活動しており、貧困の撲滅と不平等と排除の削減を支援しています。私たちは、開発成果を維持するために、各国が政策、リーダーシップスキル、パートナー能力、制度的能力を開発し、レジリエンスを構築するのを支援します。",
        cta: "続きを読む",
      };
      return japaneseText;
    default:
      return {
        header: "UNDP Hope",
        description:
          "UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion. We help countries to develop policies, leadership skills, partnering abilities, institutional capabilities and build resilience in order to sustain development results.",
        cta: "Read More",
      };
  }
};

export default {
  title: "Components/UI components/Text/CTA block",
  component: {CtaBlock},
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>CTA Block</h1>

              <p>CTA Block Component defines a section of information data with some items - header title, description. <code>H4</code> <code>P</code> atoms tags are used for creating this section.</p>

              <Canvas>
                <Story name="CTA block">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <CtaBlock
                        headerText={caption.header}
                        descriptionText={caption.description}
                        ctaText={caption.cta}
                      ></CtaBlock>
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
                  <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-block.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system-assets/css/components/cta-block.min.css</a></li>
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
    <CtaBlock
      headerText={caption.header}
      descriptionText={caption.description}
      ctaText={caption.cta}
    ></CtaBlock>
  );
}

export const CtaBlockStory = Template.bind({});
CtaBlockStory.storyName = "CTA block";