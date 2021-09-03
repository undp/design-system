import React from 'react';

import { Checkbox } from './Checkbox';
// import './test.js'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxComp = Template.bind({});
Checkbox.args = {};

