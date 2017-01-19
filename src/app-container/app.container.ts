import {bindActionCreators} from "redux";
import {AppComponent} from "./app.component";
import {connect} from "react-redux";

import {
    createButtonClick,
    makeButtonClicksCountSelector,
    makeButtonClicksHistogramSelector
} from "./redux/index";

interface StateProps {
    buttonClicks: number;
    buttonClicksHistogram:{[key:number]:number};
}
interface DispatchProps {
    sendButtonClick:()=>void;
}

function mapStateToProps(state) {
    return {
        buttonClicks: makeButtonClicksCountSelector()(state),
        buttonClicksHistogram: makeButtonClicksHistogramSelector()(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendButtonClick:createButtonClick},dispatch);
}

export const AppContainer = connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)(AppComponent);