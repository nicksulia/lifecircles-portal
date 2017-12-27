import React, { PureComponent } from 'react';
import SearchBar from './search-bar/SearchBar.js';
import FilterBar from '../../containers/filter/FilterBar.js';
import './styles.scss';

class Search extends PureComponent {
    render() {
        return (
            <div className="search-panel-wrapper">
                <SearchBar/>
                <FilterBar/>
            </div>
        );
    }
}

export default Search;