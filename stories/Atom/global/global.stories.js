import React from 'react'
import './global.scss';
import { Logo } from './logo/logo'
import { Logowhite } from './logo/logo-white'
import { PnudLogo } from './logo/pnud-logo'
import { PnudLogowhite } from './logo/pnud-logo-white'
import { Color } from './color/color'

export default {
  title: 'Atoms/Logos',
};

export const UNDP_logo = () => <Logo />;
export const UNDP_logo_white = () => <Logowhite />;
export const UNDP_logo_Revert = () => <PnudLogo />;
export const UNDP_logo_white_Revert = () => <PnudLogowhite />;

const Template = (args) => <Color {...args} />;
export const ColorStory= Template.bind({}); 
Color.args = {};
