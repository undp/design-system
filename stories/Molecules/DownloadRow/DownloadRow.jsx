import React from 'react';
import './download-row.scss';
import { Checkbox } from '../../Components/Forms/Checkbox/Checkbox';
import { Heading } from '../../Atom/Typography/Heading/Heading';

export function DownloadRow({
  title, subtitle, value, dataValue, ...args
}) {
  return (
    <div className="download-row" {...(dataValue ? { 'data-value': dataValue } : '')}>
      <div className="download-row__main">
        <label htmlFor={`list-${value}`} className="download-row__data">
          {title}
          <span>{subtitle}</span>
        </label>
        {args.type === 'Checkbox' && <Checkbox value={value} id={`list-${value}`} arialabel="checkbox" />}
        {args.type === 'Download' && (
          <a href="#" aria-label="download" target="_blank">
            <span className="download-animated"><i /></span>
            {' '}
          </a>
        )}
        {args.type === 'External_link' && <a href="#" aria-label="external-link-animated" target="_blank"><span className="external-link-animated" /></a>}
      </div>
    </div>
  );
}

DownloadRow.defaultProps = {
  type: 'Checkbox',
};
