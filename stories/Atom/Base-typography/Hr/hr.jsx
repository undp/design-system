import React from 'react';
import { P } from '../Paragraph/Paragraph';

export const Hr = ({ detailsText}) => {
  return (
      <>
      <P label={detailsText} />
      <hr></hr>
      <P label={detailsText}/>  
      <hr></hr>
      </>
  );
};
