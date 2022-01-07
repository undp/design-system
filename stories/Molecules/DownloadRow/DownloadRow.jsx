import React from 'react';
import './downloadrow.scss';
import { Checkbox } from '../../Components/Forms/Checkbox/Checkbox';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export const DownloadRow = ({
  title, subtitle, value, ...args
}) => (
  <div className="download-row">
    <div className="download-row__main">
      <div className="download-row__data">
        <Heading type="6" label={title} />
        <span>{subtitle}</span>
      </div>
      {args.type === 'Checkbox' && <Checkbox value={value} /> }
      {args.type === 'Download' && (
      <a href="#">
        <span className="download-icon" />
        {' '}
      </a>
      )}
      {args.type === 'External_link' && <a href="#"><span className="external-link" /></a>}
    </div>
  </div>
);

DownloadRow.defaultProps = {
  type: 'Checkbox',
};
