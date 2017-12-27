import React, { PureComponent } from 'react';
import Map from '../containers/map/Map.js';
import Search from '../components/search/Search.js';

class App extends PureComponent {
    render() {
        return (
            <div>
                <div className="block block01" ></div>
                <div className="block block02" ></div>
                <div className="block block03" >
                    <Search/>
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