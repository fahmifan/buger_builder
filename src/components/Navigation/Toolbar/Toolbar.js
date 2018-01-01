import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavigationItems/NavItems';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div>Menu</div>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;