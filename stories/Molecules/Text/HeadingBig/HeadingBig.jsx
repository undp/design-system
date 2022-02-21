import React, { useEffect } from 'react';
import './headingbig.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { List } from '../../../Atom/Typography/Lists/Lists';
import { changeBackground } from '../../../assets/js/smooth-bg-change';

export const transition_options = {
  true: 'heading-big',
  false: 'heading-container',
};

export const HeadingBig = ({
  headerText, descriptionText, listData, dataViewport, ...args
}) => {
  useEffect(() => {
    changeBackground('body', '.heading-big');
  }, []);

  let transition_variant = transition_options[`${args.Emphasize}`];
  return (
    <div data-color="blue" data-viewport={dataViewport} className={['grid-x align-center', `${transition_variant}`].join(' ')}>
      <div className="cell medium-4">
        <Heading type="2" label={headerText} />
      </div>
      <div className="cell medium-6">
        <Heading type="4" label={descriptionText} />
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
