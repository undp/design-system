import React from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../../Components/UIcomponents/Buttons/CtaLink/CtaLink';
import { P } from '../../../Atom/Base-typography/Paragraph/Paragraph';
import './contentcardwithandwithoutimage.scss';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const image_options = {
  image: 'image',
  color: 'without-image',
};

export const ContentCardWithAndWithoutImage = ({
  data, storyBtn, ...args
}) => (
  <div className="grid-x grid-margin-x content-data">
    {data.map((item, index) => (
      <div key={index} className={cls('cell', `${item.scale}`)}>
        {item.type === 'image'
          ? (
            <div className={cls('content-card', `${item.Hovercolors}`)}>
              <a href={item.link}>
                <Heading type="6" label={item.contenttile} />
                <div className="image">
                  <img src={item.imgback} alt={item.imgback} />
                </div>
                <div className="content-caption">
                  <Heading type="5" label={item.contentname} />
                  <Ctalink label={item.button} button_option="span"/>
                </div>
              </a>
            </div>
          )
          : (
            <></>
          )}
        {item.type === 'color'
          ? (
            <div className={cls('content-card', `${item.BackgroundColor}`, `${item.Hovercolors}`)}>
              <a href={item.link}>
                <Heading type="6" label={item.contenttile} />
                <div className="content-caption">
                  {item.Emphasize === 'true'
                    ? (
                      <Heading type="4" label={item.contentnametwo} />
                    )
                    : (
                      <></>
                    )}
                  {item.Emphasize === 'false'
                    ? (
                      <>
                        <Heading type="5" label={item.contentname} />
                        <P label={item.paragraph} />
                      </>
                    )
                    : (
                      <></>
                    )}
                  <Ctalink label={item.button} button_option="span"/>
                </div>
              </a>
            </div>
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
