import React from 'react';
import './quotation.scss';

export const Quotation = ({ label }) => (
  <p>
    <q>
      {label}
    </q>
  </p>
);

