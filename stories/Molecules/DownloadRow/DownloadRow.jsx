import React from 'react';
import './downloadrow.scss';
import { Checkbox } from '../../Components/Forms/Checkbox/Checkbox';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export const DownloadRow = ({
  title, subtitle, value, ...args
}) => (
  <div className="checkbox-container">
    <div className="checkbox-container__main">
      <div className="checkbox-container__data">
        <Heading type="6" label={title} />
        <span>{subtitle}</span>
      </div>
      {args.type === 'Checkbox' && <Checkbox value={value} /> }
      {args.type === 'Download' && <span className="checkbox-container__chevron download-icon" /> }
      {args.type === 'External_link' && <span className="checkbox-container__chevron external-link" /> }
    </div>
  </div>
);

DownloadRow.defaultProps = {
  type: 'Checkbox',
};
