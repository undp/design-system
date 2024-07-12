import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Smallcopy } from "./SmallCopy";

export const getCaptionForLocale = (locale) => {
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
  title: "Components/UI components/Text/Small copy lockup"
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
SmallCopyStory.args = {
};

// Documentation content
SmallCopyStory.parameters = {
  docs: {
    description: {
      component: `
   
# Small Copy Lockup

Small Copy Lockup component defines a section of information data with some items - location, phone number and email ID.

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

###

### Usage

- Take HTML from the HTML tab in canvas whichever backgorund color you like
- Include CSS and JS from the 'CSS and JS References' section

### CSS and JS References

#### CSS:

Add the base style only, located at **dist/css/base-minimal.min.css** along with following:

- https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/components/smallcopy.min.css

#### JS:

NA

### Changelog

1.0 — Released component

`,
    },
  },
}