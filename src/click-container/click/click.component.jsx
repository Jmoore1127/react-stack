import * as React from 'react';
import * as _ from 'lodash';

const styles = require('./click.component.scss');
const otherStyles = require('./other-styles.scss');

export const ClickComponent = ({buttonClicks, buttonClicksHistogram, sendButtonClick}) => (
  <section className={styles.clickGameWrapper}>
    <h1>Welcome to the clicking game!</h1>
    <button onClick={sendButtonClick} className={otherStyles.test}>Click me</button>
    <h2 className={otherStyles.test}>Button Clicks: {buttonClicks}</h2>
    <h2>Histogram (clicks per second)</h2>
    <h3 className={styles.test}>
      {
        _.chain(buttonClicksHistogram)
          .keysIn()
          .map((key, index) => {
            return (<div key={index}><span>{key}=</span><span>{buttonClicksHistogram[key]}</span>
            </div>);
          })
          .value()
      }
    </h3>
  </section>
);
