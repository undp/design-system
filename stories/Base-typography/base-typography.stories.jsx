import React from 'react';

import { Blockquote } from './Blockquote/Blockquote';
import { Cite } from './Cite/Cite';

export default {
  title: 'Atoms/Base Typography',
  // component: Blockquote
};

// const Template = (args) => <Blockquote  {...args} />;

export const BlockquoteTag = () => <Blockquote  text='“Blockquote lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.”' />;
export const CiteTag = () => <Cite  text='—Firstname Lastname' />;
