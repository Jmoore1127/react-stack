import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as React from 'react';
import {Link} from "react-router";
import {DevTools} from "../../../config/dev-tools.component";
const styles = require('./app.component.scss');

export const AppComponent = ({children}) => (
  <MuiThemeProvider>
    <section className={styles.appWrapper}>
      <AppBar className={styles.siteNav} iconStyleLeft={{display: 'none'}}
              title={
                <ul>
                  <li className={styles.navItem}><Link to="/" onlyActiveOnIndex>Home</Link></li>
                  <li className={styles.navItem}><Link to="/click">Click Game</Link></li>
                  <li className={styles.navItem}><Link to="/todo">Todos</Link></li>
                </ul>}/>
      <section className={styles.appContent}>
        {children}
      </section>
      <DevTools></DevTools>
    </section>
  </MuiThemeProvider>
);
