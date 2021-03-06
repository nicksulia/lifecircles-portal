import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import View from '../../components/search/Search.js';
import mapStateToProps from './state-to-props.js';
import { setFiltersList, filterSpecialists } from '../../actions/filterActions.js';


const actionCreators = {
    setFiltersList: setFiltersList,
    filterSpecialists: filterSpecialists
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const FilterBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(View);

export default FilterBar;
