import React, { useEffect } from 'react';
import './biocard.scss';
import '../../../../assets/scss/_grid.scss';
import viewport from '../../../../assets/js/viewport';
import { modal } from '../../../../assets/js/modal';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Modal } from '../../../UIcomponents/Modal/Modal';

export const biodata = (image2, contentname, descriptionText, descriptionText2) => {
  return (
      <div className="bio-card-wrapper">
         <div className="bio-card-image">
          <img src={image2} alt={image2} />
        </div>
        <article className="bio-card-content">
          <Heading type="5" label={contentname} />
          <P label={descriptionText} />
          <P label={descriptionText2} className="small" />
        </article>
      </div>
  );
};

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const size_options = {
  large: 'large-12',
  medium: 'large-3',
};

export const hover_color_options = {
  yellow: 'yellow',
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
    modal();
  }, []);
  return (
    <>
      <div className="grid-x grid-margin-x">
        <div className={cls('cell', `${size_options[`${args.size}`]}`)}>
          {args.size === 'large' && (
            <a className={cls('grid-x', 'grid-margin-x', 'bio-card', `${hover_color_options[`${args.hovercolor}`]}`)} href="#">
              <article className="bio-card__content medium-7">
                <div className="bio-card__description left-right">
                  <Heading type="5" label={contentname} />
                  <P label={descriptionText} />
                </div>
                <div className="bio-cta">
                  <span className="cta__link cta--arrow">{button}</span>
                </div>
              </article>
              <div className="card-thumbnail__image medium-5">
                <img src={image} alt={image} />
              </div>
            </a>
          )}

          {args.size === 'medium' && (
            <a className={cls('bio-card', 'medium', `${hover_color_options[`${args.hovercolor}`]}`)} href="#">
              <div className="card-thumbnail__image">
                <img src={image} alt={image} />
              </div>
              <article className="bio-card__content">
                <div className="bio-card__description left-right">
                  <Heading type="5" label={contentname} />
                  <P label={descriptionText} />
                </div>
                <div className="bio-cta">
                  <span className="cta__link cta--arrow">{button}</span>
                </div>
              </article>
            </a>
          )}
        </div>
      </div>
      <Modal content={biodata(image2, contentname, descriptionText, descriptionText2)} />
    </>
  );
};

BioCard.defaultProps = {
  size: 'medium',
  hovercolor: 'yellow',
};
