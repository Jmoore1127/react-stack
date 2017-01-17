import * as React from 'react';
import * as _ from 'lodash';
import {DevTools} from "../../config/redux-dev.component";
export const AppComponent: React.StatelessComponent<{buttonClicks: number, buttonClicksHistogram: {[key: number]: number}, sendButtonClick: () => void}> =
    ({buttonClicks, buttonClicksHistogram, sendButtonClick}) => {
        return (
            <section>
                <DevTools></DevTools>
                <h1>Hello, World!</h1>
                <button onClick={sendButtonClick}>Click me</button>
                <h2>Button Clicks: {buttonClicks}</h2>
                <h2>Histogram (clicks per second)</h2>
                <h3>
                    {
                        _.chain(buttonClicksHistogram)
                            .keysIn()
                            .map((key) => {
                                return (<div><span>{key}=</span><span>{buttonClicksHistogram[key]}</span></div>);
                            })
                            .value()
                    }
                </h3>
            </section>
        );
    };