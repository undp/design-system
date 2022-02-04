import React from 'react';
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
  let transition_variant = transition_options[`${args.Emphasize}`];
  return (
    <div data-color="blue" data-viewport="true" className={['grid-x align-center', `${transition_variant}`].join(' ')}>
      <div className="cell medium-4">
        <Heading type="2" label={headerText} dataViewport="true"/>
      </div>
      <div className="cell medium-6">
        <Heading type="4" label={descriptionText} dataViewport="true"/>
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
