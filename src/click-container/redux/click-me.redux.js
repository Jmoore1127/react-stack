import * as _ from 'lodash';
import {
    handleActions,
    createAction
} from "redux-actions";

const ClickButtonAction = "CLICK_BUTTON";
const stateArea = 'clicks';

const createButtonClick = createAction(ClickButtonAction, () => ({timestamp: new Date()}));

const defaultState = {
  buttonClicks: []
};

const buttonClickReducer = handleActions({
  [ClickButtonAction]: (state, action) => {
    return _.merge({}, state, {
      buttonClicks: [
        ...state.buttonClicks,
        {
          timestamp: action.payload.timestamp
        }
      ]
    });
  }
}, defaultState);

export {ClickButtonAction, createButtonClick};
export default {
  reducers: [
    {
      name: stateArea,
      reducer: buttonClickReducer
    }],
  logic: null
}
