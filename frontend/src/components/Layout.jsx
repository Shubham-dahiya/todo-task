import React from 'react';
import classes from './Layout.module.scss';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <main className={classes.container}>{children}</main>
  );
}

export default Layout;
