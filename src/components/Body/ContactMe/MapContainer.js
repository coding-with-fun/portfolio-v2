import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import React, { Component } from "react";

const mapStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "20px",
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={11}
                style={mapStyles}
                initialCenter={{
                    lat: 22.997666,
                    lng: 72.60709,
                }}
            >
                <Marker />
            </Map>
        );
    }
}

MapContainer = GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API,
})(MapContainer);
