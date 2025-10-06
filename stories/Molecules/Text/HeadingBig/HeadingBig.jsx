// import React, { useEffect } from 'react';
import './headingbig.scss';
// import '../../../assets/scss/_grid.scss';
import { Heading } from '../../../Atom/Typography/Heading/Heading';
import { List } from '../../../Atom/Typography/Lists/Lists';
// import { changeBackground } from '../../../assets/js/smooth-bg-change';

// export const transition_options = {
//   true: 'heading-big',
//   false: 'heading-container',
// };

export function HeadingBig({
  headerText, descriptionText, listData, dataViewport, ...args
}) {
  // useEffect(() => {
  //   changeBackground('.heading-big');
  // }, []);

  // const transition_variant = transition_options[`${args.Emphasize}`];
  // const intFunc = args.Emphasize ? 'change-background' : '';

  return (
    <div className="grid-x align-center heading-big" data-viewport={dataViewport} data-undpds-component="change-background">
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
}

// HeadingBig.defaultProps = {
//   Emphasize: 'true',
// };
