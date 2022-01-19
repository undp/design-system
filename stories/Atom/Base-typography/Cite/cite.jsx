import React from 'react';
import './cite.scss';
import { P } from '../Paragraph/Paragraph';

export const Cite = ({ label }) => (
  <P label={<cite>{label}</cite>} />
);
