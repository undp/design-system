import React from 'react';
import './frosted-background.scss';
import BackgroundImg from '../../assets/images/bees.jpg';

export function FrostedImage() {
  return (
    <div className="frosted-background">
      <img src={BackgroundImg} alt={BackgroundImg} />
    </div>
  );
}
