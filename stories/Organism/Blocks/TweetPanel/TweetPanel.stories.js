import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { TweetPanel } from './TweetPanel';
import { getCaptionForLocale } from './TweetPanelUtils';

export default {
  title: "Components/Twitter panel",
  component: {TweetPanel},
  parameters: {
    docs: {
        page: () => (
            <>
              <h3>Overview</h3>

              <Canvas>
                <Story name="Twitter panel">
                  {(args, { globals: { locale } }) => {
                    const content = getCaptionForLocale(locale);
                    return <TweetPanel data={content.tweetpaneldata} headertext={content.headertext}></TweetPanel>;
                  }}
                </Story>
              </Canvas>
            </>
        )
    }
  }
}

const Template = (args, { globals: { locale } }) => {
  const content = getCaptionForLocale(locale);
  return <TweetPanel data={content.tweetpaneldata} headertext={content.headertext}></TweetPanel>;
              
}

export const TweetPanelStory = Template.bind({});
TweetPanelStory.storyName = 'Twitter panel';
