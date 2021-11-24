import React from 'react';

export const Descriptionlist = ({ data }) => (
  <dl>
    {data.map((item) => (
      <>
        <dt>{item.label}</dt>
        <dd>{item.text}</dd>
      </>
    ))}
  </dl>
);
