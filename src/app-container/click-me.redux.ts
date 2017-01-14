import * as _ from 'lodash';
import {Action} from '../../config/action.interface';
import {ReduxRegistration} from "../../config/redux-registration.interface";
import {handleActions} from "redux-actions";

export const ClickButtonAction = "CLICK_BUTTON";
export interface IClickButton {timestamp:Date}
const stateArea:string = 'clicks';
export function createButtonClickAction():Action<IClickButton>{
    return {
        type: ClickButtonAction,
        payload:{
            timestamp: new Date()
        }
    }
}
const defaultState = {
    buttonClicks:[]
};

const buttonClickReducer = handleActions({
    [ClickButtonAction]: (state, action: Action<IClickButton>) => {
        return _.merge({}, state,{
            buttonClicks:[
                ...state.buttonClicks,
                {
                    timestamp:action.payload.timestamp
                }
            ]
        });
    }
},defaultState);

export default <ReduxRegistration>{
    reducers:[{name:stateArea,reducer:buttonClickReducer}],
    logic: []
}