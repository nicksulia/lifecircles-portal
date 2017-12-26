import React, { PureComponent } from 'react';
import Select from '../../elements/select';

class FilterBar extends PureComponent {
    constructor(props) {
        super(props);
        this.filterHandle = this.filterHandle.bind(this);
    }

    componentDidUpdate(){
        this.props.filterSpecialists(this.props.filters, this.props.specialists);
    }

    filterHandle(group, value, id) {
        this.props.setFiltersList(group, value, id);
    }

    render() {
        return (

            <Select onHandleClick = {this.filterHandle}  groups={this.props.groups}/>
        );
    }
}

export default FilterBar;