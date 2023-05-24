import React from 'react';
import { ContentCardImage } from '../../../Components/UIcomponents/Cards/ContentCard/ContentCardImage';
import { CtaButton } from '../../../Components/UIcomponents/Buttons/CtaButton/CtaButton';

export const accent_color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

export function ContentCard({
  data,
  buttontype,
  Hovercolors,
  ...args
}) {
  let color = (args.Hovercolors) ? accent_color_options[`${args.Hovercolors}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className="content-card-container" data-viewport="true">
      <ContentCardImage data={data} Hovercolors={accent_color} {...args} />
      <CtaButton label={buttontype} Type="Secondary" />
    </div>
  );
}
