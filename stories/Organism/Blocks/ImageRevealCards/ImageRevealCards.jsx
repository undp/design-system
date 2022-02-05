import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './image-reveal-cards.scss';
import { ImageRevelCard } from '../../../Components/UIcomponents/Cards/ImageRevelCTACard/ImageRevelCTACard';

export const ImageRevealCards = ({ data, label }) => (
  <>
    {label && <Heading className="reveal-head" type="2" label={label} dataViewport="true"/>}
    <ImageRevelCard data={data} />
  </>
);
