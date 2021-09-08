import React from 'react';
import './accordion_custom';
import './FaqNew.scss'

export const FaqNew = () => {
  return (
    <div className="accordion">
    <div className="accordion-head">
        <h4>Section A</h4><div className="arrow down"></div>

    </div>
    <div className="accordion-body">
        <p>Lorem Ipsum is sfnti nting and typesetting industry dummy text o g and typesetting industry.</p>
    </div>
    <div className="accordion-head">
        	<h4>Section B</h4><div className="arrow down"></div>

    </div>
    <div className="accordion-body">
        <p>Lorem Ipsum is sfnti nting and typesetting industry dummy text o g and typesetting industry.</p>
    </div>
</div>
  );
};
