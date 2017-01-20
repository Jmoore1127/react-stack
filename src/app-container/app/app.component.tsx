import * as React from 'react';
import * as _ from 'lodash';
import {DevTools} from "../../../config/dev-tools.component";

export const AppComponent:React.StatelessComponent<{children:any}> =
    ({children}) => {

      return (
          <section>
            <DevTools></DevTools>
            <nav>Here is a nav</nav>
            <section>
              {children}
            </section>
          </section>
      );
    };