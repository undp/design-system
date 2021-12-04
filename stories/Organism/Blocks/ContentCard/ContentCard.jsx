import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import { ContentCardImage } from '../../../Components/UIcomponents/Cards/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/Cta_button/CtaButton';

export const ContentCard = ({ data, buttontype, Hovercolors }) => {
  useEffect(() => {
    viewport('.content-card-container');
  }, []);
  return (
    <div className="content-card-container left-right">
      <ContentCardImage data={data}  Hovercolors={Hovercolors}/>
      <CtaButton label2={buttontype} variant="secondary"/>
    </div>
  );
};
