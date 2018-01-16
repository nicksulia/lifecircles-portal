import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './search-bar/SearchBar.js';
import FilterBar from '../../containers/filter/FilterBar.js';
import './styles.scss';

class Search extends PureComponent {

    static propTypes = {
        setFiltersList: PropTypes.func.isRequired,
        filterSpecialists: PropTypes.func.isRequired,
        groups: PropTypes.object.isRequired,
        specialists: PropTypes.arrayOf(PropTypes.object).isRequired,
        filters: PropTypes.object.isRequired,
        barShown: PropTypes.bool.isRequired

    };

    componentDidUpdate(){
        this.props.filterSpecialists(this.props.filters, this.props.specialists);
    }

    render() {
        return (
            <div className="control-panel">
                <div className="search-panel-wrapper">
                    <SearchBar/>
                    <FilterBar/>
                </div>
                <div>
                    {
                        this.props.barShown &&
                        <div className="select-categories-container">
                            {
                                Object.keys(this.props.groups).map((group) => {
                                    return (
                                        <div key = {group}>
                                            <div><b>{this.props.groups[group].label}</b></div>
                                            {
                                                this.props.groups[group].options.map((option, id) => {
                                                    return (
                                                        <div key = {option.value} className="categories-element" onClick={() => { this.props.setFiltersList(group, option.value, id) }}>
                                                            <span className="checkbox-container"><span className={option.checked ? "checkbox-checked" : ""}/></span>
                                                            <span>{option.label}</span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Search;