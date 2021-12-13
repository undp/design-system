import React from 'react';
import './downloadrow.scss';
import { Checkbox } from '../../Components/Forms/Checkbox/Checkbox';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export const DownloadRow = ({
  title, subtitle, value, datalang, ...args
}) => (
  <div className="selectbox-container" data-lang={datalang}>
    <div className="selectbox-container__main">
      <div className="selectbox-container__data">
        <Heading type="6" label={title} />
        <span>{subtitle}</span>
      </div>
      {args.type === 'Checkbox' && <Checkbox value={value} /> }
      {args.type === 'Download' && <span className="selectbox-container__chevron download-icon" /> }
      {args.type === 'External_link' && <span className="selectbox-container__chevron external-link" /> }
    </div>
  </div>
);

DownloadRow.defaultProps = {
  type: 'Checkbox',
};
