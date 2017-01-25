import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import * as React from 'react';
import {Link} from "react-router";
import {DevTools} from "../../../config/dev-tools.component";
const styles: any = require('./app.component.scss');

export const AppComponent: React.StatelessComponent<{children: any}> =
  ({children}) => {
    return (
      <MuiThemeProvider>
        <section className={styles.appWrapper}>
          <AppBar className={styles.siteNav} iconStyleLeft={{display:'none'}}
                  title={
                     <ul>
                        <li className={styles.navItem}><Link to="/" onlyActiveOnIndex >Home</Link></li>
                        <li className={styles.navItem}><Link to="/click" >Click Game</Link></li>
                        <li className={styles.navItem}><Link to="/todo" >Todos</Link></li>
                    </ul>}/>
          <section className={styles.appContent}>
            {children}
          </section>
          <DevTools></DevTools>
        </section>
      </MuiThemeProvider>
    );
  };
