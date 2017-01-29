import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import {createButtonClick} from './redux/click-me.redux';
import {
    makeButtonClicksCountSelector,
    makeButtonClicksHistogramSelector
} from "./redux/click-me.selectors";
import {ClickComponent} from "./click/click.component";

function mapStateToProps(state) {
    return {
        buttonClicks: makeButtonClicksCountSelector()(state),
        buttonClicksHistogram: makeButtonClicksHistogramSelector()(state)
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({sendButtonClick:createButtonClick},dispatch);
}

export const ClickContainer = connect(mapStateToProps, mapDispatchToProps)(ClickComponent);
