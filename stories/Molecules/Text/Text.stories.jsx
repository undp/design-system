import React from 'react';

import { BlockquoteComponent } from './BlockquoteComponent/BlockquoteComponent';
import { BodyColumnTwo } from './BodyColumn/BodyColumn';
import { BodyColumnFour } from './BodyColumn/BodyColumnFour';
import { SectionHeader } from './SectionHeader/SectionHeader';
import { Tertiary } from './Tertiary/tertiary';
import { BlockCTA } from './blockCTA/blockCTA';
import { Post } from './Post/Post';
import { Page } from './Page/Page';
import { Faq } from '../../../stories/Text/Faq/Faq';
// import { FaqNew } from './FaqNew/FaqNew';

export default {
  title: 'Molecules/Text'
};

const Template = (args) => <BlockquoteComponent {...args} />;

export const Blockquote = Template.bind({});
Blockquote.args = {
  size: 'Gray',
};

export const FaqComp = () => <Faq />
// export const FaqNewComp = () => <FaqNew />


export const HeaderSection = () => <SectionHeader />
export const TertiarySection = () => <Tertiary />
export const BlockCTASection = () => <BlockCTA />
export const PostTitleDate = () => <Post />
export const PageTitle = () => <Page />

export const ColumnTwo = () => <BodyColumnTwo text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Pharetra sit amet aliquam id diam maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus '/>

export const ColumnFour = () => <BodyColumnFour text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Aliquam faucibus purus in massa tempor nec feugiat nisl pretium. Massa massa ultricies mi quis hendrerit dolor magna eget. Pharetra sit amet aliquam id diam maecenas. Penatibus et magnis dis parturient montes nascetur ridiculus ' />


