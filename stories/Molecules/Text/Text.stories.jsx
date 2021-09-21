import React from 'react';

import { BlockquoteComponent } from './BlockquoteComponent/BlockquoteComponent';
import { BodyColumnTwo } from './BodyColumn/BodyColumn';
import { BodyColumnFour } from './BodyColumn/BodyColumnFour';
import { SectionHeader } from './SectionHeader/SectionHeader';
import { Tertiary } from './Tertiary/tertiary';
import { BlockCTA } from './blockCTA/blockCTA';
import { Post } from './Post/Post';
import { Page } from './Page/Page';
import { FaqNew } from './FaqNew/FaqNew';

export default {
  title: 'Molecules/Text',
  argTypes: {
    size: {
      options: ['Gray', 'Yellow', 'Transparent'],
      control: { type: 'radio' }
    }
  }
};

const Template = (args) => <BlockquoteComponent {...args} />;
export const Blockquote = Template.bind({});
Blockquote.args = {
  size: 'Gray',
};

export const Faq = () => <FaqNew />
export const HeaderSection = () => <SectionHeader sizes='col-xs-12 col-sm-6 col-md-4 col-lg-4'/>
export const TertiarySection = () => <Tertiary sizes='col-xs-12 col-sm-6 col-md-4 col-lg-4' />
export const BlockCTASection = () => <BlockCTA sizes='col-xs-12 col-sm-6 col-md-4 col-lg-4' />
export const PostTitleDate = () => <Post />
export const PageTitle = () => <Page sizes='col-xs-12 col-sm-6 col-md-4 col-lg-4' />

export const ColumnTwo = () => <BodyColumnTwo  sizes='col-md-4'  text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Pharetra sit amet aliquam id diam maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus '/>

export const ColumnFour = () => <BodyColumnFour sizes='col-md-3' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Pharetra sit amet aliquam id diam maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus ' />


