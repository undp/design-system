import React , { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import { ContentCardImage } from '../../../Molecules/Blocks/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Atom/Buttons-and-labels/Cta_button/CtaButton';

export const ContentCard = ({ data, buttontype, type}) => {
  useEffect(() => {
    viewport('.content-card-container');
  }, []);
  return (
    <div className="content-card-container left-right">
      <ContentCardImage data={data} />
      <CtaButton label2={buttontype} variant='Secondary' />
    </div>
  );
};
