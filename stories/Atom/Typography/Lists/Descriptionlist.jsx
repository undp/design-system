import React from 'react';

export const Descriptionlist = ({ data }) => (
  <dl>
    {data.map((item, index) => (
      <React.Fragment key={index}>
        <dt>{item.label}</dt>
        <dd>{item.text}</dd>
      </React.Fragment>
    ))}
  </dl>
);
