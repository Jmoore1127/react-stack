import * as _ from 'lodash';
import {createSelector} from 'reselect';

export const buttonClicksSelector = (state) => state.app.clicks.buttonClicks;
export const makeButtonClicksCountSelector = () => createSelector(
  buttonClicksSelector,
  buttonClicks => buttonClicks.length
);

export const makeButtonClicksHistogramSelector = () => {
  return createSelector(
    buttonClicksSelector,
    buttonClicks => {
      let histogram = {};
      _.each(buttonClicks, click => {
        let minutes = click.timestamp.getMinutes();
        let seconds = click.timestamp.getSeconds();
        let bucket = `${minutes}-${seconds}`;
        if (!histogram[bucket]) {
          histogram[bucket] = 1;
        } else {
          histogram[bucket]++;
        }
      });
      return histogram;
    });
};
