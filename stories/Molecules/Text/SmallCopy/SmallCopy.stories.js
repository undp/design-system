import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Smallcopy } from "./SmallCopy";

const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        locationlabel: [
          <strong>USA</strong>,
          <br />,
          "One United Nations Plaza",
          <br />,
          "• New York, NY",
        ],
        phonelabel: [<strong>Phone:</strong>],
        phone: "+1 212-906-5000",
        emaillabel: [<strong>Email:</strong>],
        email: "hq@undp.org",
      };
      return engText;
    case "ukrainian":
      const ukText = {
        locationlabel: [
          <strong>Програма розвитку ООН в Україні</strong>,
          <br />,
          "Кловський узвіз 1, Київ 01021, Україна",
          <br />,
          "",
        ],
        phonelabel: [<strong>Тел:</strong>],
        phone: "+380 44 253 93 63",
        emaillabel: [<strong>Email:</strong>],
        email: "registry.ua@undp.org",
      };
      return ukText;
    case "arabic":
      const arabicText = {
        locationlabel: [
          <strong>الأمريكية</strong>,
          <br />,
          "واحدالأمم المتحدة بلازا",
          <br />,
          " نيويورك، نيويورك•",
        ],
        phonelabel: [<strong>هاتف:</strong>],
        phone: "+1 212-906-5000",
        emaillabel: [<strong> الإلكتروني:</strong>],
        email: "hq@undp.org",
      };
      return arabicText;
    case "burmese":
      const burmeseText = {
        locationlabel: [
          <strong>ယူအက်စ်အေ</strong>,
          <br />,
          "United Nations Plaza တစ်ခု",
          <br />,
          "•ကုလသမဂ္ဂပလာဇာတစ်ခု",
        ],
        phonelabel: [<strong>ဖုန်း</strong>],
        phone: "+1 212-906-5000",
        emaillabel: [<strong>အီးမေးလ်:</strong>],
        email: "hq@undp.org",
      };
      return burmeseText;
    case "japanese":
      const japaneseText = {
        locationlabel: [
          <strong>宇佐</strong>,
          <br />,
          "1つの国連プラザ",
          <br />,
          "•ニューヨーク州ニューヨーク",
        ],
        phonelabel: [<strong>電話:</strong>],
        phone: "+1 212-906-5000",
        emaillabel: [<strong>Eメール:</strong>],
        email: "hq@undp.org",
      };
      return japaneseText;
    default:
      return {
        locationlabel: [
          <strong>USA</strong>,
          <br />,
          "One United Nations Plaza",
          <br />,
          "• New York, NY",
        ],
        phonelabel: [<strong>Phone:</strong>],
        phone: "+1 212-906-5000",
        emaillabel: [<strong>Email:</strong>],
        email: "hq@undp.org",
      };
  }
};

export default { 
  title: "Components/UI components/Text/Small copy lockup",
  parameters: {
    docs: {
        page: () => (
            <>
              <h1>Small Copy Lockup</h1>

              <p>The Small Copy Lockup component defines a section of information data with some items - location, phone number, and email ID.</p>

              <Canvas>
                <Story name="Small copy lockup">
                  {(args, { globals: { locale } }) => {
                    const caption = getCaptionForLocale(locale);
                    return (
                      <Smallcopy
                        locationName={caption.locationlabel}
                        phoneName={caption.phonelabel}
                        phonenumber={caption.phone}
                        emailName={caption.emaillabel}
                        emailid={caption.email}
                      ></Smallcopy>
                    );
                  }}
                </Story>
              </Canvas>

              <h3>Usage</h3>

              <ul>
                <li>Take HTML from the HTML tab in canvas whichever background color you like.</li>
                <li>Include CSS and JS from the 'CSS and JS References' section.</li>
              </ul>

              <h3>CSS and JS References</h3>

              <h4>CSS:</h4>
              <p>Add the base style only, located at <strong>dist/css/base-minimal.min.css</strong> along with the following:</p>
              <ul>
                <li><a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/smallcopy.min.css">https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/smallcopy.min.css</a></li>
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
    <Smallcopy
      locationName={caption.locationlabel}
      phoneName={caption.phonelabel}
      phonenumber={caption.phone}
      emailName={caption.emaillabel}
      emailid={caption.email}
    ></Smallcopy>
  );
}

export const SmallCopyStory = Template.bind({});
SmallCopyStory.storyName = "Small copy lockup";

