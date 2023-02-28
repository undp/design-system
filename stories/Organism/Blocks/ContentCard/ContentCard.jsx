import React from 'react';
import { ContentCardImage } from '../../../Components/UIcomponents/Cards/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export function ContentCard({
  data,
  buttontype,
  Hovercolors,
  ...args
}) {
  return (
    <div className="content-card-container" data-viewport="true">
      <ContentCardImage data={data} Hovercolors={args.accent} {...args} />
      <CtaButton label={buttontype} Type="Secondary" />
    </div>
  );
}
