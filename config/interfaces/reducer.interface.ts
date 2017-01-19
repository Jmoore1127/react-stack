import {IAction} from './';
export interface IReducer {
    name: string;
    reducer: (state, action: IAction<any>) => any;
}