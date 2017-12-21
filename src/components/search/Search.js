import React, { PureComponent } from 'react';
import SearchBar from './search-bar/SearchBar.js';
import FilterBar from './filter-bar/FilterBar.js';

class Search extends PureComponent {
    render() {
        return (
            <div>
                <SearchBar/>
                <FilterBar/>
            </div>
        );
    }
}

export default Search;