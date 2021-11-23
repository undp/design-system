import React from 'react';
import './downloadrow.scss';
import { Checkbox } from '../../Components/Forms/Checkbox/Checkbox';

export const DownloadRow = ({
  title, subtitle, value, datalang, ...args
}) => (
  <div className="selectbox-container" data-lang={datalang}>
    <div className="selectbox-container__data">
      <div className="selectbox-container__data--headertext">{title}</div>
      <div className="selectbox-container__data--subtext">{subtitle}</div>
    </div>
    {args.type === 'Checkbox' && <Checkbox value={value} /> }
    {args.type === 'Download' && <span className="selectbox-container__chevron download-icon" /> }
    {args.type === 'External_link' && <span className="selectbox-container__chevron external-link" /> }
  </div>
);

DownloadRow.defaultProps = {
  type: 'Checkbox',
};
