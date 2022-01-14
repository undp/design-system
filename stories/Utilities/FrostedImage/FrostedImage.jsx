import React from 'react';
import './frostedimage.scss';
import BackgroundImg from '../../assets/images/bees.svg';

export const FrostedImage = () => (
  <div className="frosted-background">
    <img src={BackgroundImg} alt={BackgroundImg} />
  </div>
);
