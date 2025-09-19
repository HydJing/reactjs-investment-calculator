import React from 'react';
import headerLogo from '../assets/investment-calculator-logo.png';

function Header() {
  return (
    <header id="header">
      <img src={headerLogo} alt="Investment Calculator Logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
}

export default Header;