import {
    ILogic,
    IReducer
} from "./";

export interface IReduxRegistration {
    reducers:IReducer[];
    logic:ILogic[];
}