import React from 'react';
import logo from '../../assets/flexxus-logo.png';
import './style.css';

const LoadingLogo = () => {
  return (
    <div className="loading-logo-container">
      <img className="loading-logo" src={logo} alt="LOG" />
    </div>
  );
};

export default LoadingLogo;