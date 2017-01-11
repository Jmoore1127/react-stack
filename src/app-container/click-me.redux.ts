import {Action} from '../../config/action.interface';
import {ReduxRegistration} from "../../config/redux-registration.interface";
import {handleActions} from "redux-actions";

export const CLICK_BUTTON = "CLICK_BUTTON";
export type ICLICK_BUTTON = {timestamp:Date};
export function createButtonClickAction():Action<ICLICK_BUTTON>{
    return {
        type: CLICK_BUTTON,
        payload:{
            timestamp: new Date()
        }
    }
}
const defaultState = {
    buttonClicks:[]
};

const buttonClickReducer = handleActions({
    [CLICK_BUTTON]: (state, action: Action<ICLICK_BUTTON>) => {
        return Object.assign({}, state,{
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
    reducers:[{name:'clicks',reducer:buttonClickReducer}],
    logic: []
}