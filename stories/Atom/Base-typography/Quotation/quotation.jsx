import React from 'react';
import './quotation.scss';

export const Quotation = ({ label }) => {
  return (
    <p>
      <q>
        {label}
      </q>
    </p>
  );
};
