import * as React from 'react';
const styles:any = require('./welcome.component.scss');

export const WelcomeComponent: React.StatelessComponent<{}> = ({}) => {
    return (
        <section className={styles.welcomeMessage}>
            <h1>Hello from React Hot!</h1>
            <p>Please use the site nav above to browse example pages</p>
        </section>
    )
};
