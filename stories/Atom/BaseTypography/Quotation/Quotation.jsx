import React from 'react';
import './quotation.scss';

export function Quotation({ label }) {
  return (
    <p>
      <q>
        {label}
      </q>
    </p>
  );
}
