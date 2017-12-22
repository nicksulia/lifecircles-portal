import React, { PureComponent } from 'react';
import Select2 from 'react-select2-wrapper';

class FilterBar extends PureComponent {
    render() {
        return (
            <Select2
                data={[
                    { text: 'bug', id: 1 },
                    { text: 'feature', id: 2 },
                    { text: 'documents', id: 3 },
                    { text: 'discussion', id: 4 },
                ]}
                options={{
                    placeholder: 'search by tags',
                }}
            />
        );
    }
}

export default FilterBar;