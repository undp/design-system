import React from 'react';
import { Blockquote } from './Blockquote/Blockquote';
import { Cite } from './Cite/Cite';
import { H1 } from './Heading/h1';
import { H2 } from './Heading/h2';
import { H3 } from './Heading/h3';
import { H4 } from './Heading/h4';
import { H5 } from './Heading/h5';
import { H6 } from './Heading/h6';
import { P } from './Paragraph/p';
import { HR } from './Hr/hr';
import { CODE } from './Code/code';
import { ABBR } from './Abbr/abbr';
import { MARK } from './Mark/mark';
import { SMALL } from './Small/small';

export default {
  title: 'Atoms/Base Typography',
};

export const heading_h1 = () => <H1  label='Headline 1'/>;
export const heading_h2 = () => <H2  label='Headline 2'/>;
export const heading_h3 = () => <H3  label='Headline 3'/>;
export const heading_h4 = () => <H4  label='Headline 4'/>;
export const heading_h5 = () => <H5  label='Headline 5'/>;
export const heading_h6 = () => <H6  label='Headline 6'/>;
export const paragraph = () => <P label='Large paragraph lorem ipsum dolor sit amet, consectetur adipiscing elit'/>;
export const horizontal = () => <HR/>;
export const codepan = () => <CODE  label='The length() method on a string object contains the length of the string. It can also serve as a character counter'/>;
export const abbreviation = () => <ABBR  label='You can use CSS to style your HTML'/>;
export const marking = () => <MARK  label='Eos nulla molestiae'/>;
export const small = () => <SMALL  label='Et occaecati eos nulla molestiae repellat'/>;
export const BlockquoteTag = () => <Blockquote  text='“Blockquote lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.”' />;
export const CiteTag = () => <Cite  text='—Firstname Lastname' />;
