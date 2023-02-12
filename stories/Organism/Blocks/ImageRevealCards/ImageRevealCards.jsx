import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './image-reveal-cards.scss';
import { ImageRevelCard } from '../../../Components/UIcomponents/Cards/ImageRevelCTACard/ImageRevelCTACard';

export function ImageRevealCards({ data, label, ...args }) {
  return (
    <>
      {label && <Heading className="reveal-head" type="2" label={label} dataViewport="true" />}
      <ImageRevelCard data={data} {...args} />
    </>
  );
}
