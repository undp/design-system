import React from 'react';
import { P } from '../Base-Typography/Paragraph/Paragraph';
import { Heading } from '../Typography/Heading/Heading';

export const Projectcolumn = ({
  headertext, subtext,
}) => (
  <>
    <Heading type="6" label={headertext} />
    <P label={subtext} />
  </>
);
