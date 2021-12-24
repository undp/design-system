import React from 'react';
import { P } from '../Paragraph/Paragraph';
import '../../../assets/scss/_typography.scss';

export const Hr = ({ detailsText }) => (
  <>
    <P label={detailsText} />
    <hr />
    <P label={detailsText} />
    <hr />
  </>
);
