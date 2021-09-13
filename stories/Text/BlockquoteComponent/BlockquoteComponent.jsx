import React from 'react';
import PropTypes from 'prop-types';
import { Blockquote } from '../../Base-typography/Blockquote/Blockquote';
import { Cite } from '../../Base-typography/Cite/Cite';
import './blockquotecomp.scss';

/**
 * Primary UI component for user interaction
 */
export const BlockquoteComponent = ({blockquoteText, citeText}) => {
  return (
    <div className="blockquote--component">
        <Blockquote text={blockquoteText} />
        <Cite text={citeText} />
    </div>
  );
};

BlockquoteComponent.propTypes = {
  /**
   * BlockquoteComponent contents
   */
   blockquoteText: PropTypes.string.isRequired,
   citeText: PropTypes.string.isRequired,
};

