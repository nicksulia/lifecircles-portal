import React, { PureComponent } from 'react';
import Map from '../containers/map/Map.js';
import Search from '../components/search/Search.js';
import './styles.scss';

class App extends PureComponent {
    render() {
        return (
            <div>
                <div className="block block01" ></div>
                <div className="block block02" ></div>
                <div className="block block03" >
                    <div className = "section-header">ORGANIZATIONS AND SPECIALISTS</div>
                    <Search/>
                    <Map/>
                    <div className = "section-footer"><i className="heart-icon"/>Share your experience. <a href="#">Add an organization</a> you can recommend.</div>
                </div>
                <div className="block block04" ></div>
                <div className="block block05" ></div>
                <div className="block block06" ></div>
            </div>
        );
    }
}

export default App;