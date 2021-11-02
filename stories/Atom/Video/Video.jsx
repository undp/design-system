import React from 'react';
import './video.scss';

export const Video = ({ src, width, height }) => (
  <video
    width={width}
    height={height}
    preload="auto"
    autoPlay="autoplay"
    muted
    loop
  >
    <source src={src} type="video/mp4" />
    <track kind="captions" srcLang="en" label="english_captions" />
    <track kind="captions" srcLang="ar" label="arabic_captions" />
    Your browser does not support HTML5 video.
  </video>
);
