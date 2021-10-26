import React from 'react';
import { P } from '../Paragraph/Paragraph';

export const Hr = ({ detailsText }) => (
  <>
    <P label={detailsText} />
    <hr />
    <P label={detailsText} />
    <hr />
  </>
);
