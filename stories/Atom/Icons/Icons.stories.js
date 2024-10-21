import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs";
import { Icons } from "./Icons";
import data from "./Icons.json";
import "./icons.scss";

export default {
  title: 'Foundation/Icons',
  component: Icons,
  parameters: {
    docs: {
      page: () => (
        <>
          <section>
            <h1>Icons</h1>
            <p>
              The Icon components can grab attention and draw users into a piece
              of content. They can help users quickly understand the context in
              which they are placed.
            </p>
            <h3>When to use:</h3>
            <ul>
              <li>
                When content is dense and complex to help comprehend the users
                the available actions
              </li>
              <li>
                When space needs to be saved instead of using words or long
                phrases.
              </li>
            </ul>
            <Canvas>
              <Story
                name="Icons"
                parameters={{
                  viewMode: "docs",
                  docs: {
                    source: {
                      code: data.icons
                        .map((item) => {
                          if (item.type === "img") {
                            return `<img src="icons/${item.name}.svg" alt="icon"/>\n`;
                          } else {
                            return `<span class="${item.name}"></span>\n`;
                          }
                        })
                        .join(""),
                    },
                  },
                }}
              >
                {() => (
                  <div className="icons-container">
                    {data.icons.map((item, index) => (
                      <div key={index}>
                        {item.type === "img" ? (
                          <>
                            <img src={`icons/${item.name}.svg`} alt={item.label} />
                            <p>{item.label}</p>
                          </>
                        ) : (
                          <>
                            <span className={item.name}></span>
                            <p>{item.label}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </Story>
            </Canvas>
            <h3>Usage</h3>
            <ul>
              <li>
                For svg icons download it from dist/images and use it on your
                webpage.
              </li>
              <li>
                To get other icons, for example, the Threads Icon, use the Icon library <a href="https://remixicon.com/" target="_blank">here</a>
              </li>
              <li>
                For CSS based icons eg: .chevron-right-animated,
                .external-link-animated and .download-animated use these classes
                in <strong>span</strong> element.
              </li>
            </ul>
            <h4>CSS and JS References</h4>
            <h4>CSS:</h4>
            <p>
              Add the base layout style from{" "}
              <a href="https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css">
                https://cdn.jsdelivr.net/npm/@undp/design-system/docs/css/base-minimal.min.css
              </a>
            </p>
            <h4>JS:</h4>
            <p>NA</p>
          </section>
        </>
      ),
    },
  },
};

const Template = () => (
  <div className="icons-container">
    {data.icons.map((item, index) => (
      <div key={index}>
        {item.type === "img" ? (
          <>
            <img src={`icons/${item.name}.svg`} alt={item.label} />
            <p>{item.label}</p>
          </>
        ) : (
          <>
            <span className={item.name}></span>
            <p>{item.label}</p>
          </>
        )}
      </div>
    ))}
  </div>
);

export const IconsStory = Template.bind({});
IconsStory.storyName = 'Icons';
IconsStory.parameters = {
  docs: {
    source: {
      code: data.icons
        .map((item) => {
          if (item.type === "img") {
            return `<img src="icons/${item.name}.svg" alt="icon"/>\n`;
          } else {
            return `<span class="${item.name}"></span>\n`;
          }
        })
        .join(""),
    },
  },
};
