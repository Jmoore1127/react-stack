import * as _ from 'lodash';
import {Action} from '../../../config/action.interface';
import {ReduxRegistration} from "../../../config/redux-registration.interface";
import {handleActions,createAction} from "redux-actions";
import {IClickButton} from "./click-button.interface";

export const ClickButtonAction = "CLICK_BUTTON";
const stateArea:string = 'clicks';
export const createButtonClick = createAction(ClickButtonAction, ()=>  ({timestamp: new Date()}));

const defaultState = {
    buttonClicks: []
};

const buttonClickReducer = handleActions({
    [ClickButtonAction]: (state, action:Action<IClickButton>) => {
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

export default <ReduxRegistration>{
    reducers: [{name: stateArea, reducer: buttonClickReducer}]
}