import React, { Component } from 'react';
import Map from './map/Map.js';

class App extends Component {
    render() {
        return (
            <div>
                <div className="block block01" ></div>
                <div className="block block02" ></div>
                <div className="block block03" ><Map/></div>
                <div className="block block04" ></div>
                <div className="block block05" ></div>
                <div className="block block06" ></div>
            </div>
        );
    }
}

export default App;