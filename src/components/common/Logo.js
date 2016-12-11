import React from 'react';
import logo from '../../assets/logo.svg';
import './Logo.scss';

const Logo = ({ size }) => (
  <a href="/">
    <img src={logo} className={size} alt="logo" />
  </a>
);

export default Logo;
