import React from 'react';
import './progress-bar-navigation.scss';
import '../../../assets/js/scrolling_progressbar';

const cls = (...classes) => (classes.filter(Boolean).length > 0) ? classes.filter(Boolean).join(' ') : null;

export const ProgressBarNavigation = ({ Type, Colors }) => {
  let type;
  const types = ['Small'];
  type = types.includes(Type) ? Type.toLowerCase() : '';

  return (
    <div className={cls('progress-container', `${type}`, `${Colors}`)}>
      <div className={'progress-bar'} />
    </div>
  );
};
