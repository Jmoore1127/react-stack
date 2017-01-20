import * as React from 'react';
import {DevTools} from "../../../config/dev-tools.component";
import {Link} from "react-router";
const styles: any = require('./app.component.scss');

export const AppComponent: React.StatelessComponent<{children: any}> =
    ({children}) => {
        return (
            <section>
                <nav className={styles.siteNav}>
                    <ul>
                        <li className={styles.navItem}><Link to="/" onlyActiveOnIndex activeClassName={styles.navItemActive}>Home</Link></li>
                        <li className={styles.navItem}><Link to="/click" activeClassName={styles.navItemActive}>Click Game</Link></li>
                        <li className={styles.navItem}><Link to="/todo" activeClassName={styles.navItemActive}>Todos</Link></li>
                    </ul>
                </nav>
                <section className={styles.appContent}>
                    {children}
                </section>
                <DevTools></DevTools>
            </section>
        );
    };