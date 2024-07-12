import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Menu } from "./Menu";

export const getCaptionForLocale = (locale) => {
  switch (locale) {
    case "english":
      const engText = {
        data: [
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
        ],
      };
      return engText.data;
    case "ukrainian":
      const ukText = {
        data: [
          {
            label: "пункт меню",
          },
          {
            label: "пункт меню",
          },
          {
            label: "пункт меню",
          },
          {
            label: "пункт меню",
          },
          {
            label: "пункт меню",
          },
          {
            label: "пункт меню",
          },
        ],
      };
      return ukText.data;
    case "arabic":
      const arabicText = {
        data: [
          {
            label: "عنصر القائمة",
          },
          {
            label: "عنصر القائمة",
          },
          {
            label: "عنصر القائمة",
          },
          {
            label: "عنصر القائمة",
          },
          {
            label: "عنصر القائمة",
          },
          {
            label: "عنصر القائمة",
          },
        ],
      };
      return arabicText.data;
    case "burmese":
      const burmeseText = {
        data: [
          {
            label: "မီနူးပစ္စည်းများ",
          },
          {
            label: "မီနူးပစ္စည်းများ",
          },
          {
            label: "မီနူးပစ္စည်းများ",
          },
          {
            label: "မီနူးပစ္စည်းများ",
          },
          {
            label: "မီနူးပစ္စည်းများ",
          },
          {
            label: "မီနူးပစ္စည်းများ",
          },
        ],
      };
      return burmeseText.data;
    case "japanese":
      const japaneseText = {
        data: [
          {
            label: "メニュー項目",
          },
          {
            label: "メニュー項目",
          },
          {
            label: "メニュー項目",
          },
          {
            label: "メニュー項目",
          },
          {
            label: "メニュー項目",
          },
          {
            label: "メニュー項目",
          },
        ],
      };
      return japaneseText.data;
    default:
      const dummy = {
        data: [
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
          {
            label: "menu item",
          },
        ],
      };
      return dummy.data;
  }
};

export default {
  title: "Components/Navigation components/Menu",
  component: Menu,
};

MenuStory.parameters = {
  docs: {
    source: {
      code: `

<Canvas>
  <Story name="Menu">
    {(args, { globals: { locale } }) => {
      const caption = getCaptionForLocale(locale);
      return <Menu data={caption} role="navigation" aria-label="menu"></Menu>;
    }}
  </Story>
</Canvas>
      `,
    },
  },
};
