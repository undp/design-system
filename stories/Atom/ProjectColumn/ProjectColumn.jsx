import React from 'react';
import { P } from '../Base-typography/Paragraph/Paragraph';
import { Heading } from '../Base-typography/Heading/Heading';

export const Projectcolumn = ({
  headertext, subtext,
}) => (
  <>
    <Heading type="6" label={headertext} />
    <P label={subtext} />
  </>
);
