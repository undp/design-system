import React, { useEffect } from 'react';
import './bio-card.scss';
import '../../../../assets/scss/_grid.scss';
import { modal } from '../../../../assets/js/modal';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';
import { Modal } from '../../Modal/Modal';
import { Ctalink } from '../../Buttons/CtaLink/CtaLink';

export const biodata = (image2, contentname, descriptionText, descriptionText2) => (
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

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const size_options = {
  large: 'large-12',
  medium: 'large-3',
};

export const hover_color_options = {
  yellow: '',
  green: 'green',
  red: 'red',
  blue: 'blue',
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
    modal();
  }, []);

  let size_variant = size_options[`${args.size}`];
  let hovercolor_variant = hover_color_options[`${args.hovercolor}`];

  return (
    <>
        {args.size === 'large' && (
          <div className={cls('grid-x grid-margin-x')}>
            <div className={cls('cell bio-card', `${size_variant}`, `${hovercolor_variant}`)}>
              <a href="#" title="bio-card" role="button" data-toggle="modal" data-target-modal="#bioCard">
                <div className='grid-x'>
                  <article className="bio-card__content medium-7">
                    <div data-viewport="true" className="bio-card__description">
                      <Heading type="5" label={contentname} />
                      <P label={descriptionText} />
                    </div>
                    <Ctalink label={button} button_option="span"/>
                  </article>
                  <div className="card-thumbnail__image medium-5">
                    <img src={image} alt={image} />
                  </div>
                </div>
              </a>
            </div>
          </div>
        )}

          {args.size === 'medium' && (
            <div className={cls('grid-x')}>
              <div className={cls('cell bio-card medium' , `${size_variant}`, `${hovercolor_variant}`)}> 
               <a href="#" title="bio-card" role="button" data-toggle="modal" data-target-modal="#bioCard">
                <div className="card-thumbnail__image">
                  <img src={image} alt={image} />
                </div>
                <article className="bio-card__content">
                  <div data-viewport="true" className="bio-card__description">
                    <Heading type="5" label={contentname} />
                    <P label={descriptionText} />
                  </div>
                  <Ctalink label={button} button_option="span"/>
                </article>
              </a>
            </div>
          </div>
          )}
        
      <Modal id="bioCard" content={biodata(image2, contentname, descriptionText, descriptionText2)} />
    </>
  );
};

BioCard.defaultProps = {
  size: 'medium',
  hovercolor: 'yellow',
};
