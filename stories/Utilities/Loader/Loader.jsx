import React from 'react';
import './loader.scss';

export function Loader() {
  return <div className="loader" aria-busy="true" aria-live="polite" />;
}
