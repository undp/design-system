import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/Cta_link/Cta_link';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import './contentcardwithandwithoutimage.scss';

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const ContentCardWithAndWithoutImage = ({
  data, storyBtn, ...args
}) => (
  <div className="grid-x grid-margin-x content-data">
    {data.map((item, index) => (
      <div key={index} className={['cell', `${[`${item.scale}`]}`].join(' ')}>

        {item.type === 'image'
          ? (
            <a href={item.link} className={['content-card', 'content-card__image', `${[`${item.Hovercolors}`]}`].join(' ')}>
              <Heading type="6" label={item.contenttile} />
              <div className="card-thumbnail__image">
                <img src={item.imgback} alt={item.imgback} />
              </div>
              <div className="content-card__caption">
                <Heading type="5" label={item.contentname} />
                <Ctalink label={item.button} Type={item.btnType} />
              </div>
            </a>
          )
          : (
            <></>
          )}
        {item.type === 'color'
          ? (
            <a href={item.link} className={['content-card', `${item.BackgroundColor}`, `${[`${item.Hovercolors}`]}`].join(' ')}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-card__caption">
                {item.Emphasize === 'true'
                  ? (
                    <Heading type="4" label={item.contentnametwo} />
                  )
                  : (
                    <></>
                  )}
                {item.Emphasize === 'false'
                  ? (
                    <div className="content-card__caption_cart">
                      <Heading type="5" label={item.contentname} />
                      <P label={item.paragraph} />
                    </div>
                  )
                  : (
                    <></>
                  )}
                <Ctalink label={item.button} Type={item.btnType} />
              </div>
            </a>
          )
          : (
            <></>
          )}
      </div>
    ))}
  </div>
);

ContentCardWithAndWithoutImage.defaultProps = {
  Emphasize: 'true',
  Hovercolors: 'green',
};
