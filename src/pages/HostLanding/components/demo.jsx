import React, { useState } from "react";

import MapPicker from "react-google-map-picker";

const DefaultLocation = { lat: 10, lng: 106 };
const DefaultZoom = 10;

export default function Demo() {
    const [defaultLocation, setDefaultLocation] = useState(DefaultLocation);

    const [location, setLocation] = useState(defaultLocation);
    const [zoom, setZoom] = useState(DefaultZoom);

    function handleChangeLocation(lat, lng) {
        setLocation({ lat: lat, lng: lng });
    }

    function handleChangeZoom(newZoom) {
        setZoom(newZoom);
    }

    function handleResetLocation() {
        setDefaultLocation({ ...DefaultLocation });
        setZoom(DefaultZoom);
    }

    return (
        <>
            {/* <button onClick={handleResetLocation}>Reset Location</button> */}
            {/* <label>Latitute:</label> */}
            <input type="text" value={location.lat} disabled hidden />
            {/* <label>Longitute:</label> */}
            <input type="text" value={location.lng} disabled hidden />
            {/* <label>Zoom:</label> */}
            <input type="text" value={zoom} disabled hidden />

            <MapPicker
                defaultLocation={defaultLocation}
                zoom={zoom}
                style={{ height: "700px" }}
                onChangeLocation={handleChangeLocation}
                onChangeZoom={handleChangeZoom}
                apiKey="AIzaSyBrCu57oEymo7VK-gTCouW3cdIGyv3Mmt4"
            />
        </>
    );
}
