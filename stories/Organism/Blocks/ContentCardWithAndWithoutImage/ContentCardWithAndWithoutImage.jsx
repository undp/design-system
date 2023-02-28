import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';
import { P } from '../../../Atom/BaseTypography/Paragraph/Paragraph';
import './content-card-with-and-without-image.scss';
import '../../../assets/scss/_grid.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const accent_color_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

export function ContentCardWithAndWithoutImage({
  data,
  storyBtn,
  dataViewport,
  ...args
}) {
  let color = (args.Hovercolors) ? accent_color_options[`${args.Hovercolors}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';

  return (
    <div className="grid-x grid-margin-x content-data" data-viewport={dataViewport}>
      {data.map((item, index) => (
        <div key={index} className={cls('cell', `${item.scale}`)}>
          {item.type === 'image'
            ? (
              <div className={cls('content-card', `${(item.Hovercolors) ? accent_color : ''}`)}>
                <a href={item.link}>
                  <Heading type="6" label={item.contenttile} />
                  <div className="image">
                    <img src={item.imgback} alt={item.imgback} />
                  </div>
                  <div className="content-caption">
                    <Heading type="5" label={item.contentname} />
                    <Ctalink label={item.button} button_option="span" />
                  </div>
                </a>
              </div>
            )
            : (null)}
          {item.type === 'color'
            ? (
              <div className={cls('content-card', `${item.BackgroundColor}`, `${item.Hovercolors ? args.accent : ''}`)}>
                <a href={item.link}>
                  <Heading type="6" label={item.contenttile} />
                  <div className="content-caption">
                    {item.Emphasize === 'true'
                      ? (
                        <Heading type="4" label={item.contentnametwo} />
                      )
                      : (null)}
                    {item.Emphasize === 'false'
                      ? (
                        <>
                          <Heading type="5" label={item.contentname} />
                          <P label={item.paragraph} />
                        </>
                      )
                      : (null)}
                    <Ctalink label={item.button} button_option="span" />
                  </div>
                </a>
              </div>
            )
            : (null)}
        </div>
      ))}
    </div>
  );
}
