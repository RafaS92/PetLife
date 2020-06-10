import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as locationData from "../data/locationData.json";

function Map() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <GoogleMap
      defaultZoom={11.3}
      defaultCenter={{ lat: 29.7604, lng: -95.3698 }}
    >
      {locationData.features.map((location) => (
        <Marker
          key={location.id}
          position={{ lat: location.Lat, lng: location.Log }}
          icon={{
            url: "https://img.icons8.com/plasticine/2x/dog-footprint.png",
            scaledSize: new window.google.maps.Size(35, 35),
          }}
          onClick={() => {
            setSelectedLocation(location);
          }}
        />
      ))}

      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.Lat, lng: selectedLocation.Log }}
          onCloseClick={() => {
            setSelectedLocation(null);
          }}
        >
          <div>
            <a
              href={`https://maps.google.com/maps/search/?api=1&query=${selectedLocation.Lat},${selectedLocation.Log}`}
            >
              <h6>{selectedLocation.Address}</h6>
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function Location() {
  return (
    <div
      style={{
        width: "100vh",
        height: "100vh",
        margin: "auto",
        marginTop: "35px",
      }}
    >
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDJvg5WPlOh_7Y6IHPCItqZTVQTCpC9aqs`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
