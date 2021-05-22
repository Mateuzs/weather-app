// external
import React, { FunctionComponent, memo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
// types
import {
  WeatherMapContainerProps,
  WeatherMapChangeViewProps,
  DeviceType,
} from "../../types";
// styles
import "./WeatherMapContainer.scss";

const buildMapContainerStyleObject = (deviceType: DeviceType) => {
  switch (deviceType) {
    case DeviceType.DESKTOP:
      return { height: "500px", width: "500px" };
    case DeviceType.MOBILE:
      return { height: "300px", width: "300px" };
  }
};

// Leaflet external map object can be updated only by it's children
// that's why internal change view component is needed
const WeatherMapChangeView: FunctionComponent<WeatherMapChangeViewProps> = ({
  longitude,
  latitude,
  zoom = 12,
}) => {
  const map = useMap();
  map.setView([latitude, longitude], zoom);
  return null;
};

const WeatherMapContainer: FunctionComponent<WeatherMapContainerProps> = ({
  longitude,
  latitude,
  deviceType,
  zoom = 12,
}) => {
  return (
    <div className="weather-map-container">
      <MapContainer
        center={[latitude, longitude]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={buildMapContainerStyleObject(deviceType)}
      >
        <WeatherMapChangeView
          longitude={longitude}
          latitude={latitude}
          zoom={zoom}
        />
        {/* a special adnotation is a licence requirement in order to use a leaflet map */}
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default memo(WeatherMapContainer);
