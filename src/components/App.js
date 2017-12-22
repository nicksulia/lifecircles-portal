import React, { PureComponent } from 'react';
import Map from './map/Map.js';
import FilterBar from './search/filter-bar/FilterBar.js';

class App extends PureComponent {
    render() {
        return (
            <div>
                <div className="block block01" ></div>
                <div className="block block02" ></div>
                <div className="block block03" >
                    <FilterBar/>
                    <Map/>
                </div>
                <div className="block block04" ></div>
                <div className="block block05" ></div>
                <div className="block block06" ></div>
            </div>
        );
    }
}

export default App;