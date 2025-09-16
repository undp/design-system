import React from 'react';
import './sdg.scss';
import { Heading } from '../../Atom/Typography/Heading/Heading';
import isChromatic from "chromatic/isChromatic";

export const Sdg = ({ data, imgsrc, title }) => (
  <>
    {data.map((item, index) => (
      <a href={[`${item.anchor}`]} className={['sdg-card', `${item.bgcolor}`].join(' ')} key={index} aria-label={item.bgcolor} tabindex="0">
        <strong data-viewport={isChromatic() ? '' : 'true'} className={['delay-1', isChromatic() ? 'inviewport' : ''].join(' ')}>{index + 1}</strong>
        <Heading type="4" label={item.text} data-viewport={isChromatic() ? '' : 'true'} className={['delay-1', isChromatic() ? 'inviewport' : ''].join(' ')} />
        <div className="sdg-image">
          <img src={item.image} alt={item.image} />
        </div>
      </a>
    ))}
    <a className="sdg-card sdg-card-link color-white" href="#" target="_blank">
      <img src={imgsrc} alt={imgsrc} />
      <Heading type="4" label={title} />
    </a>
  </>
);

