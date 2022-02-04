import React, { useEffect } from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './image-reveal-cards.scss';
import viewport from '../../../assets/js/viewport';
import { ImageRevelCard } from '../../../Components/UIcomponents/Cards/ImageRevelCTACard/ImageRevelCTACard';

export const ImageRevealCards = ({ data, label }) => {
  useEffect(() => {
    viewport('.reveal-head');
  }, []);
  return (
    <>
      {label && <Heading className="reveal-head left-right" type="2" label={label} />}
      <ImageRevelCard data={data} />
    </>
  );
};
