import React from 'react';
import PropTypes from 'prop-types';
import { Blockquote } from '../../../Atom/Base-typography/Blockquote/blockquote';
import { Cite } from '../../../Atom/Base-typography/Cite/cite';
import './blockquotecomp.scss';

export const BlockquoteComponent = ({blockquoteText, citeText, style, props}) => {
  return (
    <div className={['blockquote-wrapper',`blockquote-wrapper--${style}`].join(' ')} {...props}>
      <Blockquote text={blockquoteText} />
      <Cite label={citeText} />
    </div>
  );
};

BlockquoteComponent.propTypes = {
   blockquoteText: PropTypes.string.isRequired,
   citeText: PropTypes.string.isRequired,
};
