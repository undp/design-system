import React from 'react';
import './contentcard.scss';
import '../../../../assets/scss/_grid.scss';
import { Heading } from '../../../../Atom/Typography/Heading/Heading';
import { Ctalink } from '../../Buttons/Cta_link/Cta_link';
import { P } from '../../../../Atom/Base-typography/Paragraph/Paragraph';

const cls = (...classes) => ((classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null);

export const emphasize_options = {
  true: 'card-emphasize',
  false: 'card',
};

export const ContentCardWithOutImage = ({
  data, Hovercolors, Emphasize,
}) => {
  let emphasize_variant = emphasize_options[`${Emphasize}`];
  return (
    <div className="grid-x grid-margin-x">
      {data.map((item, index) => (
        <div key={index} className="cell medium-4">
          <div className={cls('content-card', `${emphasize_variant}`, `${Hovercolors}`)}>
            <a href={item.link}>
              <Heading type="6" label={item.contenttile} />
              <div className="content-caption">
                {Emphasize === 'true'
                  ? (
                    <Heading type="4" label={item.contentnametwo} />
                  )
                  : (
                    <></>
                  )}
                {Emphasize === 'false'
                  ? (
                    <>
                      <Heading type="5" label={item.contentname} />
                      <P label={item.paragraph} />
                    </>
                  )
                  : (
                    <></>
                  )}
                <Ctalink label={item.button} Type="Space" button_option="span"/>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

ContentCardWithOutImage.defaultProps = {
  Emphasize: 'true',
  Hovercolors: 'yellow',
};
