import React, { PureComponent } from 'react';

import * as  specialists from '../../metadata/specialists.json';
import './style.scss';

import SpecialistsBlock from './SpecialistsBlock.js';
const { compose, withProps, withHandlers } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} = require("react-google-maps");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const MapWithAMarkerClusterer = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDv_U_JpFIV_aVs0ECVVhxPcGI9-9Zu7gQ&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px`, width: `700px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withHandlers({
        onMarkerClustererClick: () => (markerClusterer) => {
            const clickedMarkers = markerClusterer.getMarkers();
            console.log(`Current clicked markers length: ${clickedMarkers.length}`);
            console.log(clickedMarkers)
        },
    }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 50.3587, lng: 30.452921 }}
    >
        <MarkerClusterer
            onClick={props.onMarkerClustererClick}
            averageCenter
            enableRetinaIcons
            gridSize={60}
        >
            {props.markers.map(marker => (
                <Marker
                    onClick={()=> {console.log(marker)}}
                    key={marker.id}
                    position={{ lat: parseFloat(marker.latitude), lng: parseFloat(marker.longitude) }}
                />
            ))}
        </MarkerClusterer>
    </GoogleMap>
);

class DemoApp extends PureComponent {
    componentWillMount() {
        this.setState({ markers: [] })
    }

    componentDidMount() {

        console.log(specialists.data);
        this.setState({
            markers: specialists.data
        })
    }

    render() {
        return (
            <div className = "map-component-wrapper">
                <SpecialistsBlock/>
                <MapWithAMarkerClusterer markers={this.state.markers} />
            </div>
        )
    }
}

export default DemoApp;