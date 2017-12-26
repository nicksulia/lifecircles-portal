import React, { PureComponent } from 'react';
import Select from '../../elements/select';

class FilterBar extends PureComponent {

    render() {
        return (

            <Select groups={this.props.groups}/>
        );
    }
}

export default FilterBar;