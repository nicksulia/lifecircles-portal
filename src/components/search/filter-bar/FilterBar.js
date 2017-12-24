import React, { PureComponent } from 'react';
import Select from '../../elements/select';

class FilterBar extends PureComponent {

    render() {
        const options = [


                { label: 'Yellow', value: 'yellow' },
                { label: 'Red', value: 'red' },
                { label: 'Blue', value: 'blue' }


        ];
        return (

            <Select options={options}/>
        );
    }
}

export default FilterBar;