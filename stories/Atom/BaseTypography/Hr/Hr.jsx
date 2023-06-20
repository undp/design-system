import React from 'react';
import { P } from '../Paragraph/Paragraph';
import '../../../assets/scss/_typography.scss';

export function Hr({ detailsText }) {
  return (
    <>
      <P label={detailsText} />
      <hr />
      <P label={detailsText} />
      <hr />
    </>
  );
}
