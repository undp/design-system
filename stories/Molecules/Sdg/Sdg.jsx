import React from 'react';
import './sdg.scss';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export const Sdg = ({ data, imgsrc, title }) => (
  <>
    {data.map((item, index) => (
      <a href={[`${item.anchor}`]} className={['sdg-card', `${item.bgcolor}`].join(' ')} key={index} aria-label={item.bgcolor}>
        <strong data-viewport="true" className="delay-1">{index + 1}</strong>
        <Heading type="4" className="delay-1" label={item.text} dataViewport="true"/>
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

