import React from 'react';
import PropTypes from 'prop-types';
import './featuredContentCard.scss';
import '../../../assets/scss/_grid.scss';
import BackgroundImg from '../../../assets/images/card2.jpg';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';

export const column_options = {
  large: 'large-8 feature__card--large',
  medium: 'medium-6 large-4 feature__card--medium',
  small: 'medium-5 large-3 feature__card--small test1',
};

export const variant_options = {
  Image: 'with-image',
  Color: 'without-image',
};

export const FeaturedContentCard = ({
  contenttile, contentname, descriptionText, type, button, cell, ...args
}) => (
  <div className="grid-x grid-margin-x">
    <div className={['cell', `${column_options[`${args.column}`]}`].join(' ')}>
      <a href="#" className={['feature__card', `feature__card--${variant_options[`${args.variant}`]}`].join(' ')}>
        <div className="feature__card_slide">
          {args.variant === 'Image'
            ? (
              <>
                <div className="feature__card_image" style={{ backgroundImage: `url(${BackgroundImg})` }} />
              </>
            )
            : (
              <>
              </>
            )}

        </div>
        <article className="feature__card_content">
          <div className="feature__card_tag">{contenttile}</div>
          <div className="feature__card_description">
            {args.column === 'medium' || args.column === 'small'
              ? (
                <>
                  {contentname && <Heading type="5" label={contentname} />}
                </>
              )
              : (
                <>
                  {contentname && <Heading type="4" label={contentname} />}
                </>
              )}
            {descriptionText && <P label={descriptionText} />}
          </div>
          <div className="feature__cta">
            <Ctalink label={button} variant="Arrow" />
          </div>
        </article>
      </a>
    </div>
  </div>
);

FeaturedContentCard.defaultProps = {
  column: 'large',
  variant: 'Image',
};
