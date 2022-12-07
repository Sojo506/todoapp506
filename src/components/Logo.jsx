import React from 'react';
import logo from '../imgs/logo.png';
import styles from  '../styles/Logo.module.css';

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img 
        src={logo} 
        className={styles.logo} 
        alt='morty logo' />
    </div>
  );
}

export default Logo;
