import {Reducer} from "./reducer.interface";
import {Action} from "./action.interface";
import {Logic} from "./logic.interface";
export interface ReduxRegistration {
    actions:Action<any>[];
    reducers:Reducer[];
    logic:Logic[];
}