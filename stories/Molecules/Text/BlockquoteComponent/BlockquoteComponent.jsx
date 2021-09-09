import React from 'react';
import PropTypes from 'prop-types';
import { Blockquote } from '../../../Atom/Base-typography/Blockquote/Blockquote';
import { Cite } from '../../../Atom/Base-typography/Cite/Cite';
import './blockquotecomp.scss';

export const BlockquoteComponent = ({ size, ...props }) => {
  return (
    <div className={['blockquote-wrapper',`blockquote-wrapper--${size}`].join(' ')}   {...props}>  
        <Blockquote text='UNDP works in about 170 countries and territories, helping to achieve the eradication of poverty, and the reduction of inequalities and exclusion.' />
        <Cite text='—Firstname Lastname' />
    </div>
  );
};


BlockquoteComponent.propTypes = {
  size: PropTypes.oneOf(['Gray', 'Yellow', 'Transparent'])
};

BlockquoteComponent.defaultProps = {
  size: 'Gray',
};