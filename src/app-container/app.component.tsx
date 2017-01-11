import * as React from 'react';
export const AppComponent:React.StatelessComponent<any> = ({buttonClicks, sendButtonClick}) => {
        return (
            <section>
                    <h1>Hello, World!</h1>
                    <button onClick={sendButtonClick}>Click me</button>
                    <h2>Button Clicks: {buttonClicks.length}</h2>
            </section>
        );
}