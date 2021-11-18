import React from 'react';
import PropTypes from 'prop-types';
import { Blockquote } from '../../../Atom/Base-typography/Blockquote/blockquote';
import './blockquotecomp.scss';

export const BlockquoteComponent = ({
  blockquoteText, citeText, style, props,
}) => (
  <div className={['blockquote-wrapper', `${style}`].join(' ')} {...props}>
    <Blockquote text={blockquoteText} citeText={citeText}> </Blockquote>
  </div>
);

BlockquoteComponent.propTypes = {
  blockquoteText: PropTypes.string.isRequired,
  citeText: PropTypes.string.isRequired,
};
