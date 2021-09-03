import React from 'react';
import { Blockquote } from '../../Base-typography/Blockquote/Blockquote';
import { Cite } from '../../Base-typography/Cite/Cite';
import './blockquotecomp.scss';

/**
 * Primary UI component for user interaction
 */
export const BlockquoteComponent = () => {
  return (
    <div className="bbb">
        <Blockquote text='UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.' />
        <Cite text='—Firstname Lastname' />
    </div>
  );
};
