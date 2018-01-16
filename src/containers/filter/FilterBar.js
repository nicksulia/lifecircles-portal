import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import View from '../../components/search/filter-bar/FilterBar.js';
import mapStateToProps from './state-to-props.js';
import { filtersBarStatus } from '../../actions/filterActions.js';


const actionCreators = {
    setBarStatus: filtersBarStatus
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const FilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default FilterBar;