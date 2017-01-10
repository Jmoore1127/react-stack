import {Action} from "./action";
export interface Reducer{
    name:string;
    reducer:(state,action:Action<any>)=>any;
}