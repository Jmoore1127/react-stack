import {bindActionCreators} from "redux";
import {AppComponent} from "./app.component";
import {connect} from "react-redux";
import {createButtonClickAction} from "./click-me.redux";
import {makeButtonClicksCountSelector,makeButtonClicksHistogramSelector} from "./click-me.selectors";

interface StateProps {
    buttonClicks: number;
    buttonClicksHistogram:{[key:number]:number};
}
interface DispatchProps {
    sendButtonClick:()=>void;
}

type StateDemoProps = StateProps & DispatchProps;
function mapStateToProps(state) {
    return {
        buttonClicks: makeButtonClicksCountSelector()(state),
        buttonClicksHistogram: makeButtonClicksHistogramSelector()(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendButtonClick:createButtonClickAction},dispatch);
}

export const AppContainer = connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)(AppComponent);