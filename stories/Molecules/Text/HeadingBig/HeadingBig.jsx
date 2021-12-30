import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './headingbig.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import '../../../assets/js/smoothbgchange';

export const transition_options = {
  true: 'heading-big',
  false: 'heading-container',
};

export const HeadingBig = ({ headerText, descriptionText, ...args }) => {
  useEffect(() => {
    viewport('.heading-big');
    viewport('.heading-big h2');
    viewport('.heading-big h4');
    viewport('.heading-container h2');
    viewport('.heading-container h4');
  }, []);
  return (
    <div data-color="blue" className={['grid-x align-center', `${transition_options[`${args.Emphasize}`]}`].join(' ')}>
      <div className="cell  medium-4">
        <Heading className="left-right" type="2" label={headerText} />
      </div>
      <div className="cell  medium-6">
        <Heading className="left-right" type="4" label={descriptionText} />
      </div>
    </div>
  );
};

HeadingBig.defaultProps = {
  Emphasize: 'true'
};
