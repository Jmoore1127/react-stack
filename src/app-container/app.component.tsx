import * as React from 'react';
import * as _ from 'lodash';
export const AppComponent: React.StatelessComponent<{buttonClicks: number, buttonClicksHistogram: {[key: number]: number}, sendButtonClick: () => void}> =
    ({buttonClicks, buttonClicksHistogram, sendButtonClick}) => {
        return (
            <section>
                <h1>Hello, World!</h1>
                <button onClick={sendButtonClick}>Click me</button>
                <h2>Button Clicks: {buttonClicks}</h2>
                <h2>Histogram</h2>
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