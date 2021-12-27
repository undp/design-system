import React from 'react';
import './ProgressBarNavigation.scss';
import '../../../assets/js/scrollingProgressbar';

export const ProgressBarNavigation = ({ Type }) => {
  let type;
  const types = ['Small'];
  type = types.includes(Type) ? Type.toLowerCase() : '';

  return (
    <div className={['progress-container', `${type}`].join(' ')}>
      <div className="progress-bar" />
    </div>
  );
};
