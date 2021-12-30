import React from 'react';
import './ProgressBarNavigation.scss';
import '../../../assets/js/scrollingProgressbar';

export const ProgressBarNavigation = ({ Type, Colors }) => {
  let type;
  const types = ['Small'];
  type = types.includes(Type) ? Type.toLowerCase() : '';

  return (
    <div className={['progress-container', `${type}`].join(' ')}>
      <div className={['progress-bar', `${Colors}`].join(' ')} />
    </div>
  );
};
