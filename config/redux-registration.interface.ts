import {Reducer} from "./reducer.interface";
import {Logic} from "./logic.interface";
export interface ReduxRegistration {
    reducers:Reducer[];
    logic:Logic[];
}