import React from 'react';
import { Blockquote } from '../../../Atom/Base-typography/Blockquote/blockquote';
import './blockquotecomp.scss';

export const BlockquoteComponent = ({ blockquoteText, citeText, Colors }) => (
  <>
    {Colors == 'default' ? (
      <Blockquote text={blockquoteText} citeText={citeText}>
        {' '}
      </Blockquote>
    ) : (
      <div className={['blockquote', `${Colors}`].join(' ')}>
        <Blockquote text={blockquoteText} citeText={citeText}>
          {' '}
        </Blockquote>
      </div>
    )}
  </>
);
