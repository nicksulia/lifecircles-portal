import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import View from '../../components/map/Map.js';
import mapStateToProps from './state-to-props.js';
import { setSpecialist, getSpecialistsCall } from '../../actions/mapActions.js';

const actionCreators = {
    setSpecialist: setSpecialist,
    getSpecialists: getSpecialistsCall
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const Map = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default Map;
