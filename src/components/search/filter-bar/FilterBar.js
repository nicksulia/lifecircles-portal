import React, { PureComponent } from 'react';
import Select from '../../elements/select';

class FilterBar extends PureComponent {

    render() {
        const options = [
            {
                label: 'Primary Colors', options: [
                { label: 'Yellow', value: 'yellow' },
                { label: 'Red', value: 'red' },
                { label: 'Blue', value: 'blue' }
            ]
            },
            {
                label: 'Secondary Colors', options: [
                { label: 'Orange', value: 'orange' },
                { label: 'Light Purple', value: 'light_purple' },
                { label: 'Medium Purple', value: 'medium_purple' },
                { label: 'Dark Purple', value: 'dark_purple' },
                { label: 'Green', value: 'green' }
                ]
            }
        ];
        return (

            <Select options={options}/>
        );
    }
}

export default FilterBar;