import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Select from '../../elements/select';

class FilterBar extends PureComponent {

    static propTypes = {
        setBarStatus: PropTypes.func.isRequired,
        isShown: PropTypes.bool.isRequired
    };

    constructor(props) {
        super(props);
        this.manipulateFilterBar = this.manipulateFilterBar.bind(this);
    }


    manipulateFilterBar() {
        this.props.setBarStatus(!this.props.isShown);
    }

    render() {
        return (

            <Select onHandleClick = {this.manipulateFilterBar} barShown = {this.props.isShown}/>
        );
    }
}

export default FilterBar;
