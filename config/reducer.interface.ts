import {Action} from "./action.interface";
export interface Reducer {
    name: string;
    reducer: (state, action: Action<any>) => any;
}