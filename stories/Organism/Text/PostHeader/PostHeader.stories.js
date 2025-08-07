import { Meta, Story, Canvas } from "@storybook/addon-docs/blocks";
import { PostHeader } from './PostHeader';
import { getCaptionForLocale} from './PostHeaderUtils'

export default {
  title: 'Components/Post Header',
  component: PostHeader,
  argTypes: {
    locale: {
      control: {
        type: 'radio',
        options: ['english', 'arabic', 'burmese', 'japanese']
      }
    }
  },
  parameters: {
    docs: {
      page: () => <Canvas />
    }
  }
};

const Template = (args, { globals: { locale } }) => {
  const content = getCaptionForLocale(locale);
  return <PostHeader data={content.postheaderdata} active={content.active} header={content.header} country={content.country} description={content.description}></PostHeader>;
}

export const PostHeaderStory = Template.bind({});

