import React from 'react';
import './loader.scss';

export default ({ className = '' }) => {
  return (
    <div className="loader_wrapper">
      <div className={`lds-default ${className}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
