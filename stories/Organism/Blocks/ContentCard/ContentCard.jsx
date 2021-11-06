import React , { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import { SingleContent } from '../../../Molecules/Blocks/SingleContent/SingleContent';
import { CtaButton } from '../../../Atom/Buttons-and-labels/Cta_button/CtaButton';

export const ContentCard = ({ data, buttontype, type}) => {
  useEffect(() => {
    viewport('.content-card-container');
  }, []);
  return (
    <div className="content-card-container left-right">
      <SingleContent data={data} />
      <CtaButton label2={buttontype} variant='Secondary' />
    </div>
  );
};
