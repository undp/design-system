import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';
import './card.css';

export const Card = ({}) => {
  return (
    <div className="col-4">
        <a href="#" className="article-card regular ">
        <article className="content">
            <div className="title-description">
                <h3 className="heading h5">UNDP Administrator visits Haiti</h3>
                <p className="small-copy">
                Administrator Achim Steiner and UN Deputy Secretary-General Amina Mohammed will visit areas affected by the 7.2-magnitude earthquake.
                </p>
            </div>
            <div className="cta">
                <div className="text-link arrow-2 ">
                <Button primary size="small" label="Read more"></Button>
                </div>
            </div>
        </article>
        </a>
    </div>
  );
};

Card.propTypes = {

};

Card.defaultProps = {

};
