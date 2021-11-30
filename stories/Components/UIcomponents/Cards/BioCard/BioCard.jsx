import React, { useEffect } from 'react';
import './biocard.scss';
import '../../../../assets/scss/_grid.scss';
import viewport from '../../../../assets/js/viewport';
import { ModalFun } from '../../../../assets/js/modal_custom';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';

export const size_options = {
  large: 'large-12',
  medium: 'large-3',
};

export const hover_color_options = {
  yellow: '',
  green: 'green',
  red: 'red',
  azure: 'azure',
};

export const BioCard = ({
  contenttile,
  contentname,
  descriptionText,
  type,
  button,
  cell,
  image,
  image2,
  descriptionText2,
  large,
  medium,
  ...args
}) => {
  useEffect(() => {
    viewport('.bio-card__description');
    ModalFun();
  }, []);
  return (
    <>
      <div className="grid-x grid-margin-x">
        <div className={['cell', `${size_options[`${args.size}`]}`].join(' ')}>
          {args.size === 'large' && (
            <a
              id="bio-card"
              className={['grid-x grid-margin-x bio-card', `${hover_color_options[`${args.hovercolor}`]}`].join(' ')}
            >
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
          )}

          {args.size === 'medium' && (
            <a
              id="bio-card"
              className={['bio-card medium', `${hover_color_options[`${args.hovercolor}`]}`].join(' ')}
            >
              <div className="card-thumbnail__image ">
                <img src={image} alt={image} />
              </div>
              <article className="bio-card__content ">
                <div className="bio-card__description left-right ">
                  <Heading type="5" label={contentname} />
                  <P label={descriptionText} />
                </div>
                <div className="bio-cta">
                  <Ctalink label={button} variant="Arrow" />
                </div>
              </article>
            </a>
          )}
        </div>
      </div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-close-button" />
          <div className="bio-card-wrapper">
            <div className="bio-card-image">
              <img src={image2} alt={image} />
            </div>
            <article className="bio-card-content">
              <Heading type="5" label={contentname} />
              <P label={descriptionText} />
              <P label={descriptionText2} className="small" />
            </article>
          </div>
        </div>
      </div>
    </>
  );
};

BioCard.defaultProps = {
  size: 'medium',
  hovercolor: 'yellow',
};
