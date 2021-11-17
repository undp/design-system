import React from 'react';
import './singlecontent.scss';
import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Base-typography/Heading/Heading';
import { Ctalink } from '../../../Atom/Buttons-and-labels/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';

export const image_options = {
  true: ' ',
  false: 'card',
};

export const emphasize_options = {
  true: 'card-yellow',
  false: '',
};

export const SingleContent = ({
  data, Image, Emphasize, Hovercolors
}) => (
  <div className="grid-x grid-margin-x">
    {data.map((item, index) => (
      <div key={index} className="cell medium-4">
        <a href={item.link} className={['singlecard', `${image_options[`${Image}`]}`, `${emphasize_options[`${Emphasize}`]}`, `${[`${Hovercolors}`]}`,].join(' ')}>
          <Heading  type="6" label={item.contenttile} />
          {Image === 'true'
            ? (
              <div className="card-thumbnail__image">
                <img src={item.imgback} alt={item.imgback} />
              </div>
            )
            : (
              <></>
            )}
          <div className="singlecard__caption">
            {Emphasize === 'true'
              ? (
                <Heading type="4" label={item.contentnametwo} />
              )
              : (
                <></>
              )}


            {Emphasize === 'false' && Image === 'false'
              ? (
                <div className="singlecard__caption--cart">
                  <Heading type="5" label={item.contentname} />
                  <P label={item.paragraph} />
                </div>
              )
              : (
                <></>
              )}

            {Emphasize === 'false' && Image === 'true'
              ? (
                <>
                  <Heading type="5" label={item.contentname} />
                </>
              )
              : (
                <></>
              )}

            <Ctalink label={item.button} variant="Space" />
          </div>
        </a>
      </div>
    ))}
  </div>
);

SingleContent.defaultProps = {
  Image: 'true',
  Emphasize: 'false',
  Hovercolors: 'yellow'
};
