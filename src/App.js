import React, { useState } from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";

import Modal from "../src/components/Modal/Modal";

import "./App.css";

function App() {
  const MY_ACCESS_TOKEN =
    "pk.eyJ1IjoieW91bmdoeXVuaGFuIiwiYSI6ImNsYzdqNjB1ODE5Z2szcGw4d2Z5NjQyMWUifQ.WaDzYMTuTv6UROCimI0H2g";

  return (
    <div className="App">
      <Map
        initialViewState={{
          longitude: -100,
          latitude: 40,
          zoom: 3.5,
        }}
        style={{ width: "100vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={MY_ACCESS_TOKEN}
      >
        <FullscreenControl />
        <GeolocateControl />
        <NavigationControl />
        <Modal />
      </Map>
      <Modal />
    </div>
  );
}

export default App;
