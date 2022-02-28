import React from 'react';
import { ContentCardImage } from '../../../Components/UIcomponents/Cards/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export const ContentCard = ({ data, buttontype, Hovercolors }) => (
  <div className="content-card-container" data-viewport="true">
    <ContentCardImage data={data} Hovercolors={Hovercolors} />
    <CtaButton label={buttontype} Type="Secondary" />
  </div>
);
