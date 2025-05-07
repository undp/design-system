import React from 'react';
import './loader.scss';

export function Loader({Variant, ...args}) {
  let variantClass;
  switch (Variant) {
    case 'Responsive':
      variantClass = 'loader';
      break;
    case 'Small':
      variantClass = 'loader small';
      break;
    case 'Large':
      variantClass = 'loader large';
      break;
    default:
      variantClass = 'loader';
  }
  return <div className={variantClass} aria-busy="true" aria-live="polite" />;
}
