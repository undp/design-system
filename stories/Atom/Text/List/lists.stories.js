import React from 'react';
import { Unorderlist } from './Unorderlist/Unorderlist';
import { Orderlist } from './Orderlist/Orderlist';
import { Definationlist } from './Defination/Definationlist';

export default {
  title: 'Atoms/List',
};

export const Unorderlist_list = () => <Unorderlist text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.'/>;
export const Orderlist_list = () => <Orderlist text='Ordered list item lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor mauris quis pulvinar ultrices.'/>;
export const Definationlist_list = () => <Definationlist text='The United Nations Development Programme is the global development network of the United Nations. It promotes technical and investment cooperation among nations and advocates for change and connects countries to knowledge, experience and resources to help people build a better life for themselves.' label="United Nations Development Programme"/>;
