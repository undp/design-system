import React, { useEffect } from 'react';
import viewport from '../../../assets/js/viewport';
import './headingbig.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { List } from '../../../Atom/Typography/Lists/Lists';
import '../../../assets/js/smooth-bg-change';

export const transition_options = {
  true: 'heading-big',
  false: 'heading-container',
};

export const HeadingBig = ({
  headerText, descriptionText, listData, ...args
}) => {
  useEffect(() => {
    viewport('.heading-big');
    viewport('.heading-big h2');
    viewport('.heading-big h4');
    viewport('.heading-container h2');
    viewport('.heading-container h4');
  }, []);
  let transition_variant = transition_options[`${args.Emphasize}`];
  return (
    <div data-color="blue" className={['grid-x align-center', `${transition_variant}`].join(' ')}>
      <div className="cell  medium-4">
        <Heading className="left-right" type="2" label={headerText} />
      </div>
      <div className="cell  medium-6">
        <Heading className="left-right" type="4" label={descriptionText} />
        {
          listData
          && <List data={listData} type="ul" />
        }
      </div>
    </div>
  );
};

HeadingBig.defaultProps = {
  Emphasize: 'true',
};
