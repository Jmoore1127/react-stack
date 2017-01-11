import {AppComponent} from "./app.component";
import {connect} from "react-redux";
import {createButtonClickAction} from "./click-me.redux";

interface StateProps {
    buttonClicks: number;
}
interface DispatchProps {
    sendButtonClick;
}

type StateDemoProps = StateProps & DispatchProps;
function mapStateToProps(state) {
    return {
        buttonClicks: state.app.clicks.buttonClicks
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendButtonClick: () => dispatch(createButtonClickAction())
    };
}

export const AppContainer = connect<StateProps,DispatchProps,any>(mapStateToProps, mapDispatchToProps)(AppComponent);