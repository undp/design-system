import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './biocard.scss';
import '../../../assets/scss/_grid.scss';
import viewport from '../../../assets/js/viewport';
import { ModalFun } from '../../../assets/js/modal_custom';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { Lightbox } from '../../../Molecules/Blocks/Lightbox/Lightbox';


export const size_options = {
  large: 'large-12 ',
  medium: 'large-3 bio-card--medium'
};

export const hover_color_options = {
  yellow: '',
  green: 'green',
  red: 'red',
  azure: 'azure',
};

export const BioCard = ({
  contenttile, contentname, descriptionText, type, button, cell, image, image2, descriptionText2, ...args
}) => {
  useEffect(() => {
    viewport('.bio-card__description');
    ModalFun();
  }, []);
  return (
    <>
    <div className="grid-x grid-margin-x">
      <div className={['cell', `${size_options[`${args.size}`]}`].join(' ')}>
        <a id='bio-card' className={['bio-card', `${hover_color_options[`${args.hovercolor}`]}`].join(' ')}>
          <article className="bio-card__content large-7">
            <div className="bio-card__description left-right ">
              <Heading type="5" label={contentname} />
              <P label={descriptionText} />
            </div>
            <div className="bio-cta">
              <Ctalink label={button} variant="Arrow" />
            </div>
          </article>
          <div className="card-thumbnail__image large-5">
            <img src={image} alt={image} />
          </div>
        </a>
      </div>
    </div>
    <Lightbox image={image2} contentname={contentname} descriptionText={descriptionText} descriptionText2={descriptionText2}   />
  </>
  );
};

BioCard.defaultProps = {
  size: 'medium',
  hovercolor: 'yellow',
};
