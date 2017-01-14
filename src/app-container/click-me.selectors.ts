import * as _ from 'lodash';
import {createSelector} from 'reselect';
import {IClickButton} from "./click-me.redux";
export const buttonClicksSelector = (state):IClickButton[] => state.app.clicks.buttonClicks;
export const makeButtonClicksCountSelector = ()=>{
    return createSelector(
        buttonClicksSelector,
        (buttonClicks:IClickButton[]):number =>{
            return buttonClicks.length;
    });
};
export const makeButtonClicksHistogramSelector = ()=>{
    return createSelector(
        buttonClicksSelector,
        (buttonClicks:IClickButton[]):{[key:number]:number}=>{
            let histogram = {};
            _.each(buttonClicks, (click:IClickButton)=>{
                let minutes = click.timestamp.getMinutes();
                let seconds = click.timestamp.getSeconds();
                let bucket = `${minutes}-${seconds}`;
                if(!histogram[bucket]){
                    histogram[bucket] = 1;
                }else{
                    histogram[bucket]++;
                }
            });
            return histogram;
        });
};