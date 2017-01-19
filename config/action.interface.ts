export interface Action<T> {
    type: string;
    payload: T;
    meta?:any;
    error:boolean;
}