import React from 'react';
import './featured-content-card.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/BaseTypography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';
import isChromatic from "chromatic/isChromatic";

export const size_options = {
  large: 'large-8 medium-8',
  medium: 'medium-4',
  small: 'medium-3',
};

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const hovercolor_options = {
  yellow: 'yellow',
  red: 'red',
  green: 'green',
  blue: 'blue',
};

export const accent_color_options = {
  yellow: 'yellow',
  red: 'red',
  blue: 'blue',
  green: 'green',
};

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export function FeaturedContentCard({
  type,
  cell,
  data,
  image,
  headertext,
  hovercolor,
  ...args
}) {
  let size_variant = size_options[`${args.size}`];
  let image_variant = image_options[`${image}`];

  let color = (hovercolor) ? accent_color_options[`${hovercolor}`] : accent_color_options[`${args.accent}`];
  let accent_color = color ? `accent-${color}` : '';
  const fcCardCls = isChromatic() ? 'cell small-3 medium-3 large-3 medium-offset-1 small-offset-1 feature__card-title inviewport' : 'cell small-3 medium-3 large-3 medium-offset-1 small-offset-1 feature__card-title';

  return (
    <div className="grid-x grid-margin-x">
      {headertext && (
        <div data-viewport={isChromatic() ? '' : 'true'} className={fcCardCls}>
          <Heading type="2" label={headertext} />
        </div>
      )}
      {data.map((item, index) => (
        <div
          key={index}
          className={cls('cell', `${item.scale ? size_options[`${item.scale}`] : size_variant}`, 'feature__card', `${item.type ? `${image_options[`${item.type}`]}` : `${image_variant}`}`, `${item.hovercolor ? `${hovercolor_options[`${item.hovercolor}`]}` : `${accent_color}`}`)}
        >
          <a href={item.url ? item.url : '#'}>
            <div className="feature__card-slide">
              {item.imgback && (item.type ? item.type === 'image' : image_variant === 'image') && <div className="feature__card-image"><img src={item.imgback} alt={item.imgback} /></div>}
            </div>
            <article className="feature__card-content">
              <Heading type="6" label={item.contenttile} />
              <div className="feature__card-description">
                {(item.scale ? item.scale === 'large' : args.size === 'large') && item.contentname && <Heading type="4" label={item.contentname} />}
                {(item.scale ? item.scale === 'medium' : args.size === 'medium') && item.contentname && <Heading type="5" label={item.contentname} />}
                {(item.scale ? item.scale === 'small' : args.size === 'small') && item.contentname && <Heading type="5" label={item.contentname} />}
                {item.size}
                {item.descriptionText && <P label={item.descriptionText} />}
              </div>
              <Ctalink label={item.button} button_option="span" />
            </article>
          </a>
        </div>
      ))}
    </div>
  );
}
