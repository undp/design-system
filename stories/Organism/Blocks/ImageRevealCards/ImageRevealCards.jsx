import React, { useEffect } from 'react';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import './imagerevealcards.scss';
import viewport from '../../../assets/js/viewport';

export const ImageRevealCards = ({ data, label }) => {
  useEffect(() => {
    viewport('.reveal-head');
    viewport('.reveal-cards');
  }, []);
  return (
    <>
      {label && <Heading className="reveal-head left-right" type="2" label={label} />}
      <div className="grid-x grid-margin-x reveal-cards left-right">
        {data.map((item, index) => (
          <div key={index} className={['cell', `${item.size}`].join(' ')}>
            <a href={item.link} className="image-card">
              <div className="image-card__content">
                {item.imageback && (<img src={item.imageback} alt={item.imageback} />)}
                {item.contentname && <Heading type="5" label={item.contentname} />}
              </div>
              <span className="cta__link cta--arrow">{item.btnlabel}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
