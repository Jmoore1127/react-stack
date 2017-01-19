import * as _ from 'lodash';
import {
  handleActions,
  createAction
} from "redux-actions";
import {
  IAction,
  IReduxRegistration
} from "../../../config";
import {IClickButton} from "./";

export const ClickButtonAction = "CLICK_BUTTON";
const stateArea: string = 'clicks';

export const createButtonClick = createAction(ClickButtonAction, () => ({timestamp: new Date()}));

const defaultState = {
  buttonClicks: []
};

const buttonClickReducer = handleActions({
  [ClickButtonAction]: (state, action: IAction<IClickButton>) => {
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

export default <IReduxRegistration>{
  reducers: [{name: stateArea, reducer: buttonClickReducer}]
}