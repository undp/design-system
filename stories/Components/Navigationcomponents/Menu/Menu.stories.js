import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Menu } from "./Menu";

const getCaptionForLocale = (locale) => {
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
  parameters: {
    docs: {
      page: () => (
        <>
          <h1>Menu</h1>
          <p>
          The Horizontal Menu consists of multiple clickable items placed at the top of the page. The navigation stays unchanged when browswing through the site and is present on every page.
          </p>

          <Canvas>
            <Story name="Menu">
              {(args) => (
                <Menu
                  data={getCaptionForLocale("english")}
                  role="navigation"
                  arialabel="menu"
                  {...args}
                />
              )}
            </Story>
          </Canvas>
        </>
      )
    }
  }
};

const Template =  (args, { globals: { locale } }) => {
  const caption = getCaptionForLocale(locale);
  return (
    <Menu
      data={caption}
      role="navigation"
      arialabel="menu"
      {...args}
    />
  );
}

export const MenuStory = Template.bind({});
MenuStory.storyNamer = "Menu";


